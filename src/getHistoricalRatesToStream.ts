/* eslint-disable prettier/prettier */
import { Config } from './config';

import { validateConfigNode } from './config-validator';
import { normaliseDates } from './dates-normaliser';
import { generateUrls } from './url-generator';
import { BufferFetcher } from './buffer-fetcher';
import { processData } from './processor';
import { candleHeaders, tickHeaders } from './output-formatter';
import { CacheManager } from './cache-manager';
import { formatBytes } from './utils/formatBytes';
import { BufferFetcherInput } from './buffer-fetcher/types';

import debug from 'debug';
const DEBUG_NAMESPACE = 'dukascopy-node';

import { Readable, Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { Format } from './config/format';
import { Timeframe } from './config/timeframes';
import { ProcessDataOutput } from './processor/types';

export function getHistoricalRatesToStream(config: Config): Readable {
  const stream = new Readable({
    objectMode: true,
    async read(_size) {}
  });
  try {
    const { input, isValid, validationErrors } = validateConfigNode(config);

    debug(`${DEBUG_NAMESPACE}:config`)('%O', {
      input,
      isValid,
      validationErrors
    });

    if (!isValid) {
      stream.emit('error', { validationErrors });
      stream.push(null);
      return stream;
    }

    const {
      instrument,
      dates: { from, to },
      timeframe,
      priceType,
      volumes,
      volumeUnits,
      utcOffset,
      ignoreFlats,
      format,
      batchSize,
      pauseBetweenBatchesMs,
      useCache,
      cacheFolderPath,
      retryCount,
      pauseBetweenRetriesMs,
      retryOnEmpty
    } = input;

    const [startDate, endDate] = normaliseDates({
      instrument,
      startDate: from,
      endDate: to,
      timeframe,
      utcOffset
    });
    const [startDateMs, endDateMs] = [+startDate, +endDate];

    const onItemFetch: BufferFetcherInput['onItemFetch'] = process.env.DEBUG
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
      onItemFetch,
      retryOnEmpty
    });

    const bodyHeaders = timeframe === Timeframe.tick ? tickHeaders : candleHeaders;

    let firstLine = true;
    let urlsProcessed = 0;
    const urlsforFetchingData = generateUrls({
      instrument: input.instrument,
      timeframe: input.timeframe,
      priceType: input.priceType,
      startDate: startDate,
      endDate: endDate
    });
    // console.log(urlsforFetchingData);

    const promiseProcessedData = urlsforFetchingData.map(url => {
      return new Promise<ProcessDataOutput>((resolve, reject) => {
        bufferFetcher
          .fetch([url])
          .then(bufferObjects => {
            try {
              const processedData = processData({
                instrument: input.instrument,
                requestedTimeframe: input.timeframe,
                bufferObjects: bufferObjects,
                priceType: input.priceType,
                volumes: input.volumes,
                volumeUnits: input.volumeUnits,
                ignoreFlats: input.ignoreFlats
              });
              resolve(processedData);
            } catch (err: any) {
              reject(err);
            }
          })
          .catch((err: any) => {
            reject(err);
          });
      });
    });

    pipeline(
      Readable.from(promiseProcessedData),
      new Transform({
        objectMode: true,
        transform: async (processedDataPr, _, callback) => {
          const processedData = await processedDataPr;
          try {
            //Filter Data
            processedData.forEach((item: number[]) => {
              const [timestamp] = item;
              if (timestamp && timestamp >= startDateMs && timestamp < endDateMs) {
                if (input.format === Format.array) {
                  stream.push(item);
                } else if (format === Format.json) {
                  const data = item.reduce((all, item, i) => {
                    const name = bodyHeaders[i];
                    all[name] = item;
                    return all;
                    // TODO: fix typing here
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  }, {} as any);
                  stream.push(data);
                } else if (format === Format.csv) {
                  if (firstLine) {
                    const csvHeaders = bodyHeaders.join(',');
                    stream.push(csvHeaders);
                    firstLine = false;
                  }
                  stream.push(`\n${item.join(',')}`);
                }
              }
            });

            if (++urlsProcessed === urlsforFetchingData.length) {
              //console.log('urlsProcessed', urlsProcessed);
              stream.push(null);
            }

            callback();
          } catch (err: any) {
            callback(err);
          }
        }
      })
    ).catch(err => {
      stream.emit('error', err);
      stream.push(null);
    });
  } catch (err) {
    stream.emit('error', err);
    stream.push(null);
  }

  return stream;
}
