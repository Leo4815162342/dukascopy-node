const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput: {
  isValid: boolean;
  validationErrors: string[];
} = { isValid: true, validationErrors: [] };

export { config, expectedOutput };
