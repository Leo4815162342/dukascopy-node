const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 'xxx',
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: 'xxx',
      expected: undefined,
      message: "The 'utcOffset' field must be a number."
    }
  ]
};

export { config, expectedOutput };
