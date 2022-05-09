import { program } from 'commander';
import { RuleBoolean, RuleString } from 'fastest-validator';
import { Config } from '../config';
import { validateConfig } from '../config-validator';
import { InputSchema, schema } from '../config-validator/schema';
import { Format } from '../config/format';
import { Price } from '../config/price-types';
import { Timeframe } from '../config/timeframes';

program
  .option('-d, --debug', 'Output extra debugging', false)
  .option('-s, --silent', 'Hides the search config in the CLI output', false)
  .requiredOption('-i, --instrument <value>', 'Trading instrument')
  .requiredOption('-from, --date-from <value>', 'From date (yyyy-mm-dd)')
  .requiredOption('-to, --date-to <value>', 'To date (yyyy-mm-dd)')
  .option(
    '-t, --timeframe <value>',
    'Timeframe aggregation (tick, m1, m5, m15, m30, h1, h4, d1, mn1)',
    Timeframe.d1
  )
  .option('-p, --price-type <value>', 'Price type: (bid, ask)', Price.bid)
  .option('-utc, --utc-offset <value>', 'UTC offset in minutes', Number, 0)
  .option('-v, --volumes', 'Include volumes', false)
  .option('-fl, --flats', 'Include flats (0 volumes)', false)
  .option('-f, --format <value>', 'Output format (csv, json, array)', Format.json)
  .option('-dir, --directory <value>', 'Download directory', './download')
  .option('-bs, --batch-size <value>', 'Batch size of downloaded artifacts', Number, 10)
  .option('-bp, --batch-pause <value>', 'Pause between batches in ms', Number, 1000)
  .option('-ch, --cache', 'Use cache', false)
  .option('-chpath, --cache-path <value>', 'Folder path for cache data', './.dukascopy-cache')
  .option('-r, --retries <value>', 'Number of retries for a failed artifact download', Number, 0)
  .option('-rp, --retry-pause <value>', 'Pause between retries in milliseconds', Number, 500);

program.parse(process.argv);

const options = program.opts();

export interface CliConfig extends Config {
  dir: string;
  silent: boolean;
  debug: boolean;
}

const cliConfig: CliConfig = {
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
  pauseBetweenBatchesMs: options.batchPause,
  useCache: options.cache,
  cacheFolderPath: options.cachePath,
  retryCount: options.retries,
  pauseBetweenRetriesMs: options.retryPause,
  debug: options.debug
};

const cliSchema: InputSchema<CliConfig> = {
  ...schema,
  ...{
    dir: { type: 'string', required: true } as RuleString,
    silent: { type: 'boolean', required: false } as RuleBoolean,
    debug: { type: 'boolean', required: false } as RuleBoolean
  }
};

export const { input, isValid, validationErrors } = validateConfig(cliConfig, cliSchema);
