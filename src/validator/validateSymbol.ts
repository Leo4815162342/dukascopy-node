import { symbols } from '../symbols';
import { HistoryConfig } from '../types';
import { KeyValidationStatus } from './types';

function validateSymbol(symbol: HistoryConfig['symbol']) {
  const status: KeyValidationStatus = { isValid: true, validationErrors: [] };

  if (!symbols.hasOwnProperty(symbol)) {
    status.isValid = false;
    status.validationErrors.push(`symbol "${symbol}" is not supported`);
  }
  return status;
}

export { validateSymbol };
