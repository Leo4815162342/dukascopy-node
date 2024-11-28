/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { MetaDataResponse } from './generate-data.types';
import { generateIdName } from './generate-id-name';
const saveFile = promisify(fs.writeFile);

interface GroupData {
  id: string;
  instruments: string[];
}

export function generateInstrumentGroupData(
  metadata: MetaDataResponse,
  path: string
): Promise<void> {
  const currentGroupDataRaw = fs.readFileSync(path, 'utf8');
  const currentGroupData = JSON.parse(currentGroupDataRaw) as GroupData[];

  const data = Object.keys(metadata.groups).reduce<GroupData[]>((all, group) => {
    const hasInstruments = metadata.groups[group]?.instruments?.length;
    if (!hasInstruments) {
      return all;
    }

    const containsItemsInList =
      metadata.groups[group].instruments.filter(inst => !!metadata.instruments[inst]).length > 0;

    if (!containsItemsInList) {
      return all;
    }

    const id = group.toLowerCase().replace(/\s/g, '-');

    const matchedGroup = currentGroupData.find(item => item.id === id);

    if (matchedGroup) {
      matchedGroup.instruments = matchedGroup.instruments.concat(
        metadata.groups[group].instruments
          .filter(inst => !!metadata.instruments[inst])
          .map(inst => generateIdName(metadata.instruments[inst].historical_filename, inst))
      );
    } else {
      all.push({
        id,
        instruments: metadata.groups[group].instruments
          .filter(inst => !!metadata.instruments[inst])
          .map(inst => generateIdName(metadata.instruments[inst].historical_filename, inst))
      });
    }

    return all;
  }, currentGroupData);

  const dedupedGroups = data.map<GroupData>(item => {
    return {
      id: item.id,
      instruments: Array.from(new Set(item.instruments))
    };
  });

  return saveFile(path, JSON.stringify(dedupedGroups, null, 2)).then(() => {
    console.log('instrument groups generated!', path);
  });
}
