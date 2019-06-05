import { HistoryConfig } from './src/config/types';
import { getHistoricRates } from './src';

(async () => {
  try {
    const config: HistoryConfig = {
      instrument: 'eurusd',
      dates: { from: '2019-02-04 23:59', to: '2019-02-05 00:01' },
      timeframe: 'tick',
      volumes: true,
      utcOffset: 0
    };
    console.log('fetching');
    console.log(JSON.stringify(config));
    const quotes = await getHistoricRates(config);
    console.log(JSON.stringify(quotes, null, 2));
    console.log(`size: ${quotes.length}`);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
