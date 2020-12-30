/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { MetaDataResponse } from './generate-data.types';
const saveFile = promisify(fs.writeFile);

interface GroupData {
  id: string;
  name: string;
  instruments: string[];
}

const renameMap: Record<string, string> = {
  ETF_CFD_US: 'ETFs',
  FX_CROSSES: 'Forex crosses',
  FX_MAJORS: 'Forex majors',
  FX_METALS: 'Forex metals',
  BND_CFD: 'Bonds',
  VCCY: 'Crypto'
};

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
      name: renameMap[metadata.groups[group].id] || metadata.groups[group].title,
      instruments: metadata.groups[group].instruments
        .filter(inst => !!metadata.instruments[inst])
        .map(inst => metadata.instruments[inst].historical_filename || inst.replace(/\W/g, ''))
    });

    return all;
  }, []);

  return saveFile(path, JSON.stringify(data, null, 2)).then(() => {
    console.log('instrument groups generated!', path);
  });
}
