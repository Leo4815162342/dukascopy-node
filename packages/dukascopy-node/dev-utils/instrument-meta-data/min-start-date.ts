/* eslint-disable no-console */
import fetch from 'node-fetch';
import { pad } from '../../src/utils/general';

export interface StartDates {
  startHourForTicks: string;
  startDayForMinuteCandles: string;
  startMonthForHourlyCandles: string;
  startYearForDailyCandles: string;
}
/**
 *
 * Aggregates all underlying searches into a single object with
 * earliset available dates for each available timeframe/range
 *
 * @param instrument instrument ID
 */
export async function getStartDates(instrument: string): Promise<StartDates> {
  // We're intentionally doing this in sequence rather than in parallel
  // to make sure we dot not fall under rate-limiting restrictions
  const startHourForTicks = await getStartHourForTicks(instrument);
  const startDayForMinuteCandles = await getStartDayForMinuteCandles(instrument);
  const startMonthForHourlyCandles = await getStartMonthForHourlyCandles(instrument);
  const startYearForDailyCandles = await getStartYearForDailyCandles(instrument);

  return {
    startHourForTicks,
    startDayForMinuteCandles,
    startMonthForHourlyCandles,
    startYearForDailyCandles
  };
}

/**
 *
 * Binary search for earliset available `.bi5` file with hourly tick data
 *
 * @param instrument instrument ID
 *
 * @returns Date ISO string
 */
async function getStartHourForTicks(instrument: string): Promise<string> {
  let start = +new Date('1970-01-01T00:00:00.000Z');
  let end = +new Date().setUTCHours(0, 0, 0, 0);

  let minDate;

  console.log(instrument, '"Earliset available file with hourly tick data" search start');

  while (!minDate) {
    const middleDate = new Date(start + Math.floor((end - start) / 2));
    middleDate.setUTCHours(middleDate.getUTCHours(), 0, 0, 0);

    const year = middleDate.getUTCFullYear();
    const month = pad(middleDate.getUTCMonth());
    const day = pad(middleDate.getUTCDate());
    const hour = pad(middleDate.getUTCHours());

    const url = `https://datafeed.dukascopy.com/datafeed/${instrument}/${year}/${month}/${day}/${hour}h_ticks.bi5`;

    const data = await fetch(url);
    const rawResponse = await data.text();

    const hasHistoryData = rawResponse.indexOf('404 Not Found') === -1;

    if (end - start === 3600000) {
      minDate = hasHistoryData ? start : end;
    } else {
      if (hasHistoryData) {
        end = +middleDate;
      } else {
        start = +middleDate;
      }
    }
  }

  const result = new Date(minDate).toISOString();

  console.log(
    instrument,
    '"Earliset available file with hourly tick data" search finished:',
    result
  );

  return result;
}

/**
 *
 * Binary search for earliset available `.bi5` file with daily minute candle data
 *
 * @param instrument instrument ID
 *
 * @returns Date ISO string
 */
