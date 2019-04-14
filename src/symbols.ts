const symbols = {
  aususd: {
    name: 'A.US/USD',
    description: 'AGILENT TECHNOLOGIES INC',
    minStartDate: '2017-05-25',
    dotIndex: 2
  },
  aaususd: {
    name: 'AA.US/USD',
    description: 'ALCOA INC',
    minStartDate: '2018-01-30',
    dotIndex: 2
  },
  aabaususd: {
    name: 'AABA.US/USD',
    description: 'ALTABA INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  aalgbgbx: {
    name: 'AAL.GB/GBX',
    description: 'Anglo American PLC',
    minStartDate: '2016-08-01',
    dotIndex: 4
  },
  aalususd: {
    name: 'AAL.US/USD',
    description: 'AMERICAN AIRLINES GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  aaplususd: {
    name: 'AAPL.US/USD',
    description: 'APPLE INC',
    minStartDate: '2017-01-17',
    dotIndex: 3
  },
  abbsesek: {
    name: 'ABB.SE/SEK',
    description: 'ABB Ltd',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  abcususd: {
    name: 'ABC.US/USD',
    description: 'AMERISOURCEBERGEN CORP',
    minStartDate: '2018-01-30',
    dotIndex: 2
  },
  abevususd: {
    name: 'ABEV.US/USD',
    description: 'Ambev S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 1
  },
  abfgbgbx: {
    name: 'ABF.GB/GBX',
    description: 'Associated British Foods PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  abibeeur: {
    name: 'ABI.BE/EUR',
    description: 'Anheuser-Busch InBev NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  abtususd: {
    name: 'ABT.US/USD',
    description: 'ABBOTT LABORATORIES',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  acfreur: {
    name: 'AC.FR/EUR',
    description: 'Accor SA',
    minStartDate: '2016-08-11',
    dotIndex: 2
  },
  acafreur: {
    name: 'ACA.FR/EUR',
    description: 'Credit Agricole SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  acseseur: {
    name: 'ACS.ES/EUR',
    description: 'ACS Actividades de Construccion y Servicios SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  acxeseur: {
    name: 'ACX.ES/EUR',
    description: 'Acerinox SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  adbeususd: {
    name: 'ADBE.US/USD',
    description: 'ADOBE SYSTEMS INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  adiususd: {
    name: 'ADI.US/USD',
    description: 'ANALOG DEVICES INC',
    minStartDate: '2018-01-30',
    dotIndex: 3
  },
  admgbgbx: {
    name: 'ADM.GB/GBX',
    description: 'Admiral Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  adpususd: {
    name: 'ADP.US/USD',
    description: 'AUTOMATIC DATA PROCESSING',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  adsdeeur: {
    name: 'ADS.DE/EUR',
    description: 'Adidas AG',
    minStartDate: '2015-03-13',
    dotIndex: 3
  },
  adskususd: {
    name: 'ADSK.US/USD',
    description: 'AUTODESK INC',
    minStartDate: '2018-01-30',
    dotIndex: 3
  },
  aenaeseur: {
    name: 'AENA.ES/EUR',
    description: 'Aena SA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  aetususd: {
    name: 'AET.US/USD',
    description: 'AETNA INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  affreur: {
    name: 'AF.FR/EUR',
    description: 'Air France-KLM',
    minStartDate: '2016-09-27',
    dotIndex: 1
  },
  agkgbgbx: {
    name: 'AGK.GB/GBX',
    description: 'Aggreko PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  agnnleur: {
    name: 'AGN.NL/EUR',
    description: 'Aegon NV',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  agsbeeur: {
    name: 'AGS.BE/EUR',
    description: 'Ageas',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ahnleur: {
    name: 'AH.NL/EUR',
    description: 'Koninklijke Ahold Delhaize NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ahtgbgbx: {
    name: 'AHT.GB/GBX',
    description: 'Ashtead Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  aifreur: {
    name: 'AI.FR/EUR',
    description: 'Air Liquide SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  aigususd: {
    name: 'AIG.US/USD',
    description: 'AMERICAN INTERNATIONAL GROUP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  airfreur: {
    name: 'AIR.FR/EUR',
    description: 'Airbus Group SE',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  akzanleur: {
    name: 'AKZA.NL/EUR',
    description: 'Akzo Nobel NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  alfasesek: {
    name: 'ALFA.SE/SEK',
    description: 'Alfa Laval AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  allususd: {
    name: 'ALL.US/USD',
    description: 'ALLSTATE CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  alofreur: {
    name: 'ALO.FR/EUR',
    description: 'Alstom SA',
    minStartDate: '2016-09-27',
    dotIndex: 2
  },
  alvdeeur: {
    name: 'ALV.DE/EUR',
    description: 'Allianz SE',
    minStartDate: '2015-04-09',
    dotIndex: 3
  },
  alxnususd: {
    name: 'ALXN.US/USD',
    description: 'ALEXION PHARMACEUTICALS INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  amatususd: {
    name: 'AMAT.US/USD',
    description: 'APPLIED MATERIALS INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  amdususd: {
    name: 'AMD.US/USD',
    description: 'ADVANCED MICRO DEVICES',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  amgnususd: {
    name: 'AMGN.US/USD',
    description: 'AMGEN INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  amseseur: {
    name: 'AMS.ES/EUR',
    description: 'Amadeus IT Holding SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  amtususd: {
    name: 'AMT.US/USD',
    description: 'AMERICAN TOWER CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  amznususd: {
    name: 'AMZN.US/USD',
    description: 'AMAZON.COM INC',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  antmususd: {
    name: 'ANTM.US/USD',
    description: 'ANTHEM INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  antogbgbx: {
    name: 'ANTO.GB/GBX',
    description: 'Antofagasta PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  apaususd: {
    name: 'APA.US/USD',
    description: 'APACHE CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  apcususd: {
    name: 'APC.US/USD',
    description: 'ANADARKO PETROLEUM CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  apdususd: {
    name: 'APD.US/USD',
    description: 'AIR PRODUCTS &amp; CHEMICALS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  asmlnleur: {
    name: 'ASML.NL/EUR',
    description: 'ASML Holding NV',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  atcoasesek: {
    name: 'ATCOA.SE/SEK',
    description: 'Atlas Copco AB',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  atviususd: {
    name: 'ATVI.US/USD',
    description: 'ACTIVISION BLIZZARD INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  audcad: {
    name: 'AUD/CAD',
    description: 'Australian Dollar vs Canadian Dollar',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  audchf: {
    name: 'AUD/CHF',
    description: 'Australian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  audjpy: {
    name: 'AUD/JPY',
    description: 'Australian Dollar vs Japanese Yen',
    minStartDate: '2003-11-29',
    dotIndex: 2
  },
  audnzd: {
    name: 'AUD/NZD',
    description: 'Australian Dollar vs New Zealand Dollar',
    minStartDate: '2006-12-08',
    dotIndex: 1
  },
  audsgd: {
    name: 'AUD/SGD',
    description: 'Australian Dollar vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  audusd: {
    name: 'AUD/USD',
    description: 'Australian Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  avgbgbx: {
    name: 'AV.GB/GBX',
    description: 'Aviva PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  avbususd: {
    name: 'AVB.US/USD',
    description: 'AVALONBAY COMMUNITIES INC',
    minStartDate: '2018-01-31',
    dotIndex: 3
  },
  avgoususd: {
    name: 'AVGO.US/USD',
    description: 'Broadcom Limited',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  axpususd: {
    name: 'AXP.US/USD',
    description: 'AMERICAN EXPRESS CO',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  azngbgbx: {
    name: 'AZN.GB/GBX',
    description: 'AstraZeneca PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  aznususd: {
    name: 'AZN.US/USD',
    description: 'AstraZeneca PLC',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  azoususd: {
    name: 'AZO.US/USD',
    description: 'AUTOZONE INC',
    minStartDate: '2017-11-02',
    dotIndex: 4
  },
  bagbgbx: {
    name: 'BA.GB/GBX',
    description: 'BAE Systems PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  baususd: {
    name: 'BA.US/USD',
    description: 'Boeing Co',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  babgbgbx: {
    name: 'BAB.GB/GBX',
    description: 'Babcock International Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  babaususd: {
    name: 'BABA.US/USD',
    description: 'ALIBABA GROUP HOLDING-SP ADR',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  bacususd: {
    name: 'BAC.US/USD',
    description: 'BANK OF AMERICA CORP',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  barcgbgbx: {
    name: 'BARC.GB/GBX',
    description: 'Barclays PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  basdeeur: {
    name: 'BAS.DE/EUR',
    description: 'BASF SE',
    minStartDate: '2015-04-22',
    dotIndex: 2
  },
  batsgbgbx: {
    name: 'BATS.GB/GBX',
    description: 'British American Tobacco PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  bayndeeur: {
    name: 'BAYN.DE/EUR',
    description: 'Bayer AG',
    minStartDate: '2015-03-20',
    dotIndex: 2
  },
  bbdususd: {
    name: 'BBD.US/USD',
    description: 'Banco Bradesco S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  bbtususd: {
    name: 'BBT.US/USD',
    description: 'BB&amp;T CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  bbvaeseur: {
    name: 'BBVA.ES/EUR',
    description: 'Banco Bilbao Vizcaya Argentaria SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  bbyususd: {
    name: 'BBY.US/USD',
    description: 'BEST BUY CO INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  bdxususd: {
    name: 'BDX.US/USD',
    description: 'BECTON DICKINSON AND CO',
    minStartDate: '2018-01-31',
    dotIndex: 3
  },
  beideeur: {
    name: 'BEI.DE/EUR',
    description: 'Beiersdorf AG',
    minStartDate: '2015-04-08',
    dotIndex: 2
  },
  belgbeeur: {
    name: 'BELG.BE/EUR',
    description: 'Proximus',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  biduususd: {
    name: 'BIDU.US/USD',
    description: 'BAIDU INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  biibususd: {
    name: 'BIIB.US/USD',
    description: 'BIOGEN INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  bkususd: {
    name: 'BK.US/USD',
    description: 'BANK OF NEW YORK MELLON CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  blndgbgbx: {
    name: 'BLND.GB/GBX',
    description: 'British Land Co PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  bltgbgbx: {
    name: 'BLT.GB/GBX',
    description: 'BHP Billiton PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  bmwdeeur: {
    name: 'BMW.DE/EUR',
    description: 'Bayerische Motoren Werke AG',
    minStartDate: '2015-03-24',
    dotIndex: 2
  },
  bmyususd: {
    name: 'BMY.US/USD',
    description: 'BRISTOL-MYERS SQUIBB CO',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  bnfreur: {
    name: 'BN.FR/EUR',
    description: 'Danone SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  bnpfreur: {
    name: 'BNP.FR/EUR',
    description: 'BNP Paribas SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  bnzlgbgbx: {
    name: 'BNZL.GB/GBX',
    description: 'Bunzl PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  bossdeeur: {
    name: 'BOSS.DE/EUR',
    description: 'HUGO BOSS AG',
    minStartDate: '2015-04-09',
    dotIndex: 2
  },
  bpgbgbx: {
    name: 'BP.GB/GBX',
    description: 'BP PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  bpususd: {
    name: 'BP.US/USD',
    description: 'BP p.l.c.',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  brbygbgbx: {
    name: 'BRBY.GB/GBX',
    description: 'Burberry Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  brkbususd: {
    name: 'BRKB.US/USD',
    description: 'BERKSHIRE HATHAWAY INC-CL B',
    minStartDate: '2017-11-06',
    dotIndex: 3
  },
  bsxususd: {
    name: 'BSX.US/USD',
    description: 'BOSTON SCIENTIFIC CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  btgbgbx: {
    name: 'BT.GB/GBX',
    description: 'BT Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  btcusd: {
    name: 'BTC/USD',
    description: 'Bitcoin vs US Dollar',
    minStartDate: '2017-05-07',
    dotIndex: 4
  },
  bundtreur: {
    name: 'BUND.TR/EUR',
    description: 'Euro Bund',
    minStartDate: '2016-05-02',
    dotIndex: 3
  },
  cususd: {
    name: 'C.US/USD',
    description: 'CITIGROUP INC',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  cafreur: {
    name: 'CA.FR/EUR',
    description: 'Carrefour SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  cabkeseur: {
    name: 'CABK.ES/EUR',
    description: 'CaixaBank',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  cadchf: {
    name: 'CAD/CHF',
    description: 'Canadian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  cadhkd: {
    name: 'CAD/HKD',
    description: 'Canadian Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  cadjpy: {
    name: 'CAD/JPY',
    description: 'Canadian Dollar vs Japanese Yen',
    minStartDate: '2004-10-20',
    dotIndex: 2
  },
  cagususd: {
    name: 'CAG.US/USD',
    description: 'CONAGRA FOODS INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  cahususd: {
    name: 'CAH.US/USD',
    description: 'CARDINAL HEALTH INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  capfreur: {
    name: 'CAP.FR/EUR',
    description: 'Cap Gemini SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  carlbdkdkk: {
    name: 'CARLB.DK/DKK',
    description: 'Carlsberg A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  catususd: {
    name: 'CAT.US/USD',
    description: 'CATERPILLAR INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  cbkdeeur: {
    name: 'CBK.DE/EUR',
    description: 'Commerzbank AG',
    minStartDate: '2015-03-26',
    dotIndex: 1
  },
  cbsususd: {
    name: 'CBS.US/USD',
    description: 'CBS CORP-CLASS B NON VOTING',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  cclgbgbx: {
    name: 'CCL.GB/GBX',
    description: 'Carnival PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  celgususd: {
    name: 'CELG.US/USD',
    description: 'CELGENE CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  cfususd: {
    name: 'CF.US/USD',
    description: 'CF INDUSTRIES HOLDINGS INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  chfjpy: {
    name: 'CHF/JPY',
    description: 'Swiss Franc vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  chfsgd: {
    name: 'CHF/SGD',
    description: 'Swiss Franc vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  chiidxusd: {
    name: 'CHI.IDX/USD',
    description: 'China A50 Index',
    minStartDate: '2017-07-17',
    dotIndex: 5
  },
  ciususd: {
    name: 'CI.US/USD',
    description: 'CIGNA CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  clususd: {
    name: 'CL.US/USD',
    description: 'COLGATE-PALMOLIVE CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  cmcsaususd: {
    name: 'CMCSA.US/USD',
    description: 'COMCAST CORP-CLASS A',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  cmeususd: {
    name: 'CME.US/USD',
    description: 'CME GROUP INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  cmgususd: {
    name: 'CMG.US/USD',
    description: 'CHIPOTLE MEXICAN GRILL INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  cmiususd: {
    name: 'CMI.US/USD',
    description: 'CUMMINS INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  cnagbgbx: {
    name: 'CNA.GB/GBX',
    description: 'Centrica PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  cocoacmdusd: {
    name: 'COCOA.CMD/USD',
    description: 'NY Cocoa',
    minStartDate: '2017-10-20',
    dotIndex: 4
  },
  coffeecmdusx: {
    name: 'COFFEE.CMD/USX',
    description: 'Coffee Arabica',
    minStartDate: '2017-12-04',
    dotIndex: 2
  },
  colususd: {
    name: 'COL.US/USD',
    description: 'ROCKWELL COLLINS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  colobdkdkk: {
    name: 'COLOB.DK/DKK',
    description: 'Coloplast A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  condeeur: {
    name: 'CON.DE/EUR',
    description: 'Continental AG',
    minStartDate: '2015-04-08',
    dotIndex: 3
  },
  copususd: {
    name: 'COP.US/USD',
    description: 'CONOCOPHILLIPS',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  coppercmdusd: {
    name: 'COPPER.CMD/USD',
    description: 'High Grade Copper',
    minStartDate: '2012-03-01',
    dotIndex: 1
  },
  costususd: {
    name: 'COST.US/USD',
    description: 'COSTCO WHOLESALE CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  cottoncmdusx: {
    name: 'COTTON.CMD/USX',
    description: 'Cotton',
    minStartDate: '2017-10-20',
    dotIndex: 2
  },
  cpggbgbx: {
    name: 'CPG.GB/GBX',
    description: 'Compass Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  cpigbgbx: {
    name: 'CPI.GB/GBX',
    description: 'Capita PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  crdagbgbx: {
    name: 'CRDA.GB/GBX',
    description: 'Croda International PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  crhgbgbx: {
    name: 'CRH.GB/GBX',
    description: 'CRH PLC',
    minStartDate: '2016-11-08',
    dotIndex: 4
  },
  crmususd: {
    name: 'CRM.US/USD',
    description: 'SALESFORCE.COM INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  csfreur: {
    name: 'CS.FR/EUR',
    description: 'AXA SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  csususd: {
    name: 'CS.US/USD',
    description: 'Credit Suisse Group AG',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  cscoususd: {
    name: 'CSCO.US/USD',
    description: 'CISCO SYSTEMS INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  csxususd: {
    name: 'CSX.US/USD',
    description: 'CSX CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ctlususd: {
    name: 'CTL.US/USD',
    description: 'CENTURYLINK INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ctshususd: {
    name: 'CTSH.US/USD',
    description: 'COGNIZANT TECH SOLUTIONS-A',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  cvsususd: {
    name: 'CVS.US/USD',
    description: 'CVS HEALTH CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  cvxususd: {
    name: 'CVX.US/USD',
    description: 'CHEVRON CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  dususd: {
    name: 'D.US/USD',
    description: 'DOMINION RESOURCES INC/VA',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  daideeur: {
    name: 'DAI.DE/EUR',
    description: 'Daimler AG',
    minStartDate: '2015-03-27',
    dotIndex: 2
  },
  dalususd: {
    name: 'DAL.US/USD',
    description: 'DELTA AIR LINES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  danskedkdkk: {
    name: 'DANSKE.DK/DKK',
    description: 'Danske Bank A/S',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  db1deeur: {
    name: 'DB1.DE/EUR',
    description: 'Deutsche Boerse AG',
    minStartDate: '2015-04-14',
    dotIndex: 3
  },
  dbkdeeur: {
    name: 'DBK.DE/EUR',
    description: 'Deutsche Bank AG',
    minStartDate: '2015-03-25',
    dotIndex: 1
  },
  deususd: {
    name: 'DE.US/USD',
    description: 'DEERE &amp; CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  dfsususd: {
    name: 'DFS.US/USD',
    description: 'DISCOVER FINANCIAL SERVICES',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  dgfreur: {
    name: 'DG.FR/EUR',
    description: 'Vinci SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  dgususd: {
    name: 'DG.US/USD',
    description: 'DOLLAR GENERAL CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  dgegbgbx: {
    name: 'DGE.GB/GBX',
    description: 'Diageo PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  dhiususd: {
    name: 'DHI.US/USD',
    description: 'DR HORTON INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  dhrususd: {
    name: 'DHR.US/USD',
    description: 'DANAHER CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  diaeseur: {
    name: 'DIA.ES/EUR',
    description: 'Distribuidora Internacional de Alimentacion SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  diaususd: {
    name: 'DIA.US/USD',
    description: 'SPDR Dow Jones® Industrial Average ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  dieselcmdusd: {
    name: 'DIESEL.CMD/USD',
    description: 'Gas oil',
    minStartDate: '2017-10-20',
    dotIndex: 3
  },
  disususd: {
    name: 'DIS.US/USD',
    description: 'WALT DISNEY CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  dltrususd: {
    name: 'DLTR.US/USD',
    description: 'DOLLAR TREE INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  dnbnonok: {
    name: 'DNB.NO/NOK',
    description: 'DNB ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  dollaridxusd: {
    name: 'DOLLAR.IDX/USD',
    description: 'US Dollar Index',
    minStartDate: '2017-12-01',
    dotIndex: 2
  },
  dpwdeeur: {
    name: 'DPW.DE/EUR',
    description: 'Deutsche Post AG',
    minStartDate: '2015-03-31',
    dotIndex: 2
  },
  dsmnleur: {
    name: 'DSM.NL/EUR',
    description: 'Koninklijke DSM NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  dtedeeur: {
    name: 'DTE.DE/EUR',
    description: 'Deutsche Telekom AG',
    minStartDate: '2015-03-31',
    dotIndex: 2
  },
  dukususd: {
    name: 'DUK.US/USD',
    description: 'DUKE ENERGY CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  dvaususd: {
    name: 'DVA.US/USD',
    description: 'DAVITA HEALTHCARE PARTNERS I',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  dvnususd: {
    name: 'DVN.US/USD',
    description: 'DEVON ENERGY CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  dvyususd: {
    name: 'DVY.US/USD',
    description: 'iShares Select Dividend ETF',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  eaususd: {
    name: 'EA.US/USD',
    description: 'ELECTRONIC ARTS INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  ebayususd: {
    name: 'EBAY.US/USD',
    description: 'EBAY INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ebsateur: {
    name: 'EBS.AT/EUR',
    description: 'Erste Group Bank AG',
    minStartDate: '2016-11-04',
    dotIndex: 2
  },
  edffreur: {
    name: 'EDF.FR/EUR',
    description: 'Electricite de France SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  edppteur: {
    name: 'EDP.PT/EUR',
    description: 'EDP - Energias de Portugal SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  eemususd: {
    name: 'EEM.US/USD',
    description: 'iShares MSCI Emerging Markets ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  efaususd: {
    name: 'EFA.US/USD',
    description: 'iShares MSCI EAFE ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  efxususd: {
    name: 'EFX.US/USD',
    description: 'EQUIFAX INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  eifreur: {
    name: 'EI.FR/EUR',
    description: 'Essilor International SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  eixususd: {
    name: 'EIX.US/USD',
    description: 'EDISON INTERNATIONAL',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  elususd: {
    name: 'EL.US/USD',
    description: 'ESTEE LAUDER COMPANIES-CL A',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  eleeseur: {
    name: 'ELE.ES/EUR',
    description: 'Endesa SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  eli1vfieur: {
    name: 'ELI1V.FI/EUR',
    description: 'Elisa OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  eluxbsesek: {
    name: 'ELUXB.SE/SEK',
    description: 'Electrolux AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  embususd: {
    name: 'EMB.US/USD',
    description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  emrususd: {
    name: 'EMR.US/USD',
    description: 'EMERSON ELECTRIC CO',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  enfreur: {
    name: 'EN.FR/EUR',
    description: 'Bouygues SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  engeseur: {
    name: 'ENG.ES/EUR',
    description: 'Enagas SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  engifreur: {
    name: 'ENGI.FR/EUR',
    description: 'Engie',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  eoandeeur: {
    name: 'EOAN.DE/EUR',
    description: 'E.ON SE',
    minStartDate: '2015-04-20',
    dotIndex: 1
  },
  eogususd: {
    name: 'EOG.US/USD',
    description: 'EOG RESOURCES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  eqtususd: {
    name: 'EQT.US/USD',
    description: 'EQT CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ericbsesek: {
    name: 'ERICB.SE/SEK',
    description: 'Telefonaktiebolaget LM Ericsson',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  esrxususd: {
    name: 'ESRX.US/USD',
    description: 'EXPRESS SCRIPTS HOLDING CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ethusd: {
    name: 'ETH/USD',
    description: 'Ether vs US Dollar',
    minStartDate: '2017-12-11',
    dotIndex: 3
  },
  euraud: {
    name: 'EUR/AUD',
    description: 'Euro vs Australian Dollar',
    minStartDate: '2005-10-02',
    dotIndex: 1
  },
  eurcad: {
    name: 'EUR/CAD',
    description: 'Euro vs Canadian Dollar',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  eurchf: {
    name: 'EUR/CHF',
    description: 'Euro vs Swiss Franc',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  eurczk: {
    name: 'EUR/CZK',
    description: 'Euro vs Czech Koruna',
    minStartDate: '2016-01-03',
    dotIndex: 2
  },
  eurdkk: {
    name: 'EUR/DKK',
    description: 'Euro vs Danish Krone',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  eurgbp: {
    name: 'EUR/GBP',
    description: 'Euro vs Pound Sterling',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  eurhkd: {
    name: 'EUR/HKD',
    description: 'Euro vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  eurhuf: {
    name: 'EUR/HUF',
    description: 'Euro vs Hungarian Forint',
    minStartDate: '2007-03-13',
    dotIndex: 3
  },
  eurjpy: {
    name: 'EUR/JPY',
    description: 'Euro vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  eurnok: {
    name: 'EUR/NOK',
    description: 'Euro vs Norwegian Krone',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  eurnzd: {
    name: 'EUR/NZD',
    description: 'Euro vs New Zealand Dollar',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  eurpln: {
    name: 'EUR/PLN',
    description: 'Euro vs Polish Zloty',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  eurrub: {
    name: 'EUR/RUB',
    description: 'Euro vs Russian Rouble',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  eursek: {
    name: 'EUR/SEK',
    description: 'Euro vs Swedish Krona',
    minStartDate: '2004-10-27',
    dotIndex: 2
  },
  eursgd: {
    name: 'EUR/SGD',
    description: 'Euro vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  eurtry: {
    name: 'EUR/TRY',
    description: 'Euro vs Turkish Lira',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  eurusd: {
    name: 'EUR/USD',
    description: 'Euro vs US Dollar',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  ewhususd: {
    name: 'EWH.US/USD',
    description: 'iShares MSCI Hong Kong ETF',
    minStartDate: '2017-11-06',
    dotIndex: 2
  },
  ewjususd: {
    name: 'EWJ.US/USD',
    description: 'iShares MSCI Japan ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  ewwususd: {
    name: 'EWW.US/USD',
    description: 'iShares MSCI Mexico Capped',
    minStartDate: '2017-03-13',
    dotIndex: 2
  },
  ewzususd: {
    name: 'EWZ.US/USD',
    description: 'iShares MSCI Brazil Capped',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  excususd: {
    name: 'EXC.US/USD',
    description: 'EXELON CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  expeususd: {
    name: 'EXPE.US/USD',
    description: 'EXPEDIA INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  expngbgbx: {
    name: 'EXPN.GB/GBX',
    description: 'Experian PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  ezjgbgbx: {
    name: 'EZJ.GB/GBX',
    description: 'easyJet PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  ezuususd: {
    name: 'EZU.US/USD',
    description: 'iShares MSCI EMU ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  brentcmdusd: {
    name: 'BRENT.CMD/USD',
    description: 'US Brent Crude Oil',
    minStartDate: '2010-12-02',
    dotIndex: 2
  },
  fraidxeur: {
    name: 'FRA.IDX/EUR',
    description: 'France 40 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  usa30idxusd: {
    name: 'USA30.IDX/USD',
    description: 'USA 30 Index',
    minStartDate: '2013-09-30',
    dotIndex: 5
  },
  deuidxeur: {
    name: 'DEU.IDX/EUR',
    description: 'Germany 30 Index',
    minStartDate: '2013-09-30',
    dotIndex: 5
  },
  eusidxeur: {
    name: 'EUS.IDX/EUR',
    description: 'Europe 50 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  gbridxgbp: {
    name: 'GBR.IDX/GBP',
    description: 'UK 100 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  hkgidxhkd: {
    name: 'HKG.IDX/HKD',
    description: 'Hong Kong 40 Index',
    minStartDate: '2011-09-18',
    dotIndex: 5
  },
  espidxeur: {
    name: 'ESP.IDX/EUR',
    description: 'Spain 35 Index',
    minStartDate: '2012-01-02',
    dotIndex: 4
  },
  lightcmdusd: {
    name: 'LIGHT.CMD/USD',
    description: 'US Light Crude Oil',
    minStartDate: '2011-09-23',
    dotIndex: 2
  },
  jpnidxjpy: {
    name: 'JPN.IDX/JPY',
    description: 'Japan 225',
    minStartDate: '2011-09-18',
    dotIndex: 5
  },
  usatechidxusd: {
    name: 'USATECH.IDX/USD',
    description: 'USA 100 Technical Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  usa500idxusd: {
    name: 'USA500.IDX/USD',
    description: 'USA 500 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  cheidxchf: {
    name: 'CHE.IDX/CHF',
    description: 'Switzerland 20 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  ausidxaud: {
    name: 'AUS.IDX/AUD',
    description: 'Australia 200 Index',
    minStartDate: '2013-01-02',
    dotIndex: 4
  },
  fususd: {
    name: 'F.US/USD',
    description: 'FORD MOTOR CO',
    minStartDate: '2017-11-02',
    dotIndex: 1
  },
  fbususd: {
    name: 'FB.US/USD',
    description: 'FACEBOOK INC-A',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  fcxususd: {
    name: 'FCX.US/USD',
    description: 'FREEPORT-MCMORAN INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  fdxususd: {
    name: 'FDX.US/USD',
    description: 'FEDEX CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  feususd: {
    name: 'FE.US/USD',
    description: 'FIRSTENERGY CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  fereseur: {
    name: 'FER.ES/EUR',
    description: 'Ferrovial SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  fmedeeur: {
    name: 'FME.DE/EUR',
    description: 'Fresenius Medical Care AG &amp; Co KGaA',
    minStartDate: '2015-04-01',
    dotIndex: 2
  },
  foxaususd: {
    name: 'FOXA.US/USD',
    description: 'TWENTY-FIRST CENTURY FOX-A',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  fpfreur: {
    name: 'FP.FR/EUR',
    description: 'Total SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  frfreur: {
    name: 'FR.FR/EUR',
    description: 'Valeo SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  fredeeur: {
    name: 'FRE.DE/EUR',
    description: 'Fresenius SE &amp; Co KGaA',
    minStartDate: '2015-04-10',
    dotIndex: 2
  },
  fresgbgbx: {
    name: 'FRES.GB/GBX',
    description: 'Fresnillo PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  fxiususd: {
    name: 'FXI.US/USD',
    description: 'iShares China Large-Cap ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  galppteur: {
    name: 'GALP.PT/EUR',
    description: 'Galp Energia SGPS SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  gameseur: {
    name: 'GAM.ES/EUR',
    description: 'Gamesa Corporacion Tecnologica SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  gascmdusd: {
    name: 'GAS.CMD/USD',
    description: 'Natural Gas',
    minStartDate: '2012-08-20',
    dotIndex: 1
  },
  gaseseur: {
    name: 'GAS.ES/EUR',
    description: 'Gas Natural SDG SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  gbpaud: {
    name: 'GBP/AUD',
    description: 'Pound Sterling vs Australian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  gbpcad: {
    name: 'GBP/CAD',
    description: 'Pound Sterling vs Canadian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  gbpchf: {
    name: 'GBP/CHF',
    description: 'Pound Sterling vs Swiss Franc',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  gbpjpy: {
    name: 'GBP/JPY',
    description: 'Pound Sterling vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  gbpnzd: {
    name: 'GBP/NZD',
    description: 'Pound Sterling vs New Zealand Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  gbpusd: {
    name: 'GBP/USD',
    description: 'Pound Sterling vs US Dollar',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  gdxususd: {
    name: 'GDX.US/USD',
    description: 'VanEck Vectors Gold Miners ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  gdxjususd: {
    name: 'GDXJ.US/USD',
    description: 'VanEck Vectors Junior Gold Miners ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  geususd: {
    name: 'GE.US/USD',
    description: 'GENERAL ELECTRIC CO',
    minStartDate: '2017-01-19',
    dotIndex: 1
  },
  getibsesek: {
    name: 'GETIB.SE/SEK',
    description: 'Getinge AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  gfsgbgbx: {
    name: 'GFS.GB/GBX',
    description: 'G4S PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  gildususd: {
    name: 'GILD.US/USD',
    description: 'GILEAD SCIENCES INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  gisususd: {
    name: 'GIS.US/USD',
    description: 'GENERAL MILLS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  gldususd: {
    name: 'GLD.US/USD',
    description: 'SPDR Gold Shares ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  glefreur: {
    name: 'GLE.FR/EUR',
    description: 'Societe Generale SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  glengbgbx: {
    name: 'GLEN.GB/GBX',
    description: 'Glencore PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  glwususd: {
    name: 'GLW.US/USD',
    description: 'CORNING INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  gmususd: {
    name: 'GM.US/USD',
    description: 'GENERAL MOTORS CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  googususd: {
    name: 'GOOG.US/USD',
    description: 'ALPHABET INC-CL C',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  googlususd: {
    name: 'GOOGL.US/USD',
    description: 'ALPHABET INC-CL A',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  gpsususd: {
    name: 'GPS.US/USD',
    description: 'GAP INC/THE',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  gsususd: {
    name: 'GS.US/USD',
    description: 'GOLDMAN SACHS GROUP INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  gtonleur: {
    name: 'GTO.NL/EUR',
    description: 'Gemalto NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  gwwususd: {
    name: 'GWW.US/USD',
    description: 'WW GRAINGER INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  halususd: {
    name: 'HAL.US/USD',
    description: 'HALLIBURTON CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  hcnususd: {
    name: 'HCN.US/USD',
    description: 'WELLTOWER INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  hcpususd: {
    name: 'HCP.US/USD',
    description: 'HCP INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  hdususd: {
    name: 'HD.US/USD',
    description: 'HOME DEPOT INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  heideeur: {
    name: 'HEI.DE/EUR',
    description: 'HeidelbergCement AG',
    minStartDate: '2015-04-02',
    dotIndex: 2
  },
  heianleur: {
    name: 'HEIA.NL/EUR',
    description: 'Heineken NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  hen3deeur: {
    name: 'HEN3.DE/EUR',
    description: 'Henkel AG &amp; Co KGaA',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  hesususd: {
    name: 'HES.US/USD',
    description: 'HESS CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  hkdjpy: {
    name: 'HKD/JPY',
    description: 'Hong Kong Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  hmbsesek: {
    name: 'HMB.SE/SEK',
    description: 'Hennes &amp; Mauritz AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  hmsogbgbx: {
    name: 'HMSO.GB/GBX',
    description: 'Hammerson PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  honususd: {
    name: 'HON.US/USD',
    description: 'HONEYWELL INTERNATIONAL INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  hpqususd: {
    name: 'HPQ.US/USD',
    description: 'HP INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  hsbagbgbx: {
    name: 'HSBA.GB/GBX',
    description: 'HSBC Holdings PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  humususd: {
    name: 'HUM.US/USD',
    description: 'HUMANA INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  iaggbgbx: {
    name: 'IAG.GB/GBX',
    description: 'International Consolidated Airlines Grou',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  ibbususd: {
    name: 'IBB.US/USD',
    description: 'iShares Nasdaq Biotechnology ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  ibeeseur: {
    name: 'IBE.ES/EUR',
    description: 'Iberdrola SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  ibmususd: {
    name: 'IBM.US/USD',
    description: 'INTL BUSINESS MACHINES CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  iceususd: {
    name: 'ICE.US/USD',
    description: 'INTERCONTINENTAL EXCHANGE IN',
    minStartDate: '2017-11-06',
    dotIndex: 2
  },
  iefususd: {
    name: 'IEF.US/USD',
    description: 'iShares 7-10 Year Treasury Bond ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  ifxdeeur: {
    name: 'IFX.DE/EUR',
    description: 'Infineon Technologies AG',
    minStartDate: '2015-04-13',
    dotIndex: 2
  },
  ihggbgbx: {
    name: 'IHG.GB/GBX',
    description: 'InterContinental Hotels Group PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  ijhususd: {
    name: 'IJH.US/USD',
    description: 'iShares Core S&amp;P Mid-Cap ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  ijrususd: {
    name: 'IJR.US/USD',
    description: 'iShares Core S&amp;P Small-Cap ETF',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  ilmnususd: {
    name: 'ILMN.US/USD',
    description: 'ILLUMINA INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  imtgbgbx: {
    name: 'IMT.GB/GBX',
    description: 'Imperial Brands Plc',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  indidxusd: {
    name: 'IND.IDX/USD',
    description: 'India 50 Index',
    minStartDate: '2017-12-01',
    dotIndex: 5
  },
  inganleur: {
    name: 'INGA.NL/EUR',
    description: 'ING Groep NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  intcususd: {
    name: 'INTC.US/USD',
    description: 'INTEL CORP',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  intuususd: {
    name: 'INTU.US/USD',
    description: 'INTUIT INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  invebsesek: {
    name: 'INVEB.SE/SEK',
    description: 'Investor AB',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  ipgususd: {
    name: 'IPG.US/USD',
    description: 'INTERPUBLIC GROUP OF COS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  isatgbgbx: {
    name: 'ISAT.GB/GBX',
    description: 'Inmarsat PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  isrgususd: {
    name: 'ISRG.US/USD',
    description: 'INTUITIVE SURGICAL INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  itrkgbgbx: {
    name: 'ITRK.GB/GBX',
    description: 'Intertek Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  itubususd: {
    name: 'ITUB.US/USD',
    description: 'Itau Unibanco Holding S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 1
  },
  itvgbgbx: {
    name: 'ITV.GB/GBX',
    description: 'ITV PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  itwususd: {
    name: 'ITW.US/USD',
    description: 'ILLINOIS TOOL WORKS',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  itxeseur: {
    name: 'ITX.ES/EUR',
    description: 'Inditex SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  iveususd: {
    name: 'IVE.US/USD',
    description: 'iShares S&amp;P 500 Value ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  ivwususd: {
    name: 'IVW.US/USD',
    description: 'iShares S&amp;P 500 Growth ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  iwdususd: {
    name: 'IWD.US/USD',
    description: 'iShares Russell 1000 Value ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  iwfususd: {
    name: 'IWF.US/USD',
    description: 'iShares Russell 1000 Growth ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  iwmususd: {
    name: 'IWM.US/USD',
    description: 'iShares Russell 2000 ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  iyrususd: {
    name: 'IYR.US/USD',
    description: 'iShares U.S. Real Estate ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  jciususd: {
    name: 'JCI.US/USD',
    description: 'JOHNSON CONTROLS INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  jnjususd: {
    name: 'JNJ.US/USD',
    description: 'JOHNSON &amp; JOHNSON',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  jnkususd: {
    name: 'JNK.US/USD',
    description: 'SPDR Barclays Capital High Yield Bond ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  jpmususd: {
    name: 'JPM.US/USD',
    description: 'JPMORGAN CHASE &amp; CO',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  jwnususd: {
    name: 'JWN.US/USD',
    description: 'NORDSTROM INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  kususd: {
    name: 'K.US/USD',
    description: 'KELLOGG CO',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  kbcbeeur: {
    name: 'KBC.BE/EUR',
    description: 'KBC Groep NV',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  kerfreur: {
    name: 'KER.FR/EUR',
    description: 'Kering',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  keyususd: {
    name: 'KEY.US/USD',
    description: 'KEYCORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  kgfgbgbx: {
    name: 'KGF.GB/GBX',
    description: 'Kingfisher PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  khcususd: {
    name: 'KHC.US/USD',
    description: 'KRAFT HEINZ CO/THE',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  kmbususd: {
    name: 'KMB.US/USD',
    description: 'KIMBERLY-CLARK CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  kmiususd: {
    name: 'KMI.US/USD',
    description: 'KINDER MORGAN INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  koususd: {
    name: 'KO.US/USD',
    description: 'COCA-COLA CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  kpnnleur: {
    name: 'KPN.NL/EUR',
    description: 'Koninklijke KPN NV',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  krususd: {
    name: 'KR.US/USD',
    description: 'KROGER CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  kssususd: {
    name: 'KSS.US/USD',
    description: 'KOHLS CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  lususd: {
    name: 'L.US/USD',
    description: 'LOEWS CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  landgbgbx: {
    name: 'LAND.GB/GBX',
    description: 'Land Securities Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  lenususd: {
    name: 'LEN.US/USD',
    description: 'LENNAR CORP-A',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  lgengbgbx: {
    name: 'LGEN.GB/GBX',
    description: 'Legal &amp; General Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  lhadeeur: {
    name: 'LHA.DE/EUR',
    description: 'Deutsche Lufthansa AG',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  lifreur: {
    name: 'LI.FR/EUR',
    description: 'Klepierre',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  lindeeur: {
    name: 'LIN.DE/EUR',
    description: 'Linde AG',
    minStartDate: '2015-04-21',
    dotIndex: 3
  },
  lloygbgbx: {
    name: 'LLOY.GB/GBX',
    description: 'Lloyds Banking Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 2
  },
  llyususd: {
    name: 'LLY.US/USD',
    description: 'ELI LILLY &amp; CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  lmtususd: {
    name: 'LMT.US/USD',
    description: 'LOCKHEED MARTIN CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  lowususd: {
    name: 'LOW.US/USD',
    description: "LOWE'S COS INC",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  lrfreur: {
    name: 'LR.FR/EUR',
    description: 'Legrand SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  lrcxususd: {
    name: 'LRCX.US/USD',
    description: 'LAM RESEARCH CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  lsegbgbx: {
    name: 'LSE.GB/GBX',
    description: 'London Stock Exchange Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  luvususd: {
    name: 'LUV.US/USD',
    description: 'SOUTHWEST AIRLINES CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  lvsususd: {
    name: 'LVS.US/USD',
    description: 'Las Vegas Sands Corp.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  lxsdeeur: {
    name: 'LXS.DE/EUR',
    description: 'Lanxess AG',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  mususd: {
    name: 'M.US/USD',
    description: "MACY'S INC",
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  maususd: {
    name: 'MA.US/USD',
    description: 'MASTERCARD INC-CLASS A',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  maerskbdkdkk: {
    name: 'MAERSKB.DK/DKK',
    description: 'AP Moeller - Maersk A/S',
    minStartDate: '2016-11-08',
    dotIndex: 4
  },
  marususd: {
    name: 'MAR.US/USD',
    description: 'MARRIOTT INTERNATIONAL -CL A',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  matususd: {
    name: 'MAT.US/USD',
    description: 'MATTEL INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  mcfreur: {
    name: 'MC.FR/EUR',
    description: 'LVMH Moet Hennessy Louis Vuitton SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  mcdususd: {
    name: 'MCD.US/USD',
    description: "MCDONALD'S CORP",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  mchpususd: {
    name: 'MCHP.US/USD',
    description: 'MICROCHIP TECHNOLOGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  mckususd: {
    name: 'MCK.US/USD',
    description: 'MCKESSON CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  mdlzususd: {
    name: 'MDLZ.US/USD',
    description: 'MONDELEZ INTERNATIONAL INC-A',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  metususd: {
    name: 'MET.US/USD',
    description: 'METLIFE INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  mgmususd: {
    name: 'MGM.US/USD',
    description: 'MGM RESORTS INTERNATIONAL',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  mhgnonok: {
    name: 'MHG.NO/NOK',
    description: 'Marine Harvest ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  mksgbgbx: {
    name: 'MKS.GB/GBX',
    description: 'Marks &amp; Spencer Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  mmmususd: {
    name: 'MMM.US/USD',
    description: '3M CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  mndigbgbx: {
    name: 'MNDI.GB/GBX',
    description: 'Mondi PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  moususd: {
    name: 'MO.US/USD',
    description: 'ALTRIA GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  mpcususd: {
    name: 'MPC.US/USD',
    description: 'MARATHON PETROLEUM CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  mrkdeeur: {
    name: 'MRK.DE/EUR',
    description: 'Merck KGaA',
    minStartDate: '2015-03-24',
    dotIndex: 3
  },
  mrkususd: {
    name: 'MRK.US/USD',
    description: 'MERCK &amp; CO. INC.',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  mroususd: {
    name: 'MRO.US/USD',
    description: 'MARATHON OIL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  mrwgbgbx: {
    name: 'MRW.GB/GBX',
    description: 'WM Morrison Supermarkets PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  msususd: {
    name: 'MS.US/USD',
    description: 'MORGAN STANLEY',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  msftususd: {
    name: 'MSFT.US/USD',
    description: 'MICROSOFT CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  mtnleur: {
    name: 'MT.NL/EUR',
    description: 'ArcelorMittal',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  muususd: {
    name: 'MU.US/USD',
    description: 'MICRON TECHNOLOGY INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  muv2deeur: {
    name: 'MUV2.DE/EUR',
    description: 'Muenchener Rueckversicherungs AG',
    minStartDate: '2015-04-21',
    dotIndex: 3
  },
  nblususd: {
    name: 'NBL.US/USD',
    description: 'NOBLE ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ndasesek: {
    name: 'NDA.SE/SEK',
    description: 'Nordea Bank AB',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  neeususd: {
    name: 'NEE.US/USD',
    description: 'NEXTERA ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  nemususd: {
    name: 'NEM.US/USD',
    description: 'NEWMONT MINING CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  nes1vfieur: {
    name: 'NES1V.FI/EUR',
    description: 'Neste OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  nflxususd: {
    name: 'NFLX.US/USD',
    description: 'NETFLIX INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  nggbgbx: {
    name: 'NG.GB/GBX',
    description: 'National Grid PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  nhynonok: {
    name: 'NHY.NO/NOK',
    description: 'Norsk Hydro ASA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  nkeususd: {
    name: 'NKE.US/USD',
    description: 'NIKE INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  nldidxeur: {
    name: 'NLD.IDX/EUR',
    description: 'Netherlands 25 Index',
    minStartDate: '2013-02-27',
    dotIndex: 3
  },
  nocususd: {
    name: 'NOC.US/USD',
    description: 'NORTHROP GRUMMAN CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  novobdkdkk: {
    name: 'NOVOB.DK/DKK',
    description: 'Novo Nordisk A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  nre1vfieur: {
    name: 'NRE1V.FI/EUR',
    description: 'Nokian Renkaat OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  nrgususd: {
    name: 'NRG.US/USD',
    description: 'NRG ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  nscususd: {
    name: 'NSC.US/USD',
    description: 'NORFOLK SOUTHERN CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  nvdaususd: {
    name: 'NVDA.US/USD',
    description: 'NVIDIA CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  nwlususd: {
    name: 'NWL.US/USD',
    description: 'NEWELL BRANDS INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  nxtgbgbx: {
    name: 'NXT.GB/GBX',
    description: 'Next PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  nzdcad: {
    name: 'NZD/CAD',
    description: 'New Zealand Dollar vs Canadian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  nzdchf: {
    name: 'NZD/CHF',
    description: 'New Zealand Dollar vs Swiss Franc',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  nzdjpy: {
    name: 'NZD/JPY',
    description: 'New Zealand Dollar vs Japanese Yen',
    minStartDate: '2006-01-01',
    dotIndex: 2
  },
  nzdusd: {
    name: 'NZD/USD',
    description: 'New Zealand Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  nzymbdkdkk: {
    name: 'NZYMB.DK/DKK',
    description: 'Novozymes A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  ojuicecmdusx: {
    name: 'OJUICE.CMD/USX',
    description: 'Orange Juice',
    minStartDate: '2017-10-20',
    dotIndex: 3
  },
  okeususd: {
    name: 'OKE.US/USD',
    description: 'ONEOK INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  omcususd: {
    name: 'OMC.US/USD',
    description: 'OMNICOM GROUP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  orfreur: {
    name: 'OR.FR/EUR',
    description: "L'Oreal SA",
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  orafreur: {
    name: 'ORA.FR/EUR',
    description: 'Orange SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  orclususd: {
    name: 'ORCL.US/USD',
    description: 'ORACLE CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  orknonok: {
    name: 'ORK.NO/NOK',
    description: 'Orkla ASA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  orlyususd: {
    name: 'ORLY.US/USD',
    description: "O'REILLY AUTOMOTIVE INC",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ote1vfieur: {
    name: 'OTE1V.FI/EUR',
    description: 'Outotec OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 1
  },
  out1vfieur: {
    name: 'OUT1V.FI/EUR',
    description: 'Outokumpu OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 1
  },
  oxyususd: {
    name: 'OXY.US/USD',
    description: 'OCCIDENTAL PETROLEUM CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  pah3deeur: {
    name: 'PAH3.DE/EUR',
    description: 'Porsche Automobil Holding SE',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  payxususd: {
    name: 'PAYX.US/USD',
    description: 'PAYCHEX INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  pbrususd: {
    name: 'PBR.US/USD',
    description: 'Petroleo Brasileiro S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  pcarususd: {
    name: 'PCAR.US/USD',
    description: 'PACCAR INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  pcgususd: {
    name: 'PCG.US/USD',
    description: 'P G &amp; E CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  pclnususd: {
    name: 'PCLN.US/USD',
    description: 'PRICELINE GROUP INC/THE',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  pepususd: {
    name: 'PEP.US/USD',
    description: 'PEPSICO INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  pfcgbgbx: {
    name: 'PFC.GB/GBX',
    description: 'Petrofac Ltd',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  pfeususd: {
    name: 'PFE.US/USD',
    description: 'PFIZER INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  pgususd: {
    name: 'PG.US/USD',
    description: 'PROCTER &amp; GAMBLE CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  pgrususd: {
    name: 'PGR.US/USD',
    description: 'PROGRESSIVE CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  phususd: {
    name: 'PH.US/USD',
    description: 'PARKER HANNIFIN CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  phianleur: {
    name: 'PHIA.NL/EUR',
    description: 'Koninklijke Philips NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  plnidxpln: {
    name: 'PLN.IDX/PLN',
    description: 'Poland 20 Index',
    minStartDate: '2017-12-01',
    dotIndex: 4
  },
  pmususd: {
    name: 'PM.US/USD',
    description: 'PHILIP MORRIS INTERNATIONAL',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  pncususd: {
    name: 'PNC.US/USD',
    description: 'PNC FINANCIAL SERVICES GROUP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  pndoradkdkk: {
    name: 'PNDORA.DK/DKK',
    description: 'Pandora A/S',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  ppgususd: {
    name: 'PPG.US/USD',
    description: 'PPG INDUSTRIES INC',
    minStartDate: '2018-02-02',
    dotIndex: 3
  },
  prugbgbx: {
    name: 'PRU.GB/GBX',
    description: 'Prudential PLC',
    minStartDate: '2016-07-07',
    dotIndex: 4
  },
  pruususd: {
    name: 'PRU.US/USD',
    description: 'PRUDENTIAL FINANCIAL INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  psaususd: {
    name: 'PSA.US/USD',
    description: 'PUBLIC STORAGE',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  psmdeeur: {
    name: 'PSM.DE/EUR',
    description: 'ProSiebenSat.1 Media AG',
    minStartDate: '2015-04-20',
    dotIndex: 2
  },
  psngbgbx: {
    name: 'PSN.GB/GBX',
    description: 'Persimmon PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  psongbgbx: {
    name: 'PSON.GB/GBX',
    description: 'Pearson PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  psxususd: {
    name: 'PSX.US/USD',
    description: 'PHILLIPS 66',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  pubfreur: {
    name: 'PUB.FR/EUR',
    description: 'Publicis Groupe SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  pxdususd: {
    name: 'PXD.US/USD',
    description: 'PIONEER NATURAL RESOURCES CO',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  pyplususd: {
    name: 'PYPL.US/USD',
    description: 'PAYPAL HOLDINGS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  qcomususd: {
    name: 'QCOM.US/USD',
    description: 'QUALCOMM INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  qqqususd: {
    name: 'QQQ.US/USD',
    description: 'PowerShares QQQ ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  randnleur: {
    name: 'RAND.NL/EUR',
    description: 'Randstad Holding NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  rbgbgbx: {
    name: 'RB.GB/GBX',
    description: 'Reckitt Benckiser Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  rbiateur: {
    name: 'RBI.AT/EUR',
    description: 'Raiffeisen Bank International AG',
    minStartDate: '2016-11-02',
    dotIndex: 2
  },
  rbsgbgbx: {
    name: 'RBS.GB/GBX',
    description: 'Royal Bank of Scotland Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  rdsanleur: {
    name: 'RDSA.NL/EUR',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  rdsbgbgbx: {
    name: 'RDSB.GB/GBX',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  reeeseur: {
    name: 'REE.ES/EUR',
    description: 'Red Electrica Corp SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  regnususd: {
    name: 'REGN.US/USD',
    description: 'REGENERON PHARMACEUTICALS',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  relgbgbx: {
    name: 'REL.GB/GBX',
    description: 'Reed Elsevier PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  rennleur: {
    name: 'REN.NL/EUR',
    description: 'RELX NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  repeseur: {
    name: 'REP.ES/EUR',
    description: 'Repsol SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  rfususd: {
    name: 'RF.US/USD',
    description: 'REGIONS FINANCIAL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  rhtususd: {
    name: 'RHT.US/USD',
    description: 'RED HAT INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  rifreur: {
    name: 'RI.FR/EUR',
    description: 'Pernod-Ricard SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  riogbgbx: {
    name: 'RIO.GB/GBX',
    description: 'Rio Tinto PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  rmggbgbx: {
    name: 'RMG.GB/GBX',
    description: 'Royal Mail PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  rnofreur: {
    name: 'RNO.FR/EUR',
    description: 'Renault SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  rostususd: {
    name: 'ROST.US/USD',
    description: 'ROSS STORES INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  rrgbgbx: {
    name: 'RR.GB/GBX',
    description: 'Rolls-Royce Holdings PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  rrcususd: {
    name: 'RRC.US/USD',
    description: 'RANGE RESOURCES CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  rrsgbgbx: {
    name: 'RRS.GB/GBX',
    description: 'Randgold Resources Ltd',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  rsagbgbx: {
    name: 'RSA.GB/GBX',
    description: 'RSA Insurance Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  rtnususd: {
    name: 'RTN.US/USD',
    description: 'RAYTHEON COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  rwedeeur: {
    name: 'RWE.DE/EUR',
    description: 'RWE AG',
    minStartDate: '2015-04-16',
    dotIndex: 2
  },
  saffreur: {
    name: 'SAF.FR/EUR',
    description: 'Safran SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  saneseur: {
    name: 'SAN.ES/EUR',
    description: 'Banco Santander SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  sanfreur: {
    name: 'SAN.FR/EUR',
    description: 'Sanofi',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  sandsesek: {
    name: 'SAND.SE/SEK',
    description: 'Sandvik AB',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  sapdeeur: {
    name: 'SAP.DE/EUR',
    description: 'SAP AG',
    minStartDate: '2015-04-16',
    dotIndex: 3
  },
  sbrygbgbx: {
    name: 'SBRY.GB/GBX',
    description: 'J Sainsbury PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  sbuxususd: {
    name: 'SBUX.US/USD',
    description: 'STARBUCKS CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  scabsesek: {
    name: 'SCAB.SE/SEK',
    description: 'Svenska Cellulosa AB',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  schwususd: {
    name: 'SCHW.US/USD',
    description: 'SCHWAB (CHARLES) CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  sdfdeeur: {
    name: 'SDF.DE/EUR',
    description: 'K+S AG',
    minStartDate: '2015-04-15',
    dotIndex: 2
  },
  sebasesek: {
    name: 'SEBA.SE/SEK',
    description: 'Skandinaviska Enskilda Banken AB',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  secubsesek: {
    name: 'SECUB.SE/SEK',
    description: 'Securitas AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  sgdidxsgd: {
    name: 'SGD.IDX/SGD',
    description: 'Singapore Blue Chip Cash Index',
    minStartDate: '2017-12-01',
    dotIndex: 3
  },
  sgdjpy: {
    name: 'SGD/JPY',
    description: 'Singapore Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  sgegbgbx: {
    name: 'SGE.GB/GBX',
    description: 'Sage Group PLC/The',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  sgofreur: {
    name: 'SGO.FR/EUR',
    description: 'Cie de St-Gobain',
    minStartDate: '2016-10-31',
    dotIndex: 2
  },
  shpgbgbx: {
    name: 'SHP.GB/GBX',
    description: 'Shire PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  shwususd: {
    name: 'SHW.US/USD',
    description: 'SHERWIN-WILLIAMS COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  siedeeur: {
    name: 'SIE.DE/EUR',
    description: 'Siemens AG',
    minStartDate: '2015-04-20',
    dotIndex: 2
  },
  sjmususd: {
    name: 'SJM.US/USD',
    description: 'JM SMUCKER COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  skabsesek: {
    name: 'SKAB.SE/SEK',
    description: 'Skanska AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  skfbsesek: {
    name: 'SKFB.SE/SEK',
    description: 'SKF AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  skygbgbx: {
    name: 'SKY.GB/GBX',
    description: 'Sky Plc',
    minStartDate: '2016-07-07',
    dotIndex: 4
  },
  slvususd: {
    name: 'SLV.US/USD',
    description: 'iShares Silver Trust ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  smingbgbx: {
    name: 'SMIN.GB/GBX',
    description: 'Smiths Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  sngbgbx: {
    name: 'SN.GB/GBX',
    description: 'Smith &amp; Nephew PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  snapususd: {
    name: 'SNAP.US/USD',
    description: 'SNAP Inc',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  soususd: {
    name: 'SO.US/USD',
    description: 'SOUTHERN CO/THE',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  solbbeeur: {
    name: 'SOLB.BE/EUR',
    description: 'Solvay SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  spgususd: {
    name: 'SPG.US/USD',
    description: 'SIMON PROPERTY GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  spyususd: {
    name: 'SPY.US/USD',
    description: 'SPDR S&amp;P 500 ETF',
    minStartDate: '2017-02-16',
    dotIndex: 3
  },
  ssegbgbx: {
    name: 'SSE.GB/GBX',
    description: 'SSE PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  stangbgbx: {
    name: 'STAN.GB/GBX',
    description: 'Standard Chartered PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  stervfieur: {
    name: 'STERV.FI/EUR',
    description: 'Stora Enso OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  stiususd: {
    name: 'STI.US/USD',
    description: 'SUNTRUST BANKS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  stlnonok: {
    name: 'STL.NO/NOK',
    description: 'Statoil ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  sttususd: {
    name: 'STT.US/USD',
    description: 'STATE STREET CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  stzususd: {
    name: 'STZ.US/USD',
    description: 'CONSTELLATION BRANDS INC-A',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  sufreur: {
    name: 'SU.FR/EUR',
    description: 'Schneider Electric SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  sugarcmdusd: {
    name: 'SUGAR.CMD/USD',
    description: 'London Sugar No.5',
    minStartDate: '2017-10-02',
    dotIndex: 3
  },
  svtgbgbx: {
    name: 'SVT.GB/GBX',
    description: 'Severn Trent PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  swedasesek: {
    name: 'SWEDA.SE/SEK',
    description: 'Swedbank AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  swkususd: {
    name: 'SWK.US/USD',
    description: 'STANLEY BLACK &amp; DECKER INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  swmasesek: {
    name: 'SWMA.SE/SEK',
    description: 'Swedish Match AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  sykususd: {
    name: 'SYK.US/USD',
    description: 'STRYKER CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  symcususd: {
    name: 'SYMC.US/USD',
    description: 'SYMANTEC CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  syyususd: {
    name: 'SYY.US/USD',
    description: 'SYSCO CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  tususd: {
    name: 'T.US/USD',
    description: 'AT&amp;T INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  tapususd: {
    name: 'TAP.US/USD',
    description: 'MOLSON COORS BREWING CO -B',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  tategbgbx: {
    name: 'TATE.GB/GBX',
    description: 'Tate &amp; Lyle PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  tefeseur: {
    name: 'TEF.ES/EUR',
    description: 'Telefonica SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  telnonok: {
    name: 'TEL.NO/NOK',
    description: 'Telenor ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  tel2bsesek: {
    name: 'TEL2B.SE/SEK',
    description: 'Tele2 AB',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  tevaususd: {
    name: 'TEVA.US/USD',
    description: 'TEVA PHARMACEUTICAL-SP ADR',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  tgtususd: {
    name: 'TGT.US/USD',
    description: 'TARGET CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  tifususd: {
    name: 'TIF.US/USD',
    description: 'TIFFANY &amp; CO',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  tjxususd: {
    name: 'TJX.US/USD',
    description: 'TJX COMPANIES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  tkadeeur: {
    name: 'TKA.DE/EUR',
    description: 'ThyssenKrupp AG',
    minStartDate: '2015-04-14',
    dotIndex: 2
  },
  tls1vfieur: {
    name: 'TLS1V.FI/EUR',
    description: 'Telia Company AB',
    minStartDate: '2016-11-09',
    dotIndex: 1
  },
  tlsnsesek: {
    name: 'TLSN.SE/SEK',
    description: 'Telia Company AB',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  tltususd: {
    name: 'TLT.US/USD',
    description: 'iShares 20+ Year Treasury Bond ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  tlwgbgbx: {
    name: 'TLW.GB/GBX',
    description: 'Tullow Oil PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  tmoususd: {
    name: 'TMO.US/USD',
    description: 'THERMO FISHER SCIENTIFIC INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  tpkgbgbx: {
    name: 'TPK.GB/GBX',
    description: 'Travis Perkins PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  trowususd: {
    name: 'TROW.US/USD',
    description: 'T ROWE PRICE GROUP INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  trvususd: {
    name: 'TRV.US/USD',
    description: 'TRAVELERS COS INC/THE',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  tryjpy: {
    name: 'TRY/JPY',
    description: 'Turkish Lira vs Japanese Yen',
    minStartDate: '2010-05-09',
    dotIndex: 2
  },
  tscogbgbx: {
    name: 'TSCO.GB/GBX',
    description: 'Tesco PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  tslaususd: {
    name: 'TSLA.US/USD',
    description: 'TESLA MOTORS INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  tsmususd: {
    name: 'TSM.US/USD',
    description: 'Taiwan Semiconductor Manufacturing Company Limited',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  tsnususd: {
    name: 'TSN.US/USD',
    description: 'TYSON FOODS INC-CL A',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  tui1deeur: {
    name: 'TUI1.DE/EUR',
    description: 'TUI AG',
    minStartDate: '2015-04-15',
    dotIndex: 1
  },
  twtrususd: {
    name: 'TWTR.US/USD',
    description: 'TWITTER INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  txnususd: {
    name: 'TXN.US/USD',
    description: 'TEXAS INSTRUMENTS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ucbbeeur: {
    name: 'UCB.BE/EUR',
    description: 'UCB SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  ugfreur: {
    name: 'UG.FR/EUR',
    description: 'Peugeot SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  ukgilttrgbp: {
    name: 'UKGILT.TR/GBP',
    description: 'UK Long Gilt',
    minStartDate: '2017-12-26',
    dotIndex: 3
  },
  ultaususd: {
    name: 'ULTA.US/USD',
    description: 'ULTA SALON COSMETICS &amp; FRAGR',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ulvrgbgbx: {
    name: 'ULVR.GB/GBX',
    description: 'Unilever PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  umibeeur: {
    name: 'UMI.BE/EUR',
    description: 'Umicore SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  unanleur: {
    name: 'UNA.NL/EUR',
    description: 'Unilever NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  unhususd: {
    name: 'UNH.US/USD',
    description: 'UNITEDHEALTH GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  unpususd: {
    name: 'UNP.US/USD',
    description: 'UNION PACIFIC CORP',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  upsususd: {
    name: 'UPS.US/USD',
    description: 'UNITED PARCEL SERVICE-CL B',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  usbususd: {
    name: 'USB.US/USD',
    description: 'US BANCORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  usdcad: {
    name: 'USD/CAD',
    description: 'US Dollar vs Canadian Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  usdchf: {
    name: 'USD/CHF',
    description: 'US Dollar vs Swiss Franc',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  usdcnh: {
    name: 'USD/CNH',
    description: 'US Dollar vs Offshore Chinese Renminbi',
    minStartDate: '2012-06-27',
    dotIndex: 1
  },
  usdczk: {
    name: 'USD/CZK',
    description: 'US Dollar vs Czech Koruna',
    minStartDate: '2016-01-03',
    dotIndex: 2
  },
  usddkk: {
    name: 'USD/DKK',
    description: 'US Dollar vs Danish Krone',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  usdhkd: {
    name: 'USD/HKD',
    description: 'US Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  usdhuf: {
    name: 'USD/HUF',
    description: 'US Dollar vs Hungarian Forint',
    minStartDate: '2007-03-13',
    dotIndex: 3
  },
  usdils: {
    name: 'USD/ILS',
    description: 'US Dollar vs Israeli Shekel',
    minStartDate: '2016-12-15',
    dotIndex: 1
  },
  usdjpy: {
    name: 'USD/JPY',
    description: 'US Dollar vs Japanese Yen',
    minStartDate: '2003-05-04',
    dotIndex: 3
  },
  usdmxn: {
    name: 'USD/MXN',
    description: 'US Dollar vs Mexican Peso',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  usdnok: {
    name: 'USD/NOK',
    description: 'US Dollar vs Norwegian Krone',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  usdpln: {
    name: 'USD/PLN',
    description: 'US Dollar vs Polish Zloty',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  usdron: {
    name: 'USD/RON',
    description: 'US Dollar vs Romanian Leu',
    minStartDate: '2016-12-18',
    dotIndex: 1
  },
  usdrub: {
    name: 'USD/RUB',
    description: 'US Dollar vs Russian Ruble',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  usdsek: {
    name: 'USD/SEK',
    description: 'US Dollar vs Swedish Krona',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  usdsgd: {
    name: 'USD/SGD',
    description: 'US Dollar vs Singapore Dollar',
    minStartDate: '2004-11-16',
    dotIndex: 1
  },
  usdthb: {
    name: 'USD/THB',
    description: 'US Dollar vs Thai Baht',
    minStartDate: '2017-02-13',
    dotIndex: 2
  },
  usdtry: {
    name: 'USD/TRY',
    description: 'US Dollar vs Turkish Lira',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  usdzar: {
    name: 'USD/ZAR',
    description: 'US Dollar vs South African Rand',
    minStartDate: '1997-10-13',
    dotIndex: 2
  },
  usoususd: {
    name: 'USO.US/USD',
    description: 'United States Oil',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  utxususd: {
    name: 'UTX.US/USD',
    description: 'UNITED TECHNOLOGIES CORP',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  uugbgbx: {
    name: 'UU.GB/GBX',
    description: 'United Utilities Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  vususd: {
    name: 'V.US/USD',
    description: 'VISA INC-CLASS A SHARES',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  valeususd: {
    name: 'VALE.US/USD',
    description: 'Vale S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  veaususd: {
    name: 'VEA.US/USD',
    description: 'Vanguard FTSE Developed Markets ETF',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  vfcususd: {
    name: 'VFC.US/USD',
    description: 'VF CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  vgkususd: {
    name: 'VGK.US/USD',
    description: 'Vanguard FTSE Europe ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  viabususd: {
    name: 'VIAB.US/USD',
    description: 'VIACOM INC-CLASS B',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  viefreur: {
    name: 'VIE.FR/EUR',
    description: 'Veolia Environnement SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  vivfreur: {
    name: 'VIV.FR/EUR',
    description: 'Vivendi SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  vkfreur: {
    name: 'VK.FR/EUR',
    description: 'Vallourec SA',
    minStartDate: '2016-08-05',
    dotIndex: 1
  },
  vloususd: {
    name: 'VLO.US/USD',
    description: 'VALERO ENERGY CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  vmcususd: {
    name: 'VMC.US/USD',
    description: 'VULCAN MATERIALS CO',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  vnadeeur: {
    name: 'VNA.DE/EUR',
    description: 'Vonovia SE',
    minStartDate: '2015-04-14',
    dotIndex: 2
  },
  vnqususd: {
    name: 'VNQ.US/USD',
    description: 'Vanguard REIT ETF',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  vodgbgbx: {
    name: 'VOD.GB/GBX',
    description: 'Vodafone Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  voeateur: {
    name: 'VOE.AT/EUR',
    description: 'Voestalpine AG',
    minStartDate: '2016-11-04',
    dotIndex: 2
  },
  volvbsesek: {
    name: 'VOLVB.SE/SEK',
    description: 'Volvo AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  vow3deeur: {
    name: 'VOW3.DE/EUR',
    description: 'Volkswagen AG',
    minStartDate: '2015-04-14',
    dotIndex: 3
  },
  vpknleur: {
    name: 'VPK.NL/EUR',
    description: 'Koninklijke Vopak NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  vrtxususd: {
    name: 'VRTX.US/USD',
    description: 'VERTEX PHARMACEUTICALS INC',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  vwsdkdkk: {
    name: 'VWS.DK/DKK',
    description: 'Vestas Wind Systems A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  vxxususd: {
    name: 'VXX.US/USD',
    description: 'iPath S&amp;P 500 VIX ST Futures ETN',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  vzususd: {
    name: 'VZ.US/USD',
    description: 'VERIZON COMMUNICATIONS INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  wbaususd: {
    name: 'WBA.US/USD',
    description: 'WALGREENS BOOTS ALLIANCE INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  wdcususd: {
    name: 'WDC.US/USD',
    description: 'WESTERN DIGITAL CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  weirgbgbx: {
    name: 'WEIR.GB/GBX',
    description: 'Weir Group PLC/The',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  wfcususd: {
    name: 'WFC.US/USD',
    description: 'WELLS FARGO &amp; CO',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  whrususd: {
    name: 'WHR.US/USD',
    description: 'WHIRLPOOL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  wklnleur: {
    name: 'WKL.NL/EUR',
    description: 'Wolters Kluwer NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  wmtususd: {
    name: 'WMT.US/USD',
    description: 'WAL-MART STORES INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  wosgbgbx: {
    name: 'WOS.GB/GBX',
    description: 'Wolseley PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  wppgbgbx: {
    name: 'WPP.GB/GBX',
    description: 'WPP PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  wtbgbgbx: {
    name: 'WTB.GB/GBX',
    description: 'Whitbread PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  wynnususd: {
    name: 'WYNN.US/USD',
    description: 'WYNN RESORTS LTD',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  xususd: {
    name: 'X.US/USD',
    description: 'UNITED STATES STEEL CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  xagusd: {
    name: 'XAG/USD',
    description: 'Spot silver',
    minStartDate: '1997-08-13',
    dotIndex: 2
  },
  xauusd: {
    name: 'XAU/USD',
    description: 'Spot gold',
    minStartDate: '1999-09-01',
    dotIndex: 4
  },
  xleususd: {
    name: 'XLE.US/USD',
    description: 'Energy Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  xlfususd: {
    name: 'XLF.US/USD',
    description: 'Financial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  xliususd: {
    name: 'XLI.US/USD',
    description: 'Industrial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  xlkususd: {
    name: 'XLK.US/USD',
    description: 'Technology Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  xlnxususd: {
    name: 'XLNX.US/USD',
    description: 'XILINX INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  xlpususd: {
    name: 'XLP.US/USD',
    description: 'Consumer Staples Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  xluususd: {
    name: 'XLU.US/USD',
    description: 'Utilities Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  xlvususd: {
    name: 'XLV.US/USD',
    description: 'Health Care Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  xlyususd: {
    name: 'XLY.US/USD',
    description: 'Consumer Discretionary Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  xomususd: {
    name: 'XOM.US/USD',
    description: 'EXXON MOBIL CORP',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  xopususd: {
    name: 'XOP.US/USD',
    description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  yumususd: {
    name: 'YUM.US/USD',
    description: 'YUM! BRANDS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  zarjpy: {
    name: 'ZAR/JPY',
    description: 'South African Rand vs Japanese Yen',
    minStartDate: '1999-03-03',
    dotIndex: 1
  },
  zbhususd: {
    name: 'ZBH.US/USD',
    description: 'ZIMMER BIOMET HOLDINGS INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  }
};

export { symbols };
