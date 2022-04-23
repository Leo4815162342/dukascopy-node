import fs from 'fs';

const input = {
  buffer: fs.readFileSync('./dummy-data/empty.bi5'),
  timeframe: 'm1'
};

const expectedOutput: unknown[] = [];

export { input, expectedOutput };
