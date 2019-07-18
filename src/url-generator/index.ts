// .../2019/BID_candles_day_1.bi5:          daily data per year
// .../2019/01/BID_candles_hour_1.bi5:      hourly data per month
// .../2019/01/01/BID_candles_min_1.bi5:    minute data per day
// .../2019/01/01/01h_ticks_1.bi5:  tick data per hour

import { HistoryConfig } from '../config/types';
import { TimeRange } from '../utils/range';

import { getLowerRange, isCurrentRange, getClosestAvailableRange } from '../utils/range';
import { getStarOfUtc, getYMDH } from '../utils/date';
import { pad } from '../utils/general';

const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getUrl(
  instrument: HistoryConfig['instrument'],
  date: Date,
  range: TimeRange,
  priceType: HistoryConfig['priceType']
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

function getConstructor(
  instrument: HistoryConfig['instrument'],
  priceType: HistoryConfig['priceType'],
  endDate: Date
) {
  return function construct(rangetype: TimeRange, startDate: Date) {
    let dates: Date[] = [];

    let tempStartDate = getStarOfUtc(startDate, rangetype);

    while (tempStartDate < endDate) {
      dates.push(tempStartDate);
      tempStartDate = getStarOfUtc(tempStartDate, rangetype, 1);
    }

    const result: string[] = dates.reduce((all, date, i, arr) => {
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

function shiftEndDate(endDate: Date, timeframe: HistoryConfig['timeframe']) {
  const nowDate = new Date();

  const adjustedEndDate = endDate < nowDate ? endDate : nowDate;
  let shiftedEndDate = adjustedEndDate;

  if (timeframe === 'tick' || timeframe === 'm1' || timeframe === 'm30' || timeframe === 'h1') {
    shiftedEndDate = getStarOfUtc(shiftedEndDate, 'hour');
  } else if (timeframe === 'd1') {
    shiftedEndDate = getStarOfUtc(shiftedEndDate, 'day');
  } else if (timeframe === 'mn1') {
    shiftedEndDate = getStarOfUtc(shiftedEndDate, 'month');
  }

  return shiftedEndDate;
}

type generateUrlsInput = {
  instrument: HistoryConfig['instrument'];
  timeframe: HistoryConfig['timeframe'];
  startDate: Date;
  endDate: Date;
  priceType: HistoryConfig['priceType'];
};

function generateUrls({
  instrument,
  timeframe,
  priceType,
  startDate,
  endDate
}: generateUrlsInput): string[] {
  const rangeType = getClosestAvailableRange(timeframe, startDate);

  const shiftedEndDate = shiftEndDate(endDate, timeframe);

  const constructUrls = getConstructor(instrument, priceType, shiftedEndDate);

  const urls = constructUrls(rangeType, startDate);

  return urls;
}

export { URL_ROOT, generateUrls };
