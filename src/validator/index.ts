import { HistoryConfig } from './../types';
import { KeyValidationStatus } from './types';

import { validateSymbol } from './validateSymbol';
import { validateDates } from './validateDates';
import { validatePriceType } from './validatePriceType';
import { validateTimeframe } from './validateTimeframe';

import commonValidators from './validateCommon';
const { required, isBoolean, isString, isNumber } = commonValidators;

type HistoryConfigKey = keyof HistoryConfig;
type KeyValidators = ((value: any) => KeyValidationStatus)[];

type ValidatorMap = { [key in keyof HistoryConfig]: KeyValidators };

interface ConfigValidationStatus {
  isValid: boolean;
  validationErrors: { [key in keyof HistoryConfig]?: string[] };
}

const configValidatorMap: ValidatorMap = {
  symbol: [required, isString, validateSymbol],
  dates: [required, validateDates],
  timeframe: [required, isString, validateTimeframe],
  priceType: [required, isString, validatePriceType],
  gmtOffset: [required, isNumber],
  volumes: [required, isBoolean]
};

function validateKey(keyValue: any, keyValidators: KeyValidators): KeyValidationStatus {
  const validationStatus = keyValidators.reduce(
    (status, validator) => {
      const { isValid, validationErrors } = validator(keyValue);
      if (!isValid) {
        status.isValid = false;
        status.validationErrors = [...status.validationErrors, ...validationErrors];
      }
      return status;
    },
    <KeyValidationStatus>{ isValid: true, validationErrors: [] }
  );

  return validationStatus;
}

function validateConfig(config: HistoryConfig) {
  const status: ConfigValidationStatus = { isValid: true, validationErrors: {} };

  for (const key in configValidatorMap) {
    if (config.hasOwnProperty(key)) {
      const keyValue = config[key as HistoryConfigKey];
      const keyValidators = configValidatorMap[key as HistoryConfigKey];
      const { isValid: keyIsValid, validationErrors: keyErrors } = validateKey(
        keyValue,
        keyValidators
      );

      if (!keyIsValid) {
        status.isValid = false;
        status.validationErrors[key as HistoryConfigKey] = keyErrors;
      }
    } else {
      status.isValid = false;
      status.validationErrors[key as HistoryConfigKey] = ['key does not exist in search config'];
    }
  }

  return status;
}

export { validateConfig };
