const input = {
  data: [
    [0, 100000, 200000, 300000, 400000],
    [100, 110000, 220000, 330000, 440000],
    [200, 111000, 222000, 333000, 444000]
  ],
  timeframe: 'tick',
  startTs: 1,
  instrument: 'btcusd',
  volumes: false
};

const expectedOutput = [
  [1, 10000, 20000],
  [101, 11000, 22000],
  [201, 11100, 22200]
];

export { input, expectedOutput };
