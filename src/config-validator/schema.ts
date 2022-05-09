import {
  RuleBoolean,
  RuleDate,
  RuleNumber,
  RuleObject,
  RuleString,
  ValidationRule
} from 'fastest-validator';
import { Instrument } from '../config/instruments';
import { Timeframe } from '../config/timeframes';
import { Price } from '../config/price-types';
import { Format } from '../config/format';

import { defaultConfig, Config } from '../config';

export type InputSchema<Input> = Record<keyof Required<Input>, ValidationRule>;

export const schema: InputSchema<Config> = {
  instrument: { type: 'string', enum: Object.keys(Instrument), required: true } as RuleString,
  dates: {
    type: 'object',
    required: true,
    props: {
      from: { type: 'date', convert: true, required: true } as RuleDate,
      to: { type: 'date', convert: true, required: true } as RuleDate
    }
  } as RuleObject,
  timeframe: {
    type: 'string',
    enum: Object.keys(Timeframe),
    optional: true,
    default: defaultConfig.timeframe
  } as RuleString,
  priceType: {
    type: 'string',
    enum: Object.keys(Price),
    optional: true,
    default: defaultConfig.priceType
  } as RuleString,
  utcOffset: {
    type: 'number',
    integer: true,
    optional: true,
    default: defaultConfig.utcOffset
  } as RuleNumber,
  volumes: { type: 'boolean', optional: true, default: defaultConfig.volumes } as RuleBoolean,
  ignoreFlats: {
    type: 'boolean',
    optional: true,
    default: defaultConfig.ignoreFlats
  } as RuleBoolean,
  format: {
    type: 'string',
    enum: Object.keys(Format),
    optional: true,
    default: defaultConfig.format
  } as RuleString,
  batchSize: {
    type: 'number',
    integer: true,
    optional: true,
    default: defaultConfig.batchSize
  } as RuleNumber,
  pauseBetweenBatchesMs: {
    type: 'number',
    integer: true,
    optional: true,
    default: defaultConfig.pauseBetweenBatchesMs
  } as RuleNumber,
  useCache: { type: 'boolean', optional: true, default: defaultConfig.useCache } as RuleBoolean,
  cacheFolderPath: {
    type: 'string',
    optional: true,
    default: defaultConfig.cacheFolderPath
  } as RuleString,
  retryCount: {
    type: 'number',
    integer: true,
    optional: true,
    default: defaultConfig.retryCount
  } as RuleNumber,
  pauseBetweenRetriesMs: {
    type: 'number',
    integer: true,
    optional: true,
    default: defaultConfig.pauseBetweenRetriesMs
  } as RuleNumber
};
