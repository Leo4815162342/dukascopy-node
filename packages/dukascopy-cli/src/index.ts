#!/usr/bin/env node

import { resolve } from 'path';

import { progressBar } from './progress';
import { outputFile } from 'fs-extra';
import { cliConfig, isValid, validationErrors } from './config';
import { printHeader, printErrors, printSucess, printDivider } from './printer';
import {
  Format,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  processData,
  formatOutput
} from 'dukascopy-node';
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
  dir,
  silent
} = cliConfig;

const fileName = `${instrument}-${timeframe}${
  timeframe === 'tick' ? '' : '-' + priceType
}-${fromDate}-${toDate}.${format === Format.csv ? Format.csv : Format.json}`;
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

      silent ? printDivider() : printHeader(cliConfig, startDate, endDate);

      const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

      let val = 0;

      progressBar.start(urls.length, val);

      const bufferFetcher = new BufferFetcher({
        batchSize,
        pauseBetweenBatchesMs,
        notifyOnItemFetchFn: (): void => {
          val += 1;
          progressBar.update(val);
        }
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

      const formatted = formatOutput({ processedData: filteredData, timeframe, format });

      const savePayload = format === 'csv' ? formatted : JSON.stringify(formatted, null, 2);

      await outputFile(filePath, savePayload);

      progressBar.stop();

      printSucess(`√ File saved: ${chalk.bold(fileName)}`);
    } else {
      printErrors('Search config invalid:', validationErrors);
    }
  } catch (err) {
    printErrors('Something went wrong:', err.message || JSON.stringify(err));
  }
})();
