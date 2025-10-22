import { PriceType, Price } from './price-types';
import { TimeframeType, Timeframe } from './timeframes';
import { FormatType, Format } from './format';
import { InstrumentType } from './instruments';
import { VolumeUnit, VolumeUnitType } from './volume-unit';

type OptionalKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

export type DateInput = string | Date | number;

export interface ConfigBase {
  instrument: InstrumentType;
  dates: {
    from: DateInput;
    to: DateInput;
  };
  timeframe?: TimeframeType;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  volumeUnits?: VolumeUnitType;
  ignoreFlats?: boolean;
  format?: FormatType;
  batchSize?: number;
  pauseBetweenBatchesMs?: number;
  useCache?: boolean;
  cacheFolderPath?: string;
  retryCount?: number;
  retryOnEmpty?: boolean;
  failAfterRetryCount?: boolean;
  pauseBetweenRetriesMs?: number;
}

export type DefaultConfig = Required<Pick<ConfigBase, OptionalKeys<ConfigBase>>>;

export const defaultConfig: DefaultConfig = {
  timeframe: Timeframe.d1,
  priceType: Price.bid,
  utcOffset: 0,
  volumes: true,
  volumeUnits: VolumeUnit.millions,
  ignoreFlats: true,
  format: Format.array,
  batchSize: 10,
  pauseBetweenBatchesMs: 1000,
  useCache: false,
  cacheFolderPath: '',
  retryCount: 0,
  retryOnEmpty: false,
  failAfterRetryCount: true,
  pauseBetweenRetriesMs: 500
};

export interface ConfigArrayTickItem extends ConfigBase {
  timeframe?: 'tick';
  format?: 'array';
}

export interface ConfigArrayItem extends ConfigBase {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'array';
}

export interface ConfigJsonTickItem extends ConfigBase {
  timeframe?: 'tick';
  format?: 'json';
}

export interface ConfigJsonItem extends ConfigBase {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'json';
}

export interface ConfigCsvItem extends ConfigBase {
  format?: 'csv';
}

export type Config =
  | ConfigArrayTickItem
  | ConfigArrayItem
  | ConfigJsonTickItem
  | ConfigJsonItem
  | ConfigCsvItem;
