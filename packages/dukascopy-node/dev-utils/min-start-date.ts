/* eslint-disable no-console */
import fetch from 'node-fetch';

import { pad } from '../src/utils/general';
import { URL_ROOT } from '../src/url-generator';

interface GetFileUrlInput {
  instrument: string;
  year: number;
  month: number;
  day: number;
}

const FILE_NAME = 'ASK_candles_min_1.bi5';

function getFileUrl({ instrument, year, month, day }: GetFileUrlInput): string {
  return `${URL_ROOT}/${instrument}/${year}/${pad(month)}/${pad(day)}/${FILE_NAME}`;
}

function getDate(timestamp: number) {
  const date = new Date(timestamp);

  const [year, month, day] = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()];
  return [year, pad(month), pad(day)];
}

function getDateString(timestamp: number) {
  const [year, month, day] = getDate(timestamp);
  return `${year}-${month}-${day}`;
}

// https://datafeed.dukascopy.com/datafeed/ABCUSUSD/2018/BID_candles_day_1.bi5

async function getMinStartDate(instrument: string): Promise<string> {
  console.log(`Fetching start date: ${instrument}`);
  let start = +new Date('1970-01-01');
  let end = +new Date().setHours(0, 0, 0, 0);

  let minDate;

  while (!minDate) {
    const middleDate = new Date(start + Math.floor((end - start) / 2));
    middleDate.setHours(0, 0, 0, 0);

    let url = getFileUrl({
      instrument,
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
  console.log(`Finished fetching start date: ${instrument} : ${getDateString(minDate)}`);
  console.log(`===============`);
  return getDateString(minDate);
}

async function getMinYear(instrment: string): Promise<number> {
  let start = 1970;
  let end = new Date().getFullYear();

  let minYear = 0;

  console.log('Start min year search', instrment);

  while (!minYear) {
    const midYear = start + Math.floor((end - start) / 2);

    const url = `https://datafeed.dukascopy.com/datafeed/${instrment}/${midYear}/BID_candles_day_1.bi5`;

    const data = await fetch(url);
    const rawResponse = await data.text();

    const hasHistoryData = rawResponse.indexOf('404 Not Found') === -1;

    if (end - start === 1) {
      minYear = hasHistoryData ? start : end;
    } else {
      if (hasHistoryData) {
        end = midYear;
      } else {
        start = midYear;
      }
    }
  }

  console.log('Finished min year search', instrment, minYear);

  return minYear;
}

export { getMinStartDate, getMinYear };
