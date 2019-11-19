import { HistoryConfig } from './../index';
declare function getOHLC(input: number[][], filterFlats?: boolean): number[];
declare function getMinuteOHLCfromTicks(input: number[][], priceType: HistoryConfig['priceType']): number[][];
declare function getMonthlyOHLCfromDays(input: number[][]): number[][];
export { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays };
