import fetch from 'node-fetch';
import { symbols } from './symbols';

interface GetFileUrlInput {
  symbol: string;
  year: number;
  month: number;
  day: number;
}

//2016/08/30 - min date ACAFREUR
// https://datafeed.dukascopy.com/datafeed/ACAFREUR/2016/08/29/BID_candles_min_1.bi5

// 'https://datafeed.dukascopy.com/datafeed/ACAFREUR/2019/02/20/BID_candles_min_1.bi5'

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';
const FILE_NAME = 'ASK_candles_min_1.bi5';

(async () => {
  try {
    const minDate = await getMinStartDate('EURUSD');

    console.log(minDate);
  } catch (error) {
    console.log(error);
  }
})();

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

  return getDateString(minDate);
}
