import { HistoryConfig } from '../src/config/types';
import { getHistoricRates } from './../src';

jest.mock('./../src/buffer-fetcher');

describe('should work', () => {
  it('should work as well', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };
    const quotes = await getHistoricRates(config);

    expect(quotes).toEqual([
      [1549239120000, 1.14573, 1.14574, 1.1457, 1.14574, 32.4900016784668],
      [1549239180000, 1.14572, 1.14574, 1.14572, 1.14573, 30.049999237060547],
      [1549239240000, 1.14573, 1.14577, 1.14572, 1.14576, 71.66000366210938]
    ]);
  });
});

// (async () => {
//   try {
//     const config: HistoryConfig = {
//       symbol: 'eurusd',
//       dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
//       timeframe: 'm1',
//       volumes: true,
//       gmtOffset: 0
//     };
//     const quotes = await getHistoricRates(config);
//     console.log(quotes);
//     console.log(quotes.length);
//     // console.log(quotes[0][0]);
//     // console.log(quotes[quotes.length - 1][0]);
//   } catch (error) {
//     console.log('error', error);
//   }
// })();

// [ [ 1549239120000,
//   1.14573,
//   1.14574,
//   1.1457,
//   1.14574,
//   32.4900016784668 ],
// [ 1549239180000,
//   1.14572,
//   1.14574,
//   1.14572,
//   1.14573,
//   30.049999237060547 ],
// [ 1549239240000,
//   1.14573,
//   1.14577,
//   1.14572,
//   1.14576,
//   71.66000366210938 ] ]

// [ [ 1549239120000,
//   1.14573,
//   1.14574,
//   1.1457,
//   1.14574,
//   32.4900016784668 ],
// [ 1549239180000,
//   1.14572,
//   1.14574,
//   1.14572,
//   1.14573,
//   30.049999237060547 ],
// [ 1549239240000,
//   1.14573,
//   1.14577,
//   1.14572,
//   1.14576,
//   71.66000366210938 ] ]
