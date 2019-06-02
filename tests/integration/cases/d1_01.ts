const config = {
  instrument: 'eurusd',
  dates: { start: '2019-02-04', end: '2019-02-06' },
  timeframe: 'd1',
  volumes: true,
  gmtOffset: 0
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14603, 1.14244, 1.14349, 367141.9844],
  [1549324800000, 1.14348, 1.14404, 1.14011, 1.14087, 331771.9794]
];

export { config, expectedOutput };
