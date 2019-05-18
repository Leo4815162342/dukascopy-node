import { HistoryConfig } from './types';

const defaultOptions: Partial<HistoryConfig> = {
  timeframe: 'm1',
  priceType: 'bid',
  gmtOffset: 0,
  volumes: true
};

export { defaultOptions };
