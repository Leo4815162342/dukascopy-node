const input = {
  data: [
    [0, 1000, 2000, 3000, 4000, 1111],
    [10, 1100, 2200, 3300, 4400, 2222],
    [30, 1110, 2220, 3330, 4440, 3333]
  ],
  timeframe: 'm1',
  startTs: 1,
  instrument: 'eurusd',
  volumes: true
};

const expectedOutput = [
  [1, 0.01, 0.04, 0.03, 0.02, 1111],
  [10001, 0.011, 0.044, 0.033, 0.022, 2222],
  [30001, 0.0111, 0.0444, 0.0333, 0.0222, 3333]
];

export { input, expectedOutput };