async function getStartDayForMinuteCandles(instrument: string): Promise<string> {
  let start = +new Date('1970-01-01T00:00:00.000Z');
  let end = +new Date().setUTCHours(0, 0, 0, 0);

  let minDate;

  console.log(instrument, '"Earliset available file with daily minute candle data" search start');

  while (!minDate) {
    const middleDate = new Date(start + Math.floor((end - start) / 2));
    middleDate.setUTCHours(0, 0, 0, 0);

    const year = middleDate.getUTCFullYear();
    const month = pad(middleDate.getUTCMonth());
    const day = pad(middleDate.getUTCDate());

    const url = `https://datafeed.dukascopy.com/datafeed/${instrument}/${year}/${month}/${day}/ASK_candles_min_1.bi5`;

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

  const result = new Date(minDate).toISOString();

  console.log(
    instrument,
    '"Earliset available file with daily minute candle data" search finished:',
    result
  );

  return result;
}

/**
 *
 * Binary search for earliset available `.bi5` file with monthly hour candle data
 *
 * @param instrument instrument ID
 *
 * @returns Date ISO string
 */
async function getStartMonthForHourlyCandles(instrument: string): Promise<string> {
  let start = +new Date('1970-01-01T00:00:00.000Z');
  let end = +new Date().setUTCHours(0, 0, 0, 0);

  let minDate;

  console.log(instrument, '"Earliset available file with monthly hour candle data" search start');

  while (!minDate) {
    const middleDate = new Date(start + Math.floor((end - start) / 2));
    middleDate.setUTCHours(0, 0, 0, 0);

    const year = middleDate.getUTCFullYear();
    const month = pad(middleDate.getUTCMonth());

    const url = `https://datafeed.dukascopy.com/datafeed/${instrument}/${year}/${month}/ASK_candles_hour_1.bi5`;

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

  const result = new Date(minDate).toISOString();

  console.log(
    instrument,
    '"Earliset available file with monthly hour candle data" search finished:',
    result
  );

  return result;
}

/**
 *
 * Binary search for earliset available `.bi5` file with yearly day candle data
 *
 * @param instrument instrument ID
 *
 * @returns Date ISO string
 */
async function getStartYearForDailyCandles(instrument: string): Promise<string> {
  let start = 1970;
  let end = new Date().getFullYear();

  let minYear = 0;

  console.log(instrument, '"Earliset available file with yearly day candle data" search start');

  while (!minYear) {
    const midYear = start + Math.floor((end - start) / 2);

    const url = `https://datafeed.dukascopy.com/datafeed/${instrument}/${midYear}/BID_candles_day_1.bi5`;

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

  const result = `${minYear}-01-01T00:00:00.000Z`;

  console.log(
    instrument,
    '"Earliset available file with yearly day candle data" search finished:',
    result
  );

  return `${minYear}-01-01T00:00:00.000Z`;
}

// Reference URLs (as of 27.12.2020):

// https://datafeed.dukascopy.com/datafeed/AUDCAD/2006/00/03/00h_ticks.bi5
// https://datafeed.dukascopy.com/datafeed/AUDCAD/2005/11/26/ASK_candles_min_1.bi5
// https://datafeed.dukascopy.com/datafeed/AUDCAD/2006/00/ASK_candles_hour_1.bi5
// https://datafeed.dukascopy.com/datafeed/AUDCAD/1992/ASK_candles_day_1.bi5

// https://datafeed.dukascopy.com/datafeed/PCLNUSUSD/2017/00/19/18h_ticks.bi5
// https://datafeed.dukascopy.com/datafeed/PCLNUSUSD/2017/00/19/ASK_candles_min_1.bi5
// https://datafeed.dukascopy.com/datafeed/PCLNUSUSD/2017/00/ASK_candles_hour_1.bi5
// https://datafeed.dukascopy.com/datafeed/PCLNUSUSD/2017/ASK_candles_day_1.bi5

// https://datafeed.dukascopy.com/datafeed/EURUSD/2003/04/04/19h_ticks.bi5
// https://datafeed.dukascopy.com/datafeed/EURUSD/2003/04/04/ASK_candles_min_1.bi5
// https://datafeed.dukascopy.com/datafeed/EURUSD/2003/04/ASK_candles_hour_1.bi5
// https://datafeed.dukascopy.com/datafeed/EURUSD/1972/ASK_candles_day_1.bi5

// https://datafeed.dukascopy.com/datafeed/GDXUSUSD/2017/00/23/16h_ticks.bi5
// https://datafeed.dukascopy.com/datafeed/GDXUSUSD/2017/00/23/ASK_candles_min_1.bi5
// https://datafeed.dukascopy.com/datafeed/GDXUSUSD/2017/00/ASK_candles_hour_1.bi5
// https://datafeed.dukascopy.com/datafeed/GDXUSUSD/2017/ASK_candles_day_1.bi5

// https://datafeed.dukascopy.com/datafeed/XAUUSD/2003/04/05/00h_ticks.bi5
// https://datafeed.dukascopy.com/datafeed/XAUUSD/1999/08/01/ASK_candles_min_1.bi5
// https://datafeed.dukascopy.com/datafeed/XAUUSD/1999/08/ASK_candles_hour_1.bi5
// https://datafeed.dukascopy.com/datafeed/XAUUSD/1997/ASK_candles_day_1.bi5
