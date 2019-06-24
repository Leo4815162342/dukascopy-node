import { HistoryConfig } from './../config/types';
import { instruments } from '../config/instruments';
import { roundNum } from './../utils/general';

function getNormaliser(
  timeframe: HistoryConfig['timeframe'],
  startMs: number,
  instrument: HistoryConfig['instrument'],
  volumes: HistoryConfig['volumes']
): (values: number[]) => number[] {
  const { decimalFactor } = instruments[instrument];

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

function normalise(
  decompressedData: number[][],
  timeframe: HistoryConfig['timeframe'],
  startTimestamp: number,
  instrument: HistoryConfig['instrument'],
  volumes: boolean
) {
  const normaliserFn = getNormaliser(timeframe, startTimestamp, instrument, volumes);

  const normalizedData = decompressedData.map(normaliserFn);

  return normalizedData;
}

export { normalise };
