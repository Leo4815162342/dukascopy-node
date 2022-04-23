import { instrumentMetaData } from '../config/instruments-metadata';
import { roundNum } from './../utils/general';
import { NormaliseInput } from './types';
import { TimeframeType, Timeframe } from '../config/timeframes';

function getNormaliser(
  timeframe: TimeframeType,
  startMs: number,
  decimalFactor: number,
  volumes: boolean
): (values: number[]) => number[] {
  if (timeframe === Timeframe.tick) {
    return function (values: number[]): number[] {
      const [ms, ask, bid, askVolume, bidVolume] = values;

      return [
        ms + startMs,
        ask / decimalFactor,
        bid / decimalFactor,
        ...(volumes ? [askVolume, bidVolume].map(a => roundNum(a)) : [])
      ];
    };
  } else {
    return function (values: number[]): number[] {
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

  const { decimalFactor } = instrumentMetaData[instrument];

  const normaliserFn = getNormaliser(timeframe, startTs, decimalFactor, volumes);

  const normalizedData = data.map(normaliserFn);

  return normalizedData;
}
