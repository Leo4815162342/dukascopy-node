const symbols = {
  AUSUSD: {
    prefixedName: 'A.US/USD',
    description: 'AGILENT TECHNOLOGIES INC'
  },
  AAUSUSD: {
    prefixedName: 'AA.US/USD',
    description: 'ALCOA INC'
  },
  AABAUSUSD: {
    prefixedName: 'AABA.US/USD',
    description: 'ALTABA INC'
  },
  AALGBGBX: {
    prefixedName: 'AAL.GB/GBX',
    description: 'Anglo American PLC'
  },
  AALUSUSD: {
    prefixedName: 'AAL.US/USD',
    description: 'AMERICAN AIRLINES GROUP INC'
  },
  AAPLUSUSD: {
    prefixedName: 'AAPL.US/USD',
    description: 'APPLE INC'
  },
  ABBSESEK: {
    prefixedName: 'ABB.SE/SEK',
    description: 'ABB Ltd'
  },
  ABCUSUSD: {
    prefixedName: 'ABC.US/USD',
    description: 'AMERISOURCEBERGEN CORP'
  },
  ABEVUSUSD: {
    prefixedName: 'ABEV.US/USD',
    description: 'Ambev S.A.'
  },
  ABFGBGBX: {
    prefixedName: 'ABF.GB/GBX',
    description: 'Associated British Foods PLC'
  },
  ABIBEEUR: {
    prefixedName: 'ABI.BE/EUR',
    description: 'Anheuser-Busch InBev NV'
  },
  ABTUSUSD: {
    prefixedName: 'ABT.US/USD',
    description: 'ABBOTT LABORATORIES'
  },
  ACFREUR: {
    prefixedName: 'AC.FR/EUR',
    description: 'Accor SA'
  },
  ACAFREUR: {
    prefixedName: 'ACA.FR/EUR',
    description: 'Credit Agricole SA'
  },
  ACSESEUR: {
    prefixedName: 'ACS.ES/EUR',
    description: 'ACS Actividades de Construccion y Servicios SA'
  },
  ACXESEUR: {
    prefixedName: 'ACX.ES/EUR',
    description: 'Acerinox SA'
  },
  ADBEUSUSD: {
    prefixedName: 'ADBE.US/USD',
    description: 'ADOBE SYSTEMS INC'
  },
  ADIUSUSD: {
    prefixedName: 'ADI.US/USD',
    description: 'ANALOG DEVICES INC'
  },
  ADMGBGBX: {
    prefixedName: 'ADM.GB/GBX',
    description: 'Admiral Group PLC'
  },
  ADPUSUSD: {
    prefixedName: 'ADP.US/USD',
    description: 'AUTOMATIC DATA PROCESSING'
  },
  ADSDEEUR: {
    prefixedName: 'ADS.DE/EUR',
    description: 'Adidas AG'
  },
  ADSKUSUSD: {
    prefixedName: 'ADSK.US/USD',
    description: 'AUTODESK INC'
  },
  AENAESEUR: {
    prefixedName: 'AENA.ES/EUR',
    description: 'Aena SA'
  },
  AETUSUSD: {
    prefixedName: 'AET.US/USD',
    description: 'AETNA INC'
  },
  AFFREUR: {
    prefixedName: 'AF.FR/EUR',
    description: 'Air France-KLM'
  },
  AGKGBGBX: {
    prefixedName: 'AGK.GB/GBX',
    description: 'Aggreko PLC'
  },
  AGNNLEUR: {
    prefixedName: 'AGN.NL/EUR',
    description: 'Aegon NV'
  },
  AGSBEEUR: {
    prefixedName: 'AGS.BE/EUR',
    description: 'Ageas'
  },
  AHNLEUR: {
    prefixedName: 'AH.NL/EUR',
    description: 'Koninklijke Ahold Delhaize NV'
  },
  AHTGBGBX: {
    prefixedName: 'AHT.GB/GBX',
    description: 'Ashtead Group PLC'
  },
  AIFREUR: {
    prefixedName: 'AI.FR/EUR',
    description: 'Air Liquide SA'
  },
  AIGUSUSD: {
    prefixedName: 'AIG.US/USD',
    description: 'AMERICAN INTERNATIONAL GROUP'
  },
  AIRFREUR: {
    prefixedName: 'AIR.FR/EUR',
    description: 'Airbus Group SE'
  },
  AKZANLEUR: {
    prefixedName: 'AKZA.NL/EUR',
    description: 'Akzo Nobel NV'
  },
  ALFASESEK: {
    prefixedName: 'ALFA.SE/SEK',
    description: 'Alfa Laval AB'
  },
  ALLUSUSD: {
    prefixedName: 'ALL.US/USD',
    description: 'ALLSTATE CORP'
  },
  ALOFREUR: {
    prefixedName: 'ALO.FR/EUR',
    description: 'Alstom SA'
  },
  ALVDEEUR: {
    prefixedName: 'ALV.DE/EUR',
    description: 'Allianz SE'
  },
  ALXNUSUSD: {
    prefixedName: 'ALXN.US/USD',
    description: 'ALEXION PHARMACEUTICALS INC'
  },
  AMATUSUSD: {
    prefixedName: 'AMAT.US/USD',
    description: 'APPLIED MATERIALS INC'
  },
  AMDUSUSD: {
    prefixedName: 'AMD.US/USD',
    description: 'ADVANCED MICRO DEVICES'
  },
  AMGNUSUSD: {
    prefixedName: 'AMGN.US/USD',
    description: 'AMGEN INC'
  },
  AMSESEUR: {
    prefixedName: 'AMS.ES/EUR',
    description: 'Amadeus IT Holding SA'
  },
  AMTUSUSD: {
    prefixedName: 'AMT.US/USD',
    description: 'AMERICAN TOWER CORP'
  },
  AMZNUSUSD: {
    prefixedName: 'AMZN.US/USD',
    description: 'AMAZON.COM INC'
  },
  ANTMUSUSD: {
    prefixedName: 'ANTM.US/USD',
    description: 'ANTHEM INC'
  },
  ANTOGBGBX: {
    prefixedName: 'ANTO.GB/GBX',
    description: 'Antofagasta PLC'
  },
  APAUSUSD: {
    prefixedName: 'APA.US/USD',
    description: 'APACHE CORP'
  },
  APCUSUSD: {
    prefixedName: 'APC.US/USD',
    description: 'ANADARKO PETROLEUM CORP'
  },
  APDUSUSD: {
    prefixedName: 'APD.US/USD',
    description: 'AIR PRODUCTS &amp; CHEMICALS INC'
  },
  ASMLNLEUR: {
    prefixedName: 'ASML.NL/EUR',
    description: 'ASML Holding NV'
  },
  ATCOASESEK: {
    prefixedName: 'ATCOA.SE/SEK',
    description: 'Atlas Copco AB'
  },
  ATVIUSUSD: {
    prefixedName: 'ATVI.US/USD',
    description: 'ACTIVISION BLIZZARD INC'
  },
  AUDCAD: {
    prefixedName: 'AUD/CAD',
    description: 'Australian Dollar vs Canadian Dollar'
  },
  AUDCHF: {
    prefixedName: 'AUD/CHF',
    description: 'Australian Dollar vs Swiss Franc'
  },
  AUDJPY: {
    prefixedName: 'AUD/JPY',
    description: 'Australian Dollar vs Japanese Yen'
  },
  AUDNZD: {
    prefixedName: 'AUD/NZD',
    description: 'Australian Dollar vs New Zealand Dollar'
  },
  AUDSGD: {
    prefixedName: 'AUD/SGD',
    description: 'Australian Dollar vs Singapore Dollar'
  },
  AUDUSD: {
    prefixedName: 'AUD/USD',
    description: 'Australian Dollar vs US Dollar'
  },
  AVGBGBX: {
    prefixedName: 'AV.GB/GBX',
    description: 'Aviva PLC'
  },
  AVBUSUSD: {
    prefixedName: 'AVB.US/USD',
    description: 'AVALONBAY COMMUNITIES INC'
  },
  AVGOUSUSD: {
    prefixedName: 'AVGO.US/USD',
    description: 'Broadcom Limited'
  },
  AXPUSUSD: {
    prefixedName: 'AXP.US/USD',
    description: 'AMERICAN EXPRESS CO'
  },
  AZNGBGBX: {
    prefixedName: 'AZN.GB/GBX',
    description: 'AstraZeneca PLC'
  },
  AZNUSUSD: {
    prefixedName: 'AZN.US/USD',
    description: 'AstraZeneca PLC'
  },
  AZOUSUSD: {
    prefixedName: 'AZO.US/USD',
    description: 'AUTOZONE INC'
  },
  BAGBGBX: {
    prefixedName: 'BA.GB/GBX',
    description: 'BAE Systems PLC'
  },
  BAUSUSD: {
    prefixedName: 'BA.US/USD',
    description: 'Boeing Co'
  },
  BABGBGBX: {
    prefixedName: 'BAB.GB/GBX',
    description: 'Babcock International Group PLC'
  },
  BABAUSUSD: {
    prefixedName: 'BABA.US/USD',
    description: 'ALIBABA GROUP HOLDING-SP ADR'
  },
  BACUSUSD: {
    prefixedName: 'BAC.US/USD',
    description: 'BANK OF AMERICA CORP'
  },
  BARCGBGBX: {
    prefixedName: 'BARC.GB/GBX',
    description: 'Barclays PLC'
  },
  BASDEEUR: {
    prefixedName: 'BAS.DE/EUR',
    description: 'BASF SE'
  },
  BATSGBGBX: {
    prefixedName: 'BATS.GB/GBX',
    description: 'British American Tobacco PLC'
  },
  BAYNDEEUR: {
    prefixedName: 'BAYN.DE/EUR',
    description: 'Bayer AG'
  },
  BBDUSUSD: {
    prefixedName: 'BBD.US/USD',
    description: 'Banco Bradesco S.A.'
  },
  BBTUSUSD: {
    prefixedName: 'BBT.US/USD',
    description: 'BB&amp;T CORP'
  },
  BBVAESEUR: {
    prefixedName: 'BBVA.ES/EUR',
    description: 'Banco Bilbao Vizcaya Argentaria SA'
  },
  BBYUSUSD: {
    prefixedName: 'BBY.US/USD',
    description: 'BEST BUY CO INC'
  },
  BDXUSUSD: {
    prefixedName: 'BDX.US/USD',
    description: 'BECTON DICKINSON AND CO'
  },
  BEIDEEUR: {
    prefixedName: 'BEI.DE/EUR',
    description: 'Beiersdorf AG'
  },
  BELGBEEUR: {
    prefixedName: 'BELG.BE/EUR',
    description: 'Proximus'
  },
  BIDUUSUSD: {
    prefixedName: 'BIDU.US/USD',
    description: 'BAIDU INC'
  },
  BIIBUSUSD: {
    prefixedName: 'BIIB.US/USD',
    description: 'BIOGEN INC'
  },
  BKUSUSD: {
    prefixedName: 'BK.US/USD',
    description: 'BANK OF NEW YORK MELLON CORP'
  },
  BLNDGBGBX: {
    prefixedName: 'BLND.GB/GBX',
    description: 'British Land Co PLC'
  },
  BLTGBGBX: {
    prefixedName: 'BLT.GB/GBX',
    description: 'BHP Billiton PLC'
  },
  BMWDEEUR: {
    prefixedName: 'BMW.DE/EUR',
    description: 'Bayerische Motoren Werke AG'
  },
  BMYUSUSD: {
    prefixedName: 'BMY.US/USD',
    description: 'BRISTOL-MYERS SQUIBB CO'
  },
  BNFREUR: {
    prefixedName: 'BN.FR/EUR',
    description: 'Danone SA'
  },
  BNPFREUR: {
    prefixedName: 'BNP.FR/EUR',
    description: 'BNP Paribas SA'
  },
  BNZLGBGBX: {
    prefixedName: 'BNZL.GB/GBX',
    description: 'Bunzl PLC'
  },
  BOSSDEEUR: {
    prefixedName: 'BOSS.DE/EUR',
    description: 'HUGO BOSS AG'
  },
  BPGBGBX: {
    prefixedName: 'BP.GB/GBX',
    description: 'BP PLC'
  },
  BPUSUSD: {
    prefixedName: 'BP.US/USD',
    description: 'BP p.l.c.'
  },
  BRBYGBGBX: {
    prefixedName: 'BRBY.GB/GBX',
    description: 'Burberry Group PLC'
  },
  BRKBUSUSD: {
    prefixedName: 'BRKB.US/USD',
    description: 'BERKSHIRE HATHAWAY INC-CL B'
  },
  BSXUSUSD: {
    prefixedName: 'BSX.US/USD',
    description: 'BOSTON SCIENTIFIC CORP'
  },
  BTGBGBX: {
    prefixedName: 'BT.GB/GBX',
    description: 'BT Group PLC'
  },
  BTCUSD: {
    prefixedName: 'BTC/USD',
    description: 'Bitcoin vs US Dollar'
  },
  BUNDTREUR: {
    prefixedName: 'BUND.TR/EUR',
    description: 'Euro Bund'
  },
  CUSUSD: {
    prefixedName: 'C.US/USD',
    description: 'CITIGROUP INC'
  },
  CAFREUR: {
    prefixedName: 'CA.FR/EUR',
    description: 'Carrefour SA'
  },
  CABKESEUR: {
    prefixedName: 'CABK.ES/EUR',
    description: 'CaixaBank'
  },
  CADCHF: {
    prefixedName: 'CAD/CHF',
    description: 'Canadian Dollar vs Swiss Franc'
  },
  CADHKD: {
    prefixedName: 'CAD/HKD',
    description: 'Canadian Dollar vs Hong Kong Dollar'
  },
  CADJPY: {
    prefixedName: 'CAD/JPY',
    description: 'Canadian Dollar vs Japanese Yen'
  },
  CAGUSUSD: {
    prefixedName: 'CAG.US/USD',
    description: 'CONAGRA FOODS INC'
  },
  CAHUSUSD: {
    prefixedName: 'CAH.US/USD',
    description: 'CARDINAL HEALTH INC'
  },
  CAPFREUR: {
    prefixedName: 'CAP.FR/EUR',
    description: 'Cap Gemini SA'
  },
  CARLBDKDKK: {
    prefixedName: 'CARLB.DK/DKK',
    description: 'Carlsberg A/S'
  },
  CATUSUSD: {
    prefixedName: 'CAT.US/USD',
    description: 'CATERPILLAR INC'
  },
  CBKDEEUR: {
    prefixedName: 'CBK.DE/EUR',
    description: 'Commerzbank AG'
  },
  CBSUSUSD: {
    prefixedName: 'CBS.US/USD',
    description: 'CBS CORP-CLASS B NON VOTING'
  },
  CCLGBGBX: {
    prefixedName: 'CCL.GB/GBX',
    description: 'Carnival PLC'
  },
  CELGUSUSD: {
    prefixedName: 'CELG.US/USD',
    description: 'CELGENE CORP'
  },
  CFUSUSD: {
    prefixedName: 'CF.US/USD',
    description: 'CF INDUSTRIES HOLDINGS INC'
  },
  CHFJPY: {
    prefixedName: 'CHF/JPY',
    description: 'Swiss Franc vs Japanese Yen'
  },
  CHFSGD: {
    prefixedName: 'CHF/SGD',
    description: 'Swiss Franc vs Singapore Dollar'
  },
  CHIIDXUSD: {
    prefixedName: 'CHI.IDX/USD',
    description: 'China A50 Index'
  },
  CIUSUSD: {
    prefixedName: 'CI.US/USD',
    description: 'CIGNA CORP'
  },
  CLUSUSD: {
    prefixedName: 'CL.US/USD',
    description: 'COLGATE-PALMOLIVE CO'
  },
  CMCSAUSUSD: {
    prefixedName: 'CMCSA.US/USD',
    description: 'COMCAST CORP-CLASS A'
  },
  CMEUSUSD: {
    prefixedName: 'CME.US/USD',
    description: 'CME GROUP INC'
  },
  CMGUSUSD: {
    prefixedName: 'CMG.US/USD',
    description: 'CHIPOTLE MEXICAN GRILL INC'
  },
  CMIUSUSD: {
    prefixedName: 'CMI.US/USD',
    description: 'CUMMINS INC'
  },
  CNAGBGBX: {
    prefixedName: 'CNA.GB/GBX',
    description: 'Centrica PLC'
  },
  COCOACMDUSD: {
    prefixedName: 'COCOA.CMD/USD',
    description: 'NY Cocoa'
  },
  COFFEECMDUSX: {
    prefixedName: 'COFFEE.CMD/USX',
    description: 'Coffee Arabica'
  },
  COLUSUSD: {
    prefixedName: 'COL.US/USD',
    description: 'ROCKWELL COLLINS INC'
  },
  COLOBDKDKK: {
    prefixedName: 'COLOB.DK/DKK',
    description: 'Coloplast A/S'
  },
  CONDEEUR: {
    prefixedName: 'CON.DE/EUR',
    description: 'Continental AG'
  },
  COPUSUSD: {
    prefixedName: 'COP.US/USD',
    description: 'CONOCOPHILLIPS'
  },
  COPPERCMDUSD: {
    prefixedName: 'COPPER.CMD/USD',
    description: 'High Grade Copper'
  },
  COSTUSUSD: {
    prefixedName: 'COST.US/USD',
    description: 'COSTCO WHOLESALE CORP'
  },
  COTTONCMDUSX: {
    prefixedName: 'COTTON.CMD/USX',
    description: 'Cotton'
  },
  CPGGBGBX: {
    prefixedName: 'CPG.GB/GBX',
    description: 'Compass Group PLC'
  },
  CPIGBGBX: {
    prefixedName: 'CPI.GB/GBX',
    description: 'Capita PLC'
  },
  CRDAGBGBX: {
    prefixedName: 'CRDA.GB/GBX',
    description: 'Croda International PLC'
  },
  CRHGBGBX: {
    prefixedName: 'CRH.GB/GBX',
    description: 'CRH PLC'
  },
  CRMUSUSD: {
    prefixedName: 'CRM.US/USD',
    description: 'SALESFORCE.COM INC'
  },
  CSFREUR: {
    prefixedName: 'CS.FR/EUR',
    description: 'AXA SA'
  },
  CSUSUSD: {
    prefixedName: 'CS.US/USD',
    description: 'Credit Suisse Group AG'
  },
  CSCOUSUSD: {
    prefixedName: 'CSCO.US/USD',
    description: 'CISCO SYSTEMS INC'
  },
  CSXUSUSD: {
    prefixedName: 'CSX.US/USD',
    description: 'CSX CORP'
  },
  CTLUSUSD: {
    prefixedName: 'CTL.US/USD',
    description: 'CENTURYLINK INC'
  },
  CTSHUSUSD: {
    prefixedName: 'CTSH.US/USD',
    description: 'COGNIZANT TECH SOLUTIONS-A'
  },
  CVSUSUSD: {
    prefixedName: 'CVS.US/USD',
    description: 'CVS HEALTH CORP'
  },
  CVXUSUSD: {
    prefixedName: 'CVX.US/USD',
    description: 'CHEVRON CORP'
  },
  DUSUSD: {
    prefixedName: 'D.US/USD',
    description: 'DOMINION RESOURCES INC/VA'
  },
  DAIDEEUR: {
    prefixedName: 'DAI.DE/EUR',
    description: 'Daimler AG'
  },
  DALUSUSD: {
    prefixedName: 'DAL.US/USD',
    description: 'DELTA AIR LINES INC'
  },
  DANSKEDKDKK: {
    prefixedName: 'DANSKE.DK/DKK',
    description: 'Danske Bank A/S'
  },
  DB1DEEUR: {
    prefixedName: 'DB1.DE/EUR',
    description: 'Deutsche Boerse AG'
  },
  DBKDEEUR: {
    prefixedName: 'DBK.DE/EUR',
    description: 'Deutsche Bank AG'
  },
  DEUSUSD: {
    prefixedName: 'DE.US/USD',
    description: 'DEERE &amp; CO'
  },
  DFSUSUSD: {
    prefixedName: 'DFS.US/USD',
    description: 'DISCOVER FINANCIAL SERVICES'
  },
  DGFREUR: {
    prefixedName: 'DG.FR/EUR',
    description: 'Vinci SA'
  },
  DGUSUSD: {
    prefixedName: 'DG.US/USD',
    description: 'DOLLAR GENERAL CORP'
  },
  DGEGBGBX: {
    prefixedName: 'DGE.GB/GBX',
    description: 'Diageo PLC'
  },
  DHIUSUSD: {
    prefixedName: 'DHI.US/USD',
    description: 'DR HORTON INC'
  },
  DHRUSUSD: {
    prefixedName: 'DHR.US/USD',
    description: 'DANAHER CORP'
  },
  DIAESEUR: {
    prefixedName: 'DIA.ES/EUR',
    description: 'Distribuidora Internacional de Alimentacion SA'
  },
  DIAUSUSD: {
    prefixedName: 'DIA.US/USD',
    description: 'SPDR Dow Jones® Industrial Average ETF'
  },
  DIESELCMDUSD: {
    prefixedName: 'DIESEL.CMD/USD',
    description: 'Gas oil'
  },
  DISUSUSD: {
    prefixedName: 'DIS.US/USD',
    description: 'WALT DISNEY CO/THE'
  },
  DLTRUSUSD: {
    prefixedName: 'DLTR.US/USD',
    description: 'DOLLAR TREE INC'
  },
  DNBNONOK: {
    prefixedName: 'DNB.NO/NOK',
    description: 'DNB ASA'
  },
  DOLLARIDXUSD: {
    prefixedName: 'DOLLAR.IDX/USD',
    description: 'US Dollar Index'
  },
  DPWDEEUR: {
    prefixedName: 'DPW.DE/EUR',
    description: 'Deutsche Post AG'
  },
  DSMNLEUR: {
    prefixedName: 'DSM.NL/EUR',
    description: 'Koninklijke DSM NV'
  },
  DTEDEEUR: {
    prefixedName: 'DTE.DE/EUR',
    description: 'Deutsche Telekom AG'
  },
  DUKUSUSD: {
    prefixedName: 'DUK.US/USD',
    description: 'DUKE ENERGY CORP'
  },
  DVAUSUSD: {
    prefixedName: 'DVA.US/USD',
    description: 'DAVITA HEALTHCARE PARTNERS I'
  },
  DVNUSUSD: {
    prefixedName: 'DVN.US/USD',
    description: 'DEVON ENERGY CORP'
  },
  DVYUSUSD: {
    prefixedName: 'DVY.US/USD',
    description: 'iShares Select Dividend ETF'
  },
  EAUSUSD: {
    prefixedName: 'EA.US/USD',
    description: 'ELECTRONIC ARTS INC'
  },
  EBAYUSUSD: {
    prefixedName: 'EBAY.US/USD',
    description: 'EBAY INC'
  },
  EBSATEUR: {
    prefixedName: 'EBS.AT/EUR',
    description: 'Erste Group Bank AG'
  },
  EDFFREUR: {
    prefixedName: 'EDF.FR/EUR',
    description: 'Electricite de France SA'
  },
  EDPPTEUR: {
    prefixedName: 'EDP.PT/EUR',
    description: 'EDP - Energias de Portugal SA'
  },
  EEMUSUSD: {
    prefixedName: 'EEM.US/USD',
    description: 'iShares MSCI Emerging Markets ETF'
  },
  EFAUSUSD: {
    prefixedName: 'EFA.US/USD',
    description: 'iShares MSCI EAFE ETF'
  },
  EFXUSUSD: {
    prefixedName: 'EFX.US/USD',
    description: 'EQUIFAX INC'
  },
  EIFREUR: {
    prefixedName: 'EI.FR/EUR',
    description: 'Essilor International SA'
  },
  EIXUSUSD: {
    prefixedName: 'EIX.US/USD',
    description: 'EDISON INTERNATIONAL'
  },
  ELUSUSD: {
    prefixedName: 'EL.US/USD',
    description: 'ESTEE LAUDER COMPANIES-CL A'
  },
  ELEESEUR: {
    prefixedName: 'ELE.ES/EUR',
    description: 'Endesa SA'
  },
  ELI1VFIEUR: {
    prefixedName: 'ELI1V.FI/EUR',
    description: 'Elisa OYJ'
  },
  ELUXBSESEK: {
    prefixedName: 'ELUXB.SE/SEK',
    description: 'Electrolux AB'
  },
  EMBUSUSD: {
    prefixedName: 'EMB.US/USD',
    description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF'
  },
  EMRUSUSD: {
    prefixedName: 'EMR.US/USD',
    description: 'EMERSON ELECTRIC CO'
  },
  ENFREUR: {
    prefixedName: 'EN.FR/EUR',
    description: 'Bouygues SA'
  },
  ENGESEUR: {
    prefixedName: 'ENG.ES/EUR',
    description: 'Enagas SA'
  },
  ENGIFREUR: {
    prefixedName: 'ENGI.FR/EUR',
    description: 'Engie'
  },
  EOANDEEUR: {
    prefixedName: 'EOAN.DE/EUR',
    description: 'E.ON SE'
  },
  EOGUSUSD: {
    prefixedName: 'EOG.US/USD',
    description: 'EOG RESOURCES INC'
  },
  EQTUSUSD: {
    prefixedName: 'EQT.US/USD',
    description: 'EQT CORP'
  },
  ERICBSESEK: {
    prefixedName: 'ERICB.SE/SEK',
    description: 'Telefonaktiebolaget LM Ericsson'
  },
  ESRXUSUSD: {
    prefixedName: 'ESRX.US/USD',
    description: 'EXPRESS SCRIPTS HOLDING CO'
  },
  ETHUSD: {
    prefixedName: 'ETH/USD',
    description: 'Ether vs US Dollar'
  },
  EURAUD: {
    prefixedName: 'EUR/AUD',
    description: 'Euro vs Australian Dollar'
  },
  EURCAD: {
    prefixedName: 'EUR/CAD',
    description: 'Euro vs Canadian Dollar'
  },
  EURCHF: {
    prefixedName: 'EUR/CHF',
    description: 'Euro vs Swiss Franc'
  },
  EURCZK: {
    prefixedName: 'EUR/CZK',
    description: 'Euro vs Czech Koruna'
  },
  EURDKK: {
    prefixedName: 'EUR/DKK',
    description: 'Euro vs Danish Krone'
  },
  EURGBP: {
    prefixedName: 'EUR/GBP',
    description: 'Euro vs Pound Sterling'
  },
  EURHKD: {
    prefixedName: 'EUR/HKD',
    description: 'Euro vs Hong Kong Dollar'
  },
  EURHUF: {
    prefixedName: 'EUR/HUF',
    description: 'Euro vs Hungarian Forint'
  },
  EURJPY: {
    prefixedName: 'EUR/JPY',
    description: 'Euro vs Japanese Yen'
  },
  EURNOK: {
    prefixedName: 'EUR/NOK',
    description: 'Euro vs Norwegian Krone'
  },
  EURNZD: {
    prefixedName: 'EUR/NZD',
    description: 'Euro vs New Zealand Dollar'
  },
  EURPLN: {
    prefixedName: 'EUR/PLN',
    description: 'Euro vs Polish Zloty'
  },
  EURRUB: {
    prefixedName: 'EUR/RUB',
    description: 'Euro vs Russian Rouble'
  },
  EURSEK: {
    prefixedName: 'EUR/SEK',
    description: 'Euro vs Swedish Krona'
  },
  EURSGD: {
    prefixedName: 'EUR/SGD',
    description: 'Euro vs Singapore Dollar'
  },
  EURTRY: {
    prefixedName: 'EUR/TRY',
    description: 'Euro vs Turkish Lira'
  },
  EURUSD: {
    prefixedName: 'EUR/USD',
    description: 'Euro vs US Dollar'
  },
  EWHUSUSD: {
    prefixedName: 'EWH.US/USD',
    description: 'iShares MSCI Hong Kong ETF'
  },
  EWJUSUSD: {
    prefixedName: 'EWJ.US/USD',
    description: 'iShares MSCI Japan ETF'
  },
  EWWUSUSD: {
    prefixedName: 'EWW.US/USD',
    description: 'iShares MSCI Mexico Capped'
  },
  EWZUSUSD: {
    prefixedName: 'EWZ.US/USD',
    description: 'iShares MSCI Brazil Capped'
  },
  EXCUSUSD: {
    prefixedName: 'EXC.US/USD',
    description: 'EXELON CORP'
  },
  EXPEUSUSD: {
    prefixedName: 'EXPE.US/USD',
    description: 'EXPEDIA INC'
  },
  EXPNGBGBX: {
    prefixedName: 'EXPN.GB/GBX',
    description: 'Experian PLC'
  },
  EZJGBGBX: {
    prefixedName: 'EZJ.GB/GBX',
    description: 'easyJet PLC'
  },
  EZUUSUSD: {
    prefixedName: 'EZU.US/USD',
    description: 'iShares MSCI EMU ETF'
  },
  BRENTCMDUSD: {
    prefixedName: 'BRENT.CMD/USD',
    description: 'US Brent Crude Oil'
  },
  FRAIDXEUR: {
    prefixedName: 'FRA.IDX/EUR',
    description: 'France 40 Index'
  },
  USA30IDXUSD: {
    prefixedName: 'USA30.IDX/USD',
    description: 'USA 30 Index'
  },
  DEUIDXEUR: {
    prefixedName: 'DEU.IDX/EUR',
    description: 'Germany 30 Index'
  },
  EUSIDXEUR: {
    prefixedName: 'EUS.IDX/EUR',
    description: 'Europe 50 Index'
  },
  GBRIDXGBP: {
    prefixedName: 'GBR.IDX/GBP',
    description: 'UK 100 Index'
  },
  HKGIDXHKD: {
    prefixedName: 'HKG.IDX/HKD',
    description: 'Hong Kong 40 Index'
  },
  ESPIDXEUR: {
    prefixedName: 'ESP.IDX/EUR',
    description: 'Spain 35 Index'
  },
  LIGHTCMDUSD: {
    prefixedName: 'LIGHT.CMD/USD',
    description: 'US Light Crude Oil'
  },
  JPNIDXJPY: {
    prefixedName: 'JPN.IDX/JPY',
    description: 'Japan 225'
  },
  USATECHIDXUSD: {
    prefixedName: 'USATECH.IDX/USD',
    description: 'USA 100 Technical Index'
  },
  USA500IDXUSD: {
    prefixedName: 'USA500.IDX/USD',
    description: 'USA 500 Index'
  },
  CHEIDXCHF: {
    prefixedName: 'CHE.IDX/CHF',
    description: 'Switzerland 20 Index'
  },
  AUSIDXAUD: {
    prefixedName: 'AUS.IDX/AUD',
    description: 'Australia 200 Index'
  },
  FUSUSD: {
    prefixedName: 'F.US/USD',
    description: 'FORD MOTOR CO'
  },
  FBUSUSD: {
    prefixedName: 'FB.US/USD',
    description: 'FACEBOOK INC-A'
  },
  FCXUSUSD: {
    prefixedName: 'FCX.US/USD',
    description: 'FREEPORT-MCMORAN INC'
  },
  FDXUSUSD: {
    prefixedName: 'FDX.US/USD',
    description: 'FEDEX CORP'
  },
  FEUSUSD: {
    prefixedName: 'FE.US/USD',
    description: 'FIRSTENERGY CORP'
  },
  FERESEUR: {
    prefixedName: 'FER.ES/EUR',
    description: 'Ferrovial SA'
  },
  FMEDEEUR: {
    prefixedName: 'FME.DE/EUR',
    description: 'Fresenius Medical Care AG &amp; Co KGaA'
  },
  FOXAUSUSD: {
    prefixedName: 'FOXA.US/USD',
    description: 'TWENTY-FIRST CENTURY FOX-A'
  },
  FPFREUR: {
    prefixedName: 'FP.FR/EUR',
    description: 'Total SA'
  },
  FRFREUR: {
    prefixedName: 'FR.FR/EUR',
    description: 'Valeo SA'
  },
  FREDEEUR: {
    prefixedName: 'FRE.DE/EUR',
    description: 'Fresenius SE &amp; Co KGaA'
  },
  FRESGBGBX: {
    prefixedName: 'FRES.GB/GBX',
    description: 'Fresnillo PLC'
  },
  FXIUSUSD: {
    prefixedName: 'FXI.US/USD',
    description: 'iShares China Large-Cap ETF'
  },
  GALPPTEUR: {
    prefixedName: 'GALP.PT/EUR',
    description: 'Galp Energia SGPS SA'
  },
  GAMESEUR: {
    prefixedName: 'GAM.ES/EUR',
    description: 'Gamesa Corporacion Tecnologica SA'
  },
  GASCMDUSD: {
    prefixedName: 'GAS.CMD/USD',
    description: 'Natural Gas'
  },
  GASESEUR: {
    prefixedName: 'GAS.ES/EUR',
    description: 'Gas Natural SDG SA'
  },
  GBPAUD: {
    prefixedName: 'GBP/AUD',
    description: 'Pound Sterling vs Australian Dollar'
  },
  GBPCAD: {
    prefixedName: 'GBP/CAD',
    description: 'Pound Sterling vs Canadian Dollar'
  },
  GBPCHF: {
    prefixedName: 'GBP/CHF',
    description: 'Pound Sterling vs Swiss Franc'
  },
  GBPJPY: {
    prefixedName: 'GBP/JPY',
    description: 'Pound Sterling vs Japanese Yen'
  },
  GBPNZD: {
    prefixedName: 'GBP/NZD',
    description: 'Pound Sterling vs New Zealand Dollar'
  },
  GBPUSD: {
    prefixedName: 'GBP/USD',
    description: 'Pound Sterling vs US Dollar'
  },
  GDXUSUSD: {
    prefixedName: 'GDX.US/USD',
    description: 'VanEck Vectors Gold Miners ETF'
  },
  GDXJUSUSD: {
    prefixedName: 'GDXJ.US/USD',
    description: 'VanEck Vectors Junior Gold Miners ETF'
  },
  GEUSUSD: {
    prefixedName: 'GE.US/USD',
    description: 'GENERAL ELECTRIC CO'
  },
  GETIBSESEK: {
    prefixedName: 'GETIB.SE/SEK',
    description: 'Getinge AB'
  },
  GFSGBGBX: {
    prefixedName: 'GFS.GB/GBX',
    description: 'G4S PLC'
  },
  GILDUSUSD: {
    prefixedName: 'GILD.US/USD',
    description: 'GILEAD SCIENCES INC'
  },
  GISUSUSD: {
    prefixedName: 'GIS.US/USD',
    description: 'GENERAL MILLS INC'
  },
  GLDUSUSD: {
    prefixedName: 'GLD.US/USD',
    description: 'SPDR Gold Shares ETF'
  },
  GLEFREUR: {
    prefixedName: 'GLE.FR/EUR',
    description: 'Societe Generale SA'
  },
  GLENGBGBX: {
    prefixedName: 'GLEN.GB/GBX',
    description: 'Glencore PLC'
  },
  GLWUSUSD: {
    prefixedName: 'GLW.US/USD',
    description: 'CORNING INC'
  },
  GMUSUSD: {
    prefixedName: 'GM.US/USD',
    description: 'GENERAL MOTORS CO'
  },
  GOOGUSUSD: {
    prefixedName: 'GOOG.US/USD',
    description: 'ALPHABET INC-CL C'
  },
  GOOGLUSUSD: {
    prefixedName: 'GOOGL.US/USD',
    description: 'ALPHABET INC-CL A'
  },
  GPSUSUSD: {
    prefixedName: 'GPS.US/USD',
    description: 'GAP INC/THE'
  },
  GSUSUSD: {
    prefixedName: 'GS.US/USD',
    description: 'GOLDMAN SACHS GROUP INC'
  },
  GTONLEUR: {
    prefixedName: 'GTO.NL/EUR',
    description: 'Gemalto NV'
  },
  GWWUSUSD: {
    prefixedName: 'GWW.US/USD',
    description: 'WW GRAINGER INC'
  },
  HALUSUSD: {
    prefixedName: 'HAL.US/USD',
    description: 'HALLIBURTON CO'
  },
  HCNUSUSD: {
    prefixedName: 'HCN.US/USD',
    description: 'WELLTOWER INC'
  },
  HCPUSUSD: {
    prefixedName: 'HCP.US/USD',
    description: 'HCP INC'
  },
  HDUSUSD: {
    prefixedName: 'HD.US/USD',
    description: 'HOME DEPOT INC'
  },
  HEIDEEUR: {
    prefixedName: 'HEI.DE/EUR',
    description: 'HeidelbergCement AG'
  },
  HEIANLEUR: {
    prefixedName: 'HEIA.NL/EUR',
    description: 'Heineken NV'
  },
  HEN3DEEUR: {
    prefixedName: 'HEN3.DE/EUR',
    description: 'Henkel AG &amp; Co KGaA'
  },
  HESUSUSD: {
    prefixedName: 'HES.US/USD',
    description: 'HESS CORP'
  },
  HKDJPY: {
    prefixedName: 'HKD/JPY',
    description: 'Hong Kong Dollar vs Japanese Yen'
  },
  HMBSESEK: {
    prefixedName: 'HMB.SE/SEK',
    description: 'Hennes &amp; Mauritz AB'
  },
  HMSOGBGBX: {
    prefixedName: 'HMSO.GB/GBX',
    description: 'Hammerson PLC'
  },
  HONUSUSD: {
    prefixedName: 'HON.US/USD',
    description: 'HONEYWELL INTERNATIONAL INC'
  },
  HPQUSUSD: {
    prefixedName: 'HPQ.US/USD',
    description: 'HP INC'
  },
  HSBAGBGBX: {
    prefixedName: 'HSBA.GB/GBX',
    description: 'HSBC Holdings PLC'
  },
  HUMUSUSD: {
    prefixedName: 'HUM.US/USD',
    description: 'HUMANA INC'
  },
  IAGGBGBX: {
    prefixedName: 'IAG.GB/GBX',
    description: 'International Consolidated Airlines Grou'
  },
  IBBUSUSD: {
    prefixedName: 'IBB.US/USD',
    description: 'iShares Nasdaq Biotechnology ETF'
  },
  IBEESEUR: {
    prefixedName: 'IBE.ES/EUR',
    description: 'Iberdrola SA'
  },
  IBMUSUSD: {
    prefixedName: 'IBM.US/USD',
    description: 'INTL BUSINESS MACHINES CORP'
  },
  ICEUSUSD: {
    prefixedName: 'ICE.US/USD',
    description: 'INTERCONTINENTAL EXCHANGE IN'
  },
  IEFUSUSD: {
    prefixedName: 'IEF.US/USD',
    description: 'iShares 7-10 Year Treasury Bond ETF'
  },
  IFXDEEUR: {
    prefixedName: 'IFX.DE/EUR',
    description: 'Infineon Technologies AG'
  },
  IHGGBGBX: {
    prefixedName: 'IHG.GB/GBX',
    description: 'InterContinental Hotels Group PLC'
  },
  IJHUSUSD: {
    prefixedName: 'IJH.US/USD',
    description: 'iShares Core S&amp;P Mid-Cap ETF'
  },
  IJRUSUSD: {
    prefixedName: 'IJR.US/USD',
    description: 'iShares Core S&amp;P Small-Cap ETF'
  },
  ILMNUSUSD: {
    prefixedName: 'ILMN.US/USD',
    description: 'ILLUMINA INC'
  },
  IMTGBGBX: {
    prefixedName: 'IMT.GB/GBX',
    description: 'Imperial Brands Plc'
  },
  INDIDXUSD: {
    prefixedName: 'IND.IDX/USD',
    description: 'India 50 Index'
  },
  INGANLEUR: {
    prefixedName: 'INGA.NL/EUR',
    description: 'ING Groep NV'
  },
  INTCUSUSD: {
    prefixedName: 'INTC.US/USD',
    description: 'INTEL CORP'
  },
  INTUUSUSD: {
    prefixedName: 'INTU.US/USD',
    description: 'INTUIT INC'
  },
  INVEBSESEK: {
    prefixedName: 'INVEB.SE/SEK',
    description: 'Investor AB'
  },
  IPGUSUSD: {
    prefixedName: 'IPG.US/USD',
    description: 'INTERPUBLIC GROUP OF COS INC'
  },
  ISATGBGBX: {
    prefixedName: 'ISAT.GB/GBX',
    description: 'Inmarsat PLC'
  },
  ISRGUSUSD: {
    prefixedName: 'ISRG.US/USD',
    description: 'INTUITIVE SURGICAL INC'
  },
  ITRKGBGBX: {
    prefixedName: 'ITRK.GB/GBX',
    description: 'Intertek Group PLC'
  },
  ITUBUSUSD: {
    prefixedName: 'ITUB.US/USD',
    description: 'Itau Unibanco Holding S.A.'
  },
  ITVGBGBX: {
    prefixedName: 'ITV.GB/GBX',
    description: 'ITV PLC'
  },
  ITWUSUSD: {
    prefixedName: 'ITW.US/USD',
    description: 'ILLINOIS TOOL WORKS'
  },
  ITXESEUR: {
    prefixedName: 'ITX.ES/EUR',
    description: 'Inditex SA'
  },
  IVEUSUSD: {
    prefixedName: 'IVE.US/USD',
    description: 'iShares S&amp;P 500 Value ETF'
  },
  IVWUSUSD: {
    prefixedName: 'IVW.US/USD',
    description: 'iShares S&amp;P 500 Growth ETF'
  },
  IWDUSUSD: {
    prefixedName: 'IWD.US/USD',
    description: 'iShares Russell 1000 Value ETF'
  },
  IWFUSUSD: {
    prefixedName: 'IWF.US/USD',
    description: 'iShares Russell 1000 Growth ETF'
  },
  IWMUSUSD: {
    prefixedName: 'IWM.US/USD',
    description: 'iShares Russell 2000 ETF'
  },
  IYRUSUSD: {
    prefixedName: 'IYR.US/USD',
    description: 'iShares U.S. Real Estate ETF'
  },
  JCIUSUSD: {
    prefixedName: 'JCI.US/USD',
    description: 'JOHNSON CONTROLS INC'
  },
  JNJUSUSD: {
    prefixedName: 'JNJ.US/USD',
    description: 'JOHNSON &amp; JOHNSON'
  },
  JNKUSUSD: {
    prefixedName: 'JNK.US/USD',
    description: 'SPDR Barclays Capital High Yield Bond ETF'
  },
  JPMUSUSD: {
    prefixedName: 'JPM.US/USD',
    description: 'JPMORGAN CHASE &amp; CO'
  },
  JWNUSUSD: {
    prefixedName: 'JWN.US/USD',
    description: 'NORDSTROM INC'
  },
  KUSUSD: {
    prefixedName: 'K.US/USD',
    description: 'KELLOGG CO'
  },
  KBCBEEUR: {
    prefixedName: 'KBC.BE/EUR',
    description: 'KBC Groep NV'
  },
  KERFREUR: {
    prefixedName: 'KER.FR/EUR',
    description: 'Kering'
  },
  KEYUSUSD: {
    prefixedName: 'KEY.US/USD',
    description: 'KEYCORP'
  },
  KGFGBGBX: {
    prefixedName: 'KGF.GB/GBX',
    description: 'Kingfisher PLC'
  },
  KHCUSUSD: {
    prefixedName: 'KHC.US/USD',
    description: 'KRAFT HEINZ CO/THE'
  },
  KMBUSUSD: {
    prefixedName: 'KMB.US/USD',
    description: 'KIMBERLY-CLARK CORP'
  },
  KMIUSUSD: {
    prefixedName: 'KMI.US/USD',
    description: 'KINDER MORGAN INC'
  },
  KOUSUSD: {
    prefixedName: 'KO.US/USD',
    description: 'COCA-COLA CO/THE'
  },
  KPNNLEUR: {
    prefixedName: 'KPN.NL/EUR',
    description: 'Koninklijke KPN NV'
  },
  KRUSUSD: {
    prefixedName: 'KR.US/USD',
    description: 'KROGER CO'
  },
  KSSUSUSD: {
    prefixedName: 'KSS.US/USD',
    description: 'KOHLS CORP'
  },
  LUSUSD: {
    prefixedName: 'L.US/USD',
    description: 'LOEWS CORP'
  },
  LANDGBGBX: {
    prefixedName: 'LAND.GB/GBX',
    description: 'Land Securities Group PLC'
  },
  LENUSUSD: {
    prefixedName: 'LEN.US/USD',
    description: 'LENNAR CORP-A'
  },
  LGENGBGBX: {
    prefixedName: 'LGEN.GB/GBX',
    description: 'Legal &amp; General Group PLC'
  },
  LHADEEUR: {
    prefixedName: 'LHA.DE/EUR',
    description: 'Deutsche Lufthansa AG'
  },
  LIFREUR: {
    prefixedName: 'LI.FR/EUR',
    description: 'Klepierre'
  },
  LINDEEUR: {
    prefixedName: 'LIN.DE/EUR',
    description: 'Linde AG'
  },
  LLOYGBGBX: {
    prefixedName: 'LLOY.GB/GBX',
    description: 'Lloyds Banking Group PLC'
  },
  LLYUSUSD: {
    prefixedName: 'LLY.US/USD',
    description: 'ELI LILLY &amp; CO'
  },
  LMTUSUSD: {
    prefixedName: 'LMT.US/USD',
    description: 'LOCKHEED MARTIN CORP'
  },
  LOWUSUSD: {
    prefixedName: 'LOW.US/USD',
    description: "LOWE'S COS INC"
  },
  LRFREUR: {
    prefixedName: 'LR.FR/EUR',
    description: 'Legrand SA'
  },
  LRCXUSUSD: {
    prefixedName: 'LRCX.US/USD',
    description: 'LAM RESEARCH CORP'
  },
  LSEGBGBX: {
    prefixedName: 'LSE.GB/GBX',
    description: 'London Stock Exchange Group PLC'
  },
  LUVUSUSD: {
    prefixedName: 'LUV.US/USD',
    description: 'SOUTHWEST AIRLINES CO'
  },
  LVSUSUSD: {
    prefixedName: 'LVS.US/USD',
    description: 'Las Vegas Sands Corp.'
  },
  LXSDEEUR: {
    prefixedName: 'LXS.DE/EUR',
    description: 'Lanxess AG'
  },
  MUSUSD: {
    prefixedName: 'M.US/USD',
    description: "MACY'S INC"
  },
  MAUSUSD: {
    prefixedName: 'MA.US/USD',
    description: 'MASTERCARD INC-CLASS A'
  },
  MAERSKBDKDKK: {
    prefixedName: 'MAERSKB.DK/DKK',
    description: 'AP Moeller - Maersk A/S'
  },
  MARUSUSD: {
    prefixedName: 'MAR.US/USD',
    description: 'MARRIOTT INTERNATIONAL -CL A'
  },
  MATUSUSD: {
    prefixedName: 'MAT.US/USD',
    description: 'MATTEL INC'
  },
  MCFREUR: {
    prefixedName: 'MC.FR/EUR',
    description: 'LVMH Moet Hennessy Louis Vuitton SA'
  },
  MCDUSUSD: {
    prefixedName: 'MCD.US/USD',
    description: "MCDONALD'S CORP"
  },
  MCHPUSUSD: {
    prefixedName: 'MCHP.US/USD',
    description: 'MICROCHIP TECHNOLOGY INC'
  },
  MCKUSUSD: {
    prefixedName: 'MCK.US/USD',
    description: 'MCKESSON CORP'
  },
  MDLZUSUSD: {
    prefixedName: 'MDLZ.US/USD',
    description: 'MONDELEZ INTERNATIONAL INC-A'
  },
  METUSUSD: {
    prefixedName: 'MET.US/USD',
    description: 'METLIFE INC'
  },
  MGMUSUSD: {
    prefixedName: 'MGM.US/USD',
    description: 'MGM RESORTS INTERNATIONAL'
  },
  MHGNONOK: {
    prefixedName: 'MHG.NO/NOK',
    description: 'Marine Harvest ASA'
  },
  MKSGBGBX: {
    prefixedName: 'MKS.GB/GBX',
    description: 'Marks &amp; Spencer Group PLC'
  },
  MMMUSUSD: {
    prefixedName: 'MMM.US/USD',
    description: '3M CO'
  },
  MNDIGBGBX: {
    prefixedName: 'MNDI.GB/GBX',
    description: 'Mondi PLC'
  },
  MOUSUSD: {
    prefixedName: 'MO.US/USD',
    description: 'ALTRIA GROUP INC'
  },
  MPCUSUSD: {
    prefixedName: 'MPC.US/USD',
    description: 'MARATHON PETROLEUM CORP'
  },
  MRKDEEUR: {
    prefixedName: 'MRK.DE/EUR',
    description: 'Merck KGaA'
  },
  MRKUSUSD: {
    prefixedName: 'MRK.US/USD',
    description: 'MERCK &amp; CO. INC.'
  },
  MROUSUSD: {
    prefixedName: 'MRO.US/USD',
    description: 'MARATHON OIL CORP'
  },
  MRWGBGBX: {
    prefixedName: 'MRW.GB/GBX',
    description: 'WM Morrison Supermarkets PLC'
  },
  MSUSUSD: {
    prefixedName: 'MS.US/USD',
    description: 'MORGAN STANLEY'
  },
  MSFTUSUSD: {
    prefixedName: 'MSFT.US/USD',
    description: 'MICROSOFT CORP'
  },
  MTNLEUR: {
    prefixedName: 'MT.NL/EUR',
    description: 'ArcelorMittal'
  },
  MUUSUSD: {
    prefixedName: 'MU.US/USD',
    description: 'MICRON TECHNOLOGY INC'
  },
  MUV2DEEUR: {
    prefixedName: 'MUV2.DE/EUR',
    description: 'Muenchener Rueckversicherungs AG'
  },
  NBLUSUSD: {
    prefixedName: 'NBL.US/USD',
    description: 'NOBLE ENERGY INC'
  },
  NDASESEK: {
    prefixedName: 'NDA.SE/SEK',
    description: 'Nordea Bank AB'
  },
  NEEUSUSD: {
    prefixedName: 'NEE.US/USD',
    description: 'NEXTERA ENERGY INC'
  },
  NEMUSUSD: {
    prefixedName: 'NEM.US/USD',
    description: 'NEWMONT MINING CORP'
  },
  NES1VFIEUR: {
    prefixedName: 'NES1V.FI/EUR',
    description: 'Neste OYJ'
  },
  NFLXUSUSD: {
    prefixedName: 'NFLX.US/USD',
    description: 'NETFLIX INC'
  },
  NGGBGBX: {
    prefixedName: 'NG.GB/GBX',
    description: 'National Grid PLC'
  },
  NHYNONOK: {
    prefixedName: 'NHY.NO/NOK',
    description: 'Norsk Hydro ASA'
  },
  NKEUSUSD: {
    prefixedName: 'NKE.US/USD',
    description: 'NIKE INC'
  },
  NLDIDXEUR: {
    prefixedName: 'NLD.IDX/EUR',
    description: 'Netherlands 25 Index'
  },
  NOCUSUSD: {
    prefixedName: 'NOC.US/USD',
    description: 'NORTHROP GRUMMAN CORP'
  },
  NOVOBDKDKK: {
    prefixedName: 'NOVOB.DK/DKK',
    description: 'Novo Nordisk A/S'
  },
  NRE1VFIEUR: {
    prefixedName: 'NRE1V.FI/EUR',
    description: 'Nokian Renkaat OYJ'
  },
  NRGUSUSD: {
    prefixedName: 'NRG.US/USD',
    description: 'NRG ENERGY INC'
  },
  NSCUSUSD: {
    prefixedName: 'NSC.US/USD',
    description: 'NORFOLK SOUTHERN CORP'
  },
  NVDAUSUSD: {
    prefixedName: 'NVDA.US/USD',
    description: 'NVIDIA CORP'
  },
  NWLUSUSD: {
    prefixedName: 'NWL.US/USD',
    description: 'NEWELL BRANDS INC'
  },
  NXTGBGBX: {
    prefixedName: 'NXT.GB/GBX',
    description: 'Next PLC'
  },
  NZDCAD: {
    prefixedName: 'NZD/CAD',
    description: 'New Zealand Dollar vs Canadian Dollar'
  },
  NZDCHF: {
    prefixedName: 'NZD/CHF',
    description: 'New Zealand Dollar vs Swiss Franc'
  },
  NZDJPY: {
    prefixedName: 'NZD/JPY',
    description: 'New Zealand Dollar vs Japanese Yen'
  },
  NZDUSD: {
    prefixedName: 'NZD/USD',
    description: 'New Zealand Dollar vs US Dollar'
  },
  NZYMBDKDKK: {
    prefixedName: 'NZYMB.DK/DKK',
    description: 'Novozymes A/S'
  },
  OJUICECMDUSX: {
    prefixedName: 'OJUICE.CMD/USX',
    description: 'Orange Juice'
  },
  OKEUSUSD: {
    prefixedName: 'OKE.US/USD',
    description: 'ONEOK INC'
  },
  OMCUSUSD: {
    prefixedName: 'OMC.US/USD',
    description: 'OMNICOM GROUP'
  },
  ORFREUR: {
    prefixedName: 'OR.FR/EUR',
    description: "L'Oreal SA"
  },
  ORAFREUR: {
    prefixedName: 'ORA.FR/EUR',
    description: 'Orange SA'
  },
  ORCLUSUSD: {
    prefixedName: 'ORCL.US/USD',
    description: 'ORACLE CORP'
  },
  ORKNONOK: {
    prefixedName: 'ORK.NO/NOK',
    description: 'Orkla ASA'
  },
  ORLYUSUSD: {
    prefixedName: 'ORLY.US/USD',
    description: "O'REILLY AUTOMOTIVE INC"
  },
  OTE1VFIEUR: {
    prefixedName: 'OTE1V.FI/EUR',
    description: 'Outotec OYJ'
  },
  OUT1VFIEUR: {
    prefixedName: 'OUT1V.FI/EUR',
    description: 'Outokumpu OYJ'
  },
  OXYUSUSD: {
    prefixedName: 'OXY.US/USD',
    description: 'OCCIDENTAL PETROLEUM CORP'
  },
  PAH3DEEUR: {
    prefixedName: 'PAH3.DE/EUR',
    description: 'Porsche Automobil Holding SE'
  },
  PAYXUSUSD: {
    prefixedName: 'PAYX.US/USD',
    description: 'PAYCHEX INC'
  },
  PBRUSUSD: {
    prefixedName: 'PBR.US/USD',
    description: 'Petroleo Brasileiro S.A.'
  },
  PCARUSUSD: {
    prefixedName: 'PCAR.US/USD',
    description: 'PACCAR INC'
  },
  PCGUSUSD: {
    prefixedName: 'PCG.US/USD',
    description: 'P G &amp; E CORP'
  },
  PCLNUSUSD: {
    prefixedName: 'PCLN.US/USD',
    description: 'PRICELINE GROUP INC/THE'
  },
  PEPUSUSD: {
    prefixedName: 'PEP.US/USD',
    description: 'PEPSICO INC'
  },
  PFCGBGBX: {
    prefixedName: 'PFC.GB/GBX',
    description: 'Petrofac Ltd'
  },
  PFEUSUSD: {
    prefixedName: 'PFE.US/USD',
    description: 'PFIZER INC'
  },
  PGUSUSD: {
    prefixedName: 'PG.US/USD',
    description: 'PROCTER &amp; GAMBLE CO/THE'
  },
  PGRUSUSD: {
    prefixedName: 'PGR.US/USD',
    description: 'PROGRESSIVE CORP'
  },
  PHUSUSD: {
    prefixedName: 'PH.US/USD',
    description: 'PARKER HANNIFIN CORP'
  },
  PHIANLEUR: {
    prefixedName: 'PHIA.NL/EUR',
    description: 'Koninklijke Philips NV'
  },
  PLNIDXPLN: {
    prefixedName: 'PLN.IDX/PLN',
    description: 'Poland 20 Index'
  },
  PMUSUSD: {
    prefixedName: 'PM.US/USD',
    description: 'PHILIP MORRIS INTERNATIONAL'
  },
  PNCUSUSD: {
    prefixedName: 'PNC.US/USD',
    description: 'PNC FINANCIAL SERVICES GROUP'
  },
  PNDORADKDKK: {
    prefixedName: 'PNDORA.DK/DKK',
    description: 'Pandora A/S'
  },
  PPGUSUSD: {
    prefixedName: 'PPG.US/USD',
    description: 'PPG INDUSTRIES INC'
  },
  PRUGBGBX: {
    prefixedName: 'PRU.GB/GBX',
    description: 'Prudential PLC'
  },
  PRUUSUSD: {
    prefixedName: 'PRU.US/USD',
    description: 'PRUDENTIAL FINANCIAL INC'
  },
  PSAUSUSD: {
    prefixedName: 'PSA.US/USD',
    description: 'PUBLIC STORAGE'
  },
  PSMDEEUR: {
    prefixedName: 'PSM.DE/EUR',
    description: 'ProSiebenSat.1 Media AG'
  },
  PSNGBGBX: {
    prefixedName: 'PSN.GB/GBX',
    description: 'Persimmon PLC'
  },
  PSONGBGBX: {
    prefixedName: 'PSON.GB/GBX',
    description: 'Pearson PLC'
  },
  PSXUSUSD: {
    prefixedName: 'PSX.US/USD',
    description: 'PHILLIPS 66'
  },
  PUBFREUR: {
    prefixedName: 'PUB.FR/EUR',
    description: 'Publicis Groupe SA'
  },
  PXDUSUSD: {
    prefixedName: 'PXD.US/USD',
    description: 'PIONEER NATURAL RESOURCES CO'
  },
  PYPLUSUSD: {
    prefixedName: 'PYPL.US/USD',
    description: 'PAYPAL HOLDINGS INC'
  },
  QCOMUSUSD: {
    prefixedName: 'QCOM.US/USD',
    description: 'QUALCOMM INC'
  },
  QQQUSUSD: {
    prefixedName: 'QQQ.US/USD',
    description: 'PowerShares QQQ ETF'
  },
  RANDNLEUR: {
    prefixedName: 'RAND.NL/EUR',
    description: 'Randstad Holding NV'
  },
  RBGBGBX: {
    prefixedName: 'RB.GB/GBX',
    description: 'Reckitt Benckiser Group PLC'
  },
  RBIATEUR: {
    prefixedName: 'RBI.AT/EUR',
    description: 'Raiffeisen Bank International AG'
  },
  RBSGBGBX: {
    prefixedName: 'RBS.GB/GBX',
    description: 'Royal Bank of Scotland Group PLC'
  },
  RDSANLEUR: {
    prefixedName: 'RDSA.NL/EUR',
    description: 'Royal Dutch Shell PLC'
  },
  RDSBGBGBX: {
    prefixedName: 'RDSB.GB/GBX',
    description: 'Royal Dutch Shell PLC'
  },
  REEESEUR: {
    prefixedName: 'REE.ES/EUR',
    description: 'Red Electrica Corp SA'
  },
  REGNUSUSD: {
    prefixedName: 'REGN.US/USD',
    description: 'REGENERON PHARMACEUTICALS'
  },
  RELGBGBX: {
    prefixedName: 'REL.GB/GBX',
    description: 'Reed Elsevier PLC'
  },
  RENNLEUR: {
    prefixedName: 'REN.NL/EUR',
    description: 'RELX NV'
  },
  REPESEUR: {
    prefixedName: 'REP.ES/EUR',
    description: 'Repsol SA'
  },
  RFUSUSD: {
    prefixedName: 'RF.US/USD',
    description: 'REGIONS FINANCIAL CORP'
  },
  RHTUSUSD: {
    prefixedName: 'RHT.US/USD',
    description: 'RED HAT INC'
  },
  RIFREUR: {
    prefixedName: 'RI.FR/EUR',
    description: 'Pernod-Ricard SA'
  },
  RIOGBGBX: {
    prefixedName: 'RIO.GB/GBX',
    description: 'Rio Tinto PLC'
  },
  RMGGBGBX: {
    prefixedName: 'RMG.GB/GBX',
    description: 'Royal Mail PLC'
  },
  RNOFREUR: {
    prefixedName: 'RNO.FR/EUR',
    description: 'Renault SA'
  },
  ROSTUSUSD: {
    prefixedName: 'ROST.US/USD',
    description: 'ROSS STORES INC'
  },
  RRGBGBX: {
    prefixedName: 'RR.GB/GBX',
    description: 'Rolls-Royce Holdings PLC'
  },
  RRCUSUSD: {
    prefixedName: 'RRC.US/USD',
    description: 'RANGE RESOURCES CORP'
  },
  RRSGBGBX: {
    prefixedName: 'RRS.GB/GBX',
    description: 'Randgold Resources Ltd'
  },
  RSAGBGBX: {
    prefixedName: 'RSA.GB/GBX',
    description: 'RSA Insurance Group PLC'
  },
  RTNUSUSD: {
    prefixedName: 'RTN.US/USD',
    description: 'RAYTHEON COMPANY'
  },
  RWEDEEUR: {
    prefixedName: 'RWE.DE/EUR',
    description: 'RWE AG'
  },
  SAFFREUR: {
    prefixedName: 'SAF.FR/EUR',
    description: 'Safran SA'
  },
  SANESEUR: {
    prefixedName: 'SAN.ES/EUR',
    description: 'Banco Santander SA'
  },
  SANFREUR: {
    prefixedName: 'SAN.FR/EUR',
    description: 'Sanofi'
  },
  SANDSESEK: {
    prefixedName: 'SAND.SE/SEK',
    description: 'Sandvik AB'
  },
  SAPDEEUR: {
    prefixedName: 'SAP.DE/EUR',
    description: 'SAP AG'
  },
  SBRYGBGBX: {
    prefixedName: 'SBRY.GB/GBX',
    description: 'J Sainsbury PLC'
  },
  SBUXUSUSD: {
    prefixedName: 'SBUX.US/USD',
    description: 'STARBUCKS CORP'
  },
  SCABSESEK: {
    prefixedName: 'SCAB.SE/SEK',
    description: 'Svenska Cellulosa AB'
  },
  SCHWUSUSD: {
    prefixedName: 'SCHW.US/USD',
    description: 'SCHWAB (CHARLES) CORP'
  },
  SDFDEEUR: {
    prefixedName: 'SDF.DE/EUR',
    description: 'K+S AG'
  },
  SEBASESEK: {
    prefixedName: 'SEBA.SE/SEK',
    description: 'Skandinaviska Enskilda Banken AB'
  },
  SECUBSESEK: {
    prefixedName: 'SECUB.SE/SEK',
    description: 'Securitas AB'
  },
  SGDIDXSGD: {
    prefixedName: 'SGD.IDX/SGD',
    description: 'Singapore Blue Chip Cash Index'
  },
  SGDJPY: {
    prefixedName: 'SGD/JPY',
    description: 'Singapore Dollar vs Japanese Yen'
  },
  SGEGBGBX: {
    prefixedName: 'SGE.GB/GBX',
    description: 'Sage Group PLC/The'
  },
  SGOFREUR: {
    prefixedName: 'SGO.FR/EUR',
    description: 'Cie de St-Gobain'
  },
  SHPGBGBX: {
    prefixedName: 'SHP.GB/GBX',
    description: 'Shire PLC'
  },
  SHWUSUSD: {
    prefixedName: 'SHW.US/USD',
    description: 'SHERWIN-WILLIAMS COMPANY'
  },
  SIEDEEUR: {
    prefixedName: 'SIE.DE/EUR',
    description: 'Siemens AG'
  },
  SJMUSUSD: {
    prefixedName: 'SJM.US/USD',
    description: 'JM SMUCKER COMPANY'
  },
  SKABSESEK: {
    prefixedName: 'SKAB.SE/SEK',
    description: 'Skanska AB'
  },
  SKFBSESEK: {
    prefixedName: 'SKFB.SE/SEK',
    description: 'SKF AB'
  },
  SKYGBGBX: {
    prefixedName: 'SKY.GB/GBX',
    description: 'Sky Plc'
  },
  SLVUSUSD: {
    prefixedName: 'SLV.US/USD',
    description: 'iShares Silver Trust ETF'
  },
  SMINGBGBX: {
    prefixedName: 'SMIN.GB/GBX',
    description: 'Smiths Group PLC'
  },
  SNGBGBX: {
    prefixedName: 'SN.GB/GBX',
    description: 'Smith &amp; Nephew PLC'
  },
  SNAPUSUSD: {
    prefixedName: 'SNAP.US/USD',
    description: 'SNAP Inc'
  },
  SOUSUSD: {
    prefixedName: 'SO.US/USD',
    description: 'SOUTHERN CO/THE'
  },
  SOLBBEEUR: {
    prefixedName: 'SOLB.BE/EUR',
    description: 'Solvay SA'
  },
  SPGUSUSD: {
    prefixedName: 'SPG.US/USD',
    description: 'SIMON PROPERTY GROUP INC'
  },
  SPYUSUSD: {
    prefixedName: 'SPY.US/USD',
    description: 'SPDR S&amp;P 500 ETF'
  },
  SSEGBGBX: {
    prefixedName: 'SSE.GB/GBX',
    description: 'SSE PLC'
  },
  STANGBGBX: {
    prefixedName: 'STAN.GB/GBX',
    description: 'Standard Chartered PLC'
  },
  STERVFIEUR: {
    prefixedName: 'STERV.FI/EUR',
    description: 'Stora Enso OYJ'
  },
  STIUSUSD: {
    prefixedName: 'STI.US/USD',
    description: 'SUNTRUST BANKS INC'
  },
  STLNONOK: {
    prefixedName: 'STL.NO/NOK',
    description: 'Statoil ASA'
  },
  STTUSUSD: {
    prefixedName: 'STT.US/USD',
    description: 'STATE STREET CORP'
  },
  STZUSUSD: {
    prefixedName: 'STZ.US/USD',
    description: 'CONSTELLATION BRANDS INC-A'
  },
  SUFREUR: {
    prefixedName: 'SU.FR/EUR',
    description: 'Schneider Electric SA'
  },
  SUGARCMDUSD: {
    prefixedName: 'SUGAR.CMD/USD',
    description: 'London Sugar No.5'
  },
  SVTGBGBX: {
    prefixedName: 'SVT.GB/GBX',
    description: 'Severn Trent PLC'
  },
  SWEDASESEK: {
    prefixedName: 'SWEDA.SE/SEK',
    description: 'Swedbank AB'
  },
  SWKUSUSD: {
    prefixedName: 'SWK.US/USD',
    description: 'STANLEY BLACK &amp; DECKER INC'
  },
  SWMASESEK: {
    prefixedName: 'SWMA.SE/SEK',
    description: 'Swedish Match AB'
  },
  SYKUSUSD: {
    prefixedName: 'SYK.US/USD',
    description: 'STRYKER CORP'
  },
  SYMCUSUSD: {
    prefixedName: 'SYMC.US/USD',
    description: 'SYMANTEC CORP'
  },
  SYYUSUSD: {
    prefixedName: 'SYY.US/USD',
    description: 'SYSCO CORP'
  },
  TUSUSD: {
    prefixedName: 'T.US/USD',
    description: 'AT&amp;T INC'
  },
  TAPUSUSD: {
    prefixedName: 'TAP.US/USD',
    description: 'MOLSON COORS BREWING CO -B'
  },
  TATEGBGBX: {
    prefixedName: 'TATE.GB/GBX',
    description: 'Tate &amp; Lyle PLC'
  },
  TEFESEUR: {
    prefixedName: 'TEF.ES/EUR',
    description: 'Telefonica SA'
  },
  TELNONOK: {
    prefixedName: 'TEL.NO/NOK',
    description: 'Telenor ASA'
  },
  TEL2BSESEK: {
    prefixedName: 'TEL2B.SE/SEK',
    description: 'Tele2 AB'
  },
  TEVAUSUSD: {
    prefixedName: 'TEVA.US/USD',
    description: 'TEVA PHARMACEUTICAL-SP ADR'
  },
  TGTUSUSD: {
    prefixedName: 'TGT.US/USD',
    description: 'TARGET CORP'
  },
  TIFUSUSD: {
    prefixedName: 'TIF.US/USD',
    description: 'TIFFANY &amp; CO'
  },
  TJXUSUSD: {
    prefixedName: 'TJX.US/USD',
    description: 'TJX COMPANIES INC'
  },
  TKADEEUR: {
    prefixedName: 'TKA.DE/EUR',
    description: 'ThyssenKrupp AG'
  },
  TLS1VFIEUR: {
    prefixedName: 'TLS1V.FI/EUR',
    description: 'Telia Company AB'
  },
  TLSNSESEK: {
    prefixedName: 'TLSN.SE/SEK',
    description: 'Telia Company AB'
  },
  TLTUSUSD: {
    prefixedName: 'TLT.US/USD',
    description: 'iShares 20+ Year Treasury Bond ETF'
  },
  TLWGBGBX: {
    prefixedName: 'TLW.GB/GBX',
    description: 'Tullow Oil PLC'
  },
  TMOUSUSD: {
    prefixedName: 'TMO.US/USD',
    description: 'THERMO FISHER SCIENTIFIC INC'
  },
  TPKGBGBX: {
    prefixedName: 'TPK.GB/GBX',
    description: 'Travis Perkins PLC'
  },
  TROWUSUSD: {
    prefixedName: 'TROW.US/USD',
    description: 'T ROWE PRICE GROUP INC'
  },
  TRVUSUSD: {
    prefixedName: 'TRV.US/USD',
    description: 'TRAVELERS COS INC/THE'
  },
  TRYJPY: {
    prefixedName: 'TRY/JPY',
    description: 'Turkish Lira vs Japanese Yen'
  },
  TSCOGBGBX: {
    prefixedName: 'TSCO.GB/GBX',
    description: 'Tesco PLC'
  },
  TSLAUSUSD: {
    prefixedName: 'TSLA.US/USD',
    description: 'TESLA MOTORS INC'
  },
  TSMUSUSD: {
    prefixedName: 'TSM.US/USD',
    description: 'Taiwan Semiconductor Manufacturing Company Limited'
  },
  TSNUSUSD: {
    prefixedName: 'TSN.US/USD',
    description: 'TYSON FOODS INC-CL A'
  },
  TUI1DEEUR: {
    prefixedName: 'TUI1.DE/EUR',
    description: 'TUI AG'
  },
  TWTRUSUSD: {
    prefixedName: 'TWTR.US/USD',
    description: 'TWITTER INC'
  },
  TXNUSUSD: {
    prefixedName: 'TXN.US/USD',
    description: 'TEXAS INSTRUMENTS INC'
  },
  UCBBEEUR: {
    prefixedName: 'UCB.BE/EUR',
    description: 'UCB SA'
  },
  UGFREUR: {
    prefixedName: 'UG.FR/EUR',
    description: 'Peugeot SA'
  },
  UKGILTTRGBP: {
    prefixedName: 'UKGILT.TR/GBP',
    description: 'UK Long Gilt'
  },
  ULTAUSUSD: {
    prefixedName: 'ULTA.US/USD',
    description: 'ULTA SALON COSMETICS &amp; FRAGR'
  },
  ULVRGBGBX: {
    prefixedName: 'ULVR.GB/GBX',
    description: 'Unilever PLC'
  },
  UMIBEEUR: {
    prefixedName: 'UMI.BE/EUR',
    description: 'Umicore SA'
  },
  UNANLEUR: {
    prefixedName: 'UNA.NL/EUR',
    description: 'Unilever NV'
  },
  UNHUSUSD: {
    prefixedName: 'UNH.US/USD',
    description: 'UNITEDHEALTH GROUP INC'
  },
  UNPUSUSD: {
    prefixedName: 'UNP.US/USD',
    description: 'UNION PACIFIC CORP'
  },
  UPSUSUSD: {
    prefixedName: 'UPS.US/USD',
    description: 'UNITED PARCEL SERVICE-CL B'
  },
  USBUSUSD: {
    prefixedName: 'USB.US/USD',
    description: 'US BANCORP'
  },
  USDCAD: {
    prefixedName: 'USD/CAD',
    description: 'US Dollar vs Canadian Dollar'
  },
  USDCHF: {
    prefixedName: 'USD/CHF',
    description: 'US Dollar vs Swiss Franc'
  },
  USDCNH: {
    prefixedName: 'USD/CNH',
    description: 'US Dollar vs Offshore Chinese Renminbi'
  },
  USDCZK: {
    prefixedName: 'USD/CZK',
    description: 'US Dollar vs Czech Koruna'
  },
  USDDKK: {
    prefixedName: 'USD/DKK',
    description: 'US Dollar vs Danish Krone'
  },
  USDHKD: {
    prefixedName: 'USD/HKD',
    description: 'US Dollar vs Hong Kong Dollar'
  },
  USDHUF: {
    prefixedName: 'USD/HUF',
    description: 'US Dollar vs Hungarian Forint'
  },
  USDILS: {
    prefixedName: 'USD/ILS',
    description: 'US Dollar vs Israeli Shekel'
  },
  USDJPY: {
    prefixedName: 'USD/JPY',
    description: 'US Dollar vs Japanese Yen'
  },
  USDMXN: {
    prefixedName: 'USD/MXN',
    description: 'US Dollar vs Mexican Peso'
  },
  USDNOK: {
    prefixedName: 'USD/NOK',
    description: 'US Dollar vs Norwegian Krone'
  },
  USDPLN: {
    prefixedName: 'USD/PLN',
    description: 'US Dollar vs Polish Zloty'
  },
  USDRON: {
    prefixedName: 'USD/RON',
    description: 'US Dollar vs Romanian Leu'
  },
  USDRUB: {
    prefixedName: 'USD/RUB',
    description: 'US Dollar vs Russian Ruble'
  },
  USDSEK: {
    prefixedName: 'USD/SEK',
    description: 'US Dollar vs Swedish Krona'
  },
  USDSGD: {
    prefixedName: 'USD/SGD',
    description: 'US Dollar vs Singapore Dollar'
  },
  USDTHB: {
    prefixedName: 'USD/THB',
    description: 'US Dollar vs Thai Baht'
  },
  USDTRY: {
    prefixedName: 'USD/TRY',
    description: 'US Dollar vs Turkish Lira'
  },
  USDZAR: {
    prefixedName: 'USD/ZAR',
    description: 'US Dollar vs South African Rand'
  },
  USOUSUSD: {
    prefixedName: 'USO.US/USD',
    description: 'United States Oil'
  },
  UTXUSUSD: {
    prefixedName: 'UTX.US/USD',
    description: 'UNITED TECHNOLOGIES CORP'
  },
  UUGBGBX: {
    prefixedName: 'UU.GB/GBX',
    description: 'United Utilities Group PLC'
  },
  VUSUSD: {
    prefixedName: 'V.US/USD',
    description: 'VISA INC-CLASS A SHARES'
  },
  VALEUSUSD: {
    prefixedName: 'VALE.US/USD',
    description: 'Vale S.A.'
  },
  VEAUSUSD: {
    prefixedName: 'VEA.US/USD',
    description: 'Vanguard FTSE Developed Markets ETF'
  },
  VFCUSUSD: {
    prefixedName: 'VFC.US/USD',
    description: 'VF CORP'
  },
  VGKUSUSD: {
    prefixedName: 'VGK.US/USD',
    description: 'Vanguard FTSE Europe ETF'
  },
  VIABUSUSD: {
    prefixedName: 'VIAB.US/USD',
    description: 'VIACOM INC-CLASS B'
  },
  VIEFREUR: {
    prefixedName: 'VIE.FR/EUR',
    description: 'Veolia Environnement SA'
  },
  VIVFREUR: {
    prefixedName: 'VIV.FR/EUR',
    description: 'Vivendi SA'
  },
  VKFREUR: {
    prefixedName: 'VK.FR/EUR',
    description: 'Vallourec SA'
  },
  VLOUSUSD: {
    prefixedName: 'VLO.US/USD',
    description: 'VALERO ENERGY CORP'
  },
  VMCUSUSD: {
    prefixedName: 'VMC.US/USD',
    description: 'VULCAN MATERIALS CO'
  },
  VNADEEUR: {
    prefixedName: 'VNA.DE/EUR',
    description: 'Vonovia SE'
  },
  VNQUSUSD: {
    prefixedName: 'VNQ.US/USD',
    description: 'Vanguard REIT ETF'
  },
  VODGBGBX: {
    prefixedName: 'VOD.GB/GBX',
    description: 'Vodafone Group PLC'
  },
  VOEATEUR: {
    prefixedName: 'VOE.AT/EUR',
    description: 'Voestalpine AG'
  },
  VOLVBSESEK: {
    prefixedName: 'VOLVB.SE/SEK',
    description: 'Volvo AB'
  },
  VOW3DEEUR: {
    prefixedName: 'VOW3.DE/EUR',
    description: 'Volkswagen AG'
  },
  VPKNLEUR: {
    prefixedName: 'VPK.NL/EUR',
    description: 'Koninklijke Vopak NV'
  },
  VRTXUSUSD: {
    prefixedName: 'VRTX.US/USD',
    description: 'VERTEX PHARMACEUTICALS INC'
  },
  VWSDKDKK: {
    prefixedName: 'VWS.DK/DKK',
    description: 'Vestas Wind Systems A/S'
  },
  VXXUSUSD: {
    prefixedName: 'VXX.US/USD',
    description: 'iPath S&amp;P 500 VIX ST Futures ETN'
  },
  VZUSUSD: {
    prefixedName: 'VZ.US/USD',
    description: 'VERIZON COMMUNICATIONS INC'
  },
  WBAUSUSD: {
    prefixedName: 'WBA.US/USD',
    description: 'WALGREENS BOOTS ALLIANCE INC'
  },
  WDCUSUSD: {
    prefixedName: 'WDC.US/USD',
    description: 'WESTERN DIGITAL CORP'
  },
  WEIRGBGBX: {
    prefixedName: 'WEIR.GB/GBX',
    description: 'Weir Group PLC/The'
  },
  WFCUSUSD: {
    prefixedName: 'WFC.US/USD',
    description: 'WELLS FARGO &amp; CO'
  },
  WHRUSUSD: {
    prefixedName: 'WHR.US/USD',
    description: 'WHIRLPOOL CORP'
  },
  WKLNLEUR: {
    prefixedName: 'WKL.NL/EUR',
    description: 'Wolters Kluwer NV'
  },
  WMTUSUSD: {
    prefixedName: 'WMT.US/USD',
    description: 'WAL-MART STORES INC'
  },
  WOSGBGBX: {
    prefixedName: 'WOS.GB/GBX',
    description: 'Wolseley PLC'
  },
  WPPGBGBX: {
    prefixedName: 'WPP.GB/GBX',
    description: 'WPP PLC'
  },
  WTBGBGBX: {
    prefixedName: 'WTB.GB/GBX',
    description: 'Whitbread PLC'
  },
  WYNNUSUSD: {
    prefixedName: 'WYNN.US/USD',
    description: 'WYNN RESORTS LTD'
  },
  XUSUSD: {
    prefixedName: 'X.US/USD',
    description: 'UNITED STATES STEEL CORP'
  },
  XAGUSD: {
    prefixedName: 'XAG/USD',
    description: 'Spot silver'
  },
  XAUUSD: {
    prefixedName: 'XAU/USD',
    description: 'Spot gold'
  },
  XLEUSUSD: {
    prefixedName: 'XLE.US/USD',
    description: 'Energy Select Sector SPDR Fund'
  },
  XLFUSUSD: {
    prefixedName: 'XLF.US/USD',
    description: 'Financial Select Sector SPDR Fund'
  },
  XLIUSUSD: {
    prefixedName: 'XLI.US/USD',
    description: 'Industrial Select Sector SPDR Fund'
  },
  XLKUSUSD: {
    prefixedName: 'XLK.US/USD',
    description: 'Technology Select Sector SPDR Fund'
  },
  XLNXUSUSD: {
    prefixedName: 'XLNX.US/USD',
    description: 'XILINX INC'
  },
  XLPUSUSD: {
    prefixedName: 'XLP.US/USD',
    description: 'Consumer Staples Select Sector SPDR Fund'
  },
  XLUUSUSD: {
    prefixedName: 'XLU.US/USD',
    description: 'Utilities Select Sector SPDR Fund'
  },
  XLVUSUSD: {
    prefixedName: 'XLV.US/USD',
    description: 'Health Care Select Sector SPDR Fund'
  },
  XLYUSUSD: {
    prefixedName: 'XLY.US/USD',
    description: 'Consumer Discretionary Select Sector SPDR Fund'
  },
  XOMUSUSD: {
    prefixedName: 'XOM.US/USD',
    description: 'EXXON MOBIL CORP'
  },
  XOPUSUSD: {
    prefixedName: 'XOP.US/USD',
    description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF'
  },
  YUMUSUSD: {
    prefixedName: 'YUM.US/USD',
    description: 'YUM! BRANDS INC'
  },
  ZARJPY: {
    prefixedName: 'ZAR/JPY',
    description: 'South African Rand vs Japanese Yen'
  },
  ZBHUSUSD: {
    prefixedName: 'ZBH.US/USD',
    description: 'ZIMMER BIOMET HOLDINGS INC'
  }
};

export { symbols };

const r = [...document.querySelectorAll('[data-instrument]')]
  .map(n =>
    n
      .getElementsByTagName('div')[0]
      .innerHTML.match(/<strong>(.+)<\/strong>(.+)/i)
  )
  .map(([_, symbol, text]) => [symbol, text])
  .reduce((all, [symbol, text]) => {
    const cleanSymbol = symbol.replace(/\W/gi, '');

    all[cleanSymbol] = {
      prefixedName: symbol,
      description: text
    };

    return all;
  }, {});
