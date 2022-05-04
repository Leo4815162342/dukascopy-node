import os from 'os';
import fetch from 'node-fetch';
import { getSafeVal } from '../utils/getSafeVal';
import { getIp } from '../utils/getIp';
import { version } from '../../package.json';
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
  const timezone = getSafeVal(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
  const os_type = getSafeVal(() => os.type());
  const os_release = getSafeVal(() => os.release());
  const os_platform = getSafeVal(() => os.platform());
  const ip = getSafeVal(getIp);

  try {
    fetch('https://plausible.io/api/event', {
      method: 'POST',
      body: JSON.stringify({
        name: goalName,
        url: 'app://localhost',
        domain: 'dukascopy-node',
        screen_width: 1000,
        props: {
          lib_version: version,
          is_valid: isValid,
          instrument: config.instrument,
          timeframe: config.timeframe,
          from_date: config.dates.from,
          to_date: config.dates.to,
          source,
          node_version: process.version,
          timezone,
          os_type,
          os_release,
          os_platform
        }
      }),
      headers: { 'X-Forwarded-For': ip || '127.0.0.1', 'Content-Type': 'application/json' }
    });
    // eslint-disable-next-line no-empty
  } catch (err) {}

  return true;
}
