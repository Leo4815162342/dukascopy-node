import { getIsCurrentObj } from '../utils/date';
import { TimeframeType, Timeframe } from '../config/timeframes';

export type TimeRange = 'hour' | 'day' | 'month' | 'year';

const ranges: TimeRange[] = ['year', 'month', 'day', 'hour'];

type RangeInferMap = { [key in TimeframeType]: TimeRange[] };

const rangeInferMap: RangeInferMap = {
  mn1: ['year', 'month', 'day'],
  d1: ['year', 'month', 'day'],
  h4: ['month', 'day', 'hour'],
  h1: ['month', 'day', 'hour'],
  m30: ['day', 'hour'],
  m15: ['day', 'hour'],
  m5: ['day', 'hour'],
  m1: ['day', 'hour'],
  tick: ['hour'],
  s1: ['hour']
};

function getLowerRange(range: TimeRange): TimeRange {
  const lookupIndex = ranges.indexOf(range);

  return ranges[lookupIndex + 1];
}

function getClosestAvailableRange(timeframe: TimeframeType, date: Date): TimeRange {
  const isCurrent = getIsCurrentObj(date);

  return rangeInferMap[timeframe].find(range => !isCurrent[range]) as TimeRange;
}

function isCurrentRange(rangeType: TimeRange, date: Date): boolean {
  const { year, month, day } = getIsCurrentObj(date);

  return (
    (rangeType === 'year' && year) ||
    (rangeType === 'month' && month) ||
    (rangeType === 'day' && day)
  );
}

type TimeframeFromUrl = {
  [key: string]: TimeframeType;
};

const timeFromUrl: TimeframeFromUrl = {
  day: Timeframe.d1,
  hour: Timeframe.h1,
  minute: Timeframe.m1,
  ticks: Timeframe.tick
};

function getTimeframeFromUrl(url: string): TimeframeType {
  const source =
    url.match(/\/v1\/candles\/(day|hour|minute)\//)?.[1] || url.match(/\/v1\/(ticks)\//)?.[1];

  if (!source || !timeFromUrl[source]) {
    throw new Error(`Unsupported data URL: ${url}`);
  }

  return timeFromUrl[source];
}

export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
