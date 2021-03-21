const config = {
  instrument: 'eurusd',
  dates: {},
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
      message: "The 'dates.from' field is required."
    },
    {
      actual: undefined,
      expected: undefined,
      message: "The 'dates.to' field is required."
    }
  ]
};

export { config, expectedOutput };
