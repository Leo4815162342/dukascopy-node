import fetch from 'node-fetch';
import { Config } from '../config';

export enum GOALS {
  getHistoricalRates = 'getHistoricalRates'
}

export function trackCustomGoal(
  goalName: GOALS,
  config: Config,
  isValid: boolean,
  source: 'cli' | 'node'
) {
  let timezone = '';

  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (err) {
    timezone = '';
  }

  try {
    fetch('https://plausible.io/api/event', {
      method: 'POST',
      body: JSON.stringify({
        name: goalName,
        url: 'app://localhost',
        domain: 'dukascopy-node',
        screen_width: 1000,
        props: {
          is_valid: isValid,
          instrument: config.instrument,
          timeframe: config.timeframe,
          from_date: config.dates.from,
          to_date: config.dates.to,
          source,
          node_version: process.version,
          timezone
        }
      }),
      headers: { 'X-Forwarded-For': '127.0.0.1', 'Content-Type': 'application/json' }
    });
    // eslint-disable-next-line no-empty
  } catch (err) {}

  return true;
}
