import { JsonItem, JsonItemTick } from './types';
import { ProcessDataOutput } from '../processor/types';
import { Output, Timeframe } from '../config/types';

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPirce', 'askVolume', 'bidVolume'];

export function formatOutput({
  processedData,
  timeframe,
  output
}: {
  processedData: ProcessDataOutput;
  timeframe: 'tick';
  output: 'json';
}): JsonItemTick[];

export function formatOutput({
  processedData,
  timeframe,
  output
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  output: 'json';
}): JsonItem[];

export function formatOutput({
  processedData,
  timeframe,
  output
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  output: 'array';
}): ProcessDataOutput;

export function formatOutput({
  processedData,
  timeframe,
  output
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  output: 'csv';
}): string;

export function formatOutput({
  processedData,
  output,
  timeframe
}: {
  processedData: ProcessDataOutput;
  timeframe: Timeframe;
  output: Output;
}): JsonItem[] | JsonItemTick[] | ProcessDataOutput | string {
  const bodyHeaders = timeframe === 'tick' ? tickHeaders : headers;

  if (output === 'json') {
    const data = processedData.map(arr => {
      return arr.reduce((all, item, i) => {
        const name = bodyHeaders[i];
        all[name] = item;
        return all;
      }, {} as any);
    });
    return data;
  }

  if (output === 'csv') {
    const csvHeaders = bodyHeaders.filter((_, i) => processedData[0][i] !== undefined);
    const csv = [csvHeaders, ...processedData].map(arr => arr.join(',')).join('\n');
    return csv;
  }

  return processedData;
}
