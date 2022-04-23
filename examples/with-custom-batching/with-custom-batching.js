const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2019-06-01'),
        to: new Date('2019-07-01')
      },
      timeframe: 'm1',
      batchSize: 15,
      pauseBetweenBatchesMs: 2000
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
