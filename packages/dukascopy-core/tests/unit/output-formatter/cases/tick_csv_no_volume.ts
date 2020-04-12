const input = {
  processedData: [
    [1000000000000, 1.00001, 1.00002],
    [2000000000000, 2.00001, 2.00002],
    [3000000000000, 3.00001, 3.00002]
  ],
  timeframe: 'tick',
  format: 'csv'
};

const expectedOutput = `timestamp,askPrice,bidPrice
1000000000000,1.00001,1.00002
2000000000000,2.00001,2.00002
3000000000000,3.00001,3.00002`;

export { input, expectedOutput };
