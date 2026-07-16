import { getTimeframeFromUrl } from '../utils/range';
import { normalise } from '../data-normaliser';
import { DataResponse } from '../data-normaliser/types';
import { aggregate } from '../aggregator';
import { ProcessDataInput, ProcessDataOutput } from './types';

function processData({
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  volumeUnits,
  ignoreFlats
}: ProcessDataInput): ProcessDataOutput {
  const result: ProcessDataOutput = [];

  for (let i = 0, n = bufferObjects.length; i < n; i++) {
    const { url, buffer } = bufferObjects[i];

    const urlTimeframe = getTimeframeFromUrl(url);
    const responseData = JSON.parse(buffer.toString('utf8')) as DataResponse;
    const normalisedData = normalise({
      data: responseData,
      timeframe: urlTimeframe,
      volumes,
      volumeUnits
    });

    const aggregatedData = aggregate({
      data: normalisedData,
      fromTimeframe: urlTimeframe,
      toTimeframe: requestedTimeframe,
      priceType,
      ignoreFlats,
      startTs: responseData.timestamp,
      volumes
    });

    for (let j = 0, m = aggregatedData.length; j < m; j++) {
      result.push(aggregatedData[j]);
    }
  }

  return result;
}

export { processData };
