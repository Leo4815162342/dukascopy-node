import addMinutes from 'date-fns/addMinutes';
import parseISO from 'date-fns/parseISO';

function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function roundNum(value: number | string, decimal: number): number {
  return Number(Number(value).toFixed(decimal));
}

function getStarOfUtc(date: Date, period: 'hour' | 'day' | 'month', offset: number = 0): Date {
  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  let startOfUtc: Date;

  if (period === 'hour') {
    startOfUtc = new Date(Date.UTC(year, month, day, hours + offset));
  } else if (period === 'day') {
    startOfUtc = new Date(Date.UTC(year, month, day + offset));
  } else if (period === 'month') {
    startOfUtc = new Date(Date.UTC(year, month + offset));
  }

  return startOfUtc;
}

function normalizedDateInput(date: string, offsetMin?: number): Date {
  const parsedDate = parseISO(date);

  return addMinutes(parsedDate, offsetMin + -parsedDate.getTimezoneOffset());
}

function splitArrayInChunks<T>(array: T[], chunkSize: number): T[][] {
  let result = [];

  for (let i = 0, n = array.length; i < n; i++) {
    const chunkIndex = Math.floor(i / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(array[i]);
  }

  return result;
}

export { pad, roundNum, getStarOfUtc, normalizedDateInput, splitArrayInChunks };
