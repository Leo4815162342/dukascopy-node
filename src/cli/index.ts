#!/usr/bin/env node

import { resolve } from 'path';
import { progressBar } from './progress';
import { outputFile } from 'fs-extra';
import { isValid, validationErrors, input } from './config';
import { normaliseDates } from '../dates-normaliser';
import { generateUrls } from '../url-generator';
import { printDivider, printHeader, printSuccess, printErrors, printWarning } from './printer';
import { Format } from '../config/format';
import { BufferFetcher } from '../buffer-fetcher';
import { CacheManager } from '../cache-manager';
import { processData } from '../processor';
import { formatOutput } from '../output-formatter';
import { formatBytes } from '../utils/formatBytes';
import chalk from 'chalk';
import debug from 'debug';

import { Output } from '../output-formatter/types';
import { Timeframe } from '../config/timeframes';
import { version } from '../../package.json';

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
  debug: isDebugActive
} = input;

if (isDebugActive) {
  debug.enable(`${DEBUG_NAMESPACE}:*`);
} else {
  if (process.env.DEBUG) {
    isDebugActive = true;
    debug.enable(process.env.DEBUG);
  }
}

const fileName = `${instrument}-${timeframe}${
  timeframe === 'tick' ? '' : '-' + priceType
}-${fromDate.toISOString().slice(0, 10)}-${toDate.toISOString().slice(0, 10)}.${
  format === Format.csv ? Format.csv : Format.json
}`;
const folderPath = resolve(process.cwd(), dir);
const filePath = resolve(folderPath, fileName);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  try {
    debug(`${DEBUG_NAMESPACE}:version`)(`${version} (node ${process.version})`);
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

      let savePayload: Output;

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

        const formatted = formatOutput({ processedData: filteredData, timeframe, format });

        savePayload = format === 'csv' ? formatted : JSON.stringify(formatted, null, 2);
      } else {
        savePayload = format === 'csv' ? '' : JSON.stringify([]);
      }

      const isEmpty = savePayload === '' || savePayload === '[]' || savePayload.length === 0;

      await outputFile(filePath, savePayload);

      if (!isDebugActive) {
        progressBar.stop();
      }

      if (isEmpty) {
        printWarning(
          [
            '⚠ Response for your config is currently empty.',
            'Try again later when data is available.',
            'see https://github.com/Leo4815162342/dukascopy-node/wiki/Information-on-empty-responses'
          ].join('\n')
        );
      } else {
        printSuccess(`√ File saved: ${chalk.bold(fileName)}`);
      }
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
