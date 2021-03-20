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

import { Config } from '../config';

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
    default: Timeframe.d1
  } as RuleString,
  priceType: {
    type: 'string',
    enum: Object.keys(Price),
    optional: true,
    default: Price.bid
  } as RuleString,
  utcOffset: { type: 'number', integer: true, optional: true, default: 0 } as RuleNumber,
  volumes: { type: 'boolean', optional: true, default: true } as RuleBoolean,
  ignoreFlats: { type: 'boolean', optional: true, default: true } as RuleBoolean,
  format: {
    type: 'string',
    enum: Object.keys(Format),
    optional: true,
    default: Format.array
  } as RuleString,
  batchSize: { type: 'number', integer: true, optional: true, default: 10 } as RuleNumber,
  pauseBetweenBatchesMs: {
    type: 'number',
    integer: true,
    optional: true,
    default: 10
  } as RuleNumber,
  useCache: { type: 'boolean', optional: true, default: false } as RuleBoolean,
  cacheFolderPath: { type: 'string', optional: true, default: '' } as RuleString
};
