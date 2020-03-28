import { Config } from 'dukascopy-core';

export interface CliConfig extends Required<Config> {
  dir: string;
  silent: boolean;
}
