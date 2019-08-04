import fs from 'fs';
import { promisify } from 'util';

import { instruments } from '../src/config/instruments';

(async () => {
  try {
    const titles = [
      'Instrument id',
      'Instrument name',
      'Description',
      'Start date (tick, m1, h1)',
      'Start date (d1, mn1)'
    ];

    const header = titles.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = titles.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const body = Object.entries(instruments)
      .map(([id, { name, description, minStartDate, minStartDateDaily }]) => {
        return `|\`${id}\`|${name}|${description}|${minStartDate}|${minStartDateDaily}`;
      })
      .join('\n');

    const output = [header, divider, body].join('\n');

    await promisify(fs.writeFile)('./INSTRUMENTS.md', output);
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
