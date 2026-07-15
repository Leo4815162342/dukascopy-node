import { describe, expect, it } from 'vitest';
import { getTimeframeFromUrl } from './range';
import { URL_ROOT } from '../url-generator';

describe('Range utils', () => {
  const cases = [
    [`${URL_ROOT}/candles/day/EUR-USD/BID/2018`, 'd1'],
    [`${URL_ROOT}/candles/hour/EUR-USD/BID/2018/1`, 'h1'],
    [`${URL_ROOT}/candles/minute/EUR-USD/BID/2018/1/1`, 'm1'],
    [`${URL_ROOT}/ticks/EUR-USD/2018/1/1/1`, 'tick']
  ] as const;

  cases.forEach(([url, timeframe]) => {
    it(`infers ${timeframe} from ${url}`, () => {
      expect(getTimeframeFromUrl(url)).toBe(timeframe);
    });
  });

  it('rejects unsupported URLs', () => {
    expect(() => getTimeframeFromUrl('https://example.com/data')).toThrow('Unsupported data URL');
  });
});
