import { JsonItem, JsonItemTick, ArrayTickItem, ArrayItem, Output } from './types';
import { ProcessDataOutput } from '../processor/types';
import { TimeframeType } from '../config/timeframes';
import { FormatType } from '../config/format';
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: 'tick';
    format: 'array';
}): ArrayTickItem[];
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: 'tick';
    format: 'json';
}): JsonItemTick[];
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: Exclude<TimeframeType, 'tick'>;
    format: 'json';
}): JsonItem[];
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: Exclude<TimeframeType, 'tick'>;
    format: 'array';
}): ArrayItem[];
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: TimeframeType;
    format: 'csv';
}): string;
export declare function formatOutput({ processedData, timeframe, format }: {
    processedData: ProcessDataOutput;
    timeframe: TimeframeType;
    format: FormatType;
}): Output;
