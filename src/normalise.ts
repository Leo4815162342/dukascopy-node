import { HistoryConfig } from './types';

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
        ...(volumes ? [askVolume, bidVolume] : [])
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
        ...(volumes ? [volume] : [])
      ];
    };
  }
}

function normaliseData(data: number[][], normalizer: (values: number[]) => number[]) {
  const normalizedData = data.map(normalizer);

  return normalizedData;
}

export { normaliseData, getNormaliser };
