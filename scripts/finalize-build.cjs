const { writeFileSync } = require('node:fs');
const { resolve } = require('node:path');

// Keep the package root CommonJS while making the legacy ESM output loadable by Node.
writeFileSync(resolve(__dirname, '../dist/esm/package.json'), '{"type":"module"}\n');
