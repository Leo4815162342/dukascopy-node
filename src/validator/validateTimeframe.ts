import { timeframes } from '../timeframes';
import { HistoryConfig } from '../types';
import { KeyValidationStatus } from './types';

function validateTimeframe(timeframe: HistoryConfig['timeframe']) {
  const status: KeyValidationStatus = { isValid: true, validationErrors: [] };

  if (!timeframes.hasOwnProperty(timeframe)) {
    status.isValid = false;
    status.validationErrors.push(`Timeframe "${timeframe}" is not supported`);
  }
  return status;
}

export { validateTimeframe };
