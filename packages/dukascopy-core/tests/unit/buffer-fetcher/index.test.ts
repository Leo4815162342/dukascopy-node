import fs from 'fs';
import { promisify } from 'util';
import { BufferFetcher, URL_ROOT } from '../../../src';

BufferFetcher.prototype.fetch = async (urls: string[]) => {
  const buffers = await Promise.all(
    urls.map(url => promisify(fs.readFile)(url.replace(URL_ROOT, './../../dummy-data')))
  );

  return urls.map((_, i) => ({
    url: urls[i],
    buffer: buffers[i]
  }));
};

const urls = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/05/BID_candles_min_1.bi5'
];

describe('Buffer fetcher', () => {
  const bf = new BufferFetcher();

  let data: any;

  it('Calls buffer fetcher function once', async () => {
    const spy = jest.spyOn(bf, 'fetch');
    data = await bf.fetch(urls);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Calls fetch function for each of the urls', () => {
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

  it('Output contains proper sizes of buffers', () => {
    expect(data[0].buffer.length).toEqual(11582);
    expect(data[1].buffer.length).toEqual(11568);
  });
});
