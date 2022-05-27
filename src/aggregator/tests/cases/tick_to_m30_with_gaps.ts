import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data_with_gaps.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm30',
  priceType: 'bid',
  startTs: 1653634800000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [
  [1653634800000, 7188.569, 7197.999, 7184.539, 7185.659, 0.093],
  [1653636600000, 7184.569, 7196.629, 7184.539, 7195.659, 0.097]
];

export { input, expectedOutput };
