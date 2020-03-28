import { CliConfig } from './types';

export interface JsonItem {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface JsonItemTick {
  timestamp: number;
  askPrice: number;
  bidPirce: number;
  askVolume?: number;
  bidVolume?: number;
}

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPirce', 'askVolume', 'bidVolume'];

export function formatData(processedData: number[][], { output, timeframe }: CliConfig): any {
  // let output!: string | JsonItem[] | JsonItemTick[];

  // if (!volumes) {
  //   if (timeframe === 'tick') {
  //     tickHeaders.pop();
  //     tickHeaders.pop();
  //   } else {
  //     headers.pop();
  //   }
  // }

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
  } else if (output === 'csv') {
    // const headersStr = processedData[0].map((_,i) => )
  }

  return '';
}
