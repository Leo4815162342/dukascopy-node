export interface InstrumentData {
    name: string;
    description: string;
    minStartDate: string;
    decimalFactor: number;
    minStartDateDaily: string;
    group: string;
}
export declare type InstrumentMetaData = {
    [key: string]: InstrumentData;
};
export declare const instrumentMetaData: InstrumentMetaData;
