// eslint-disable-next-line @typescript-eslint/no-var-requires
const commandLineArgs = require('command-line-args');
import { CliConfig } from './types';
import { validateConfig, schema as defaultSchema, validator } from 'dukascopy-core';

const cliValidationSchema = {
  ...defaultSchema,
  ...{
    outputFormat: { type: 'string', enum: ['json', 'csv'], required: true },
    dir: { type: 'string', required: true }
  }
} as typeof defaultSchema;

const optionDefinitions = [
  { name: 'instrument', alias: 'i', type: String },
  { name: 'dates', alias: 'd', type: String, multiple: true },
  { name: 'timeframe', alias: 't', type: String },
  { name: 'priceType', alias: 'p', type: String },
  { name: 'utcOffset', alias: 'u', type: Number },
  { name: 'volumes', alias: 'v', type: Boolean },
  { name: 'ignoreFlats', alias: 'f', type: Boolean },
  { name: 'outputFormat', alias: 'o', type: String },
  { name: 'dir', type: String }
];

const options = commandLineArgs(optionDefinitions);

export const cliConfig: CliConfig = {
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
  outputFormat: options.outputFormat || 'json',
  dir: options.dir || 'download'
};

const cliCheck = validator.compile(cliValidationSchema);

export const { isValid, validationErrors } = validateConfig(cliConfig, cliCheck);
