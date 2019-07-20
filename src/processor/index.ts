import { HistoryConfig } from './../config/types';
import { BufferObject } from '../buffer-fetcher';

import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { decompress } from '../decompressor';
import { normalise } from '../data-normaliser';

async function processData(
  instrument: HistoryConfig['instrument'],
  requestedTimeframe: HistoryConfig['timeframe'],
  bufferObjects: BufferObject[]
) {
  const result = await bufferObjects.map(async ({ url, buffer }) => {
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

    if (requestedTimeframe === urlTimeframe) {
      return normalisedData;
    } else {
      // requestedTimeframe === 'm1' && urlTimeframe === 'tick'
      // requestedTimeframe === 'm30' && urlTimeframe === 'tick'
    }
  });
}
