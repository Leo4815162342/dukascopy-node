import { CliConfig } from './config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

// eslint-disable-next-line no-console
const log = console.log;

export function printSpacer(): void {
  log();
}

export function printDivider(): void {
  log(chalk.gray('----------------------------------------------------'));
}

export function printHeader(
  searchConfig: CliConfig,
  adjustedStartDate: Date,
  adjustedEndDate: Date
): void {
  const { instrument, timeframe, priceType, utcOffset, volumes, ignoreFlats, format } =
    searchConfig;

  printDivider();
  log(chalk.whiteBright('Downloading historical price data for:'));
  printDivider();
  log('Instrument:    ', chalk.bold(chalk.yellow(instrument)));
  log('Timeframe:     ', chalk.bold(chalk.yellow(timeframe)));
  log('From date:     ', chalk.bold(chalk.yellow(adjustedStartDate.toISOString())));
  log('To date:       ', chalk.bold(chalk.yellow(adjustedEndDate.toISOString())));
  log('Price type:    ', chalk.bold(chalk.yellow(priceType)));
  log('Volumes:       ', chalk.bold(chalk.yellow(volumes)));
  log('UTC Offset:    ', chalk.bold(chalk.yellow(utcOffset)));
  log('Include flats: ', chalk.bold(chalk.yellow(!ignoreFlats)));
  log('Format:        ', chalk.bold(chalk.yellow(format)));
  printDivider();
}

export function printErrors(header: string, errorMessage: string | string[]): void {
  log(chalk.redBright(header));
  ([] as string[]).concat(errorMessage).forEach(error => log(chalk.red(` > ${error}`)));
  printSpacer();
}

export function printSuccess(text: string): void {
  printDivider();
  log(chalk.greenBright(text));
  printSpacer();
}

export function printWarning(text: string): void {
  printDivider();
  log(chalk.yellowBright(text));
  printSpacer();
}
