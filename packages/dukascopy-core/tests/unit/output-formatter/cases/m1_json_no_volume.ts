const input = {
  processedData: [
    [1000000000000, 1.00001, 1.00002, 1.00003, 1.00004],
    [2000000000000, 2.00001, 2.00002, 2.00003, 2.00004],
    [3000000000000, 3.00001, 3.00002, 3.00003, 3.00004]
  ],
  timeframe: 'm1',
  format: 'json'
};

const expectedOutput = [
  {
    timestamp: 1000000000000,
    open: 1.00001,
    high: 1.00002,
    low: 1.00003,
    close: 1.00004
  },
  {
    timestamp: 2000000000000,
    open: 2.00001,
    high: 2.00002,
    low: 2.00003,
    close: 2.00004
  },
  {
    timestamp: 3000000000000,
    open: 3.00001,
    high: 3.00002,
    low: 3.00003,
    close: 3.00004
  }
];

export { input, expectedOutput };
