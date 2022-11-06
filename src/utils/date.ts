import { TimeframeType } from '../config/timeframes';
import { TimeRange } from './range';

function getYMDH(date: Date): number[] {
  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  return [year, month, day, hours];
}

function getStartOfUtc(date: Date, period: TimeRange, offset = 0): Date {
  const [year, month, day, hours] = getYMDH(date);

  let startOfUtc = new Date();

  if (period === 'hour') {
    startOfUtc = new Date(Date.UTC(year, month, day, hours + offset));
  } else if (period === 'day') {
    startOfUtc = new Date(Date.UTC(year, month, day + offset));
  } else if (period === 'month') {
    startOfUtc = new Date(Date.UTC(year, month + offset));
  } else if (period === 'year') {
    startOfUtc = new Date(Date.UTC(year + offset, 0));
  }

  return startOfUtc;
}

function getIsCurrentObj(date: Date): {
  year: boolean;
  month: boolean;
  day: boolean;
  hour: boolean;
} {
  const [year, month, day, hours] = getYMDH(date);

  const [currentYear, currentMonth, currentDay, currentHours] = getYMDH(new Date());

  const isCurrentYear = year === currentYear;
  const isCurrentMonth = isCurrentYear && month === currentMonth;
  const isCurrentDay = isCurrentMonth && day === currentDay;
  const isCurrentHour = isCurrentDay && hours === currentHours;

  const obj = {
    year: isCurrentYear,
    month: isCurrentMonth,
    day: isCurrentDay,
    hour: isCurrentHour
  };

  return obj;
}

function getDateFromUrl(url: string): Date {
  const [, year, month, day, hour] = (
    url.match(/(\d{4})\/(\d{2})?\/?(\d{2})?\/?(\d{2})?/) || []
  ).map(n => Number(n) || 0);

  const utcDate = new Date(Date.UTC(year, month, day || 1, hour));

  return utcDate;
}

function getFormattedDate(
  input: Date | string | number,
  options?: Intl.DateTimeFormatOptions
): string {
  if (!input || input === '0' || input === '1970-01-01T00:00:00.000Z') {
    return 'N/A';
  }

  const date = typeof input === 'string' || typeof input === 'number' ? new Date(input) : input;

  let formatted = date.toISOString();

  const opts: Intl.DateTimeFormatOptions = {
    ...{
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    },
    ...(options || {})
  };

  try {
    formatted = new Intl.DateTimeFormat('en-US', opts).format(date);
    // eslint-disable-next-line no-empty
  } catch (err) {}

  return formatted;
}

function getDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function getDateTimeFormatOptions(timeframe: TimeframeType): Intl.DateTimeFormatOptions {
  if (timeframe === 'tick') {
    return {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  }
  if (timeframe === 'm1' || timeframe === 'm5' || timeframe === 'm15' || timeframe === 'm30') {
    return { hour: 'numeric', minute: 'numeric' };
  }
  if (timeframe === 'h1' || timeframe === 'h4') {
    return { hour: 'numeric' };
  }

  return {};
}

export {
  getYMDH,
  getStartOfUtc,
  getIsCurrentObj,
  getDateFromUrl,
  getFormattedDate,
  getDateString,
  getDateTimeFormatOptions
};
