import fs from 'fs';
import { promisify } from 'util';

import { instruments, InstrumentMetaData } from 'dukascopy-core';

const groupMap = [
  { group: 'Forex', subs: ['FX_CROSSES', 'FX_MAJORS', 'FX_METALS'] },
  { group: 'Commodities', subs: ['CMD_AGRICULTURAL', 'CMD_ENERGY', 'CMD_METALS'] },
  { group: 'Indicies (CFD)', subs: ['IDX_AMERICA', 'IDX_ASIA', 'IDX_EUROPE'] },
  { group: 'Bonds (CFD)', subs: ['BND_CFD'] },
  { group: 'Austria 🇦🇹', subs: ['Austria'] },
  { group: 'Belgium 🇧🇪', subs: ['Belgium'] },
  { group: 'Denmark 🇩🇰', subs: ['Denmark'] },
  { group: 'Finland 🇫🇮', subs: ['Finland'] },
  { group: 'France 🇫🇷', subs: ['France'] },
  { group: 'Germany 🇩🇪', subs: ['Germany'] },
  { group: 'Netherlands 🇳🇱', subs: ['Netherlands'] },
  { group: 'Norway 🇳🇴', subs: ['Norway'] },
  { group: 'Portugal 🇵🇹', subs: ['Portugal'] },
  { group: 'Spain 🇪🇸', subs: ['Spain'] },
  { group: 'Sweden 🇸🇪', subs: ['Sweden'] },
  { group: 'Switzerland 🇨🇭', subs: ['Switzerland'] },
  { group: 'United Kingdom 🇬🇧', subs: ['UK'] },
  { group: 'United States 🇺🇸', subs: ['US'] },
  { group: 'ETF (CFD)', subs: ['ETF_CFD_US'] },
  { group: 'Crypto', subs: ['VCCY'] }
];

const groups = Object.entries(instruments).reduce(
  (all, [id, instrument]) => {
    const idx = groupMap.findIndex(({ subs }) => subs.includes(instrument.group));

    all[idx].list.push({ ...instrument, id });

    return all;
  },
  groupMap.map(({ group }) => ({ group, list: [] as Array<InstrumentMetaData & { id: string }> }))
);

(async () => {
  try {
    const headers = [
      'Instrument id',
      'Instrument name',
      'Description',
      'Start date (tick, m1, h1)',
      'Start date (d1, mn1)'
    ];

    const header = headers.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = headers.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const output = groups
      .map(({ group, list }) => {
        const groupTitle = `### ${group}`;

        const listBody = list
          .map(({ id, name, description, minStartDate, minStartDateDaily }) => {
            return `|\`${id}\`|${name}|${description}|${minStartDate}|${minStartDateDaily}|`;
          })
          .join('\n');

        return [groupTitle, header, divider, listBody].join('\n');
      })
      .join('\n');

    await promisify(fs.writeFile)('./INSTRUMENTS.md', output);
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
