import Validator, { ValidationSchema, ValidationError } from 'fastest-validator';
import { instruments } from '../config/instruments';
import { timeframes } from '../config/timeframes';
import { priceTypes } from '../config/price-types';
import { getUTCDateFromString } from '../utils/date';

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
  ignoreFlats: { type: 'boolean', required: true }
};

const validator = new Validator({
  messages: {
    invalidDateString: "The '{field}' field must be a valid date string! Actual: {actual}"
  }
});

validator.add('dateString', (value: any) => {
  if (!getUTCDateFromString(value)) {
    return validator.makeError('invalidDateString', null, value);
  }

  return true;
});

export const check: (object: object) => true | ValidationError[] = validator.compile(schema);
