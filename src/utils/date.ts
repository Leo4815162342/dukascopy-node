import { HistoryConfig } from '../config/types';

import addMinutes from 'date-fns/addMinutes';
import parseISO from 'date-fns/parseISO';

import { instruments } from '../config/instruments';

type EndpointFilePeriod = 'hour' | 'day' | 'month';

function getStarOfUtc(date: Date, period: EndpointFilePeriod, offset: number = 0): Date {
  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  let startOfUtc: Date;

  if (period === 'hour') {
    startOfUtc = new Date(Date.UTC(year, month, day, hours + offset));
  } else if (period === 'day') {
    startOfUtc = new Date(Date.UTC(year, month, day + offset));
  } else if (period === 'month') {
    startOfUtc = new Date(Date.UTC(year, month + offset));
  }

  return startOfUtc;
}

function getEndopointToFilePeriod(timeframe: HistoryConfig['timeframe']): EndpointFilePeriod {
  if (timeframe === 'tick') {
    return 'hour';
  } else if (timeframe === 'm1' || timeframe === 'm30') {
    return 'day';
  } else {
    return 'month';
  }
}

function normalizeDates(
  instrument: HistoryConfig['instrument'],
  from: HistoryConfig['dates']['from'],
  to: HistoryConfig['dates']['to'],
  timeframe: HistoryConfig['timeframe'],
  utcOffset: HistoryConfig['utcOffset']
): [Date, Date] {
  const [parsedFromDate, parsedToDate] = [from, to].map(d => parseISO(d)).sort((a, b) => +a - +b);

  const minFromDate = new Date(instruments[instrument].minStartDate);

  const maxToDate = new Date();

  // TODO: use min max
  // TODO: maxToDate = getStarOfUtc(toLimit, getEndopointToFilePeriod(timeframe), -1);

  let adjustedFromDate = adjustDate(parsedFromDate, minFromDate, maxToDate, timeframe, utcOffset);
  let adjustedToDate = adjustDate(parsedToDate, minFromDate, maxToDate, timeframe, utcOffset);

  return [adjustedFromDate, adjustedToDate];
}

function adjustDate(
  date: Date,
  fromLimit: Date,
  toLimit: Date,
  timeframe: HistoryConfig['timeframe'],
  offset: HistoryConfig['utcOffset']
): Date {
  let adjustedDate: Date;

  if (date < toLimit) {
    adjustedDate = date < fromLimit ? fromLimit : date;
  } else {
    adjustedDate = getStarOfUtc(toLimit, getEndopointToFilePeriod(timeframe), -1);
  }

  return addMinutes(adjustedDate, offset + -adjustedDate.getTimezoneOffset());
}

export { getStarOfUtc, normalizeDates };
