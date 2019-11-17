declare type Timestamp = number;
declare type AskPrice = number;
declare type BidPrice = number;
declare type Volume = number;
declare type AskVolume = number;
declare type BidVolume = number;
declare type OpenPrice = number;
declare type HighPrice = number;
declare type LowPrice = number;
declare type ClosePrice = number;
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
export declare type ArrayItem = [Timestamp, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume?];
export declare type ArrayTickItem = [Timestamp, AskPrice, BidPrice, AskVolume?, BidVolume?];
export declare type Output = JsonItem[] | JsonItemTick[] | string | ArrayItem[] | ArrayTickItem[];
export {};
