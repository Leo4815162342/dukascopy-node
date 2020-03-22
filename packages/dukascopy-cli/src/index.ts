import { resolve } from 'path';
import { normaliseDates, generateUrls, BufferFetcher, processData } from 'dukascopy-core';
import { progressBar } from './progress';
import { outputFile } from 'fs-extra';
import { cliConfig, isValid, validationErrors } from './config';
import { printHeader, printErrors, printSucess, printDivider } from './printer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');
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
  dir,
  silent
} = cliConfig;

const fileName = `${instrument}-${timeframe}${
  timeframe === 'tick' ? '' : '-' + priceType
}-${fromDate}-${toDate}.${outputFormat}`;
const folderPath = resolve(process.cwd(), dir);
const filePath = resolve(folderPath, fileName);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  console.log(folderPath);
  console.log(filePath);
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
        batchSize: 10,
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
      const formatted = formatData(filteredData, cliConfig);

      progressBar.stop();

      await outputFile(filePath, JSON.stringify(formatted, null, 2));

      printSucess(`√ File saved: ${chalk.bold(fileName)}`);
    } else {
      printErrors('Search config invalid:', validationErrors);
    }
  } catch (err) {
    printErrors('Something went wrong:', err.message || JSON.stringify(err));
  }
})();
