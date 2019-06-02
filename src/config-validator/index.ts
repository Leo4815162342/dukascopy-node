import { HistoryConfig } from '../config/types';
import { KeyValidation, ConfigValidation, ConfigKey, KeyValidators, ValidatorMap } from './types';

import { isInstrumentValid } from './instrument';
import { isDatesValid } from './dates';
import { isPriceTypeValid } from './price-type';
import { isTimeframeValid } from './timeframe';

import commonValidators from './common';
const { required, isBoolean, isString, isNumber } = commonValidators;

const configValidatorMap: ValidatorMap = {
  instrument: [required, isString, isInstrumentValid],
  dates: [required, isDatesValid],
  timeframe: [required, isString, isTimeframeValid],
  priceType: [required, isString, isPriceTypeValid],
  utcOffset: [required, isNumber],
  volumes: [required, isBoolean]
};

function validateKey(keyValue: any, keyValidators: KeyValidators): KeyValidation {
  const validationStatus = keyValidators.reduce(
    (status, validator) => {
      const { isValid, validationErrors } = validator(keyValue);
      if (!isValid) {
        status.isValid = false;
        status.validationErrors = [...status.validationErrors, ...validationErrors];
      }
      return status;
    },
    <KeyValidation>{ isValid: true, validationErrors: [] }
  );

  return validationStatus;
}

function validateConfig(config: HistoryConfig) {
  const status: ConfigValidation = { isValid: true, validationErrors: {} };

  for (const key in configValidatorMap) {
    if (config.hasOwnProperty(key)) {
      const keyValue = config[key as ConfigKey];
      const keyValidators = configValidatorMap[key as ConfigKey];
      const { isValid: keyIsValid, validationErrors: keyErrors } = validateKey(
        keyValue,
        keyValidators
      );

      if (!keyIsValid) {
        status.isValid = false;
        status.validationErrors[key as ConfigKey] = keyErrors;
      }
    } else {
      status.isValid = false;
      status.validationErrors[key as ConfigKey] = ['key does not exist in search config'];
    }
  }

  return status;
}

export { validateConfig };
