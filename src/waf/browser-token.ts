import { assertDataUrl, decodeData } from './data';
import { WafTokenError } from './errors';
import { existsSync } from 'fs';
import debug from 'debug';
import { WafSession } from './token-cache';

const log = debug('dukascopy-node:waf');

export interface BrowserTokenOptions {
  timeoutMs?: number;
  executablePath?: string;
}

/** Use managed Chromium, installed Chrome, or an explicit executable, always headlessly. */
export async function acquireChromeSession(
  url: string,
  { timeoutMs = 60_000, executablePath }: BrowserTokenOptions = {}
): Promise<WafSession> {
  assertDataUrl(url);
  if (Number(process.versions.node.split('.')[0]) < 20) {
    throw new WafTokenError('Headless WAF recovery requires Node.js 20+');
  }
  const { chromium } = await import('playwright-core').catch(() => {
    throw new WafTokenError(
      'Headless WAF recovery requires playwright-core. Reinstall dukascopy-node to restore its dependencies'
    );
  });
  const channel = existsSync(chromium.executablePath()) ? 'chromium' : 'chrome';
  log('Launching headless browser: %s', executablePath ? 'custom executable' : channel);
  const browser = await chromium
    .launch({
      ...(executablePath ? { executablePath } : { channel }),
      headless: true,
      timeout: timeoutMs
    })
    .catch(error => {
      const cause = error instanceof Error ? error.message : '';
      const setup =
        'Run dukascopy-node --install-browser (or npx dukascopy-node@beta --install-browser)';
      const linuxHelp =
        process.platform === 'linux'
          ? '; on Linux add --with-deps if system libraries are missing'
          : '';
      throw new WafTokenError(
        `Could not launch headless ${executablePath ? 'browser at chromePath' : channel}. ` +
          `${setup}${linuxHelp}, or set chromePath (--chrome-path in the CLI).` +
          (cause.includes('Host system is missing dependencies')
            ? ' Browser system dependencies are missing.'
            : '')
      );
    });

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    let lastStatus: number | undefined;
    let lastAction: string | undefined;

    page.on('response', response => {
      if (response.url() === url) {
        lastStatus = response.status();
        lastAction = response.headers()['x-amzn-waf-action'];
      }
    });

    // This deadline also bounds response-body reads, not just navigation.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const deadline = new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error('Browser token acquisition timed out')), timeoutMs);
    });

    try {
      return await Promise.race([
        deadline,
        (async () => {
          const [response] = await Promise.all([
            page.waitForResponse(
              response =>
                response.url() === url &&
                response.status() === 200 &&
                !response.headers()['x-amzn-waf-action'] &&
                (response.headers()['content-type'] || '')
                  .toLowerCase()
                  .includes('application/json'),
              { timeout: timeoutMs }
            ),
            page.goto(url, { waitUntil: 'domcontentloaded', timeout: timeoutMs })
          ]);

          decodeData(url, await response.body());
          const token = (await context.cookies(url)).find(
            cookie => cookie.name === 'aws-waf-token'
          );
          if (!token?.value) {
            throw new Error('Browser returned data without an AWS WAF token');
          }
          // Keep Node requests consistent with the browser that acquired the cookie.
          const userAgent = await page.evaluate(() => navigator.userAgent);
          return { token: token.value, userAgent };
        })()
      ]);
    } catch {
      const action = lastAction === 'challenge' || lastAction === 'captcha' ? lastAction : 'none';
      throw new WafTokenError(
        `Headless browser could not acquire a WAF token for ${url} ` +
          `(last HTTP status: ${lastStatus ?? 'none'}, WAF action: ${action})`
      );
    } finally {
      clearTimeout(timer);
    }
  } finally {
    await browser.close();
  }
}
