import { resolve, join } from 'path';
import os from 'os';
import { progressBar } from './progress';
import { createWriteStream } from 'fs';
import { ensureDir, ensureFile, stat } from 'fs-extra';
import { getConfigFromCliArgs } from './config';
import { normaliseDates } from '../dates-normaliser';
import { generateUrls } from '../url-generator';
import { printDivider, printHeader, printSuccess, printErrors, printGeneral } from './printer';
import { Format } from '../config/format';
import { BufferFetcher } from '../buffer-fetcher';
import { CacheManager } from '../cache-manager';
import { processData } from '../processor';
import { formatBytes } from '../utils/formatBytes';
import chalk from 'chalk';
import debug from 'debug';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';

import { version } from '../../package.json';
import { BatchStreamWriter } from '../stream-writer';
import { BufferObject } from '../buffer-fetcher/types';
import { formatTimeDuration } from '../utils/formatTimeDuration';

dayjs.extend(utc);
dayjs.extend(tz);

const DEBUG_NAMESPACE = 'dukascopy-node:cli';

export async function run(argv: NodeJS.Process['argv']) {
  const { input, isValid, validationErrors } = getConfigFromCliArgs(argv);

  let {
    instrument,
    dates: { from: fromDate, to: toDate },
    timeframe,
    priceType,
    utcOffset,
    volumes,
    volumeUnits,
    ignoreFlats,
    format,
    batchSize,
    pauseBetweenBatchesMs,
    useCache,
    cacheFolderPath,
    dir,
    silent,
    debug: isDebugActive,
    inline,
    retryCount,
    failAfterRetryCount,
    retryOnEmpty,
    pauseBetweenRetriesMs,
    fileName: customFileName,
    dateFormat,
    timeZone
  } = input;

  if (isDebugActive) {
    debug.enable(`${DEBUG_NAMESPACE}:*`);
  } else {
    if (process.env.DEBUG) {
      isDebugActive = true;
      debug.enable(process.env.DEBUG);
    }
  }

  const downloadStartTs = Date.now();

  try {
    debug(`${DEBUG_NAMESPACE}:version`)(version);
    debug(`${DEBUG_NAMESPACE}:nodejs`)(process.version);
    debug(`${DEBUG_NAMESPACE}:os`)(`${os.type()}, ${os.release()} (${os.platform()})`);
    debug(`${DEBUG_NAMESPACE}:config`)('%O', {
      input,
      isValid,
      validationErrors
    });

    if (isValid) {
      const [startDate, endDate] = normaliseDates({
        instrument,
        startDate: fromDate,
        endDate: toDate,
        timeframe,
        utcOffset
      });

      const fileExtension = format === Format.csv ? Format.csv : Format.json;

      const dateRangeStr = [startDate, endDate]
        .map(date => {
          let cutoff = 10;
          const hasHours = date.getUTCHours() !== 0;
          const hasMinutes = date.getUTCMinutes() !== 0;

          if (hasHours) {
            cutoff = 13;
          }

          if (hasMinutes) {
            cutoff = 16;
          }

          return date.toISOString().slice(0, cutoff).replace(/:/g, '-');
        })
        .join('-');

      const fileName = customFileName
        ? `${customFileName}.${fileExtension}`
        : `${instrument}-${timeframe}${
            timeframe === 'tick' ? '' : '-' + priceType
          }-${dateRangeStr}.${fileExtension}`;
      const folderPath = resolve(process.cwd(), dir);
      const filePath = resolve(folderPath, fileName);

      if (!isDebugActive) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        silent ? printDivider() : printHeader(input, startDate, endDate);
      }

      const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });
      debug(`${DEBUG_NAMESPACE}:urls`)(`Generated ${urls.length} urls`);
      debug(`${DEBUG_NAMESPACE}:urls`)(`%O`, urls);

      let step = 0;

      if (!isDebugActive) {
        progressBar.start(urls.length, step);
      }
      await ensureDir(folderPath);

      const fileWriteStream = createWriteStream(filePath, { flags: 'w+' });

      // Create a promise to track when the stream is fully finished
      const streamFinishPromise = new Promise<void>((resolve, reject) => {
        fileWriteStream.on('finish', async () => {
          try {
            const downloadEndTs = Date.now();
            if (!isDebugActive) {
              progressBar.stop();
            }
            const relativeFilePath = join(dir, fileName);
            await ensureFile(filePath);
            const { size } = await stat(filePath);
            printSuccess(`√ File saved: ${chalk.bold(relativeFilePath)} (${formatBytes(size)})`);
            printGeneral(`Download time: ${formatTimeDuration(downloadEndTs - downloadStartTs)}`);
            resolve();
          } catch (error) {
            reject(error);
          }
        });

        fileWriteStream.on('error', reject);
      });

      const batchStreamWriter = new BatchStreamWriter({
        fileWriteStream,
        timeframe,
        format,
        isInline: inline,
        volumes,
        startDateTs: +startDate,
        endDateTs: +endDate
      });

      const bufferFetcher = new BufferFetcher({
        batchSize,
        pauseBetweenBatchesMs,
        cacheManager: useCache ? new CacheManager({ cacheFolderPath }) : undefined,
        retryCount,
        retryOnEmpty,
        failAfterRetryCount,
        pauseBetweenRetriesMs,
        onItemFetch: (url, buffer, isCacheHit): void => {
          debug(`${DEBUG_NAMESPACE}:fetcher`)(
            url,
            `| ${formatBytes(buffer.length)} |`,
            `${isCacheHit ? 'cache' : 'network'}`
          );
          if (!isDebugActive) {
            step += 1;
            progressBar.update(step);
          }
        },
        onBatchFetch: async (bufferObjects, isLastBatch) => {
          const filteredBatchData: BufferObject[] = [];

          for (let j = 0, m = bufferObjects.length; j < m; j++) {
            if (bufferObjects[j].buffer.length > 0) {
              filteredBatchData.push(bufferObjects[j]);
            }
          }

          if (filteredBatchData.length) {
            const processedBatch = processData({
              instrument,
              requestedTimeframe: timeframe,
              bufferObjects: filteredBatchData,
              priceType,
              volumes,
              volumeUnits,
              ignoreFlats
            });

            await batchStreamWriter.writeBatch(
              processedBatch,
              dateFormat
                ? timeStamp => {
                    if (dateFormat === 'iso') {
                      return new Date(timeStamp).toISOString();
                    }

                    if (timeZone) {
                      return dayjs(timeStamp).tz(timeZone).format(dateFormat);
                    }

                    return dayjs(timeStamp).utc().format(dateFormat);
                  }
                : undefined
            );
          }

          if (isLastBatch) {
            await batchStreamWriter.closeBatchFile();
          }
        }
      });

      try {
        await bufferFetcher.fetch_optimized(urls);

        // Wait for the stream to fully finish before returning
        await streamFinishPromise;
      } catch (fetchError) {
        // If fetch fails, close the stream to prevent hanging finish events
        fileWriteStream.destroy();
        throw fetchError;
      }
    } else {
      printErrors(
        'Search config invalid:',
        validationErrors.map(err => err?.message || '')
      );
      process.exit(1);
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
    printErrors('\nSomething went wrong:', errorMsg);
    process.exit(1);
  }
}
