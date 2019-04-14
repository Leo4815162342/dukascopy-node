import { symbols } from '../symbols';
import { HistoryConfig } from '../types';
import { ValidationStatus } from './types';

function validateSymbol(symbol: HistoryConfig['symbol']) {
  const status: ValidationStatus = { isValid: true, validationErrors: [] };

  if (!symbols.hasOwnProperty(symbol)) {
    status.isValid = false;
    status.validationErrors.push(`Symbol "${symbol}" is not supported`);
  }
  return status;
}

export { validateSymbol };
