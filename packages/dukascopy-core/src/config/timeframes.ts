export type Timeframe = 'tick' | 'm1' | 'm30' | 'h1' | 'd1' | 'mn1';

export type Timeframes = {
  [key in Timeframe]: number;
};

export const timeframes: Timeframes = {
  tick: 1, // 1 tick
  m1: 1, // 1 minute
  m30: 1, // 30 minutes
  h1: 1, // 1 hour
  d1: 1, // 1 day
  mn1: 1 // 1 month
};
