import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { decompress } from '../decompressor';
import { normalise } from '../data-normaliser';
import { aggregate } from '../aggregator';
import { ProcessDataInput } from './types';

function processData({
  instrument,
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  ignoreFlats
}: ProcessDataInput): number[][] {
  const result = bufferObjects.map(({ url, buffer }) => {
    const startDate = getDateFromUrl(url);
    const urlTimeframe = getTimeframeFromUrl(url);

    const decompressedData = decompress({ buffer, timeframe: urlTimeframe });
    const normalisedData = normalise({
      data: decompressedData,
      timeframe: urlTimeframe,
      startTs: +startDate,
      instrument,
      volumes
    });

    const aggregatedData = aggregate({
      data: normalisedData,
      fromTimeframe: urlTimeframe,
      toTimeframe: requestedTimeframe,
      priceType,
      ignoreFlats
    });

    return aggregatedData;
  });

  return ([] as number[][]).concat(...result);
}

export { processData };
