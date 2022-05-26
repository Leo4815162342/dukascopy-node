import { roundNum } from './../utils/general';
import { PriceType } from '../config/price-types';

interface GetOHLCInput {
  input: number[][];
  filterFlats?: boolean;
  startTs?: number;
  volumes: boolean;
}

function getOHLC({
  input,
  filterFlats = true,
  startTs = input[0][0],
  volumes
}: GetOHLCInput): number[] {
  if (filterFlats) {
    // ignoring flat-volumed (0 volume) entries
    input = input.filter(data => data?.[5] !== 0);
  }
  if (input.length === 0) {
    return [];
  }

  let open = 0;
  let high = -Infinity;
  let low = Infinity;
  let close = 0;
  let volume = 0;

  let openPriceDetected = false;
  let closePriceDetected = false;

  let isEmpty = true;

  for (let i = 0, n = input.length; i < n; i++) {
    const head = input[i];
    const tail = input[input.length - 1 - i];

    if (head && Array.isArray(head) && head.length > 0) {
      const [, o, h, l, , v] = head;

      if (!openPriceDetected) {
        open = o;
        openPriceDetected = true;
      }

      if (h > high) {
        high = h;
      }

      if (l < low) {
        low = l;
      }

      if (v) {
        volume += v;
      }

      isEmpty = false;
    }

    if (!closePriceDetected) {
      if (tail && Array.isArray(tail) && tail.length > 0) {
        const [, , , , c] = tail;
        close = c;
        closePriceDetected = true;
      }
    }
  }

  if (isEmpty) {
    return [];
  }

  const ohlc = [startTs, open, high, low, close];

  if (volumes) {
    ohlc.push(roundNum(volume));
  }

  return ohlc;
}

function breakdownByInterval(input: number[][], interval: 'minute' | 'month'): number[][][] {
  const dataByInterval: number[][][] = [];

  for (let i = 0, n = interval === 'minute' ? 60 : 12; i < n; i++) {
    dataByInterval.push([]);
  }

  for (let i = 0, n = input.length; i < n; i++) {
    const data = input[i];
    const date = new Date(data[0]);
    const intervalValue = interval === 'minute' ? date.getUTCMinutes() : date.getUTCMonth();
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
  const ohlc = breakdown.map(data => (data.length > 0 ? tickOHLC(data, priceType) : []));

  return ohlc;
}

function getMonthlyOHLCfromDays(input: number[][], volumes: boolean): number[][] {
  const breakdown = breakdownByInterval(input, 'month');
  const ohlc = breakdown.map(data => (data.length > 0 ? getOHLC({ input: data, volumes }) : []));

  return ohlc;
}

export { getOHLC, getMinuteOHLCfromTicks, getMonthlyOHLCfromDays };
