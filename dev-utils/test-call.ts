import { HistoryConfig } from '../src/config/types';
import { getHistoricRates } from '../src';

(async () => {
  try {
    const config: HistoryConfig = {
      instrument: 'ethusd',
      dates: {
        from: '2018-01-01',
        to: '2018-12-01'
      },
      timeframe: 'mn1',
      priceType: 'ask',
      utcOffset: 0
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
    console.log('fetching error', error);
  }
})();
