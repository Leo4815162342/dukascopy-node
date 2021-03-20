const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-05T02:00.00.000Z', to: '2019-02-05T02:01:00.000Z' },
  timeframe: 'tick',
  volumes: false,
  utcOffset: 0,
  format: 'json'
};

const expectedOutput = [
  {
    timestamp: 1549332000042,
    askPrice: 1.14384,
    bidPrice: 1.1438
  },
  {
    timestamp: 1549332000565,
    askPrice: 1.14384,
    bidPrice: 1.1438
  },
  {
    timestamp: 1549332000667,
    askPrice: 1.14384,
    bidPrice: 1.1438
  },
  {
    timestamp: 1549332000769,
    askPrice: 1.14384,
    bidPrice: 1.1438
  },
  {
    timestamp: 1549332000894,
    askPrice: 1.14384,
    bidPrice: 1.1438
  },
  {
    timestamp: 1549332002949,
    askPrice: 1.1438,
    bidPrice: 1.14379
  },
  {
    timestamp: 1549332003057,
    askPrice: 1.1438,
    bidPrice: 1.14379
  },
  {
    timestamp: 1549332003161,
    askPrice: 1.1438,
    bidPrice: 1.14376
  },
  {
    timestamp: 1549332003264,
    askPrice: 1.1438,
    bidPrice: 1.14376
  },
  {
    timestamp: 1549332003424,
    askPrice: 1.14379,
    bidPrice: 1.14376
  },
  {
    timestamp: 1549332004867,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332005225,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332005304,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332005480,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332005584,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332005826,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332014485,
    askPrice: 1.14378,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332015600,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332018639,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332018767,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332019568,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332020693,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332022584,
    askPrice: 1.14378,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332024940,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332026670,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332031362,
    askPrice: 1.14379,
    bidPrice: 1.14376
  },
  {
    timestamp: 1549332034368,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332035140,
    askPrice: 1.14378,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332036892,
    askPrice: 1.14379,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332037900,
    askPrice: 1.14378,
    bidPrice: 1.14375
  },
  {
    timestamp: 1549332039670,
    askPrice: 1.14378,
    bidPrice: 1.14375
  }
];

export { config, expectedOutput };
