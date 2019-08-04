import { HistoryConfig } from '../src/index';
import { getHistoricRates } from '../src';

(async () => {
  try {
    const config: HistoryConfig = {
      instrument: 'cadhkd',
      dates: { from: '2019-02-14', to: '2019-03-01' },
      timeframe: 'd1',
      volumes: true,
      utcOffset: 0,
      ignoreFlats: true,
      priceType: 'bid'
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
