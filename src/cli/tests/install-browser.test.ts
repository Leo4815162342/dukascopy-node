import { EventEmitter } from 'events';
import { spawn } from 'child_process';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { installWafBrowser, runBrowserInstall } from '../install-browser';
import { run } from '../cli';

vi.mock('child_process', () => ({ spawn: vi.fn() }));
let child: EventEmitter;

beforeEach(() => {
  vi.clearAllMocks();
  child = new EventEmitter();
  vi.mocked(spawn).mockReturnValue(child as ReturnType<typeof spawn>);
});

describe('Browser setup CLI', () => {
  it('uses the packaged Playwright version and Node executable without a shell', async () => {
    const result = installWafBrowser();
    expect(spawn).toHaveBeenCalledWith(
      process.execPath,
      [expect.stringMatching(/playwright-core[/\\]cli\.js$/), 'install', 'chromium', '--no-shell'],
      { stdio: 'inherit', shell: false }
    );
    child.emit('exit', 0, null);
    await result;
  });

  it('installs without requiring an instrument or date range', async () => {
    const result = run(['node', 'dukascopy-node', '--install-browser']);
    expect(spawn).toHaveBeenCalledTimes(1);
    child.emit('exit', 0, null);
    await result;
  });

  it('only requests system dependencies when explicitly selected', async () => {
    const result = runBrowserInstall([
      'node',
      'dukascopy-node',
      '--install-browser',
      '--with-deps'
    ]);
    expect(vi.mocked(spawn).mock.calls[0][1]).toEqual([
      expect.any(String),
      'install',
      'chromium',
      '--no-shell',
      '--with-deps'
    ]);
    child.emit('exit', 0, null);
    await result;
  });

  it('reports failed installation rather than continuing to a download', async () => {
    const result = installWafBrowser();
    const failure = expect(result).rejects.toThrow('exit code 1');
    child.emit('exit', 1, null);
    await failure;
  });

  it('reports a failure to spawn the installer', async () => {
    const result = installWafBrowser();
    const failure = expect(result).rejects.toThrow('Could not start');
    child.emit('error', new Error('ENOENT'));
    await failure;
  });
});
