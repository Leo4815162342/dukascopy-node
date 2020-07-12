import { Timeframe, Price, Format, schema, validator, validateConfig } from 'dukascopy-node';
import { program } from 'commander';
import { CliConfig } from './types';

program
  .option('-d, --debug', 'Output extra debugging')
  .option('-s, --silent', 'Hides the search config in the CLI output', false)
  .requiredOption('-i, --instrument <value>', 'Trading instrument')
  .requiredOption('-from, --date-from <value>', 'From date (yyyy-mm-dd)')
  .requiredOption('-to, --date-to <value>', 'To date (yyyy-mm-dd)')
  .option(
    '-t, --timeframe <value>',
    'Timeframe aggregation (tick, m1, m15, m30, h1, d1, mn1)',
    Timeframe.d1
  )
  .option('-p, --price-type <value>', 'Price type: (bid, ask)', Price.bid)
  .option('-utc, --utc-offset <value>', 'UTC offset in minutes', Number, 0)
  .option('-v, --volumes', 'Include volumes', false)
  .option('-fl, --flats', 'Include flats (0 volumes)', false)
  .option('-f, --format <value>', 'Output format (csv, json, array)', Format.json)
  .option('-dir, --directory <value>', 'Download directory', './download')
  .option('-bs, --batch-size <value>', 'Batch size of downloaded artifacts', Number, 10)
  .option('-bp, --batch-pause <value>', 'Pause between batches in ms', Number, 1000);

program.parse(process.argv);

const options = program.opts();

if (program.debug) console.log(options);

export const cliConfig: CliConfig = {
  instrument: options.instrument,
  dates: {
    from: options.dateFrom,
    to: options.dateTo
  },
  timeframe: options.timeframe,
  priceType: options.priceType,
  utcOffset: options.utcOffset,
  volumes: options.volumes,
  ignoreFlats: !options.flats,
  dir: options.directory,
  silent: options.silent,
  format: options.format,
  batchSize: options.batchSize,
  pauseBetweenBatchesMs: options.batchPause
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
