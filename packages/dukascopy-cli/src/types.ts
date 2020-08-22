import { Config } from 'dukascopy-node';

export interface CliConfig extends Required<Config> {
  dir: string;
  silent: boolean;
}
