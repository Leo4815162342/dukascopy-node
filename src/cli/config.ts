import { program } from 'commander';
import { RuleBoolean, RuleString } from 'fastest-validator';
import { ConfigBase } from '../config';
import { validateConfig } from '../config-validator';
import { InputSchema, schema } from '../config-validator/schema';
import { Format } from '../config/format';
import { Price } from '../config/price-types';
import { Timeframe } from '../config/timeframes';
import { VolumeUnit } from '../config/volume-unit';

export interface CliConfig extends ConfigBase {
  dir: string;
  silent: boolean;
  debug: boolean;
  inline: boolean;
}

const now = 'now';

const commanderSchema = program
  .option('-d, --debug', 'Output extra debugging', false)
  .option('-s, --silent', 'Hides the search config in the CLI output', false)
  .requiredOption('-i, --instrument <value>', 'Trading instrument')
  .requiredOption('-from, --date-from <value>', 'From date (yyyy-mm-dd)')
  .option('-to, --date-to <value>', `To date (yyyy-mm-dd or '${now}')`, now)
  .option(
    '-t, --timeframe <value>',
    'Timeframe aggregation (tick, s1, m1, m5, m15, m30, h1, h4, d1, mn1)',
    Timeframe.d1
  )
  .option('-p, --price-type <value>', 'Price type: (bid, ask)', Price.bid)
  .option('-utc, --utc-offset <value>', 'UTC offset in minutes', Number, 0)
  .option('-v, --volumes', 'Include volumes', false)
  .option(
    '-vu, --volume-units <value>',
    'Volume units (millions, thousands, units)',
    VolumeUnit.millions
  )
  .option('-fl, --flats', 'Include flats (0 volumes)', false)
  .option('-f, --format <value>', 'Output format (csv, json, array)', Format.json)
  .option('-dir, --directory <value>', 'Download directory', './download')
  .option('-bs, --batch-size <value>', 'Batch size of downloaded artifacts', Number, 10)
  .option('-bp, --batch-pause <value>', 'Pause between batches in ms', Number, 1000)
  .option('-ch, --cache', 'Use cache', false)
  .option('-chpath, --cache-path <value>', 'Folder path for cache data', './.dukascopy-cache')
  .option('-r, --retries <value>', 'Number of retries for a failed artifact download', Number, 0)
  .option('-rp, --retry-pause <value>', 'Pause between retries in milliseconds', Number, 500)
  .option(
    '-re, --retry-on-empty',
    'A flag indicating whether requests with successful but empty (0 Bytes) responses should be retried. If `retries` is `0` this parameter will be ignored',
    false
  )
  .option(
    '-fr, --no-fail-after-retries',
    'A flag indicating whether the process should fail after all retries have been exhausted. If `retries` is `0` this parameter will be ignored'
  )
  .option(
    '-in, --inline',
    'Makes files smaller in size by removing new lines in the output (works only with json and array formats)',
    false
  );

export function getConfigFromCliArgs(argv: NodeJS.Process['argv']) {
  const options = commanderSchema.parse(argv).opts();
  // Parse "now" date parameter and convert
  // it to current time.
  if (options.dateTo === now) {
    options.dateTo = new Date();
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
    volumeUnits: options.volumeUnits,
    ignoreFlats: !options.flats,
    dir: options.directory,
    silent: options.silent,
    format: options.format,
    batchSize: options.batchSize,
    pauseBetweenBatchesMs: options.batchPause,
    useCache: options.cache,
    cacheFolderPath: options.cachePath,
    retryCount: options.retries,
    failAfterRetryCount: options.failAfterRetries,
    retryOnEmpty: options.retryOnEmpty,
    pauseBetweenRetriesMs: options.retryPause,
    debug: options.debug,
    inline: options.inline
  };

  const cliSchema: InputSchema<CliConfig> = {
    ...schema,
    ...{
      dir: { type: 'string', required: true } as RuleString,
      silent: { type: 'boolean', required: false } as RuleBoolean,
      debug: { type: 'boolean', required: false } as RuleBoolean,
      inline: { type: 'boolean', required: false } as RuleBoolean
    }
  };

  return validateConfig(cliConfig, cliSchema);
}
