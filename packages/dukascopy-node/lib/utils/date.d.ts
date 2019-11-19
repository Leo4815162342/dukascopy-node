import { TimeRange } from './range';
declare function getUTCDateFromString(date: string): false | Date;
declare function getYMDH(date: Date): number[];
declare function getStartOfUtc(date: Date, period: TimeRange, offset?: number): Date;
declare function getIsCurrentObj(date: Date): {
    year: boolean;
    month: boolean;
    day: boolean;
    hour: boolean;
};
declare function getDateFromUrl(url: string): Date;
export { getUTCDateFromString, getYMDH, getStartOfUtc, getIsCurrentObj, getDateFromUrl };
