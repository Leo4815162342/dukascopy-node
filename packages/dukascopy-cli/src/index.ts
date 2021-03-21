#!/usr/bin/env node

import { resolve } from 'path';
import { progressBar } from './progress';
import { outputFile } from 'fs-extra';
import { isValid, validationErrors, input } from './config';
import {
  Format,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  CacheManager,
  processData,
  formatOutput,
  JsonItem,
  JsonItemTick,
  ArrayTickItem
} from 'dukascopy-node';
import { printDivider, printHeader, printSuccess, printErrors } from './printer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const {
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
  silent
} = input;

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
    if (isValid) {
      const [startDate, endDate] = normaliseDates({
        instrument,
        startDate: fromDate,
        endDate: toDate,
        timeframe,
        utcOffset
      });

      silent ? printDivider() : printHeader(input, startDate, endDate);

      const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

      let val = 0;

      progressBar.start(urls.length, val);

      const bufferFetcher = new BufferFetcher({
        batchSize,
        pauseBetweenBatchesMs,
        cacheManager: useCache ? new CacheManager({ cacheFolderPath }) : undefined,
        notifyOnItemFetchFn: (): void => {
          val += 1;
          progressBar.update(val);
        }
      });

      const bufferredData = await bufferFetcher.fetch(urls);

      let savePayload: string | JsonItem[] | JsonItemTick[] | ArrayTickItem[];

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

        const formatted = formatOutput({ processedData: filteredData, timeframe, format });

        savePayload = format === 'csv' ? formatted : JSON.stringify(formatted, null, 2);
      } else {
        savePayload = format === 'csv' ? '' : JSON.stringify([]);
      }

      await outputFile(filePath, savePayload);

      progressBar.stop();

      printSuccess(`√ File saved: ${chalk.bold(fileName)}`);
    } else {
      printErrors(
        'Search config invalid:',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        validationErrors.map(err => err.message!)
      );
    }
  } catch (err) {
    printErrors('\nSomething went wrong:', err.message || JSON.stringify(err));
  }
})();
