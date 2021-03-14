import Validator, {
  RuleBoolean,
  RuleDate,
  RuleNumber,
  RuleObject,
  RuleString,
  // ValidationError,
  ValidationRule
  // ValidationSchema
} from 'fastest-validator';
import { Instrument } from '../config/instruments';
import { Timeframe } from '../config/timeframes';
import { Price } from '../config/price-types';
import { Format } from '../config/format';
// import { getUTCDateFromString } from '../utils/date';
// import { ValidationFn } from './types';
import { Config } from '../config';

export type BaseSchema<T extends string> = Record<T, ValidationRule>;
export type Schema = BaseSchema<keyof Required<Config>>;

const schema: Schema = {
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

const validator = new Validator();

function validateConfig<InputConfig>(
  input: InputConfig extends Config ? InputConfig : never,
  extraSchema: BaseSchema<string> = {}
) {
  const check = validator.compile({ ...schema, ...extraSchema });
  const validationResult = check(input);

  const isValid = validationResult === true;

  return {
    input,
    isValid,
    validationErrors:
      !isValid && Array.isArray(validationResult)
        ? validationResult.map(({ message, expected, actual }) => ({ message, expected, actual }))
        : []
  };
}

const result = validateConfig({
  instrument: 'eurusd',
  dates: { from: '2019-02-28', to: '2019-07-01' },
  priceType: 'bid',
  timeframe: 'd1',
  format: 'json',
  volumes: true,
  utcOffset: 0,
  ignoreFlats: false,
  useCache: false
});

// eslint-disable-next-line no-console
console.log(JSON.stringify(result, null, 2));

// export const schema: ValidationSchema = {
//   instrument: { type: 'string', enum: Object.keys(Instrument), required: true },
//   dates: {
//     type: 'object',
//     required: true,
//     props: {
//       from: [{ type: 'dateString', required: true }],
//       to: [{ type: 'dateString', required: true }]
//     }
//   },
//   timeframe: {
//     type: 'string',
//     enum: Object.keys(Timeframe),
//     optional: true,
//     default: Timeframe.d1
//   },
//   priceType: {
//     type: 'string',
//     enum: Object.keys(Price),
//     optional: true,
//     default: Price.bid
//   },
//   utcOffset: { type: 'number', integer: true, optional: true, default: 0 },
//   volumes: { type: 'boolean', optional: true, default: true },
//   ignoreFlats: { type: 'boolean', optional: true, default: true },
//   format: {
//     type: 'string',
//     enum: Object.keys(Format),
//     optional: true,
//     default: Format.array
//   }
// };

// const INVALID_DATE_KEY = 'invalidDateString';

// const validator = new Validator({
//   messages: {
//     [INVALID_DATE_KEY]: "The '{field}' field must be a valid date string! Actual: {actual}"
//   }
// });

// validator.add('dateString', (value: string) => {
//   if (!getUTCDateFromString(value)) {
//     return validator.makeError(INVALID_DATE_KEY, null, value);
//   }

//   return true;
// });

// export { validator };

// export const defaultSchemaValidationFn: ValidationFn = validator.compile(schema);
