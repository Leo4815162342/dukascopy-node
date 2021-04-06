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

const flagMap: Record<string, string> = {
  bnd_cfd: '📊',
  vccy: '₿',
  cmd_agricultural: '☕',
  cmd_energy: '⚡',
  cmd_metals: '⚙️',
  etf_cfd_us: '📈',
  fx_crosses: '💱',
  fx_majors: '💶',
  fx_metals: '🥇',
  idx_america: '🌎',
  idx_asia: '🌏',
  idx_europe: '🌍',
  austria: '🇦🇹',
  belgium: '🇧🇪',
  denmark: '🇩🇰',
  finland: '🇫🇮',
  france: '🇫🇷',
  germany: '🇩🇪',
  italy: '🇮🇹',
  ireland: '🇮🇪',
  netherlands: '🇳🇱',
  norway: '🇳🇴',
  portugal: '🇵🇹',
  spain: '🇪🇸',
  sweden: '🇸🇪',
  switzerland: '🇨🇭',
  japan: '🇯🇵',
  'hong-kong': '🇭🇰',
  uk: '🇬🇧',
  us: '🇺🇸'
};

(async () => {
  try {
    const contentListHeader = '## Instruments\n';
    const contentList = instrumentGroups
      .map(
        ({ name, id, instruments }) =>
          `* [${name}${flagMap[id] ? ' ' + flagMap[id] : ''} (${instruments.length})](#${id})`
      )
      .join('\n');

    const contentBody = [contentListHeader, contentList, '<hr>'].join('\n');

    const headers = [
      'Instrument id',
      'Name',
      'Description',
      'Earliset tick data (UTC)',
      'Earliset minute data (UTC)',
      'Earliset hour data (UTC)',
      'Earliset day data (UTC)'
    ];

    const header = headers.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = headers.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const instrumentTable = instrumentGroups
      .map(({ id, name, instruments }) => {
        const groupTitle = `<h3 id="${id}">${name} ${flagMap[id] || ''}</h3>\n`;

        const listBody = instruments
          .map(instrumentId => {
            const {
              name,
              description,
              startHourForTicks,
              startDayForMinuteCandles,
              startMonthForHourlyCandles,
              startYearForDailyCandles
            } = instrumentMetaData[
              instrumentId as keyof typeof instrumentMetaData
            ] as InstrumentMetaData;

            const line = [
              `\`${instrumentId}\``,
              name,
              description,
              getFormattedDate(startHourForTicks, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
              }),
              getFormattedDate(startDayForMinuteCandles, { hour: 'numeric', minute: 'numeric' }),
              getFormattedDate(startMonthForHourlyCandles, { hour: 'numeric' }),
              getFormattedDate(startYearForDailyCandles)
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
