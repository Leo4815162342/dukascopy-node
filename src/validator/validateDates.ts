import isValid from 'date-fns/isValid';
import { HistoryConfig } from '../types';
import { ValidationStatus } from './types';

function isEndDateAfterStartDate(start: Date, end: Date) {
  return end > start;
}

function areDatesInPast(start: Date, end: Date) {
  const nowDate = new Date();
  return start < nowDate && end < nowDate;
}

function validateDates(dates: HistoryConfig['dates']) {
  const status: ValidationStatus = { isValid: true, validationErrors: [] };

  if (!dates.hasOwnProperty('start')) {
    status.isValid = false;
    status.validationErrors.push(`Start date is missing`);
  }

  if (!dates.hasOwnProperty('end')) {
    status.isValid = false;
    status.validationErrors.push(`End date is missing`);
  }

  const { start, end } = dates;

  if (!isValid(start)) {
    status.isValid = false;
    status.validationErrors.push(`Start date is not a valid date`);
  }

  if (!isValid(end)) {
    status.isValid = false;
    status.validationErrors.push(`End date is not a valid date`);
  }

  if (!status.isValid) {
    return status;
  }

  if (!isEndDateAfterStartDate(start, end)) {
    status.isValid = false;
    status.validationErrors.push(`End date should be after start date`);
  }

  if (!areDatesInPast(start, end)) {
    status.isValid = false;
    status.validationErrors.push(`Start and end date should be in past`);
  }

  return status;
}

export { validateDates };
