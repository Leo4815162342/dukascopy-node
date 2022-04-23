/* eslint-disable no-console */
import { getHistoricRates, Config } from '../src';

(async () => {
  try {
    const config: Config = {
      instrument: 'btcusd',
      dates: {
        from: '2018-01-01',
        to: '2019-01-01'
      },
      timeframe: 'd1',
      format: 'json',
      useCache: false
    };
    console.log('fetching started');
    console.log(JSON.stringify(config));
    const d1 = +new Date();
    const quotes = await getHistoricRates(config);
    const d2 = +new Date();
    console.log('fetching success');
    // console.log(JSON.stringify(quotes));
    console.log(`size: ${quotes.length}`);
    console.log(JSON.stringify(quotes, null, 2));
    console.log(`time ms: ${d2 - d1}`);
  } catch (error) {
    console.log('error', error);
  }
})();
