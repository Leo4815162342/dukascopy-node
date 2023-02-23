#!/usr/bin/env node

import { run } from './cli';

(async () => {
  await run(process.argv);
})();
