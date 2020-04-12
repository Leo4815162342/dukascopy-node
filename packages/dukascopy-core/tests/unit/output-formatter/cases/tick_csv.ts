const input = {
  processedData: [
    [1000000000000, 1.00001, 1.00002, 1111, 9999],
    [2000000000000, 2.00001, 2.00002, 2222, 8888],
    [3000000000000, 3.00001, 3.00002, 3333, 7777]
  ],
  timeframe: 'tick',
  format: 'csv'
};

const expectedOutput = `timestamp,askPrice,bidPrice,askVolume,bidVolume
1000000000000,1.00001,1.00002,1111,9999
2000000000000,2.00001,2.00002,2222,8888
3000000000000,3.00001,3.00002,3333,7777`;

export { input, expectedOutput };
