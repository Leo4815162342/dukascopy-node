import { DukascopyBase } from './dukascopy.base';
import { DefaultConfig, defaultConfig } from './config';
import { defaultSchemaValidationFn } from './config-validator/schema';

export { validator, validateConfig, schema } from './config-validator';
export { normaliseDates } from './dates-normaliser';
export { generateUrls, URL_ROOT } from './url-generator';
export { BufferFetcher } from './buffer-fetcher';
export { processData } from './processor';
export { formatOutput } from './output-formatter';

export { Config } from './config';
export { Instrument, InstrumentType } from './config/instruments';
export { Timeframe, TimeframeType } from './config/timeframes';
export { Format, FormatType } from './config/format';
export { Price, PriceType } from './config/price-types';

export { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';

export class DukascopyNode extends DukascopyBase<DefaultConfig> {
  constructor() {
    super(defaultConfig, defaultSchemaValidationFn);
  }
  // onFetchStart(data: any): void {
  //   console.log('started', data);
  // }

  // onFetchSuccess(): void {
  //   console.log('DAAAATAAAA');
  // }
  // onItemFetch(url: string): void {
  //   console.log('LOOOOL', url);
  // }
}

const { getHistoricRates } = new DukascopyNode();

export { getHistoricRates };
