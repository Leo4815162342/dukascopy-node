import { getHistoricalRatesToStream } from './getHistoricalRatesToStream';

(async () => {
  try {
    const data = await getHistoricalRatesToStream({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'csv'
    });

    data.on('data', chunk => {
      console.log(chunk);
    });
    data.on('end', () => {
      console.log('end');
    });
  } catch (error) {
    console.log('error', error);
  }
})();
