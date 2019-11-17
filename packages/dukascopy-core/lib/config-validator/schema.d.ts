import Validator, { ValidationSchema } from 'fastest-validator';
import { ValidationFn } from './types';
export declare const schema: ValidationSchema;
declare const validator: Validator;
export { validator };
export declare const defaultSchemaValidationFn: ValidationFn;
