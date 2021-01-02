import { PriceType, Price } from './price-types';
import { TimeframeType, Timeframe } from './timeframes';
import { FormatType, Format } from './format';
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
  format?: FormatType;
  batchSize?: number;
  pauseBetweenBatchesMs?: number;
}

export type DefaultConfig = Required<Pick<Config, OptionalKeys<Config>>>;

export const defaultConfig: DefaultConfig = {
  timeframe: Timeframe.d1,
  priceType: Price.bid,
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true,
  format: Format.array,
  batchSize: 10,
  pauseBetweenBatchesMs: 1000
};

export interface ConfigArrayTickItem extends Config {
  timeframe?: 'tick';
  format?: 'array';
}

export interface ConfigArrayItem extends Config {
  timeframe?: Exclude<TimeframeType, 'tick'> | undefined;
  format?: 'array';
}

export interface ConfigJsonTickItem extends Config {
  timeframe?: 'tick';
  format?: 'json';
}

export interface ConfigJsonItem extends Config {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'json';
}

export interface ConfigCsvItem extends Config {
  format?: 'csv';
}
