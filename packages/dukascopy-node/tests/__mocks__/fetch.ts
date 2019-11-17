import fs from 'fs';
import { promisify } from 'util';

import { URL_ROOT } from '../../src/url-generator';
const TEST_FOLDER = './tests/__test-data__';

export default function fetchMock() {
  const mockFn = jest.fn();
  return mockFn.mockImplementation(() => {
    const path = mockFn.mock.calls[mockFn.mock.calls.length - 1][0] as string;
    return Promise.resolve({
      buffer: () => promisify(fs.readFile)(path.replace(URL_ROOT, TEST_FOLDER))
    });
  });
}
