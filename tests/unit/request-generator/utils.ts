import { HistoryConfig } from '../../../src/config/types';
import { generateRequestData } from '../../../src/request-generator';
import { normalizedDateInput } from '../../../src/utils';

function getReuqestData({
  instrument,
  dates: { from, to },
  timeframe,
  utcOffset,
  priceType
}: HistoryConfig) {
  const [fromDate, toDate] = [from, to].map(d => normalizedDateInput(d, utcOffset));

  return generateRequestData(instrument, fromDate, toDate, timeframe, priceType);
}

export { getReuqestData };
