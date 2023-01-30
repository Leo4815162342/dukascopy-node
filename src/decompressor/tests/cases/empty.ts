import fs from 'fs';

const input = {
  buffer: fs.readFileSync('./src/__mocks__/empty.bi5'),
  timeframe: 'm1'
};

const expectedOutput: unknown[] = [];

export { input, expectedOutput };
