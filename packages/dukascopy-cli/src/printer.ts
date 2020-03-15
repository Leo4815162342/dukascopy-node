import { CliConfig } from './types';
import * as chalk from 'chalk';

const log = console.log;

export function printHeader(searchConfig: CliConfig): void {
  const {
    instrument,
    dates: { from: fromDate, to: toDate },
    timeframe,
    priceType,
    // utcOffset,
    volumes,
    // ignoreFlats,
    outputFormat
  } = searchConfig;

  log(chalk.gray('--------------------------------------------------------'));
  log(chalk.whiteBright('Downloading historical price data'));
  log(chalk.gray('--------------------------------------------------------'));
  log('Instrument: ', chalk.bold(chalk.yellow(instrument)));
  log('Timeframe:  ', chalk.bold(chalk.yellow(timeframe)));
  log('Period:     ', chalk.bold(chalk.yellow(`${fromDate} - ${toDate}`)));
  log('Price type: ', chalk.bold(chalk.yellow(priceType)));
  log('Volumes:    ', chalk.bold(chalk.yellow(volumes)));
  log('Format:     ', chalk.bold(chalk.yellow(outputFormat)));
  log(chalk.gray('--------------------------------------------------------'));
}

export function printErrors(header: string, errorMessage: string | string[]): void {
  log(chalk.redBright(header));
  ([] as string[]).concat(errorMessage).forEach(error => log(chalk.red(` * ${error}`)));
}

export function printSucess(text: string): void {
  log(chalk.gray('--------------------------------------------------------'));
  log(chalk.greenBright(text));
}
