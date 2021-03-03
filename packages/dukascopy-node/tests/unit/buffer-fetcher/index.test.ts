import { resolve } from 'path';
import { promises } from 'fs';
import { remove, readdir } from 'fs-extra';
import { BufferFetcher } from '../../../src/buffer-fetcher';
import { BufferObject } from '../../../src/buffer-fetcher/types';
import { URL_ROOT } from '../../../src/url-generator';

const urls = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/05/BID_candles_min_1.bi5'
];

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder');

const fileSystemFetcherFn = jest.fn(function (url: string): Promise<Buffer> {
  return promises.readFile(url.replace(URL_ROOT, './../../dummy-data'));
});

beforeEach(() => fileSystemFetcherFn.mockClear());

afterAll(async () => remove(cacheFolderPath));

describe('Buffer fetcher', () => {
  const notifyFn = jest.fn();

  const bufferFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    notifyOnItemFetchFn: notifyFn
  });

  let data: BufferObject[];

  it('Performs correct amount of calls', async () => {
    data = await bufferFetcher.fetch(urls);
    expect(fileSystemFetcherFn).toHaveBeenCalledTimes(2);
  });

  it('Output contains correct amount of items', () => {
    expect(data.length).toEqual(2);
  });

  it('Output contains proper url keys', () => {
    expect(data[0].url).toEqual(
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/04/BID_candles_min_1.bi5'
    );
    expect(data[1].url).toEqual(
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/05/BID_candles_min_1.bi5'
    );
  });

  it('Notify callback function has been fired correctly', () => {
    expect(notifyFn).toHaveBeenCalledTimes(2);
    expect(notifyFn.mock.calls).toEqual([
      ['https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/04/BID_candles_min_1.bi5'],
      ['https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/05/BID_candles_min_1.bi5']
    ]);
  });
});

describe('Buffer fetcher with file cache', () => {
  const buffetFetcher = new BufferFetcher({ fetcherFn: fileSystemFetcherFn });

  // const fetchSpy = jest.spyOn(buffetFetcher, 'fetch');

  it('Creates a cache folder and manifest', async () => {
    await buffetFetcher.initCache(cacheFolderPath);
    const folderContent = await readdir(cacheFolderPath);

    expect(folderContent).toEqual(['manifest.json']);
  });

  it('Calls buffer fetcher function once', async () => {
    await buffetFetcher.fetch(urls);
    const folderContent = await readdir(cacheFolderPath);
    expect(folderContent).toEqual(['EURUSD', 'manifest.json']);
    // expect(fetchSpy).toBeCalledTimes(1);
    // expect(1).toEqual(1);
  });
});
