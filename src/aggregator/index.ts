import { HistoryConfig } from './../index';

import { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays } from './ohlc';
import { splitArrayInChunks } from '../utils/general';

type AggregateInput = {
  data: number[][];
  fromTimeframe: HistoryConfig['timeframe'];
  toTimeframe: HistoryConfig['timeframe'];
  priceType?: HistoryConfig['priceType'];
  ignoreFlats: HistoryConfig['ignoreFlats'];
};

function aggregate({
  data,
  fromTimeframe,
  toTimeframe,
  priceType,
  ignoreFlats
}: AggregateInput): number[][] {
  if (
    (fromTimeframe === 'tick' && toTimeframe === 'tick') ||
    (fromTimeframe === 'm1' && toTimeframe === 'm1')
  ) {
    return data;
  }

  if (fromTimeframe === toTimeframe) {
    return splitArrayInChunks(data, 1).map(d => getOHLC(d, ignoreFlats));
  } else {
    if (fromTimeframe === 'tick') {
      const minuteOHLC = getMinuteOHLCfromTicks(data, priceType);

      if (toTimeframe === 'm1') {
        return minuteOHLC;
      }

      if (toTimeframe === 'm30') {
        return splitArrayInChunks(minuteOHLC, 30).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === 'h1') {
        return [minuteOHLC].map(d => getOHLC(d, ignoreFlats));
      }
    }

    if (fromTimeframe === 'm1') {
      if (toTimeframe === 'm30') {
        return splitArrayInChunks(data, 30).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === 'h1') {
        return splitArrayInChunks(data, 60).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === 'd1') {
        return [data].map(d => getOHLC(d, ignoreFlats));
      }
    }

    if (fromTimeframe === 'h1') {
      if (toTimeframe === 'd1') {
        return splitArrayInChunks(data, 24).map(d => getOHLC(d, ignoreFlats));
      }
      if (toTimeframe === 'mn1') {
        return [data].map(d => getOHLC(d, ignoreFlats));
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
