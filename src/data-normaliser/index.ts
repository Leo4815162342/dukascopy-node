import { Timeframe } from '../config/timeframes';
import { formatVolume } from '../utils/formatVolume';
import { CandleResponse, DataResponse, NormaliseInput, TickResponse } from './types';

function assertColumnLengths(expectedLength: number, columns: number[][]): void {
  if (columns.some(column => !Array.isArray(column) || column.length !== expectedLength)) {
    throw new Error('Invalid data response: column lengths do not match');
  }

  if (columns.some(column => column.some(value => !Number.isFinite(value)))) {
    throw new Error('Invalid data response: columns must contain finite numbers');
  }
}

function getPriceScale(multiplier: number): number {
  if (!Number.isFinite(multiplier) || multiplier <= 0) {
    throw new Error('Invalid data response: multiplier must be a positive number');
  }

  const [coefficient, exponentText = '0'] = multiplier.toString().toLowerCase().split('e');
  const decimalPlaces = coefficient.split('.')[1]?.length || 0;
  const exponent = Number(exponentText);

  return Math.max(0, decimalPlaces - exponent);
}

function formatPrice(units: number, multiplier: number, scale: number): number {
  return Number((units * multiplier).toFixed(scale));
}

function normaliseTicks(
  data: TickResponse,
  volumes: boolean,
  volumeUnits: NormaliseInput['volumeUnits']
): number[][] {
  const length = data.times.length;

  assertColumnLengths(length, [data.asks, data.bids, data.askVolumes, data.bidVolumes]);

  if (data.times.some(time => !Number.isFinite(time) || time < 0)) {
    throw new Error('Invalid tick response: time deltas must not be negative');
  }

  if (length === 0) {
    return [];
  }

  if (
    typeof data.ask !== 'number' ||
    !Number.isFinite(data.ask) ||
    typeof data.bid !== 'number' ||
    !Number.isFinite(data.bid)
  ) {
    throw new Error('Invalid tick response: missing base price');
  }

  const scale = getPriceScale(data.multiplier);
  let timestamp = data.timestamp;
  let askUnits = Math.round(data.ask / data.multiplier);
  let bidUnits = Math.round(data.bid / data.multiplier);
  const result: number[][] = [];

  for (let i = 0; i < length; i++) {
    timestamp += data.times[i];
    askUnits += data.asks[i];
    bidUnits += data.bids[i];

    result.push([
      timestamp,
      formatPrice(askUnits, data.multiplier, scale),
      formatPrice(bidUnits, data.multiplier, scale),
      ...(volumes
        ? [data.askVolumes[i], data.bidVolumes[i]].map(volume =>
            formatVolume(volume / 1_000_000, volumeUnits)
          )
        : [])
    ]);
  }

  return result;
}

function normaliseCandles(
  data: CandleResponse,
  volumes: boolean,
  volumeUnits: NormaliseInput['volumeUnits']
): number[][] {
  const length = data.times.length;

  assertColumnLengths(length, [data.opens, data.highs, data.lows, data.closes, data.volumes]);

  if (data.times.some(time => !Number.isInteger(time) || time < 0)) {
    throw new Error('Invalid candle response: time deltas must be non-negative integers');
  }

  if (length === 0) {
    return [];
  }

  if (
    typeof data.open !== 'number' ||
    !Number.isFinite(data.open) ||
    typeof data.high !== 'number' ||
    !Number.isFinite(data.high) ||
    typeof data.low !== 'number' ||
    !Number.isFinite(data.low) ||
    typeof data.close !== 'number' ||
    !Number.isFinite(data.close) ||
    !Number.isFinite(data.shift) ||
    data.shift <= 0
  ) {
    throw new Error('Invalid candle response: missing base candle or shift');
  }

  const scale = getPriceScale(data.multiplier);
  let timestamp = data.timestamp;
  let openUnits = Math.round(data.open / data.multiplier);
  let highUnits = Math.round(data.high / data.multiplier);
  let lowUnits = Math.round(data.low / data.multiplier);
  let closeUnits = Math.round(data.close / data.multiplier);
  let previousCloseUnits = closeUnits;
  const result: number[][] = [];

  for (let i = 0; i < length; i++) {
    const timeDelta = data.times[i];

    for (let gap = 0; gap < timeDelta - (i === 0 ? 0 : 1); gap++) {
      const flatTimestamp = timestamp + (i === 0 ? gap : gap + 1) * data.shift;
      const flatPrice = formatPrice(previousCloseUnits, data.multiplier, scale);
      result.push([
        flatTimestamp,
        flatPrice,
        flatPrice,
        flatPrice,
        flatPrice,
        ...(volumes ? [0] : [])
      ]);
    }

    timestamp += timeDelta * data.shift;
    openUnits += data.opens[i];
    highUnits += data.highs[i];
    lowUnits += data.lows[i];
    closeUnits += data.closes[i];
    previousCloseUnits = closeUnits;

    result.push([
      timestamp,
      formatPrice(openUnits, data.multiplier, scale),
      formatPrice(highUnits, data.multiplier, scale),
      formatPrice(lowUnits, data.multiplier, scale),
      formatPrice(closeUnits, data.multiplier, scale),
      ...(volumes ? [formatVolume(data.volumes[i], volumeUnits)] : [])
    ]);
  }

  return result;
}

export function normalise({ data, timeframe, volumes, volumeUnits }: NormaliseInput): number[][] {
  if (!data || !Array.isArray(data.times) || !Number.isFinite(data.timestamp)) {
    throw new Error('Invalid data response');
  }

  return timeframe === Timeframe.tick
    ? normaliseTicks(data as TickResponse, volumes, volumeUnits)
    : normaliseCandles(data as CandleResponse, volumes, volumeUnits);
}

export type { CandleResponse, DataResponse, TickResponse };
