import { priceTypes } from '../config/price-types';
import { HistoryConfig } from '../config/types';
import { KeyValidationStatus } from './types';

function isPriceTypeValid(priceType: HistoryConfig['priceType']) {
  const status: KeyValidationStatus = { isValid: true, validationErrors: [] };

  if (!priceTypes.hasOwnProperty(priceType)) {
    status.isValid = false;
    status.validationErrors.push(`Price type "${priceType}" is not supported`);
  }
  return status;
}

export { isPriceTypeValid };
