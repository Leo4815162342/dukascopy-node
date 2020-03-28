import { getIsCurrentObj } from '../utils/date';
import { Timeframe } from '../config/timeframes';

export type TimeRange = 'hour' | 'day' | 'month' | 'year';

const ranges: TimeRange[] = ['year', 'month', 'day', 'hour'];

type RangeInferMap = { [key in Timeframe]: TimeRange[] };

const rangeInferMap: RangeInferMap = {
  mn1: ['year', 'month', 'day'],
  d1: ['year', 'month', 'day'],
  h1: ['month', 'day', 'hour'],
  m30: ['day', 'hour'],
  m1: ['day', 'hour'],
  tick: ['hour']
};

function getLowerRange(range: TimeRange): TimeRange {
  const lookupIndex = ranges.indexOf(range);

  return ranges[lookupIndex + 1];
}

function getClosestAvailableRange(timeframe: Timeframe, date: Date): TimeRange {
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
  [key: string]: Timeframe;
};

const timeFromUrl: TimeframeFromUrl = {
  day_1: 'd1',
  hour_1: 'h1',
  min_1: 'm1',
  ticks: 'tick'
};

function getTimeframeFromUrl(url: string): Timeframe {
  const [, match] = url.match(/_(day_1|hour_1|min_1|ticks).bi5$/) || [];

  return timeFromUrl[match];
}

export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
