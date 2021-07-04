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

    all.push({
      id: group.toLowerCase().replace(/\s/g, '-'),
      instruments: metadata.groups[group].instruments
        .filter(inst => !!metadata.instruments[inst])
        .map(inst => generateIdName(metadata.instruments[inst].historical_filename, inst))
    });

    return all;
  }, []);

  return saveFile(path, JSON.stringify(data, null, 2)).then(() => {
    console.log('instrument groups generated!', path);
  });
}
