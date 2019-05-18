import { HistoryConfig } from '../config/types';
import { KeyValidationStatus } from './types';

import { isSymbolValid } from './symbol';
import { isDatesValid } from './dates';
import { isPriceTypeValid } from './price-type';
import { isTimeframeValid } from './timeframe';

import commonValidators from './common';
const { required, isBoolean, isString, isNumber } = commonValidators;

type HistoryConfigKey = keyof HistoryConfig;
type KeyValidators = ((value: any) => KeyValidationStatus)[];

type ValidatorMap = { [key in keyof HistoryConfig]: KeyValidators };

interface ConfigValidationStatus {
  isValid: boolean;
  validationErrors: { [key in keyof HistoryConfig]?: string[] };
}

const configValidatorMap: ValidatorMap = {
  symbol: [required, isString, isSymbolValid],
  dates: [required, isDatesValid],
  timeframe: [required, isString, isTimeframeValid],
  priceType: [required, isString, isPriceTypeValid],
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
