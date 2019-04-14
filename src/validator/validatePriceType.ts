import { priceTypes } from '../priceTypes';
import { HistoryConfig } from '../types';
import { ValidationStatus } from './types';

function validatePriceType(priceType: HistoryConfig['priceType']) {
  const status: ValidationStatus = { isValid: true, validationErrors: [] };

  if (!priceTypes.hasOwnProperty(priceType)) {
    status.isValid = false;
    status.validationErrors.push(`Price type "${priceType}" is not supported`);
  }
  return status;
}

export { validatePriceType };
