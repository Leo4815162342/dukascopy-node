type Timestamp = number;
type AskPrice = number;
type BidPrice = number;
type Volume = number;
type AskVolume = number;
type BidVolume = number;
type OpenPrice = number;
type HighPrice = number;
type LowPrice = number;
type ClosePrice = number;

export interface JsonItem {
  /**
   * UNIX timestamp of the timeframe (candle open)
   */
  timestamp: Timestamp;
  /**
   * Open price of the timeframe (candle)
   */
  open: OpenPrice;
  /**
   * Highest price of the timeframe (candle)
   */
  high: HighPrice;
  /**
   * Lowest price of the timeframe (candle)
   */
  low: LowPrice;
  /**
   * Close price of the timeframe (candle)
   */
  close: ClosePrice;
  /**
   * Traded volume within the timeframe (candle)
   */
  volume?: Volume;
}

export interface JsonItemTick {
  /**
   * UNIX timestamp of the tick (price change)
   */
  timestamp: Timestamp;
  /**
   * Ask price of the tick
   */
  askPrice: AskPrice;
  /**
   * Bid price of the tick
   */
  bidPrice: BidPrice;
  /**
   * Ask volume of the tick
   */
  askVolume?: AskVolume;
  /**
   * Bid volume of the tick
   */
  bidVolume?: BidVolume;
}

export type ArrayItem = [Timestamp, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume?];

export type ArrayTickItem = [Timestamp, AskPrice, BidPrice, AskVolume?, BidVolume?];

export type Output = JsonItem[] | JsonItemTick[] | string | ArrayItem[] | ArrayTickItem[];
