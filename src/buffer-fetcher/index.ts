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

export { fetchBufferedData };
