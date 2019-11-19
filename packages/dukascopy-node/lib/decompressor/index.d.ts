/// <reference types="node" />
import { HistoryConfig } from './../index';
declare type DecompressInput = {
    buffer: Buffer;
    timeframe: HistoryConfig['timeframe'];
};
declare function decompress(input: DecompressInput): number[][];
export { decompress };
