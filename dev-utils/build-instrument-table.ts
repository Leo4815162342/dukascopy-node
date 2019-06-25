import fs from 'fs';
import { promisify } from 'util';

import { instruments } from '../src/config/instruments';

(async () => {
  try {
    const titles = ['Instrument id', 'Instrument name', 'Description', 'Available start date'];

    const header = titles.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = titles.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const body = Object.entries(instruments)
      .map(([id, { name, description, minStartDate }]) => {
        return `|\`${id}\`|${name}|${description}|${minStartDate}|`;
      })
      .join('\n');

    const output = [header, divider, body].join('\n');

    await promisify(fs.writeFile)('./INSTRUMENTS.md', output);
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
