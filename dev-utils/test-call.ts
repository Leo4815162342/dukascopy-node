import { HistoryConfig } from '../src/config/types';
import { getHistoricRates } from '../src';

// import { validateConfig } from '../src/config-validator';
// // import { validateConfig } from '../src/config-validator';

// const d1 = +new Date();
// const { isValid, validationErrors } = validateConfig(
//   //@ts-ignore
//   {
//     instrument: 'eurusd',
//     dates: {
//       from: '2019-03-01',
//       to: '2019-03-05'
//     },
//     timeframe: 'm1',
//     priceType: 'bid',
//     utcOffset: 0,
//     //@ts-ignore
//     volumes: 'xxx'
//   }
// );
// const d2 = +new Date();
// console.log(`time ms: ${d2 - d1}`);
// console.log(isValid);
// console.log(validationErrors);

(async () => {
  try {
    const config: HistoryConfig = {
      instrument: 'nzdcad',
      dates: {
        from: '2000-01-01',
        to: '2020-01-01'
      },
      timeframe: 'd1',
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
    console.log('error', error);
  }
})();
