import fs from 'fs';

const input = {
  buffer: fs.readFileSync('tests/__test-data__/empty.bi5'),
  timeframe: 'm1'
};

const expectedOutput: any[] = [];

export { input, expectedOutput };
