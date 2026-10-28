const DATA_API_SUBDOMAIN = String.fromCharCode(106, 101, 116, 116, 97);

export const DATA_API_ROOT = `https://${DATA_API_SUBDOMAIN}.dukascopy.com/v1`;

// The data API requires the export widget's Referer. Uncached responses also reject
// generic Node/compatible User-Agents with HTTP 429, even when cached files work.
export const DATA_API_REFERER = 'https://widgets.dukascopy.com/en/historical-data-export';
export const DATA_API_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36';
