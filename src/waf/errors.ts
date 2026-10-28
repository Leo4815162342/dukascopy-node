export class WafChallengeError extends Error {
  readonly code = 'DUKASCOPY_WAF_CHALLENGE';

  constructor(readonly url: string, readonly status: number, readonly action: string) {
    super(`Dukascopy WAF ${action} for ${url} (HTTP ${status})`);
    this.name = 'WafChallengeError';
  }
}

export class WafTokenError extends Error {
  readonly code = 'DUKASCOPY_WAF_TOKEN';

  constructor(message: string) {
    super(message);
    this.name = 'WafTokenError';
  }
}

/** A 403 without an explicit challenge is not eligible for automatic token recovery. */
export class DukascopyAccessDeniedError extends Error {
  readonly code = 'DUKASCOPY_ACCESS_DENIED';
  readonly status = 403;

  constructor(readonly url: string, readonly source: 'request' | 'browser' = 'request') {
    super(
      (source === 'browser'
        ? `Dukascopy refused the headless browser (HTTP 403) for ${url} during WAF token recovery. `
        : `Dukascopy refused access (HTTP 403) for ${url}; WAF token recovery does not apply to a plain 403. `) +
        "Download stopped. Check that Dukascopy's historical data export page " +
        '(https://www.dukascopy.com/swiss/english/marketwatch/historical/) works in a regular browser, ' +
        'and update dukascopy-node if a newer version is available.'
    );
    this.name = 'DukascopyAccessDeniedError';
  }
}
