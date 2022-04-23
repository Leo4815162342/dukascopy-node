export enum Timeframe {
  /**
   * Every single price change. No aggregation of OHLC price data
   */
  tick = 'tick',
  /**
   *  minutely `(1 minute)` aggregation of OHLC price data
   */
  m1 = 'm1',
  /**
   *  5-minute `(5 minutes)` aggregation of OHLC price data
   */
  m5 = 'm5',
  /**
   *  15-minute `(15 minutes)` aggregation of OHLC price data
   */
  m15 = 'm15',
  /**
   *  half-hour `(30 minutes)` aggregation of OHLC price data
   */
  m30 = 'm30',
  /**
   *  hourly `(1 hour)` aggregation of OHLC price data
   */
  h1 = 'h1',
  /**
   *  4-hour `(4 hour)` aggregation of OHLC price data
   */
  h4 = 'h4',
  /**
   *  daily `(1 day)` aggregation of OHLC price data
   */
  d1 = 'd1',
  /**
   *  monthly `(1 month)` aggregation of OHLC price data
   */
  mn1 = 'mn1'
}

export type TimeframeType = keyof typeof Timeframe;
