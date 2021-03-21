const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'json',
      useCache: true,
      cacheFolderPath: './my-custom-cache-folder'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();