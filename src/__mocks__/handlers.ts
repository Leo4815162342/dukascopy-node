import { readdirSync, statSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { rest } from 'msw';

function getFiles(dir: string): string[] {
  let results: string[] = [];
  const list = readdirSync(dir);
  list.forEach(function (file) {
    file = join(dir, file);
    const stat = statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.bi5')) {
        results.push(file);
      }
    }
  });
  return results;
}

export async function generateMockHandlers() {
  const files = getFiles('./src/__mocks__/BTCUSD');

  const handlers = await Promise.all(
    files.map(async file => {
      const buffer = await readFile(file);
      const route = file.replace('src/__mocks__', 'https://datafeed.dukascopy.com/datafeed');
      return rest.get(route, (_, res, ctx) => res(ctx.body(buffer)));
    })
  );

  return handlers;
}
