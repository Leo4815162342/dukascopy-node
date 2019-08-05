import { HistoryConfig } from './../index';
import { BufferObject } from '../buffer-fetcher';

import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { decompress } from '../decompressor';
import { normalise } from '../data-normaliser';
import { aggregate } from '../aggregator';

type ProcessDataInput = {
  instrument: HistoryConfig['instrument'];
  requestedTimeframe: HistoryConfig['timeframe'];
  bufferObjects: BufferObject[];
  priceType: HistoryConfig['priceType'];
  volumes: HistoryConfig['volumes'];
  ignoreFlats: HistoryConfig['ignoreFlats'];
};

function processData({
  instrument,
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  ignoreFlats
}: ProcessDataInput) {
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

  return <number[][]>[].concat(...result);
}

export { processData };
