const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: 'xxx',
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: 'xxx',
      expected: undefined,
      message: "The 'volumes' field must be a boolean."
    }
  ]
};

export { config, expectedOutput };
