import { HistoryConfig } from './../config/types';
import { BufferObject } from '../buffer-fetcher';

import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { decompress } from '../decompressor';
import { normalise } from '../data-normaliser';
import { aggregate } from './aggregator';

async function processData(
  instrument: HistoryConfig['instrument'],
  requestedTimeframe: HistoryConfig['timeframe'],
  bufferObjects: BufferObject[],
  priceType: HistoryConfig['priceType']
) {
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
        volumes: true
      });

      const aggregatedData = aggregate(normalisedData, requestedTimeframe, urlTimeframe, priceType);

      return aggregatedData;
    })
  );

  return <number[][]>[].concat(...result);
}

export { processData };
