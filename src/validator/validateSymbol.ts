import { symbols } from '../config/symbols';
import { HistoryConfig } from '../config/types';
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
