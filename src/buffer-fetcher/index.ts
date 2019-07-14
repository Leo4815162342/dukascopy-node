import { splitArrayInChunks, wait } from '../utils/general';

import fetch from 'node-fetch';

export type FetchedObject = {
  url: string;
  buffer: Buffer;
};

async function fetchBufferedData(urls: string[]): Promise<FetchedObject[]> {
  return await Promise.all(
    urls.map(async url => {
      const data = await fetch(url);
      const buffer = await data.buffer();
      return { url, buffer };
    })
  );
}

async function batchedFetch(
  urls: string[],
  batchSize = 10,
  batchPauseMs = 1000
): Promise<FetchedObject[]> {
  const fetchedObjects: FetchedObject[][] = [];

  const batches = splitArrayInChunks(urls, batchSize);

  for (let i = 0, n = batches.length; i < n; i++) {
    const data = await fetchBufferedData(batches[i]);
    fetchedObjects.push(data);

    if (n > 1) {
      await wait(batchPauseMs);
    }
  }

  return [].concat(...fetchedObjects);
}

export { batchedFetch };
