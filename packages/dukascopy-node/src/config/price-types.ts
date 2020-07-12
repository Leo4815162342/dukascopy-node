export enum Price {
  /**
   * A `bid` is an offer made by an investor, trader, or dealer in an effort to buy a security, commodity, or currency.
   */
  bid = 'bid',
  /**
   * The `ask` is the price a seller is willing to accept for a security, commodity, or currency, which is often referred to as the offer price
   */
  ask = 'ask'
}

export type PriceType = keyof typeof Price;
