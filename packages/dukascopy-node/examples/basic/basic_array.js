const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: '2021-02-01',
        to: '2021-03-01'
      },
      timeframe: 'd1',
      format: 'array'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();