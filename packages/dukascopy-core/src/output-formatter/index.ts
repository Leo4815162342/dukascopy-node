import { JsonItem, JsonItemTick } from './types';
import { ProcessDataOutput } from '../processor/types';
import { TimeframeType, Timeframe } from '../config/timeframes';
import { FormatType, Format } from '../config/format';

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPirce', 'askVolume', 'bidVolume'];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe.tick;
  format: Format.json;
}): JsonItemTick[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: Format.json;
}): JsonItem[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: Format.array;
}): ProcessDataOutput;

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: Format.csv;
}): string;

export function formatOutput({
  processedData,
  format,
  timeframe
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: FormatType;
}): JsonItem[] | JsonItemTick[] | ProcessDataOutput | string {
  const bodyHeaders = timeframe === Timeframe.tick ? tickHeaders : headers;

  if (format === Format.json) {
    const data = processedData.map(arr => {
      return arr.reduce((all, item, i) => {
        const name = bodyHeaders[i];
        all[name] = item;
        return all;
      }, {} as any);
    });
    return data;
  }

  if (format === Format.csv) {
    const csvHeaders = bodyHeaders.filter((_, i) => processedData[0][i] !== undefined);
    const csv = [csvHeaders, ...processedData].map(arr => arr.join(',')).join('\n');
    return csv;
  }

  return processedData;
}
