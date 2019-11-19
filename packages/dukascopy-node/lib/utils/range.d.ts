import { HistoryConfig } from '../index';
export declare type TimeRange = 'hour' | 'day' | 'month' | 'year';
declare function getLowerRange(range: TimeRange): TimeRange;
declare function getClosestAvailableRange(timeframe: HistoryConfig['timeframe'], date: Date): TimeRange;
declare function isCurrentRange(rangeType: TimeRange, date: Date): boolean;
declare function getTimeframeFromUrl(url: string): HistoryConfig['timeframe'];
export { getLowerRange, getClosestAvailableRange, isCurrentRange, getTimeframeFromUrl };
