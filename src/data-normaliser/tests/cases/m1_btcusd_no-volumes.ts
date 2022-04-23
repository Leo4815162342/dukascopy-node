const input = {
  data: [
    [0, 1000, 2000, 3000, 4000, 1111],
    [10, 1100, 2200, 3300, 4400, 2222],
    [30, 1110, 2220, 3330, 4440, 3333]
  ],
  timeframe: 'm1',
  startTs: 1,
  instrument: 'btcusd',
  volumes: false
};

const expectedOutput = [
  [1, 100, 400, 300, 200],
  [10001, 110, 440, 330, 220],
  [30001, 111, 444, 333, 222]
];

export { input, expectedOutput };
