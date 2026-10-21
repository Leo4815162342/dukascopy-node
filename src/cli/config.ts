import { program } from 'commander';
import { RuleBoolean, RuleString } from 'fastest-validator';
import { ConfigBase, defaultConfig } from '../config';
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
  fileName: string;
  dateFormat: string;
  timeZone: string;
}

const now = 'now';

const commanderSchema = program
  .option('--install-browser', 'Install Chromium for WAF recovery; no download arguments needed')
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
  .option(
    '--request-interval <ms>',
    'Optional per-request pacing in ms; 0 keeps concurrent batches',
    Number,
    defaultConfig.requestIntervalMs
  )
  .option(
    '--rate-limit-retries <count>',
    'Retries on HTTP 429, independent of --retries',
    Number,
    defaultConfig.rateLimitRetryCount
  )
  .option('-ch, --cache', 'Use cache', false)
  .option('-chpath, --cache-path <value>', 'Folder path for cache data', './.dukascopy-cache')
  .option('-df, --date-format <value>', 'Date format', '')
  .option('-tz, --time-zone <value>', 'Timezone', '')
  .option(
    '--waf-mode <value>',
    'AWS WAF recovery: auto (headless browser) or off',
    defaultConfig.wafMode
  )
  .option('--chrome-path <value>', 'Custom Chrome/Chromium executable for WAF recovery', '')
  .option('--no-waf-token-cache', 'Disable reading and writing the local WAF token cache')
  .option(
    '--waf-token-cache-path <path>',
    'WAF token cache file (default: ~/.dukascopy-node/waf-token.json)',
    ''
  )
  .option(
    '--waf-timeout <ms>',
    'Headless WAF token acquisition timeout in milliseconds',
    Number,
    defaultConfig.wafTimeoutMs
  )
  .option('-r, --retries <value>', 'Number of retries for a failed artifact download', Number, 0)
  .option('-rp, --retry-pause <value>', 'Pause between retries in milliseconds', Number, 500)
  .option(
    '-re, --retry-on-empty',
    'Treat successful responses with empty JSON datasets as unsuccessful attempts',
    false
  )
  .option(
    '-fr, --no-fail-after-retries',
    'Continue past failed downloads after all attempts, including when retries is 0'
  )
  .option('-fn, --file-name <value>', 'Custom file name for the generated file', '')
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
    requestIntervalMs: options.requestInterval,
    rateLimitRetryCount: options.rateLimitRetries,
    useCache: options.cache,
    cacheFolderPath: options.cachePath,
    retryCount: options.retries,
    failAfterRetryCount: options.failAfterRetries,
    retryOnEmpty: options.retryOnEmpty,
    pauseBetweenRetriesMs: options.retryPause,
    debug: options.debug,
    inline: options.inline,
    fileName: options.fileName,
    dateFormat: options.dateFormat,
    timeZone: options.timeZone,
    wafMode: options.wafMode,
    chromePath: options.chromePath,
    wafTimeoutMs: options.wafTimeout,
    wafTokenCache: options.wafTokenCache,
    wafTokenCachePath: options.wafTokenCachePath
  };

  const cliSchema: InputSchema<CliConfig> = {
    ...schema,
    ...{
      dir: { type: 'string', required: true } as RuleString,
      silent: { type: 'boolean', required: false } as RuleBoolean,
      debug: { type: 'boolean', required: false } as RuleBoolean,
      inline: { type: 'boolean', required: false } as RuleBoolean,
      fileName: { type: 'string', required: false } as RuleString,
      dateFormat: { type: 'string', required: false } as RuleString,
      timeZone: { type: 'string', required: false } as RuleString
    }
  };

  return validateConfig(cliConfig, cliSchema);
}
