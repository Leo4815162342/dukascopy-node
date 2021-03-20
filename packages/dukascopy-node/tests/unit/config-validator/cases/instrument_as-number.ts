const config = {
  instrument: 12345,
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

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: 12345,
      expected: undefined,
      message: "The 'instrument' field must be a string."
    }
  ]
};

export { config, expectedOutput };
