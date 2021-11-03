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
  tick: ['hour']
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
  day_1: Timeframe.d1,
  hour_1: Timeframe.h1,
  min_1: Timeframe.m1,
  ticks: Timeframe.tick
};

function getTimeframeFromUrl(url: string): TimeframeType {
  const [, match] = url.match(/_(day_1|hour_1|min_1|ticks).bi5$/) || [];

  return timeFromUrl[match];
}

export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
