const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'aaabbbccc',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: 'aaabbbccc',
      expected: 'bid, ask',
      message: "The 'priceType' field does not match any of the allowed values."
    }
  ]
};

export { config, expectedOutput };
