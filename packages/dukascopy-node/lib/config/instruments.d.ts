import { Instrument } from '../types';
export interface InstrumentMetaData {
    name: string;
    description: string;
    minStartDate: string;
    decimalFactor: number;
    minStartDateDaily: string;
    group: string;
}
export declare type InstrumentData = {
    [key in Instrument]: InstrumentMetaData;
};
declare const instruments: InstrumentData;
export { instruments };
