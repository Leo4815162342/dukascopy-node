import { HistoryConfig } from './../config/types';

import { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays } from './ohlc';
import { splitArrayInChunks } from '../utils/general';

function aggregate(
  input: number[][],
  requestedTimeframe: HistoryConfig['timeframe'],
  fileTimeframe: HistoryConfig['timeframe'],
  priceType: HistoryConfig['priceType']
): number[][] {
  if (requestedTimeframe === fileTimeframe) {
    return input;
  } else {
    if (fileTimeframe === 'tick') {
      const minuteOHLC = getMinuteOHLCfromTicks(input, priceType);

      if (requestedTimeframe === 'm1') {
        return minuteOHLC;
      }

      if (requestedTimeframe === 'm30') {
        return splitArrayInChunks(input, 30).map(data => getOHLC(data));
      }

      if (requestedTimeframe === 'h1') {
        return [getOHLC(minuteOHLC)];
      }
    }

    if (fileTimeframe === 'm1') {
      if (requestedTimeframe === 'm30') {
        return splitArrayInChunks(input, 30).map(data => getOHLC(data));
      }

      if (requestedTimeframe === 'h1') {
        return splitArrayInChunks(input, 60).map(data => getOHLC(data));
      }

      if (requestedTimeframe === 'd1') {
        return [getOHLC(input)];
      }
    }

    if (fileTimeframe === 'h1') {
      if (requestedTimeframe === 'd1') {
        return splitArrayInChunks(input, 24).map(data => getOHLC(data));
      }
      if (requestedTimeframe === 'mn1') {
        return [getOHLC(input)];
      }
    }

    if (fileTimeframe === 'd1') {
      if (requestedTimeframe === 'mn1') {
        const monthlyOHLC = getMonthlyOHLCfromDays(input);
        return monthlyOHLC;
      }
    }

    // requestedTimeframe === 'm1' && fileTimeframe === 'tick'
    // requestedTimeframe === 'm30' && fileTimeframe === 'tick'
    // requestedTimeframe === 'm30' && fileTimeframe === 'm1'
    // requestedTimeframe === 'h1' && fileTimeframe === 'tick'
    // requestedTimeframe === 'h1' && fileTimeframe === 'm1'
    // requestedTimeframe === 'd1' && fileTimeframe === 'm1'
    // requestedTimeframe === 'd1' && fileTimeframe === 'h1'
    // requestedTimeframe === 'mn1' && fileTimeframe === 'd1'
    // requestedTimeframe === 'mn1' && fileTimeframe === 'h1'
  }
}

export { aggregate };
