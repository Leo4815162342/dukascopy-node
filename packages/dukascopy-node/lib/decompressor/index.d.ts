/// <reference types="node" />
import { Timeframe } from './../types';
declare type DecompressInput = {
    buffer: Buffer;
    timeframe: Timeframe;
};
declare function decompress(input: DecompressInput): number[][];
export { decompress };
