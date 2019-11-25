import { Instrument, Timeframe } from '../types';
export declare type NormaliseDatesInput = {
    instrument: Instrument;
    startDate: string;
    endDate: string;
    timeframe: Timeframe;
    utcOffset: number;
};
declare function normaliseDates({ instrument, startDate, endDate, timeframe, utcOffset }: NormaliseDatesInput): [Date, Date];
export { normaliseDates };
