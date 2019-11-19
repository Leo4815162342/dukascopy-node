import { HistoryConfig } from '../index';
declare const URL_ROOT = "https://datafeed.dukascopy.com/datafeed";
declare type GenerateUrlsInput = {
    instrument: HistoryConfig['instrument'];
    timeframe: HistoryConfig['timeframe'];
    startDate: Date;
    endDate: Date;
    priceType: HistoryConfig['priceType'];
};
declare function generateUrls({ instrument, timeframe, priceType, startDate, endDate }: GenerateUrlsInput): string[];
export { URL_ROOT, generateUrls };
