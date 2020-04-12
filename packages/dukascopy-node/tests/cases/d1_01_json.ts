const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-04', to: '2019-02-06' },
  timeframe: 'd1',
  volumes: true,
  utcOffset: 0,
  format: 'json'
};

const expectedOutput = [
  {
    timestamp: 1549238400000,
    open: 1.14543,
    high: 1.14603,
    low: 1.14244,
    close: 1.14349,
    volume: 367141.9844
  },
  {
    timestamp: 1549324800000,
    open: 1.14348,
    high: 1.14404,
    low: 1.14011,
    close: 1.14087,
    volume: 331771.9794
  }
];

export { config, expectedOutput };
