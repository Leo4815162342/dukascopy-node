# Dukascopy JSON test fixtures

These files are unmodified response bodies downloaded from the Dukascopy JSON API (the base URL exported as `URL_ROOT`) on 2026-07-13. They are checked in so tests remain deterministic and never require network access.

The filename mirrors the source endpoint:

- `ticks-{code}-{year}-{month}-{day}-{hour}.json` comes from `/ticks/{code}/{year}/{month}/{day}/{hour}`.
- `candles-{source}-{code}-{side}-{year}[-{month}][-{day}].json` comes from `/candles/{source}/{code}/{side}/{year}[/{month}][/{day}]`.
- `instrument-{code}.json` comes from `/instruments/{code}`.

The empty EUR/USD fixture is the real response for Saturday, 2026-07-11. The `from-1783900800000` fixture is an actual mutable-query response captured from `/candles/minute/BTC-USD/BID?from=1783900800000`; fixture bodies are never synthesized or timestamp-adjusted.
