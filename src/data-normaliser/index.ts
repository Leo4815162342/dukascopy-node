import { instrumentMetaData } from '../config/instruments-metadata';
import { NormaliseInput } from './types';
import { Timeframe } from '../config/timeframes';
import { formatVolume } from '../utils/formatVolume';

export function normalise(input: NormaliseInput): number[][] {
  const { data, timeframe, startTs, instrument, volumes, volumeUnit } = input;

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
        ...(volumes ? [askVolume, bidVolume].map(vol => formatVolume(vol, volumeUnit)) : [])
      ];
    } else {
      const [sec, open, close, low, high, volume] = values;

      normalisedValues = [
        sec * 1000 + startTs,
        open / decimalFactor,
        high / decimalFactor,
        low / decimalFactor,
        close / decimalFactor,
        ...(volumes ? [formatVolume(volume, volumeUnit)] : [])
      ];
    }

    normalizedData.push(normalisedValues);
  }

  return normalizedData;
}
