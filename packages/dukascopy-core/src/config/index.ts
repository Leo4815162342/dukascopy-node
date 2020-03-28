import { Instrument, Timeframe, Format } from './types';
import { PriceType } from './price-types';
import { OptionalKeys } from 'utility-types';

export interface Config {
  instrument: Instrument;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: Timeframe;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: Format;
}

// export type DefaultHistoryConfig = Required<Pick<HistoryConfig, OptionalKeys<HistoryConfig>>>;
export type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;
