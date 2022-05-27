import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data_with_gaps.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'h1',
  priceType: 'bid',
  startTs: 1653634800000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [[1653634800000, 7188.569, 7197.999, 7184.539, 7195.659, 0.19]];

export { input, expectedOutput };
