import { mkdir, readFile, rename, unlink, writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import { homedir } from 'os';
import { dirname, join, resolve } from 'path';
import debug from 'debug';
import { DATA_API_ROOT } from '../config/data-api';

const log = debug('dukascopy-node:waf');
const origin = new URL(DATA_API_ROOT).origin;

export interface WafSession {
  token: string;
  userAgent: string;
}

export function isValidToken(value: unknown): value is string {
  return (
    typeof value === 'string' && /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]{1,8192}$/.test(value)
  );
}

export function isValidSession(value: unknown): value is WafSession {
  if (!value || typeof value !== 'object') return false;
  const session = value as WafSession;
  return (
    isValidToken(session.token) &&
    typeof session.userAgent === 'string' &&
    /^[\x20-\x7E]{1,1024}$/.test(session.userAgent) &&
    session.userAgent.trim().length > 0
  );
}

/** Optional, best-effort cache. The server decides whether an opaque token is still valid. */
export class WafTokenCache {
  readonly path: string;

  constructor(path?: string) {
    this.path = path ? resolve(path) : join(homedir(), '.dukascopy-node', 'waf-token.json');
  }

  async read(): Promise<WafSession | undefined> {
    try {
      const data = JSON.parse(await readFile(this.path, 'utf8'));
      // v1 stored only a cookie; it cannot reproduce the acquiring browser's request metadata.
      if (data?.version === 2 && data.origin === origin && isValidSession(data)) {
        return { token: data.token, userAgent: data.userAgent };
      }
    } catch {
      // Missing, corrupt, and unreadable files are cache misses. Never log their contents.
    }
    return undefined;
  }

  async write(session: WafSession): Promise<void> {
    if (!isValidSession(session)) {
      return;
    }
    const temporaryPath = `${this.path}.${randomUUID()}.tmp`;
    try {
      await mkdir(dirname(this.path), { recursive: true, mode: 0o700 });
      await writeFile(
        temporaryPath,
        JSON.stringify({ version: 2, origin, ...session, savedAt: new Date().toISOString() }) +
          '\n',
        { encoding: 'utf8', mode: 0o600, flag: 'wx' }
      );
      // A reader sees either complete version, including when separate processes write.
      await rename(temporaryPath, this.path);
      log('Saved WAF token to %s', this.path);
    } catch {
      log('Could not save WAF token to %s; continuing with the in-memory token', this.path);
    } finally {
      await unlink(temporaryPath).catch(() => {});
    }
  }

  async invalidate(rejectedToken: string): Promise<void> {
    try {
      // Do not remove a replacement that another client has already saved.
      if ((await this.read())?.token === rejectedToken) {
        await unlink(this.path);
        log('Removed rejected WAF token from %s', this.path);
      }
    } catch {
      log('Could not remove rejected WAF token from %s', this.path);
    }
  }
}
