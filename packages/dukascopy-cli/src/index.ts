import {
  HistoryConfig,
  validateConfig,
  normaliseDates,
  generateUrls,
  BuffetFetcher
} from 'dukascopy-core';
import commandLineArgs from 'command-line-args';
import { Bar } from 'cli-progress';
import chalk from 'chalk';
const log = console.log;

type OutputFormat = 'csv' | 'json';

const optionDefinitions = [
  { name: 'instrument', alias: 'i', type: String },
  { name: 'dates', alias: 'd', type: String, multiple: true },
  { name: 'timeframe', alias: 't', type: String },
  { name: 'priceType', alias: 'p', type: String },
  { name: 'utcOffset', alias: 'u', type: Number },
  { name: 'volumes', alias: 'v', type: Boolean },
  { name: 'ignoreFlats', alias: 'f', type: Boolean },
  { name: 'outputFormat', alias: 'o', type: String }
];

const options = commandLineArgs(optionDefinitions);

const searchConfig: Required<HistoryConfig> & { outputFormat: OutputFormat } = {
  instrument: options.instrument,
  dates: {
    from: options.dates[0],
    to: options.dates[1]
  },
  timeframe: options.timeframe || 'd1',
  priceType: options.priceType || 'bid',
  utcOffset: options.utcOffset || 0,
  volumes: options.volumes === undefined ? true : false,
  ignoreFlats: options.ignoreFlats === undefined ? true : false,
  outputFormat: options.outputFormat || 'json'
};

const {
  instrument,
  dates: { from: fromDate, to: toDate },
  timeframe,
  priceType,
  utcOffset,
  volumes,
  ignoreFlats,
  outputFormat
} = searchConfig;

const fileName = `${instrument}-${timeframe}-${priceType}-${fromDate}-${toDate}.${outputFormat}`;

// eurusd-m1-bid-2010.02.02-2002.02.02.json

const { isValid, validationErrors } = validateConfig(searchConfig);

(async () => {
  if (isValid) {
    log(chalk.gray('--------------------------------------------------------'));
    log(chalk.whiteBright('Downloading and extracting data:'));
    log(chalk.gray('--------------------------------------------------------'));
    log('Instrument: ', chalk.bold(instrument));
    log('Timeframe:  ', chalk.bold(timeframe));
    log('Period:     ', chalk.bold(`${fromDate} - ${toDate}`));
    log('Price type: ', chalk.bold(priceType));
    log(chalk.gray('--------------------------------------------------------'));

    const [startDate, endDate] = normaliseDates({
      instrument,
      startDate: fromDate,
      endDate: toDate,
      timeframe,
      utcOffset
    });

    const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

    let val = 0;

    const progressBar = new Bar({
      format: '|' + chalk.green('{bar}') + '| {percentage}% || {value}/{total} Files',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true,
      fps: 24,
      barsize: 30
    });

    progressBar.start(urls.length, val);

    const bufferFetcher = new BuffetFetcher({
      notifyOnItemFetchFn: () => {
        val += 1;
        progressBar.update(val);
      }
    });

    const bufferredData = await bufferFetcher.fetch(urls);

    progressBar.stop();
    log(chalk.gray('--------------------------------------------------------'));
    log(chalk.greenBright('√ File saved:', chalk.bold(fileName)));
  } else {
    log(chalk.redBright('Search config invalid:'));
    validationErrors.forEach(error => log(chalk.red(` * ${error}`)));
  }
})();
