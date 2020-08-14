#!/usr/bin/env node

import { resolve } from 'path';

import { progressBar } from './progress';
import { outputFile } from 'fs-extra';
import { cliConfig, CliConfig } from './config';
import { printHeader, printSucess, printDivider, printErrors } from './printer';
import { Format, DukascopyBase, validator, schema, Output } from 'dukascopy-node';

import { cliConfigDefault } from './config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const {
  instrument,
  dates: { from: fromDate, to: toDate },
  timeframe,
  priceType,
  format,
  dir,
  silent
} = cliConfig;

const fileName = `${instrument}-${timeframe}${
  timeframe === 'tick' ? '' : '-' + priceType
}-${fromDate}-${toDate}.${format === Format.csv ? Format.csv : Format.json}`;
const folderPath = resolve(process.cwd(), dir);
const filePath = resolve(folderPath, fileName);

const cliCheck = validator.compile({
  ...schema,
  ...{
    dir: { type: 'string', required: true },
    silent: { type: 'boolean', required: true }
  }
} as typeof schema);

class DukascopyCli extends DukascopyBase<CliConfig> {
  private val: number;

  defaultConfig = cliConfigDefault;
  validationFn = cliCheck;

  constructor() {
    super();
    this.val = 0;
  }
  onFetchStart(urls: string[]) {
    silent ? printDivider() : printHeader(cliConfig);
    progressBar.start(urls.length, this.val);
  }

  onItemFetch() {
    this.val += 1;
    progressBar.update(this.val);
  }

  async onFetchSuccess(data: Output) {
    const savePayload = format === 'csv' ? data : JSON.stringify(data, null, 2);

    await outputFile(filePath, savePayload);

    progressBar.stop();
    printSucess(`√ File saved: ${chalk.bold(fileName)}`);
  }

  onFetchFail(err: Error) {
    printErrors('Something went wrong:', err.message || JSON.stringify(err));
  }

  onInvalidConfig(validationErrors: string[]) {
    printErrors('Search config invalid:', validationErrors);
  }
}

const { getHistoricRates } = new DukascopyCli();

getHistoricRates(cliConfig);
