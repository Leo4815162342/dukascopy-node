import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, expect, it, vi } from 'vitest';
import { createHeadlessWafFetcher, WafChallengeError } from '.';

const url = 'https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/10';
const fixtures = resolve(__dirname, '../__mocks__/fixtures');
const payload = readFileSync(
  resolve(fixtures, 'candles-minute-EUR-USD-BID-2026-7-10.json'),
  'utf8'
);
const emptyPayload = readFileSync(
  resolve(fixtures, 'candles-minute-EUR-USD-BID-2026-7-11-empty.json'),
  'utf8'
);
const json = (body = payload) =>
  new Response(body, { headers: { 'content-type': 'application/json; charset=utf-8' } });
const challenge = () =>
  new Response('', { status: 202, headers: { 'x-amzn-waf-action': 'challenge' } });

function setup() {
  const acquireSession = vi.fn(async () => ({
    token: 'first-token',
    userAgent: 'Headless test browser'
  }));
  const fetchFn = vi.fn<typeof fetch>().mockImplementation(async () => json());
  const client = createHeadlessWafFetcher({ acquireSession, fetchFn, tokenCache: false });
  return { acquireSession, fetchFn, client };
}

describe('Headless WAF prototype transport', () => {
  it('tracks token usage per response when tokenless requests finish after a refresh', async () => {
    const { client, fetchFn } = setup();
    let releaseLateResponse!: (response: Response) => void;
    fetchFn
      .mockReturnValueOnce(
        new Promise(resolve => {
          releaseLateResponse = resolve;
        })
      )
      .mockResolvedValueOnce(challenge());

    const pending = client.fetchResponse(url);
    const refreshed = await client.fetchResponse(url);
    releaseLateResponse(json());
    const late = await pending;

    expect(client.wasTokenUsed(late)).toBe(false);
    expect(client.wasTokenUsed(refreshed)).toBe(true);
    expect(fetchFn).toHaveBeenCalledTimes(3);
  });

  it('shares initial acquisition and reuses only the WAF cookie for Node downloads', async () => {
    const { client, acquireSession, fetchFn } = setup();
    const buffers = await Promise.all([client.fetchBuffer(url), client.fetchBuffer(url)]);

    expect(buffers.map(buffer => buffer.toString())).toEqual([payload, payload]);
    expect(acquireSession).toHaveBeenCalledTimes(1);
    expect(client.stats).toEqual({ tokenAcquisitions: 1, httpRequests: 2 });
    expect(fetchFn).toHaveBeenCalledWith(url, {
      headers: {
        accept: 'application/json',
        cookie: 'aws-waf-token=first-token',
        'user-agent': 'Headless test browser'
      },
      redirect: 'error',
      signal: expect.any(AbortSignal)
    });
  });

  it('refreshes once when a token is challenged and retries with the new token', async () => {
    const { client, acquireSession, fetchFn } = setup();
    acquireSession
      .mockResolvedValueOnce({ token: 'first-token', userAgent: 'First browser' })
      .mockResolvedValueOnce({ token: 'second-token', userAgent: 'Second browser' });
    fetchFn.mockResolvedValueOnce(challenge());

    expect((await client.fetchBuffer(url)).toString()).toBe(payload);
    expect(acquireSession).toHaveBeenCalledTimes(2);
    expect(fetchFn.mock.calls[1][1]?.headers).toEqual({
      accept: 'application/json',
      cookie: 'aws-waf-token=second-token',
      'user-agent': 'Second browser'
    });
  });

  it('does not launch another Chrome for a late response that challenged an old token', async () => {
    const { client, acquireSession, fetchFn } = setup();
    let releaseLateResponse!: (response: Response) => void;
    const lateResponse = new Promise<Response>(resolve => {
      releaseLateResponse = resolve;
    });
    acquireSession
      .mockResolvedValueOnce({ token: 'first-token', userAgent: 'First browser' })
      .mockResolvedValueOnce({ token: 'second-token', userAgent: 'Second browser' });
    fetchFn.mockResolvedValueOnce(challenge()).mockReturnValueOnce(lateResponse);

    const first = client.fetchBuffer(url);
    const second = client.fetchBuffer(url);
    await first;
    releaseLateResponse(challenge());
    await second;

    expect(acquireSession).toHaveBeenCalledTimes(2);
    expect(fetchFn).toHaveBeenCalledTimes(4);
    expect(fetchFn.mock.calls[3][1]?.headers).toHaveProperty(
      'cookie',
      'aws-waf-token=second-token'
    );
  });

  it('coalesces concurrent refreshes', async () => {
    const { client, acquireSession, fetchFn } = setup();
    fetchFn.mockResolvedValueOnce(challenge()).mockResolvedValueOnce(challenge());
    await Promise.all([client.fetchBuffer(url), client.fetchBuffer(url)]);
    expect(acquireSession).toHaveBeenCalledTimes(2);
    expect(fetchFn).toHaveBeenCalledTimes(4);
  });

  it('rejects persistent challenges after one refresh instead of returning empty data', async () => {
    const { client, acquireSession, fetchFn } = setup();
    fetchFn.mockImplementation(async () => challenge());
    await expect(client.fetchBuffer(url)).rejects.toMatchObject({
      name: 'WafChallengeError',
      code: 'DUKASCOPY_WAF_CHALLENGE',
      status: 202,
      url
    });
    expect(acquireSession).toHaveBeenCalledTimes(2);
    expect(fetchFn).toHaveBeenCalledTimes(2);
  });

  it('stops on CAPTCHA instead of looping browser acquisition', async () => {
    const { client, acquireSession, fetchFn } = setup();
    fetchFn.mockResolvedValueOnce(
      new Response('', { status: 405, headers: { 'x-amzn-waf-action': 'captcha' } })
    );
    await expect(client.fetchBuffer(url)).rejects.toBeInstanceOf(WafChallengeError);
    expect(acquireSession).toHaveBeenCalledTimes(1);
  });

  it.each([202, 403, 429, 503])(
    'rejects HTTP %s without repeatedly acquiring tokens',
    async status => {
      const { client, acquireSession, fetchFn } = setup();
      fetchFn.mockResolvedValueOnce(new Response('', { status }));
      await expect(client.fetchBuffer(url)).rejects.toThrow(`HTTP ${status}`);
      expect(acquireSession).toHaveBeenCalledTimes(1);
      expect(fetchFn).toHaveBeenCalledTimes(1);
    }
  );

  it.each(['', '<html>challenge</html>', '{}', '{"times":[]}'])(
    'rejects malformed or incomplete JSON: %s',
    async body => {
      const { client, fetchFn } = setup();
      fetchFn.mockResolvedValueOnce(json(body));
      await expect(client.fetchBuffer(url)).rejects.toThrow('Invalid Dukascopy JSON');
    }
  );

  it('rejects HTML even when served with HTTP 200', async () => {
    const { client, fetchFn } = setup();
    fetchFn.mockResolvedValueOnce(
      new Response('<html/>', { headers: { 'content-type': 'text/html' } })
    );
    await expect(client.fetchBuffer(url)).rejects.toThrow('Expected Dukascopy JSON');
  });

  it('accepts a valid empty-market JSON response', async () => {
    const { client, fetchFn } = setup();
    fetchFn.mockResolvedValueOnce(json(emptyPayload));
    expect((await client.fetchBuffer(url)).toString()).toBe(emptyPayload);
  });

  it('allows a subsequent acquisition after the browser fails', async () => {
    const { client, acquireSession, fetchFn } = setup();
    acquireSession.mockRejectedValueOnce(new Error('Browser acquisition failed'));
    await expect(client.fetchBuffer(url)).rejects.toThrow('Browser acquisition failed');
    expect(fetchFn).not.toHaveBeenCalled();
    await client.fetchBuffer(url);
    expect(acquireSession).toHaveBeenCalledTimes(2);
  });

  it.each([
    'https://example.com/v1/ticks/BTC-USD/2024/1/6/0',
    'https://jetta.dukascopy.com.evil.test/v1/ticks/BTC-USD/2024/1/6/0',
    'http://jetta.dukascopy.com/v1/ticks/BTC-USD/2024/1/6/0',
    'https://user:password@jetta.dukascopy.com/v1/ticks/BTC-USD/2024/1/6/0',
    'https://jetta.dukascopy.com/other'
  ])('rejects unsupported destinations before using the token: %s', async destination => {
    const { client, acquireSession, fetchFn } = setup();
    await expect(client.fetchBuffer(destination)).rejects.toThrow('Expected a Dukascopy HTTPS');
    expect(acquireSession).not.toHaveBeenCalled();
    expect(fetchFn).not.toHaveBeenCalled();
  });
});
