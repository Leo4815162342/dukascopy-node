## With debugging

The library ships with a built-in [`debug`](https://www.npmjs.com/package/debug) module.

To enable debugging add `DEBUG=dukascopy-node:*` environment variable to your execution code.

For CLI calls, add `-d` flag (or alternatively prepend `DEBUG=dukascopy-node:cli:*`):

```bash
dukascopy-cli -i usdjpy -from 2022-03-21 -to 2022-03-22 -t m1 -d
```

```bash
DEBUG=dukascopy-node:cli:* dukascopy-cli -i usdjpy -from 2022-03-21 -to 2022-03-22 -t m1
```

![example of debugging output](https://github.com/Leo4815162342/dukascopy-node/blob/feat/debug_module/examples/with-debugging/with-debugging.png?raw=true)