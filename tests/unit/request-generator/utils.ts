import { HistoryConfig } from '../../../src/config/types';
import { generateRequestData } from '../../../src/request-generator';
import { normalizeDates } from '../../../src/utils/date';

function getReuqestData(config: HistoryConfig) {
  const {
    instrument,
    dates: { from, to },
    timeframe,
    priceType,
    utcOffset
  } = config;

  const [fromDate, toDate] = normalizeDates(instrument, from, to, timeframe, utcOffset);

  return generateRequestData(instrument, fromDate, toDate, timeframe, priceType);
}

export { getReuqestData };
