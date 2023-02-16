import fs, { WriteStream } from 'fs';
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

interface WriteStreamBatchOptions {
  fileWriteStream: WriteStream;
  batch: number[][];
  timeframe: TimeframeType;
  format: FormatType;
  isInline: boolean;
  isFirstBatch: boolean;
  isLastBatch: boolean;
}

export async function writeStreamBatch({
  fileWriteStream,
  batch,
  timeframe,
  format,
  isInline,
  isFirstBatch,
  isLastBatch
}: WriteStreamBatchOptions) {
  const bodyHeaders = timeframe === Timeframe.tick ? tickHeaders : headers;
  const existingBodyHeaders = bodyHeaders.filter((_, i) => batch[0][i] !== undefined);

  for (let i = 0; i < batch.length; i++) {
    const item = batch[i];
    const isFirstItem = i === 0;
    const isLastItem = i === batch.length - 1;

    const shouldHaveOpeningBracket = isFirstBatch && isFirstItem;
    const shouldHaveClosingBracket = isLastBatch && isLastItem;

    let body = '';

    if (format === Format.csv) {
      if (shouldHaveOpeningBracket) {
        const csvHeaders = existingBodyHeaders.join(',');
        body += `${csvHeaders}\n`;
      }
      body += item.join(',') + (!shouldHaveClosingBracket ? '\n' : '');
    } else {
      if (shouldHaveOpeningBracket) {
        body += '[' + (!isInline ? '\n' : '');
      }

      if (format === Format.json) {
        const jsonObjectBody = item.map((val, i) => `"${existingBodyHeaders[i]}":${val}`).join(',');
        body += `{${jsonObjectBody}}`;
      } else {
        const arrayBody = item.join(',');
        body += `[${arrayBody}]`;
      }

      body += (!shouldHaveClosingBracket ? ',' : '') + (!isInline ? '\n' : '');

      if (shouldHaveClosingBracket) {
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

  if (isLastBatch) {
    console.log('finish writing stream');
    fileWriteStream.end();
  }
}
