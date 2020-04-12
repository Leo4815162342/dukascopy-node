import { roundNum } from './../utils/general';
import { PriceType } from '../config/price-types';

function getOHLC(input: number[][], filterFlats = true): number[] {
  const startMs = input[0][0];

  if (filterFlats) {
    // ignoring flat-volumed (0 volume) entries
    input = input.filter(data => data[5] !== 0);
  }

  if (input.length === 0) {
    return [];
  }

  let open = input[0][1];
  let high = input[0][2];
  let low = input[0][3];
  let close = input[input.length - 1][4];
  let volume = input[0][5];

  for (let i = 1, n = input.length; i < n; i++) {
    const [, , h, l, , v] = input[i];

    if (h > high) {
      high = h;
    }

    if (l < low) {
      low = l;
    }

    if (v !== undefined) {
      volume += v;
    }
  }

  const ohlc = [startMs, open, high, low, close];

  if (volume !== undefined) {
    ohlc.push(roundNum(volume));
  }

  return ohlc;
}

function breakdownByInterval(input: number[][], interval: 'minute' | 'month'): number[][][] {
  const dataByInterval: number[][][] = [];

  for (let i = 0, n = input.length; i < n; i++) {
    const data = input[i];
    const date = new Date(data[0]);
    const intervalValue = interval === 'minute' ? date.getUTCMinutes() : date.getUTCMonth();
    if (!dataByInterval[intervalValue]) {
      dataByInterval[intervalValue] = [];
    }
    dataByInterval[intervalValue].push(data);
  }

  return dataByInterval;
}
function tickOHLC(input: number[][], priceType: PriceType): number[] {
  // timestamp, askPrice, bidPrice, askVolume, bidVolume

  const date = new Date(input[0][0]);
  const minuteValue = date.getUTCMinutes();

  const openPrice = priceType === 'ask' ? input[0][1] : input[0][2];
  const closePrice = priceType === 'ask' ? input[input.length - 1][1] : input[input.length - 1][2];
  const initialVolume = priceType === 'ask' ? input[0][3] : input[0][4];

  const startTs = date.setUTCMinutes(minuteValue, 0, 0);
  const open = openPrice;
  let high = openPrice;
  let low = openPrice;
  const close = closePrice;
  let volume = initialVolume;

  for (let i = 1, n = input.length; i < n; i++) {
    const [, askPrice, bidPrice, askVolume, bidVolume] = input[i];

    const targetPrice = priceType === 'ask' ? askPrice : bidPrice;
    const targetVolume = priceType === 'ask' ? askVolume : bidVolume;

    if (targetPrice > high) {
      high = targetPrice;
    }

    if (targetPrice < low) {
      low = targetPrice;
    }

    if (targetVolume !== undefined) {
      volume += targetVolume;
    }
  }

  const ohlc = [startTs, open, high, low, close];

  if (volume !== undefined) {
    ohlc.push(roundNum(volume));
  }

  return ohlc;
}

function getMinuteOHLCfromTicks(input: number[][], priceType: PriceType): number[][] {
  const breakdown = breakdownByInterval(input, 'minute');
  const ohlc = breakdown.map(data => tickOHLC(data, priceType));

  return ohlc;
}

function getMonthlyOHLCfromDays(input: number[][]): number[][] {
  const breakdown = breakdownByInterval(input, 'month');
  const ohlc = breakdown.map(data => getOHLC(data));

  return ohlc;
}

export { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays };
