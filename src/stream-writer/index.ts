import fs from 'fs';
import { Format, FormatType } from '../config/format';
import { Timeframe, TimeframeType } from '../config/timeframes';

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPrice', 'askVolume', 'bidVolume'];

export async function writeStream(
  payload: number[][],
  timeframe: TimeframeType,
  format: FormatType,
  filePath: string,
  isInline: boolean
): Promise<boolean> {
  const fileWriteStream = fs.createWriteStream(filePath);

  const bodyHeaders = timeframe === Timeframe.tick ? tickHeaders : headers;
  const existingBodyHeaders = bodyHeaders.filter((_, i) => payload[0][i] !== undefined);

  for (let i = 0; i < payload.length; i++) {
    const item = payload[i];
    const isFirstItem = i === 0;
    const isLastItem = i === payload.length - 1;

    let body = '';

    if (format === Format.csv) {
      if (isFirstItem) {
        const csvHeaders = existingBodyHeaders.join(',');
        body += `${csvHeaders}\n`;
      }
      body += item.join(',') + (!isLastItem ? '\n' : '');
    } else {
      if (isFirstItem) {
        body += '[' + (!isInline ? '\n' : '');
      }

      if (format === Format.json) {
        const jsonObjectBody = item.map((val, i) => `"${existingBodyHeaders[i]}":${val}`).join(',');
        body += `{${jsonObjectBody}}`;
      } else {
        const arrayBody = item.join(',');
        body += `[${arrayBody}]`;
      }

      body += (!isLastItem ? ',' : '') + (!isInline ? '\n' : '');

      if (isLastItem) {
        body += ']';
      }
    }
    const ableToWrite = fileWriteStream.write(body);
    if (!ableToWrite) {
      await new Promise(resolve => {
        fileWriteStream.once('drain', resolve);
      });
    }
  }

  fileWriteStream.end();

  return new Promise(resolve => {
    fileWriteStream.on('finish', () => {
      resolve(true);
    });
  });
}
