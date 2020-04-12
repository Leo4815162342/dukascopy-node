import { ValidationError } from 'fastest-validator';
export interface ValidationStatus {
    isValid: boolean;
    validationErrors: string[];
}
export declare type ValidationFn = (object: object) => true | ValidationError[];
