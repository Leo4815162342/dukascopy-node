import { HistoryConfig } from '../config/types';

import addMinutes from 'date-fns/addMinutes';
import parseISO from 'date-fns/parseISO';

import { instruments } from '../config/instruments';

function getStarOfUtc(date: Date, period: Range, offset: number = 0): Date {
  const [year, month, day, hours] = getYMDH(date);

  let startOfUtc: Date;

  if (period === 'hour') {
    startOfUtc = new Date(Date.UTC(year, month, day, hours + offset));
  } else if (period === 'day') {
    startOfUtc = new Date(Date.UTC(year, month, day + offset));
  } else if (period === 'month') {
    startOfUtc = new Date(Date.UTC(year, month + offset));
  } else if (period === 'year') {
    startOfUtc = new Date(Date.UTC(year + offset, 0));
  }

  return startOfUtc;
}

type Range = 'hour' | 'day' | 'month' | 'year';

type TimeframeToRange = {
  tick: 'hour';
  m1: 'day';
  m30: 'day';
  h1: 'month';
  d1: 'year';
  mn1: 'year';
};

const timeframeToRangeLookup: TimeframeToRange = {
  tick: 'hour',
  m1: 'day',
  m30: 'day',
  h1: 'month',
  d1: 'year',
  mn1: 'year'
};

function getDateRange(timeframe: HistoryConfig['timeframe']): Range {
  return timeframeToRangeLookup[timeframe];
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
  // TODO: maxToDate = getStarOfUtc(toLimit, getDateRange(timeframe), -1);

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
    adjustedDate = getStarOfUtc(toLimit, getDateRange(timeframe), -1);
  }

  return addMinutes(adjustedDate, offset + 0);
}

function getUTCDateFromString(date: string): false | Date {
  const match = date.match(/(\d{4})-(\d{2})-(\d{2}).?(\d{2})?:?(\d{2})?/);

  if (!match) {
    return false;
  }

  const [_, year, month, day, hour, minute] = match;

  const utcIsoString = `${year}-${month}-${day}T${hour || '00'}:${minute || '00'}:00.000Z`;

  const parsedDate = new Date(utcIsoString);

  const isValid = !isNaN(+parsedDate) && parsedDate.toISOString() === utcIsoString;

  return isValid ? parsedDate : false;
}

function getYMDH(date: Date) {
  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  return [year, month, day, hours];
}

export { getStarOfUtc, normalizeDates, getDateRange, getUTCDateFromString, getYMDH };
