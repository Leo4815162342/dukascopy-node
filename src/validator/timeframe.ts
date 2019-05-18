import { timeframes } from '../config/timeframes';
import { HistoryConfig } from '../config/types';
import { KeyValidation } from './types';

function isTimeframeValid(timeframe: HistoryConfig['timeframe']) {
  const status: KeyValidation = { isValid: true, validationErrors: [] };

  if (!timeframes.hasOwnProperty(timeframe)) {
    status.isValid = false;
    status.validationErrors.push(`Timeframe "${timeframe}" is not supported`);
  }
  return status;
}

export { isTimeframeValid };
