import { validator, schema, defaultSchemaValidationFn } from './schema';
import { Config } from '../config';
import { ValidationStatus, ValidationFn } from './types';

export { validator, schema };

export function validateConfig(
  config: Config,
  validationFn: ValidationFn = defaultSchemaValidationFn
): ValidationStatus {
  const validationResult = validationFn(config);

  const isValid = validationResult === true;

  return {
    isValid,
    validationErrors:
      !isValid && Array.isArray(validationResult) ? validationResult.map(item => item.message) : []
  };
}
