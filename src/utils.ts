function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function getStarOfUtc(date: Date, period: 'hour' | 'day' | 'month', shift: number = 0): Date {
  const [year, month, day, hours] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  let startOfUtc: Date;

  if (period === 'hour') {
    startOfUtc = new Date(Date.UTC(year, month, day, hours + shift));
  } else if (period === 'day') {
    startOfUtc = new Date(Date.UTC(year, month, day + shift));
  } else if (period === 'month') {
    startOfUtc = new Date(Date.UTC(year, month + shift));
  }

  return startOfUtc;
}

export { pad, getStarOfUtc };
