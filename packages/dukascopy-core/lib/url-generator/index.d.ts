import { GenerateUrlsInput } from './types';
export declare const URL_ROOT = "https://datafeed.dukascopy.com/datafeed";
export declare function generateUrls({ instrument, timeframe, priceType, startDate, endDate }: GenerateUrlsInput): string[];
