import {
  validateConfig,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  processData,
  formatOutput,
  Config,
  DefaultConfig,
  Price,
  Timeframe,
  Format,
  Output,
  TimeframeType,
  PriceType,
  InstrumentType,
  ArrayTickItem,
  JsonItemTick,
  JsonItem,
  ArrayItem
} from 'dukascopy-core';

const defaultConfig: DefaultConfig = {
  timeframe: Timeframe.d1,
  priceType: Price.bid,
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true,
  format: Format.array
};

export async function getHistoricRates(config: {
  instrument: InstrumentType;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: 'tick';
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: 'array';
}): Promise<ArrayTickItem[]>;

export async function getHistoricRates(config: {
  instrument: InstrumentType;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: 'tick';
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: 'json';
}): Promise<JsonItemTick[]>;

export async function getHistoricRates(config: {
  instrument: InstrumentType;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: Exclude<TimeframeType, 'tick'>;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: 'json';
}): Promise<JsonItem[]>;

export async function getHistoricRates(config: {
  instrument: InstrumentType;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: Exclude<TimeframeType, 'tick'>;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: 'array';
}): Promise<ArrayItem[]>;

export async function getHistoricRates(config: {
  instrument: InstrumentType;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: TimeframeType;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  format?: 'csv';
}): Promise<string>;

export async function getHistoricRates(config: Config): Promise<Output>;

export async function getHistoricRates(config: Config): Promise<Output> {
  const mergedConfig = { ...defaultConfig, ...config };

  const { isValid, validationErrors } = validateConfig(mergedConfig);

  if (!isValid) {
    throw { validationErrors };
  }

  const {
    instrument,
    dates: { from, to },
    timeframe,
    priceType,
    volumes,
    utcOffset,
    ignoreFlats,
    format
  } = mergedConfig;

  const [startDate, endDate] = normaliseDates({
    instrument,
    startDate: from,
    endDate: to,
    timeframe,
    utcOffset
  });

  const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

  const bufferFetcher = new BufferFetcher();

  const bufferredData = await bufferFetcher.fetch(urls);

  const processedData = processData({
    instrument,
    requestedTimeframe: timeframe,
    bufferObjects: bufferredData,
    priceType,
    volumes,
    ignoreFlats
  });

  const [startDateMs, endDateMs] = [+startDate, +endDate];

  const filteredData = processedData.filter(
    ([timestamp]) => timestamp && timestamp >= startDateMs && timestamp < endDateMs
  );

  const formattedData = formatOutput({ processedData: filteredData, format, timeframe });

  return formattedData;
}
