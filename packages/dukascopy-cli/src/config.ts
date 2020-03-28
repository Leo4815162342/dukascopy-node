import { program } from 'commander';
import { validateConfig, schema, validator } from 'dukascopy-core';
import { CliConfig } from './types';

program
  .option('-d, --debug', 'Output extra debugging')
  .option('-s, --silent', 'Prints out the search config', false)
  .requiredOption('-i, --instrument <value>', 'Trading instrument')
  .requiredOption('-dr, --date-range <value>', 'Date range', (v: string): string[] => v.split(' '))
  .requiredOption('-t, --timeframe <value>', 'Timeframe aggregation')
  .option('-p, --price-type <value>', 'Price type: (bid, ask)', 'bid')
  .option('-utc, --utc-offset <value>', 'UTC offset in minutes', Number, 0)
  .option('-v, --volumes', 'Include volumes', true)
  .option('-fl, --flats', 'Ignore flats', true)
  .option('-f, --format <value>', 'Output format (csv, json)', 'json')
  .option('-dir, --directory <value>', 'Download directory', './download');

program.parse(process.argv);

const options = program.opts();

if (program.debug) console.log(options);

export const cliConfig: CliConfig = {
  instrument: options.instrument,
  dates: {
    from: options.dateRange[0],
    to: options.dateRange[1]
  },
  timeframe: options.timeframe,
  priceType: options.priceType,
  utcOffset: options.utcOffset,
  volumes: options.volumes,
  ignoreFlats: !options.flats,
  dir: options.directory,
  silent: options.silent,
  output: options.output
};

const cliValidationSchema = {
  ...schema,
  ...{
    dir: { type: 'string', required: true },
    silent: { type: 'boolean', required: true }
  }
} as typeof schema;

const cliCheck = validator.compile(cliValidationSchema);

export const { isValid, validationErrors } = validateConfig(cliConfig, cliCheck);
