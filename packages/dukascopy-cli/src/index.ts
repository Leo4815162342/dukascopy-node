import { resolve } from 'path';
import { normaliseDates, generateUrls, BufferFetcher, processData } from 'dukascopy-core';
import { progressBar } from './progress';
import { writeJSON, outputFile } from 'fs-extra';
import { cliConfig, isValid, validationErrors } from './config';
import { printHeader, printErrors, printSucess } from './printer';
import chalk from 'chalk';
import { formatData } from './formatter';

const {
  instrument,
  dates: { from: fromDate, to: toDate },
  timeframe,
  priceType,
  utcOffset,
  volumes,
  ignoreFlats,
  outputFormat,
  dir
} = cliConfig;

const fileName = `${instrument}-${timeframe}${
  timeframe === 'tick' ? '' : '-' + priceType
}-${fromDate}-${toDate}.${outputFormat}`;
const folderPath = resolve(process.cwd(), dir);
const filePath = resolve(folderPath, fileName);

(async () => {
  console.log(folderPath);
  console.log(filePath);
  try {
    if (isValid) {
      printHeader(cliConfig);

      const [startDate, endDate] = normaliseDates({
        instrument,
        startDate: fromDate,
        endDate: toDate,
        timeframe,
        utcOffset
      });

      const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

      let val = 0;

      progressBar.start(urls.length, val);

      const bufferFetcher = new BufferFetcher({
        batchSize: 10,
        notifyOnItemFetchFn: () => {
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
      progressBar.stop();

      const formatted = formatData(filteredData, cliConfig);
      await outputFile(filePath, JSON.stringify(formatted, null, 2));

      printSucess(`√ File saved: ${chalk.bold(fileName)}`);
    } else {
      printErrors('Search config invalid:', validationErrors);
    }
  } catch (err) {
    printErrors('Something went wrong:', err.message || JSON.stringify(err));
  }
})();
