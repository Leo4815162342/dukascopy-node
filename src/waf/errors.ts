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

  constructor(readonly url: string) {
    super(
      `Dukascopy refused access (HTTP 403) for ${url} without a WAF challenge. ` +
        'Download stopped; refreshing a WAF token is not a confirmed remedy for this response. ' +
        'Try again later or check the same URL in a normal browser. ' +
        'The HTTP status alone does not identify the reason for the denial.'
    );
    this.name = 'DukascopyAccessDeniedError';
  }
}
