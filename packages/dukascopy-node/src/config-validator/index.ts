import { HistoryConfig } from '../types';

import { schema } from './schema';
import Validator from 'fastest-validator';

import { getUTCDateFromString } from '../utils/date';

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

const check = validator.compile(schema);

export type ValidationStatus = {
  isValid: boolean;
  validationErrors: string[];
};

function validateConfig(config: HistoryConfig): ValidationStatus {
  const validationResult = check(config);

  const isValid = validationResult === true;

  return {
    isValid,
    validationErrors:
      !isValid && Array.isArray(validationResult) ? validationResult.map(item => item.message) : []
  };
}

export { validateConfig };
