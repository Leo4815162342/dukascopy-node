import { TimeframeType } from '../config/timeframes';
export declare type TimeRange = 'hour' | 'day' | 'month' | 'year';
declare function getLowerRange(range: TimeRange): TimeRange;
declare function getClosestAvailableRange(timeframe: TimeframeType, date: Date): TimeRange;
declare function isCurrentRange(rangeType: TimeRange, date: Date): boolean;
declare function getTimeframeFromUrl(url: string): TimeframeType;
export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
