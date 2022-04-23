// .../2019/BID_candles_day_1.bi5:          daily data per year
// .../2019/01/BID_candles_hour_1.bi5:      hourly data per month
// .../2019/01/01/BID_candles_min_1.bi5:    minute data per day
// .../2019/01/01/01h_ticks_1.bi5:  tick data per hour

import { getLowerRange, isCurrentRange, getClosestAvailableRange } from '../utils/range';
import { getStartOfUtc, getYMDH } from '../utils/date';
import { pad } from '../utils/general';
import { GenerateUrlsInput } from './types';
import { TimeRange } from '../utils/range';
import { TimeframeType, Timeframe } from '../config/timeframes';
import { PriceType } from '../config/price-types';
import { InstrumentType } from '../config/instruments';

export const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getUrl(
  instrument: InstrumentType,
  date: Date,
  range: TimeRange,
  priceType: PriceType
): string {
  const [yearPad, monthPad, dayPad, hourPad] = getYMDH(date).map(pad);

  let url = `${URL_ROOT}/${instrument.toUpperCase()}/${yearPad}/`;

  if (range === 'year') {
    url += `${priceType.toUpperCase()}_candles_day_1.bi5`;
  } else if (range === 'month') {
    url += `${monthPad}/${priceType.toUpperCase()}_candles_hour_1.bi5`;
  } else if (range === 'day') {
    url += `${monthPad}/${dayPad}/${priceType.toUpperCase()}_candles_min_1.bi5`;
  } else if (range === 'hour') {
    url += `${monthPad}/${dayPad}/${hourPad}h_ticks.bi5`;
  }

  return url;
}

function getConstructor(instrument: InstrumentType, priceType: PriceType, endDate: Date) {
  return function construct(rangetype: TimeRange, startDate: Date): string[] {
    const dates: Date[] = [];

    let tempStartDate = getStartOfUtc(startDate, rangetype);

    while (tempStartDate < endDate) {
      dates.push(tempStartDate);

      tempStartDate = getStartOfUtc(tempStartDate, rangetype, 1);
    }

    const result = dates.reduce((all: string[], date, i, arr) => {
      const isLastItem = i === arr.length - 1;

      if (isLastItem && isCurrentRange(rangetype, date)) {
        const lowerRangeData = construct(getLowerRange(rangetype), date);
        all.push(...lowerRangeData);
      } else {
        const url = getUrl(instrument, date, rangetype, priceType);
        all.push(url);
      }

      return all;
    }, []);

    return result;
  };
}

function getDateLimit(startDate: Date, endDate: Date, timeframe: TimeframeType): Date {
  const nowDate = new Date();

  const adjustedEndDate = endDate < nowDate ? endDate : nowDate;
  let dateLimit = adjustedEndDate;

  if (
    timeframe === Timeframe.tick ||
    timeframe === Timeframe.m1 ||
    timeframe === Timeframe.m15 ||
    timeframe === Timeframe.m30
  ) {
    if (+endDate - +startDate <= 3600000) {
      dateLimit = getStartOfUtc(dateLimit, 'hour', 1);
    } else {
      dateLimit = getStartOfUtc(dateLimit, 'hour');
    }
  } else if (timeframe === Timeframe.h1) {
    dateLimit = getStartOfUtc(dateLimit, 'hour');
  } else if (timeframe === Timeframe.d1) {
    dateLimit = getStartOfUtc(dateLimit, 'day');
  } else if (timeframe === Timeframe.mn1) {
    dateLimit = getStartOfUtc(dateLimit, 'month');
  }

  return dateLimit;
}

export function generateUrls({
  instrument,
  timeframe,
  priceType,
  startDate,
  endDate
}: GenerateUrlsInput): string[] {
  const rangeType = getClosestAvailableRange(timeframe, startDate);

  const dateLimit = getDateLimit(startDate, endDate, timeframe);

  const constructUrls = getConstructor(instrument, priceType, dateLimit);

  const urls = constructUrls(rangeType, startDate);

  return urls;
}
