import { TimeframeType } from '../config/timeframes';
import { InstrumentType } from '../config/instruments';
export interface NormaliseDatesInput {
    instrument: InstrumentType;
    startDate: string;
    endDate: string;
    timeframe: TimeframeType;
    utcOffset: number;
}
