import { splitArrayInChunks, wait } from '../utils';

import fetch from 'node-fetch';

async function fetchBufferedData(urls: string[]): Promise<Buffer[]> {
  return await Promise.all(
    urls.map(async url => {
      const data = await fetch(url);
      const buffer = await data.buffer();
      return buffer;
    })
  );
}

async function batchedFetch(
  urls: string[],
  batchSize = 10,
  batchPauseMs = 1000
): Promise<Buffer[]> {
  const buffers: Buffer[][] = [];

  const batches = splitArrayInChunks(urls, batchSize);

  for (let i = 0, n = batches.length; i < n; i++) {
    const bufferData = await fetchBufferedData(batches[i]);
    buffers.push(bufferData);

    if (i !== n - 1) {
      await wait(batchPauseMs);
    }
  }

  return [].concat(...buffers);
}

export { batchedFetch };
