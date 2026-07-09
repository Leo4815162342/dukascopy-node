import { describe, expect, it } from 'vitest';
import { FxMacroDataClient } from './fxmacrodata';

function response(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json' }
  });
}

describe('FxMacroDataClient', () => {
  it('adds API key as a query parameter', async () => {
    const urls: string[] = [];
    const client = new FxMacroDataClient({
      apiKey: 'test-key',
      baseUrl: 'https://example.test/api/v1',
      fetchImpl: async input => {
        urls.push(String(input));
        return response({ ok: true });
      }
    });

    await client.forex('eur', 'usd', { start_date: '2026-07-01' });

    const url = new URL(urls[0]);
    expect(url.pathname).toBe('/api/v1/forex/eur/usd');
    expect(url.searchParams.get('start_date')).toBe('2026-07-01');
    expect(url.searchParams.get('api_key')).toBe('test-key');
  });

  it('covers the macro, FX, calendar, COT, commodity, and curve endpoints', async () => {
    const paths: string[] = [];
    const client = new FxMacroDataClient({
      baseUrl: 'https://example.test/v1',
      fetchImpl: async input => {
        paths.push(new URL(String(input)).pathname);
        return response({ ok: true });
      }
    });

    await client.dataCatalogue('usd');
    await client.announcements('usd', 'cpi');
    await client.latestAnnouncements('usd');
    await client.announcementChanges();
    await client.calendar('usd');
    await client.predictions('usd', 'cpi');
    await client.forex('eur', 'usd');
    await client.cot('jpy');
    await client.commodity('brent');
    await client.commoditiesLatest();
    await client.curves('usd');
    await client.curveProxies('usd');
    await client.forwardCurves('usd');
    await client.rateDifferentials('eur', 'usd');
    await client.forwardDifferentials('eur', 'usd');
    await client.marketSessions();
    await client.riskSentiment();
    await client.news('usd');
    await client.pressReleases('usd');

    expect(paths).toEqual([
      '/v1/data_catalogue/usd',
      '/v1/announcements/usd/cpi',
      '/v1/announcements/usd/latest',
      '/v1/announcements/changes',
      '/v1/calendar/usd',
      '/v1/predictions/usd/cpi',
      '/v1/forex/eur/usd',
      '/v1/cot/jpy',
      '/v1/commodities/brent',
      '/v1/commodities/latest',
      '/v1/curves/usd',
      '/v1/curve_proxies/usd',
      '/v1/forward_curves/usd',
      '/v1/rate_differentials/eur/usd',
      '/v1/forward_differentials/eur/usd',
      '/v1/market_sessions',
      '/v1/risk_sentiment',
      '/v1/news/usd',
      '/v1/press-releases/usd'
    ]);
  });

  it('posts GraphQL requests', async () => {
    let method = '';
    let body = '';
    const client = new FxMacroDataClient({
      baseUrl: 'https://example.test/v1',
      fetchImpl: async (_input, init) => {
        method = init?.method || '';
        body = String(init?.body);
        return response({ data: { ping: true } });
      }
    });

    await client.graphql({ query: '{ ping }' });

    expect(method).toBe('POST');
    expect(JSON.parse(body)).toEqual({ query: '{ ping }' });
  });
});
