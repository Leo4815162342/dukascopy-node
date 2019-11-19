import { instruments } from './config/instruments';
import { timeframes } from './config/timeframes';
import { priceTypes } from './config/price-types';
export declare type HistoryConfig = {
    instrument: keyof typeof instruments;
    dates: {
        from: string;
        to: string;
    };
    timeframe?: keyof typeof timeframes;
    priceType?: keyof typeof priceTypes;
    utcOffset?: number;
    volumes?: boolean;
    ignoreFlats?: boolean;
};
declare function getHistoricRates(config: HistoryConfig): Promise<number[][]>;
export { getHistoricRates };
