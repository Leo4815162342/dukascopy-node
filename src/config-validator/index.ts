import { HistoryConfig } from '../config/types';
import { ValidationStatus } from './types';

import { schema } from './schema';
import Validator from 'fastest-validator';

import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

const validator = new Validator({
  messages: {
    invalidDateString: "The '{field}' field must be a valid date string! Actual: {actual}"
  }
});

validator.add('dateString', (value: any) => {
  if (!isValid(parseISO(value))) {
    return validator.makeError('invalidDateString', null, value);
  }

  return true;
});

const check = validator.compile(schema);

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
