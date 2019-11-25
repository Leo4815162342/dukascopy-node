import { Timeframe, Instrument } from './../types';
export declare type NormaliseInput = {
    data: number[][];
    timeframe: Timeframe;
    startTs: number;
    instrument: Instrument;
    volumes: boolean;
};
declare function normalise(input: NormaliseInput): number[][];
export { normalise };
