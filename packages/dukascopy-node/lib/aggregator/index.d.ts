import { Timeframe, PriceType } from './../types';
export declare type AggregateInput = {
    data: number[][];
    fromTimeframe: Timeframe;
    toTimeframe: Timeframe;
    priceType: PriceType;
    ignoreFlats: boolean;
};
export declare function aggregate({ data, fromTimeframe, toTimeframe, priceType, ignoreFlats }: AggregateInput): number[][];
