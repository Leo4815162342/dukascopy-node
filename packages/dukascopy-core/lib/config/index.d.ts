import { PriceType } from './price-types';
import { TimeframeType } from './timeframes';
import { FormatType } from './format';
import { InstrumentType } from './instruments';
export interface Config {
    instrument: InstrumentType;
    dates: {
        from: string;
        to: string;
    };
    timeframe?: TimeframeType;
    priceType?: PriceType;
    utcOffset?: number;
    volumes?: boolean;
    ignoreFlats?: boolean;
    format?: FormatType;
    batchSize?: number;
    pauseBetweenBatchesMs?: number;
}
