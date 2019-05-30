// Available test data per timeframe:

// EURUSD bid (tick): 2019-02-04 - 2019-02-06
// EURUSD bid (m1, m30): 2019-02-04 - 2019-02-06
// EURUSD bid (h1, d1, mn1): 2019-01-01, 2019-03-01

import { HistoryConfig } from './../src/config/types';
import { getHistoricRates } from './../src';

jest.mock('./../src/buffer-fetcher');

describe('Generatas correct output for config:', () => {
  it('EURUSD, m1, 2019-02-04 00:12 - 2019-02-04 00:15', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toEqual([
      [1549239120000, 1.14573, 1.14574, 1.1457, 1.14574, 32.49],
      [1549239180000, 1.14572, 1.14574, 1.14572, 1.14573, 30.05],
      [1549239240000, 1.14573, 1.14577, 1.14572, 1.14576, 71.66]
    ]);
  });

  it('EURUSD, m1, 2019-02-04 - 2019-02-05', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04', end: '2019-02-05' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(1440);

    expect(quotes[0]).toEqual([1549238400000, 1.14543, 1.1457, 1.14542, 1.14569, 293.76]);
    expect(quotes[quotes.length - 1]).toEqual([
      1549324740000,
      1.14351,
      1.14353,
      1.14349,
      1.14349,
      115.41
    ]);
  });

  it('EURUSD, m1, 2019-02-05 01:00 - 2019-02-05 02:00', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 01:00', end: '2019-02-05 02:00' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(60);

    expect(quotes[0]).toEqual([1549328400000, 1.14357, 1.14361, 1.14357, 1.1436, 43.09]);
    expect(quotes[quotes.length - 1]).toEqual([
      1549331940000,
      1.14381,
      1.14381,
      1.14379,
      1.1438,
      88.42
    ]);
  });

  it('EURUSD, m1, 2019-02-05 00:00 - 2019-02-05 04:00', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 00:00', end: '2019-02-05 04:00' },
      timeframe: 'm1',
      volumes: false,
      gmtOffset: -60
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(240);

    expect(quotes[0]).toEqual([1549321200000, 1.14352, 1.14367, 1.14345, 1.14367]);
    expect(quotes[quotes.length - 1]).toEqual([1549335540000, 1.14389, 1.14391, 1.14389, 1.1439]);
  });
});
