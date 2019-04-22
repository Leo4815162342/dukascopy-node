import { HistoryConfig } from '../types';
import { KeyValidationStatus } from './types';

function validateGmtOffset(gmtOffset: HistoryConfig['gmtOffset']) {
  const status: KeyValidationStatus = { isValid: true, validationErrors: [] };

  if (gmtOffset < 0) {
    status.isValid = false;
    status.validationErrors.push(`GMT offset has to be a positive number`);
  }

  return status;
}

export { validateGmtOffset };
