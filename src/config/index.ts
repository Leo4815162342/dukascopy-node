import { HistoryConfig } from './types';

const defaultConfig: Partial<HistoryConfig> = {
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: true
};

export { defaultConfig };
