import { spawn } from 'child_process';
import { createRequire } from 'module';
import { dirname, join } from 'path';
import { Command } from 'commander';

/** Run this package's exact Playwright installer without a shell or a global npm dependency. */
export function installWafBrowser(withDeps = false): Promise<void> {
  const requireFromPackage = createRequire(__filename);
  const cliPath = join(
    dirname(requireFromPackage.resolve('playwright-core/package.json')),
    'cli.js'
  );
  const args = [cliPath, 'install', 'chromium', '--no-shell'];
  if (withDeps) {
    args.push('--with-deps');
  }
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, { stdio: 'inherit', shell: false });
    child.once('error', () =>
      reject(new Error('Could not start the Playwright browser installer'))
    );
    child.once('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Browser installation failed (${signal || `exit code ${code}`})`));
      }
    });
  });
}

export async function runBrowserInstall(argv: string[]): Promise<void> {
  const options = new Command()
    .name('dukascopy-node')
    .description('Install the matching Chromium browser for headless WAF recovery')
    .option('--install-browser', 'Install Playwright-managed Chromium')
    .option(
      '--with-deps',
      'Also install Linux system dependencies (may require administrator access)'
    )
    .parse(argv)
    .opts();
  await installWafBrowser(options.withDeps);
}
