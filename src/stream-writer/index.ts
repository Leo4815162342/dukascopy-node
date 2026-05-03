import fs, { WriteStream } from 'fs';
// @ts-expect-error parquetjs-lite does not have typescript definitions
import { ParquetSchema, ParquetWriter } from 'parquetjs-lite';
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

  if (format === Format.parquet) {
    const schemaObj: Record<string, { type: string }> = {};
    for (const h of existingBodyHeaders) {
      schemaObj[h] = { type: h === 'timestamp' ? 'INT64' : 'DOUBLE' };
    }
    const schema = new ParquetSchema(schemaObj);
    const writer = await ParquetWriter.openStream(schema, fileWriteStream);

    for (let i = 0; i < payload.length; i++) {
      const item = payload[i];
      const row: Record<string, number | bigint> = {};
      for (let j = 0; j < existingBodyHeaders.length; j++) {
        const val = item[j];
        row[existingBodyHeaders[j]] = existingBodyHeaders[j] === 'timestamp' ? BigInt(val) : val;
      }
      await writer.appendRow(row);
    }

    await writer.close();
    return true;
  }

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

type BatchStreamWriterOptions = {
  fileWriteStream: WriteStream;
  timeframe: TimeframeType;
  format: FormatType;
  isInline: boolean;
  volumes?: boolean;
  startDateTs: number;
  endDateTs: number;
};

export class BatchStreamWriter {
  private fileWriteStream: WriteStream;
  private timeframe: TimeframeType;
  private format: FormatType;
  private isInline: boolean;
  private volumes: boolean;
  private isFileEmpty = true;
  private bodyHeaders: string[];
  private startDateTs: number;
  private endDateTs: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private parquetWriter?: any;

  constructor(options: BatchStreamWriterOptions) {
    this.fileWriteStream = options.fileWriteStream;
    this.timeframe = options.timeframe;
    this.format = options.format;
    this.isInline = options.isInline;
    this.volumes = Boolean(options.volumes);
    this.startDateTs = options.startDateTs;
    this.endDateTs = options.endDateTs;
    this.bodyHeaders = this.initHeaders();
  }

  private initHeaders() {
    const bodyHeaders =
      this.timeframe === Timeframe.tick
        ? ['timestamp', 'askPrice', 'bidPrice', 'askVolume', 'bidVolume'] // TODO: add custom header names as cli options
        : ['timestamp', 'open', 'high', 'low', 'close', 'volume'];

    if (!this.volumes) {
      bodyHeaders.pop();
      if (this.timeframe === Timeframe.tick) {
        bodyHeaders.pop();
      }
    }

    return bodyHeaders;
  }

  private async initParquetWriter() {
    if (!this.parquetWriter && this.format === Format.parquet) {
      const schemaObj: Record<string, { type: string }> = {};
      for (const h of this.bodyHeaders) {
        schemaObj[h] = { type: h === 'timestamp' ? 'INT64' : 'DOUBLE' };
      }
      const schema = new ParquetSchema(schemaObj);
      this.parquetWriter = await ParquetWriter.openStream(schema, this.fileWriteStream);
    }
  }

  public async writeBatch(batch: number[][], dateFormatter?: (timestamp: number) => string) {
    if (this.format === Format.parquet && !this.parquetWriter) {
      await this.initParquetWriter();
    }

    const batchWithinRange: (number | string)[][] = [];

    for (let j = 0; j < batch.length; j++) {
      const item = batch[j];
      const isItemInRange =
        item.length > 0 && item[0] >= this.startDateTs && item[0] < this.endDateTs;

      if (isItemInRange) {
        if (dateFormatter && this.format !== Format.parquet) {
          //@ts-expect-error TODO: fix this
          item[0] = dateFormatter(item[0]);
        }
        batchWithinRange.push(item);
      }
    }

    for (let i = 0; i < batchWithinRange.length; i++) {
      let item = batchWithinRange[i];

      const isFirstItem = i === 0;
      const isLastItem = i === batchWithinRange.length - 1;
      const shouldOpen = isFirstItem && this.isFileEmpty;

      if (this.format === Format.parquet) {
        const row: Record<string, number | string | bigint> = {};
        for (let j = 0; j < this.bodyHeaders.length; j++) {
          const val = item[j];
          row[this.bodyHeaders[j]] = this.bodyHeaders[j] === 'timestamp' ? BigInt(val) : val;
        }
        await this.parquetWriter.appendRow(row);
        this.isFileEmpty = false;
        continue;
      }

      let body = '';

      if (this.format === Format.csv) {
        if (shouldOpen) {
          const csvHeaders = this.bodyHeaders.join(',');
          body += `${csvHeaders}\n`;
        }

        body += item.join(',') + '\n';
      } else {
        if (shouldOpen) {
          body += '[' + (!this.isInline ? '\n' : '');
        }

        if (isFirstItem && !this.isFileEmpty) {
          body += ',' + (!this.isInline ? '\n' : '');
        }

        if (dateFormatter && (this.format === Format.json || this.format === Format.array)) {
          item[0] = `"${item[0]}"`;
        }

        if (this.format === Format.json) {
          const jsonObjectBody = item.map((val, i) => `"${this.bodyHeaders[i]}":${val}`).join(',');
          body += `{${jsonObjectBody}}`;
        } else {
          const arrayBody = item.join(',');
          body += `[${arrayBody}]`;
        }

        body += (!isLastItem ? ',' : '') + (!isLastItem && !this.isInline ? '\n' : '');
      }

      if (!body) {
        continue;
      }

      const ableToWrite = this.fileWriteStream.write(body);
      if (ableToWrite) {
        if (this.isFileEmpty) {
          this.isFileEmpty = false;
        }
      } else {
        await new Promise(resolve => {
          this.fileWriteStream.once('drain', resolve);
        });
      }
    }

    return true as const;
  }

  public async closeBatchFile() {
    if (this.format === Format.parquet && this.parquetWriter) {
      await this.parquetWriter.close();
      return true as const;
    }

    if ((this.format === Format.json || this.format === Format.array) && !this.isFileEmpty) {
      const body = this.isInline ? ']' : '\n]';
      const ableToWrite = this.fileWriteStream.write(body);
      if (!ableToWrite) {
        await new Promise(resolve => {
          this.fileWriteStream.once('drain', resolve);
        });
      }
    }
    this.fileWriteStream.end();

    return true as const;
  }
}
