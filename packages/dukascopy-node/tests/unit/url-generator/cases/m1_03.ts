const input = {
  instrument: 'eurcad',
  timeframe: 'm1',
  startDate: new Date('2019-07-01T12:00:00.000Z'),
  endDate: new Date('2019-08-01T00:00:00.000Z'),
  priceType: 'ask'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/01/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/02/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/03/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/04/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/05/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/06/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/07/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/08/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/09/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/10/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/11/ASK_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/00h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/01h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/02h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/03h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/04h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/05h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/06h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/07h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/08h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/09h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/10h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/11h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/12h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/13h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/14h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/15h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/16h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/17h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/18h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/19h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/12/20h_ticks.bi5'
];

export { input, expectedOutput };
