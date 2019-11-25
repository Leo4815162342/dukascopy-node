import { PriceType } from '../types';
declare type PriceTypes = {
    [key in PriceType]: number;
};
declare const priceTypes: PriceTypes;
export { priceTypes };
