import { DukascopyBase } from './dukascopy.base';
import { defaultConfig } from './config';
import { defaultSchemaValidationFn } from './config-validator/schema';

export { validator, validateConfig, schema } from './config-validator';
export { normaliseDates } from './dates-normaliser';
export { generateUrls, URL_ROOT } from './url-generator';
export { BufferFetcher } from './buffer-fetcher';
export { processData } from './processor';
export { formatOutput } from './output-formatter';

export { Config, DefaultConfig, defaultConfig } from './config';
export { Instrument, InstrumentType } from './config/instruments';
export { Timeframe, TimeframeType } from './config/timeframes';
export { Format, FormatType } from './config/format';
export { Price, PriceType } from './config/price-types';

export { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';

export { DukascopyBase } from './dukascopy.base';

export class DukascopyNode extends DukascopyBase {
  defaultConfig = defaultConfig;

  validationFn = defaultSchemaValidationFn;

  onInvalidConfig(validationErrors: string[]): void {
    throw { validationErrors };
  }
}

const { getHistoricRates } = new DukascopyNode();

export { getHistoricRates };
