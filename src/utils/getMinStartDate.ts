import fetch from 'node-fetch';

interface GetFileUrlInput {
  symbol: string;
  year: number;
  month: number;
  day: number;
}

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';
const FILE_NAME = 'ASK_candles_min_1.bi5';

function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function getFileUrl({ symbol, year, month, day }: GetFileUrlInput): string {
  return `${API_ROOT}/${symbol}/${year}/${pad(month)}/${pad(day)}/${FILE_NAME}`;
}

function getDate(timestamp: number) {
  const date = new Date(timestamp);

  const [year, month, day] = [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  ];
  return [year, pad(month), pad(day)];
}

function getDateString(timestamp: number) {
  const [year, month, day] = getDate(timestamp);
  return `${year}-${month}-${day}`;
}

async function getMinStartDate(symbol: string) {
  console.log(`Fetching start date: ${symbol}`);
  let start = +new Date('1970-01-01');
  let end = +new Date().setHours(0, 0, 0, 0);

  let minDate;

  while (!minDate) {
    const middleDate = new Date(start + Math.floor((end - start) / 2));
    middleDate.setHours(0, 0, 0, 0);

    let url = getFileUrl({
      symbol,
      year: middleDate.getUTCFullYear(),
      month: middleDate.getUTCMonth(),
      day: middleDate.getUTCDate()
    });

    const data = await fetch(url);
    const rawResponse = await data.text();

    const hasHistoryData = rawResponse.indexOf('404 Not Found') === -1;

    if (end - start === 86400000) {
      minDate = hasHistoryData ? start : end;
    } else {
      if (hasHistoryData) {
        end = +middleDate;
      } else {
        start = +middleDate;
      }
    }
  }
  console.log(
    `Finished fetching start date: ${symbol} : ${getDateString(minDate)}`
  );
  console.log(`===============`);
  return getDateString(minDate);
}

export { getMinStartDate };
