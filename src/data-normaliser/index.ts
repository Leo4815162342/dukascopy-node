import { instrumentMetaData } from '../config/instruments-metadata';
import { roundNum } from './../utils/general';
import { NormaliseInput } from './types';
import { Timeframe } from '../config/timeframes';

export function normalise(input: NormaliseInput): number[][] {
  const { data, timeframe, startTs, instrument, volumes } = input;

  const { decimalFactor } = instrumentMetaData[instrument];

  const normalizedData: number[][] = [];

  for (let i = 0, n = data.length; i < n; i++) {
    const values = data[i];
    let normalisedValues = [];

    if (timeframe === Timeframe.tick) {
      const [ms, ask, bid, askVolume, bidVolume] = values;

      normalisedValues = [
        ms + startTs,
        ask / decimalFactor,
        bid / decimalFactor,
        ...(volumes ? [askVolume, bidVolume].map(a => roundNum(a)) : [])
      ];
    } else {
      const [sec, open, close, low, high, volume] = values;

      normalisedValues = [
        sec * 1000 + startTs,
        open / decimalFactor,
        high / decimalFactor,
        low / decimalFactor,
        close / decimalFactor,
        ...(volumes ? [roundNum(volume)] : [])
      ];
    }

    normalizedData.push(normalisedValues);
  }

  return normalizedData;
}
