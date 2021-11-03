import { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays } from './ohlc';
import { splitArrayInChunks } from '../utils/general';
import { AggregateInput } from './types';
import { Timeframe } from '../config/timeframes';

export function aggregate({
  data,
  fromTimeframe,
  toTimeframe,
  priceType,
  ignoreFlats
}: AggregateInput): number[][] {
  if (fromTimeframe === Timeframe.tick && toTimeframe === Timeframe.tick) {
    return data;
  }

  if (fromTimeframe === Timeframe.m1 && toTimeframe === Timeframe.m1) {
    if (ignoreFlats) {
      return data.filter(item => item[5] !== 0);
    }
    return data;
  }

  if (fromTimeframe === toTimeframe) {
    return splitArrayInChunks(data, 1).map(d => getOHLC(d, ignoreFlats));
  } else {
    if (fromTimeframe === Timeframe.tick) {
      const minuteOHLC = getMinuteOHLCfromTicks(data, priceType);

      if (toTimeframe === Timeframe.m1) {
        return minuteOHLC;
      }

      if (toTimeframe === Timeframe.m5) {
        return splitArrayInChunks(minuteOHLC, 5).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.m15) {
        return splitArrayInChunks(minuteOHLC, 15).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.m30) {
        return splitArrayInChunks(minuteOHLC, 30).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.h1) {
        return [minuteOHLC].map(d => getOHLC(d, ignoreFlats));
      }
    }

    if (fromTimeframe === Timeframe.m1) {
      if (toTimeframe === Timeframe.m5) {
        return splitArrayInChunks(data, 5).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.m15) {
        return splitArrayInChunks(data, 15).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.m30) {
        return splitArrayInChunks(data, 30).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.h1) {
        return splitArrayInChunks(data, 60).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.h4) {
        return splitArrayInChunks(data, 240).map(d => getOHLC(d, ignoreFlats));
      }

      if (toTimeframe === Timeframe.d1) {
        return [data].map(d => getOHLC(d, ignoreFlats));
      }
    }

    if (fromTimeframe === Timeframe.h1) {
      if (toTimeframe === Timeframe.h4) {
        return splitArrayInChunks(data, 4).map(d => getOHLC(d, ignoreFlats));
      }
      if (toTimeframe === Timeframe.d1) {
        return splitArrayInChunks(data, 24).map(d => getOHLC(d, ignoreFlats));
      }
      if (toTimeframe === Timeframe.mn1) {
        return [data].map(d => getOHLC(d, ignoreFlats));
      }
    }

    if (fromTimeframe === Timeframe.d1) {
      if (toTimeframe === Timeframe.mn1) {
        const monthlyOHLC = getMonthlyOHLCfromDays(data);
        return monthlyOHLC;
      }
    }
  }

  return [];
}
