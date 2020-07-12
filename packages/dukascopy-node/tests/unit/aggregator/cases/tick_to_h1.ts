const input = {
  data: require('./../sample_tick_data.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'h1',
  priceType: 'bid'
};

const expectedOutput = [[1549238400000, 1.14543, 1.14597, 1.14529, 1.14555, 8461.16]];

export { input, expectedOutput };
