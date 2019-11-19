import { HistoryConfig } from './../index';
declare type AggregateInput = {
    data: number[][];
    fromTimeframe: HistoryConfig['timeframe'];
    toTimeframe: HistoryConfig['timeframe'];
    priceType?: HistoryConfig['priceType'];
    ignoreFlats: HistoryConfig['ignoreFlats'];
};
declare function aggregate({ data, fromTimeframe, toTimeframe, priceType, ignoreFlats }: AggregateInput): number[][];
export { aggregate };
