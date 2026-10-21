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
