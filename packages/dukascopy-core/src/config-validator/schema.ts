import Validator, { ValidationSchema } from 'fastest-validator';
import { Instrument } from '../config/instruments';
import { Timeframe } from '../config/timeframes';
import { Price } from '../config/price-types';
import { Format } from '../config/format';
import { getUTCDateFromString } from '../utils/date';
import { ValidationFn } from './types';

export const schema: ValidationSchema = {
  instrument: { type: 'string', enum: Object.keys(Instrument), required: true },
  dates: {
    type: 'object',
    required: true,
    props: {
      from: [{ type: 'dateString', required: true }],
      to: [{ type: 'dateString', required: true }]
    }
  },
  timeframe: {
    type: 'string',
    enum: Object.keys(Timeframe),
    optional: true,
    default: Timeframe.d1
  },
  priceType: {
    type: 'string',
    enum: Object.keys(Price),
    optional: true,
    default: Price.bid
  },
  utcOffset: { type: 'number', integer: true, optional: true, default: 0 },
  volumes: { type: 'boolean', optional: true, default: true },
  ignoreFlats: { type: 'boolean', optional: true, default: true },
  format: {
    type: 'string',
    enum: Object.keys(Format),
    optional: true,
    default: Format.array
  }
};

const INVALID_DATE_KEY = 'invalidDateString';

const validator = new Validator({
  messages: {
    [INVALID_DATE_KEY]: "The '{field}' field must be a valid date string! Actual: {actual}"
  }
});

validator.add('dateString', (value: any) => {
  if (!getUTCDateFromString(value)) {
    return validator.makeError(INVALID_DATE_KEY, null, value);
  }

  return true;
});

export { validator };

export const defaultSchemaValidationFn: ValidationFn = validator.compile(schema);
