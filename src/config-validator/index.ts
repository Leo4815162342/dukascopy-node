import { Config, ConfigBase } from '../config';
import Validator, { ValidationError } from 'fastest-validator';
import { InputSchema, schema } from './schema';

export type ConfigValidationError = Pick<ValidationError, 'message' | 'expected' | 'actual'>;

export type SanitizedConfig<InputConfig extends ConfigBase> = Required<
  Omit<InputConfig, 'dates'>
> & {
  dates: { from: Date; to: Date };
};

export interface ValidateConfigOutput<InputConfig extends ConfigBase> {
  input: SanitizedConfig<InputConfig>;
  isValid: boolean;
  validationErrors: ConfigValidationError[];
}

const validator = new Validator();

/**
 *
 * Validates the config and sanitizes some of the params
 *
 */
export function validateConfig<InputConfig extends ConfigBase>(
  input: InputConfig,
  schema: InputSchema<InputConfig>
): ValidateConfigOutput<InputConfig> {
  const check = validator.compile(schema);
  const validationResult = check(input);

  const isValid = validationResult === true;

  const sanitizedInput = input as unknown as SanitizedConfig<InputConfig>;

  return {
    input: sanitizedInput,
    isValid,
    validationErrors:
      !isValid && Array.isArray(validationResult)
        ? validationResult.map(({ message, expected, actual }) => ({
            message,
            expected,
            actual
          }))
        : []
  };
}

export function validateConfigNode(input: Config): ValidateConfigOutput<Config> {
  return validateConfig(input, schema);
}
