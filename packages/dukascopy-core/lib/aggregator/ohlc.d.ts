import { PriceType } from '../config/price-types';
declare function getOHLC(input: number[][], filterFlats?: boolean): number[];
declare function getMinuteOHLCfromTicks(input: number[][], priceType: PriceType): number[][];
declare function getMonthlyOHLCfromDays(input: number[][]): number[][];
export { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays };
