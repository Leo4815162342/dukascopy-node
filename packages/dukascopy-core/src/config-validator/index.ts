import { HistoryConfig } from '../types';
import { check } from './schema';

export type ValidationStatus = {
  isValid: boolean;
  validationErrors: string[];
};

export function validateConfig(config: HistoryConfig): ValidationStatus {
  const validationResult = check(config);

  const isValid = validationResult === true;

  return {
    isValid,
    validationErrors:
      !isValid && Array.isArray(validationResult) ? validationResult.map(item => item.message) : []
  };
}
