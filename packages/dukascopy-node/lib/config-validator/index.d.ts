import { HistoryConfig } from '../types';
export declare type ValidationStatus = {
    isValid: boolean;
    validationErrors: string[];
};
declare function validateConfig(config: HistoryConfig): ValidationStatus;
export { validateConfig };
