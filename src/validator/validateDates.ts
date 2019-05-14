import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';
import { HistoryConfig } from '../types';
import { KeyValidationStatus } from './types';

function isEndDateAfterStartDate(start: Date, end: Date) {
  return end > start;
}

function areDatesInPast(start: Date, end: Date) {
  const nowDate = new Date();
  return start < nowDate && end < nowDate;
}

function validateDates(dates: HistoryConfig['dates']) {
  const status: KeyValidationStatus = { isValid: true, validationErrors: [] };

  if (!dates.hasOwnProperty('start')) {
    status.isValid = false;
    status.validationErrors.push(`Start date is missing`);
  }

  if (!dates.hasOwnProperty('end')) {
    status.isValid = false;
    status.validationErrors.push(`End date is missing`);
  }

  const { start, end } = dates;
  const [startDate, endDate] = [start, end].map(d => parseISO(d));

  if (!isValid(startDate)) {
    status.isValid = false;
    status.validationErrors.push(`Start date is not a valid date`);
  }

  if (!isValid(endDate)) {
    status.isValid = false;
    status.validationErrors.push(`End date is not a valid date`);
  }

  if (!status.isValid) {
    return status;
  }

  if (!isEndDateAfterStartDate(startDate, endDate)) {
    status.isValid = false;
    status.validationErrors.push(`End date should be after start date`);
  }

  if (!areDatesInPast(startDate, endDate)) {
    status.isValid = false;
    status.validationErrors.push(`Start and end date should be in past`);
  }

  return status;
}

export { validateDates };
