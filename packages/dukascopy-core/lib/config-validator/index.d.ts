import { validator, schema } from './schema';
import { Config } from '../config';
import { ValidationStatus, ValidationFn } from './types';
export { validator, schema };
export declare function validateConfig(config: Config, validationFn?: ValidationFn): ValidationStatus;
