import { HistoryConfig } from './../config/types';

import { instruments } from '../config/instruments';
import { roundNum } from './../utils/general';

type NormaliseInput = {
  data: number[][];
  timeframe: HistoryConfig['timeframe'];
  startTs: number;
  instrument: HistoryConfig['instrument'];
  volumes: boolean;
};

function normalise(input: NormaliseInput): number[][] {
  const { data, timeframe, startTs, instrument, volumes } = input;

  const { decimalFactor } = instruments[instrument];

  const normaliserFn = getNormaliser(timeframe, startTs, decimalFactor, volumes);

  const normalizedData = data.map(normaliserFn);

  return normalizedData;
}

function getNormaliser(
  timeframe: HistoryConfig['timeframe'],
  startMs: number,
  decimalFactor: number,
  volumes: HistoryConfig['volumes']
): (values: number[]) => number[] {
  if (timeframe === 'tick') {
    return function(values: number[]) {
      const [ms, ask, bid, askVolume, bidVolume] = values;

      return [
        ms + startMs,
        ask / decimalFactor,
        bid / decimalFactor,
        ...(volumes ? [askVolume, bidVolume].map(a => roundNum(a)) : [])
      ];
    };
  } else {
    return function(values: number[]) {
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

export { normalise };
