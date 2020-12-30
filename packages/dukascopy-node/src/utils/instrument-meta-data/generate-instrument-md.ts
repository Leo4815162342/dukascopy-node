/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
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
    const headers = [
      'Instrument id',
      'Name',
      'Description',
      'Earliset tick data',
      'Earliset minute data',
      'Earliset hour data',
      'Earliset day data'
    ];

    const header = headers.map((h, i) => `${!i ? '|' : ''}${h}|`).join('');
    const divider = headers.map((_, i) => `${!i ? '|' : ''}-|`).join('');

    const output = instrumentGroups
      .map(({ id, name, instruments }) => {
        const groupTitle = `### ${name} ${flagMap[id] || ''}`;

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

            return `|\`${instrumentId}\`|${name}|${description}|${startHourForTicks}|${startDayForMinuteCandles}|${startMonthForHourlyCandles}|${startYearForDailyCandles}|`;
          })
          .join('\n');

        return [groupTitle, header, divider, listBody].join('\n');
      })
      .join('\n');

    await saveFile(filePath, output);
    console.log('Created file');
  } catch (err) {
    console.log(err);
  }
})();
