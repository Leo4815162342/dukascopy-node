/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { InstrumentMetaDataMap } from './generate-meta';
const saveFile = promisify(fs.writeFile);

export function generateInstrumentEnum(fromPath: string, toPath: string): Promise<void> {
  const instrumentsmetaData = fs.readFileSync(fromPath, 'utf8');
  const instrumentsMetaData = JSON.parse(instrumentsmetaData) as InstrumentMetaDataMap;

  const enumKeys = Object.entries(instrumentsMetaData).map(([cleanName, inst]) => {
    const { name, description } = inst;

    const key = /^\d/.test(cleanName) ? `'${cleanName}'` : cleanName;

    const line = `
    /**
     * ### ${description}
     * *${name}*
     */
    ${key}='${cleanName}',`;
    return line;
  });

  const strings = [
    'export enum Instrument {',
    ...enumKeys,
    '}',
    'export type InstrumentType = keyof typeof Instrument;'
  ].join('\n');

  return saveFile(toPath, strings).then(() => {
    console.log('instruments enum generated!', toPath);
  });
}
