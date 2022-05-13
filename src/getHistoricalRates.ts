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
import { CacheManager } from './cache-manager';
import { formatBytes } from './utils/formatBytes';
import { Timeframe } from './config/timeframes';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';
import { NotifyFn } from './buffer-fetcher/types';

import { version } from '../package.json';

import debug from 'debug';

const DEBUG_NAMESPACE = 'dukascopy-node';

export async function getHistoricalRates(config: ConfigArrayItem): Promise<ArrayItem[]>;
export async function getHistoricalRates(config: ConfigArrayTickItem): Promise<ArrayTickItem[]>;
export async function getHistoricalRates(config: ConfigJsonItem): Promise<JsonItem[]>;
export async function getHistoricalRates(config: ConfigJsonTickItem): Promise<JsonItemTick[]>;
export async function getHistoricalRates(config: ConfigCsvItem): Promise<string>;
export async function getHistoricalRates(config: Config): Promise<Output>;

export async function getHistoricalRates(config: Config): Promise<Output> {
  debug(`${DEBUG_NAMESPACE}:version`)(`${version} (node ${process.version})`);

  const { input, isValid, validationErrors } = validateConfigNode(config);

  debug(`${DEBUG_NAMESPACE}:config`)('%O', {
    input,
    isValid,
    validationErrors
  });

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

  debug(`${DEBUG_NAMESPACE}:urls`)(`Generated ${urls.length} urls`);
  debug(`${DEBUG_NAMESPACE}:urls`)(`%O`, urls);

  const notifyOnItemFetchFn: NotifyFn | undefined = process.env.DEBUG
    ? (url, buffer, isCacheHit) => {
        debug(`${DEBUG_NAMESPACE}:fetcher`)(
          url,
          `| ${formatBytes(buffer.length)} |`,
          `${isCacheHit ? 'cache' : 'network'}`
        );
      }
    : undefined;

  const bufferFetcher = new BufferFetcher({
    batchSize,
    pauseBetweenBatchesMs,
    cacheManager: useCache ? new CacheManager({ cacheFolderPath }) : undefined,
    retryCount,
    pauseBetweenRetriesMs,
    notifyOnItemFetchFn
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

  debug(`${DEBUG_NAMESPACE}:data`)(
    `Generated ${filteredData.length} ${timeframe === Timeframe.tick ? 'ticks' : 'OHLC candles'}`
  );

  const formattedData = formatOutput({
    processedData: filteredData,
    format,
    timeframe
  });

  return formattedData;
}

/**
 * @deprecated use `getHistoricalRates` instead
 *
 * Preserving for backwards compatibility
 * @see https://github.com/Leo4815162342/dukascopy-node/pull/73
 */
export const getHistoricRates = getHistoricalRates;
