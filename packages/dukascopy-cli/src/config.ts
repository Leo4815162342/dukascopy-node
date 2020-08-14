import { defaultConfig, DefaultConfig, Config } from 'dukascopy-node';
import { program } from 'commander';

export type CliConfig = { silent: boolean; dir: string };

export type CliConfigFull = Required<Config> & CliConfig;

export type CliConfigDefault = DefaultConfig & CliConfig;
export const cliConfigDefault: CliConfigDefault = {
  ...defaultConfig,
  ...{ silent: false, dir: './download' }
};

program
  .option('-d, --debug', 'Output extra debugging')
  .option('-s, --silent', 'Hides the search config in the CLI output', cliConfigDefault.silent)
  .requiredOption('-i, --instrument <value>', 'Trading instrument')
  .requiredOption('-from, --date-from <value>', 'From date (yyyy-mm-dd)')
  .requiredOption('-to, --date-to <value>', 'To date (yyyy-mm-dd)')
  .option(
    '-t, --timeframe <value>',
    'Timeframe aggregation (tick, m1, m15, m30, h1, d1, mn1)',
    cliConfigDefault.timeframe
  )
  .option('-p, --price-type <value>', 'Price type: (bid, ask)', cliConfigDefault.priceType)
  .option('-utc, --utc-offset <value>', 'UTC offset in minutes', Number, cliConfigDefault.utcOffset)
  .option('-v, --volumes', 'Include volumes', cliConfigDefault.volumes)
  .option('-fl, --flats', 'Include flats (0 volumes)', !cliConfigDefault.ignoreFlats)
  .option('-f, --format <value>', 'Output format (csv, json, array)', cliConfigDefault.format)
  .option('-dir, --directory <value>', 'Download directory', cliConfigDefault.dir)
  .option(
    '-bs, --batch-size <value>',
    'Batch size of downloaded artifacts',
    Number,
    cliConfigDefault.batchSize
  )
  .option(
    '-bp, --batch-pause <value>',
    'Pause between batches in ms',
    Number,
    cliConfigDefault.pauseBetweenBatchesMs
  );

program.parse(process.argv);

const options = program.opts();

if (program.debug) console.log(options);

export const cliConfig: CliConfigFull = {
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
