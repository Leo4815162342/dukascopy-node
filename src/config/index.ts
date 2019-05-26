import { HistoryConfig } from './types';

const defaultConfig: Partial<HistoryConfig> = {
  timeframe: 'm1',
  priceType: 'bid',
  gmtOffset: 0,
  volumes: true
};

export { defaultConfig };
