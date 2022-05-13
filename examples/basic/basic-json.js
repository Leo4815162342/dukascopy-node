const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'json'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
