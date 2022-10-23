import {
  getOHLC,
  getMinuteOHLCfromTicks,
  getMonthlyOHLCfromDays,
  getSecondOHLCfromTicks
} from './ohlc';
import { splitArrayInChunks } from '../utils/general';
import { AggregateInput } from './types';
import { Timeframe } from '../config/timeframes';

export function aggregate({
  data,
  fromTimeframe,
  toTimeframe,
  priceType,
  ignoreFlats,
  startTs,
  volumes
}: AggregateInput): number[][] {
  if (fromTimeframe === Timeframe.tick && toTimeframe === Timeframe.tick) {
    // ignoring of flats is skipped for tick data
    return data;
  }

  if (fromTimeframe === Timeframe.m1 && toTimeframe === Timeframe.m1) {
    if (ignoreFlats) {
      return data.filter(item => item[5] !== 0);
    }
    return data;
  }

  if (fromTimeframe === toTimeframe) {
    return splitArrayInChunks(data, 1).map(d =>
      getOHLC({ input: d, filterFlats: ignoreFlats, volumes })
    );
  } else {
    if (fromTimeframe === Timeframe.tick) {
      if (toTimeframe === Timeframe.s1) {
        const secondOHLC = getSecondOHLCfromTicks(data, priceType, startTs, volumes);
        return secondOHLC;
      } else {
        const minuteOHLC = getMinuteOHLCfromTicks(data, priceType, startTs, volumes);

        if (toTimeframe === Timeframe.m1) {
          return minuteOHLC;
        }

        if (toTimeframe === Timeframe.m5) {
          return splitArrayInChunks(minuteOHLC, 5).map((d, i) =>
            getOHLC({
              input: d,
              filterFlats: ignoreFlats,
              startTs: startTs + i * 5 * 1000 * 60,
              volumes
            })
          );
        }

        if (toTimeframe === Timeframe.m15) {
          return splitArrayInChunks(minuteOHLC, 15).map((d, i) =>
            getOHLC({
              input: d,
              filterFlats: ignoreFlats,
              startTs: startTs + i * 15 * 1000 * 60,
              volumes
            })
          );
        }

        if (toTimeframe === Timeframe.m30) {
          return splitArrayInChunks(minuteOHLC, 30).map((d, i) =>
            getOHLC({
              input: d,
              filterFlats: ignoreFlats,
              startTs: startTs + i * 30 * 1000 * 60,
              volumes
            })
          );
        }

        if (toTimeframe === Timeframe.h1) {
          return [minuteOHLC].map((d, i) =>
            getOHLC({
              input: d,
              filterFlats: ignoreFlats,
              startTs: startTs + i * 60 * 1000 * 60,
              volumes
            })
          );
        }
      }
    }

    if (fromTimeframe === Timeframe.m1) {
      if (toTimeframe === Timeframe.m5) {
        return splitArrayInChunks(data, 5).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 5 * 1000 * 60,
            volumes
          })
        );
      }

      if (toTimeframe === Timeframe.m15) {
        return splitArrayInChunks(data, 15).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 15 * 1000 * 60,
            volumes
          })
        );
      }

      if (toTimeframe === Timeframe.m30) {
        return splitArrayInChunks(data, 30).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 30 * 1000 * 60,
            volumes
          })
        );
      }

      if (toTimeframe === Timeframe.h1) {
        return splitArrayInChunks(data, 60).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 60 * 1000 * 60,
            volumes
          })
        );
      }

      if (toTimeframe === Timeframe.h4) {
        return splitArrayInChunks(data, 240).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 240 * 1000 * 60,
            volumes
          })
        );
      }

      if (toTimeframe === Timeframe.d1) {
        return [
          getOHLC({
            input: data,
            filterFlats: ignoreFlats,
            startTs,
            volumes
          })
        ];
      }
    }

    if (fromTimeframe === Timeframe.h1) {
      if (toTimeframe === Timeframe.h4) {
        return splitArrayInChunks(data, 4).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 240 * 1000 * 60,
            volumes
          })
        );
      }
      if (toTimeframe === Timeframe.d1) {
        return splitArrayInChunks(data, 24).map((d, i) =>
          getOHLC({
            input: d,
            filterFlats: ignoreFlats,
            startTs: startTs + i * 1440 * 1000 * 60,
            volumes
          })
        );
      }
      if (toTimeframe === Timeframe.mn1) {
        return [getOHLC({ input: data, filterFlats: ignoreFlats, startTs, volumes })];
      }
    }

    if (fromTimeframe === Timeframe.d1) {
      if (toTimeframe === Timeframe.mn1) {
        const monthlyOHLC = getMonthlyOHLCfromDays(data, volumes);
        return monthlyOHLC;
      }
    }
  }

  return [];
}
