import parseISO from 'date-fns/parseISO';
import isValid from 'date-fns/isValid';
import { HistoryConfig } from '../types';
import { ValidationStatus } from './types';

function isStrDateValid(date: string) {
  return isValid(parseISO(date));
}

function isEndDateAfterStartDate(start: Date, end: Date) {
  return end > start;
}

function areDatesInPast(start: Date, end: Date) {
  const nowDate = new Date();
  return start < nowDate && end < nowDate;
}

function validateDates(dates: HistoryConfig['dates']) {
  const status: ValidationStatus = { isValid: true, validationErrors: [] };

  if (!dates.hasOwnProperty('start') || !dates.hasOwnProperty('end')) {
    status.isValid = false;
    status.validationErrors.push(`Start and end are missing`);
  }

  const { start, end } = dates;

  [start, end].forEach((strDate, i) => {
    if (!isStrDateValid(strDate)) {
      status.isValid = false;
      status.validationErrors.push(
        `${i ? 'End' : 'Start'} date ${strDate || ''} is not a valid date`
      );
    }
  });

  if (!status.isValid) {
    return status;
  }

  const [startDate, endDate] = [start, end].map(d => new Date(d));

  if (!isEndDateAfterStartDate(startDate, endDate)) {
    status.isValid = false;
    status.validationErrors.push(`End date ${end} should be after start date ${start}`);
  }

  if (!areDatesInPast(startDate, endDate)) {
    status.isValid = false;
    status.validationErrors.push(`Start ${start} and end date ${end} should be in past`);
  }

  return status;
}

export { validateDates };
