import fs from 'fs';
import { promisify } from 'util';
import { instrumentMetaData } from '../src/config/instruments-metadata';
const saveFile = promisify(fs.writeFile);

const enumKeys = Object.keys(instrumentMetaData).map(inst => {
  const { name, description, minStartDate, minStartDateDaily } = instrumentMetaData[inst];

  const line = `
    /**
     * ### ${description}
     * *${name}*
     * 
     * Timeframe | Start date
     * --- | ---
     * \`tick\` | **${minStartDate}**
     * \`m1\` | **${minStartDate}**
     * \`m30\` | **${minStartDate}**
     * \`h1\` | **${minStartDate}**
     * \`d1\` | **${minStartDateDaily}**
     * \`mn1\` | **${minStartDateDaily}**
     */
    ${inst}='${inst}',`;
  return line;
});

const strings = [
  '/* eslint-disable prettier/prettier */',
  'export enum Instrument {',
  ...enumKeys,
  '}',
  'export type InstrumentType = keyof typeof Instrument;'
].join('\n');

const path = './src/config/instruments.ts';

saveFile(path, strings).then(() => {
  console.log('instruments config generated!', path);
});
