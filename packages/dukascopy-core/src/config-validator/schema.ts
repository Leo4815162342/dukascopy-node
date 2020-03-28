import Validator, { ValidationSchema } from 'fastest-validator';
import { instruments } from '../config/instruments';
import { timeframes } from '../config/timeframes';
import { priceTypes } from '../config/price-types';
import { outputTypes } from '../config/output';
import { getUTCDateFromString } from '../utils/date';
import { ValidationFn } from './types';

export const schema: ValidationSchema = {
  instrument: { type: 'string', enum: Object.keys(instruments), required: true },
  dates: {
    type: 'object',
    required: true,
    props: {
      from: [{ type: 'dateString', required: true }],
      to: [{ type: 'dateString', required: true }]
    }
  },
  timeframe: { type: 'string', enum: Object.keys(timeframes), required: true },
  priceType: { type: 'string', enum: Object.keys(priceTypes), required: true },
  utcOffset: { type: 'number', integer: true, required: true },
  volumes: { type: 'boolean', required: true },
  ignoreFlats: { type: 'boolean', required: true },
  output: {
    type: 'string',
    enum: Object.keys(outputTypes),
    optional: true,
    default: outputTypes.array
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
