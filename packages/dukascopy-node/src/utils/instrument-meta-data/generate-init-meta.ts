/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { MetaDataResponse } from './generate-data.types';
const saveFile = promisify(fs.writeFile);

export interface InstrumentInitMetaData {
  name: string;
  description: string;
  decimalFactor: number;
}

export function generateInitMeta(
  instruments: MetaDataResponse['instruments'],
  path: string
): Promise<void> {
  const data = Object.keys(instruments).reduce<Record<string, InstrumentInitMetaData>>(
    (all, inst) => {
      const { name, description, pipValue, historical_filename } = instruments[inst];

      const cleanName = historical_filename || inst.replace(/\W/g, '');

      all[cleanName] = {
        name,
        description,
        decimalFactor: 10 / pipValue
      };

      return all;
    },
    {}
  );

  return saveFile(path, JSON.stringify(data, null, 2)).then(() => {
    console.log('Meta data generated!', path);
  });
}
