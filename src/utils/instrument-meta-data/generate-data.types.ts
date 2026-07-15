export interface ApiInstrumentSummary {
  id: number;
  name: string;
  code: string;
  description: string | null;
  pipValue: number;
  priceScale: number | null;
  countryCode: string | null;
  groupId: number | null;
  platformGroupId: string | null;
  webGroupId: string | null;
  sectorIds: number[] | null;
  rating: number | null;
}

export type ApiHistoryPeriod = 'TICK' | 'MINUTE' | 'HOUR' | 'DAY';

export interface ApiInstrumentDetail extends Omit<ApiInstrumentSummary, 'id' | 'webGroupId'> {
  histories: Array<{
    period: ApiHistoryPeriod;
    from: number;
  }>;
}

export interface ApiInstrumentGroup {
  id: number;
  code: string;
  description: string;
  sortOrder: number | null;
  parentId: number | null;
  countryCode: string | null;
  countryName: string | null;
}

export interface InstrumentsResponse {
  instruments: ApiInstrumentSummary[];
  groups: ApiInstrumentGroup[];
  platformGroups: Array<{ id: string }>;
  sectors: Array<{ id: number; name: string }>;
  webGroups: Array<{ id: string }>;
  platforms: Record<string, Record<string, number[]>>;
}
