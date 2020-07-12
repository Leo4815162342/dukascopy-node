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

export class DukascopyBase<T extends DefaultConfig> {
  constructor(private defaultConfig: T, private validationFn: ValidationFn) {
    this.getHistoricRates = this.getHistoricRates.bind(this);
  }

  public async getHistoricRates(config: ConfigArrayItem): Promise<ArrayItem[]>;
  public async getHistoricRates(config: ConfigArrayTickItem): Promise<ArrayTickItem[]>;
  public async getHistoricRates(config: ConfigJsonItem): Promise<JsonItem[]>;
  public async getHistoricRates(config: ConfigJsonTickItem): Promise<JsonItemTick[]>;
  public async getHistoricRates(config: ConfigCsvItem): Promise<string>;
  public async getHistoricRates(config: Config): Promise<Output>;
  public async getHistoricRates(config: Config): Promise<Output> {
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

  public onFetchStart?(config: T & Config): void;

  public onItemFetch?(url: string): void;

  public onFetchSuccess?(): void;

  public onInvalidConfig?(validationErrors: string[]): void {
    throw { validationErrors };
  }
}
