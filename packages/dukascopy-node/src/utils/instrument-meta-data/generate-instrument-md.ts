/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getFormattedDate } from '../date';
import { InstrumentMetaData } from './generate-init-meta';

import instrumentGroups from './generated/instrument-groups.json';
import instrumentMetaData from './generated/instrument-meta-data.json';
import { StartDates } from './min-start-date';

const saveFile = promisify(fs.writeFile);

const filePath = path.resolve(__dirname, 'generated', 'instruments.md');

const flagMap: Record<string, string> = {
  Austria: '🇦🇹',
  Belgium: '🇧🇪',
  Denmark: '🇩🇰',
  Finland: '🇫🇮',
  France: '🇫🇷',
  Germany: '🇩🇪',
  Netherlands: '🇳🇱',
  Norway: '🇳🇴',
  Portugal: '🇵🇹',
  Spain: '🇪🇸',
  Sweden: '🇸🇪',
  Switzerland: '🇨🇭',
  Japan: '🇯🇵',
  'Hong Kong': '🇭🇰',
  UK: '🇬🇧',
  US: '🇺🇸'
};

(async () => {
  try {
    const contents = instrumentGroups
      .map(({ name, id }) => `* [${name} ${flagMap[id] || ''}](#${id.toLowerCase()})`)
      .join('\n');

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
        const groupTitle = `<h3 id="${id.toLowerCase()}">${name} ${flagMap[id] || ''}</h3>\n`;

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
            ] as InstrumentMetaData & StartDates;

            const line = [
              `\`${instrumentId}\``,
              name,
              description,
              getFormattedDate(startHourForTicks, { hour: 'numeric' }),
              getFormattedDate(startDayForMinuteCandles),
              getFormattedDate(startMonthForHourlyCandles),
              getFormattedDate(startYearForDailyCandles)
            ].join('|');

            return `|${line}|`;
          })
          .join('\n');

        return [groupTitle, header, divider, listBody].join('\n');
      })
      .join('\n');

    await saveFile(filePath, [contents, instrumentTable].join('\n'));
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
