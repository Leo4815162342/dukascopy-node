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
} from 'dukascopy-core';

import {
  defaultConfig,
  ConfigArrayTickItem,
  ConfigArrayItem,
  ConfigJsonTickItem,
  ConfigJsonItem,
  ConfigCsvItem
} from './config';

export async function getHistoricRates(config: ConfigArrayItem): Promise<ArrayItem[]>;
export async function getHistoricRates(config: ConfigArrayTickItem): Promise<ArrayTickItem[]>;
export async function getHistoricRates(config: ConfigJsonItem): Promise<JsonItem[]>;
export async function getHistoricRates(config: ConfigJsonTickItem): Promise<JsonItemTick[]>;
export async function getHistoricRates(config: ConfigCsvItem): Promise<string>;
export async function getHistoricRates(config: Config): Promise<Output>;

export async function getHistoricRates(config: Config): Promise<Output> {
  const mergedConfig = { ...defaultConfig, ...config };

  const { isValid, validationErrors } = validateConfig(mergedConfig);

  if (!isValid) {
    throw { validationErrors };
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
  } = mergedConfig;

  const [startDate, endDate] = normaliseDates({
    instrument,
    startDate: from,
    endDate: to,
    timeframe,
    utcOffset
  });

  const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

  const bufferFetcher = new BufferFetcher({ batchSize, pauseBetweenBatchesMs });

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

  return formattedData;
}
