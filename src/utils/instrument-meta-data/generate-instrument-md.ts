/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getFormattedDate } from '../date';
import { InstrumentMetaData } from './generate-meta';

import instrumentGroups from './generated/instrument-groups.json';
import instrumentMetaData from './generated/instrument-meta-data.json';

const saveFile = promisify(fs.writeFile);

const filePath = path.resolve(__dirname, 'generated', 'instruments.md');

const titleMap: Record<string, { emoji: string; title: string }> = {
  bnd_cfd: { emoji: '📊', title: 'Bonds' },
  vccy: { emoji: '₿', title: 'Crypto assets' },
  cmd_agricultural: { emoji: '☕', title: 'Agricultural commodities' },
  cmd_energy: { emoji: '⚡', title: 'Energy commodities' },
  cmd_metals: { emoji: '⚙️', title: 'Metals commodities' },
  etf_cfd_us: { emoji: '🇺🇸📈', title: 'United States ETFs' },
  etf_cfd_de: { emoji: '🇩🇪📈', title: 'Germany ETFs' },
  etf_cfd_fr: { emoji: '🇫🇷📈', title: 'France ETFs' },
  etf_cfd_hk: { emoji: '🇭🇰📈', title: 'Hong Kong ETFs' },
  fx_crosses: { emoji: '💱', title: 'Forex currencies' },
  fx_majors: { emoji: '💶', title: 'Forex major currencies' },
  fx_metals: { emoji: '🥇', title: 'Forex metals' },
  idx_america: { emoji: '🌎', title: 'America' },
  idx_asia: { emoji: '🌏', title: 'Asia' },
  idx_europe: { emoji: '🇪🇺', title: 'Europe' },
  idx_africa: { emoji: '🌍', title: 'Africa' },
  austria: { emoji: '🇦🇹', title: 'Austria' },
  belgium: { emoji: '🇧🇪', title: 'Belgium' },
  denmark: { emoji: '🇩🇰', title: 'Denmark' },
  finland: { emoji: '🇫🇮', title: 'Finland' },
  france: { emoji: '🇫🇷', title: 'France' },
  germany: { emoji: '🇩🇪', title: 'Germany' },
  italy: { emoji: '🇮🇹', title: 'Italy' },
  ireland: { emoji: '🇮🇪', title: 'Ireland' },
  mexico: { emoji: '🇲🇽', title: 'Mexico' },
  netherlands: { emoji: '🇳🇱', title: 'Netherlands' },
  norway: { emoji: '🇳🇴', title: 'Norway' },
  portugal: { emoji: '🇵🇹', title: 'Portugal' },
  spain: { emoji: '🇪🇸', title: 'Spain' },
  sweden: { emoji: '🇸🇪', title: 'Sweden' },
  switzerland: { emoji: '🇨🇭', title: 'Switzerland' },
  japan: { emoji: '🇯🇵', title: 'Japan' },
  'hong-kong': { emoji: '🇭🇰', title: 'Hong Kong' },
  uk: { emoji: '🇬🇧', title: 'United Kingdom' },
  us: { emoji: '🇺🇸', title: 'United States' }
};

(async () => {
  try {
    const contentListHeader = '## Instruments\n';
    const contentList = instrumentGroups
      .map(
        ({ id, instruments }) =>
          `* [${titleMap[id].title} ${titleMap[id].emoji} (${instruments.length})](#${id})`
      )
      .join('\n');

    const contentBody = [contentListHeader, contentList, '<hr>'].join('\n');

    const headers = [
      'Instrument',
      // 'Name',
      'id',
      'Earliest data (UTC)'
    ];

    const header = headers.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = headers.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const instrumentTable = instrumentGroups
      .map(({ id, instruments }) => {
        const groupTitle = `<h3 id="${id}">${titleMap[id].title} ${
          titleMap[id].emoji || ''
        }</h3>\n`;

        const listBody = instruments
          .map(instrumentId => {
            const {
              description,
              startHourForTicks,
              startDayForMinuteCandles,
              startMonthForHourlyCandles,
              startYearForDailyCandles
            } = instrumentMetaData[
              instrumentId as keyof typeof instrumentMetaData
            ] as InstrumentMetaData;

            const dates = [
              startHourForTicks,
              startDayForMinuteCandles,
              startMonthForHourlyCandles,
              startYearForDailyCandles
            ]
              .filter(d => d !== '1970-01-01T00:00:00.000Z' && d !== '2000-01-01T00:00:00.000Z')
              .map(item => new Date(item));

            const minDate = Math.min(...dates.map(d => d.getTime()));

            const line = [
              `[${description}](https://www.dukascopy-node.app/instrument/${instrumentId})`,
              `\`${instrumentId}\``,
              getFormattedDate(minDate)
            ].join('|');

            return `|${line}|`;
          })
          .join('\n');

        return [groupTitle, header, divider, listBody].join('\n');
      })
      .join('\n');

    await saveFile(filePath, [contentBody, instrumentTable].join('\n'));
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
