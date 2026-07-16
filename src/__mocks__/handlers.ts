import { readFileSync } from 'fs';
import { resolve } from 'path';
import { http, HttpResponse } from 'msw';
import { DATA_API_ROOT } from '../config/data-api';

const fixtureFilesByUrl: Record<string, string> = {
  [`${DATA_API_ROOT}/ticks/BTC-USD/2023/2/20/12`]: 'ticks-BTC-USD-2023-2-20-12.json',
  [`${DATA_API_ROOT}/candles/minute/BTC-USD/BID/2023/2/19`]:
    'candles-minute-BTC-USD-BID-2023-2-19.json',
  [`${DATA_API_ROOT}/candles/minute/BTC-USD/BID?from=1783900800000`]:
    'candles-minute-BTC-USD-BID-from-1783900800000.json',
  [`${DATA_API_ROOT}/candles/hour/BTC-USD/BID/2023/1`]: 'candles-hour-BTC-USD-BID-2023-1.json',
  [`${DATA_API_ROOT}/candles/hour/BTC-USD/BID/2023/2`]: 'candles-hour-BTC-USD-BID-2023-2.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2018`]: 'candles-day-BTC-USD-BID-2018.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2019`]: 'candles-day-BTC-USD-BID-2019.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2020`]: 'candles-day-BTC-USD-BID-2020.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2021`]: 'candles-day-BTC-USD-BID-2021.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2022`]: 'candles-day-BTC-USD-BID-2022.json',
  [`${DATA_API_ROOT}/candles/day/BTC-USD/BID/2023`]: 'candles-day-BTC-USD-BID-2023.json'
};

const escapedDataApiRoot = DATA_API_ROOT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const dataRoutePattern = new RegExp(`^${escapedDataApiRoot}/(?:ticks|candles)/`);

const fixtureBodiesByUrl = new Map(
  Object.entries(fixtureFilesByUrl).map(([url, fileName]) => [
    url,
    readFileSync(resolve(__dirname, 'fixtures', fileName), 'utf8')
  ])
);

export function generateMockHandlers() {
  return [
    http.get(dataRoutePattern, ({ request }) => {
      const body = fixtureBodiesByUrl.get(request.url);

      if (body === undefined) {
        return new HttpResponse(null, { status: 404 });
      }

      return new HttpResponse(body, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': String(Buffer.byteLength(body))
        }
      });
    })
  ];
}
