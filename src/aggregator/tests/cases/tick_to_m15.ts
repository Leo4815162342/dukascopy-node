import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm15',
  priceType: 'bid',
  startTs: 1549238400000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14581, 1.14534, 1.14576, 2347.73],
  [1549239300000, 1.14576, 1.14597, 1.14556, 1.14596, 1393.74],
  [1549240200000, 1.14597, 1.14597, 1.14546, 1.14567, 2291.18],
  [1549241100000, 1.14566, 1.14578, 1.14529, 1.14555, 2428.51]
];

export { input, expectedOutput };
