import {
  validateConfig,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  processData,
  formatOutput,
  Config,
  Output,
  ArrayTickItem,
  JsonItemTick,
  JsonItem,
  ArrayItem
} from './index';

import { Timeframe, Price, Format, TimeframeType } from './index';
import { OptionalKeys } from 'utility-types';
import { ValidationFn } from './config-validator/types';
// import { defaultSchemaValidationFn } from './config-validator/schema';

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

export class DukascopyBase<DefaultConfig extends Required<Pick<Config, OptionalKeys<Config>>>> {
  constructor(private defaultConfig: DefaultConfig, private validationFn: ValidationFn) {
    this.getHistoricalRates = this.getHistoricalRates.bind(this);
  }

  public async getHistoricalRates(config: ConfigArrayItem): Promise<ArrayItem[]>;
  public async getHistoricalRates(config: ConfigArrayTickItem): Promise<ArrayTickItem[]>;
  public async getHistoricalRates(config: ConfigJsonItem): Promise<JsonItem[]>;
  public async getHistoricalRates(config: ConfigJsonTickItem): Promise<JsonItemTick[]>;
  public async getHistoricalRates(config: ConfigCsvItem): Promise<string>;
  public async getHistoricalRates(config: Config): Promise<Output>;
  public async getHistoricalRates(config: Config): Promise<Output> {
    const fullConfig = { ...this.defaultConfig, ...config };

    const { isValid, validationErrors } = validateConfig(fullConfig, this.validationFn);

    if (!isValid) {
      this.onInvalidConfig && this.onInvalidConfig(validationErrors);
    }

    const {
      instrument,
      dates: { from, to },
      timeframe,
      priceType,
      volumes,
      utcOffset,
      ignoreFlats,
      format,
      batchSize,
      pauseBetweenBatchesMs
    } = fullConfig;

    const [startDate, endDate] = normaliseDates({
      instrument,
      startDate: from,
      endDate: to,
      timeframe,
      utcOffset
    });

    const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

    const bufferFetcher = new BufferFetcher({
      batchSize,
      pauseBetweenBatchesMs,
      notifyOnItemFetchFn: this.onItemFetch
    });

    this.onFetchStart && this.onFetchStart(fullConfig);

    const bufferredData = await bufferFetcher.fetch(urls);

    const processedData = processData({
      instrument,
      requestedTimeframe: timeframe,
      bufferObjects: bufferredData,
      priceType,
      volumes,
      ignoreFlats
    });

    const [startDateMs, endDateMs] = [+startDate, +endDate];

    const filteredData = processedData.filter(
      ([timestamp]) => timestamp && timestamp >= startDateMs && timestamp < endDateMs
    );

    const formattedData = formatOutput({ processedData: filteredData, format, timeframe });

    this.onFetchSuccess && this.onFetchSuccess();

    return formattedData;
  }

  public onFetchStart?(config: DefaultConfig & Config): void;

  public onItemFetch?(url: string): void;

  public onFetchSuccess?(): void;

  public onInvalidConfig?(validationErrors: string[]): void {
    throw { validationErrors };
  }
}

// class DukascopyNode extends DukascopyBase<Required<Pick<Config, OptionalKeys<Config>>>> {
//   constructor() {
//     super(defaultConfig, defaultSchemaValidationFn);
//   }

//   onFetchStart(data: any): void {
//     console.log('started', data);
//   }

//   onFetchSuccess(): void {
//     console.log('DAAAATAAAA');
//   }
//   onItemFetch(url: string): void {
//     console.log('LOOOOL', url);
//   }
// }
