import { PriceType } from './price-types';
import { Timeframe } from './timeframes';
import { Format } from './format';
import { Instrument } from './instruments';
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

export type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;
