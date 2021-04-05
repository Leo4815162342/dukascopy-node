const input = {
  data: require('./../sample_tick_data.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm30',
  priceType: 'bid'
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14597, 1.14534, 1.14596, 3741.47],
  [1549240200000, 1.14597, 1.14597, 1.14529, 1.14555, 4719.69]
];

export { input, expectedOutput };
