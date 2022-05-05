/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs').promises;

async function run() {
  try {
    const { ip } = await fetch('https://dukascopy-node.leo4815162342.workers.dev').then(data =>
      data.json()
    );
    await fs.writeFile(
      path.resolve(__dirname, '..', 'dist', 'ip.js'),
      `module.exports = { ip: "${ip}" };`,
      { encoding: 'utf-8' }
    );
  } catch (err) {
    process.exit(0);
  }
}

run();
