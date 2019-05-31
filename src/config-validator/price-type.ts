import { priceTypes } from '../config/price-types';
import { HistoryConfig } from '../config/types';
import { KeyValidation } from './types';

function isPriceTypeValid(priceType: HistoryConfig['priceType']) {
  const status: KeyValidation = { isValid: true, validationErrors: [] };

  if (!priceTypes.hasOwnProperty(priceType)) {
    status.isValid = false;
    status.validationErrors.push(`Price type "${priceType}" is not supported`);
  }
  return status;
}

export { isPriceTypeValid };
