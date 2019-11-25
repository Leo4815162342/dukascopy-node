import { Instrument, PriceType, Timeframe } from '../types';
declare const URL_ROOT = "https://datafeed.dukascopy.com/datafeed";
declare type GenerateUrlsInput = {
    instrument: Instrument;
    timeframe: Timeframe;
    startDate: Date;
    endDate: Date;
    priceType: PriceType;
};
declare function generateUrls({ instrument, timeframe, priceType, startDate, endDate }: GenerateUrlsInput): string[];
export { URL_ROOT, generateUrls };
