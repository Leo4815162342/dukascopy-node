import { HistoryConfig } from './../index';
declare type NormaliseInput = {
    data: number[][];
    timeframe: HistoryConfig['timeframe'];
    startTs: number;
    instrument: HistoryConfig['instrument'];
    volumes: boolean;
};
declare function normalise(input: NormaliseInput): number[][];
export { normalise };
