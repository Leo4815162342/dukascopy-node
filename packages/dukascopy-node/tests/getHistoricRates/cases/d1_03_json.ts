const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-01', to: '2019-03-01' },
  timeframe: 'd1',
  volumes: false,
  utcOffset: 0,
  filterFlats: false,
  format: 'json'
};

const expectedOutput = [
  { timestamp: 1548979200000, open: 1.14482, high: 1.14884, low: 1.14343, close: 1.14547 },
  { timestamp: 1549065600000, open: 1.14547, high: 1.14547, low: 1.14547, close: 1.14547 },
  { timestamp: 1549152000000, open: 1.14547, high: 1.14581, low: 1.14503, close: 1.14543 },
  { timestamp: 1549238400000, open: 1.14543, high: 1.14603, low: 1.14244, close: 1.14349 },
  { timestamp: 1549324800000, open: 1.14348, high: 1.14404, low: 1.14011, close: 1.14087 },
  { timestamp: 1549411200000, open: 1.14087, high: 1.14091, low: 1.13608, close: 1.13656 },
  { timestamp: 1549497600000, open: 1.13655, high: 1.13675, low: 1.13244, close: 1.13382 },
  { timestamp: 1549584000000, open: 1.13382, high: 1.13508, low: 1.13207, close: 1.13207 },
  { timestamp: 1549670400000, open: 1.13207, high: 1.13207, low: 1.13207, close: 1.13207 },
  { timestamp: 1549756800000, open: 1.13207, high: 1.13248, low: 1.13148, close: 1.13237 },
  { timestamp: 1549843200000, open: 1.13239, high: 1.13298, low: 1.12672, close: 1.12785 },
  { timestamp: 1549929600000, open: 1.12785, high: 1.13396, low: 1.12577, close: 1.13336 },
  { timestamp: 1550016000000, open: 1.13336, high: 1.13414, low: 1.1249, close: 1.12646 },
  { timestamp: 1550102400000, open: 1.12646, high: 1.13098, low: 1.12498, close: 1.12947 },
  { timestamp: 1550188800000, open: 1.12946, high: 1.13061, low: 1.1234, close: 1.12925 },
  { timestamp: 1550275200000, open: 1.12925, high: 1.12925, low: 1.12925, close: 1.12925 },
  { timestamp: 1550361600000, open: 1.12925, high: 1.12959, low: 1.12889, close: 1.12948 },
  { timestamp: 1550448000000, open: 1.12948, high: 1.13338, low: 1.12937, close: 1.13114 },
  { timestamp: 1550534400000, open: 1.13115, high: 1.13574, low: 1.12755, close: 1.13399 },
  { timestamp: 1550620800000, open: 1.13399, high: 1.13711, low: 1.13249, close: 1.13461 },
  { timestamp: 1550707200000, open: 1.13461, high: 1.13663, low: 1.13202, close: 1.13398 },
  { timestamp: 1550793600000, open: 1.13399, high: 1.13556, low: 1.13161, close: 1.13319 },
  { timestamp: 1550880000000, open: 1.13319, high: 1.13319, low: 1.13319, close: 1.13319 },
  { timestamp: 1550966400000, open: 1.13319, high: 1.13421, low: 1.13281, close: 1.1342 },
  { timestamp: 1551052800000, open: 1.13421, high: 1.13675, low: 1.13367, close: 1.13647 },
  { timestamp: 1551139200000, open: 1.13647, high: 1.14027, low: 1.1345, close: 1.1393 },
  { timestamp: 1551225600000, open: 1.13931, high: 1.14036, low: 1.13622, close: 1.13795 },
  { timestamp: 1551312000000, open: 1.13796, high: 1.14197, low: 1.13595, close: 1.1373 }
];

export { config, expectedOutput };
