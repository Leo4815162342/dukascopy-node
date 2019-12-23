import { ValidationSchema } from 'fastest-validator';
import { instruments } from '../config/instruments';
import { timeframes } from '../config/timeframes';
import { priceTypes } from '../config/price-types';

const schema: ValidationSchema = {
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

export { schema };
