const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-03-30'),
        to: new Date('2021-03-31')
      },
      timeframe: 'tick'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
