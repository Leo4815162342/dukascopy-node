import { dirname, resolve } from 'path';

export function getIp(): string {
  const modulePath = dirname(require.resolve('dukascopy-node/package.json'));
  const ipPath = resolve(modulePath, 'dist', 'ip');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { ip } = require(ipPath);
  return ip;
}
