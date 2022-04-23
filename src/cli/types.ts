import { Config } from '../config';

export interface CliConfig extends Required<Config> {
  dir: string;
  silent: boolean;
}
