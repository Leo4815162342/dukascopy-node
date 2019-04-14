import { HistoryConfig } from './../types';

export interface ValidationStatus {
  isValid: boolean;
  validationErrors: string[];
}

export interface ValidationCheck {
  check: (args: Partial<HistoryConfig>) => boolean;
  invalidMessage: (args: Partial<HistoryConfig>) => string;
}
