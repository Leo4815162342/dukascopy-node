const config = {
  symbol: 'eurusd',
  dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
  timeframe: 'm1',
  volumes: true,
  gmtOffset: 0
};

const expectedOutput = [
  [1549239120000, 1.14573, 1.14574, 1.1457, 1.14574, 32.49],
  [1549239180000, 1.14572, 1.14574, 1.14572, 1.14573, 30.05],
  [1549239240000, 1.14573, 1.14577, 1.14572, 1.14576, 71.66]
];

export { config, expectedOutput };
