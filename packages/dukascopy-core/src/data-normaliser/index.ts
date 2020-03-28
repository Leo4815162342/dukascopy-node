import { instruments } from '../config/instruments';
import { roundNum } from './../utils/general';
import { NormaliseInput } from './types';
import { Timeframe } from '../config/timeframes';

function getNormaliser(
  timeframe: Timeframe,
  startMs: number,
  decimalFactor: number,
  volumes: boolean
): (values: number[]) => number[] {
  if (timeframe === 'tick') {
    return function(values: number[]): number[] {
      const [ms, ask, bid, askVolume, bidVolume] = values;

      return [
        ms + startMs,
        ask / decimalFactor,
        bid / decimalFactor,
        ...(volumes ? [askVolume, bidVolume].map(a => roundNum(a)) : [])
      ];
    };
  } else {
    return function(values: number[]): number[] {
      const [sec, open, close, low, high, volume] = values;

      return [
        sec * 1000 + startMs,
        open / decimalFactor,
        high / decimalFactor,
        low / decimalFactor,
        close / decimalFactor,
        ...(volumes ? [roundNum(volume)] : [])
      ];
    };
  }
}

export function normalise(input: NormaliseInput): number[][] {
  const { data, timeframe, startTs, instrument, volumes } = input;

  const { decimalFactor } = instruments[instrument];

  const normaliserFn = getNormaliser(timeframe, startTs, decimalFactor, volumes);

  const normalizedData = data.map(normaliserFn);

  return normalizedData;
}
