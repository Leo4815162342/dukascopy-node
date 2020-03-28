export type Format = 'array' | 'json' | 'csv';

export type FormatTypes = {
  [key in Format]: string;
};

export const formatType: FormatTypes = {
  array: 'array',
  json: 'json',
  csv: 'csv'
};
