const config = {
  instrument: 'eurusd',
  dates: { from: '2019-01-01', to: '2019-03-01' },
  timeframe: 'mn1',
  volumes: true,
  utcOffset: 0
};

const expectedOutput = [
  [1546300800000, 1.14598, 1.15697, 1.12892, 1.14482, 8913802.4775],
  [1548979200000, 1.14482, 1.14884, 1.1234, 1.1373, 7759007.3189]
];

export { config, expectedOutput };
