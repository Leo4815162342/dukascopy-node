#!/usr/bin/env node

import { resolve, join } from 'path';
import os from 'os';
import { progressBar } from './progress';
import { ensureDir, ensureFile, stat } from 'fs-extra';
import { isValid, validationErrors, input } from './config';
import { normaliseDates } from '../dates-normaliser';
import { generateUrls } from '../url-generator';
import { printDivider, printHeader, printSuccess, printErrors } from './printer';
import { Format } from '../config/format';
import { BufferFetcher } from '../buffer-fetcher';
import { CacheManager } from '../cache-manager';
import { processData } from '../processor';
import { formatBytes } from '../utils/formatBytes';
import chalk from 'chalk';
import debug from 'debug';

import { Timeframe } from '../config/timeframes';
import { version } from '../../package.json';
import { getDateString } from '../utils/date';
import { writeStream } from '../stream-writer';

const DEBUG_NAMESPACE = 'dukascopy-node:cli';

let {
  instrument,
  dates: { from: fromDate, to: toDate },
  timeframe,
  priceType,
  utcOffset,
  volumes,
  ignoreFlats,
  format,
  batchSize,
  pauseBetweenBatchesMs,
  useCache,
  cacheFolderPath,
  dir,
  silent,
  debug: isDebugActive,
  inline
} = input;

if (isDebugActive) {
  debug.enable(`${DEBUG_NAMESPACE}:*`);
} else {
  if (process.env.DEBUG) {
    isDebugActive = true;
    debug.enable(process.env.DEBUG);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
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

      const fileName = `${instrument}-${timeframe}${
        timeframe === 'tick' ? '' : '-' + priceType
      }-${getDateString(startDate)}-${getDateString(endDate)}.${
        format === Format.csv ? Format.csv : Format.json
      }`;
      const folderPath = resolve(process.cwd(), dir);
      const filePath = resolve(folderPath, fileName);

      if (!isDebugActive) {
        silent ? printDivider() : printHeader(input, startDate, endDate);
      }

      const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

      debug(`${DEBUG_NAMESPACE}:urls`)(`Generated ${urls.length} urls`);
      debug(`${DEBUG_NAMESPACE}:urls`)(`%O`, urls);

      let val = 0;

      if (!isDebugActive) {
        progressBar.start(urls.length, val);
      }

      const bufferFetcher = new BufferFetcher({
        batchSize,
        pauseBetweenBatchesMs,
        cacheManager: useCache ? new CacheManager({ cacheFolderPath }) : undefined,
        notifyOnItemFetchFn: (url, buffer, isCacheHit): void => {
          debug(`${DEBUG_NAMESPACE}:fetcher`)(
            url,
            `| ${formatBytes(buffer.length)} |`,
            `${isCacheHit ? 'cache' : 'network'}`
          );
          if (!isDebugActive) {
            val += 1;
            progressBar.update(val);
          }
        }
      });

      const bufferredData = await bufferFetcher.fetch(urls);

      if (bufferredData.length) {
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
          `Generated ${filteredData.length} ${
            timeframe === Timeframe.tick ? 'ticks' : 'OHLC candles'
          }`
        );

        await ensureDir(folderPath);

        await writeStream(filteredData, timeframe, format, filePath, inline);
      }

      if (!isDebugActive) {
        progressBar.stop();
      }

      const relativeFilePath = join(dir, fileName);
      await ensureFile(filePath);
      const { size } = await stat(filePath);
      printSuccess(`√ File saved: ${chalk.bold(relativeFilePath)} (${formatBytes(size)})`);
    } else {
      printErrors(
        'Search config invalid:',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        validationErrors.map(err => err.message!)
      );
      process.exit(0);
    }
  } catch (err) {
    printErrors('\nSomething went wrong:', JSON.stringify(err));
    process.exit(0);
  }
})();
