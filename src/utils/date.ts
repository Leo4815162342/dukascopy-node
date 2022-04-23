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
  const date = typeof input === 'string' || typeof input === 'number' ? new Date(input) : input;

  const opts: Intl.DateTimeFormatOptions = {
    ...{
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    },
    ...(options || {})
  };

  const formatted = new Intl.DateTimeFormat('en-US', opts).format(date);

  return formatted;
}

export { getYMDH, getStartOfUtc, getIsCurrentObj, getDateFromUrl, getFormattedDate };
