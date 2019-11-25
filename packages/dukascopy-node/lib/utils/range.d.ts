import { Timeframe } from '../types';
export declare type TimeRange = 'hour' | 'day' | 'month' | 'year';
declare function getLowerRange(range: TimeRange): TimeRange;
declare function getClosestAvailableRange(timeframe: Timeframe, date: Date): TimeRange;
declare function isCurrentRange(rangeType: TimeRange, date: Date): boolean;
declare function getTimeframeFromUrl(url: string): Timeframe;
export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
