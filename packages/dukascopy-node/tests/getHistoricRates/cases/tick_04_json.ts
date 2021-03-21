const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-04T23:59:00.000Z', to: '2019-02-05T00:01:00.000Z' },
  timeframe: 'tick',
  volumes: true,
  utcOffset: 0,
  format: 'json'
};

const expectedOutput = [
  {
    timestamp: 1549324740316,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.5,
    bidVolume: 2.25
  },
  {
    timestamp: 1549324740418,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 3.75,
    bidVolume: 1
  },
  {
    timestamp: 1549324740844,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.37,
    bidVolume: 1
  },
  {
    timestamp: 1549324742288,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.31,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324742750,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 2.56,
    bidVolume: 1.69
  },
  {
    timestamp: 1549324743622,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 2.06,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324745245,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.81,
    bidVolume: 1.31
  },
  {
    timestamp: 1549324746068,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.81,
    bidVolume: 1.56
  },
  {
    timestamp: 1549324747643,
    askPrice: 1.14357,
    bidPrice: 1.14353,
    askVolume: 1.31,
    bidVolume: 1
  },
  {
    timestamp: 1549324757719,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 6.94,
    bidVolume: 1
  },
  {
    timestamp: 1549324757871,
    askPrice: 1.14356,
    bidPrice: 1.14352,
    askVolume: 1.25,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324757988,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 3.19,
    bidVolume: 1
  },
  {
    timestamp: 1549324758090,
    askPrice: 1.14352,
    bidPrice: 1.1435,
    askVolume: 1.5,
    bidVolume: 1.65
  },
  {
    timestamp: 1549324758203,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 2.81,
    bidVolume: 1.12
  },
  {
    timestamp: 1549324758255,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324758408,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1.5,
    bidVolume: 1.12
  },
  {
    timestamp: 1549324758751,
    askPrice: 1.14356,
    bidPrice: 1.1435,
    askVolume: 1.5,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324762381,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1,
    bidVolume: 2.25
  },
  {
    timestamp: 1549324762539,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324762641,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 2.56,
    bidVolume: 4.56
  },
  {
    timestamp: 1549324762744,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 2,
    bidVolume: 3.81
  },
  {
    timestamp: 1549324762846,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 4.44,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324762998,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 2,
    bidVolume: 3.81
  },
  {
    timestamp: 1549324763224,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.12,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324763628,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.12,
    bidVolume: 1.75
  },
  {
    timestamp: 1549324765591,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 2.75,
    bidVolume: 4.94
  },
  {
    timestamp: 1549324765693,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 4.25,
    bidVolume: 5.81
  },
  {
    timestamp: 1549324766171,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 5.75,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324766274,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 3.12,
    bidVolume: 9.19
  },
  {
    timestamp: 1549324767796,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 2,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324767899,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 3.12,
    bidVolume: 1
  },
  {
    timestamp: 1549324772302,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.5,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324772829,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.75,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324772935,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 3.69,
    bidVolume: 4.94
  },
  {
    timestamp: 1549324773124,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.69,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324773241,
    askPrice: 1.14356,
    bidPrice: 1.1435,
    askVolume: 1,
    bidVolume: 6.12
  },
  {
    timestamp: 1549324776923,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 2.44,
    bidVolume: 5
  },
  {
    timestamp: 1549324777804,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 3.31,
    bidVolume: 5.37
  },
  {
    timestamp: 1549324778075,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.31,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324778177,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 3.87,
    bidVolume: 5.37
  },
  {
    timestamp: 1549324784906,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 5.37,
    bidVolume: 5
  },
  {
    timestamp: 1549324786211,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1.25,
    bidVolume: 2.44
  },
  {
    timestamp: 1549324786324,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1.5,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324786427,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 7.44,
    bidVolume: 1
  },
  {
    timestamp: 1549324786530,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 11.62,
    bidVolume: 1
  },
  {
    timestamp: 1549324786696,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 12.5,
    bidVolume: 1
  },
  {
    timestamp: 1549324797678,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 5.37,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324797780,
    askPrice: 1.14354,
    bidPrice: 1.1435,
    askVolume: 1.5,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324797992,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 4.44,
    bidVolume: 2.1
  },
  {
    timestamp: 1549324800717,
    askPrice: 1.14354,
    bidPrice: 1.14348,
    askVolume: 7.54,
    bidVolume: 1
  },
  {
    timestamp: 1549324801612,
    askPrice: 1.14354,
    bidPrice: 1.14348,
    askVolume: 6.64,
    bidVolume: 1
  },
  {
    timestamp: 1549324801886,
    askPrice: 1.14353,
    bidPrice: 1.14348,
    askVolume: 1,
    bidVolume: 2.25
  },
  {
    timestamp: 1549324802150,
    askPrice: 1.14352,
    bidPrice: 1.14348,
    askVolume: 1,
    bidVolume: 1.57
  },
  {
    timestamp: 1549324802252,
    askPrice: 1.14353,
    bidPrice: 1.14348,
    askVolume: 3.82,
    bidVolume: 1.57
  },
  {
    timestamp: 1549324802578,
    askPrice: 1.14352,
    bidPrice: 1.14348,
    askVolume: 1,
    bidVolume: 2.32
  },
  {
    timestamp: 1549324802680,
    askPrice: 1.14353,
    bidPrice: 1.14348,
    askVolume: 5.32,
    bidVolume: 1.61
  },
  {
    timestamp: 1549324803160,
    askPrice: 1.14351,
    bidPrice: 1.14347,
    askVolume: 1.69,
    bidVolume: 1
  },
  {
    timestamp: 1549324803569,
    askPrice: 1.14349,
    bidPrice: 1.14347,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324803672,
    askPrice: 1.14349,
    bidPrice: 1.14346,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324803774,
    askPrice: 1.14348,
    bidPrice: 1.14345,
    askVolume: 1,
    bidVolume: 2.81
  },
  {
    timestamp: 1549324806036,
    askPrice: 1.14349,
    bidPrice: 1.14345,
    askVolume: 1,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324806240,
    askPrice: 1.14351,
    bidPrice: 1.14346,
    askVolume: 6.82,
    bidVolume: 3.19
  },
  {
    timestamp: 1549324806370,
    askPrice: 1.14352,
    bidPrice: 1.14347,
    askVolume: 3.82,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324806524,
    askPrice: 1.14351,
    bidPrice: 1.1435,
    askVolume: 1,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324806628,
    askPrice: 1.14355,
    bidPrice: 1.14352,
    askVolume: 4.25,
    bidVolume: 1
  },
  {
    timestamp: 1549324806783,
    askPrice: 1.14356,
    bidPrice: 1.14353,
    askVolume: 1.25,
    bidVolume: 1
  },
  {
    timestamp: 1549324806886,
    askPrice: 1.14356,
    bidPrice: 1.14352,
    askVolume: 1.5,
    bidVolume: 3.94
  },
  {
    timestamp: 1549324806989,
    askPrice: 1.14358,
    bidPrice: 1.14353,
    askVolume: 1.76,
    bidVolume: 1.69
  },
  {
    timestamp: 1549324807246,
    askPrice: 1.14358,
    bidPrice: 1.14355,
    askVolume: 1.31,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324807355,
    askPrice: 1.14359,
    bidPrice: 1.14355,
    askVolume: 1.5,
    bidVolume: 5.81
  },
  {
    timestamp: 1549324807458,
    askPrice: 1.14361,
    bidPrice: 1.14355,
    askVolume: 3.94,
    bidVolume: 4.64
  },
  {
    timestamp: 1549324807560,
    askPrice: 1.1436,
    bidPrice: 1.14356,
    askVolume: 1,
    bidVolume: 3.94
  },
  {
    timestamp: 1549324807714,
    askPrice: 1.14361,
    bidPrice: 1.14356,
    askVolume: 3.94,
    bidVolume: 1.69
  },
  {
    timestamp: 1549324808300,
    askPrice: 1.14361,
    bidPrice: 1.14357,
    askVolume: 3.37,
    bidVolume: 1
  },
  {
    timestamp: 1549324809347,
    askPrice: 1.1436,
    bidPrice: 1.14357,
    askVolume: 1,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324810120,
    askPrice: 1.14361,
    bidPrice: 1.14357,
    askVolume: 1.12,
    bidVolume: 1
  },
  {
    timestamp: 1549324810324,
    askPrice: 1.14361,
    bidPrice: 1.14356,
    askVolume: 1.12,
    bidVolume: 2.44
  },
  {
    timestamp: 1549324810470,
    askPrice: 1.1436,
    bidPrice: 1.14356,
    askVolume: 1,
    bidVolume: 3.19
  },
  {
    timestamp: 1549324810575,
    askPrice: 1.14362,
    bidPrice: 1.14357,
    askVolume: 5.51,
    bidVolume: 1
  },
  {
    timestamp: 1549324810730,
    askPrice: 1.14361,
    bidPrice: 1.14356,
    askVolume: 1.31,
    bidVolume: 5.32
  },
  {
    timestamp: 1549324811627,
    askPrice: 1.14358,
    bidPrice: 1.14357,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324811731,
    askPrice: 1.14359,
    bidPrice: 1.14355,
    askVolume: 1.5,
    bidVolume: 4.12
  },
  {
    timestamp: 1549324812092,
    askPrice: 1.14358,
    bidPrice: 1.14354,
    askVolume: 3.69,
    bidVolume: 2.7
  },
  {
    timestamp: 1549324812195,
    askPrice: 1.14356,
    bidPrice: 1.14353,
    askVolume: 4.5,
    bidVolume: 1
  },
  {
    timestamp: 1549324812297,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 4.39,
    bidVolume: 3.45
  },
  {
    timestamp: 1549324812426,
    askPrice: 1.14354,
    bidPrice: 1.14351,
    askVolume: 1,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324812529,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 2.5,
    bidVolume: 1.12
  },
  {
    timestamp: 1549324812683,
    askPrice: 1.14355,
    bidPrice: 1.14349,
    askVolume: 1.87,
    bidVolume: 5.26
  },
  {
    timestamp: 1549324812916,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 2.44,
    bidVolume: 1.35
  },
  {
    timestamp: 1549324813993,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1.12,
    bidVolume: 2.51
  },
  {
    timestamp: 1549324814225,
    askPrice: 1.14355,
    bidPrice: 1.1435,
    askVolume: 1.12,
    bidVolume: 3.89
  },
  {
    timestamp: 1549324816988,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.12,
    bidVolume: 2.2
  },
  {
    timestamp: 1549324817261,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.31,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324817363,
    askPrice: 1.14357,
    bidPrice: 1.1435,
    askVolume: 5.82,
    bidVolume: 4.26
  },
  {
    timestamp: 1549324818162,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1.03,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324818306,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 3.79,
    bidVolume: 1.45
  },
  {
    timestamp: 1549324818774,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 3.79,
    bidVolume: 1.39
  },
  {
    timestamp: 1549324818883,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 7.54,
    bidVolume: 1.39
  },
  {
    timestamp: 1549324818986,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 3.01,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324819088,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 2.64,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324819139,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 3.01,
    bidVolume: 1.95
  },
  {
    timestamp: 1549324820067,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.25,
    bidVolume: 3.44
  },
  {
    timestamp: 1549324820170,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 2.62,
    bidVolume: 4.76
  },
  {
    timestamp: 1549324821014,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.12,
    bidVolume: 1
  },
  {
    timestamp: 1549324821383,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 3.56,
    bidVolume: 3
  },
  {
    timestamp: 1549324822074,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 1.31,
    bidVolume: 1
  },
  {
    timestamp: 1549324822238,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 2.44,
    bidVolume: 4.12
  },
  {
    timestamp: 1549324822689,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.69,
    bidVolume: 5
  },
  {
    timestamp: 1549324823602,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324823755,
    askPrice: 1.14356,
    bidPrice: 1.14351,
    askVolume: 1,
    bidVolume: 2.56
  },
  {
    timestamp: 1549324823857,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.31,
    bidVolume: 2.56
  },
  {
    timestamp: 1549324824745,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.31,
    bidVolume: 2.81
  },
  {
    timestamp: 1549324825452,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 4.31,
    bidVolume: 1
  },
  {
    timestamp: 1549324826691,
    askPrice: 1.14357,
    bidPrice: 1.14352,
    askVolume: 5.37,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324829051,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.75,
    bidVolume: 1.69
  },
  {
    timestamp: 1549324830522,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 1.31,
    bidVolume: 1.69
  },
  {
    timestamp: 1549324834462,
    askPrice: 1.14357,
    bidPrice: 1.14351,
    askVolume: 7.12,
    bidVolume: 5.45
  },
  {
    timestamp: 1549324836018,
    askPrice: 1.14357,
    bidPrice: 1.14353,
    askVolume: 1.31,
    bidVolume: 1.25
  },
  {
    timestamp: 1549324840117,
    askPrice: 1.14358,
    bidPrice: 1.14355,
    askVolume: 1,
    bidVolume: 1.5
  },
  {
    timestamp: 1549324840219,
    askPrice: 1.14357,
    bidPrice: 1.14355,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324840322,
    askPrice: 1.14358,
    bidPrice: 1.14354,
    askVolume: 5.12,
    bidVolume: 1.12
  },
  {
    timestamp: 1549324854865,
    askPrice: 1.14355,
    bidPrice: 1.14354,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324855164,
    askPrice: 1.14356,
    bidPrice: 1.14354,
    askVolume: 1.25,
    bidVolume: 1
  },
  {
    timestamp: 1549324855794,
    askPrice: 1.14355,
    bidPrice: 1.14354,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324856670,
    askPrice: 1.14356,
    bidPrice: 1.14354,
    askVolume: 1.25,
    bidVolume: 1
  },
  {
    timestamp: 1549324856771,
    askPrice: 1.14355,
    bidPrice: 1.14354,
    askVolume: 1,
    bidVolume: 1
  },
  {
    timestamp: 1549324856873,
    askPrice: 1.14356,
    bidPrice: 1.14354,
    askVolume: 1.25,
    bidVolume: 1
  }
];

export { config, expectedOutput };
