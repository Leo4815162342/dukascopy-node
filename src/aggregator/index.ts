import { HistoryConfig } from './../config/types';

import { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays } from './ohlc';
import { splitArrayInChunks } from '../utils/general';

type AggregateInput = {
  data: number[][];
  fromTimeframe: HistoryConfig['timeframe'];
  toTimeframe: HistoryConfig['timeframe'];
  priceType?: HistoryConfig['priceType'];
};

function aggregate({ data, fromTimeframe, toTimeframe, priceType }: AggregateInput): number[][] {
  if (fromTimeframe === toTimeframe) {
    return data;
  } else {
    if (fromTimeframe === 'tick') {
      const minuteOHLC = getMinuteOHLCfromTicks(data, priceType);

      if (toTimeframe === 'm1') {
        return minuteOHLC;
      }

      if (toTimeframe === 'm30') {
        return splitArrayInChunks(minuteOHLC, 30).map(data => getOHLC(data));
      }

      if (toTimeframe === 'h1') {
        return [getOHLC(minuteOHLC)];
      }
    }

    if (fromTimeframe === 'm1') {
      if (toTimeframe === 'm30') {
        return splitArrayInChunks(data, 30).map(data => getOHLC(data));
      }

      if (toTimeframe === 'h1') {
        return splitArrayInChunks(data, 60).map(data => getOHLC(data));
      }

      if (toTimeframe === 'd1') {
        return [getOHLC(data)];
      }
    }

    if (fromTimeframe === 'h1') {
      if (toTimeframe === 'd1') {
        return splitArrayInChunks(data, 24).map(data => getOHLC(data));
      }
      if (toTimeframe === 'mn1') {
        return [getOHLC(data)];
      }
    }

    if (fromTimeframe === 'd1') {
      if (toTimeframe === 'mn1') {
        const monthlyOHLC = getMonthlyOHLCfromDays(data);
        return monthlyOHLC;
      }
    }
  }
}

export { aggregate };
