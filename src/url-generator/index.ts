// .../2019/BID_candles_day_1.bi5:          daily data per year
// .../2019/01/BID_candles_hour_1.bi5:      hourly data per month
// .../2019/01/01/BID_candles_min_1.bi5:    minute data per day
// .../2019/01/01/01h_candles_ticks_1.bi5:  tick data per hour

import { HistoryConfig } from '../config/types';
import { getStarOfUtc } from '../utils/date';

import { pad } from '../utils/general';
import { getDateRange, getYMDH } from '../utils/date';

const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';

type Range = ReturnType<typeof getDateRange>;

type RangeInferMap = { [key in HistoryConfig['timeframe']]: Range[] };

const rangeInferMap: RangeInferMap = {
  mn1: ['year', 'month', 'day'],
  d1: ['year', 'month', 'day'],
  h1: ['month', 'day', 'hour'],
  m30: ['day', 'hour'],
  m1: ['day', 'hour'],
  tick: ['hour']
};

function getUrl(
  instrument: HistoryConfig['instrument'],
  date: Date,
  range: Range,
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

function getIsCurrentObj(date: Date) {
  const [year, month, day, hours] = getYMDH(date);

  const [currentYear, currentMonth, currentDay, currentHours] = getYMDH(new Date());

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

  return obj;
}

type LowerRange = 'hour' | 'day' | 'month';

function getLowerRange(range: Range): LowerRange {
  if (range === 'year') {
    return 'month';
  } else if (range === 'month') {
    return 'day';
  } else if (range === 'day') {
    return 'hour';
  }
}

function getAvailableRange(timeframe: HistoryConfig['timeframe'], date: Date) {
  const isCurrent = getIsCurrentObj(date);

  return rangeInferMap[timeframe].find(range => !isCurrent[range]);
}

function hasLowerRangeData(rangeType: Range, date: Date) {
  const { year, month, day } = getIsCurrentObj(date);

  return (
    (rangeType === 'year' && year) ||
    (rangeType === 'month' && month) ||
    (rangeType === 'day' && day)
  );
}

function getConstructor(
  instrument: HistoryConfig['instrument'],
  priceType: HistoryConfig['priceType'],
  endDate: Date
) {
  return function construct(rangetype: Range, startDate: Date) {
    let dates: Date[] = [];

    let tempStartDate = getStarOfUtc(startDate, rangetype);

    while (tempStartDate < endDate) {
      dates.push(tempStartDate);
      tempStartDate = getStarOfUtc(tempStartDate, rangetype, 1);
    }

    const result: string[] = dates.reduce((all, date, i, arr) => {
      const isLastItem = i === arr.length - 1;

      if (isLastItem && hasLowerRangeData(rangetype, date)) {
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
  const rangeType = getAvailableRange(timeframe, startDate);

  const shiftedEndDate = shiftEndDate(endDate, timeframe);

  const constructUrls = getConstructor(instrument, priceType, shiftedEndDate);

  const urls = constructUrls(rangeType, startDate);

  return urls;
}

// const res = generateUrls({
//   instrument: 'eurcad',
//   timeframe: 'm1',
//   startDate: new Date('2019-07-01T12:00:00.000Z'),
//   endDate: new Date('2019-08-01T00:00:00.000Z'),
//   priceType: 'ask'
// });

// console.log(res);

export { generateUrls };
