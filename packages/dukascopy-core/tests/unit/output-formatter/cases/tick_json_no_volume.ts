const input = {
  processedData: [
    [1000000000000, 1.00001, 1.00002],
    [2000000000000, 2.00001, 2.00002],
    [3000000000000, 3.00001, 3.00002]
  ],
  timeframe: 'tick',
  format: 'json'
};

const expectedOutput = [
  {
    timestamp: 1000000000000,
    askPrice: 1.00001,
    bidPrice: 1.00002
  },
  {
    timestamp: 2000000000000,
    askPrice: 2.00001,
    bidPrice: 2.00002
  },
  {
    timestamp: 3000000000000,
    askPrice: 3.00001,
    bidPrice: 3.00002
  }
];

export { input, expectedOutput };
