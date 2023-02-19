import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { decompress } from '../decompressor';
import { normalise } from '../data-normaliser';
import { aggregate } from '../aggregator';
import { ProcessDataInput, ProcessDataOutput } from './types';

function processData({
  instrument,
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  ignoreFlats
}: ProcessDataInput): ProcessDataOutput {
  const result: ProcessDataOutput = [];

  for (let i = 0, n = bufferObjects.length; i < n; i++) {
    const { url, buffer } = bufferObjects[i];

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
      ignoreFlats,
      startTs: +startDate,
      volumes
    });

    for (let j = 0, m = aggregatedData.length; j < m; j++) {
      result.push(aggregatedData[j]);
    }
  }

  return result;
}

export { processData };
