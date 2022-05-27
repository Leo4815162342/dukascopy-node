import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data_with_gaps.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm15',
  priceType: 'bid',
  startTs: 1653634800000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [
  [1653634800000, 7188.569, 7197.999, 7187.599, 7189.999, 0.031],
  [1653635700000, 7188.629, 7189.999, 7184.539, 7185.659, 0.062],
  [1653636600000, 7184.569, 7188.999, 7184.569, 7186.569, 0.0485],
  [1653637500000, 7185.599, 7196.629, 7184.539, 7195.659, 0.0485]
];

export { input, expectedOutput };
