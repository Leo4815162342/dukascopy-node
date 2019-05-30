import { HistoryConfig } from './src/config/types';
import { getHistoricRates } from './src';

(async () => {
  try {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 13:30', end: '2019-02-05 19:30' },
      timeframe: 'm30',
      volumes: true,
      gmtOffset: 0
    };
    console.log('fetching');
    console.log(JSON.stringify(config));
    const quotes = await getHistoricRates(config);
    console.log(quotes);
    console.log(quotes.length);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
