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
  filterFlats: HistoryConfig['filterFlats'];
};

async function processData({
  instrument,
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  filterFlats
}: ProcessDataInput) {
  const result = await Promise.all(
    bufferObjects.map(async ({ url, buffer }) => {
      const startDate = getDateFromUrl(url);
      const urlTimeframe = getTimeframeFromUrl(url);

      const decompressedData = await decompress({ buffer, timeframe: urlTimeframe });
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
        filterFlats
      });

      return aggregatedData;
    })
  );

  return <number[][]>[].concat(...result);
}

export { processData };
