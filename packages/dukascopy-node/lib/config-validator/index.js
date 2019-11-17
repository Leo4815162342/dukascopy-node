"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const date_1 = require("../utils/date");
const validator = new fastest_validator_1.default({
    messages: {
        invalidDateString: "The '{field}' field must be a valid date string! Actual: {actual}"
    }
});
validator.add('dateString', (value) => {
    if (!date_1.getUTCDateFromString(value)) {
        return validator.makeError('invalidDateString', null, value);
    }
    return true;
});
const check = validator.compile(schema_1.schema);
function validateConfig(config) {
    const validationResult = check(config);
    const isValid = validationResult === true;
    return {
        isValid,
        validationErrors: !isValid && Array.isArray(validationResult) ? validationResult.map(item => item.message) : []
    };
}
exports.validateConfig = validateConfig;
