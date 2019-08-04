const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  volumes: true,
  filterFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'utcOffset' field is required!"]
};

export { config, expectedOutput };
