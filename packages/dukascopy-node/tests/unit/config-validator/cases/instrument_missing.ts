const config = {
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
      actual: undefined,
      expected: undefined,
      message: "The 'instrument' field is required."
    }
  ]
};

export { config, expectedOutput };
