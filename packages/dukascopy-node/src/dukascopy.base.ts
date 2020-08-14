import { validateConfig } from './config-validator';
import { normaliseDates } from './dates-normaliser';
import { generateUrls } from './url-generator';
import { BufferFetcher } from './buffer-fetcher';
import { processData } from './processor';
import { formatOutput } from './output-formatter';

import { ValidationFn } from './config-validator/types';
import {
  ConfigArrayItem,
  ConfigArrayTickItem,
  ConfigJsonItem,
  ConfigJsonTickItem,
  ConfigCsvItem,
  DefaultConfig,
  Config
} from './config';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';
import { BufferObject } from './buffer-fetcher/types';

export abstract class DukascopyBase<ExtraConfig = {}> {
  constructor() {
    this.getHistoricRates = this.getHistoricRates.bind(this);
  }

  abstract defaultConfig: DefaultConfig;
  abstract validationFn: ValidationFn;

  public async getHistoricRates(config: ExtraConfig & ConfigArrayItem): Promise<ArrayItem[]>;
  public async getHistoricRates(
    config: ExtraConfig & ConfigArrayTickItem
  ): Promise<ArrayTickItem[]>;
  public async getHistoricRates(config: ExtraConfig & ConfigJsonItem): Promise<JsonItem[]>;
  public async getHistoricRates(config: ExtraConfig & ConfigJsonTickItem): Promise<JsonItemTick[]>;
  public async getHistoricRates(config: ExtraConfig & ConfigCsvItem): Promise<string>;
  public async getHistoricRates(config: ExtraConfig & Config): Promise<Output>;
  public async getHistoricRates(config: ExtraConfig & Config): Promise<Output> {
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

    this.onFetchStart && this.onFetchStart(urls);

    let bufferredData = [] as BufferObject[];

    try {
      bufferredData = await bufferFetcher.fetch(urls);
    } catch (err) {
      this.onFetchFail && this.onFetchFail(err);
    }

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

    this.onFetchSuccess && this.onFetchSuccess(formattedData);

    return formattedData;
  }

  public onFetchStart?(urls: string[]): void;

  public onItemFetch?(url: string): void;

  public onFetchSuccess?(output: Output): void;
  public onFetchFail?(error: Error): void;

  public onInvalidConfig?(validationErrors: string[]): void;
}
