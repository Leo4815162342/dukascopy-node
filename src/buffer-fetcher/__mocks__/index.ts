import fs from 'fs';
import { promisify } from 'util';
import { URL_ROOT } from '../../../src/request-generator/url';

async function fetchBufferedData(urls: string[]): Promise<Buffer[]> {
  const mockedUrls = urls.map(url => url.replace(URL_ROOT, './tests/__test-data__'));

  const bufferedData = await Promise.all(mockedUrls.map(async url => promisify(fs.readFile)(url)));

  return bufferedData;
}

export { fetchBufferedData };
