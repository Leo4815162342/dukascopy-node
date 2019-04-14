import { HistoryConfig } from './../types';
import { ValidationStatus } from './types';

import { validateSymbol } from './validateSymbol';
import { validateDates } from './validateDates';
import { validateGmtOffset } from './validateGmtOffset';
import { validatePriceType } from './validatePriceType';
import { validateTimeframe } from './validateTimeframe';

import commonValidatorsMap from './validateCommon';

const { required, isBoolean, isString, isNumber } = commonValidatorsMap;

type HistoryConfigKey = keyof HistoryConfig;
type KeyValidators = ((value: any) => ValidationStatus)[];

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
  gmtOffset: [required, isNumber, validateGmtOffset],
  includeVolume: [required, isBoolean]
};

function validateKey(keyValue: any, keyValidators: KeyValidators): ValidationStatus {
  const validationStatus = keyValidators.reduce(
    (status, validator) => {
      const { isValid, validationErrors } = validator(keyValue);
      if (!isValid) {
        status.isValid = false;
        status.validationErrors = [...status.validationErrors, ...validationErrors];
      }
      return status;
    },
    { isValid: true, validationErrors: [] }
  );

  return validationStatus;
}

function validateConfig(config: HistoryConfig) {
  const status: ConfigValidationStatus = { isValid: true, validationErrors: {} };

  for (const key in config) {
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
    }
  }

  return status;
}

//@ts-ignore
const testConfig = {
  symbol: 'eurusd',
  dates: {
    start: '2019-01-22',
    end: '2019-02-22'
  },
  timeframe: '',
  priceType: 'avg',
  gmtOffset: 60,
  includeVolume: true
};
//@ts-ignore
const status = validateConfig(testConfig);

console.log(status);
