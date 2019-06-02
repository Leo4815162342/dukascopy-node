import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import parseISO from 'date-fns/parseISO';
import { HistoryConfig } from '../config/types';
import { KeyValidation } from './types';

function isToDateAfterfromDate(from: Date, to: Date) {
  return isAfter(to, from);
}

function areDatesInPast(from: Date, to: Date) {
  const nowDate = new Date();
  return from < nowDate && to < nowDate;
}

function isDatesValid(dates: HistoryConfig['dates']) {
  const status: KeyValidation = { isValid: true, validationErrors: [] };

  if (!dates.hasOwnProperty('from')) {
    status.isValid = false;
    status.validationErrors.push(`From date is missing`);
  }

  if (!dates.hasOwnProperty('to')) {
    status.isValid = false;
    status.validationErrors.push(`To date is missing`);
  }

  const { from, to } = dates;
  const [fromDate, toDate] = [from, to].map(d => parseISO(d));

  if (!isValid(fromDate)) {
    status.isValid = false;
    status.validationErrors.push(`From date is not a valid date`);
  }

  if (!isValid(toDate)) {
    status.isValid = false;
    status.validationErrors.push(`To date is not a valid date`);
  }

  if (!status.isValid) {
    return status;
  }

  if (!isToDateAfterfromDate(fromDate, toDate)) {
    status.isValid = false;
    status.validationErrors.push(`To date should be after from date`);
  }

  if (!areDatesInPast(fromDate, toDate)) {
    status.isValid = false;
    status.validationErrors.push(`From and To date should be in past`);
  }

  return status;
}

export { isDatesValid };
