const { getHistoricRates } = require('@dukascopy/node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'btcusd',
      dates: {
        from: '2018-01-01',
        to: '2019-01-01'
      },
      timeframe: 'd1'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
