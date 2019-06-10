import { HistoryConfig } from '../config/types';

export type ConfigKey = keyof HistoryConfig;

export type KeyValidation = {
  isValid: boolean;
  validationErrors: string[];
};

export type ConfigValidation = {
  isValid: boolean;
  validationErrors: { [key in ConfigKey]?: string[] };
};

export type KeyValidators = ((...args: any) => KeyValidation)[];

export type ValidatorMap = { [key in ConfigKey]: KeyValidators };
