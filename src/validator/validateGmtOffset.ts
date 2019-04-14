import { HistoryConfig } from '../types';
import { ValidationStatus } from './types';

function validateGmtOffset(gmtOffset: HistoryConfig['gmtOffset']) {
  const status: ValidationStatus = { isValid: true, validationErrors: [] };

  if (gmtOffset < 0) {
    status.isValid = false;
    status.validationErrors.push(`Gmt offset has to be a positive number`);
  }

  return status;
}

export { validateGmtOffset };
