const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');

async function main() {
  const browser = await chromium.launch({ channel: 'chromium', headless: true });
  try {
    const page = await browser.newPage();
    await page.setContent('<title>Browser setup verified</title>');
    assert.equal(await page.title(), 'Browser setup verified');
    console.log(`Managed Chromium ${browser.version()} launched headlessly on ${process.platform}`);
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
