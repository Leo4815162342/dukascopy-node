import {
  ConfigArrayItem,
  ConfigArrayTickItem,
  ConfigJsonItem,
  ConfigJsonTickItem,
  ConfigCsvItem,
  Config
} from './config';

import { validateConfigNode } from './config-validator';
import { normaliseDates } from './dates-normaliser';
import { generateUrls } from './url-generator';
import { BufferFetcher } from './buffer-fetcher';
import { processData } from './processor';
import { formatOutput } from './output-formatter';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';
import { CacheManager } from './cache-manager';

export async function getHistoricRates(config: ConfigArrayItem): Promise<ArrayItem[]>;
export async function getHistoricRates(config: ConfigArrayTickItem): Promise<ArrayTickItem[]>;
export async function getHistoricRates(config: ConfigJsonItem): Promise<JsonItem[]>;
export async function getHistoricRates(config: ConfigJsonTickItem): Promise<JsonItemTick[]>;
export async function getHistoricRates(config: ConfigCsvItem): Promise<string>;
export async function getHistoricRates(config: Config): Promise<Output>;

export async function getHistoricRates(config: Config): Promise<Output> {
  const { input, isValid, validationErrors } = validateConfigNode(config);

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
    pauseBetweenBatchesMs,
    useCache,
    cacheFolderPath,
    retryCount,
    pauseBetweenRetriesMs
  } = input;

  const [startDate, endDate] = normaliseDates({
    instrument,
    startDate: from,
    endDate: to,
    timeframe,
    utcOffset
  });

  const urls = generateUrls({
    instrument,
    timeframe,
    priceType,
    startDate,
    endDate
  });

  const bufferFetcher = new BufferFetcher({
    batchSize,
    pauseBetweenBatchesMs,
    cacheManager: useCache ? new CacheManager({ cacheFolderPath }) : undefined,
    retryCount,
    pauseBetweenRetriesMs
  });

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

  const formattedData = formatOutput({
    processedData: filteredData,
    format,
    timeframe
  });

  return formattedData;
}
