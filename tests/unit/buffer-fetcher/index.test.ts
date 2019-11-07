import { BuffetFetcher } from '../../../src/buffer-fetcher';
import fetch from 'node-fetch';

jest.mock('node-fetch', require('../../__mocks__/fetch').default);

const urls = [
  './tests/__test-data__/EURUSD/2019/01/04/BID_candles_min_1.bi5',
  './tests/__test-data__/EURUSD/2019/01/05/BID_candles_min_1.bi5'
];

describe('Buffer fetcher', () => {
  const bf = new BuffetFetcher();

  let data: any;

  it('Calls buffer fetcher function once', async () => {
    const spy = jest.spyOn(bf, 'fetch');
    data = await bf.fetch(urls);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Calls fetch function for each of the urls', () => {
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('Output contains proper url keys', () => {
    expect(data[0].url).toEqual('./tests/__test-data__/EURUSD/2019/01/04/BID_candles_min_1.bi5');
    expect(data[1].url).toEqual('./tests/__test-data__/EURUSD/2019/01/05/BID_candles_min_1.bi5');
  });

  it('Output contains proper sizes of buffers', () => {
    expect(data[0].buffer.length).toEqual(11582);
    expect(data[1].buffer.length).toEqual(11568);
  });
});
