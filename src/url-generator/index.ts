// .../2019/BID_candles_day_1.bi5:          daily data per year
// .../2019/01/BID_candles_hour_1.bi5:      hourly data per month
// .../2019/01/01/BID_candles_min_1.bi5:    minute data per day
// .../2019/01/01/01h_candles_ticks_1.bi5:  tick data per hour

import { HistoryConfig } from '../config/types';
import { getStarOfUtc } from '../utils/date';

import { pad } from '../utils/general';
import { getDateRange } from '../utils/date';

const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';

type Range = ReturnType<typeof getDateRange>;
type LowerRange = 'hour' | 'day' | 'month';

function getUrl(
  instrument: HistoryConfig['instrument'],
  date: Date,
  range: Range,
  priceType: HistoryConfig['priceType']
): string {
  const [year, month, day, hour] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  const [yearPad, monthPad, dayPad, hourPad] = [year, month, day, hour].map(pad);

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

function isCurrent(date: Date, type: Range) {
  const now = new Date();

  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  const [currentYear, currentMonth, currentDay, currentHours] = [
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours()
  ];

  const isCurrentYear = year === currentYear;
  const isCurrentMonth = isCurrentYear && month === currentMonth;
  const isCurrentDay = isCurrentMonth && day === currentDay;
  const isCurrentHour = isCurrentDay && hours === currentHours;

  const obj = {
    year: isCurrentYear,
    month: isCurrentMonth,
    day: isCurrentDay,
    hour: isCurrentHour
  };

  return obj[type];
}

function getLowerRange(range: Range): LowerRange {
  if (range === 'year') {
    return 'month';
  } else if (range === 'month') {
    return 'day';
  } else if (range === 'day') {
    return 'hour';
  }
}

function shouldUnwrap(rangeType: Range, date: Date) {
  return (
    (rangeType === 'year' && isCurrent(date, 'year')) ||
    (rangeType === 'month' && isCurrent(date, 'month')) ||
    (rangeType === 'day' && isCurrent(date, 'day'))
  );
}

function constructUrls(rangetype: Range, startDate: Date, endDate: Date) {
  let dates: Date[] = [];

  let tempStartDate = getStarOfUtc(startDate, rangetype);

  while (tempStartDate < endDate) {
    dates.push(tempStartDate);
    tempStartDate = getStarOfUtc(tempStartDate, rangetype, 1);
  }
  const result: string[] = dates.reduce((all, date, i, arr) => {
    const isLastItem = i === arr.length - 1;

    if (isLastItem && shouldUnwrap(rangetype, date)) {
      const unwrappedRange = constructUrls(getLowerRange(rangetype), date, endDate);
      all.push(...unwrappedRange);
    } else {
      all.push(getUrl('eurusd', date, rangetype, 'bid'));
    }

    return all;
  }, []);

  return result;
}

// generateUrls(
//   'd1',
//   new Date('2018-04-04T00:00:00.000Z'),
//   new Date('2019-07-06T00:00:00.000Z'),
//   'year'
// );

function getUrls(timeframe: HistoryConfig['timeframe'], startDate: Date, endDate: Date) {
  const rangeType = getDateRange(timeframe);

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

  const urls = constructUrls(rangeType, startDate, shiftedEndDate);

  return urls;
}

// const res = constructUrls(
//   new Date('2018-01-01T00:00:00.000Z'),
//   new Date('2019-07-09T00:00:00.000Z'),
//   'month'
// );

const res = getUrls(
  'tick',
  new Date('2019-07-08T00:00:00.000Z'),
  new Date('2019-07-09T01:12:23.123Z')
);

console.log(res);

// d1, mn1
// eurusd, 2018 - 01 - 01, 2019 - 07 - 05;
// year - 2018;
// month - 01;
// month - 02;
// month - 03;
// month - 04;
// month - 05;
// month - 06;
