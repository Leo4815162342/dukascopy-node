const input = {
  data: require('./../sample_h1_data.json'),
  fromTimeframe: 'h1',
  toTimeframe: 'mn1',
  priceType: 'bid'
};

const expectedOutput = [[1548979200000, 1.14482, 1.14884, 1.1234, 1.1373, 7759007.3189]];

export { input, expectedOutput };
