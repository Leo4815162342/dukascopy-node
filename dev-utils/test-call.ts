import { HistoryConfig } from '../src/config/types';
import { getHistoricRates } from '../src';

(async () => {
  try {
    const config: HistoryConfig = {
      instrument: 'eurusd',
      dates: {
        from: '2019-07-24',
        to: '2019-07-25'
      },
      timeframe: 'd1',
      priceType: 'bid',
      utcOffset: 0,
      volumes: true
    };
    console.log('fetching started');
    console.log(JSON.stringify(config));
    const d1 = +new Date();
    const quotes = await getHistoricRates(config);
    const d2 = +new Date();
    console.log('fetching success');
    console.log(JSON.stringify(quotes));
    console.log(`size: ${quotes.length}`);
    console.log(`time ms: ${d2 - d1}`);
  } catch (error) {
    console.log('error', error);

    if (error.validationErrors) {
      console.log(error.validationErrors);
    }
  }
})();
