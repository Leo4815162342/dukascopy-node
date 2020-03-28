import { JsonItem, JsonItemTick } from './types';
import { ProcessDataOutput } from '../processor/types';
import { Format, Timeframe } from '../config/types';

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPirce', 'askVolume', 'bidVolume'];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: 'tick';
  format: 'json';
}): JsonItemTick[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  format: 'json';
}): JsonItem[];

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  format: 'array';
}): ProcessDataOutput;

export function formatOutput({
  processedData,
  timeframe,
  format
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  format: 'csv';
}): string;

export function formatOutput({
  processedData,
  format,
  timeframe
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  format: Format;
}): JsonItem[] | JsonItemTick[] | ProcessDataOutput | string {
  const bodyHeaders = timeframe === 'tick' ? tickHeaders : headers;

  if (format === 'json') {
    const data = processedData.map(arr => {
      return arr.reduce((all, item, i) => {
        const name = bodyHeaders[i];
        all[name] = item;
        return all;
      }, {} as any);
    });
    return data;
  }

  if (format === 'csv') {
    const csvHeaders = bodyHeaders.filter((_, i) => processedData[0][i] !== undefined);
    const csv = [csvHeaders, ...processedData].map(arr => arr.join(',')).join('\n');
    return csv;
  }

  return processedData;
}
