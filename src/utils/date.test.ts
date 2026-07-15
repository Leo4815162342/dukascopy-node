import { describe, expect, it } from 'vitest';
import { getDateFromUrl } from './date';
import { URL_ROOT } from '../url-generator';

describe('Date utils', () => {
  const cases = [
    [`${URL_ROOT}/candles/day/EUR-USD/BID/2018`, '2018-01-01T00:00:00.000Z'],
    [`${URL_ROOT}/candles/hour/EUR-USD/BID/2018/1`, '2018-01-01T00:00:00.000Z'],
    [`${URL_ROOT}/candles/minute/EUR-USD/BID/2018/12/31`, '2018-12-31T00:00:00.000Z'],
    [`${URL_ROOT}/ticks/EUR-USD/2018/1/2/3`, '2018-01-02T03:00:00.000Z'],
    [`${URL_ROOT}/candles/minute/EUR-USD/BID?from=1562889600000`, '2019-07-12T00:00:00.000Z']
  ] as const;

  cases.forEach(([url, isoDate]) => {
    it(`extracts ${isoDate}`, () => {
      expect(getDateFromUrl(url).toISOString()).toBe(isoDate);
    });
  });
});
