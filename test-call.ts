import { HistoryConfig } from './src/config/types';
import { getHistoricRates } from './src';

(async () => {
  try {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05', end: '2019-02-05 12:00' },
      timeframe: 'h1',
      volumes: true,
      gmtOffset: -60
    };
    console.log('fetching');
    console.log(JSON.stringify(config));
    const quotes = await getHistoricRates(config);
    console.log(quotes);
    console.log(`size: ${quotes.length}`);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
