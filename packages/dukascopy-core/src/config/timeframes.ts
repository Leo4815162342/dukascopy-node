export type Timeframe = 'tick' | 'm1' | 'm30' | 'h1' | 'd1' | 'mn1';

export type Timeframes = {
  [key in Timeframe]: string;
};

export const timeframes: Timeframes = {
  tick: 'tick', // 1 tick
  m1: 'm1', // 1 minute
  m30: 'm30', // 30 minutes
  h1: 'h1', // 1 hour
  d1: 'd1', // 1 day
  mn1: 'mn1' // 1 month
};
