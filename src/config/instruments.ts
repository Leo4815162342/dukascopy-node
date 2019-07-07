// prettier-ignore
type InstrumentData = {
  [key in "aususd"|"aaususd"|"aabaususd"|"aalgbgbx"|"aalususd"|"aaplususd"|"abbsesek"|"abcususd"|"abevususd"|"abfgbgbx"|"abibeeur"|"abtususd"|"acfreur"|"acafreur"|"acseseur"|"acxeseur"|"adbeususd"|"adiususd"|"admgbgbx"|"adpususd"|"adsdeeur"|"adskususd"|"aenaeseur"|"aetususd"|"affreur"|"agkgbgbx"|"agnnleur"|"agsbeeur"|"ahnleur"|"ahtgbgbx"|"aifreur"|"aigususd"|"airfreur"|"akzanleur"|"alfasesek"|"allususd"|"alofreur"|"alvdeeur"|"alxnususd"|"amatususd"|"amdususd"|"amgnususd"|"amseseur"|"amtususd"|"amznususd"|"antmususd"|"antogbgbx"|"apaususd"|"apcususd"|"apdususd"|"asmlnleur"|"atcoasesek"|"atviususd"|"audcad"|"audchf"|"audjpy"|"audnzd"|"audsgd"|"audusd"|"avgbgbx"|"avbususd"|"avgoususd"|"axpususd"|"azngbgbx"|"aznususd"|"azoususd"|"bagbgbx"|"baususd"|"babgbgbx"|"babaususd"|"bacususd"|"barcgbgbx"|"basdeeur"|"batsgbgbx"|"bayndeeur"|"bbdususd"|"bbtususd"|"bbvaeseur"|"bbyususd"|"bdxususd"|"beideeur"|"belgbeeur"|"biduususd"|"biibususd"|"bkususd"|"blndgbgbx"|"bltgbgbx"|"bmwdeeur"|"bmyususd"|"bnfreur"|"bnpfreur"|"bnzlgbgbx"|"bossdeeur"|"bpgbgbx"|"bpususd"|"brbygbgbx"|"brkbususd"|"bsxususd"|"btgbgbx"|"btcusd"|"bundtreur"|"cususd"|"cafreur"|"cabkeseur"|"cadchf"|"cadhkd"|"cadjpy"|"cagususd"|"cahususd"|"capfreur"|"carlbdkdkk"|"catususd"|"cbkdeeur"|"cbsususd"|"cclgbgbx"|"celgususd"|"cfususd"|"chfjpy"|"chfsgd"|"chiidxusd"|"ciususd"|"clususd"|"cmcsaususd"|"cmeususd"|"cmgususd"|"cmiususd"|"cnagbgbx"|"cocoacmdusd"|"coffeecmdusx"|"colususd"|"colobdkdkk"|"condeeur"|"copususd"|"coppercmdusd"|"costususd"|"cottoncmdusx"|"cpggbgbx"|"cpigbgbx"|"crdagbgbx"|"crhgbgbx"|"crmususd"|"csfreur"|"csususd"|"cscoususd"|"csxususd"|"ctlususd"|"ctshususd"|"cvsususd"|"cvxususd"|"dususd"|"daideeur"|"dalususd"|"danskedkdkk"|"db1deeur"|"dbkdeeur"|"deususd"|"dfsususd"|"dgfreur"|"dgususd"|"dgegbgbx"|"dhiususd"|"dhrususd"|"diaeseur"|"diaususd"|"dieselcmdusd"|"disususd"|"dltrususd"|"dnbnonok"|"dollaridxusd"|"dpwdeeur"|"dsmnleur"|"dtedeeur"|"dukususd"|"dvaususd"|"dvnususd"|"dvyususd"|"eaususd"|"ebayususd"|"ebsateur"|"edffreur"|"edppteur"|"eemususd"|"efaususd"|"efxususd"|"eifreur"|"eixususd"|"elususd"|"eleeseur"|"eli1vfieur"|"eluxbsesek"|"embususd"|"emrususd"|"enfreur"|"engeseur"|"engifreur"|"eoandeeur"|"eogususd"|"eqtususd"|"ericbsesek"|"esrxususd"|"ethusd"|"euraud"|"eurcad"|"eurchf"|"eurczk"|"eurdkk"|"eurgbp"|"eurhkd"|"eurhuf"|"eurjpy"|"eurnok"|"eurnzd"|"eurpln"|"eurrub"|"eursek"|"eursgd"|"eurtry"|"eurusd"|"ewhususd"|"ewjususd"|"ewwususd"|"ewzususd"|"excususd"|"expeususd"|"expngbgbx"|"ezjgbgbx"|"ezuususd"|"brentcmdusd"|"fraidxeur"|"usa30idxusd"|"deuidxeur"|"eusidxeur"|"gbridxgbp"|"hkgidxhkd"|"espidxeur"|"lightcmdusd"|"jpnidxjpy"|"usatechidxusd"|"usa500idxusd"|"cheidxchf"|"ausidxaud"|"fususd"|"fbususd"|"fcxususd"|"fdxususd"|"feususd"|"fereseur"|"fmedeeur"|"foxaususd"|"fpfreur"|"frfreur"|"fredeeur"|"fresgbgbx"|"fxiususd"|"galppteur"|"gameseur"|"gascmdusd"|"gaseseur"|"gbpaud"|"gbpcad"|"gbpchf"|"gbpjpy"|"gbpnzd"|"gbpusd"|"gdxususd"|"gdxjususd"|"geususd"|"getibsesek"|"gfsgbgbx"|"gildususd"|"gisususd"|"gldususd"|"glefreur"|"glengbgbx"|"glwususd"|"gmususd"|"googususd"|"googlususd"|"gpsususd"|"gsususd"|"gtonleur"|"gwwususd"|"halususd"|"hcnususd"|"hcpususd"|"hdususd"|"heideeur"|"heianleur"|"hen3deeur"|"hesususd"|"hkdjpy"|"hmbsesek"|"hmsogbgbx"|"honususd"|"hpqususd"|"hsbagbgbx"|"humususd"|"iaggbgbx"|"ibbususd"|"ibeeseur"|"ibmususd"|"iceususd"|"iefususd"|"ifxdeeur"|"ihggbgbx"|"ijhususd"|"ijrususd"|"ilmnususd"|"imtgbgbx"|"indidxusd"|"inganleur"|"intcususd"|"intuususd"|"invebsesek"|"ipgususd"|"isatgbgbx"|"isrgususd"|"itrkgbgbx"|"itubususd"|"itvgbgbx"|"itwususd"|"itxeseur"|"iveususd"|"ivwususd"|"iwdususd"|"iwfususd"|"iwmususd"|"iyrususd"|"jciususd"|"jnjususd"|"jnkususd"|"jpmususd"|"jwnususd"|"kususd"|"kbcbeeur"|"kerfreur"|"keyususd"|"kgfgbgbx"|"khcususd"|"kmbususd"|"kmiususd"|"koususd"|"kpnnleur"|"krususd"|"kssususd"|"lususd"|"landgbgbx"|"lenususd"|"lgengbgbx"|"lhadeeur"|"lifreur"|"lindeeur"|"lloygbgbx"|"llyususd"|"lmtususd"|"lowususd"|"lrfreur"|"lrcxususd"|"lsegbgbx"|"luvususd"|"lvsususd"|"lxsdeeur"|"mususd"|"maususd"|"maerskbdkdkk"|"marususd"|"matususd"|"mcfreur"|"mcdususd"|"mchpususd"|"mckususd"|"mdlzususd"|"metususd"|"mgmususd"|"mhgnonok"|"mksgbgbx"|"mmmususd"|"mndigbgbx"|"moususd"|"mpcususd"|"mrkdeeur"|"mrkususd"|"mroususd"|"mrwgbgbx"|"msususd"|"msftususd"|"mtnleur"|"muususd"|"muv2deeur"|"nblususd"|"ndasesek"|"neeususd"|"nemususd"|"nes1vfieur"|"nflxususd"|"nggbgbx"|"nhynonok"|"nkeususd"|"nldidxeur"|"nocususd"|"novobdkdkk"|"nre1vfieur"|"nrgususd"|"nscususd"|"nvdaususd"|"nwlususd"|"nxtgbgbx"|"nzdcad"|"nzdchf"|"nzdjpy"|"nzdusd"|"nzymbdkdkk"|"ojuicecmdusx"|"okeususd"|"omcususd"|"orfreur"|"orafreur"|"orclususd"|"orknonok"|"orlyususd"|"ote1vfieur"|"out1vfieur"|"oxyususd"|"pah3deeur"|"payxususd"|"pbrususd"|"pcarususd"|"pcgususd"|"pclnususd"|"pepususd"|"pfcgbgbx"|"pfeususd"|"pgususd"|"pgrususd"|"phususd"|"phianleur"|"plnidxpln"|"pmususd"|"pncususd"|"pndoradkdkk"|"ppgususd"|"prugbgbx"|"pruususd"|"psaususd"|"psmdeeur"|"psngbgbx"|"psongbgbx"|"psxususd"|"pubfreur"|"pxdususd"|"pyplususd"|"qcomususd"|"qqqususd"|"randnleur"|"rbgbgbx"|"rbiateur"|"rbsgbgbx"|"rdsanleur"|"rdsbgbgbx"|"reeeseur"|"regnususd"|"relgbgbx"|"rennleur"|"repeseur"|"rfususd"|"rhtususd"|"rifreur"|"riogbgbx"|"rmggbgbx"|"rnofreur"|"rostususd"|"rrgbgbx"|"rrcususd"|"rrsgbgbx"|"rsagbgbx"|"rtnususd"|"rwedeeur"|"saffreur"|"saneseur"|"sanfreur"|"sandsesek"|"sapdeeur"|"sbrygbgbx"|"sbuxususd"|"scabsesek"|"schwususd"|"sdfdeeur"|"sebasesek"|"secubsesek"|"sgdidxsgd"|"sgdjpy"|"sgegbgbx"|"sgofreur"|"shpgbgbx"|"shwususd"|"siedeeur"|"sjmususd"|"skabsesek"|"skfbsesek"|"skygbgbx"|"slvususd"|"smingbgbx"|"sngbgbx"|"snapususd"|"soususd"|"solbbeeur"|"spgususd"|"spyususd"|"ssegbgbx"|"stangbgbx"|"stervfieur"|"stiususd"|"stlnonok"|"sttususd"|"stzususd"|"sufreur"|"sugarcmdusd"|"svtgbgbx"|"swedasesek"|"swkususd"|"swmasesek"|"sykususd"|"symcususd"|"syyususd"|"tususd"|"tapususd"|"tategbgbx"|"tefeseur"|"telnonok"|"tel2bsesek"|"tevaususd"|"tgtususd"|"tifususd"|"tjxususd"|"tkadeeur"|"tls1vfieur"|"tlsnsesek"|"tltususd"|"tlwgbgbx"|"tmoususd"|"tpkgbgbx"|"trowususd"|"trvususd"|"tryjpy"|"tscogbgbx"|"tslaususd"|"tsmususd"|"tsnususd"|"tui1deeur"|"twtrususd"|"txnususd"|"ucbbeeur"|"ugfreur"|"ukgilttrgbp"|"ultaususd"|"ulvrgbgbx"|"umibeeur"|"unanleur"|"unhususd"|"unpususd"|"upsususd"|"usbususd"|"usdcad"|"usdchf"|"usdcnh"|"usdczk"|"usddkk"|"usdhkd"|"usdhuf"|"usdils"|"usdjpy"|"usdmxn"|"usdnok"|"usdpln"|"usdron"|"usdrub"|"usdsek"|"usdsgd"|"usdthb"|"usdtry"|"usdzar"|"usoususd"|"utxususd"|"uugbgbx"|"vususd"|"valeususd"|"veaususd"|"vfcususd"|"vgkususd"|"viabususd"|"viefreur"|"vivfreur"|"vkfreur"|"vloususd"|"vmcususd"|"vnadeeur"|"vnqususd"|"vodgbgbx"|"voeateur"|"volvbsesek"|"vow3deeur"|"vpknleur"|"vrtxususd"|"vwsdkdkk"|"vxxususd"|"vzususd"|"wbaususd"|"wdcususd"|"weirgbgbx"|"wfcususd"|"whrususd"|"wklnleur"|"wmtususd"|"wosgbgbx"|"wppgbgbx"|"wtbgbgbx"|"wynnususd"|"xususd"|"xagusd"|"xauusd"|"xleususd"|"xlfususd"|"xliususd"|"xlkususd"|"xlnxususd"|"xlpususd"|"xluususd"|"xlvususd"|"xlyususd"|"xomususd"|"xopususd"|"yumususd"|"zarjpy"|"zbhususd"]: {
    name: string;
    description: string;
    minStartDate: string;
    decimalFactor: number;
    minStartYearDaily: number;
  }
};

