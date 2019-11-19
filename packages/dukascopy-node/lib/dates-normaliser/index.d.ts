import { HistoryConfig } from '../index';
declare type NormaliseDatesInput = {
    instrument: HistoryConfig['instrument'];
    startDate: HistoryConfig['dates']['from'];
    endDate: HistoryConfig['dates']['to'];
    timeframe: HistoryConfig['timeframe'];
    utcOffset: HistoryConfig['utcOffset'];
};
declare function normaliseDates({ instrument, startDate, endDate, timeframe, utcOffset }: NormaliseDatesInput): [Date, Date];
export { normaliseDates };
