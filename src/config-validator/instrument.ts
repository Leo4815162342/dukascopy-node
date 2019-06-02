import { instruments } from '../config/instruments';
import { HistoryConfig } from '../config/types';
import { KeyValidation } from './types';

function isInstrumentValid(instrument: HistoryConfig['instrument']) {
  const status: KeyValidation = { isValid: true, validationErrors: [] };

  if (!instruments.hasOwnProperty(instrument)) {
    status.isValid = false;
    status.validationErrors.push(`instrument "${instrument}" is not supported`);
  }
  return status;
}

export { isInstrumentValid };
