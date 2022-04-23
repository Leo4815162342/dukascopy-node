export interface HolidayData {
  holiday_id: string;
  start_day: string;
  start_hour: string;
  start_minute: string;
  end_day: string;
  end_hour: string;
  end_minute: string;
  timezone: string;
  updated: string;
  timezone_offset: number;
  timezone_hours_offset: number;
  start: Date;
  end: Date;
}

export interface TradingStop {
  WEEKLY: HolidayData[];
  DAILY: HolidayData[];
}

export interface InstrumentData {
  title: string;
  special: boolean;
  name: string;
  description: string;
  historical_filename: string;
  pipValue: number;
  base_currency: string;
  quote_currency: string;
  commodities_per_contract?: unknown;
  tag_list: string[];
  history_start_tick: string;
  history_start_10sec: string;
  history_start_60sec: string;
  history_start_60min: string;
  history_start_day: string;
  unit?: unknown;
  trading_stop: TradingStop;
}

export interface GroupData {
  id: string;
  title: string;
  parent: string;
  instruments: string[];
}

export interface MetaDataResponse {
  instruments: Record<string, InstrumentData>;
  groups: Record<string, GroupData>;
  tags: unknown[];
}

export type ActualStartDates = Record<
  string,
  { '0': number; '1': number; '60': number; '1440': number }
>;
