import fs from 'fs';
import { promisify } from 'util';
import { instruments, Instrument } from '../src/config/instruments';
const saveFile = promisify(fs.writeFile);

const enumKeys = Object.keys(instruments).map(inst => {
  const { name, description, minStartDate, minStartDateDaily } = instruments[inst as Instrument];

  const line = `
    /**
     * 
     * ### ${description}
     * *${name}*
     * 
     * Timeframe | Start date
     * --- | ---
     * \`tick\` | **${minStartDate}**
     * \`m1\` | **${minStartDate}**
     * \`h1\` | **${minStartDate}**
     * \`d1\` | **${minStartDateDaily}**
     * \`mn1\` | **${minStartDateDaily}**
     * 
     */
    ${inst}='${inst}',`;
  return line;
});

const enumString = [
  '/* eslint-disable prettier/prettier */',
  'export enum INSTRUMENT {',
  ...enumKeys,
  '}'
].join('\n');

const path = './src/config/instrument-enum.ts';

saveFile(path, enumString).then(() => {
  console.log('instrument ENUM saved!', path);
});