const instruments: InstrumentData = {
  aususd: {
    name: 'A.US/USD',
    description: 'AGILENT TECHNOLOGIES INC',
    minStartDate: '2017-05-25',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  aaususd: {
    name: 'AA.US/USD',
    description: 'ALCOA INC',
    minStartDate: '2018-01-30',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  aabaususd: {
    name: 'AABA.US/USD',
    description: 'ALTABA INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  aalgbgbx: {
    name: 'AAL.GB/GBX',
    description: 'Anglo American PLC',
    minStartDate: '2016-08-01',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  aalususd: {
    name: 'AAL.US/USD',
    description: 'AMERICAN AIRLINES GROUP INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  aaplususd: {
    name: 'AAPL.US/USD',
    description: 'APPLE INC',
    minStartDate: '2017-01-17',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  abbsesek: {
    name: 'ABB.SE/SEK',
    description: 'ABB Ltd',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  abcususd: {
    name: 'ABC.US/USD',
    description: 'AMERISOURCEBERGEN CORP',
    minStartDate: '2018-01-30',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  abevususd: {
    name: 'ABEV.US/USD',
    description: 'Ambev S.A.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  abfgbgbx: {
    name: 'ABF.GB/GBX',
    description: 'Associated British Foods PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  abibeeur: {
    name: 'ABI.BE/EUR',
    description: 'Anheuser-Busch InBev NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  abtususd: {
    name: 'ABT.US/USD',
    description: 'ABBOTT LABORATORIES',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  acfreur: {
    name: 'AC.FR/EUR',
    description: 'Accor SA',
    minStartDate: '2016-08-11',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  acafreur: {
    name: 'ACA.FR/EUR',
    description: 'Credit Agricole SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  acseseur: {
    name: 'ACS.ES/EUR',
    description: 'ACS Actividades de Construccion y Servicios SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  acxeseur: {
    name: 'ACX.ES/EUR',
    description: 'Acerinox SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  adbeususd: {
    name: 'ADBE.US/USD',
    description: 'ADOBE SYSTEMS INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  adiususd: {
    name: 'ADI.US/USD',
    description: 'ANALOG DEVICES INC',
    minStartDate: '2018-01-30',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  admgbgbx: {
    name: 'ADM.GB/GBX',
    description: 'Admiral Group PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  adpususd: {
    name: 'ADP.US/USD',
    description: 'AUTOMATIC DATA PROCESSING',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  adsdeeur: {
    name: 'ADS.DE/EUR',
    description: 'Adidas AG',
    minStartDate: '2015-03-13',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  adskususd: {
    name: 'ADSK.US/USD',
    description: 'AUTODESK INC',
    minStartDate: '2018-01-30',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  aenaeseur: {
    name: 'AENA.ES/EUR',
    description: 'Aena SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2015
  },
  aetususd: {
    name: 'AET.US/USD',
    description: 'AETNA INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  affreur: {
    name: 'AF.FR/EUR',
    description: 'Air France-KLM',
    minStartDate: '2016-09-27',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  agkgbgbx: {
    name: 'AGK.GB/GBX',
    description: 'Aggreko PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  agnnleur: {
    name: 'AGN.NL/EUR',
    description: 'Aegon NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  agsbeeur: {
    name: 'AGS.BE/EUR',
    description: 'Ageas',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ahnleur: {
    name: 'AH.NL/EUR',
    description: 'Koninklijke Ahold Delhaize NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ahtgbgbx: {
    name: 'AHT.GB/GBX',
    description: 'Ashtead Group PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  aifreur: {
    name: 'AI.FR/EUR',
    description: 'Air Liquide SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  aigususd: {
    name: 'AIG.US/USD',
    description: 'AMERICAN INTERNATIONAL GROUP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  airfreur: {
    name: 'AIR.FR/EUR',
    description: 'Airbus Group SE',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2014
  },
  akzanleur: {
    name: 'AKZA.NL/EUR',
    description: 'Akzo Nobel NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  alfasesek: {
    name: 'ALFA.SE/SEK',
    description: 'Alfa Laval AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  allususd: {
    name: 'ALL.US/USD',
    description: 'ALLSTATE CORP',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  alofreur: {
    name: 'ALO.FR/EUR',
    description: 'Alstom SA',
    minStartDate: '2016-09-27',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  alvdeeur: {
    name: 'ALV.DE/EUR',
    description: 'Allianz SE',
    minStartDate: '2015-04-09',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  alxnususd: {
    name: 'ALXN.US/USD',
    description: 'ALEXION PHARMACEUTICALS INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  amatususd: {
    name: 'AMAT.US/USD',
    description: 'APPLIED MATERIALS INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  amdususd: {
    name: 'AMD.US/USD',
    description: 'ADVANCED MICRO DEVICES',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  amgnususd: {
    name: 'AMGN.US/USD',
    description: 'AMGEN INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  amseseur: {
    name: 'AMS.ES/EUR',
    description: 'Amadeus IT Holding SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  amtususd: {
    name: 'AMT.US/USD',
    description: 'AMERICAN TOWER CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  amznususd: {
    name: 'AMZN.US/USD',
    description: 'AMAZON.COM INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  antmususd: {
    name: 'ANTM.US/USD',
    description: 'ANTHEM INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  antogbgbx: {
    name: 'ANTO.GB/GBX',
    description: 'Antofagasta PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  apaususd: {
    name: 'APA.US/USD',
    description: 'APACHE CORP',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  apcususd: {
    name: 'APC.US/USD',
    description: 'ANADARKO PETROLEUM CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  apdususd: {
    name: 'APD.US/USD',
    description: 'AIR PRODUCTS &amp; CHEMICALS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  asmlnleur: {
    name: 'ASML.NL/EUR',
    description: 'ASML Holding NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  atcoasesek: {
    name: 'ATCOA.SE/SEK',
    description: 'Atlas Copco AB',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  atviususd: {
    name: 'ATVI.US/USD',
    description: 'ACTIVISION BLIZZARD INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  audcad: {
    name: 'AUD/CAD',
    description: 'Australian Dollar vs Canadian Dollar',
    minStartDate: '2005-12-26',
    decimalFactor: 100000,
    minStartYearDaily: 1992
  },
  audchf: {
    name: 'AUD/CHF',
    description: 'Australian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  audjpy: {
    name: 'AUD/JPY',
    description: 'Australian Dollar vs Japanese Yen',
    minStartDate: '2003-11-29',
    decimalFactor: 1000,
    minStartYearDaily: 1991
  },
  audnzd: {
    name: 'AUD/NZD',
    description: 'Australian Dollar vs New Zealand Dollar',
    minStartDate: '2006-12-08',
    decimalFactor: 100000,
    minStartYearDaily: 1993
  },
  audsgd: {
    name: 'AUD/SGD',
    description: 'Australian Dollar vs Singapore Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  audusd: {
    name: 'AUD/USD',
    description: 'Australian Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1986
  },
  avgbgbx: {
    name: 'AV.GB/GBX',
    description: 'Aviva PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  avbususd: {
    name: 'AVB.US/USD',
    description: 'AVALONBAY COMMUNITIES INC',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  avgoususd: {
    name: 'AVGO.US/USD',
    description: 'Broadcom Limited',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  axpususd: {
    name: 'AXP.US/USD',
    description: 'AMERICAN EXPRESS CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  azngbgbx: {
    name: 'AZN.GB/GBX',
    description: 'AstraZeneca PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  aznususd: {
    name: 'AZN.US/USD',
    description: 'AstraZeneca PLC',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  azoususd: {
    name: 'AZO.US/USD',
    description: 'AUTOZONE INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bagbgbx: {
    name: 'BA.GB/GBX',
    description: 'BAE Systems PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  baususd: {
    name: 'BA.US/USD',
    description: 'Boeing Co',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  babgbgbx: {
    name: 'BAB.GB/GBX',
    description: 'Babcock International Group PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  babaususd: {
    name: 'BABA.US/USD',
    description: 'ALIBABA GROUP HOLDING-SP ADR',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bacususd: {
    name: 'BAC.US/USD',
    description: 'BANK OF AMERICA CORP',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  barcgbgbx: {
    name: 'BARC.GB/GBX',
    description: 'Barclays PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  basdeeur: {
    name: 'BAS.DE/EUR',
    description: 'BASF SE',
    minStartDate: '2015-04-22',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  batsgbgbx: {
    name: 'BATS.GB/GBX',
    description: 'British American Tobacco PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bayndeeur: {
    name: 'BAYN.DE/EUR',
    description: 'Bayer AG',
    minStartDate: '2015-03-20',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bbdususd: {
    name: 'BBD.US/USD',
    description: 'Banco Bradesco S.A.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bbtususd: {
    name: 'BBT.US/USD',
    description: 'BB&amp;T CORP',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  bbvaeseur: {
    name: 'BBVA.ES/EUR',
    description: 'Banco Bilbao Vizcaya Argentaria SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bbyususd: {
    name: 'BBY.US/USD',
    description: 'BEST BUY CO INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bdxususd: {
    name: 'BDX.US/USD',
    description: 'BECTON DICKINSON AND CO',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  beideeur: {
    name: 'BEI.DE/EUR',
    description: 'Beiersdorf AG',
    minStartDate: '2015-04-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  belgbeeur: {
    name: 'BELG.BE/EUR',
    description: 'Proximus',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  biduususd: {
    name: 'BIDU.US/USD',
    description: 'BAIDU INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  biibususd: {
    name: 'BIIB.US/USD',
    description: 'BIOGEN INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bkususd: {
    name: 'BK.US/USD',
    description: 'BANK OF NEW YORK MELLON CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  blndgbgbx: {
    name: 'BLND.GB/GBX',
    description: 'British Land Co PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bltgbgbx: {
    name: 'BLT.GB/GBX',
    description: 'BHP Billiton PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bmwdeeur: {
    name: 'BMW.DE/EUR',
    description: 'Bayerische Motoren Werke AG',
    minStartDate: '2015-03-24',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bmyususd: {
    name: 'BMY.US/USD',
    description: 'BRISTOL-MYERS SQUIBB CO',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bnfreur: {
    name: 'BN.FR/EUR',
    description: 'Danone SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bnpfreur: {
    name: 'BNP.FR/EUR',
    description: 'BNP Paribas SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bnzlgbgbx: {
    name: 'BNZL.GB/GBX',
    description: 'Bunzl PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bossdeeur: {
    name: 'BOSS.DE/EUR',
    description: 'HUGO BOSS AG',
    minStartDate: '2015-04-09',
    decimalFactor: 1000,
    minStartYearDaily: 2012
  },
  bpgbgbx: {
    name: 'BP.GB/GBX',
    description: 'BP PLC',
    minStartDate: '2016-09-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  bpususd: {
    name: 'BP.US/USD',
    description: 'BP p.l.c.',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  brbygbgbx: {
    name: 'BRBY.GB/GBX',
    description: 'Burberry Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  brkbususd: {
    name: 'BRKB.US/USD',
    description: 'BERKSHIRE HATHAWAY INC-CL B',
    minStartDate: '2017-11-06',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  bsxususd: {
    name: 'BSX.US/USD',
    description: 'BOSTON SCIENTIFIC CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  btgbgbx: {
    name: 'BT.GB/GBX',
    description: 'BT Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  btcusd: {
    name: 'BTC/USD',
    description: 'Bitcoin vs US Dollar',
    minStartDate: '2017-05-07',
    decimalFactor: 10,
    minStartYearDaily: 2017
  },
  bundtreur: {
    name: 'BUND.TR/EUR',
    description: 'Euro Bund',
    minStartDate: '2016-05-02',
    decimalFactor: 1000,
    minStartYearDaily: 2016
  },
  cususd: {
    name: 'C.US/USD',
    description: 'CITIGROUP INC',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cafreur: {
    name: 'CA.FR/EUR',
    description: 'Carrefour SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  cabkeseur: {
    name: 'CABK.ES/EUR',
    description: 'CaixaBank',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  cadchf: {
    name: 'CAD/CHF',
    description: 'Canadian Dollar vs Swiss Franc',
    minStartDate: '2005-12-26',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  cadhkd: {
    name: 'CAD/HKD',
    description: 'Canadian Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 1,
    minStartYearDaily: 1997
  },
  cadjpy: {
    name: 'CAD/JPY',
    description: 'Canadian Dollar vs Japanese Yen',
    minStartDate: '2004-10-20',
    decimalFactor: 1000,
    minStartYearDaily: 1993
  },
  cagususd: {
    name: 'CAG.US/USD',
    description: 'CONAGRA FOODS INC',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  cahususd: {
    name: 'CAH.US/USD',
    description: 'CARDINAL HEALTH INC',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  capfreur: {
    name: 'CAP.FR/EUR',
    description: 'Cap Gemini SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  carlbdkdkk: {
    name: 'CARLB.DK/DKK',
    description: 'Carlsberg A/S',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  catususd: {
    name: 'CAT.US/USD',
    description: 'CATERPILLAR INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cbkdeeur: {
    name: 'CBK.DE/EUR',
    description: 'Commerzbank AG',
    minStartDate: '2015-03-26',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  cbsususd: {
    name: 'CBS.US/USD',
    description: 'CBS CORP-CLASS B NON VOTING',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  cclgbgbx: {
    name: 'CCL.GB/GBX',
    description: 'Carnival PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  celgususd: {
    name: 'CELG.US/USD',
    description: 'CELGENE CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cfususd: {
    name: 'CF.US/USD',
    description: 'CF INDUSTRIES HOLDINGS INC',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  chfjpy: {
    name: 'CHF/JPY',
    description: 'Swiss Franc vs Japanese Yen',
    minStartDate: '2003-08-03',
    decimalFactor: 1000,
    minStartYearDaily: 1990
  },
  chfsgd: {
    name: 'CHF/SGD',
    description: 'Swiss Franc vs Singapore Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1998
  },
  chiidxusd: {
    name: 'CHI.IDX/USD',
    description: 'China A50 Index',
    minStartDate: '2017-07-17',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ciususd: {
    name: 'CI.US/USD',
    description: 'CIGNA CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  clususd: {
    name: 'CL.US/USD',
    description: 'COLGATE-PALMOLIVE CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cmcsaususd: {
    name: 'CMCSA.US/USD',
    description: 'COMCAST CORP-CLASS A',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cmeususd: {
    name: 'CME.US/USD',
    description: 'CME GROUP INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cmgususd: {
    name: 'CMG.US/USD',
    description: 'CHIPOTLE MEXICAN GRILL INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cmiususd: {
    name: 'CMI.US/USD',
    description: 'CUMMINS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  cnagbgbx: {
    name: 'CNA.GB/GBX',
    description: 'Centrica PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  cocoacmdusd: {
    name: 'COCOA.CMD/USD',
    description: 'NY Cocoa',
    minStartDate: '2017-10-20',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  coffeecmdusx: {
    name: 'COFFEE.CMD/USX',
    description: 'Coffee Arabica',
    minStartDate: '2017-12-04',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  colususd: {
    name: 'COL.US/USD',
    description: 'ROCKWELL COLLINS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  colobdkdkk: {
    name: 'COLOB.DK/DKK',
    description: 'Coloplast A/S',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  condeeur: {
    name: 'CON.DE/EUR',
    description: 'Continental AG',
    minStartDate: '2015-04-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  copususd: {
    name: 'COP.US/USD',
    description: 'CONOCOPHILLIPS',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  coppercmdusd: {
    name: 'COPPER.CMD/USD',
    description: 'High Grade Copper',
    minStartDate: '2012-03-01',
    decimalFactor: 10000,
    minStartYearDaily: 2012
  },
  costususd: {
    name: 'COST.US/USD',
    description: 'COSTCO WHOLESALE CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cottoncmdusx: {
    name: 'COTTON.CMD/USX',
    description: 'Cotton',
    minStartDate: '2017-10-20',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cpggbgbx: {
    name: 'CPG.GB/GBX',
    description: 'Compass Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  cpigbgbx: {
    name: 'CPI.GB/GBX',
    description: 'Capita PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  crdagbgbx: {
    name: 'CRDA.GB/GBX',
    description: 'Croda International PLC',
    minStartDate: '2016-11-01',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  crhgbgbx: {
    name: 'CRH.GB/GBX',
    description: 'CRH PLC',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  crmususd: {
    name: 'CRM.US/USD',
    description: 'SALESFORCE.COM INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  csfreur: {
    name: 'CS.FR/EUR',
    description: 'AXA SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  csususd: {
    name: 'CS.US/USD',
    description: 'Credit Suisse Group AG',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cscoususd: {
    name: 'CSCO.US/USD',
    description: 'CISCO SYSTEMS INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  csxususd: {
    name: 'CSX.US/USD',
    description: 'CSX CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ctlususd: {
    name: 'CTL.US/USD',
    description: 'CENTURYLINK INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ctshususd: {
    name: 'CTSH.US/USD',
    description: 'COGNIZANT TECH SOLUTIONS-A',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cvsususd: {
    name: 'CVS.US/USD',
    description: 'CVS HEALTH CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  cvxususd: {
    name: 'CVX.US/USD',
    description: 'CHEVRON CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dususd: {
    name: 'D.US/USD',
    description: 'DOMINION RESOURCES INC/VA',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  daideeur: {
    name: 'DAI.DE/EUR',
    description: 'Daimler AG',
    minStartDate: '2015-03-27',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dalususd: {
    name: 'DAL.US/USD',
    description: 'DELTA AIR LINES INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  danskedkdkk: {
    name: 'DANSKE.DK/DKK',
    description: 'Danske Bank A/S',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  db1deeur: {
    name: 'DB1.DE/EUR',
    description: 'Deutsche Boerse AG',
    minStartDate: '2015-04-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dbkdeeur: {
    name: 'DBK.DE/EUR',
    description: 'Deutsche Bank AG',
    minStartDate: '2015-03-25',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  deususd: {
    name: 'DE.US/USD',
    description: 'DEERE &amp; CO',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dfsususd: {
    name: 'DFS.US/USD',
    description: 'DISCOVER FINANCIAL SERVICES',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  dgfreur: {
    name: 'DG.FR/EUR',
    description: 'Vinci SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dgususd: {
    name: 'DG.US/USD',
    description: 'DOLLAR GENERAL CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dgegbgbx: {
    name: 'DGE.GB/GBX',
    description: 'Diageo PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dhiususd: {
    name: 'DHI.US/USD',
    description: 'DR HORTON INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  dhrususd: {
    name: 'DHR.US/USD',
    description: 'DANAHER CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  diaeseur: {
    name: 'DIA.ES/EUR',
    description: 'Distribuidora Internacional de Alimentacion SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  diaususd: {
    name: 'DIA.US/USD',
    description: 'SPDR Dow Jones® Industrial Average ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dieselcmdusd: {
    name: 'DIESEL.CMD/USD',
    description: 'Gas oil',
    minStartDate: '2017-10-20',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  disususd: {
    name: 'DIS.US/USD',
    description: 'WALT DISNEY CO/THE',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dltrususd: {
    name: 'DLTR.US/USD',
    description: 'DOLLAR TREE INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dnbnonok: {
    name: 'DNB.NO/NOK',
    description: 'DNB ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dollaridxusd: {
    name: 'DOLLAR.IDX/USD',
    description: 'US Dollar Index',
    minStartDate: '2017-12-01',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dpwdeeur: {
    name: 'DPW.DE/EUR',
    description: 'Deutsche Post AG',
    minStartDate: '2015-03-31',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dsmnleur: {
    name: 'DSM.NL/EUR',
    description: 'Koninklijke DSM NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dtedeeur: {
    name: 'DTE.DE/EUR',
    description: 'Deutsche Telekom AG',
    minStartDate: '2015-03-31',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  dukususd: {
    name: 'DUK.US/USD',
    description: 'DUKE ENERGY CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  dvaususd: {
    name: 'DVA.US/USD',
    description: 'DAVITA HEALTHCARE PARTNERS I',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  dvnususd: {
    name: 'DVN.US/USD',
    description: 'DEVON ENERGY CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  dvyususd: {
    name: 'DVY.US/USD',
    description: 'iShares Select Dividend ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  eaususd: {
    name: 'EA.US/USD',
    description: 'ELECTRONIC ARTS INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ebayususd: {
    name: 'EBAY.US/USD',
    description: 'EBAY INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ebsateur: {
    name: 'EBS.AT/EUR',
    description: 'Erste Group Bank AG',
    minStartDate: '2016-11-04',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  edffreur: {
    name: 'EDF.FR/EUR',
    description: 'Electricite de France SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  edppteur: {
    name: 'EDP.PT/EUR',
    description: 'EDP - Energias de Portugal SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  eemususd: {
    name: 'EEM.US/USD',
    description: 'iShares MSCI Emerging Markets ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  efaususd: {
    name: 'EFA.US/USD',
    description: 'iShares MSCI EAFE ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  efxususd: {
    name: 'EFX.US/USD',
    description: 'EQUIFAX INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  eifreur: {
    name: 'EI.FR/EUR',
    description: 'Essilor International SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  eixususd: {
    name: 'EIX.US/USD',
    description: 'EDISON INTERNATIONAL',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  elususd: {
    name: 'EL.US/USD',
    description: 'ESTEE LAUDER COMPANIES-CL A',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  eleeseur: {
    name: 'ELE.ES/EUR',
    description: 'Endesa SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  eli1vfieur: {
    name: 'ELI1V.FI/EUR',
    description: 'Elisa OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  eluxbsesek: {
    name: 'ELUXB.SE/SEK',
    description: 'Electrolux AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  embususd: {
    name: 'EMB.US/USD',
    description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  emrususd: {
    name: 'EMR.US/USD',
    description: 'EMERSON ELECTRIC CO',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  enfreur: {
    name: 'EN.FR/EUR',
    description: 'Bouygues SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  engeseur: {
    name: 'ENG.ES/EUR',
    description: 'Enagas SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  engifreur: {
    name: 'ENGI.FR/EUR',
    description: 'Engie',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2015
  },
  eoandeeur: {
    name: 'EOAN.DE/EUR',
    description: 'E.ON SE',
    minStartDate: '2015-04-20',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  eogususd: {
    name: 'EOG.US/USD',
    description: 'EOG RESOURCES INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  eqtususd: {
    name: 'EQT.US/USD',
    description: 'EQT CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ericbsesek: {
    name: 'ERICB.SE/SEK',
    description: 'Telefonaktiebolaget LM Ericsson',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  esrxususd: {
    name: 'ESRX.US/USD',
    description: 'EXPRESS SCRIPTS HOLDING CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ethusd: {
    name: 'ETH/USD',
    description: 'Ether vs US Dollar',
    minStartDate: '2017-12-11',
    decimalFactor: 10,
    minStartYearDaily: 2017
  },
  euraud: {
    name: 'EUR/AUD',
    description: 'Euro vs Australian Dollar',
    minStartDate: '2005-10-02',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  eurcad: {
    name: 'EUR/CAD',
    description: 'Euro vs Canadian Dollar',
    minStartDate: '2004-10-20',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  eurchf: {
    name: 'EUR/CHF',
    description: 'Euro vs Swiss Franc',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  eurczk: {
    name: 'EUR/CZK',
    description: 'Euro vs Czech Koruna',
    minStartDate: '2016-01-03',
    decimalFactor: 10000,
    minStartYearDaily: 2016
  },
  eurdkk: {
    name: 'EUR/DKK',
    description: 'Euro vs Danish Krone',
    minStartDate: '2004-10-20',
    decimalFactor: 100000,
    minStartYearDaily: 1993
  },
  eurgbp: {
    name: 'EUR/GBP',
    description: 'Euro vs Pound Sterling',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1995
  },
  eurhkd: {
    name: 'EUR/HKD',
    description: 'Euro vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  eurhuf: {
    name: 'EUR/HUF',
    description: 'Euro vs Hungarian Forint',
    minStartDate: '2007-03-13',
    decimalFactor: 1000,
    minStartYearDaily: 1999
  },
  eurjpy: {
    name: 'EUR/JPY',
    description: 'Euro vs Japanese Yen',
    minStartDate: '2003-08-03',
    decimalFactor: 1000,
    minStartYearDaily: 1972
  },
  eurnok: {
    name: 'EUR/NOK',
    description: 'Euro vs Norwegian Krone',
    minStartDate: '2004-10-20',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  eurnzd: {
    name: 'EUR/NZD',
    description: 'Euro vs New Zealand Dollar',
    minStartDate: '2005-12-26',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  eurpln: {
    name: 'EUR/PLN',
    description: 'Euro vs Polish Zloty',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  eurrub: {
    name: 'EUR/RUB',
    description: 'Euro vs Russian Rouble',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  eursek: {
    name: 'EUR/SEK',
    description: 'Euro vs Swedish Krona',
    minStartDate: '2004-10-27',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  eursgd: {
    name: 'EUR/SGD',
    description: 'Euro vs Singapore Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1998
  },
  eurtry: {
    name: 'EUR/TRY',
    description: 'Euro vs Turkish Lira',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 2005
  },
  eurusd: {
    name: 'EUR/USD',
    description: 'Euro vs US Dollar',
    minStartDate: '2003-05-04',
    decimalFactor: 100000,
    minStartYearDaily: 1972
  },
  ewhususd: {
    name: 'EWH.US/USD',
    description: 'iShares MSCI Hong Kong ETF',
    minStartDate: '2017-11-06',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ewjususd: {
    name: 'EWJ.US/USD',
    description: 'iShares MSCI Japan ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ewwususd: {
    name: 'EWW.US/USD',
    description: 'iShares MSCI Mexico Capped',
    minStartDate: '2017-03-13',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ewzususd: {
    name: 'EWZ.US/USD',
    description: 'iShares MSCI Brazil Capped',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  excususd: {
    name: 'EXC.US/USD',
    description: 'EXELON CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  expeususd: {
    name: 'EXPE.US/USD',
    description: 'EXPEDIA INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  expngbgbx: {
    name: 'EXPN.GB/GBX',
    description: 'Experian PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ezjgbgbx: {
    name: 'EZJ.GB/GBX',
    description: 'easyJet PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ezuususd: {
    name: 'EZU.US/USD',
    description: 'iShares MSCI EMU ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  brentcmdusd: {
    name: 'BRENT.CMD/USD',
    description: 'US Brent Crude Oil',
    minStartDate: '2010-12-02',
    decimalFactor: 2,
    minStartYearDaily: 2006
  },
  fraidxeur: {
    name: 'FRA.IDX/EUR',
    description: 'France 40 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1987
  },
  usa30idxusd: {
    name: 'USA30.IDX/USD',
    description: 'USA 30 Index',
    minStartDate: '2013-09-30',
    decimalFactor: 5,
    minStartYearDaily: 2013
  },
  deuidxeur: {
    name: 'DEU.IDX/EUR',
    description: 'Germany 30 Index',
    minStartDate: '2013-09-30',
    decimalFactor: 5,
    minStartYearDaily: 2013
  },
  eusidxeur: {
    name: 'EUS.IDX/EUR',
    description: 'Europe 50 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1998
  },
  gbridxgbp: {
    name: 'GBR.IDX/GBP',
    description: 'UK 100 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1988
  },
  hkgidxhkd: {
    name: 'HKG.IDX/HKD',
    description: 'Hong Kong 40 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 5,
    minStartYearDaily: 1990
  },
  espidxeur: {
    name: 'ESP.IDX/EUR',
    description: 'Spain 35 Index',
    minStartDate: '2012-01-02',
    decimalFactor: 4,
    minStartYearDaily: 1992
  },
  lightcmdusd: {
    name: 'LIGHT.CMD/USD',
    description: 'US Light Crude Oil',
    minStartDate: '2011-09-23',
    decimalFactor: 2,
    minStartYearDaily: 1983
  },
  jpnidxjpy: {
    name: 'JPN.IDX/JPY',
    description: 'Japan 225',
    minStartDate: '2011-09-18',
    decimalFactor: 5,
    minStartYearDaily: 1986
  },
  usatechidxusd: {
    name: 'USATECH.IDX/USD',
    description: 'USA 100 Technical Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1990
  },
  usa500idxusd: {
    name: 'USA500.IDX/USD',
    description: 'USA 500 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1980
  },
  cheidxchf: {
    name: 'CHE.IDX/CHF',
    description: 'Switzerland 20 Index',
    minStartDate: '2011-09-18',
    decimalFactor: 4,
    minStartYearDaily: 1992
  },
  ausidxaud: {
    name: 'AUS.IDX/AUD',
    description: 'Australia 200 Index',
    minStartDate: '2013-01-02',
    decimalFactor: 4,
    minStartYearDaily: 1982
  },
  fususd: {
    name: 'F.US/USD',
    description: 'FORD MOTOR CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  fbususd: {
    name: 'FB.US/USD',
    description: 'FACEBOOK INC-A',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  fcxususd: {
    name: 'FCX.US/USD',
    description: 'FREEPORT-MCMORAN INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  fdxususd: {
    name: 'FDX.US/USD',
    description: 'FEDEX CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  feususd: {
    name: 'FE.US/USD',
    description: 'FIRSTENERGY CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  fereseur: {
    name: 'FER.ES/EUR',
    description: 'Ferrovial SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  fmedeeur: {
    name: 'FME.DE/EUR',
    description: 'Fresenius Medical Care AG &amp; Co KGaA',
    minStartDate: '2015-04-01',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  foxaususd: {
    name: 'FOXA.US/USD',
    description: 'TWENTY-FIRST CENTURY FOX-A',
    minStartDate: '2018-01-31',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  fpfreur: {
    name: 'FP.FR/EUR',
    description: 'Total SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  frfreur: {
    name: 'FR.FR/EUR',
    description: 'Valeo SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  fredeeur: {
    name: 'FRE.DE/EUR',
    description: 'Fresenius SE &amp; Co KGaA',
    minStartDate: '2015-04-10',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  fresgbgbx: {
    name: 'FRES.GB/GBX',
    description: 'Fresnillo PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  fxiususd: {
    name: 'FXI.US/USD',
    description: 'iShares China Large-Cap ETF',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  galppteur: {
    name: 'GALP.PT/EUR',
    description: 'Galp Energia SGPS SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gameseur: {
    name: 'GAM.ES/EUR',
    description: 'Gamesa Corporacion Tecnologica SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gascmdusd: {
    name: 'GAS.CMD/USD',
    description: 'Natural Gas',
    minStartDate: '2012-08-20',
    decimalFactor: 10000,
    minStartYearDaily: 2012
  },
  gaseseur: {
    name: 'GAS.ES/EUR',
    description: 'Gas Natural SDG SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gbpaud: {
    name: 'GBP/AUD',
    description: 'Pound Sterling vs Australian Dollar',
    minStartDate: '2006-01-01',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  gbpcad: {
    name: 'GBP/CAD',
    description: 'Pound Sterling vs Canadian Dollar',
    minStartDate: '2006-01-01',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  gbpchf: {
    name: 'GBP/CHF',
    description: 'Pound Sterling vs Swiss Franc',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  gbpjpy: {
    name: 'GBP/JPY',
    description: 'Pound Sterling vs Japanese Yen',
    minStartDate: '2003-08-03',
    decimalFactor: 1000,
    minStartYearDaily: 1991
  },
  gbpnzd: {
    name: 'GBP/NZD',
    description: 'Pound Sterling vs New Zealand Dollar',
    minStartDate: '2006-01-01',
    decimalFactor: 100000,
    minStartYearDaily: 1994
  },
  gbpusd: {
    name: 'GBP/USD',
    description: 'Pound Sterling vs US Dollar',
    minStartDate: '2003-05-04',
    decimalFactor: 100000,
    minStartYearDaily: 1986
  },
  gdxususd: {
    name: 'GDX.US/USD',
    description: 'VanEck Vectors Gold Miners ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  gdxjususd: {
    name: 'GDXJ.US/USD',
    description: 'VanEck Vectors Junior Gold Miners ETF',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  geususd: {
    name: 'GE.US/USD',
    description: 'GENERAL ELECTRIC CO',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  getibsesek: {
    name: 'GETIB.SE/SEK',
    description: 'Getinge AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gfsgbgbx: {
    name: 'GFS.GB/GBX',
    description: 'G4S PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gildususd: {
    name: 'GILD.US/USD',
    description: 'GILEAD SCIENCES INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  gisususd: {
    name: 'GIS.US/USD',
    description: 'GENERAL MILLS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  gldususd: {
    name: 'GLD.US/USD',
    description: 'SPDR Gold Shares ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  glefreur: {
    name: 'GLE.FR/EUR',
    description: 'Societe Generale SA',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  glengbgbx: {
    name: 'GLEN.GB/GBX',
    description: 'Glencore PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  glwususd: {
    name: 'GLW.US/USD',
    description: 'CORNING INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  gmususd: {
    name: 'GM.US/USD',
    description: 'GENERAL MOTORS CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  googususd: {
    name: 'GOOG.US/USD',
    description: 'ALPHABET INC-CL C',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  googlususd: {
    name: 'GOOGL.US/USD',
    description: 'ALPHABET INC-CL A',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  gpsususd: {
    name: 'GPS.US/USD',
    description: 'GAP INC/THE',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  gsususd: {
    name: 'GS.US/USD',
    description: 'GOLDMAN SACHS GROUP INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  gtonleur: {
    name: 'GTO.NL/EUR',
    description: 'Gemalto NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  gwwususd: {
    name: 'GWW.US/USD',
    description: 'WW GRAINGER INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  halususd: {
    name: 'HAL.US/USD',
    description: 'HALLIBURTON CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  hcnususd: {
    name: 'HCN.US/USD',
    description: 'WELLTOWER INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  hcpususd: {
    name: 'HCP.US/USD',
    description: 'HCP INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  hdususd: {
    name: 'HD.US/USD',
    description: 'HOME DEPOT INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  heideeur: {
    name: 'HEI.DE/EUR',
    description: 'HeidelbergCement AG',
    minStartDate: '2015-04-02',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  heianleur: {
    name: 'HEIA.NL/EUR',
    description: 'Heineken NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  hen3deeur: {
    name: 'HEN3.DE/EUR',
    description: 'Henkel AG &amp; Co KGaA',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  hesususd: {
    name: 'HES.US/USD',
    description: 'HESS CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  hkdjpy: {
    name: 'HKD/JPY',
    description: 'Hong Kong Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1997
  },
  hmbsesek: {
    name: 'HMB.SE/SEK',
    description: 'Hennes &amp; Mauritz AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  hmsogbgbx: {
    name: 'HMSO.GB/GBX',
    description: 'Hammerson PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  honususd: {
    name: 'HON.US/USD',
    description: 'HONEYWELL INTERNATIONAL INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  hpqususd: {
    name: 'HPQ.US/USD',
    description: 'HP INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  hsbagbgbx: {
    name: 'HSBA.GB/GBX',
    description: 'HSBC Holdings PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  humususd: {
    name: 'HUM.US/USD',
    description: 'HUMANA INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  iaggbgbx: {
    name: 'IAG.GB/GBX',
    description: 'International Consolidated Airlines Grou',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ibbususd: {
    name: 'IBB.US/USD',
    description: 'iShares Nasdaq Biotechnology ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ibeeseur: {
    name: 'IBE.ES/EUR',
    description: 'Iberdrola SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ibmususd: {
    name: 'IBM.US/USD',
    description: 'INTL BUSINESS MACHINES CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  iceususd: {
    name: 'ICE.US/USD',
    description: 'INTERCONTINENTAL EXCHANGE IN',
    minStartDate: '2017-11-06',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  iefususd: {
    name: 'IEF.US/USD',
    description: 'iShares 7-10 Year Treasury Bond ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  ifxdeeur: {
    name: 'IFX.DE/EUR',
    description: 'Infineon Technologies AG',
    minStartDate: '2015-04-13',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ihggbgbx: {
    name: 'IHG.GB/GBX',
    description: 'InterContinental Hotels Group PLC',
    minStartDate: '2016-11-01',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ijhususd: {
    name: 'IJH.US/USD',
    description: 'iShares Core S&amp;P Mid-Cap ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  ijrususd: {
    name: 'IJR.US/USD',
    description: 'iShares Core S&amp;P Small-Cap ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ilmnususd: {
    name: 'ILMN.US/USD',
    description: 'ILLUMINA INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  imtgbgbx: {
    name: 'IMT.GB/GBX',
    description: 'Imperial Brands Plc',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2016
  },
  indidxusd: {
    name: 'IND.IDX/USD',
    description: 'India 50 Index',
    minStartDate: '2017-12-01',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  inganleur: {
    name: 'INGA.NL/EUR',
    description: 'ING Groep NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2016
  },
  intcususd: {
    name: 'INTC.US/USD',
    description: 'INTEL CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  intuususd: {
    name: 'INTU.US/USD',
    description: 'INTUIT INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  invebsesek: {
    name: 'INVEB.SE/SEK',
    description: 'Investor AB',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ipgususd: {
    name: 'IPG.US/USD',
    description: 'INTERPUBLIC GROUP OF COS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  isatgbgbx: {
    name: 'ISAT.GB/GBX',
    description: 'Inmarsat PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  isrgususd: {
    name: 'ISRG.US/USD',
    description: 'INTUITIVE SURGICAL INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  itrkgbgbx: {
    name: 'ITRK.GB/GBX',
    description: 'Intertek Group PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  itubususd: {
    name: 'ITUB.US/USD',
    description: 'Itau Unibanco Holding S.A.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  itvgbgbx: {
    name: 'ITV.GB/GBX',
    description: 'ITV PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  itwususd: {
    name: 'ITW.US/USD',
    description: 'ILLINOIS TOOL WORKS',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  itxeseur: {
    name: 'ITX.ES/EUR',
    description: 'Inditex SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  iveususd: {
    name: 'IVE.US/USD',
    description: 'iShares S&amp;P 500 Value ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ivwususd: {
    name: 'IVW.US/USD',
    description: 'iShares S&amp;P 500 Growth ETF',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  iwdususd: {
    name: 'IWD.US/USD',
    description: 'iShares Russell 1000 Value ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  iwfususd: {
    name: 'IWF.US/USD',
    description: 'iShares Russell 1000 Growth ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  iwmususd: {
    name: 'IWM.US/USD',
    description: 'iShares Russell 2000 ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  iyrususd: {
    name: 'IYR.US/USD',
    description: 'iShares U.S. Real Estate ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  jciususd: {
    name: 'JCI.US/USD',
    description: 'JOHNSON CONTROLS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  jnjususd: {
    name: 'JNJ.US/USD',
    description: 'JOHNSON &amp; JOHNSON',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  jnkususd: {
    name: 'JNK.US/USD',
    description: 'SPDR Barclays Capital High Yield Bond ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  jpmususd: {
    name: 'JPM.US/USD',
    description: 'JPMORGAN CHASE &amp; CO',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  jwnususd: {
    name: 'JWN.US/USD',
    description: 'NORDSTROM INC',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kususd: {
    name: 'K.US/USD',
    description: 'KELLOGG CO',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kbcbeeur: {
    name: 'KBC.BE/EUR',
    description: 'KBC Groep NV',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  kerfreur: {
    name: 'KER.FR/EUR',
    description: 'Kering',
    minStartDate: '2016-09-30',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  keyususd: {
    name: 'KEY.US/USD',
    description: 'KEYCORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kgfgbgbx: {
    name: 'KGF.GB/GBX',
    description: 'Kingfisher PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  khcususd: {
    name: 'KHC.US/USD',
    description: 'KRAFT HEINZ CO/THE',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kmbususd: {
    name: 'KMB.US/USD',
    description: 'KIMBERLY-CLARK CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kmiususd: {
    name: 'KMI.US/USD',
    description: 'KINDER MORGAN INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  koususd: {
    name: 'KO.US/USD',
    description: 'COCA-COLA CO/THE',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kpnnleur: {
    name: 'KPN.NL/EUR',
    description: 'Koninklijke KPN NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  krususd: {
    name: 'KR.US/USD',
    description: 'KROGER CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  kssususd: {
    name: 'KSS.US/USD',
    description: 'KOHLS CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  lususd: {
    name: 'L.US/USD',
    description: 'LOEWS CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  landgbgbx: {
    name: 'LAND.GB/GBX',
    description: 'Land Securities Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lenususd: {
    name: 'LEN.US/USD',
    description: 'LENNAR CORP-A',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lgengbgbx: {
    name: 'LGEN.GB/GBX',
    description: 'Legal &amp; General Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lhadeeur: {
    name: 'LHA.DE/EUR',
    description: 'Deutsche Lufthansa AG',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lifreur: {
    name: 'LI.FR/EUR',
    description: 'Klepierre',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lindeeur: {
    name: 'LIN.DE/EUR',
    description: 'Linde AG',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lloygbgbx: {
    name: 'LLOY.GB/GBX',
    description: 'Lloyds Banking Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  llyususd: {
    name: 'LLY.US/USD',
    description: 'ELI LILLY &amp; CO',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lmtususd: {
    name: 'LMT.US/USD',
    description: 'LOCKHEED MARTIN CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lowususd: {
    name: 'LOW.US/USD',
    description: "LOWE'S COS INC",
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lrfreur: {
    name: 'LR.FR/EUR',
    description: 'Legrand SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  lrcxususd: {
    name: 'LRCX.US/USD',
    description: 'LAM RESEARCH CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lsegbgbx: {
    name: 'LSE.GB/GBX',
    description: 'London Stock Exchange Group PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  luvususd: {
    name: 'LUV.US/USD',
    description: 'SOUTHWEST AIRLINES CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lvsususd: {
    name: 'LVS.US/USD',
    description: 'Las Vegas Sands Corp.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  lxsdeeur: {
    name: 'LXS.DE/EUR',
    description: 'Lanxess AG',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  mususd: {
    name: 'M.US/USD',
    description: "MACY'S INC",
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  maususd: {
    name: 'MA.US/USD',
    description: 'MASTERCARD INC-CLASS A',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  maerskbdkdkk: {
    name: 'MAERSKB.DK/DKK',
    description: 'AP Moeller - Maersk A/S',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  marususd: {
    name: 'MAR.US/USD',
    description: 'MARRIOTT INTERNATIONAL -CL A',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  matususd: {
    name: 'MAT.US/USD',
    description: 'MATTEL INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  mcfreur: {
    name: 'MC.FR/EUR',
    description: 'LVMH Moet Hennessy Louis Vuitton SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  mcdususd: {
    name: 'MCD.US/USD',
    description: "MCDONALD'S CORP",
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mchpususd: {
    name: 'MCHP.US/USD',
    description: 'MICROCHIP TECHNOLOGY INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  mckususd: {
    name: 'MCK.US/USD',
    description: 'MCKESSON CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mdlzususd: {
    name: 'MDLZ.US/USD',
    description: 'MONDELEZ INTERNATIONAL INC-A',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  metususd: {
    name: 'MET.US/USD',
    description: 'METLIFE INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mgmususd: {
    name: 'MGM.US/USD',
    description: 'MGM RESORTS INTERNATIONAL',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mhgnonok: {
    name: 'MHG.NO/NOK',
    description: 'Marine Harvest ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  mksgbgbx: {
    name: 'MKS.GB/GBX',
    description: 'Marks &amp; Spencer Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  mmmususd: {
    name: 'MMM.US/USD',
    description: '3M CO',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mndigbgbx: {
    name: 'MNDI.GB/GBX',
    description: 'Mondi PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  moususd: {
    name: 'MO.US/USD',
    description: 'ALTRIA GROUP INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mpcususd: {
    name: 'MPC.US/USD',
    description: 'MARATHON PETROLEUM CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  mrkdeeur: {
    name: 'MRK.DE/EUR',
    description: 'Merck KGaA',
    minStartDate: '2015-03-24',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  mrkususd: {
    name: 'MRK.US/USD',
    description: 'MERCK &amp; CO. INC.',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mroususd: {
    name: 'MRO.US/USD',
    description: 'MARATHON OIL CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  mrwgbgbx: {
    name: 'MRW.GB/GBX',
    description: 'WM Morrison Supermarkets PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  msususd: {
    name: 'MS.US/USD',
    description: 'MORGAN STANLEY',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  msftususd: {
    name: 'MSFT.US/USD',
    description: 'MICROSOFT CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  mtnleur: {
    name: 'MT.NL/EUR',
    description: 'ArcelorMittal',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  muususd: {
    name: 'MU.US/USD',
    description: 'MICRON TECHNOLOGY INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  muv2deeur: {
    name: 'MUV2.DE/EUR',
    description: 'Muenchener Rueckversicherungs AG',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nblususd: {
    name: 'NBL.US/USD',
    description: 'NOBLE ENERGY INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  ndasesek: {
    name: 'NDA.SE/SEK',
    description: 'Nordea Bank AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  neeususd: {
    name: 'NEE.US/USD',
    description: 'NEXTERA ENERGY INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  nemususd: {
    name: 'NEM.US/USD',
    description: 'NEWMONT MINING CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  nes1vfieur: {
    name: 'NES1V.FI/EUR',
    description: 'Neste OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nflxususd: {
    name: 'NFLX.US/USD',
    description: 'NETFLIX INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  nggbgbx: {
    name: 'NG.GB/GBX',
    description: 'National Grid PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nhynonok: {
    name: 'NHY.NO/NOK',
    description: 'Norsk Hydro ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nkeususd: {
    name: 'NKE.US/USD',
    description: 'NIKE INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  nldidxeur: {
    name: 'NLD.IDX/EUR',
    description: 'Netherlands 25 Index',
    minStartDate: '2013-02-27',
    decimalFactor: 1000,
    minStartYearDaily: 1999
  },
  nocususd: {
    name: 'NOC.US/USD',
    description: 'NORTHROP GRUMMAN CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  novobdkdkk: {
    name: 'NOVOB.DK/DKK',
    description: 'Novo Nordisk A/S',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nre1vfieur: {
    name: 'NRE1V.FI/EUR',
    description: 'Nokian Renkaat OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nrgususd: {
    name: 'NRG.US/USD',
    description: 'NRG ENERGY INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  nscususd: {
    name: 'NSC.US/USD',
    description: 'NORFOLK SOUTHERN CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  nvdaususd: {
    name: 'NVDA.US/USD',
    description: 'NVIDIA CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  nwlususd: {
    name: 'NWL.US/USD',
    description: 'NEWELL BRANDS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  nxtgbgbx: {
    name: 'NXT.GB/GBX',
    description: 'Next PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  nzdcad: {
    name: 'NZD/CAD',
    description: 'New Zealand Dollar vs Canadian Dollar',
    minStartDate: '2006-01-01',
    decimalFactor: 100000,
    minStartYearDaily: 2002
  },
  nzdchf: {
    name: 'NZD/CHF',
    description: 'New Zealand Dollar vs Swiss Franc',
    minStartDate: '2006-01-01',
    decimalFactor: 100000,
    minStartYearDaily: 1997
  },
  nzdjpy: {
    name: 'NZD/JPY',
    description: 'New Zealand Dollar vs Japanese Yen',
    minStartDate: '2006-01-01',
    decimalFactor: 1000,
    minStartYearDaily: 1997
  },
  nzdusd: {
    name: 'NZD/USD',
    description: 'New Zealand Dollar vs US Dollar',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  nzymbdkdkk: {
    name: 'NZYMB.DK/DKK',
    description: 'Novozymes A/S',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ojuicecmdusx: {
    name: 'OJUICE.CMD/USX',
    description: 'Orange Juice',
    minStartDate: '2017-10-20',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  okeususd: {
    name: 'OKE.US/USD',
    description: 'ONEOK INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  omcususd: {
    name: 'OMC.US/USD',
    description: 'OMNICOM GROUP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  orfreur: {
    name: 'OR.FR/EUR',
    description: "L'Oreal SA",
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  orafreur: {
    name: 'ORA.FR/EUR',
    description: 'Orange SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2013
  },
  orclususd: {
    name: 'ORCL.US/USD',
    description: 'ORACLE CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  orknonok: {
    name: 'ORK.NO/NOK',
    description: 'Orkla ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  orlyususd: {
    name: 'ORLY.US/USD',
    description: "O'REILLY AUTOMOTIVE INC",
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ote1vfieur: {
    name: 'OTE1V.FI/EUR',
    description: 'Outotec OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  out1vfieur: {
    name: 'OUT1V.FI/EUR',
    description: 'Outokumpu OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  oxyususd: {
    name: 'OXY.US/USD',
    description: 'OCCIDENTAL PETROLEUM CORP',
    minStartDate: '2017-05-11',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pah3deeur: {
    name: 'PAH3.DE/EUR',
    description: 'Porsche Automobil Holding SE',
    minStartDate: '2015-04-21',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  payxususd: {
    name: 'PAYX.US/USD',
    description: 'PAYCHEX INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  pbrususd: {
    name: 'PBR.US/USD',
    description: 'Petroleo Brasileiro S.A.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pcarususd: {
    name: 'PCAR.US/USD',
    description: 'PACCAR INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  pcgususd: {
    name: 'PCG.US/USD',
    description: 'P G &amp; E CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pclnususd: {
    name: 'PCLN.US/USD',
    description: 'PRICELINE GROUP INC/THE',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pepususd: {
    name: 'PEP.US/USD',
    description: 'PEPSICO INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pfcgbgbx: {
    name: 'PFC.GB/GBX',
    description: 'Petrofac Ltd',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  pfeususd: {
    name: 'PFE.US/USD',
    description: 'PFIZER INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pgususd: {
    name: 'PG.US/USD',
    description: 'PROCTER &amp; GAMBLE CO/THE',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pgrususd: {
    name: 'PGR.US/USD',
    description: 'PROGRESSIVE CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  phususd: {
    name: 'PH.US/USD',
    description: 'PARKER HANNIFIN CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  phianleur: {
    name: 'PHIA.NL/EUR',
    description: 'Koninklijke Philips NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  plnidxpln: {
    name: 'PLN.IDX/PLN',
    description: 'Poland 20 Index',
    minStartDate: '2017-12-01',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pmususd: {
    name: 'PM.US/USD',
    description: 'PHILIP MORRIS INTERNATIONAL',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pncususd: {
    name: 'PNC.US/USD',
    description: 'PNC FINANCIAL SERVICES GROUP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pndoradkdkk: {
    name: 'PNDORA.DK/DKK',
    description: 'Pandora A/S',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ppgususd: {
    name: 'PPG.US/USD',
    description: 'PPG INDUSTRIES INC',
    minStartDate: '2018-02-02',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  prugbgbx: {
    name: 'PRU.GB/GBX',
    description: 'Prudential PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  pruususd: {
    name: 'PRU.US/USD',
    description: 'PRUDENTIAL FINANCIAL INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  psaususd: {
    name: 'PSA.US/USD',
    description: 'PUBLIC STORAGE',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  psmdeeur: {
    name: 'PSM.DE/EUR',
    description: 'ProSiebenSat.1 Media AG',
    minStartDate: '2015-04-20',
    decimalFactor: 1000,
    minStartYearDaily: 2013
  },
  psngbgbx: {
    name: 'PSN.GB/GBX',
    description: 'Persimmon PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  psongbgbx: {
    name: 'PSON.GB/GBX',
    description: 'Pearson PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  psxususd: {
    name: 'PSX.US/USD',
    description: 'PHILLIPS 66',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  pubfreur: {
    name: 'PUB.FR/EUR',
    description: 'Publicis Groupe SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  pxdususd: {
    name: 'PXD.US/USD',
    description: 'PIONEER NATURAL RESOURCES CO',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  pyplususd: {
    name: 'PYPL.US/USD',
    description: 'PAYPAL HOLDINGS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  qcomususd: {
    name: 'QCOM.US/USD',
    description: 'QUALCOMM INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  qqqususd: {
    name: 'QQQ.US/USD',
    description: 'PowerShares QQQ ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  randnleur: {
    name: 'RAND.NL/EUR',
    description: 'Randstad Holding NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rbgbgbx: {
    name: 'RB.GB/GBX',
    description: 'Reckitt Benckiser Group PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rbiateur: {
    name: 'RBI.AT/EUR',
    description: 'Raiffeisen Bank International AG',
    minStartDate: '2016-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rbsgbgbx: {
    name: 'RBS.GB/GBX',
    description: 'Royal Bank of Scotland Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rdsanleur: {
    name: 'RDSA.NL/EUR',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rdsbgbgbx: {
    name: 'RDSB.GB/GBX',
    description: 'Royal Dutch Shell PLC',
    minStartDate: '2016-11-01',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  reeeseur: {
    name: 'REE.ES/EUR',
    description: 'Red Electrica Corp SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  regnususd: {
    name: 'REGN.US/USD',
    description: 'REGENERON PHARMACEUTICALS',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  relgbgbx: {
    name: 'REL.GB/GBX',
    description: 'Reed Elsevier PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rennleur: {
    name: 'REN.NL/EUR',
    description: 'RELX NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2015
  },
  repeseur: {
    name: 'REP.ES/EUR',
    description: 'Repsol SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rfususd: {
    name: 'RF.US/USD',
    description: 'REGIONS FINANCIAL CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  rhtususd: {
    name: 'RHT.US/USD',
    description: 'RED HAT INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  rifreur: {
    name: 'RI.FR/EUR',
    description: 'Pernod-Ricard SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  riogbgbx: {
    name: 'RIO.GB/GBX',
    description: 'Rio Tinto PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rmggbgbx: {
    name: 'RMG.GB/GBX',
    description: 'Royal Mail PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2013
  },
  rnofreur: {
    name: 'RNO.FR/EUR',
    description: 'Renault SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rostususd: {
    name: 'ROST.US/USD',
    description: 'ROSS STORES INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  rrgbgbx: {
    name: 'RR.GB/GBX',
    description: 'Rolls-Royce Holdings PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rrcususd: {
    name: 'RRC.US/USD',
    description: 'RANGE RESOURCES CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  rrsgbgbx: {
    name: 'RRS.GB/GBX',
    description: 'Randgold Resources Ltd',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rsagbgbx: {
    name: 'RSA.GB/GBX',
    description: 'RSA Insurance Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  rtnususd: {
    name: 'RTN.US/USD',
    description: 'RAYTHEON COMPANY',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  rwedeeur: {
    name: 'RWE.DE/EUR',
    description: 'RWE AG',
    minStartDate: '2015-04-16',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  saffreur: {
    name: 'SAF.FR/EUR',
    description: 'Safran SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  saneseur: {
    name: 'SAN.ES/EUR',
    description: 'Banco Santander SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sanfreur: {
    name: 'SAN.FR/EUR',
    description: 'Sanofi',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sandsesek: {
    name: 'SAND.SE/SEK',
    description: 'Sandvik AB',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sapdeeur: {
    name: 'SAP.DE/EUR',
    description: 'SAP AG',
    minStartDate: '2015-04-16',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sbrygbgbx: {
    name: 'SBRY.GB/GBX',
    description: 'J Sainsbury PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sbuxususd: {
    name: 'SBUX.US/USD',
    description: 'STARBUCKS CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  scabsesek: {
    name: 'SCAB.SE/SEK',
    description: 'Svenska Cellulosa AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  schwususd: {
    name: 'SCHW.US/USD',
    description: 'SCHWAB (CHARLES) CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  sdfdeeur: {
    name: 'SDF.DE/EUR',
    description: 'K+S AG',
    minStartDate: '2015-04-15',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sebasesek: {
    name: 'SEBA.SE/SEK',
    description: 'Skandinaviska Enskilda Banken AB',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  secubsesek: {
    name: 'SECUB.SE/SEK',
    description: 'Securitas AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sgdidxsgd: {
    name: 'SGD.IDX/SGD',
    description: 'Singapore Blue Chip Cash Index',
    minStartDate: '2017-12-01',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  sgdjpy: {
    name: 'SGD/JPY',
    description: 'Singapore Dollar vs Japanese Yen',
    minStartDate: '2007-03-13',
    decimalFactor: 1000,
    minStartYearDaily: 1997
  },
  sgegbgbx: {
    name: 'SGE.GB/GBX',
    description: 'Sage Group PLC/The',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sgofreur: {
    name: 'SGO.FR/EUR',
    description: 'Cie de St-Gobain',
    minStartDate: '2016-10-31',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  shpgbgbx: {
    name: 'SHP.GB/GBX',
    description: 'Shire PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  shwususd: {
    name: 'SHW.US/USD',
    description: 'SHERWIN-WILLIAMS COMPANY',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  siedeeur: {
    name: 'SIE.DE/EUR',
    description: 'Siemens AG',
    minStartDate: '2015-04-20',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sjmususd: {
    name: 'SJM.US/USD',
    description: 'JM SMUCKER COMPANY',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  skabsesek: {
    name: 'SKAB.SE/SEK',
    description: 'Skanska AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  skfbsesek: {
    name: 'SKFB.SE/SEK',
    description: 'SKF AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  skygbgbx: {
    name: 'SKY.GB/GBX',
    description: 'Sky Plc',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2014
  },
  slvususd: {
    name: 'SLV.US/USD',
    description: 'iShares Silver Trust ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  smingbgbx: {
    name: 'SMIN.GB/GBX',
    description: 'Smiths Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sngbgbx: {
    name: 'SN.GB/GBX',
    description: 'Smith &amp; Nephew PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  snapususd: {
    name: 'SNAP.US/USD',
    description: 'SNAP Inc',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  soususd: {
    name: 'SO.US/USD',
    description: 'SOUTHERN CO/THE',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  solbbeeur: {
    name: 'SOLB.BE/EUR',
    description: 'Solvay SA',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  spgususd: {
    name: 'SPG.US/USD',
    description: 'SIMON PROPERTY GROUP INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  spyususd: {
    name: 'SPY.US/USD',
    description: 'SPDR S&amp;P 500 ETF',
    minStartDate: '2017-02-16',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ssegbgbx: {
    name: 'SSE.GB/GBX',
    description: 'SSE PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  stangbgbx: {
    name: 'STAN.GB/GBX',
    description: 'Standard Chartered PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  stervfieur: {
    name: 'STERV.FI/EUR',
    description: 'Stora Enso OYJ',
    minStartDate: '2016-11-03',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  stiususd: {
    name: 'STI.US/USD',
    description: 'SUNTRUST BANKS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  stlnonok: {
    name: 'STL.NO/NOK',
    description: 'Statoil ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sttususd: {
    name: 'STT.US/USD',
    description: 'STATE STREET CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  stzususd: {
    name: 'STZ.US/USD',
    description: 'CONSTELLATION BRANDS INC-A',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  sufreur: {
    name: 'SU.FR/EUR',
    description: 'Schneider Electric SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sugarcmdusd: {
    name: 'SUGAR.CMD/USD',
    description: 'London Sugar No.5',
    minStartDate: '2017-10-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  svtgbgbx: {
    name: 'SVT.GB/GBX',
    description: 'Severn Trent PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  swedasesek: {
    name: 'SWEDA.SE/SEK',
    description: 'Swedbank AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  swkususd: {
    name: 'SWK.US/USD',
    description: 'STANLEY BLACK &amp; DECKER INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  swmasesek: {
    name: 'SWMA.SE/SEK',
    description: 'Swedish Match AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  sykususd: {
    name: 'SYK.US/USD',
    description: 'STRYKER CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  symcususd: {
    name: 'SYMC.US/USD',
    description: 'SYMANTEC CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  syyususd: {
    name: 'SYY.US/USD',
    description: 'SYSCO CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  tususd: {
    name: 'T.US/USD',
    description: 'AT&amp;T INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tapususd: {
    name: 'TAP.US/USD',
    description: 'MOLSON COORS BREWING CO -B',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  tategbgbx: {
    name: 'TATE.GB/GBX',
    description: 'Tate &amp; Lyle PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tefeseur: {
    name: 'TEF.ES/EUR',
    description: 'Telefonica SA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  telnonok: {
    name: 'TEL.NO/NOK',
    description: 'Telenor ASA',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tel2bsesek: {
    name: 'TEL2B.SE/SEK',
    description: 'Tele2 AB',
    minStartDate: '2016-11-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tevaususd: {
    name: 'TEVA.US/USD',
    description: 'TEVA PHARMACEUTICAL-SP ADR',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tgtususd: {
    name: 'TGT.US/USD',
    description: 'TARGET CORP',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tifususd: {
    name: 'TIF.US/USD',
    description: 'TIFFANY &amp; CO',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  tjxususd: {
    name: 'TJX.US/USD',
    description: 'TJX COMPANIES INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tkadeeur: {
    name: 'TKA.DE/EUR',
    description: 'ThyssenKrupp AG',
    minStartDate: '2015-04-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tls1vfieur: {
    name: 'TLS1V.FI/EUR',
    description: 'Telia Company AB',
    minStartDate: '2016-11-09',
    decimalFactor: 1000,
    minStartYearDaily: 2016
  },
  tlsnsesek: {
    name: 'TLSN.SE/SEK',
    description: 'Telia Company AB',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2016
  },
  tltususd: {
    name: 'TLT.US/USD',
    description: 'iShares 20+ Year Treasury Bond ETF',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tlwgbgbx: {
    name: 'TLW.GB/GBX',
    description: 'Tullow Oil PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tmoususd: {
    name: 'TMO.US/USD',
    description: 'THERMO FISHER SCIENTIFIC INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tpkgbgbx: {
    name: 'TPK.GB/GBX',
    description: 'Travis Perkins PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  trowususd: {
    name: 'TROW.US/USD',
    description: 'T ROWE PRICE GROUP INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  trvususd: {
    name: 'TRV.US/USD',
    description: 'TRAVELERS COS INC/THE',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tryjpy: {
    name: 'TRY/JPY',
    description: 'Turkish Lira vs Japanese Yen',
    minStartDate: '2010-05-09',
    decimalFactor: 1000,
    minStartYearDaily: 2010
  },
  tscogbgbx: {
    name: 'TSCO.GB/GBX',
    description: 'Tesco PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  tslaususd: {
    name: 'TSLA.US/USD',
    description: 'TESLA MOTORS INC',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  tsmususd: {
    name: 'TSM.US/USD',
    description: 'Taiwan Semiconductor Manufacturing Company Limited',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  tsnususd: {
    name: 'TSN.US/USD',
    description: 'TYSON FOODS INC-CL A',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  tui1deeur: {
    name: 'TUI1.DE/EUR',
    description: 'TUI AG',
    minStartDate: '2015-04-15',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  twtrususd: {
    name: 'TWTR.US/USD',
    description: 'TWITTER INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  txnususd: {
    name: 'TXN.US/USD',
    description: 'TEXAS INSTRUMENTS INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ucbbeeur: {
    name: 'UCB.BE/EUR',
    description: 'UCB SA',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ugfreur: {
    name: 'UG.FR/EUR',
    description: 'Peugeot SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  ukgilttrgbp: {
    name: 'UKGILT.TR/GBP',
    description: 'UK Long Gilt',
    minStartDate: '2017-12-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ultaususd: {
    name: 'ULTA.US/USD',
    description: 'ULTA SALON COSMETICS &amp; FRAGR',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  ulvrgbgbx: {
    name: 'ULVR.GB/GBX',
    description: 'Unilever PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  umibeeur: {
    name: 'UMI.BE/EUR',
    description: 'Umicore SA',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  unanleur: {
    name: 'UNA.NL/EUR',
    description: 'Unilever NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  unhususd: {
    name: 'UNH.US/USD',
    description: 'UNITEDHEALTH GROUP INC',
    minStartDate: '2017-11-02',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  unpususd: {
    name: 'UNP.US/USD',
    description: 'UNION PACIFIC CORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  upsususd: {
    name: 'UPS.US/USD',
    description: 'UNITED PARCEL SERVICE-CL B',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  usbususd: {
    name: 'USB.US/USD',
    description: 'US BANCORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  usdcad: {
    name: 'USD/CAD',
    description: 'US Dollar vs Canadian Dollar',
    minStartDate: '2003-08-03',
    decimalFactor: 100000,
    minStartYearDaily: 1986
  },
  usdchf: {
    name: 'USD/CHF',
    description: 'US Dollar vs Swiss Franc',
    minStartDate: '2003-05-04',
    decimalFactor: 100000,
    minStartYearDaily: 1986
  },
  usdcnh: {
    name: 'USD/CNH',
    description: 'US Dollar vs Offshore Chinese Renminbi',
    minStartDate: '2012-06-27',
    decimalFactor: 100000,
    minStartYearDaily: 2012
  },
  usdczk: {
    name: 'USD/CZK',
    description: 'US Dollar vs Czech Koruna',
    minStartDate: '2016-01-03',
    decimalFactor: 10000,
    minStartYearDaily: 2016
  },
  usddkk: {
    name: 'USD/DKK',
    description: 'US Dollar vs Danish Krone',
    minStartDate: '2003-08-04',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  usdhkd: {
    name: 'USD/HKD',
    description: 'US Dollar vs Hong Kong Dollar',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1986
  },
  usdhuf: {
    name: 'USD/HUF',
    description: 'US Dollar vs Hungarian Forint',
    minStartDate: '2007-03-13',
    decimalFactor: 1000,
    minStartYearDaily: 1998
  },
  usdils: {
    name: 'USD/ILS',
    description: 'US Dollar vs Israeli Shekel',
    minStartDate: '2016-12-15',
    decimalFactor: 100000,
    minStartYearDaily: 2016
  },
  usdjpy: {
    name: 'USD/JPY',
    description: 'US Dollar vs Japanese Yen',
    minStartDate: '2003-05-04',
    decimalFactor: 1000,
    minStartYearDaily: 1986
  },
  usdmxn: {
    name: 'USD/MXN',
    description: 'US Dollar vs Mexican Peso',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1995
  },
  usdnok: {
    name: 'USD/NOK',
    description: 'US Dollar vs Norwegian Krone',
    minStartDate: '2003-08-04',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  usdpln: {
    name: 'USD/PLN',
    description: 'US Dollar vs Polish Zloty',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  usdron: {
    name: 'USD/RON',
    description: 'US Dollar vs Romanian Leu',
    minStartDate: '2016-12-18',
    decimalFactor: 10000,
    minStartYearDaily: 2016
  },
  usdrub: {
    name: 'USD/RUB',
    description: 'US Dollar vs Russian Ruble',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1999
  },
  usdsek: {
    name: 'USD/SEK',
    description: 'US Dollar vs Swedish Krona',
    minStartDate: '2003-08-04',
    decimalFactor: 100000,
    minStartYearDaily: 1991
  },
  usdsgd: {
    name: 'USD/SGD',
    description: 'US Dollar vs Singapore Dollar',
    minStartDate: '2004-11-16',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  usdthb: {
    name: 'USD/THB',
    description: 'US Dollar vs Thai Baht',
    minStartDate: '2017-02-13',
    decimalFactor: 10000,
    minStartYearDaily: 2017
  },
  usdtry: {
    name: 'USD/TRY',
    description: 'US Dollar vs Turkish Lira',
    minStartDate: '2007-03-13',
    decimalFactor: 100000,
    minStartYearDaily: 1998
  },
  usdzar: {
    name: 'USD/ZAR',
    description: 'US Dollar vs South African Rand',
    minStartDate: '1997-10-13',
    decimalFactor: 100000,
    minStartYearDaily: 1990
  },
  usoususd: {
    name: 'USO.US/USD',
    description: 'United States Oil',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  utxususd: {
    name: 'UTX.US/USD',
    description: 'UNITED TECHNOLOGIES CORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  uugbgbx: {
    name: 'UU.GB/GBX',
    description: 'United Utilities Group PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vususd: {
    name: 'V.US/USD',
    description: 'VISA INC-CLASS A SHARES',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  valeususd: {
    name: 'VALE.US/USD',
    description: 'Vale S.A.',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  veaususd: {
    name: 'VEA.US/USD',
    description: 'Vanguard FTSE Developed Markets ETF',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  vfcususd: {
    name: 'VFC.US/USD',
    description: 'VF CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  vgkususd: {
    name: 'VGK.US/USD',
    description: 'Vanguard FTSE Europe ETF',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  viabususd: {
    name: 'VIAB.US/USD',
    description: 'VIACOM INC-CLASS B',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  viefreur: {
    name: 'VIE.FR/EUR',
    description: 'Veolia Environnement SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vivfreur: {
    name: 'VIV.FR/EUR',
    description: 'Vivendi SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vkfreur: {
    name: 'VK.FR/EUR',
    description: 'Vallourec SA',
    minStartDate: '2016-08-05',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vloususd: {
    name: 'VLO.US/USD',
    description: 'VALERO ENERGY CORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  vmcususd: {
    name: 'VMC.US/USD',
    description: 'VULCAN MATERIALS CO',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  vnadeeur: {
    name: 'VNA.DE/EUR',
    description: 'Vonovia SE',
    minStartDate: '2015-04-14',
    decimalFactor: 1000,
    minStartYearDaily: 2015
  },
  vnqususd: {
    name: 'VNQ.US/USD',
    description: 'Vanguard REIT ETF',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  vodgbgbx: {
    name: 'VOD.GB/GBX',
    description: 'Vodafone Group PLC',
    minStartDate: '2016-07-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  voeateur: {
    name: 'VOE.AT/EUR',
    description: 'Voestalpine AG',
    minStartDate: '2016-11-04',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  volvbsesek: {
    name: 'VOLVB.SE/SEK',
    description: 'Volvo AB',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vow3deeur: {
    name: 'VOW3.DE/EUR',
    description: 'Volkswagen AG',
    minStartDate: '2015-04-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vpknleur: {
    name: 'VPK.NL/EUR',
    description: 'Koninklijke Vopak NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vrtxususd: {
    name: 'VRTX.US/USD',
    description: 'VERTEX PHARMACEUTICALS INC',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  vwsdkdkk: {
    name: 'VWS.DK/DKK',
    description: 'Vestas Wind Systems A/S',
    minStartDate: '2016-11-07',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  vxxususd: {
    name: 'VXX.US/USD',
    description: 'iPath S&amp;P 500 VIX ST Futures ETN',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  vzususd: {
    name: 'VZ.US/USD',
    description: 'VERIZON COMMUNICATIONS INC',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  wbaususd: {
    name: 'WBA.US/USD',
    description: 'WALGREENS BOOTS ALLIANCE INC',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  wdcususd: {
    name: 'WDC.US/USD',
    description: 'WESTERN DIGITAL CORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  weirgbgbx: {
    name: 'WEIR.GB/GBX',
    description: 'Weir Group PLC/The',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  wfcususd: {
    name: 'WFC.US/USD',
    description: 'WELLS FARGO &amp; CO',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  whrususd: {
    name: 'WHR.US/USD',
    description: 'WHIRLPOOL CORP',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  wklnleur: {
    name: 'WKL.NL/EUR',
    description: 'Wolters Kluwer NV',
    minStartDate: '2016-11-14',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  wmtususd: {
    name: 'WMT.US/USD',
    description: 'WAL-MART STORES INC',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  wosgbgbx: {
    name: 'WOS.GB/GBX',
    description: 'Wolseley PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  wppgbgbx: {
    name: 'WPP.GB/GBX',
    description: 'WPP PLC',
    minStartDate: '2016-07-08',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  wtbgbgbx: {
    name: 'WTB.GB/GBX',
    description: 'Whitbread PLC',
    minStartDate: '2016-07-06',
    decimalFactor: 1000,
    minStartYearDaily: 2011
  },
  wynnususd: {
    name: 'WYNN.US/USD',
    description: 'WYNN RESORTS LTD',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xususd: {
    name: 'X.US/USD',
    description: 'UNITED STATES STEEL CORP',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xagusd: {
    name: 'XAG/USD',
    description: 'Spot silver',
    minStartDate: '1997-08-13',
    decimalFactor: 1000,
    minStartYearDaily: 1997
  },
  xauusd: {
    name: 'XAU/USD',
    description: 'Spot gold',
    minStartDate: '1999-09-01',
    decimalFactor: 1000,
    minStartYearDaily: 1997
  },
  xleususd: {
    name: 'XLE.US/USD',
    description: 'Energy Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xlfususd: {
    name: 'XLF.US/USD',
    description: 'Financial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xliususd: {
    name: 'XLI.US/USD',
    description: 'Industrial Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xlkususd: {
    name: 'XLK.US/USD',
    description: 'Technology Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xlnxususd: {
    name: 'XLNX.US/USD',
    description: 'XILINX INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  xlpususd: {
    name: 'XLP.US/USD',
    description: 'Consumer Staples Select Sector SPDR Fund',
    minStartDate: '2017-01-23',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xluususd: {
    name: 'XLU.US/USD',
    description: 'Utilities Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xlvususd: {
    name: 'XLV.US/USD',
    description: 'Health Care Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xlyususd: {
    name: 'XLY.US/USD',
    description: 'Consumer Discretionary Select Sector SPDR Fund',
    minStartDate: '2017-11-15',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xomususd: {
    name: 'XOM.US/USD',
    description: 'EXXON MOBIL CORP',
    minStartDate: '2017-01-19',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  xopususd: {
    name: 'XOP.US/USD',
    description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF',
    minStartDate: '2017-01-26',
    decimalFactor: 1000,
    minStartYearDaily: 2017
  },
  yumususd: {
    name: 'YUM.US/USD',
    description: 'YUM! BRANDS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  },
  zarjpy: {
    name: 'ZAR/JPY',
    description: 'South African Rand vs Japanese Yen',
    minStartDate: '1999-03-03',
    decimalFactor: 1000,
    minStartYearDaily: 1997
  },
  zbhususd: {
    name: 'ZBH.US/USD',
    description: 'ZIMMER BIOMET HOLDINGS INC',
    minStartDate: '2018-02-01',
    decimalFactor: 1000,
    minStartYearDaily: 2018
  }
};

export { instruments };
