import { PriceType } from './price-types';
import { TimeframeType } from './timeframes';
import { Format } from './format';
import { InstrumentType } from './instruments';
import { OptionalKeys } from 'utility-types';

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
  format?: Format;
}

export type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;
