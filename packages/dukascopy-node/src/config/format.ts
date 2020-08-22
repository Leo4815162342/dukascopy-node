export enum Format {
  /**
   * Data will be returned in a shape of array of arrays of numbers
   * ***
   * `m1`, `m30`, `h1`, `d1`, `mn1`:
   * ```
   * // t-stamp open  high  low   close volume
   * [[1000000, 1.01, 1.02, 1.03, 1.04, 1111],
   * [20000000, 2.01, 2.02, 2.03, 2.04, 2222],
   * [30000000, 3.01, 3.02, 3.03, 3.04, 3333]]
   * ```
   * ***
   * `tick`:
   * ```
   * // t-stamp ask   bid   askV. bidV.
   * [[1000000, 1.01, 1.02, 1111, 9999],
   * [20000000, 2.01, 2.02, 2222, 8888],
   * [30000000, 3.01, 3.02, 3333, 7777]]
   * ```
   */
  array = 'array',
  /**
   * Data will be returned as **JSON**
   * ***
   * `m1`, `m30`, `h1`, `d1`, `mn1`:
   * ```
   * {
   *   timestamp: 1000000000000,
   *   open: 1.00001,
   *   high: 1.00002,
   *   low: 1.00003,
   *   close: 1.00004,
   *   volume: 1111
   * }
   * ```
   *  ***
   * `tick`:
   * ```
   * {
   *  timestamp: 1000000000000,
   *  askPrice: 1.00001,
   *  bidPrice: 1.00002,
   *  askVolume: 1111,
   *  bidVolume: 9999
   * }
   * ```
   */
  json = 'json',
  /**
   * Data will be returned as a **CSV** string
   * ***
   * `m1`, `m30`, `h1`, `d1`, `mn1`:
   * ```
   * `
   * timestamp,open,high,low,close,volume
   * 10000000,1.01,1.02,1.03,1.04,1111,
   * 20000000,2.01,2.02,2.03,2.04,2222,
   * 30000000,3.01,3.02,3.03,3.04,3333
   * `
   * ```
   * ***
   * `tick`:
   * ```
   * `
   * timestamp,askPrice,bidPrice,askVolume,bidVolume
   * 10000000,1.01,1.02,1111,9999
   * 20000000,2.01,2.02,2222,8888
   * 30000000,3.01,3.02,3333,7777
   * `
   * ```
   */
  csv = 'csv'
}

export type FormatType = keyof typeof Format;
