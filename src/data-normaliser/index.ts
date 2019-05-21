import { HistoryConfig } from './../config/types';
import { symbols } from './../config/symbols';

function getNormaliser(
  timeframe: HistoryConfig['timeframe'],
  startMs: number,
  symbol: HistoryConfig['symbol'],
  volumes: HistoryConfig['volumes']
): (values: number[]) => number[] {
  const { decimalFactor } = symbols[symbol];

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

function normalise(
  decompressedData: number[][],
  timeframe: HistoryConfig['timeframe'],
  startTimestamp: number,
  symbol: HistoryConfig['symbol'],
  volumes: boolean
) {
  const normaliserFn = getNormaliser(timeframe, startTimestamp, symbol, volumes);

  const normalizedData = decompressedData.map(normaliserFn);

  return normalizedData;
}

export { normalise };
