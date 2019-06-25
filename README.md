<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/master/logo.png?raw=true" alt="dukascopy-node"></p>

<h1 align="center">dukascopy-node</h1>

<p align="center">
  <a href="https://travis-ci.org/icebob/fastest-validator.svg?branch=master"><img src="https://travis-ci.org/icebob/fastest-validator.svg?branch=master" alt="Build Status"></a>
  <a href="https://coveralls.io/r/sindresorhus/pageres?branch=master"><img src="https://coveralls.io/repos/sindresorhus/pageres/badge.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Coverage Status"></a>
</p>

A node.js client for fetching and aggregation of historical OHLC exchange rates for 500+ instruments (stocks/commodities/currencies) from https://www.dukascopy.com/

<h2>Installation</h2>
<h4>NPM:</h4>

```bash
npm install dukascopy-node --save  

```

<h4>yarn:</h4>

```bash
yarn add dukascopy-node  

```

<h2>Usage</h2>

```javascript
import { getHistoricRates } from 'dukascopy-node';

const historicData = 

```

<h2>Options</h2>

**`instrument`**

`dates`

`timeframe`


| parameter | type    | description                                      |
| - | - | - |
| `instrument`| string | id of an instrument (see full list below)|
| `dates`  | Object | date range |
| `timeframe` | string  | a parsed package.json                            |
| `travis`  | boolean | whether to output a travis badge along with docs |

<h2>Supported instruments</h2>

