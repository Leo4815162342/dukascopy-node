import { symbols } from '../config/symbols';
import { HistoryConfig } from '../config/types';
import { KeyValidation } from './types';

function isSymbolValid(symbol: HistoryConfig['symbol']) {
  const status: KeyValidation = { isValid: true, validationErrors: [] };

  if (!symbols.hasOwnProperty(symbol)) {
    status.isValid = false;
    status.validationErrors.push(`symbol "${symbol}" is not supported`);
  }
  return status;
}

export { isSymbolValid };
