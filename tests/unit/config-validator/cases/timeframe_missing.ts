const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'timeframe' field is required!"]
};

export { config, expectedOutput };
