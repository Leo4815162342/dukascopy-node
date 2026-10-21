import { normalise } from '../data-normaliser';
import { DataResponse } from '../data-normaliser/types';
import { getTimeframeFromUrl } from '../utils/range';
import { URL_ROOT } from '../url-generator';

// The token must only be sent to the origin that issued it.
export function assertDataUrl(url: string): void {
  const parsed = new URL(url);
  if (
    parsed.origin !== new URL(URL_ROOT).origin ||
    parsed.username ||
    parsed.password ||
    parsed.hash ||
    !/^\/v1\/(ticks\/|candles\/(minute|hour|day)\/)/.test(parsed.pathname)
  ) {
    throw new Error('Expected a Dukascopy HTTPS candle or tick data URL');
  }
}

export function decodeData(url: string, buffer: Buffer): number[][] {
  try {
    return normalise({
      data: JSON.parse(buffer.toString('utf8')) as DataResponse,
      timeframe: getTimeframeFromUrl(url),
      volumes: true,
      volumeUnits: 'millions'
    });
  } catch {
    // Do not include upstream bodies, cookies, or challenge contents in errors.
    throw new Error(`Invalid Dukascopy JSON data for ${url}`);
  }
}
