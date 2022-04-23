import { JsonItem, JsonItemTick, ArrayTickItem, ArrayItem, Output } from './types';
import { ProcessDataOutput } from '../processor/types';
import { TimeframeType, Timeframe } from '../config/timeframes';
import { FormatType, Format } from '../config/format';

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPrice', 'askVolume', 'bidVolume'];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: 'tick';
  format: 'array';
}): ArrayTickItem[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: 'tick';
  format: 'json';
}): JsonItemTick[];

// Rest timeframe overloads
export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Exclude<TimeframeType, 'tick'>;
  format: 'json';
}): JsonItem[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Exclude<TimeframeType, 'tick'>;
  format: 'array';
}): ArrayItem[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: 'csv';
}): string;

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: FormatType;
}): Output;

export function formatOutput({
  processedData,
  format,
  timeframe
}: {
  processedData: ProcessDataOutput;
  timeframe: TimeframeType;
  format: FormatType;
}): Output {
  if (processedData.length === 0) {
    return [];
  }

  const bodyHeaders = timeframe === Timeframe.tick ? tickHeaders : headers;

  if (format === Format.json) {
    const data = processedData.map(arr => {
      return arr.reduce((all, item, i) => {
        const name = bodyHeaders[i];
        all[name] = item;
        return all;
        // TODO: fix typing here
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, {} as any);
    });
    return data;
  }

  if (format === Format.csv) {
    const csvHeaders = bodyHeaders.filter((_, i) => processedData[0][i] !== undefined);
    const csv = [csvHeaders, ...processedData].map(arr => arr.join(',')).join('\n');
    return csv;
  }

  return processedData as unknown as ArrayTickItem[] | ArrayItem[];
}
