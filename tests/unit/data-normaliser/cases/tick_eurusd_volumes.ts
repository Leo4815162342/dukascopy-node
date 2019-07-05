const input = {
  data: [
    [0, 100000, 200000, 300000, 400000, 1111],
    [100, 110000, 220000, 330000, 440000, 1111],
    [200, 111000, 222000, 333000, 444000, 1111]
  ],
  timeframe: 'm1',
  startTs: 1,
  instrument: 'eurusd',
  volumes: true
};

const expectedOutput = [
  [1, 1, 4, 3, 2, 1111],
  [100001, 1.1, 4.4, 3.3, 2.2, 1111],
  [200001, 1.11, 4.44, 3.33, 2.22, 1111]
];

export { input, expectedOutput };
