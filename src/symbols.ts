const symbols = {
  AUSUSD: {
    name: 'A.US/USD',
    description: 'AGILENT TECHNOLOGIES INC',
    minStartDate: '2017-05-25',
    dotIndex: 2
  },
  AAUSUSD: {
    name: 'AA.US/USD',
    description: 'ALCOA INC',
    minStartDate: '2018-01-30',
    dotIndex: 2
  },
  AABAUSUSD: {
    name: 'AABA.US/USD',
    description: 'ALTABA INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  AALGBGBX: {
    name: 'AAL.GB/GBX',
    description: 'Anglo American PLC',
    minStartDate: '2016-08-01',
    dotIndex: 4
  },
  AALUSUSD: {
    name: 'AAL.US/USD',
    description: 'AMERICAN AIRLINES GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  AAPLUSUSD: {
    name: 'AAPL.US/USD',
    description: 'APPLE INC',
    minStartDate: '2017-01-17',
    dotIndex: 3
  },
  ABBSESEK: {
    name: 'ABB.SE/SEK',
    description: 'ABB Ltd',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  ABCUSUSD: {
    name: 'ABC.US/USD',
    description: 'AMERISOURCEBERGEN CORP',
    minStartDate: '2018-01-30',
    dotIndex: 2
  },
  ABEVUSUSD: {
    name: 'ABEV.US/USD',
    description: 'Ambev S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 1
  },
  ABFGBGBX: {
    name: 'ABF.GB/GBX',
    description: 'Associated British Foods PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  ABIBEEUR: {
    name: 'ABI.BE/EUR',
    description: 'Anheuser-Busch InBev NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ABTUSUSD: {
    name: 'ABT.US/USD',
    description: 'ABBOTT LABORATORIES',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  ACFREUR: {
    name: 'AC.FR/EUR',
    description: 'Accor SA',
    minStartDate: '2016-08-11',
    dotIndex: 2
  },
  ACAFREUR: {
    name: 'ACA.FR/EUR',
    description: 'Credit Agricole SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  ACSESEUR: {
    name: 'ACS.ES/EUR',
    description: 'ACS Actividades de Construccion y Servicios SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ACXESEUR: {
    name: 'ACX.ES/EUR',
    description: 'Acerinox SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  ADBEUSUSD: {
    name: 'ADBE.US/USD',
    description: 'ADOBE SYSTEMS INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  ADIUSUSD: {
    name: 'ADI.US/USD',
    description: 'ANALOG DEVICES INC',
    minStartDate: '2018-01-30',
    dotIndex: 3
  },
  ADMGBGBX: {
    name: 'ADM.GB/GBX',
    description: 'Admiral Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  ADPUSUSD: {
    name: 'ADP.US/USD',
    description: 'AUTOMATIC DATA PROCESSING',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ADSDEEUR: {
    name: 'ADS.DE/EUR',
    description: 'Adidas AG',
    minStartDate: '2015-03-13',
    dotIndex: 3
  },
  ADSKUSUSD: {
    name: 'ADSK.US/USD',
    description: 'AUTODESK INC',
    minStartDate: '2018-01-30',
    dotIndex: 3
  },
  AENAESEUR: {
    name: 'AENA.ES/EUR',
    description: 'Aena SA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  AETUSUSD: {
    name: 'AET.US/USD',
    description: 'AETNA INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  AFFREUR: {
    name: 'AF.FR/EUR',
    description: 'Air France-KLM',
    minStartDate: '2016-09-27',
    dotIndex: 1
  },
  AGKGBGBX: {
    name: 'AGK.GB/GBX',
    description: 'Aggreko PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  AGNNLEUR: {
    name: 'AGN.NL/EUR',
    description: 'Aegon NV',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  AGSBEEUR: {
    name: 'AGS.BE/EUR',
    description: 'Ageas',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  AHNLEUR: {
    name: 'AH.NL/EUR',
    description: 'Koninklijke Ahold Delhaize NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  AHTGBGBX: {
    name: 'AHT.GB/GBX',
    description: 'Ashtead Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  AIFREUR: {
    name: 'AI.FR/EUR',
    description: 'Air Liquide SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  AIGUSUSD: {
    name: 'AIG.US/USD',
    description: 'AMERICAN INTERNATIONAL GROUP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  AIRFREUR: {
    name: 'AIR.FR/EUR',
    description: 'Airbus Group SE',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  AKZANLEUR: {
    name: 'AKZA.NL/EUR',
    description: 'Akzo Nobel NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ALFASESEK: {
    name: 'ALFA.SE/SEK',
    description: 'Alfa Laval AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  ALLUSUSD: {
    name: 'ALL.US/USD',
    description: 'ALLSTATE CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  ALOFREUR: {
    name: 'ALO.FR/EUR',
    description: 'Alstom SA',
    minStartDate: '2016-09-27',
    dotIndex: 2
  },
  ALVDEEUR: {
    name: 'ALV.DE/EUR',
    description: 'Allianz SE',
    minStartDate: '2015-04-09',
    dotIndex: 3
  },
  ALXNUSUSD: {
    name: 'ALXN.US/USD',
    description: 'ALEXION PHARMACEUTICALS INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  AMATUSUSD: {
    name: 'AMAT.US/USD',
    description: 'APPLIED MATERIALS INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  AMDUSUSD: {
    name: 'AMD.US/USD',
    description: 'ADVANCED MICRO DEVICES',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  AMGNUSUSD: {
    name: 'AMGN.US/USD',
    description: 'AMGEN INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  AMSESEUR: {
    name: 'AMS.ES/EUR',
    description: 'Amadeus IT Holding SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  AMTUSUSD: {
    name: 'AMT.US/USD',
    description: 'AMERICAN TOWER CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  AMZNUSUSD: {
    name: 'AMZN.US/USD',
    description: 'AMAZON.COM INC',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  ANTMUSUSD: {
    name: 'ANTM.US/USD',
    description: 'ANTHEM INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ANTOGBGBX: {
    name: 'ANTO.GB/GBX',
    description: 'Antofagasta PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  APAUSUSD: {
    name: 'APA.US/USD',
    description: 'APACHE CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  APCUSUSD: {
    name: 'APC.US/USD',
    description: 'ANADARKO PETROLEUM CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  APDUSUSD: {
    name: 'APD.US/USD',
    description: 'AIR PRODUCTS &amp; CHEMICALS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ASMLNLEUR: {
    name: 'ASML.NL/EUR',
    description: 'ASML Holding NV',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  ATCOASESEK: {
    name: 'ATCOA.SE/SEK',
    description: 'Atlas Copco AB',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  ATVIUSUSD: {
    name: 'ATVI.US/USD',
    description: 'ACTIVISION BLIZZARD INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  AUDCAD: {
    name: 'AUD/CAD',
    description: 'Australian Dollar vs Canadian Dollar',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  AUDCHF: {
    name: 'AUD/CHF',
    description: 'Australian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  AUDJPY: {
    name: 'AUD/JPY',
    description: 'Australian Dollar vs Japanese Yen',
    minStartDate: '2003-11-29',
    dotIndex: 2
  },
  AUDNZD: {
    name: 'AUD/NZD',
    description: 'Australian Dollar vs New Zealand Dollar',
    minStartDate: '2006-12-08',
    dotIndex: 1
  },
  AUDSGD: {
    name: 'AUD/SGD',
    description: 'Australian Dollar vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  AUDUSD: {
    name: 'AUD/USD',
    description: 'Australian Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  AVGBGBX: {
    name: 'AV.GB/GBX',
    description: 'Aviva PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  AVBUSUSD: {
    name: 'AVB.US/USD',
    description: 'AVALONBAY COMMUNITIES INC',
    minStartDate: '2018-01-31',
    dotIndex: 3
  },
  AVGOUSUSD: {
    name: 'AVGO.US/USD',
    description: 'Broadcom Limited',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  AXPUSUSD: {
    name: 'AXP.US/USD',
    description: 'AMERICAN EXPRESS CO',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  AZNGBGBX: {
    name: 'AZN.GB/GBX',
    description: 'AstraZeneca PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  AZNUSUSD: {
    name: 'AZN.US/USD',
    description: 'AstraZeneca PLC',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  AZOUSUSD: {
    name: 'AZO.US/USD',
    description: 'AUTOZONE INC',
    minStartDate: '2017-11-02',
    dotIndex: 4
  },
  BAGBGBX: {
    name: 'BA.GB/GBX',
    description: 'BAE Systems PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  BAUSUSD: {
    name: 'BA.US/USD',
    description: 'Boeing Co',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  BABGBGBX: {
    name: 'BAB.GB/GBX',
    description: 'Babcock International Group PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  BABAUSUSD: {
    name: 'BABA.US/USD',
    description: 'ALIBABA GROUP HOLDING-SP ADR',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  BACUSUSD: {
    name: 'BAC.US/USD',
    description: 'BANK OF AMERICA CORP',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  BARCGBGBX: {
    name: 'BARC.GB/GBX',
    description: 'Barclays PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  BASDEEUR: {
    name: 'BAS.DE/EUR',
    description: 'BASF SE',
    minStartDate: '2015-04-22',
    dotIndex: 2
  },
  BATSGBGBX: {
    name: 'BATS.GB/GBX',
    description: 'British American Tobacco PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  BAYNDEEUR: {
    name: 'BAYN.DE/EUR',
    description: 'Bayer AG',
    minStartDate: '2015-03-20',
    dotIndex: 2
  },
  BBDUSUSD: {
    name: 'BBD.US/USD',
    description: 'Banco Bradesco S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  BBTUSUSD: {
    name: 'BBT.US/USD',
    description: 'BB&amp;T CORP',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  BBVAESEUR: {
    name: 'BBVA.ES/EUR',
    description: 'Banco Bilbao Vizcaya Argentaria SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  BBYUSUSD: {
    name: 'BBY.US/USD',
    description: 'BEST BUY CO INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  BDXUSUSD: {
    name: 'BDX.US/USD',
    description: 'BECTON DICKINSON AND CO',
    minStartDate: '2018-01-31',
    dotIndex: 3
  },
  BEIDEEUR: {
    name: 'BEI.DE/EUR',
    description: 'Beiersdorf AG',
    minStartDate: '2015-04-08',
    dotIndex: 2
  },
  BELGBEEUR: {
    name: 'BELG.BE/EUR',
    description: 'Proximus',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  BIDUUSUSD: {
    name: 'BIDU.US/USD',
    description: 'BAIDU INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  BIIBUSUSD: {
    name: 'BIIB.US/USD',
    description: 'BIOGEN INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  BKUSUSD: {
    name: 'BK.US/USD',
    description: 'BANK OF NEW YORK MELLON CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  BLNDGBGBX: {
    name: 'BLND.GB/GBX',
    description: 'British Land Co PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  BLTGBGBX: {
    name: 'BLT.GB/GBX',
    description: 'BHP Billiton PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  BMWDEEUR: {
    name: 'BMW.DE/EUR',
    description: 'Bayerische Motoren Werke AG',
    minStartDate: '2015-03-24',
    dotIndex: 2
  },
  BMYUSUSD: {
    name: 'BMY.US/USD',
    description: 'BRISTOL-MYERS SQUIBB CO',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  BNFREUR: {
    name: 'BN.FR/EUR',
    description: 'Danone SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  BNPFREUR: {
    name: 'BNP.FR/EUR',
    description: 'BNP Paribas SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  BNZLGBGBX: {
    name: 'BNZL.GB/GBX',
    description: 'Bunzl PLC',
    minStartDate: '2016-09-06',
    dotIndex: 4
  },
  BOSSDEEUR: {
    name: 'BOSS.DE/EUR',
    description: 'HUGO BOSS AG',
    minStartDate: '2015-04-09',
    dotIndex: 2
  },
  BPGBGBX: {
    name: 'BP.GB/GBX',
    description: 'BP PLC',
    minStartDate: '2016-09-06',
    dotIndex: 3
  },
  BPUSUSD: {
    name: 'BP.US/USD',
    description: 'BP p.l.c.',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  BRBYGBGBX: {
    name: 'BRBY.GB/GBX',
    description: 'Burberry Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  BRKBUSUSD: {
    name: 'BRKB.US/USD',
    description: 'BERKSHIRE HATHAWAY INC-CL B',
    minStartDate: '2017-11-06',
    dotIndex: 3
  },
  BSXUSUSD: {
    name: 'BSX.US/USD',
    description: 'BOSTON SCIENTIFIC CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  BTGBGBX: {
    name: 'BT.GB/GBX',
    description: 'BT Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  BTCUSD: {
    name: 'BTC/USD',
    description: 'Bitcoin vs US Dollar',
    minStartDate: '2017-05-07',
    dotIndex: 4
  },
  BUNDTREUR: {
    name: 'BUND.TR/EUR',
    description: 'Euro Bund',
    minStartDate: '2016-05-02',
    dotIndex: 3
  },
  CUSUSD: {
    name: 'C.US/USD',
    description: 'CITIGROUP INC',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  CAFREUR: {
    name: 'CA.FR/EUR',
    description: 'Carrefour SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  CABKESEUR: {
    name: 'CABK.ES/EUR',
    description: 'CaixaBank',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  CADCHF: {
    name: 'CAD/CHF',
    description: 'Canadian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  CADHKD: {
    name: 'CAD/HKD',
    description: 'Canadian Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  CADJPY: {
    name: 'CAD/JPY',
    description: 'Canadian Dollar vs Japanese Yen',
    minStartDate: '2004-10-20',
    dotIndex: 2
  },
  CAGUSUSD: {
    name: 'CAG.US/USD',
    description: 'CONAGRA FOODS INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  CAHUSUSD: {
    name: 'CAH.US/USD',
    description: 'CARDINAL HEALTH INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  CAPFREUR: {
    name: 'CAP.FR/EUR',
    description: 'Cap Gemini SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  CARLBDKDKK: {
    name: 'CARLB.DK/DKK',
    description: 'Carlsberg A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  CATUSUSD: {
    name: 'CAT.US/USD',
    description: 'CATERPILLAR INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  CBKDEEUR: {
    name: 'CBK.DE/EUR',
    description: 'Commerzbank AG',
    minStartDate: '2015-03-26',
    dotIndex: 1
  },
  CBSUSUSD: {
    name: 'CBS.US/USD',
    description: 'CBS CORP-CLASS B NON VOTING',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  CCLGBGBX: {
    name: 'CCL.GB/GBX',
    description: 'Carnival PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  CELGUSUSD: {
    name: 'CELG.US/USD',
    description: 'CELGENE CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  CFUSUSD: {
    name: 'CF.US/USD',
    description: 'CF INDUSTRIES HOLDINGS INC',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  CHFJPY: {
    name: 'CHF/JPY',
    description: 'Swiss Franc vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  CHFSGD: {
    name: 'CHF/SGD',
    description: 'Swiss Franc vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  CHIIDXUSD: {
    name: 'CHI.IDX/USD',
    description: 'China A50 Index',
    minStartDate: '2017-07-17',
    dotIndex: 5
  },
  CIUSUSD: {
    name: 'CI.US/USD',
    description: 'CIGNA CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  CLUSUSD: {
    name: 'CL.US/USD',
    description: 'COLGATE-PALMOLIVE CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  CMCSAUSUSD: {
    name: 'CMCSA.US/USD',
    description: 'COMCAST CORP-CLASS A',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  CMEUSUSD: {
    name: 'CME.US/USD',
    description: 'CME GROUP INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  CMGUSUSD: {
    name: 'CMG.US/USD',
    description: 'CHIPOTLE MEXICAN GRILL INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  CMIUSUSD: {
    name: 'CMI.US/USD',
    description: 'CUMMINS INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  CNAGBGBX: {
    name: 'CNA.GB/GBX',
    description: 'Centrica PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  COCOACMDUSD: {
    name: 'COCOA.CMD/USD',
    description: 'NY Cocoa',
    minStartDate: '2017-10-20',
    dotIndex: 4
  },
  COFFEECMDUSX: {
    name: 'COFFEE.CMD/USX',
    description: 'Coffee Arabica',
    minStartDate: '2017-12-04',
    dotIndex: 2
  },
  COLUSUSD: {
    name: 'COL.US/USD',
    description: 'ROCKWELL COLLINS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  COLOBDKDKK: {
    name: 'COLOB.DK/DKK',
    description: 'Coloplast A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  CONDEEUR: {
    name: 'CON.DE/EUR',
    description: 'Continental AG',
    minStartDate: '2015-04-08',
    dotIndex: 3
  },
  COPUSUSD: {
    name: 'COP.US/USD',
    description: 'CONOCOPHILLIPS',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  COPPERCMDUSD: {
    name: 'COPPER.CMD/USD',
    description: 'High Grade Copper',
    minStartDate: '2012-03-01',
    dotIndex: 1
  },
  COSTUSUSD: {
    name: 'COST.US/USD',
    description: 'COSTCO WHOLESALE CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  COTTONCMDUSX: {
    name: 'COTTON.CMD/USX',
    description: 'Cotton',
    minStartDate: '2017-10-20',
    dotIndex: 2
  },
  CPGGBGBX: {
    name: 'CPG.GB/GBX',
    description: 'Compass Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  CPIGBGBX: {
    name: 'CPI.GB/GBX',
    description: 'Capita PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  CRDAGBGBX: {
    name: 'CRDA.GB/GBX',
    description: 'Croda International PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  CRHGBGBX: {
    name: 'CRH.GB/GBX',
    description: 'CRH PLC',
    minStartDate: '2016-11-08',
    dotIndex: 4
  },
  CRMUSUSD: {
    name: 'CRM.US/USD',
    description: 'SALESFORCE.COM INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  CSFREUR: {
    name: 'CS.FR/EUR',
    description: 'AXA SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  CSUSUSD: {
    name: 'CS.US/USD',
    description: 'Credit Suisse Group AG',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  CSCOUSUSD: {
    name: 'CSCO.US/USD',
    description: 'CISCO SYSTEMS INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  CSXUSUSD: {
    name: 'CSX.US/USD',
    description: 'CSX CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  CTLUSUSD: {
    name: 'CTL.US/USD',
    description: 'CENTURYLINK INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  CTSHUSUSD: {
    name: 'CTSH.US/USD',
    description: 'COGNIZANT TECH SOLUTIONS-A',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  CVSUSUSD: {
    name: 'CVS.US/USD',
    description: 'CVS HEALTH CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  CVXUSUSD: {
    name: 'CVX.US/USD',
    description: 'CHEVRON CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  DUSUSD: {
    name: 'D.US/USD',
    description: 'DOMINION RESOURCES INC/VA',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  DAIDEEUR: {
    name: 'DAI.DE/EUR',
    description: 'Daimler AG',
    minStartDate: '2015-03-27',
    dotIndex: 2
  },
  DALUSUSD: {
    name: 'DAL.US/USD',
    description: 'DELTA AIR LINES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  DANSKEDKDKK: {
    name: 'DANSKE.DK/DKK',
    description: 'Danske Bank A/S',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  DB1DEEUR: {
    name: 'DB1.DE/EUR',
    description: 'Deutsche Boerse AG',
    minStartDate: '2015-04-14',
    dotIndex: 3
  },
  DBKDEEUR: {
    name: 'DBK.DE/EUR',
    description: 'Deutsche Bank AG',
    minStartDate: '2015-03-25',
    dotIndex: 1
  },
  DEUSUSD: {
    name: 'DE.US/USD',
    description: 'DEERE &amp; CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  DFSUSUSD: {
    name: 'DFS.US/USD',
    description: 'DISCOVER FINANCIAL SERVICES',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  DGFREUR: {
    name: 'DG.FR/EUR',
    description: 'Vinci SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  DGUSUSD: {
    name: 'DG.US/USD',
    description: 'DOLLAR GENERAL CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  DGEGBGBX: {
    name: 'DGE.GB/GBX',
    description: 'Diageo PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  DHIUSUSD: {
    name: 'DHI.US/USD',
    description: 'DR HORTON INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  DHRUSUSD: {
    name: 'DHR.US/USD',
    description: 'DANAHER CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  DIAESEUR: {
    name: 'DIA.ES/EUR',
    description: 'Distribuidora Internacional de Alimentacion SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  DIAUSUSD: {
    name: 'DIA.US/USD',
    description: 'SPDR Dow Jones® Industrial Average ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  DIESELCMDUSD: {
    name: 'DIESEL.CMD/USD',
    description: 'Gas oil',
    minStartDate: '2017-10-20',
    dotIndex: 3
  },
  DISUSUSD: {
    name: 'DIS.US/USD',
    description: 'WALT DISNEY CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  DLTRUSUSD: {
    name: 'DLTR.US/USD',
    description: 'DOLLAR TREE INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  DNBNONOK: {
    name: 'DNB.NO/NOK',
    description: 'DNB ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  DOLLARIDXUSD: {
    name: 'DOLLAR.IDX/USD',
    description: 'US Dollar Index',
    minStartDate: '2017-12-01',
    dotIndex: 2
  },
  DPWDEEUR: {
    name: 'DPW.DE/EUR',
    description: 'Deutsche Post AG',
    minStartDate: '2015-03-31',
    dotIndex: 2
  },
  DSMNLEUR: {
    name: 'DSM.NL/EUR',
    description: 'Koninklijke DSM NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  DTEDEEUR: {
    name: 'DTE.DE/EUR',
    description: 'Deutsche Telekom AG',
    minStartDate: '2015-03-31',
    dotIndex: 2
  },
  DUKUSUSD: {
    name: 'DUK.US/USD',
    description: 'DUKE ENERGY CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  DVAUSUSD: {
    name: 'DVA.US/USD',
    description: 'DAVITA HEALTHCARE PARTNERS I',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  DVNUSUSD: {
    name: 'DVN.US/USD',
    description: 'DEVON ENERGY CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  DVYUSUSD: {
    name: 'DVY.US/USD',
    description: 'iShares Select Dividend ETF',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  EAUSUSD: {
    name: 'EA.US/USD',
    description: 'ELECTRONIC ARTS INC',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  EBAYUSUSD: {
    name: 'EBAY.US/USD',
    description: 'EBAY INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  EBSATEUR: {
    name: 'EBS.AT/EUR',
    description: 'Erste Group Bank AG',
    minStartDate: '2016-11-04',
    dotIndex: 2
  },
  EDFFREUR: {
    name: 'EDF.FR/EUR',
    description: 'Electricite de France SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  EDPPTEUR: {
    name: 'EDP.PT/EUR',
    description: 'EDP - Energias de Portugal SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  EEMUSUSD: {
    name: 'EEM.US/USD',
    description: 'iShares MSCI Emerging Markets ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  EFAUSUSD: {
    name: 'EFA.US/USD',
    description: 'iShares MSCI EAFE ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  EFXUSUSD: {
    name: 'EFX.US/USD',
    description: 'EQUIFAX INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  EIFREUR: {
    name: 'EI.FR/EUR',
    description: 'Essilor International SA',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  EIXUSUSD: {
    name: 'EIX.US/USD',
    description: 'EDISON INTERNATIONAL',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ELUSUSD: {
    name: 'EL.US/USD',
    description: 'ESTEE LAUDER COMPANIES-CL A',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  ELEESEUR: {
    name: 'ELE.ES/EUR',
    description: 'Endesa SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ELI1VFIEUR: {
    name: 'ELI1V.FI/EUR',
    description: 'Elisa OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  ELUXBSESEK: {
    name: 'ELUXB.SE/SEK',
    description: 'Electrolux AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  EMBUSUSD: {
    name: 'EMB.US/USD',
    description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  EMRUSUSD: {
    name: 'EMR.US/USD',
    description: 'EMERSON ELECTRIC CO',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ENFREUR: {
    name: 'EN.FR/EUR',
    description: 'Bouygues SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  ENGESEUR: {
    name: 'ENG.ES/EUR',
    description: 'Enagas SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ENGIFREUR: {
    name: 'ENGI.FR/EUR',
    description: 'Engie',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  EOANDEEUR: {
    name: 'EOAN.DE/EUR',
    description: 'E.ON SE',
    minStartDate: '2015-04-20',
    dotIndex: 1
  },
  EOGUSUSD: {
    name: 'EOG.US/USD',
    description: 'EOG RESOURCES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  EQTUSUSD: {
    name: 'EQT.US/USD',
    description: 'EQT CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ERICBSESEK: {
    name: 'ERICB.SE/SEK',
    description: 'Telefonaktiebolaget LM Ericsson',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ESRXUSUSD: {
    name: 'ESRX.US/USD',
    description: 'EXPRESS SCRIPTS HOLDING CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ETHUSD: {
    name: 'ETH/USD',
    description: 'Ether vs US Dollar',
    minStartDate: '2017-12-11',
    dotIndex: 3
  },
  EURAUD: {
    name: 'EUR/AUD',
    description: 'Euro vs Australian Dollar',
    minStartDate: '2005-10-02',
    dotIndex: 1
  },
  EURCAD: {
    name: 'EUR/CAD',
    description: 'Euro vs Canadian Dollar',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  EURCHF: {
    name: 'EUR/CHF',
    description: 'Euro vs Swiss Franc',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  EURCZK: {
    name: 'EUR/CZK',
    description: 'Euro vs Czech Koruna',
    minStartDate: '2016-01-03',
    dotIndex: 2
  },
  EURDKK: {
    name: 'EUR/DKK',
    description: 'Euro vs Danish Krone',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  EURGBP: {
    name: 'EUR/GBP',
    description: 'Euro vs Pound Sterling',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  EURHKD: {
    name: 'EUR/HKD',
    description: 'Euro vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  EURHUF: {
    name: 'EUR/HUF',
    description: 'Euro vs Hungarian Forint',
    minStartDate: '2007-03-13',
    dotIndex: 3
  },
  EURJPY: {
    name: 'EUR/JPY',
    description: 'Euro vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  EURNOK: {
    name: 'EUR/NOK',
    description: 'Euro vs Norwegian Krone',
    minStartDate: '2004-10-20',
    dotIndex: 1
  },
  EURNZD: {
    name: 'EUR/NZD',
    description: 'Euro vs New Zealand Dollar',
    minStartDate: '2005-12-26',
    dotIndex: 1
  },
  EURPLN: {
    name: 'EUR/PLN',
    description: 'Euro vs Polish Zloty',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  EURRUB: {
    name: 'EUR/RUB',
    description: 'Euro vs Russian Rouble',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  EURSEK: {
    name: 'EUR/SEK',
    description: 'Euro vs Swedish Krona',
    minStartDate: '2004-10-27',
    dotIndex: 2
  },
  EURSGD: {
    name: 'EUR/SGD',
    description: 'Euro vs Singapore Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  EURTRY: {
    name: 'EUR/TRY',
    description: 'Euro vs Turkish Lira',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  EURUSD: {
    name: 'EUR/USD',
    description: 'Euro vs US Dollar',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  EWHUSUSD: {
    name: 'EWH.US/USD',
    description: 'iShares MSCI Hong Kong ETF',
    minStartDate: '2017-11-06',
    dotIndex: 2
  },
  EWJUSUSD: {
    name: 'EWJ.US/USD',
    description: 'iShares MSCI Japan ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  EWWUSUSD: {
    name: 'EWW.US/USD',
    description: 'iShares MSCI Mexico Capped',
    minStartDate: '2017-03-13',
    dotIndex: 2
  },
  EWZUSUSD: {
    name: 'EWZ.US/USD',
    description: 'iShares MSCI Brazil Capped',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  EXCUSUSD: {
    name: 'EXC.US/USD',
    description: 'EXELON CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  EXPEUSUSD: {
    name: 'EXPE.US/USD',
    description: 'EXPEDIA INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  EXPNGBGBX: {
    name: 'EXPN.GB/GBX',
    description: 'Experian PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  EZJGBGBX: {
    name: 'EZJ.GB/GBX',
    description: 'easyJet PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  EZUUSUSD: {
    name: 'EZU.US/USD',
    description: 'iShares MSCI EMU ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  BRENTCMDUSD: {
    name: 'BRENT.CMD/USD',
    description: 'US Brent Crude Oil',
    minStartDate: '2010-12-02',
    dotIndex: 2
  },
  FRAIDXEUR: {
    name: 'FRA.IDX/EUR',
    description: 'France 40 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  USA30IDXUSD: {
    name: 'USA30.IDX/USD',
    description: 'USA 30 Index',
    minStartDate: '2013-09-30',
    dotIndex: 5
  },
  DEUIDXEUR: {
    name: 'DEU.IDX/EUR',
    description: 'Germany 30 Index',
    minStartDate: '2013-09-30',
    dotIndex: 5
  },
  EUSIDXEUR: {
    name: 'EUS.IDX/EUR',
    description: 'Europe 50 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  GBRIDXGBP: {
    name: 'GBR.IDX/GBP',
    description: 'UK 100 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  HKGIDXHKD: {
    name: 'HKG.IDX/HKD',
    description: 'Hong Kong 40 Index',
    minStartDate: '2011-09-18',
    dotIndex: 5
  },
  ESPIDXEUR: {
    name: 'ESP.IDX/EUR',
    description: 'Spain 35 Index',
    minStartDate: '2012-01-02',
    dotIndex: 4
  },
  LIGHTCMDUSD: {
    name: 'LIGHT.CMD/USD',
    description: 'US Light Crude Oil',
    minStartDate: '2011-09-23',
    dotIndex: 2
  },
  JPNIDXJPY: {
    name: 'JPN.IDX/JPY',
    description: 'Japan 225',
    minStartDate: '2011-09-18',
    dotIndex: 5
  },
  USATECHIDXUSD: {
    name: 'USATECH.IDX/USD',
    description: 'USA 100 Technical Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  USA500IDXUSD: {
    name: 'USA500.IDX/USD',
    description: 'USA 500 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  CHEIDXCHF: {
    name: 'CHE.IDX/CHF',
    description: 'Switzerland 20 Index',
    minStartDate: '2011-09-18',
    dotIndex: 4
  },
  AUSIDXAUD: {
    name: 'AUS.IDX/AUD',
    description: 'Australia 200 Index',
    minStartDate: '2013-01-02',
    dotIndex: 4
  },
  FUSUSD: {
    name: 'F.US/USD',
    description: 'FORD MOTOR CO',
    minStartDate: '2017-11-02',
    dotIndex: 1
  },
  FBUSUSD: {
    name: 'FB.US/USD',
    description: 'FACEBOOK INC-A',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  FCXUSUSD: {
    name: 'FCX.US/USD',
    description: 'FREEPORT-MCMORAN INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  FDXUSUSD: {
    name: 'FDX.US/USD',
    description: 'FEDEX CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  FEUSUSD: {
    name: 'FE.US/USD',
    description: 'FIRSTENERGY CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  FERESEUR: {
    name: 'FER.ES/EUR',
    description: 'Ferrovial SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  FMEDEEUR: {
    name: 'FME.DE/EUR',
    description: 'Fresenius Medical Care AG &amp; Co KGaA',
    minStartDate: '2015-04-01',
    dotIndex: 2
  },
  FOXAUSUSD: {
    name: 'FOXA.US/USD',
    description: 'TWENTY-FIRST CENTURY FOX-A',
    minStartDate: '2018-01-31',
    dotIndex: 2
  },
  FPFREUR: {
    name: 'FP.FR/EUR',
    description: 'Total SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  FRFREUR: {
    name: 'FR.FR/EUR',
    description: 'Valeo SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  FREDEEUR: {
    name: 'FRE.DE/EUR',
    description: 'Fresenius SE &amp; Co KGaA',
    minStartDate: '2015-04-10',
    dotIndex: 2
  },
  FRESGBGBX: {
    name: 'FRES.GB/GBX',
    description: 'Fresnillo PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  FXIUSUSD: {
    name: 'FXI.US/USD',
    description: 'iShares China Large-Cap ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  GALPPTEUR: {
    name: 'GALP.PT/EUR',
    description: 'Galp Energia SGPS SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  GAMESEUR: {
    name: 'GAM.ES/EUR',
    description: 'Gamesa Corporacion Tecnologica SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  GASCMDUSD: {
    name: 'GAS.CMD/USD',
    description: 'Natural Gas',
    minStartDate: '2012-08-20',
    dotIndex: 1
  },
  GASESEUR: {
    name: 'GAS.ES/EUR',
    description: 'Gas Natural SDG SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  GBPAUD: {
    name: 'GBP/AUD',
    description: 'Pound Sterling vs Australian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  GBPCAD: {
    name: 'GBP/CAD',
    description: 'Pound Sterling vs Canadian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  GBPCHF: {
    name: 'GBP/CHF',
    description: 'Pound Sterling vs Swiss Franc',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  GBPJPY: {
    name: 'GBP/JPY',
    description: 'Pound Sterling vs Japanese Yen',
    minStartDate: '2003-08-03',
    dotIndex: 3
  },
  GBPNZD: {
    name: 'GBP/NZD',
    description: 'Pound Sterling vs New Zealand Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  GBPUSD: {
    name: 'GBP/USD',
    description: 'Pound Sterling vs US Dollar',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  GDXUSUSD: {
    name: 'GDX.US/USD',
    description: 'VanEck Vectors Gold Miners ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  GDXJUSUSD: {
    name: 'GDXJ.US/USD',
    description: 'VanEck Vectors Junior Gold Miners ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  GEUSUSD: {
    name: 'GE.US/USD',
    description: 'GENERAL ELECTRIC CO',
    minStartDate: '2017-01-19',
    dotIndex: 1
  },
  GETIBSESEK: {
    name: 'GETIB.SE/SEK',
    description: 'Getinge AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  GFSGBGBX: {
    name: 'GFS.GB/GBX',
    description: 'G4S PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  GILDUSUSD: {
    name: 'GILD.US/USD',
    description: 'GILEAD SCIENCES INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  GISUSUSD: {
    name: 'GIS.US/USD',
    description: 'GENERAL MILLS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  GLDUSUSD: {
    name: 'GLD.US/USD',
    description: 'SPDR Gold Shares ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  GLEFREUR: {
    name: 'GLE.FR/EUR',
    description: 'Societe Generale SA',
    minStartDate: '2016-09-30',
    dotIndex: 2
  },
  GLENGBGBX: {
    name: 'GLEN.GB/GBX',
    description: 'Glencore PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  GLWUSUSD: {
    name: 'GLW.US/USD',
    description: 'CORNING INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  GMUSUSD: {
    name: 'GM.US/USD',
    description: 'GENERAL MOTORS CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  GOOGUSUSD: {
    name: 'GOOG.US/USD',
    description: 'ALPHABET INC-CL C',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  GOOGLUSUSD: {
    name: 'GOOGL.US/USD',
    description: 'ALPHABET INC-CL A',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  GPSUSUSD: {
    name: 'GPS.US/USD',
    description: 'GAP INC/THE',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  GSUSUSD: {
    name: 'GS.US/USD',
    description: 'GOLDMAN SACHS GROUP INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  GTONLEUR: {
    name: 'GTO.NL/EUR',
    description: 'Gemalto NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  GWWUSUSD: {
    name: 'GWW.US/USD',
    description: 'WW GRAINGER INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  HALUSUSD: {
    name: 'HAL.US/USD',
    description: 'HALLIBURTON CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  HCNUSUSD: {
    name: 'HCN.US/USD',
    description: 'WELLTOWER INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  HCPUSUSD: {
    name: 'HCP.US/USD',
    description: 'HCP INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  HDUSUSD: {
    name: 'HD.US/USD',
    description: 'HOME DEPOT INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  HEIDEEUR: {
    name: 'HEI.DE/EUR',
    description: 'HeidelbergCement AG',
    minStartDate: '2015-04-02',
    dotIndex: 2
  },
  HEIANLEUR: {
    name: 'HEIA.NL/EUR',
    description: 'Heineken NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  HEN3DEEUR: {
    name: 'HEN3.DE/EUR',
    description: 'Henkel AG &amp; Co KGaA',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  HESUSUSD: {
    name: 'HES.US/USD',
    description: 'HESS CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  HKDJPY: {
    name: 'HKD/JPY',
    description: 'Hong Kong Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  HMBSESEK: {
    name: 'HMB.SE/SEK',
    description: 'Hennes &amp; Mauritz AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  HMSOGBGBX: {
    name: 'HMSO.GB/GBX',
    description: 'Hammerson PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  HONUSUSD: {
    name: 'HON.US/USD',
    description: 'HONEYWELL INTERNATIONAL INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  HPQUSUSD: {
    name: 'HPQ.US/USD',
    description: 'HP INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  HSBAGBGBX: {
    name: 'HSBA.GB/GBX',
    description: 'HSBC Holdings PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  HUMUSUSD: {
    name: 'HUM.US/USD',
    description: 'HUMANA INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  IAGGBGBX: {
    name: 'IAG.GB/GBX',
    description: 'International Consolidated Airlines Grou',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  IBBUSUSD: {
    name: 'IBB.US/USD',
    description: 'iShares Nasdaq Biotechnology ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  IBEESEUR: {
    name: 'IBE.ES/EUR',
    description: 'Iberdrola SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  IBMUSUSD: {
    name: 'IBM.US/USD',
    description: 'INTL BUSINESS MACHINES CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  ICEUSUSD: {
    name: 'ICE.US/USD',
    description: 'INTERCONTINENTAL EXCHANGE IN',
    minStartDate: '2017-11-06',
    dotIndex: 2
  },
  IEFUSUSD: {
    name: 'IEF.US/USD',
    description: 'iShares 7-10 Year Treasury Bond ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  IFXDEEUR: {
    name: 'IFX.DE/EUR',
    description: 'Infineon Technologies AG',
    minStartDate: '2015-04-13',
    dotIndex: 2
  },
  IHGGBGBX: {
    name: 'IHG.GB/GBX',
    description: 'InterContinental Hotels Group PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  IJHUSUSD: {
    name: 'IJH.US/USD',
    description: 'iShares Core S&amp;P Mid-Cap ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  IJRUSUSD: {
    name: 'IJR.US/USD',
    description: 'iShares Core S&amp;P Small-Cap ETF',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  ILMNUSUSD: {
    name: 'ILMN.US/USD',
    description: 'ILLUMINA INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  IMTGBGBX: {
    name: 'IMT.GB/GBX',
    description: 'Imperial Brands Plc',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  INDIDXUSD: {
    name: 'IND.IDX/USD',
    description: 'India 50 Index',
    minStartDate: '2017-12-01',
    dotIndex: 5
  },
  INGANLEUR: {
    name: 'INGA.NL/EUR',
    description: 'ING Groep NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  INTCUSUSD: {
    name: 'INTC.US/USD',
    description: 'INTEL CORP',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  INTUUSUSD: {
    name: 'INTU.US/USD',
    description: 'INTUIT INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  INVEBSESEK: {
    name: 'INVEB.SE/SEK',
    description: 'Investor AB',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  IPGUSUSD: {
    name: 'IPG.US/USD',
    description: 'INTERPUBLIC GROUP OF COS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ISATGBGBX: {
    name: 'ISAT.GB/GBX',
    description: 'Inmarsat PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  ISRGUSUSD: {
    name: 'ISRG.US/USD',
    description: 'INTUITIVE SURGICAL INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  ITRKGBGBX: {
    name: 'ITRK.GB/GBX',
    description: 'Intertek Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  ITUBUSUSD: {
    name: 'ITUB.US/USD',
    description: 'Itau Unibanco Holding S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 1
  },
  ITVGBGBX: {
    name: 'ITV.GB/GBX',
    description: 'ITV PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  ITWUSUSD: {
    name: 'ITW.US/USD',
    description: 'ILLINOIS TOOL WORKS',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  ITXESEUR: {
    name: 'ITX.ES/EUR',
    description: 'Inditex SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  IVEUSUSD: {
    name: 'IVE.US/USD',
    description: 'iShares S&amp;P 500 Value ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  IVWUSUSD: {
    name: 'IVW.US/USD',
    description: 'iShares S&amp;P 500 Growth ETF',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  IWDUSUSD: {
    name: 'IWD.US/USD',
    description: 'iShares Russell 1000 Value ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  IWFUSUSD: {
    name: 'IWF.US/USD',
    description: 'iShares Russell 1000 Growth ETF',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  IWMUSUSD: {
    name: 'IWM.US/USD',
    description: 'iShares Russell 2000 ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  IYRUSUSD: {
    name: 'IYR.US/USD',
    description: 'iShares U.S. Real Estate ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  JCIUSUSD: {
    name: 'JCI.US/USD',
    description: 'JOHNSON CONTROLS INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  JNJUSUSD: {
    name: 'JNJ.US/USD',
    description: 'JOHNSON &amp; JOHNSON',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  JNKUSUSD: {
    name: 'JNK.US/USD',
    description: 'SPDR Barclays Capital High Yield Bond ETF',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  JPMUSUSD: {
    name: 'JPM.US/USD',
    description: 'JPMORGAN CHASE &amp; CO',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  JWNUSUSD: {
    name: 'JWN.US/USD',
    description: 'NORDSTROM INC',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  KUSUSD: {
    name: 'K.US/USD',
    description: 'KELLOGG CO',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  KBCBEEUR: {
    name: 'KBC.BE/EUR',
    description: 'KBC Groep NV',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  KERFREUR: {
    name: 'KER.FR/EUR',
    description: 'Kering',
    minStartDate: '2016-09-30',
    dotIndex: 3
  },
  KEYUSUSD: {
    name: 'KEY.US/USD',
    description: 'KEYCORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  KGFGBGBX: {
    name: 'KGF.GB/GBX',
    description: 'Kingfisher PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  KHCUSUSD: {
    name: 'KHC.US/USD',
    description: 'KRAFT HEINZ CO/THE',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  KMBUSUSD: {
    name: 'KMB.US/USD',
    description: 'KIMBERLY-CLARK CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  KMIUSUSD: {
    name: 'KMI.US/USD',
    description: 'KINDER MORGAN INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  KOUSUSD: {
    name: 'KO.US/USD',
    description: 'COCA-COLA CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  KPNNLEUR: {
    name: 'KPN.NL/EUR',
    description: 'Koninklijke KPN NV',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  KRUSUSD: {
    name: 'KR.US/USD',
    description: 'KROGER CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  KSSUSUSD: {
    name: 'KSS.US/USD',
    description: 'KOHLS CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  LUSUSD: {
    name: 'L.US/USD',
    description: 'LOEWS CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  LANDGBGBX: {
    name: 'LAND.GB/GBX',
    description: 'Land Securities Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  LENUSUSD: {
    name: 'LEN.US/USD',
    description: 'LENNAR CORP-A',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  LGENGBGBX: {
    name: 'LGEN.GB/GBX',
    description: 'Legal &amp; General Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  LHADEEUR: {
    name: 'LHA.DE/EUR',
    description: 'Deutsche Lufthansa AG',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  LIFREUR: {
    name: 'LI.FR/EUR',
    description: 'Klepierre',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  LINDEEUR: {
    name: 'LIN.DE/EUR',
    description: 'Linde AG',
    minStartDate: '2015-04-21',
    dotIndex: 3
  },
  LLOYGBGBX: {
    name: 'LLOY.GB/GBX',
    description: 'Lloyds Banking Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 2
  },
  LLYUSUSD: {
    name: 'LLY.US/USD',
    description: 'ELI LILLY &amp; CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  LMTUSUSD: {
    name: 'LMT.US/USD',
    description: 'LOCKHEED MARTIN CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  LOWUSUSD: {
    name: 'LOW.US/USD',
    description: "LOWE'S COS INC",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  LRFREUR: {
    name: 'LR.FR/EUR',
    description: 'Legrand SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  LRCXUSUSD: {
    name: 'LRCX.US/USD',
    description: 'LAM RESEARCH CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  LSEGBGBX: {
    name: 'LSE.GB/GBX',
    description: 'London Stock Exchange Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  LUVUSUSD: {
    name: 'LUV.US/USD',
    description: 'SOUTHWEST AIRLINES CO',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  LVSUSUSD: {
    name: 'LVS.US/USD',
    description: 'Las Vegas Sands Corp.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  LXSDEEUR: {
    name: 'LXS.DE/EUR',
    description: 'Lanxess AG',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  MUSUSD: {
    name: 'M.US/USD',
    description: "MACY'S INC",
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MAUSUSD: {
    name: 'MA.US/USD',
    description: 'MASTERCARD INC-CLASS A',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  MAERSKBDKDKK: {
    name: 'MAERSKB.DK/DKK',
    description: 'AP Moeller - Maersk A/S',
    minStartDate: '2016-11-08',
    dotIndex: 4
  },
  MARUSUSD: {
    name: 'MAR.US/USD',
    description: 'MARRIOTT INTERNATIONAL -CL A',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  MATUSUSD: {
    name: 'MAT.US/USD',
    description: 'MATTEL INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  MCFREUR: {
    name: 'MC.FR/EUR',
    description: 'LVMH Moet Hennessy Louis Vuitton SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  MCDUSUSD: {
    name: 'MCD.US/USD',
    description: "MCDONALD'S CORP",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  MCHPUSUSD: {
    name: 'MCHP.US/USD',
    description: 'MICROCHIP TECHNOLOGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  MCKUSUSD: {
    name: 'MCK.US/USD',
    description: 'MCKESSON CORP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  MDLZUSUSD: {
    name: 'MDLZ.US/USD',
    description: 'MONDELEZ INTERNATIONAL INC-A',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  METUSUSD: {
    name: 'MET.US/USD',
    description: 'METLIFE INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MGMUSUSD: {
    name: 'MGM.US/USD',
    description: 'MGM RESORTS INTERNATIONAL',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MHGNONOK: {
    name: 'MHG.NO/NOK',
    description: 'Marine Harvest ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  MKSGBGBX: {
    name: 'MKS.GB/GBX',
    description: 'Marks &amp; Spencer Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  MMMUSUSD: {
    name: 'MMM.US/USD',
    description: '3M CO',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  MNDIGBGBX: {
    name: 'MNDI.GB/GBX',
    description: 'Mondi PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  MOUSUSD: {
    name: 'MO.US/USD',
    description: 'ALTRIA GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MPCUSUSD: {
    name: 'MPC.US/USD',
    description: 'MARATHON PETROLEUM CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  MRKDEEUR: {
    name: 'MRK.DE/EUR',
    description: 'Merck KGaA',
    minStartDate: '2015-03-24',
    dotIndex: 3
  },
  MRKUSUSD: {
    name: 'MRK.US/USD',
    description: 'MERCK &amp; CO. INC.',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MROUSUSD: {
    name: 'MRO.US/USD',
    description: 'MARATHON OIL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  MRWGBGBX: {
    name: 'MRW.GB/GBX',
    description: 'WM Morrison Supermarkets PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  MSUSUSD: {
    name: 'MS.US/USD',
    description: 'MORGAN STANLEY',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MSFTUSUSD: {
    name: 'MSFT.US/USD',
    description: 'MICROSOFT CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  MTNLEUR: {
    name: 'MT.NL/EUR',
    description: 'ArcelorMittal',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  MUUSUSD: {
    name: 'MU.US/USD',
    description: 'MICRON TECHNOLOGY INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  MUV2DEEUR: {
    name: 'MUV2.DE/EUR',
    description: 'Muenchener Rueckversicherungs AG',
    minStartDate: '2015-04-21',
    dotIndex: 3
  },
  NBLUSUSD: {
    name: 'NBL.US/USD',
    description: 'NOBLE ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  NDASESEK: {
    name: 'NDA.SE/SEK',
    description: 'Nordea Bank AB',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  NEEUSUSD: {
    name: 'NEE.US/USD',
    description: 'NEXTERA ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  NEMUSUSD: {
    name: 'NEM.US/USD',
    description: 'NEWMONT MINING CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  NES1VFIEUR: {
    name: 'NES1V.FI/EUR',
    description: 'Neste OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  NFLXUSUSD: {
    name: 'NFLX.US/USD',
    description: 'NETFLIX INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  NGGBGBX: {
    name: 'NG.GB/GBX',
    description: 'National Grid PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  NHYNONOK: {
    name: 'NHY.NO/NOK',
    description: 'Norsk Hydro ASA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  NKEUSUSD: {
    name: 'NKE.US/USD',
    description: 'NIKE INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  NLDIDXEUR: {
    name: 'NLD.IDX/EUR',
    description: 'Netherlands 25 Index',
    minStartDate: '2013-02-27',
    dotIndex: 3
  },
  NOCUSUSD: {
    name: 'NOC.US/USD',
    description: 'NORTHROP GRUMMAN CORP',
    minStartDate: '2017-05-11',
    dotIndex: 3
  },
  NOVOBDKDKK: {
    name: 'NOVOB.DK/DKK',
    description: 'Novo Nordisk A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  NRE1VFIEUR: {
    name: 'NRE1V.FI/EUR',
    description: 'Nokian Renkaat OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  NRGUSUSD: {
    name: 'NRG.US/USD',
    description: 'NRG ENERGY INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  NSCUSUSD: {
    name: 'NSC.US/USD',
    description: 'NORFOLK SOUTHERN CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  NVDAUSUSD: {
    name: 'NVDA.US/USD',
    description: 'NVIDIA CORP',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  NWLUSUSD: {
    name: 'NWL.US/USD',
    description: 'NEWELL BRANDS INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  NXTGBGBX: {
    name: 'NXT.GB/GBX',
    description: 'Next PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  NZDCAD: {
    name: 'NZD/CAD',
    description: 'New Zealand Dollar vs Canadian Dollar',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  NZDCHF: {
    name: 'NZD/CHF',
    description: 'New Zealand Dollar vs Swiss Franc',
    minStartDate: '2006-01-01',
    dotIndex: 1
  },
  NZDJPY: {
    name: 'NZD/JPY',
    description: 'New Zealand Dollar vs Japanese Yen',
    minStartDate: '2006-01-01',
    dotIndex: 2
  },
  NZDUSD: {
    name: 'NZD/USD',
    description: 'New Zealand Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  NZYMBDKDKK: {
    name: 'NZYMB.DK/DKK',
    description: 'Novozymes A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  OJUICECMDUSX: {
    name: 'OJUICE.CMD/USX',
    description: 'Orange Juice',
    minStartDate: '2017-10-20',
    dotIndex: 3
  },
  OKEUSUSD: {
    name: 'OKE.US/USD',
    description: 'ONEOK INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  OMCUSUSD: {
    name: 'OMC.US/USD',
    description: 'OMNICOM GROUP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ORFREUR: {
    name: 'OR.FR/EUR',
    description: "L'Oreal SA",
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  ORAFREUR: {
    name: 'ORA.FR/EUR',
    description: 'Orange SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  ORCLUSUSD: {
    name: 'ORCL.US/USD',
    description: 'ORACLE CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  ORKNONOK: {
    name: 'ORK.NO/NOK',
    description: 'Orkla ASA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  ORLYUSUSD: {
    name: 'ORLY.US/USD',
    description: "O'REILLY AUTOMOTIVE INC",
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  OTE1VFIEUR: {
    name: 'OTE1V.FI/EUR',
    description: 'Outotec OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 1
  },
  OUT1VFIEUR: {
    name: 'OUT1V.FI/EUR',
    description: 'Outokumpu OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 1
  },
  OXYUSUSD: {
    name: 'OXY.US/USD',
    description: 'OCCIDENTAL PETROLEUM CORP',
    minStartDate: '2017-05-11',
    dotIndex: 2
  },
  PAH3DEEUR: {
    name: 'PAH3.DE/EUR',
    description: 'Porsche Automobil Holding SE',
    minStartDate: '2015-04-21',
    dotIndex: 2
  },
  PAYXUSUSD: {
    name: 'PAYX.US/USD',
    description: 'PAYCHEX INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  PBRUSUSD: {
    name: 'PBR.US/USD',
    description: 'Petroleo Brasileiro S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  PCARUSUSD: {
    name: 'PCAR.US/USD',
    description: 'PACCAR INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  PCGUSUSD: {
    name: 'PCG.US/USD',
    description: 'P G &amp; E CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  PCLNUSUSD: {
    name: 'PCLN.US/USD',
    description: 'PRICELINE GROUP INC/THE',
    minStartDate: '2017-01-19',
    dotIndex: 4
  },
  PEPUSUSD: {
    name: 'PEP.US/USD',
    description: 'PEPSICO INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  PFCGBGBX: {
    name: 'PFC.GB/GBX',
    description: 'Petrofac Ltd',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  PFEUSUSD: {
    name: 'PFE.US/USD',
    description: 'PFIZER INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  PGUSUSD: {
    name: 'PG.US/USD',
    description: 'PROCTER &amp; GAMBLE CO/THE',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  PGRUSUSD: {
    name: 'PGR.US/USD',
    description: 'PROGRESSIVE CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  PHUSUSD: {
    name: 'PH.US/USD',
    description: 'PARKER HANNIFIN CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  PHIANLEUR: {
    name: 'PHIA.NL/EUR',
    description: 'Koninklijke Philips NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  PLNIDXPLN: {
    name: 'PLN.IDX/PLN',
    description: 'Poland 20 Index',
    minStartDate: '2017-12-01',
    dotIndex: 4
  },
  PMUSUSD: {
    name: 'PM.US/USD',
    description: 'PHILIP MORRIS INTERNATIONAL',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  PNCUSUSD: {
    name: 'PNC.US/USD',
    description: 'PNC FINANCIAL SERVICES GROUP',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  PNDORADKDKK: {
    name: 'PNDORA.DK/DKK',
    description: 'Pandora A/S',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  PPGUSUSD: {
    name: 'PPG.US/USD',
    description: 'PPG INDUSTRIES INC',
    minStartDate: '2018-02-02',
    dotIndex: 3
  },
  PRUGBGBX: {
    name: 'PRU.GB/GBX',
    description: 'Prudential PLC',
    minStartDate: '2016-07-07',
    dotIndex: 4
  },
  PRUUSUSD: {
    name: 'PRU.US/USD',
    description: 'PRUDENTIAL FINANCIAL INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  PSAUSUSD: {
    name: 'PSA.US/USD',
    description: 'PUBLIC STORAGE',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  PSMDEEUR: {
    name: 'PSM.DE/EUR',
    description: 'ProSiebenSat.1 Media AG',
    minStartDate: '2015-04-20',
    dotIndex: 2
  },
  PSNGBGBX: {
    name: 'PSN.GB/GBX',
    description: 'Persimmon PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  PSONGBGBX: {
    name: 'PSON.GB/GBX',
    description: 'Pearson PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  PSXUSUSD: {
    name: 'PSX.US/USD',
    description: 'PHILLIPS 66',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  PUBFREUR: {
    name: 'PUB.FR/EUR',
    description: 'Publicis Groupe SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  PXDUSUSD: {
    name: 'PXD.US/USD',
    description: 'PIONEER NATURAL RESOURCES CO',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  PYPLUSUSD: {
    name: 'PYPL.US/USD',
    description: 'PAYPAL HOLDINGS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  QCOMUSUSD: {
    name: 'QCOM.US/USD',
    description: 'QUALCOMM INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  QQQUSUSD: {
    name: 'QQQ.US/USD',
    description: 'PowerShares QQQ ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  RANDNLEUR: {
    name: 'RAND.NL/EUR',
    description: 'Randstad Holding NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  RBGBGBX: {
    name: 'RB.GB/GBX',
    description: 'Reckitt Benckiser Group PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  RBIATEUR: {
    name: 'RBI.AT/EUR',
    description: 'Raiffeisen Bank International AG',
    minStartDate: '2016-11-02',
    dotIndex: 2
  },
  RBSGBGBX: {
    name: 'RBS.GB/GBX',
    description: 'Royal Bank of Scotland Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  RDSANLEUR: {
    name: 'RDSA.NL/EUR',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  RDSBGBGBX: {
    name: 'RDSB.GB/GBX',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-01',
    dotIndex: 4
  },
  REEESEUR: {
    name: 'REE.ES/EUR',
    description: 'Red Electrica Corp SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  REGNUSUSD: {
    name: 'REGN.US/USD',
    description: 'REGENERON PHARMACEUTICALS',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  RELGBGBX: {
    name: 'REL.GB/GBX',
    description: 'Reed Elsevier PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  RENNLEUR: {
    name: 'REN.NL/EUR',
    description: 'RELX NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  REPESEUR: {
    name: 'REP.ES/EUR',
    description: 'Repsol SA',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  RFUSUSD: {
    name: 'RF.US/USD',
    description: 'REGIONS FINANCIAL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  RHTUSUSD: {
    name: 'RHT.US/USD',
    description: 'RED HAT INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  RIFREUR: {
    name: 'RI.FR/EUR',
    description: 'Pernod-Ricard SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  RIOGBGBX: {
    name: 'RIO.GB/GBX',
    description: 'Rio Tinto PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  RMGGBGBX: {
    name: 'RMG.GB/GBX',
    description: 'Royal Mail PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  RNOFREUR: {
    name: 'RNO.FR/EUR',
    description: 'Renault SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  ROSTUSUSD: {
    name: 'ROST.US/USD',
    description: 'ROSS STORES INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  RRGBGBX: {
    name: 'RR.GB/GBX',
    description: 'Rolls-Royce Holdings PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  RRCUSUSD: {
    name: 'RRC.US/USD',
    description: 'RANGE RESOURCES CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  RRSGBGBX: {
    name: 'RRS.GB/GBX',
    description: 'Randgold Resources Ltd',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  RSAGBGBX: {
    name: 'RSA.GB/GBX',
    description: 'RSA Insurance Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  RTNUSUSD: {
    name: 'RTN.US/USD',
    description: 'RAYTHEON COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  RWEDEEUR: {
    name: 'RWE.DE/EUR',
    description: 'RWE AG',
    minStartDate: '2015-04-16',
    dotIndex: 2
  },
  SAFFREUR: {
    name: 'SAF.FR/EUR',
    description: 'Safran SA',
    minStartDate: '2016-08-05',
    dotIndex: 3
  },
  SANESEUR: {
    name: 'SAN.ES/EUR',
    description: 'Banco Santander SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  SANFREUR: {
    name: 'SAN.FR/EUR',
    description: 'Sanofi',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  SANDSESEK: {
    name: 'SAND.SE/SEK',
    description: 'Sandvik AB',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  SAPDEEUR: {
    name: 'SAP.DE/EUR',
    description: 'SAP AG',
    minStartDate: '2015-04-16',
    dotIndex: 3
  },
  SBRYGBGBX: {
    name: 'SBRY.GB/GBX',
    description: 'J Sainsbury PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  SBUXUSUSD: {
    name: 'SBUX.US/USD',
    description: 'STARBUCKS CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  SCABSESEK: {
    name: 'SCAB.SE/SEK',
    description: 'Svenska Cellulosa AB',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  SCHWUSUSD: {
    name: 'SCHW.US/USD',
    description: 'SCHWAB (CHARLES) CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  SDFDEEUR: {
    name: 'SDF.DE/EUR',
    description: 'K+S AG',
    minStartDate: '2015-04-15',
    dotIndex: 2
  },
  SEBASESEK: {
    name: 'SEBA.SE/SEK',
    description: 'Skandinaviska Enskilda Banken AB',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  SECUBSESEK: {
    name: 'SECUB.SE/SEK',
    description: 'Securitas AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  SGDIDXSGD: {
    name: 'SGD.IDX/SGD',
    description: 'Singapore Blue Chip Cash Index',
    minStartDate: '2017-12-01',
    dotIndex: 3
  },
  SGDJPY: {
    name: 'SGD/JPY',
    description: 'Singapore Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  SGEGBGBX: {
    name: 'SGE.GB/GBX',
    description: 'Sage Group PLC/The',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  SGOFREUR: {
    name: 'SGO.FR/EUR',
    description: 'Cie de St-Gobain',
    minStartDate: '2016-10-31',
    dotIndex: 2
  },
  SHPGBGBX: {
    name: 'SHP.GB/GBX',
    description: 'Shire PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  SHWUSUSD: {
    name: 'SHW.US/USD',
    description: 'SHERWIN-WILLIAMS COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  SIEDEEUR: {
    name: 'SIE.DE/EUR',
    description: 'Siemens AG',
    minStartDate: '2015-04-20',
    dotIndex: 2
  },
  SJMUSUSD: {
    name: 'SJM.US/USD',
    description: 'JM SMUCKER COMPANY',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  SKABSESEK: {
    name: 'SKAB.SE/SEK',
    description: 'Skanska AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  SKFBSESEK: {
    name: 'SKFB.SE/SEK',
    description: 'SKF AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  SKYGBGBX: {
    name: 'SKY.GB/GBX',
    description: 'Sky Plc',
    minStartDate: '2016-07-07',
    dotIndex: 4
  },
  SLVUSUSD: {
    name: 'SLV.US/USD',
    description: 'iShares Silver Trust ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  SMINGBGBX: {
    name: 'SMIN.GB/GBX',
    description: 'Smiths Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  SNGBGBX: {
    name: 'SN.GB/GBX',
    description: 'Smith &amp; Nephew PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  SNAPUSUSD: {
    name: 'SNAP.US/USD',
    description: 'SNAP Inc',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  SOUSUSD: {
    name: 'SO.US/USD',
    description: 'SOUTHERN CO/THE',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  SOLBBEEUR: {
    name: 'SOLB.BE/EUR',
    description: 'Solvay SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  SPGUSUSD: {
    name: 'SPG.US/USD',
    description: 'SIMON PROPERTY GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  SPYUSUSD: {
    name: 'SPY.US/USD',
    description: 'SPDR S&amp;P 500 ETF',
    minStartDate: '2017-02-16',
    dotIndex: 3
  },
  SSEGBGBX: {
    name: 'SSE.GB/GBX',
    description: 'SSE PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  STANGBGBX: {
    name: 'STAN.GB/GBX',
    description: 'Standard Chartered PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  STERVFIEUR: {
    name: 'STERV.FI/EUR',
    description: 'Stora Enso OYJ',
    minStartDate: '2016-11-03',
    dotIndex: 2
  },
  STIUSUSD: {
    name: 'STI.US/USD',
    description: 'SUNTRUST BANKS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  STLNONOK: {
    name: 'STL.NO/NOK',
    description: 'Statoil ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  STTUSUSD: {
    name: 'STT.US/USD',
    description: 'STATE STREET CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  STZUSUSD: {
    name: 'STZ.US/USD',
    description: 'CONSTELLATION BRANDS INC-A',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  SUFREUR: {
    name: 'SU.FR/EUR',
    description: 'Schneider Electric SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  SUGARCMDUSD: {
    name: 'SUGAR.CMD/USD',
    description: 'London Sugar No.5',
    minStartDate: '2017-10-02',
    dotIndex: 3
  },
  SVTGBGBX: {
    name: 'SVT.GB/GBX',
    description: 'Severn Trent PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  SWEDASESEK: {
    name: 'SWEDA.SE/SEK',
    description: 'Swedbank AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  SWKUSUSD: {
    name: 'SWK.US/USD',
    description: 'STANLEY BLACK &amp; DECKER INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  SWMASESEK: {
    name: 'SWMA.SE/SEK',
    description: 'Swedish Match AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  SYKUSUSD: {
    name: 'SYK.US/USD',
    description: 'STRYKER CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  SYMCUSUSD: {
    name: 'SYMC.US/USD',
    description: 'SYMANTEC CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  SYYUSUSD: {
    name: 'SYY.US/USD',
    description: 'SYSCO CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  TUSUSD: {
    name: 'T.US/USD',
    description: 'AT&amp;T INC',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  TAPUSUSD: {
    name: 'TAP.US/USD',
    description: 'MOLSON COORS BREWING CO -B',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  TATEGBGBX: {
    name: 'TATE.GB/GBX',
    description: 'Tate &amp; Lyle PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  TEFESEUR: {
    name: 'TEF.ES/EUR',
    description: 'Telefonica SA',
    minStartDate: '2016-11-14',
    dotIndex: 1
  },
  TELNONOK: {
    name: 'TEL.NO/NOK',
    description: 'Telenor ASA',
    minStartDate: '2016-11-14',
    dotIndex: 3
  },
  TEL2BSESEK: {
    name: 'TEL2B.SE/SEK',
    description: 'Tele2 AB',
    minStartDate: '2016-11-08',
    dotIndex: 3
  },
  TEVAUSUSD: {
    name: 'TEVA.US/USD',
    description: 'TEVA PHARMACEUTICAL-SP ADR',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  TGTUSUSD: {
    name: 'TGT.US/USD',
    description: 'TARGET CORP',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  TIFUSUSD: {
    name: 'TIF.US/USD',
    description: 'TIFFANY &amp; CO',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  TJXUSUSD: {
    name: 'TJX.US/USD',
    description: 'TJX COMPANIES INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  TKADEEUR: {
    name: 'TKA.DE/EUR',
    description: 'ThyssenKrupp AG',
    minStartDate: '2015-04-14',
    dotIndex: 2
  },
  TLS1VFIEUR: {
    name: 'TLS1V.FI/EUR',
    description: 'Telia Company AB',
    minStartDate: '2016-11-09',
    dotIndex: 1
  },
  TLSNSESEK: {
    name: 'TLSN.SE/SEK',
    description: 'Telia Company AB',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  TLTUSUSD: {
    name: 'TLT.US/USD',
    description: 'iShares 20+ Year Treasury Bond ETF',
    minStartDate: '2017-01-23',
    dotIndex: 3
  },
  TLWGBGBX: {
    name: 'TLW.GB/GBX',
    description: 'Tullow Oil PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  TMOUSUSD: {
    name: 'TMO.US/USD',
    description: 'THERMO FISHER SCIENTIFIC INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  TPKGBGBX: {
    name: 'TPK.GB/GBX',
    description: 'Travis Perkins PLC',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  TROWUSUSD: {
    name: 'TROW.US/USD',
    description: 'T ROWE PRICE GROUP INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  TRVUSUSD: {
    name: 'TRV.US/USD',
    description: 'TRAVELERS COS INC/THE',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  TRYJPY: {
    name: 'TRY/JPY',
    description: 'Turkish Lira vs Japanese Yen',
    minStartDate: '2010-05-09',
    dotIndex: 2
  },
  TSCOGBGBX: {
    name: 'TSCO.GB/GBX',
    description: 'Tesco PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  TSLAUSUSD: {
    name: 'TSLA.US/USD',
    description: 'TESLA MOTORS INC',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  TSMUSUSD: {
    name: 'TSM.US/USD',
    description: 'Taiwan Semiconductor Manufacturing Company Limited',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  TSNUSUSD: {
    name: 'TSN.US/USD',
    description: 'TYSON FOODS INC-CL A',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  TUI1DEEUR: {
    name: 'TUI1.DE/EUR',
    description: 'TUI AG',
    minStartDate: '2015-04-15',
    dotIndex: 1
  },
  TWTRUSUSD: {
    name: 'TWTR.US/USD',
    description: 'TWITTER INC',
    minStartDate: '2017-11-02',
    dotIndex: 2
  },
  TXNUSUSD: {
    name: 'TXN.US/USD',
    description: 'TEXAS INSTRUMENTS INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  UCBBEEUR: {
    name: 'UCB.BE/EUR',
    description: 'UCB SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  UGFREUR: {
    name: 'UG.FR/EUR',
    description: 'Peugeot SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  UKGILTTRGBP: {
    name: 'UKGILT.TR/GBP',
    description: 'UK Long Gilt',
    minStartDate: '2017-12-26',
    dotIndex: 3
  },
  ULTAUSUSD: {
    name: 'ULTA.US/USD',
    description: 'ULTA SALON COSMETICS &amp; FRAGR',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  ULVRGBGBX: {
    name: 'ULVR.GB/GBX',
    description: 'Unilever PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  UMIBEEUR: {
    name: 'UMI.BE/EUR',
    description: 'Umicore SA',
    minStartDate: '2016-11-07',
    dotIndex: 2
  },
  UNANLEUR: {
    name: 'UNA.NL/EUR',
    description: 'Unilever NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  UNHUSUSD: {
    name: 'UNH.US/USD',
    description: 'UNITEDHEALTH GROUP INC',
    minStartDate: '2017-11-02',
    dotIndex: 3
  },
  UNPUSUSD: {
    name: 'UNP.US/USD',
    description: 'UNION PACIFIC CORP',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  UPSUSUSD: {
    name: 'UPS.US/USD',
    description: 'UNITED PARCEL SERVICE-CL B',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  USBUSUSD: {
    name: 'USB.US/USD',
    description: 'US BANCORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  USDCAD: {
    name: 'USD/CAD',
    description: 'US Dollar vs Canadian Dollar',
    minStartDate: '2003-08-03',
    dotIndex: 1
  },
  USDCHF: {
    name: 'USD/CHF',
    description: 'US Dollar vs Swiss Franc',
    minStartDate: '2003-05-04',
    dotIndex: 1
  },
  USDCNH: {
    name: 'USD/CNH',
    description: 'US Dollar vs Offshore Chinese Renminbi',
    minStartDate: '2012-06-27',
    dotIndex: 1
  },
  USDCZK: {
    name: 'USD/CZK',
    description: 'US Dollar vs Czech Koruna',
    minStartDate: '2016-01-03',
    dotIndex: 2
  },
  USDDKK: {
    name: 'USD/DKK',
    description: 'US Dollar vs Danish Krone',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  USDHKD: {
    name: 'USD/HKD',
    description: 'US Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  USDHUF: {
    name: 'USD/HUF',
    description: 'US Dollar vs Hungarian Forint',
    minStartDate: '2007-03-13',
    dotIndex: 3
  },
  USDILS: {
    name: 'USD/ILS',
    description: 'US Dollar vs Israeli Shekel',
    minStartDate: '2016-12-15',
    dotIndex: 1
  },
  USDJPY: {
    name: 'USD/JPY',
    description: 'US Dollar vs Japanese Yen',
    minStartDate: '2003-05-04',
    dotIndex: 3
  },
  USDMXN: {
    name: 'USD/MXN',
    description: 'US Dollar vs Mexican Peso',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  USDNOK: {
    name: 'USD/NOK',
    description: 'US Dollar vs Norwegian Krone',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  USDPLN: {
    name: 'USD/PLN',
    description: 'US Dollar vs Polish Zloty',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  USDRON: {
    name: 'USD/RON',
    description: 'US Dollar vs Romanian Leu',
    minStartDate: '2016-12-18',
    dotIndex: 1
  },
  USDRUB: {
    name: 'USD/RUB',
    description: 'US Dollar vs Russian Ruble',
    minStartDate: '2007-03-13',
    dotIndex: 2
  },
  USDSEK: {
    name: 'USD/SEK',
    description: 'US Dollar vs Swedish Krona',
    minStartDate: '2003-08-04',
    dotIndex: 1
  },
  USDSGD: {
    name: 'USD/SGD',
    description: 'US Dollar vs Singapore Dollar',
    minStartDate: '2004-11-16',
    dotIndex: 1
  },
  USDTHB: {
    name: 'USD/THB',
    description: 'US Dollar vs Thai Baht',
    minStartDate: '2017-02-13',
    dotIndex: 2
  },
  USDTRY: {
    name: 'USD/TRY',
    description: 'US Dollar vs Turkish Lira',
    minStartDate: '2007-03-13',
    dotIndex: 1
  },
  USDZAR: {
    name: 'USD/ZAR',
    description: 'US Dollar vs South African Rand',
    minStartDate: '1997-10-13',
    dotIndex: 2
  },
  USOUSUSD: {
    name: 'USO.US/USD',
    description: 'United States Oil',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  UTXUSUSD: {
    name: 'UTX.US/USD',
    description: 'UNITED TECHNOLOGIES CORP',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  UUGBGBX: {
    name: 'UU.GB/GBX',
    description: 'United Utilities Group PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  VUSUSD: {
    name: 'V.US/USD',
    description: 'VISA INC-CLASS A SHARES',
    minStartDate: '2017-01-19',
    dotIndex: 3
  },
  VALEUSUSD: {
    name: 'VALE.US/USD',
    description: 'Vale S.A.',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  VEAUSUSD: {
    name: 'VEA.US/USD',
    description: 'Vanguard FTSE Developed Markets ETF',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  VFCUSUSD: {
    name: 'VFC.US/USD',
    description: 'VF CORP',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  VGKUSUSD: {
    name: 'VGK.US/USD',
    description: 'Vanguard FTSE Europe ETF',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  VIABUSUSD: {
    name: 'VIAB.US/USD',
    description: 'VIACOM INC-CLASS B',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  VIEFREUR: {
    name: 'VIE.FR/EUR',
    description: 'Veolia Environnement SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  VIVFREUR: {
    name: 'VIV.FR/EUR',
    description: 'Vivendi SA',
    minStartDate: '2016-08-05',
    dotIndex: 2
  },
  VKFREUR: {
    name: 'VK.FR/EUR',
    description: 'Vallourec SA',
    minStartDate: '2016-08-05',
    dotIndex: 1
  },
  VLOUSUSD: {
    name: 'VLO.US/USD',
    description: 'VALERO ENERGY CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  VMCUSUSD: {
    name: 'VMC.US/USD',
    description: 'VULCAN MATERIALS CO',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  VNADEEUR: {
    name: 'VNA.DE/EUR',
    description: 'Vonovia SE',
    minStartDate: '2015-04-14',
    dotIndex: 2
  },
  VNQUSUSD: {
    name: 'VNQ.US/USD',
    description: 'Vanguard REIT ETF',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  VODGBGBX: {
    name: 'VOD.GB/GBX',
    description: 'Vodafone Group PLC',
    minStartDate: '2016-07-07',
    dotIndex: 3
  },
  VOEATEUR: {
    name: 'VOE.AT/EUR',
    description: 'Voestalpine AG',
    minStartDate: '2016-11-04',
    dotIndex: 2
  },
  VOLVBSESEK: {
    name: 'VOLVB.SE/SEK',
    description: 'Volvo AB',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  VOW3DEEUR: {
    name: 'VOW3.DE/EUR',
    description: 'Volkswagen AG',
    minStartDate: '2015-04-14',
    dotIndex: 3
  },
  VPKNLEUR: {
    name: 'VPK.NL/EUR',
    description: 'Koninklijke Vopak NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  VRTXUSUSD: {
    name: 'VRTX.US/USD',
    description: 'VERTEX PHARMACEUTICALS INC',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  VWSDKDKK: {
    name: 'VWS.DK/DKK',
    description: 'Vestas Wind Systems A/S',
    minStartDate: '2016-11-07',
    dotIndex: 3
  },
  VXXUSUSD: {
    name: 'VXX.US/USD',
    description: 'iPath S&amp;P 500 VIX ST Futures ETN',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  VZUSUSD: {
    name: 'VZ.US/USD',
    description: 'VERIZON COMMUNICATIONS INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  WBAUSUSD: {
    name: 'WBA.US/USD',
    description: 'WALGREENS BOOTS ALLIANCE INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  WDCUSUSD: {
    name: 'WDC.US/USD',
    description: 'WESTERN DIGITAL CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  WEIRGBGBX: {
    name: 'WEIR.GB/GBX',
    description: 'Weir Group PLC/The',
    minStartDate: '2016-07-08',
    dotIndex: 4
  },
  WFCUSUSD: {
    name: 'WFC.US/USD',
    description: 'WELLS FARGO &amp; CO',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  WHRUSUSD: {
    name: 'WHR.US/USD',
    description: 'WHIRLPOOL CORP',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  WKLNLEUR: {
    name: 'WKL.NL/EUR',
    description: 'Wolters Kluwer NV',
    minStartDate: '2016-11-14',
    dotIndex: 2
  },
  WMTUSUSD: {
    name: 'WMT.US/USD',
    description: 'WAL-MART STORES INC',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  WOSGBGBX: {
    name: 'WOS.GB/GBX',
    description: 'Wolseley PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  WPPGBGBX: {
    name: 'WPP.GB/GBX',
    description: 'WPP PLC',
    minStartDate: '2016-07-08',
    dotIndex: 3
  },
  WTBGBGBX: {
    name: 'WTB.GB/GBX',
    description: 'Whitbread PLC',
    minStartDate: '2016-07-06',
    dotIndex: 4
  },
  WYNNUSUSD: {
    name: 'WYNN.US/USD',
    description: 'WYNN RESORTS LTD',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  XUSUSD: {
    name: 'X.US/USD',
    description: 'UNITED STATES STEEL CORP',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  XAGUSD: {
    name: 'XAG/USD',
    description: 'Spot silver',
    minStartDate: '1997-08-13',
    dotIndex: 2
  },
  XAUUSD: {
    name: 'XAU/USD',
    description: 'Spot gold',
    minStartDate: '1999-09-01',
    dotIndex: 4
  },
  XLEUSUSD: {
    name: 'XLE.US/USD',
    description: 'Energy Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  XLFUSUSD: {
    name: 'XLF.US/USD',
    description: 'Financial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  XLIUSUSD: {
    name: 'XLI.US/USD',
    description: 'Industrial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  XLKUSUSD: {
    name: 'XLK.US/USD',
    description: 'Technology Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  XLNXUSUSD: {
    name: 'XLNX.US/USD',
    description: 'XILINX INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  },
  XLPUSUSD: {
    name: 'XLP.US/USD',
    description: 'Consumer Staples Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    dotIndex: 2
  },
  XLUUSUSD: {
    name: 'XLU.US/USD',
    description: 'Utilities Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  XLVUSUSD: {
    name: 'XLV.US/USD',
    description: 'Health Care Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 2
  },
  XLYUSUSD: {
    name: 'XLY.US/USD',
    description: 'Consumer Discretionary Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    dotIndex: 3
  },
  XOMUSUSD: {
    name: 'XOM.US/USD',
    description: 'EXXON MOBIL CORP',
    minStartDate: '2017-01-19',
    dotIndex: 2
  },
  XOPUSUSD: {
    name: 'XOP.US/USD',
    description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF',
    minStartDate: '2017-01-26',
    dotIndex: 2
  },
  YUMUSUSD: {
    name: 'YUM.US/USD',
    description: 'YUM! BRANDS INC',
    minStartDate: '2018-02-01',
    dotIndex: 2
  },
  ZARJPY: {
    name: 'ZAR/JPY',
    description: 'South African Rand vs Japanese Yen',
    minStartDate: '1999-03-03',
    dotIndex: 1
  },
  ZBHUSUSD: {
    name: 'ZBH.US/USD',
    description: 'ZIMMER BIOMET HOLDINGS INC',
    minStartDate: '2018-02-01',
    dotIndex: 3
  }
};

export { symbols };
