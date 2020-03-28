import { Instrument, Format } from './types';
import { PriceType } from './price-types';
import { OptionalKeys } from 'utility-types';
import { Timeframe } from './timeframes';

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

export type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;
