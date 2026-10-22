export type FxMacroDataQueryValue = string | number | boolean | Date | null | undefined;
export type FxMacroDataQuery = Record<string, FxMacroDataQueryValue | FxMacroDataQueryValue[]>;

export interface FxMacroDataClientOptions {
  apiKey?: string;
  baseUrl?: string;
  fetchImpl?: typeof fetch;
}

export interface GraphQLRequest {
  query: string;
  variables?: Record<string, unknown>;
  operationName?: string;
}

const DEFAULT_BASE_URL = 'https://api.fxmacrodata.com/v1';

function getApiKey(apiKey?: string): string | undefined {
  return apiKey || process.env.FXMACRODATA_API_KEY || process.env.FXMD_API_KEY;
}

function appendQuery(url: URL, query?: FxMacroDataQuery): void {
  for (const [key, rawValue] of Object.entries(query || {})) {
    const values = Array.isArray(rawValue) ? rawValue : [rawValue];
    for (const value of values) {
      if (value === undefined || value === null) {
        continue;
      }
      url.searchParams.append(key, value instanceof Date ? value.toISOString() : String(value));
    }
  }
}

export class FxMacroDataClient {
  private readonly apiKey?: string;
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;

  constructor(options: FxMacroDataClientOptions = {}) {
    this.apiKey = getApiKey(options.apiKey);
    this.baseUrl = (options.baseUrl || DEFAULT_BASE_URL).replace(/\/+$/, '');
    this.fetchImpl = options.fetchImpl || fetch;
  }

  async request<T = unknown>(
    path: string,
    query?: FxMacroDataQuery,
    init: RequestInit = {}
  ): Promise<T> {
    // History endpoints return 20 rows by default; pass `limit` (max 100) and
    // `offset` in `query` and follow `pagination.next_offset` for more.
    const url = new URL(`${this.baseUrl}/${path.replace(/^\/+/, '')}`);
    appendQuery(url, query);

    const response = await this.fetchImpl(url, {
      ...init,
      // Never follow redirects, so the API key is not forwarded to another origin.
      redirect: 'error',
      headers: {
        accept: 'application/json',
        ...(this.apiKey ? { 'x-api-key': this.apiKey } : {}),
        ...(init.headers || {})
      }
    });

    if (!response.ok) {
      throw new Error(`FXMacroData request failed: ${response.status} ${await response.text()}`);
    }

    return (await response.json()) as T;
  }

  dataCatalogue(currency: string): Promise<unknown> {
    return this.request(`data_catalogue/${currency}`);
  }

  announcements(currency: string, indicator: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`announcements/${currency}/${indicator}`, query);
  }

  latestAnnouncements(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`announcements/${currency}/latest`, query);
  }

  announcementChanges(query?: FxMacroDataQuery): Promise<unknown> {
    return this.request('announcements/changes', query);
  }

  calendar(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`calendar/${currency}`, query);
  }

  predictions(currency: string, indicator: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`predictions/${currency}/${indicator}`, query);
  }

  forex(base: string, quote: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`forex/${base}/${quote}`, query);
  }

  cot(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`cot/${currency}`, query);
  }

  commodity(indicator: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`commodities/${indicator}`, query);
  }

  commoditiesLatest(query?: FxMacroDataQuery): Promise<unknown> {
    return this.request('commodities/latest', query);
  }

  curves(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`curves/${currency}`, query);
  }

  curveProxies(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`curve_proxies/${currency}`, query);
  }

  forwardCurves(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`forward_curves/${currency}`, query);
  }

  rateDifferentials(base: string, quote: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`rate_differentials/${base}/${quote}`, query);
  }

  forwardDifferentials(base: string, quote: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`forward_differentials/${base}/${quote}`, query);
  }

  marketSessions(query?: FxMacroDataQuery): Promise<unknown> {
    return this.request('market_sessions', query);
  }

  riskSentiment(query?: FxMacroDataQuery): Promise<unknown> {
    return this.request('risk_sentiment', query);
  }

  news(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`news/${currency}`, query);
  }

  pressReleases(currency: string, query?: FxMacroDataQuery): Promise<unknown> {
    return this.request(`press-releases/${currency}`, query);
  }

  graphql<T = unknown>(request: GraphQLRequest): Promise<T> {
    return this.request<T>('graphql', undefined, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(request)
    });
  }
}

export function createFxMacroDataClient(options?: FxMacroDataClientOptions): FxMacroDataClient {
  return new FxMacroDataClient(options);
}
