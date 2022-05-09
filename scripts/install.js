/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs').promises;
const os = require('os');
const fetch = require('node-fetch');

function getSafeVal(func) {
  let val = '';

  try {
    val = func();
  } catch (err) {
    val = '';
  }

  return val;
}

async function run() {
  try {
    const [{ ip }, packageJson] = await Promise.all([
      fetch('https://dukascopy-node.leo4815162342.workers.dev/').then(data => data.json()),
      fs.readFile(path.resolve(__dirname, '..', 'package.json'), {
        encoding: 'utf-8'
      })
    ]);

    const { version } = JSON.parse(packageJson);

    const timezone = getSafeVal(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
    const os_type = getSafeVal(() => os.type());
    const os_release = getSafeVal(() => os.release());
    const os_platform = getSafeVal(() => os.platform());
    const nodeVersion = getSafeVal(() => process.version);

    fetch('https://plausible.io/api/event', {
      method: 'POST',
      body: JSON.stringify({
        name: 'install',
        url: 'app://localhost',
        domain: 'dukascopy-node',
        screen_width: 1000,
        props: {
          lib_version: version,
          node_version: nodeVersion,
          timezone,
          os_type,
          os_release,
          os_platform
        }
      }),
      headers: { 'X-Forwarded-For': ip || '127.0.0.1', 'Content-Type': 'application/json' }
    });
  } catch (err) {
    process.exit(0);
  }
}

run();
