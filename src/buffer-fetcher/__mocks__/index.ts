import fs from 'fs';
import { promisify } from 'util';
import { URL_ROOT } from '../../../src/url-generator';

import { FetchedObject } from '../index';

async function batchedFetch(urls: string[]): Promise<FetchedObject[]> {
  const mockedUrls = urls.map(url => url.replace(URL_ROOT, './tests/__test-data__'));

  const bufferedData = await Promise.all(
    mockedUrls.map(async url => {
      const buffer = await promisify(fs.readFile)(url);

      return { url, buffer };
    })
  );

  return bufferedData;
}

export { batchedFetch };
