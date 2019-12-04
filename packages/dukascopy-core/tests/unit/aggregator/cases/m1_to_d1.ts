const input = {
  data: require('./../sample_m1_data.json'),
  fromTimeframe: 'm1',
  toTimeframe: 'd1',
  priceType: 'bid'
};

const expectedOutput = [[1549238400000, 1.14543, 1.14603, 1.14244, 1.14349, 367141.98]];

export { input, expectedOutput };
