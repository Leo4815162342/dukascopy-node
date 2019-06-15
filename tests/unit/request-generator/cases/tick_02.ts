const config = {
  instrument: 'gbpusd',
  dates: {
    from: '2018-11-07',
    to: '2018-11-09'
  },
  timeframe: 'tick',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1541548800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/00h_ticks.bi5'
  },
  {
    timestamp: 1541552400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/01h_ticks.bi5'
  },
  {
    timestamp: 1541556000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/02h_ticks.bi5'
  },
  {
    timestamp: 1541559600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/03h_ticks.bi5'
  },
  {
    timestamp: 1541563200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/04h_ticks.bi5'
  },
  {
    timestamp: 1541566800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/05h_ticks.bi5'
  },
  {
    timestamp: 1541570400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/06h_ticks.bi5'
  },
  {
    timestamp: 1541574000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/07h_ticks.bi5'
  },
  {
    timestamp: 1541577600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/08h_ticks.bi5'
  },
  {
    timestamp: 1541581200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/09h_ticks.bi5'
  },
  {
    timestamp: 1541584800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/10h_ticks.bi5'
  },
  {
    timestamp: 1541588400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/11h_ticks.bi5'
  },
  {
    timestamp: 1541592000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/12h_ticks.bi5'
  },
  {
    timestamp: 1541595600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/13h_ticks.bi5'
  },
  {
    timestamp: 1541599200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/14h_ticks.bi5'
  },
  {
    timestamp: 1541602800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/15h_ticks.bi5'
  },
  {
    timestamp: 1541606400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/16h_ticks.bi5'
  },
  {
    timestamp: 1541610000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/17h_ticks.bi5'
  },
  {
    timestamp: 1541613600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/18h_ticks.bi5'
  },
  {
    timestamp: 1541617200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/19h_ticks.bi5'
  },
  {
    timestamp: 1541620800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/20h_ticks.bi5'
  },
  {
    timestamp: 1541624400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/21h_ticks.bi5'
  },
  {
    timestamp: 1541628000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/22h_ticks.bi5'
  },
  {
    timestamp: 1541631600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/07/23h_ticks.bi5'
  },
  {
    timestamp: 1541635200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/00h_ticks.bi5'
  },
  {
    timestamp: 1541638800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/01h_ticks.bi5'
  },
  {
    timestamp: 1541642400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/02h_ticks.bi5'
  },
  {
    timestamp: 1541646000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/03h_ticks.bi5'
  },
  {
    timestamp: 1541649600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/04h_ticks.bi5'
  },
  {
    timestamp: 1541653200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/05h_ticks.bi5'
  },
  {
    timestamp: 1541656800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/06h_ticks.bi5'
  },
  {
    timestamp: 1541660400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/07h_ticks.bi5'
  },
  {
    timestamp: 1541664000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/08h_ticks.bi5'
  },
  {
    timestamp: 1541667600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/09h_ticks.bi5'
  },
  {
    timestamp: 1541671200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/10h_ticks.bi5'
  },
  {
    timestamp: 1541674800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/11h_ticks.bi5'
  },
  {
    timestamp: 1541678400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/12h_ticks.bi5'
  },
  {
    timestamp: 1541682000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/13h_ticks.bi5'
  },
  {
    timestamp: 1541685600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/14h_ticks.bi5'
  },
  {
    timestamp: 1541689200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/15h_ticks.bi5'
  },
  {
    timestamp: 1541692800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/16h_ticks.bi5'
  },
  {
    timestamp: 1541696400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/17h_ticks.bi5'
  },
  {
    timestamp: 1541700000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/18h_ticks.bi5'
  },
  {
    timestamp: 1541703600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/19h_ticks.bi5'
  },
  {
    timestamp: 1541707200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/20h_ticks.bi5'
  },
  {
    timestamp: 1541710800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/21h_ticks.bi5'
  },
  {
    timestamp: 1541714400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/22h_ticks.bi5'
  },
  {
    timestamp: 1541718000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPUSD/2018/10/08/23h_ticks.bi5'
  }
];

export { config, expectedOutput };
