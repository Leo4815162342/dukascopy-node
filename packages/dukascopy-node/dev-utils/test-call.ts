/* eslint-disable no-console */
import { getHistoricRates, Config } from '../src';

(async () => {
  try {
    const config: Config = {
      instrument: 'eurusd',
      dates: { from: '2019-06-01', to: '2019-07-01' },
      priceType: 'bid',
      timeframe: 'd1',
      format: 'json',
      volumes: true,
      utcOffset: 0,
      ignoreFlats: false,
      useCache: false
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