|Instrument id|Instrument name|Description|Available start date|
|-|-|-|-|
|`aususd`|A.US/USD|AGILENT TECHNOLOGIES INC|2017-05-25|
|`aaususd`|AA.US/USD|ALCOA INC|2018-01-30|
|`aabaususd`|AABA.US/USD|ALTABA INC|2017-11-02|
|`aalgbgbx`|AAL.GB/GBX|Anglo American PLC|2016-08-01|
|`aalususd`|AAL.US/USD|AMERICAN AIRLINES GROUP INC|2017-11-02|
|`aaplususd`|AAPL.US/USD|APPLE INC|2017-01-17|
|`abbsesek`|ABB.SE/SEK|ABB Ltd|2016-11-14|
|`abcususd`|ABC.US/USD|AMERISOURCEBERGEN CORP|2018-01-30|
|`abevususd`|ABEV.US/USD|Ambev S.A.|2017-01-26|
|`abfgbgbx`|ABF.GB/GBX|Associated British Foods PLC|2016-09-06|
|`abibeeur`|ABI.BE/EUR|Anheuser-Busch InBev NV|2016-11-14|
|`abtususd`|ABT.US/USD|ABBOTT LABORATORIES|2017-05-11|
|`acfreur`|AC.FR/EUR|Accor SA|2016-08-11|
|`acafreur`|ACA.FR/EUR|Credit Agricole SA|2016-09-30|
|`acseseur`|ACS.ES/EUR|ACS Actividades de Construccion y Servicios SA|2016-11-14|
|`acxeseur`|ACX.ES/EUR|Acerinox SA|2016-11-14|
|`adbeususd`|ADBE.US/USD|ADOBE SYSTEMS INC|2017-05-11|
|`adiususd`|ADI.US/USD|ANALOG DEVICES INC|2018-01-30|
|`admgbgbx`|ADM.GB/GBX|Admiral Group PLC|2016-09-06|
|`adpususd`|ADP.US/USD|AUTOMATIC DATA PROCESSING|2017-11-02|
|`adsdeeur`|ADS.DE/EUR|Adidas AG|2015-03-13|
|`adskususd`|ADSK.US/USD|AUTODESK INC|2018-01-30|
|`aenaeseur`|AENA.ES/EUR|Aena SA|2016-11-14|
|`aetususd`|AET.US/USD|AETNA INC|2017-05-11|
|`affreur`|AF.FR/EUR|Air France-KLM|2016-09-27|
|`agkgbgbx`|AGK.GB/GBX|Aggreko PLC|2016-09-06|
|`agnnleur`|AGN.NL/EUR|Aegon NV|2016-11-14|
|`agsbeeur`|AGS.BE/EUR|Ageas|2016-11-14|
|`ahnleur`|AH.NL/EUR|Koninklijke Ahold Delhaize NV|2016-11-14|
|`ahtgbgbx`|AHT.GB/GBX|Ashtead Group PLC|2016-09-06|
|`aifreur`|AI.FR/EUR|Air Liquide SA|2016-09-30|
|`aigususd`|AIG.US/USD|AMERICAN INTERNATIONAL GROUP|2017-05-11|
|`airfreur`|AIR.FR/EUR|Airbus Group SE|2016-09-30|
|`akzanleur`|AKZA.NL/EUR|Akzo Nobel NV|2016-11-14|
|`alfasesek`|ALFA.SE/SEK|Alfa Laval AB|2016-11-07|
|`allususd`|ALL.US/USD|ALLSTATE CORP|2018-01-31|
|`alofreur`|ALO.FR/EUR|Alstom SA|2016-09-27|
|`alvdeeur`|ALV.DE/EUR|Allianz SE|2015-04-09|
|`alxnususd`|ALXN.US/USD|ALEXION PHARMACEUTICALS INC|2017-01-19|
|`amatususd`|AMAT.US/USD|APPLIED MATERIALS INC|2017-05-11|
|`amdususd`|AMD.US/USD|ADVANCED MICRO DEVICES|2017-11-02|
|`amgnususd`|AMGN.US/USD|AMGEN INC|2017-01-19|
|`amseseur`|AMS.ES/EUR|Amadeus IT Holding SA|2016-11-14|
|`amtususd`|AMT.US/USD|AMERICAN TOWER CORP|2017-11-02|
|`amznususd`|AMZN.US/USD|AMAZON.COM INC|2017-01-19|
|`antmususd`|ANTM.US/USD|ANTHEM INC|2017-11-02|
|`antogbgbx`|ANTO.GB/GBX|Antofagasta PLC|2016-09-06|
|`apaususd`|APA.US/USD|APACHE CORP|2018-01-31|
|`apcususd`|APC.US/USD|ANADARKO PETROLEUM CORP|2017-11-02|
|`apdususd`|APD.US/USD|AIR PRODUCTS &amp; CHEMICALS INC|2017-11-02|
|`asmlnleur`|ASML.NL/EUR|ASML Holding NV|2016-11-14|
|`atcoasesek`|ATCOA.SE/SEK|Atlas Copco AB|2016-11-14|
|`atviususd`|ATVI.US/USD|ACTIVISION BLIZZARD INC|2017-05-11|
|`audcad`|AUD/CAD|Australian Dollar vs Canadian Dollar|2005-12-26|
|`audchf`|AUD/CHF|Australian Dollar vs Swiss Franc|2005-12-26|
|`audjpy`|AUD/JPY|Australian Dollar vs Japanese Yen|2003-11-29|
|`audnzd`|AUD/NZD|Australian Dollar vs New Zealand Dollar|2006-12-08|
|`audsgd`|AUD/SGD|Australian Dollar vs Singapore Dollar|2007-03-13|
|`audusd`|AUD/USD|Australian Dollar vs US Dollar|2003-08-03|
|`avgbgbx`|AV.GB/GBX|Aviva PLC|2016-09-06|
|`avbususd`|AVB.US/USD|AVALONBAY COMMUNITIES INC|2018-01-31|
|`avgoususd`|AVGO.US/USD|Broadcom Limited|2017-01-19|
|`axpususd`|AXP.US/USD|AMERICAN EXPRESS CO|2017-11-02|
|`azngbgbx`|AZN.GB/GBX|AstraZeneca PLC|2016-09-06|
|`aznususd`|AZN.US/USD|AstraZeneca PLC|2017-01-26|
|`azoususd`|AZO.US/USD|AUTOZONE INC|2017-11-02|
|`bagbgbx`|BA.GB/GBX|BAE Systems PLC|2016-09-06|
|`baususd`|BA.US/USD|Boeing Co|2017-01-19|
|`babgbgbx`|BAB.GB/GBX|Babcock International Group PLC|2016-09-06|
|`babaususd`|BABA.US/USD|ALIBABA GROUP HOLDING-SP ADR|2017-01-19|
|`bacususd`|BAC.US/USD|BANK OF AMERICA CORP|2017-01-23|
|`barcgbgbx`|BARC.GB/GBX|Barclays PLC|2016-09-06|
|`basdeeur`|BAS.DE/EUR|BASF SE|2015-04-22|
|`batsgbgbx`|BATS.GB/GBX|British American Tobacco PLC|2016-09-06|
|`bayndeeur`|BAYN.DE/EUR|Bayer AG|2015-03-20|
|`bbdususd`|BBD.US/USD|Banco Bradesco S.A.|2017-01-26|
|`bbtususd`|BBT.US/USD|BB&amp;T CORP|2018-01-31|
|`bbvaeseur`|BBVA.ES/EUR|Banco Bilbao Vizcaya Argentaria SA|2016-11-14|
|`bbyususd`|BBY.US/USD|BEST BUY CO INC|2017-05-11|
|`bdxususd`|BDX.US/USD|BECTON DICKINSON AND CO|2018-01-31|
|`beideeur`|BEI.DE/EUR|Beiersdorf AG|2015-04-08|
|`belgbeeur`|BELG.BE/EUR|Proximus|2016-11-07|
|`biduususd`|BIDU.US/USD|BAIDU INC|2017-11-02|
|`biibususd`|BIIB.US/USD|BIOGEN INC|2017-05-11|
|`bkususd`|BK.US/USD|BANK OF NEW YORK MELLON CORP|2017-05-11|
|`blndgbgbx`|BLND.GB/GBX|British Land Co PLC|2016-09-06|
|`bltgbgbx`|BLT.GB/GBX|BHP Billiton PLC|2016-09-06|
|`bmwdeeur`|BMW.DE/EUR|Bayerische Motoren Werke AG|2015-03-24|
|`bmyususd`|BMY.US/USD|BRISTOL-MYERS SQUIBB CO|2017-05-11|
|`bnfreur`|BN.FR/EUR|Danone SA|2016-09-30|
|`bnpfreur`|BNP.FR/EUR|BNP Paribas SA|2016-09-30|
|`bnzlgbgbx`|BNZL.GB/GBX|Bunzl PLC|2016-09-06|
|`bossdeeur`|BOSS.DE/EUR|HUGO BOSS AG|2015-04-09|
|`bpgbgbx`|BP.GB/GBX|BP PLC|2016-09-06|
|`bpususd`|BP.US/USD|BP p.l.c.|2018-01-31|
|`brbygbgbx`|BRBY.GB/GBX|Burberry Group PLC|2016-07-08|
|`brkbususd`|BRKB.US/USD|BERKSHIRE HATHAWAY INC-CL B|2017-11-06|
|`bsxususd`|BSX.US/USD|BOSTON SCIENTIFIC CORP|2017-05-11|
|`btgbgbx`|BT.GB/GBX|BT Group PLC|2016-07-07|
|`btcusd`|BTC/USD|Bitcoin vs US Dollar|2017-05-07|
|`bundtreur`|BUND.TR/EUR|Euro Bund|2016-05-02|
|`cususd`|C.US/USD|CITIGROUP INC|2017-01-23|
|`cafreur`|CA.FR/EUR|Carrefour SA|2016-09-30|
|`cabkeseur`|CABK.ES/EUR|CaixaBank|2016-11-14|
|`cadchf`|CAD/CHF|Canadian Dollar vs Swiss Franc|2005-12-26|
|`cadhkd`|CAD/HKD|Canadian Dollar vs Hong Kong Dollar|2007-03-13|
|`cadjpy`|CAD/JPY|Canadian Dollar vs Japanese Yen|2004-10-20|
|`cagususd`|CAG.US/USD|CONAGRA FOODS INC|2018-01-31|
|`cahususd`|CAH.US/USD|CARDINAL HEALTH INC|2018-01-31|
|`capfreur`|CAP.FR/EUR|Cap Gemini SA|2016-09-30|
|`carlbdkdkk`|CARLB.DK/DKK|Carlsberg A/S|2016-11-07|
|`catususd`|CAT.US/USD|CATERPILLAR INC|2017-05-11|
|`cbkdeeur`|CBK.DE/EUR|Commerzbank AG|2015-03-26|
|`cbsususd`|CBS.US/USD|CBS CORP-CLASS B NON VOTING|2018-01-31|
|`cclgbgbx`|CCL.GB/GBX|Carnival PLC|2016-07-06|
|`celgususd`|CELG.US/USD|CELGENE CORP|2017-05-11|
|`cfususd`|CF.US/USD|CF INDUSTRIES HOLDINGS INC|2018-01-31|
|`chfjpy`|CHF/JPY|Swiss Franc vs Japanese Yen|2003-08-03|
|`chfsgd`|CHF/SGD|Swiss Franc vs Singapore Dollar|2007-03-13|
|`chiidxusd`|CHI.IDX/USD|China A50 Index|2017-07-17|
|`ciususd`|CI.US/USD|CIGNA CORP|2017-05-11|
|`clususd`|CL.US/USD|COLGATE-PALMOLIVE CO|2017-11-02|
|`cmcsaususd`|CMCSA.US/USD|COMCAST CORP-CLASS A|2017-01-19|
|`cmeususd`|CME.US/USD|CME GROUP INC|2017-05-11|
|`cmgususd`|CMG.US/USD|CHIPOTLE MEXICAN GRILL INC|2017-05-11|
|`cmiususd`|CMI.US/USD|CUMMINS INC|2018-02-01|
|`cnagbgbx`|CNA.GB/GBX|Centrica PLC|2016-07-07|
|`cocoacmdusd`|COCOA.CMD/USD|NY Cocoa|2017-10-20|
|`coffeecmdusx`|COFFEE.CMD/USX|Coffee Arabica|2017-12-04|
|`colususd`|COL.US/USD|ROCKWELL COLLINS INC|2017-11-02|
|`colobdkdkk`|COLOB.DK/DKK|Coloplast A/S|2016-11-07|
|`condeeur`|CON.DE/EUR|Continental AG|2015-04-08|
|`copususd`|COP.US/USD|CONOCOPHILLIPS|2017-11-02|
|`coppercmdusd`|COPPER.CMD/USD|High Grade Copper|2012-03-01|
|`costususd`|COST.US/USD|COSTCO WHOLESALE CORP|2017-11-02|
|`cottoncmdusx`|COTTON.CMD/USX|Cotton|2017-10-20|
|`cpggbgbx`|CPG.GB/GBX|Compass Group PLC|2016-07-08|
|`cpigbgbx`|CPI.GB/GBX|Capita PLC|2016-07-07|
|`crdagbgbx`|CRDA.GB/GBX|Croda International PLC|2016-11-01|
|`crhgbgbx`|CRH.GB/GBX|CRH PLC|2016-11-08|
|`crmususd`|CRM.US/USD|SALESFORCE.COM INC|2017-05-11|
|`csfreur`|CS.FR/EUR|AXA SA|2016-09-30|
|`csususd`|CS.US/USD|Credit Suisse Group AG|2017-01-26|
|`cscoususd`|CSCO.US/USD|CISCO SYSTEMS INC|2017-01-19|
|`csxususd`|CSX.US/USD|CSX CORP|2017-11-02|
|`ctlususd`|CTL.US/USD|CENTURYLINK INC|2017-11-02|
|`ctshususd`|CTSH.US/USD|COGNIZANT TECH SOLUTIONS-A|2017-11-02|
|`cvsususd`|CVS.US/USD|CVS HEALTH CORP|2017-11-02|
|`cvxususd`|CVX.US/USD|CHEVRON CORP|2017-01-19|
|`dususd`|D.US/USD|DOMINION RESOURCES INC/VA|2018-02-01|
|`daideeur`|DAI.DE/EUR|Daimler AG|2015-03-27|
|`dalususd`|DAL.US/USD|DELTA AIR LINES INC|2017-11-02|
|`danskedkdkk`|DANSKE.DK/DKK|Danske Bank A/S|2016-11-08|
|`db1deeur`|DB1.DE/EUR|Deutsche Boerse AG|2015-04-14|
|`dbkdeeur`|DBK.DE/EUR|Deutsche Bank AG|2015-03-25|
|`deususd`|DE.US/USD|DEERE &amp; CO|2017-05-11|
|`dfsususd`|DFS.US/USD|DISCOVER FINANCIAL SERVICES|2018-02-01|
|`dgfreur`|DG.FR/EUR|Vinci SA|2016-09-30|
|`dgususd`|DG.US/USD|DOLLAR GENERAL CORP|2017-05-11|
|`dgegbgbx`|DGE.GB/GBX|Diageo PLC|2016-07-06|
|`dhiususd`|DHI.US/USD|DR HORTON INC|2018-02-01|
|`dhrususd`|DHR.US/USD|DANAHER CORP|2017-11-02|
|`diaeseur`|DIA.ES/EUR|Distribuidora Internacional de Alimentacion SA|2016-11-14|
|`diaususd`|DIA.US/USD|SPDR Dow Jones® Industrial Average ETF|2017-05-11|
|`dieselcmdusd`|DIESEL.CMD/USD|Gas oil|2017-10-20|
|`disususd`|DIS.US/USD|WALT DISNEY CO/THE|2017-01-19|
|`dltrususd`|DLTR.US/USD|DOLLAR TREE INC|2017-11-02|
|`dnbnonok`|DNB.NO/NOK|DNB ASA|2016-11-14|
|`dollaridxusd`|DOLLAR.IDX/USD|US Dollar Index|2017-12-01|
|`dpwdeeur`|DPW.DE/EUR|Deutsche Post AG|2015-03-31|
|`dsmnleur`|DSM.NL/EUR|Koninklijke DSM NV|2016-11-14|
|`dtedeeur`|DTE.DE/EUR|Deutsche Telekom AG|2015-03-31|
|`dukususd`|DUK.US/USD|DUKE ENERGY CORP|2017-05-11|
|`dvaususd`|DVA.US/USD|DAVITA HEALTHCARE PARTNERS I|2018-02-01|
|`dvnususd`|DVN.US/USD|DEVON ENERGY CORP|2018-02-01|
|`dvyususd`|DVY.US/USD|iShares Select Dividend ETF|2017-05-11|
|`eaususd`|EA.US/USD|ELECTRONIC ARTS INC|2017-05-11|
|`ebayususd`|EBAY.US/USD|EBAY INC|2017-11-02|
|`ebsateur`|EBS.AT/EUR|Erste Group Bank AG|2016-11-04|
|`edffreur`|EDF.FR/EUR|Electricite de France SA|2016-09-30|
|`edppteur`|EDP.PT/EUR|EDP - Energias de Portugal SA|2016-11-14|
|`eemususd`|EEM.US/USD|iShares MSCI Emerging Markets ETF|2017-01-23|
|`efaususd`|EFA.US/USD|iShares MSCI EAFE ETF|2017-01-23|
|`efxususd`|EFX.US/USD|EQUIFAX INC|2017-11-02|
|`eifreur`|EI.FR/EUR|Essilor International SA|2016-09-30|
|`eixususd`|EIX.US/USD|EDISON INTERNATIONAL|2018-02-01|
|`elususd`|EL.US/USD|ESTEE LAUDER COMPANIES-CL A|2018-02-01|
|`eleeseur`|ELE.ES/EUR|Endesa SA|2016-11-14|
|`eli1vfieur`|ELI1V.FI/EUR|Elisa OYJ|2016-11-03|
|`eluxbsesek`|ELUXB.SE/SEK|Electrolux AB|2016-11-07|
|`embususd`|EMB.US/USD|iShares J.P. Morgan USD Emerging Markets Bond ETF|2017-05-11|
|`emrususd`|EMR.US/USD|EMERSON ELECTRIC CO|2018-02-01|
|`enfreur`|EN.FR/EUR|Bouygues SA|2016-09-30|
|`engeseur`|ENG.ES/EUR|Enagas SA|2016-11-14|
|`engifreur`|ENGI.FR/EUR|Engie|2016-09-30|
|`eoandeeur`|EOAN.DE/EUR|E.ON SE|2015-04-20|
|`eogususd`|EOG.US/USD|EOG RESOURCES INC|2017-11-02|
|`eqtususd`|EQT.US/USD|EQT CORP|2017-11-02|
|`ericbsesek`|ERICB.SE/SEK|Telefonaktiebolaget LM Ericsson|2016-11-14|
|`esrxususd`|ESRX.US/USD|EXPRESS SCRIPTS HOLDING CO|2017-11-02|
|`ethusd`|ETH/USD|Ether vs US Dollar|2017-12-11|
|`euraud`|EUR/AUD|Euro vs Australian Dollar|2005-10-02|
|`eurcad`|EUR/CAD|Euro vs Canadian Dollar|2004-10-20|
|`eurchf`|EUR/CHF|Euro vs Swiss Franc|2003-08-03|
|`eurczk`|EUR/CZK|Euro vs Czech Koruna|2016-01-03|
|`eurdkk`|EUR/DKK|Euro vs Danish Krone|2004-10-20|
|`eurgbp`|EUR/GBP|Euro vs Pound Sterling|2003-08-03|
|`eurhkd`|EUR/HKD|Euro vs Hong Kong Dollar|2007-03-13|
|`eurhuf`|EUR/HUF|Euro vs Hungarian Forint|2007-03-13|
|`eurjpy`|EUR/JPY|Euro vs Japanese Yen|2003-08-03|
|`eurnok`|EUR/NOK|Euro vs Norwegian Krone|2004-10-20|
|`eurnzd`|EUR/NZD|Euro vs New Zealand Dollar|2005-12-26|
|`eurpln`|EUR/PLN|Euro vs Polish Zloty|2007-03-13|
|`eurrub`|EUR/RUB|Euro vs Russian Rouble|2007-03-13|
|`eursek`|EUR/SEK|Euro vs Swedish Krona|2004-10-27|
|`eursgd`|EUR/SGD|Euro vs Singapore Dollar|2007-03-13|
|`eurtry`|EUR/TRY|Euro vs Turkish Lira|2007-03-13|
|`eurusd`|EUR/USD|Euro vs US Dollar|2003-05-04|
|`ewhususd`|EWH.US/USD|iShares MSCI Hong Kong ETF|2017-11-06|
|`ewjususd`|EWJ.US/USD|iShares MSCI Japan ETF|2017-01-23|
|`ewwususd`|EWW.US/USD|iShares MSCI Mexico Capped|2017-03-13|
|`ewzususd`|EWZ.US/USD|iShares MSCI Brazil Capped|2017-01-26|
|`excususd`|EXC.US/USD|EXELON CORP|2018-02-01|
|`expeususd`|EXPE.US/USD|EXPEDIA INC|2017-11-02|
|`expngbgbx`|EXPN.GB/GBX|Experian PLC|2016-07-08|
|`ezjgbgbx`|EZJ.GB/GBX|easyJet PLC|2016-07-08|
|`ezuususd`|EZU.US/USD|iShares MSCI EMU ETF|2018-02-01|
|`brentcmdusd`|BRENT.CMD/USD|US Brent Crude Oil|2010-12-02|
|`fraidxeur`|FRA.IDX/EUR|France 40 Index|2011-09-18|
|`usa30idxusd`|USA30.IDX/USD|USA 30 Index|2013-09-30|
|`deuidxeur`|DEU.IDX/EUR|Germany 30 Index|2013-09-30|
|`eusidxeur`|EUS.IDX/EUR|Europe 50 Index|2011-09-18|
|`gbridxgbp`|GBR.IDX/GBP|UK 100 Index|2011-09-18|
|`hkgidxhkd`|HKG.IDX/HKD|Hong Kong 40 Index|2011-09-18|
|`espidxeur`|ESP.IDX/EUR|Spain 35 Index|2012-01-02|
|`lightcmdusd`|LIGHT.CMD/USD|US Light Crude Oil|2011-09-23|
|`jpnidxjpy`|JPN.IDX/JPY|Japan 225|2011-09-18|
|`usatechidxusd`|USATECH.IDX/USD|USA 100 Technical Index|2011-09-18|
|`usa500idxusd`|USA500.IDX/USD|USA 500 Index|2011-09-18|
|`cheidxchf`|CHE.IDX/CHF|Switzerland 20 Index|2011-09-18|
|`ausidxaud`|AUS.IDX/AUD|Australia 200 Index|2013-01-02|
|`fususd`|F.US/USD|FORD MOTOR CO|2017-11-02|
|`fbususd`|FB.US/USD|FACEBOOK INC-A|2017-01-19|
|`fcxususd`|FCX.US/USD|FREEPORT-MCMORAN INC|2017-11-02|
|`fdxususd`|FDX.US/USD|FEDEX CORP|2017-11-02|
|`feususd`|FE.US/USD|FIRSTENERGY CORP|2018-02-01|
|`fereseur`|FER.ES/EUR|Ferrovial SA|2016-11-14|
|`fmedeeur`|FME.DE/EUR|Fresenius Medical Care AG &amp; Co KGaA|2015-04-01|
|`foxaususd`|FOXA.US/USD|TWENTY-FIRST CENTURY FOX-A|2018-01-31|
|`fpfreur`|FP.FR/EUR|Total SA|2016-09-30|
|`frfreur`|FR.FR/EUR|Valeo SA|2016-09-30|
|`fredeeur`|FRE.DE/EUR|Fresenius SE &amp; Co KGaA|2015-04-10|
|`fresgbgbx`|FRES.GB/GBX|Fresnillo PLC|2016-07-07|
|`fxiususd`|FXI.US/USD|iShares China Large-Cap ETF|2017-01-26|
|`galppteur`|GALP.PT/EUR|Galp Energia SGPS SA|2016-11-14|
|`gameseur`|GAM.ES/EUR|Gamesa Corporacion Tecnologica SA|2016-11-14|
|`gascmdusd`|GAS.CMD/USD|Natural Gas|2012-08-20|
|`gaseseur`|GAS.ES/EUR|Gas Natural SDG SA|2016-11-14|
|`gbpaud`|GBP/AUD|Pound Sterling vs Australian Dollar|2006-01-01|
|`gbpcad`|GBP/CAD|Pound Sterling vs Canadian Dollar|2006-01-01|
|`gbpchf`|GBP/CHF|Pound Sterling vs Swiss Franc|2003-08-03|
|`gbpjpy`|GBP/JPY|Pound Sterling vs Japanese Yen|2003-08-03|
|`gbpnzd`|GBP/NZD|Pound Sterling vs New Zealand Dollar|2006-01-01|
|`gbpusd`|GBP/USD|Pound Sterling vs US Dollar|2003-05-04|
|`gdxususd`|GDX.US/USD|VanEck Vectors Gold Miners ETF|2017-01-23|
|`gdxjususd`|GDXJ.US/USD|VanEck Vectors Junior Gold Miners ETF|2017-01-26|
|`geususd`|GE.US/USD|GENERAL ELECTRIC CO|2017-01-19|
|`getibsesek`|GETIB.SE/SEK|Getinge AB|2016-11-07|
|`gfsgbgbx`|GFS.GB/GBX|G4S PLC|2016-07-07|
|`gildususd`|GILD.US/USD|GILEAD SCIENCES INC|2017-01-19|
|`gisususd`|GIS.US/USD|GENERAL MILLS INC|2018-02-01|
|`gldususd`|GLD.US/USD|SPDR Gold Shares ETF|2017-01-23|
|`glefreur`|GLE.FR/EUR|Societe Generale SA|2016-09-30|
|`glengbgbx`|GLEN.GB/GBX|Glencore PLC|2016-07-07|
|`glwususd`|GLW.US/USD|CORNING INC|2017-05-11|
|`gmususd`|GM.US/USD|GENERAL MOTORS CO|2017-11-02|
|`googususd`|GOOG.US/USD|ALPHABET INC-CL C|2017-01-19|
|`googlususd`|GOOGL.US/USD|ALPHABET INC-CL A|2017-01-19|
|`gpsususd`|GPS.US/USD|GAP INC/THE|2018-02-01|
|`gsususd`|GS.US/USD|GOLDMAN SACHS GROUP INC|2017-01-19|
|`gtonleur`|GTO.NL/EUR|Gemalto NV|2016-11-14|
|`gwwususd`|GWW.US/USD|WW GRAINGER INC|2018-02-01|
|`halususd`|HAL.US/USD|HALLIBURTON CO|2017-11-02|
|`hcnususd`|HCN.US/USD|WELLTOWER INC|2018-02-01|
|`hcpususd`|HCP.US/USD|HCP INC|2018-02-01|
|`hdususd`|HD.US/USD|HOME DEPOT INC|2017-01-19|
|`heideeur`|HEI.DE/EUR|HeidelbergCement AG|2015-04-02|
|`heianleur`|HEIA.NL/EUR|Heineken NV|2016-11-14|
|`hen3deeur`|HEN3.DE/EUR|Henkel AG &amp; Co KGaA|2015-04-21|
|`hesususd`|HES.US/USD|HESS CORP|2017-11-02|
|`hkdjpy`|HKD/JPY|Hong Kong Dollar vs Japanese Yen|2007-03-13|
|`hmbsesek`|HMB.SE/SEK|Hennes &amp; Mauritz AB|2016-11-07|
|`hmsogbgbx`|HMSO.GB/GBX|Hammerson PLC|2016-07-07|
|`honususd`|HON.US/USD|HONEYWELL INTERNATIONAL INC|2017-11-02|
|`hpqususd`|HPQ.US/USD|HP INC|2018-02-01|
|`hsbagbgbx`|HSBA.GB/GBX|HSBC Holdings PLC|2016-07-07|
|`humususd`|HUM.US/USD|HUMANA INC|2017-11-02|
|`iaggbgbx`|IAG.GB/GBX|International Consolidated Airlines Grou|2016-11-08|
|`ibbususd`|IBB.US/USD|iShares Nasdaq Biotechnology ETF|2017-05-11|
|`ibeeseur`|IBE.ES/EUR|Iberdrola SA|2016-11-14|
|`ibmususd`|IBM.US/USD|INTL BUSINESS MACHINES CORP|2017-01-19|
|`iceususd`|ICE.US/USD|INTERCONTINENTAL EXCHANGE IN|2017-11-06|
|`iefususd`|IEF.US/USD|iShares 7-10 Year Treasury Bond ETF|2018-02-01|
|`ifxdeeur`|IFX.DE/EUR|Infineon Technologies AG|2015-04-13|
|`ihggbgbx`|IHG.GB/GBX|InterContinental Hotels Group PLC|2016-11-01|
|`ijhususd`|IJH.US/USD|iShares Core S&amp;P Mid-Cap ETF|2018-02-01|
|`ijrususd`|IJR.US/USD|iShares Core S&amp;P Small-Cap ETF|2017-05-11|
|`ilmnususd`|ILMN.US/USD|ILLUMINA INC|2018-02-01|
|`imtgbgbx`|IMT.GB/GBX|Imperial Brands Plc|2016-07-06|
|`indidxusd`|IND.IDX/USD|India 50 Index|2017-12-01|
|`inganleur`|INGA.NL/EUR|ING Groep NV|2016-11-14|
|`intcususd`|INTC.US/USD|INTEL CORP|2017-01-19|
|`intuususd`|INTU.US/USD|INTUIT INC|2018-02-01|
|`invebsesek`|INVEB.SE/SEK|Investor AB|2016-11-14|
|`ipgususd`|IPG.US/USD|INTERPUBLIC GROUP OF COS INC|2018-02-01|
|`isatgbgbx`|ISAT.GB/GBX|Inmarsat PLC|2016-07-08|
|`isrgususd`|ISRG.US/USD|INTUITIVE SURGICAL INC|2018-02-01|
|`itrkgbgbx`|ITRK.GB/GBX|Intertek Group PLC|2016-07-06|
|`itubususd`|ITUB.US/USD|Itau Unibanco Holding S.A.|2017-01-26|
|`itvgbgbx`|ITV.GB/GBX|ITV PLC|2016-07-07|
|`itwususd`|ITW.US/USD|ILLINOIS TOOL WORKS|2017-05-11|
|`itxeseur`|ITX.ES/EUR|Inditex SA|2016-11-14|
|`iveususd`|IVE.US/USD|iShares S&amp;P 500 Value ETF|2017-05-11|
|`ivwususd`|IVW.US/USD|iShares S&amp;P 500 Growth ETF|2017-05-11|
|`iwdususd`|IWD.US/USD|iShares Russell 1000 Value ETF|2018-02-01|
|`iwfususd`|IWF.US/USD|iShares Russell 1000 Growth ETF|2018-02-01|
|`iwmususd`|IWM.US/USD|iShares Russell 2000 ETF|2017-01-23|
|`iyrususd`|IYR.US/USD|iShares U.S. Real Estate ETF|2017-01-23|
|`jciususd`|JCI.US/USD|JOHNSON CONTROLS INC|2017-11-02|
|`jnjususd`|JNJ.US/USD|JOHNSON &amp; JOHNSON|2017-01-19|
|`jnkususd`|JNK.US/USD|SPDR Barclays Capital High Yield Bond ETF|2017-01-23|
|`jpmususd`|JPM.US/USD|JPMORGAN CHASE &amp; CO|2017-01-19|
|`jwnususd`|JWN.US/USD|NORDSTROM INC|2017-05-11|
|`kususd`|K.US/USD|KELLOGG CO|2017-05-11|
|`kbcbeeur`|KBC.BE/EUR|KBC Groep NV|2016-11-07|
|`kerfreur`|KER.FR/EUR|Kering|2016-09-30|
|`keyususd`|KEY.US/USD|KEYCORP|2017-11-02|
|`kgfgbgbx`|KGF.GB/GBX|Kingfisher PLC|2016-07-07|
|`khcususd`|KHC.US/USD|KRAFT HEINZ CO/THE|2017-05-11|
|`kmbususd`|KMB.US/USD|KIMBERLY-CLARK CORP|2017-05-11|
|`kmiususd`|KMI.US/USD|KINDER MORGAN INC|2017-11-02|
|`koususd`|KO.US/USD|COCA-COLA CO/THE|2017-01-19|
|`kpnnleur`|KPN.NL/EUR|Koninklijke KPN NV|2016-11-14|
|`krususd`|KR.US/USD|KROGER CO|2017-11-02|
|`kssususd`|KSS.US/USD|KOHLS CORP|2018-02-01|
|`lususd`|L.US/USD|LOEWS CORP|2017-05-11|
|`landgbgbx`|LAND.GB/GBX|Land Securities Group PLC|2016-07-07|
|`lenususd`|LEN.US/USD|LENNAR CORP-A|2017-05-11|
|`lgengbgbx`|LGEN.GB/GBX|Legal &amp; General Group PLC|2016-07-07|
|`lhadeeur`|LHA.DE/EUR|Deutsche Lufthansa AG|2015-04-21|
|`lifreur`|LI.FR/EUR|Klepierre|2016-08-05|
|`lindeeur`|LIN.DE/EUR|Linde AG|2015-04-21|
|`lloygbgbx`|LLOY.GB/GBX|Lloyds Banking Group PLC|2016-07-08|
|`llyususd`|LLY.US/USD|ELI LILLY &amp; CO|2017-05-11|
|`lmtususd`|LMT.US/USD|LOCKHEED MARTIN CORP|2017-05-11|
|`lowususd`|LOW.US/USD|LOWE'S COS INC|2017-11-02|
|`lrfreur`|LR.FR/EUR|Legrand SA|2016-08-05|
|`lrcxususd`|LRCX.US/USD|LAM RESEARCH CORP|2017-11-02|
|`lsegbgbx`|LSE.GB/GBX|London Stock Exchange Group PLC|2016-07-06|
|`luvususd`|LUV.US/USD|SOUTHWEST AIRLINES CO|2017-11-02|
|`lvsususd`|LVS.US/USD|Las Vegas Sands Corp.|2017-01-26|
|`lxsdeeur`|LXS.DE/EUR|Lanxess AG|2015-04-21|
|`mususd`|M.US/USD|MACY'S INC|2017-11-02|
|`maususd`|MA.US/USD|MASTERCARD INC-CLASS A|2017-05-11|
|`maerskbdkdkk`|MAERSKB.DK/DKK|AP Moeller - Maersk A/S|2016-11-08|
|`marususd`|MAR.US/USD|MARRIOTT INTERNATIONAL -CL A|2017-11-02|
|`matususd`|MAT.US/USD|MATTEL INC|2018-02-01|
|`mcfreur`|MC.FR/EUR|LVMH Moet Hennessy Louis Vuitton SA|2016-08-05|
|`mcdususd`|MCD.US/USD|MCDONALD'S CORP|2017-11-02|
|`mchpususd`|MCHP.US/USD|MICROCHIP TECHNOLOGY INC|2018-02-01|
|`mckususd`|MCK.US/USD|MCKESSON CORP|2017-11-02|
|`mdlzususd`|MDLZ.US/USD|MONDELEZ INTERNATIONAL INC-A|2017-11-02|
|`metususd`|MET.US/USD|METLIFE INC|2017-11-02|
|`mgmususd`|MGM.US/USD|MGM RESORTS INTERNATIONAL|2017-11-02|
|`mhgnonok`|MHG.NO/NOK|Marine Harvest ASA|2016-11-14|
|`mksgbgbx`|MKS.GB/GBX|Marks &amp; Spencer Group PLC|2016-07-07|
|`mmmususd`|MMM.US/USD|3M CO|2017-05-11|
|`mndigbgbx`|MNDI.GB/GBX|Mondi PLC|2016-07-08|
|`moususd`|MO.US/USD|ALTRIA GROUP INC|2017-11-02|
|`mpcususd`|MPC.US/USD|MARATHON PETROLEUM CORP|2018-02-01|
|`mrkdeeur`|MRK.DE/EUR|Merck KGaA|2015-03-24|
|`mrkususd`|MRK.US/USD|MERCK &amp; CO. INC.|2017-11-02|
|`mroususd`|MRO.US/USD|MARATHON OIL CORP|2018-02-01|
|`mrwgbgbx`|MRW.GB/GBX|WM Morrison Supermarkets PLC|2016-07-07|
|`msususd`|MS.US/USD|MORGAN STANLEY|2017-11-02|
|`msftususd`|MSFT.US/USD|MICROSOFT CORP|2017-01-19|
|`mtnleur`|MT.NL/EUR|ArcelorMittal|2016-11-14|
|`muususd`|MU.US/USD|MICRON TECHNOLOGY INC|2017-11-02|
|`muv2deeur`|MUV2.DE/EUR|Muenchener Rueckversicherungs AG|2015-04-21|
|`nblususd`|NBL.US/USD|NOBLE ENERGY INC|2018-02-01|
|`ndasesek`|NDA.SE/SEK|Nordea Bank AB|2016-11-07|
|`neeususd`|NEE.US/USD|NEXTERA ENERGY INC|2018-02-01|
|`nemususd`|NEM.US/USD|NEWMONT MINING CORP|2017-05-11|
|`nes1vfieur`|NES1V.FI/EUR|Neste OYJ|2016-11-03|
|`nflxususd`|NFLX.US/USD|NETFLIX INC|2017-01-19|
|`nggbgbx`|NG.GB/GBX|National Grid PLC|2016-07-07|
|`nhynonok`|NHY.NO/NOK|Norsk Hydro ASA|2016-11-14|
|`nkeususd`|NKE.US/USD|NIKE INC|2017-11-02|
|`nldidxeur`|NLD.IDX/EUR|Netherlands 25 Index|2013-02-27|
|`nocususd`|NOC.US/USD|NORTHROP GRUMMAN CORP|2017-05-11|
|`novobdkdkk`|NOVOB.DK/DKK|Novo Nordisk A/S|2016-11-07|
|`nre1vfieur`|NRE1V.FI/EUR|Nokian Renkaat OYJ|2016-11-03|
|`nrgususd`|NRG.US/USD|NRG ENERGY INC|2018-02-01|
|`nscususd`|NSC.US/USD|NORFOLK SOUTHERN CORP|2018-02-01|
|`nvdaususd`|NVDA.US/USD|NVIDIA CORP|2017-01-19|
|`nwlususd`|NWL.US/USD|NEWELL BRANDS INC|2017-11-02|
|`nxtgbgbx`|NXT.GB/GBX|Next PLC|2016-07-06|
|`nzdcad`|NZD/CAD|New Zealand Dollar vs Canadian Dollar|2006-01-01|
|`nzdchf`|NZD/CHF|New Zealand Dollar vs Swiss Franc|2006-01-01|
|`nzdjpy`|NZD/JPY|New Zealand Dollar vs Japanese Yen|2006-01-01|
|`nzdusd`|NZD/USD|New Zealand Dollar vs US Dollar|2003-08-03|
|`nzymbdkdkk`|NZYMB.DK/DKK|Novozymes A/S|2016-11-07|
|`ojuicecmdusx`|OJUICE.CMD/USX|Orange Juice|2017-10-20|
|`okeususd`|OKE.US/USD|ONEOK INC|2018-02-01|
|`omcususd`|OMC.US/USD|OMNICOM GROUP|2018-02-01|
|`orfreur`|OR.FR/EUR|L'Oreal SA|2016-08-05|
|`orafreur`|ORA.FR/EUR|Orange SA|2016-08-05|
|`orclususd`|ORCL.US/USD|ORACLE CORP|2017-11-02|
|`orknonok`|ORK.NO/NOK|Orkla ASA|2016-11-14|
|`orlyususd`|ORLY.US/USD|O'REILLY AUTOMOTIVE INC|2017-11-02|
|`ote1vfieur`|OTE1V.FI/EUR|Outotec OYJ|2016-11-03|
|`out1vfieur`|OUT1V.FI/EUR|Outokumpu OYJ|2016-11-03|
|`oxyususd`|OXY.US/USD|OCCIDENTAL PETROLEUM CORP|2017-05-11|
|`pah3deeur`|PAH3.DE/EUR|Porsche Automobil Holding SE|2015-04-21|
|`payxususd`|PAYX.US/USD|PAYCHEX INC|2018-02-01|
|`pbrususd`|PBR.US/USD|Petroleo Brasileiro S.A.|2017-01-26|
|`pcarususd`|PCAR.US/USD|PACCAR INC|2018-02-01|
|`pcgususd`|PCG.US/USD|P G &amp; E CORP|2017-11-02|
|`pclnususd`|PCLN.US/USD|PRICELINE GROUP INC/THE|2017-01-19|
|`pepususd`|PEP.US/USD|PEPSICO INC|2017-11-02|
|`pfcgbgbx`|PFC.GB/GBX|Petrofac Ltd|2016-07-08|
|`pfeususd`|PFE.US/USD|PFIZER INC|2017-01-19|
|`pgususd`|PG.US/USD|PROCTER &amp; GAMBLE CO/THE|2017-01-19|
|`pgrususd`|PGR.US/USD|PROGRESSIVE CORP|2018-02-01|
|`phususd`|PH.US/USD|PARKER HANNIFIN CORP|2018-02-01|
|`phianleur`|PHIA.NL/EUR|Koninklijke Philips NV|2016-11-14|
|`plnidxpln`|PLN.IDX/PLN|Poland 20 Index|2017-12-01|
|`pmususd`|PM.US/USD|PHILIP MORRIS INTERNATIONAL|2017-11-02|
|`pncususd`|PNC.US/USD|PNC FINANCIAL SERVICES GROUP|2017-11-02|
|`pndoradkdkk`|PNDORA.DK/DKK|Pandora A/S|2016-11-08|
|`ppgususd`|PPG.US/USD|PPG INDUSTRIES INC|2018-02-02|
|`prugbgbx`|PRU.GB/GBX|Prudential PLC|2016-07-07|
|`pruususd`|PRU.US/USD|PRUDENTIAL FINANCIAL INC|2018-02-01|
|`psaususd`|PSA.US/USD|PUBLIC STORAGE|2018-02-01|
|`psmdeeur`|PSM.DE/EUR|ProSiebenSat.1 Media AG|2015-04-20|
|`psngbgbx`|PSN.GB/GBX|Persimmon PLC|2016-07-08|
|`psongbgbx`|PSON.GB/GBX|Pearson PLC|2016-07-07|
|`psxususd`|PSX.US/USD|PHILLIPS 66|2018-02-01|
|`pubfreur`|PUB.FR/EUR|Publicis Groupe SA|2016-08-05|
|`pxdususd`|PXD.US/USD|PIONEER NATURAL RESOURCES CO|2017-11-02|
|`pyplususd`|PYPL.US/USD|PAYPAL HOLDINGS INC|2017-11-02|
|`qcomususd`|QCOM.US/USD|QUALCOMM INC|2017-11-02|
|`qqqususd`|QQQ.US/USD|PowerShares QQQ ETF|2017-01-23|
|`randnleur`|RAND.NL/EUR|Randstad Holding NV|2016-11-14|
|`rbgbgbx`|RB.GB/GBX|Reckitt Benckiser Group PLC|2016-07-06|
|`rbiateur`|RBI.AT/EUR|Raiffeisen Bank International AG|2016-11-02|
|`rbsgbgbx`|RBS.GB/GBX|Royal Bank of Scotland Group PLC|2016-07-08|
|`rdsanleur`|RDSA.NL/EUR|Royal Dutch Shell PLC|2016-11-14|
|`rdsbgbgbx`|RDSB.GB/GBX|Royal Dutch Shell PLC|2016-11-01|
|`reeeseur`|REE.ES/EUR|Red Electrica Corp SA|2016-11-14|
|`regnususd`|REGN.US/USD|REGENERON PHARMACEUTICALS|2017-11-02|
|`relgbgbx`|REL.GB/GBX|Reed Elsevier PLC|2016-07-08|
|`rennleur`|REN.NL/EUR|RELX NV|2016-11-14|
|`repeseur`|REP.ES/EUR|Repsol SA|2016-11-14|
|`rfususd`|RF.US/USD|REGIONS FINANCIAL CORP|2018-02-01|
|`rhtususd`|RHT.US/USD|RED HAT INC|2018-02-01|
|`rifreur`|RI.FR/EUR|Pernod-Ricard SA|2016-08-05|
|`riogbgbx`|RIO.GB/GBX|Rio Tinto PLC|2016-07-06|
|`rmggbgbx`|RMG.GB/GBX|Royal Mail PLC|2016-07-07|
|`rnofreur`|RNO.FR/EUR|Renault SA|2016-08-05|
|`rostususd`|ROST.US/USD|ROSS STORES INC|2018-02-01|
|`rrgbgbx`|RR.GB/GBX|Rolls-Royce Holdings PLC|2016-07-08|
|`rrcususd`|RRC.US/USD|RANGE RESOURCES CORP|2018-02-01|
|`rrsgbgbx`|RRS.GB/GBX|Randgold Resources Ltd|2016-07-06|
|`rsagbgbx`|RSA.GB/GBX|RSA Insurance Group PLC|2016-07-07|
|`rtnususd`|RTN.US/USD|RAYTHEON COMPANY|2018-02-01|
|`rwedeeur`|RWE.DE/EUR|RWE AG|2015-04-16|
|`saffreur`|SAF.FR/EUR|Safran SA|2016-08-05|
|`saneseur`|SAN.ES/EUR|Banco Santander SA|2016-11-14|
|`sanfreur`|SAN.FR/EUR|Sanofi|2016-08-05|
|`sandsesek`|SAND.SE/SEK|Sandvik AB|2016-11-08|
|`sapdeeur`|SAP.DE/EUR|SAP AG|2015-04-16|
|`sbrygbgbx`|SBRY.GB/GBX|J Sainsbury PLC|2016-07-07|
|`sbuxususd`|SBUX.US/USD|STARBUCKS CORP|2017-11-02|
|`scabsesek`|SCAB.SE/SEK|Svenska Cellulosa AB|2016-11-07|
|`schwususd`|SCHW.US/USD|SCHWAB (CHARLES) CORP|2017-11-02|
|`sdfdeeur`|SDF.DE/EUR|K+S AG|2015-04-15|
|`sebasesek`|SEBA.SE/SEK|Skandinaviska Enskilda Banken AB|2016-11-14|
|`secubsesek`|SECUB.SE/SEK|Securitas AB|2016-11-07|
|`sgdidxsgd`|SGD.IDX/SGD|Singapore Blue Chip Cash Index|2017-12-01|
|`sgdjpy`|SGD/JPY|Singapore Dollar vs Japanese Yen|2007-03-13|
|`sgegbgbx`|SGE.GB/GBX|Sage Group PLC/The|2016-07-08|
|`sgofreur`|SGO.FR/EUR|Cie de St-Gobain|2016-10-31|
|`shpgbgbx`|SHP.GB/GBX|Shire PLC|2016-07-06|
|`shwususd`|SHW.US/USD|SHERWIN-WILLIAMS COMPANY|2018-02-01|
|`siedeeur`|SIE.DE/EUR|Siemens AG|2015-04-20|
|`sjmususd`|SJM.US/USD|JM SMUCKER COMPANY|2018-02-01|
|`skabsesek`|SKAB.SE/SEK|Skanska AB|2016-11-07|
|`skfbsesek`|SKFB.SE/SEK|SKF AB|2016-11-07|
|`skygbgbx`|SKY.GB/GBX|Sky Plc|2016-07-07|
|`slvususd`|SLV.US/USD|iShares Silver Trust ETF|2018-02-01|
|`smingbgbx`|SMIN.GB/GBX|Smiths Group PLC|2016-07-08|
|`sngbgbx`|SN.GB/GBX|Smith &amp; Nephew PLC|2016-07-08|
|`snapususd`|SNAP.US/USD|SNAP Inc|2017-11-02|
|`soususd`|SO.US/USD|SOUTHERN CO/THE|2017-11-02|
|`solbbeeur`|SOLB.BE/EUR|Solvay SA|2016-11-07|
|`spgususd`|SPG.US/USD|SIMON PROPERTY GROUP INC|2017-11-02|
|`spyususd`|SPY.US/USD|SPDR S&amp;P 500 ETF|2017-02-16|
|`ssegbgbx`|SSE.GB/GBX|SSE PLC|2016-07-08|
|`stangbgbx`|STAN.GB/GBX|Standard Chartered PLC|2016-07-07|
|`stervfieur`|STERV.FI/EUR|Stora Enso OYJ|2016-11-03|
|`stiususd`|STI.US/USD|SUNTRUST BANKS INC|2018-02-01|
|`stlnonok`|STL.NO/NOK|Statoil ASA|2016-11-14|
|`sttususd`|STT.US/USD|STATE STREET CORP|2018-02-01|
|`stzususd`|STZ.US/USD|CONSTELLATION BRANDS INC-A|2018-02-01|
|`sufreur`|SU.FR/EUR|Schneider Electric SA|2016-08-05|
|`sugarcmdusd`|SUGAR.CMD/USD|London Sugar No.5|2017-10-02|
|`svtgbgbx`|SVT.GB/GBX|Severn Trent PLC|2016-07-06|
|`swedasesek`|SWEDA.SE/SEK|Swedbank AB|2016-11-07|
|`swkususd`|SWK.US/USD|STANLEY BLACK &amp; DECKER INC|2018-02-01|
|`swmasesek`|SWMA.SE/SEK|Swedish Match AB|2016-11-07|
|`sykususd`|SYK.US/USD|STRYKER CORP|2018-02-01|
|`symcususd`|SYMC.US/USD|SYMANTEC CORP|2018-02-01|
|`syyususd`|SYY.US/USD|SYSCO CORP|2018-02-01|
|`tususd`|T.US/USD|AT&amp;T INC|2017-01-19|
|`tapususd`|TAP.US/USD|MOLSON COORS BREWING CO -B|2018-02-01|
|`tategbgbx`|TATE.GB/GBX|Tate &amp; Lyle PLC|2016-07-08|
|`tefeseur`|TEF.ES/EUR|Telefonica SA|2016-11-14|
|`telnonok`|TEL.NO/NOK|Telenor ASA|2016-11-14|
|`tel2bsesek`|TEL2B.SE/SEK|Tele2 AB|2016-11-08|
|`tevaususd`|TEVA.US/USD|TEVA PHARMACEUTICAL-SP ADR|2017-11-02|
|`tgtususd`|TGT.US/USD|TARGET CORP|2017-11-02|
|`tifususd`|TIF.US/USD|TIFFANY &amp; CO|2018-02-01|
|`tjxususd`|TJX.US/USD|TJX COMPANIES INC|2017-11-02|
|`tkadeeur`|TKA.DE/EUR|ThyssenKrupp AG|2015-04-14|
|`tls1vfieur`|TLS1V.FI/EUR|Telia Company AB|2016-11-09|
|`tlsnsesek`|TLSN.SE/SEK|Telia Company AB|2016-11-14|
|`tltususd`|TLT.US/USD|iShares 20+ Year Treasury Bond ETF|2017-01-23|
|`tlwgbgbx`|TLW.GB/GBX|Tullow Oil PLC|2016-07-07|
|`tmoususd`|TMO.US/USD|THERMO FISHER SCIENTIFIC INC|2017-11-02|
|`tpkgbgbx`|TPK.GB/GBX|Travis Perkins PLC|2016-07-08|
|`trowususd`|TROW.US/USD|T ROWE PRICE GROUP INC|2018-02-01|
|`trvususd`|TRV.US/USD|TRAVELERS COS INC/THE|2017-11-02|
|`tryjpy`|TRY/JPY|Turkish Lira vs Japanese Yen|2010-05-09|
|`tscogbgbx`|TSCO.GB/GBX|Tesco PLC|2016-07-08|
|`tslaususd`|TSLA.US/USD|TESLA MOTORS INC|2017-01-19|
|`tsmususd`|TSM.US/USD|Taiwan Semiconductor Manufacturing Company Limited|2018-02-01|
|`tsnususd`|TSN.US/USD|TYSON FOODS INC-CL A|2018-02-01|
|`tui1deeur`|TUI1.DE/EUR|TUI AG|2015-04-15|
|`twtrususd`|TWTR.US/USD|TWITTER INC|2017-11-02|
|`txnususd`|TXN.US/USD|TEXAS INSTRUMENTS INC|2017-11-02|
|`ucbbeeur`|UCB.BE/EUR|UCB SA|2016-11-07|
|`ugfreur`|UG.FR/EUR|Peugeot SA|2016-08-05|
|`ukgilttrgbp`|UKGILT.TR/GBP|UK Long Gilt|2017-12-26|
|`ultaususd`|ULTA.US/USD|ULTA SALON COSMETICS &amp; FRAGR|2017-11-02|
|`ulvrgbgbx`|ULVR.GB/GBX|Unilever PLC|2016-07-06|
|`umibeeur`|UMI.BE/EUR|Umicore SA|2016-11-07|
|`unanleur`|UNA.NL/EUR|Unilever NV|2016-11-14|
|`unhususd`|UNH.US/USD|UNITEDHEALTH GROUP INC|2017-11-02|
|`unpususd`|UNP.US/USD|UNION PACIFIC CORP|2017-11-15|
|`upsususd`|UPS.US/USD|UNITED PARCEL SERVICE-CL B|2017-11-15|
|`usbususd`|USB.US/USD|US BANCORP|2017-11-15|
|`usdcad`|USD/CAD|US Dollar vs Canadian Dollar|2003-08-03|
|`usdchf`|USD/CHF|US Dollar vs Swiss Franc|2003-05-04|
|`usdcnh`|USD/CNH|US Dollar vs Offshore Chinese Renminbi|2012-06-27|
|`usdczk`|USD/CZK|US Dollar vs Czech Koruna|2016-01-03|
|`usddkk`|USD/DKK|US Dollar vs Danish Krone|2003-08-04|
|`usdhkd`|USD/HKD|US Dollar vs Hong Kong Dollar|2007-03-13|
|`usdhuf`|USD/HUF|US Dollar vs Hungarian Forint|2007-03-13|
|`usdils`|USD/ILS|US Dollar vs Israeli Shekel|2016-12-15|
|`usdjpy`|USD/JPY|US Dollar vs Japanese Yen|2003-05-04|
|`usdmxn`|USD/MXN|US Dollar vs Mexican Peso|2007-03-13|
|`usdnok`|USD/NOK|US Dollar vs Norwegian Krone|2003-08-04|
|`usdpln`|USD/PLN|US Dollar vs Polish Zloty|2007-03-13|
|`usdron`|USD/RON|US Dollar vs Romanian Leu|2016-12-18|
|`usdrub`|USD/RUB|US Dollar vs Russian Ruble|2007-03-13|
|`usdsek`|USD/SEK|US Dollar vs Swedish Krona|2003-08-04|
|`usdsgd`|USD/SGD|US Dollar vs Singapore Dollar|2004-11-16|
|`usdthb`|USD/THB|US Dollar vs Thai Baht|2017-02-13|
|`usdtry`|USD/TRY|US Dollar vs Turkish Lira|2007-03-13|
|`usdzar`|USD/ZAR|US Dollar vs South African Rand|1997-10-13|
|`usoususd`|USO.US/USD|United States Oil|2017-01-26|
|`utxususd`|UTX.US/USD|UNITED TECHNOLOGIES CORP|2017-11-15|
|`uugbgbx`|UU.GB/GBX|United Utilities Group PLC|2016-07-08|
|`vususd`|V.US/USD|VISA INC-CLASS A SHARES|2017-01-19|
|`valeususd`|VALE.US/USD|Vale S.A.|2017-01-26|
|`veaususd`|VEA.US/USD|Vanguard FTSE Developed Markets ETF|2017-11-15|
|`vfcususd`|VFC.US/USD|VF CORP|2018-02-01|
|`vgkususd`|VGK.US/USD|Vanguard FTSE Europe ETF|2018-02-01|
|`viabususd`|VIAB.US/USD|VIACOM INC-CLASS B|2018-02-01|
|`viefreur`|VIE.FR/EUR|Veolia Environnement SA|2016-08-05|
|`vivfreur`|VIV.FR/EUR|Vivendi SA|2016-08-05|
|`vkfreur`|VK.FR/EUR|Vallourec SA|2016-08-05|
|`vloususd`|VLO.US/USD|VALERO ENERGY CORP|2017-11-15|
|`vmcususd`|VMC.US/USD|VULCAN MATERIALS CO|2018-02-01|
|`vnadeeur`|VNA.DE/EUR|Vonovia SE|2015-04-14|
|`vnqususd`|VNQ.US/USD|Vanguard REIT ETF|2017-11-15|
|`vodgbgbx`|VOD.GB/GBX|Vodafone Group PLC|2016-07-07|
|`voeateur`|VOE.AT/EUR|Voestalpine AG|2016-11-04|
|`volvbsesek`|VOLVB.SE/SEK|Volvo AB|2016-11-07|
|`vow3deeur`|VOW3.DE/EUR|Volkswagen AG|2015-04-14|
|`vpknleur`|VPK.NL/EUR|Koninklijke Vopak NV|2016-11-14|
|`vrtxususd`|VRTX.US/USD|VERTEX PHARMACEUTICALS INC|2017-11-15|
|`vwsdkdkk`|VWS.DK/DKK|Vestas Wind Systems A/S|2016-11-07|
|`vxxususd`|VXX.US/USD|iPath S&amp;P 500 VIX ST Futures ETN|2017-01-26|
|`vzususd`|VZ.US/USD|VERIZON COMMUNICATIONS INC|2017-11-15|
|`wbaususd`|WBA.US/USD|WALGREENS BOOTS ALLIANCE INC|2017-11-15|
|`wdcususd`|WDC.US/USD|WESTERN DIGITAL CORP|2017-11-15|
|`weirgbgbx`|WEIR.GB/GBX|Weir Group PLC/The|2016-07-08|
|`wfcususd`|WFC.US/USD|WELLS FARGO &amp; CO|2017-01-23|
|`whrususd`|WHR.US/USD|WHIRLPOOL CORP|2018-02-01|
|`wklnleur`|WKL.NL/EUR|Wolters Kluwer NV|2016-11-14|
|`wmtususd`|WMT.US/USD|WAL-MART STORES INC|2017-11-15|
|`wosgbgbx`|WOS.GB/GBX|Wolseley PLC|2016-07-06|
|`wppgbgbx`|WPP.GB/GBX|WPP PLC|2016-07-08|
|`wtbgbgbx`|WTB.GB/GBX|Whitbread PLC|2016-07-06|
|`wynnususd`|WYNN.US/USD|WYNN RESORTS LTD|2017-11-15|
|`xususd`|X.US/USD|UNITED STATES STEEL CORP|2017-11-15|
|`xagusd`|XAG/USD|Spot silver|1997-08-13|
|`xauusd`|XAU/USD|Spot gold|1999-09-01|
|`xleususd`|XLE.US/USD|Energy Select Sector SPDR Fund|2017-11-15|
|`xlfususd`|XLF.US/USD|Financial Select Sector SPDR Fund|2017-01-23|
|`xliususd`|XLI.US/USD|Industrial Select Sector SPDR Fund|2017-01-23|
|`xlkususd`|XLK.US/USD|Technology Select Sector SPDR Fund|2017-11-15|
|`xlnxususd`|XLNX.US/USD|XILINX INC|2018-02-01|
|`xlpususd`|XLP.US/USD|Consumer Staples Select Sector SPDR Fund|2017-01-23|
|`xluususd`|XLU.US/USD|Utilities Select Sector SPDR Fund|2017-11-15|
|`xlvususd`|XLV.US/USD|Health Care Select Sector SPDR Fund|2017-11-15|
|`xlyususd`|XLY.US/USD|Consumer Discretionary Select Sector SPDR Fund|2017-11-15|
|`xomususd`|XOM.US/USD|EXXON MOBIL CORP|2017-01-19|
|`xopususd`|XOP.US/USD|SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF|2017-01-26|
|`yumususd`|YUM.US/USD|YUM! BRANDS INC|2018-02-01|
|`zarjpy`|ZAR/JPY|South African Rand vs Japanese Yen|1999-03-03|
|`zbhususd`|ZBH.US/USD|ZIMMER BIOMET HOLDINGS INC|2018-02-01|
