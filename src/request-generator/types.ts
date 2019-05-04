export type RequestObject = {
  timestamp: number;
  url: string;
};

// export type FilePeriod = '';

export type EndopointToFilePeriodMap = {
  tick: 'hour';
  min: 'day';
  hour: 'month';
};

export type EndpointType = keyof EndopointToFilePeriodMap;
