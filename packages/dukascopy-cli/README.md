<h1>dukascopy-cli</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli.png?raw=true" alt="dukascopy-cli"></p>

<p align="center">
  <a href="https://travis-ci.org/github/Leo4815162342/dukascopy-node"><img src="https://api.travis-ci.org/Leo4815162342/dukascopy-node.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="dukascopy-node tested with jest"></a>
</p>

> A **command line interface** for downloading historical OHLC (open, high, low, close) price data for 500+ instruments (stocks/commodities/currencies/cfd/crypto) from publicly available sources on https://www.dukascopy.com/

## Installation

#### NPM:

```bash
npm install dukascopy-cli --save-dev
```

#### yarn:

```bash
yarn add dukascopy-cli --dev
```

## Usage

#### As global dependency

```bash
dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

#### As dev dependency

```bash
yarn dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

## Options

```bash
  -d, --debug                 Output extra debugging
  -s, --silent                Hides the search config in the CLI output (default: false)
  -i, --instrument <value>    Trading instrument
  -from, --date-from <value>  From date (yyyy-mm-dd)
  -to, --date-to <value>      To date (yyyy-mm-dd)
  -t, --timeframe <value>     Timeframe aggregation (tick, m1, m15, m30, h1, d1, mn1) (default: "d1")
  -p, --price-type <value>    Price type: (bid, ask) (default: "bid")
  -utc, --utc-offset <value>  UTC offset in minutes (default: 0)
  -v, --volumes               Include volumes (default: false)
  -fl, --flats                Include flats (0 volumes) (default: false)
  -f, --format <value>        Output format (csv, json, array) (default: "json")
  -dir, --directory <value>   Download directory (default: "./download")
  -bs, --batch-size <value>   Batch size of downloaded artifacts (default: 10)
  -bp, --batch-pause <value>  Pause between batches in ms (default: 1000)
  -h, --help                  display help for command
```

## Screenshots

<p><img width="550" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli-output.png?raw=true" alt="dukascopy-cli output"></p>


***

<h2 id="instruments">List of all supported instruments</h2>

### Forex
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`audcad`|AUD/CAD|Australian Dollar vs Canadian Dollar|2005-12-26|1992-01-01|
|`audchf`|AUD/CHF|Australian Dollar vs Swiss Franc|2005-12-26|1991-01-01|
|`audjpy`|AUD/JPY|Australian Dollar vs Japanese Yen|2003-11-29|1991-01-01|
|`audnzd`|AUD/NZD|Australian Dollar vs New Zealand Dollar|2006-12-08|1993-01-01|
|`audsgd`|AUD/SGD|Australian Dollar vs Singapore Dollar|2007-03-13|1999-01-01|
|`audusd`|AUD/USD|Australian Dollar vs US Dollar|2003-08-03|1986-01-01|
|`cadchf`|CAD/CHF|Canadian Dollar vs Swiss Franc|2005-12-26|1991-01-01|
|`cadhkd`|CAD/HKD|Canadian Dollar vs Hong Kong Dollar|2007-03-13|1997-01-01|
|`cadjpy`|CAD/JPY|Canadian Dollar vs Japanese Yen|2004-10-20|1993-01-01|
|`chfjpy`|CHF/JPY|Swiss Franc vs Japanese Yen|2003-08-03|1990-01-01|
|`chfsgd`|CHF/SGD|Swiss Franc vs Singapore Dollar|2007-03-13|1998-01-01|
|`euraud`|EUR/AUD|Euro vs Australian Dollar|2005-10-02|1991-01-01|
|`eurcad`|EUR/CAD|Euro vs Canadian Dollar|2004-10-20|1991-01-01|
|`eurchf`|EUR/CHF|Euro vs Swiss Franc|2003-08-03|1990-01-01|
|`eurczk`|EUR/CZK|Euro vs Czech Koruna|2016-01-03|2016-01-01|
|`eurdkk`|EUR/DKK|Euro vs Danish Krone|2004-10-20|1993-01-01|
|`eurgbp`|EUR/GBP|Euro vs Pound Sterling|2003-08-03|1995-01-01|
|`eurhkd`|EUR/HKD|Euro vs Hong Kong Dollar|2007-03-13|1999-01-01|
|`eurhuf`|EUR/HUF|Euro vs Hungarian Forint|2007-03-13|1999-01-01|
|`eurjpy`|EUR/JPY|Euro vs Japanese Yen|2003-08-03|1972-01-01|
|`eurnok`|EUR/NOK|Euro vs Norwegian Krone|2004-10-20|1991-01-01|
|`eurnzd`|EUR/NZD|Euro vs New Zealand Dollar|2005-12-26|1999-01-01|
|`eurpln`|EUR/PLN|Euro vs Polish Zloty|2007-03-13|1999-01-01|
|`eurrub`|EUR/RUB|Euro vs Russian Rouble|2007-03-13|1999-01-01|
|`eursek`|EUR/SEK|Euro vs Swedish Krona|2004-10-27|1991-01-01|
|`eursgd`|EUR/SGD|Euro vs Singapore Dollar|2007-03-13|1998-01-01|
|`eurtry`|EUR/TRY|Euro vs Turkish Lira|2007-03-13|2005-01-01|
|`eurusd`|EUR/USD|Euro vs US Dollar|2003-05-04|1972-01-01|
|`gbpaud`|GBP/AUD|Pound Sterling vs Australian Dollar|2006-01-01|1991-01-01|
|`gbpcad`|GBP/CAD|Pound Sterling vs Canadian Dollar|2006-01-01|1990-01-01|
|`gbpchf`|GBP/CHF|Pound Sterling vs Swiss Franc|2003-08-03|1990-01-01|
|`gbpjpy`|GBP/JPY|Pound Sterling vs Japanese Yen|2003-08-03|1991-01-01|
|`gbpnzd`|GBP/NZD|Pound Sterling vs New Zealand Dollar|2006-01-01|1994-01-01|
|`gbpusd`|GBP/USD|Pound Sterling vs US Dollar|2003-05-04|1986-01-01|
|`hkdjpy`|HKD/JPY|Hong Kong Dollar vs Japanese Yen|2007-03-13|1997-01-01|
|`nzdcad`|NZD/CAD|New Zealand Dollar vs Canadian Dollar|2006-01-01|2002-01-01|
|`nzdchf`|NZD/CHF|New Zealand Dollar vs Swiss Franc|2006-01-01|1997-01-01|
|`nzdjpy`|NZD/JPY|New Zealand Dollar vs Japanese Yen|2006-01-01|1997-01-01|
|`nzdusd`|NZD/USD|New Zealand Dollar vs US Dollar|2003-08-03|1991-01-01|
|`sgdjpy`|SGD/JPY|Singapore Dollar vs Japanese Yen|2007-03-13|1997-01-01|
|`tryjpy`|TRY/JPY|Turkish Lira vs Japanese Yen|2010-05-09|2010-01-01|
|`usdcad`|USD/CAD|US Dollar vs Canadian Dollar|2003-08-03|1986-01-01|
|`usdchf`|USD/CHF|US Dollar vs Swiss Franc|2003-05-04|1986-01-01|
|`usdcnh`|USD/CNH|US Dollar vs Offshore Chinese Renminbi|2012-06-27|2012-01-01|
|`usdczk`|USD/CZK|US Dollar vs Czech Koruna|2016-01-03|2016-01-01|
|`usddkk`|USD/DKK|US Dollar vs Danish Krone|2003-08-04|1990-01-01|
|`usdhkd`|USD/HKD|US Dollar vs Hong Kong Dollar|2007-03-13|1986-01-01|
|`usdhuf`|USD/HUF|US Dollar vs Hungarian Forint|2007-03-13|1998-01-01|
|`usdils`|USD/ILS|US Dollar vs Israeli Shekel|2016-12-15|2016-01-01|
|`usdjpy`|USD/JPY|US Dollar vs Japanese Yen|2003-05-04|1986-01-01|
|`usdmxn`|USD/MXN|US Dollar vs Mexican Peso|2007-03-13|1995-01-01|
|`usdnok`|USD/NOK|US Dollar vs Norwegian Krone|2003-08-04|1991-01-01|
|`usdpln`|USD/PLN|US Dollar vs Polish Zloty|2007-03-13|1999-01-01|
|`usdron`|USD/RON|US Dollar vs Romanian Leu|2016-12-18|2016-01-01|
|`usdrub`|USD/RUB|US Dollar vs Russian Ruble|2007-03-13|1999-01-01|
|`usdsek`|USD/SEK|US Dollar vs Swedish Krona|2003-08-04|1991-01-01|
|`usdsgd`|USD/SGD|US Dollar vs Singapore Dollar|2004-11-16|1990-01-01|
|`usdthb`|USD/THB|US Dollar vs Thai Baht|2017-02-13|2017-01-01|
|`usdtry`|USD/TRY|US Dollar vs Turkish Lira|2007-03-13|1998-01-01|
|`usdzar`|USD/ZAR|US Dollar vs South African Rand|1997-10-13|1990-01-01|
|`xagusd`|XAG/USD|Spot silver|1997-08-13|1997-01-01|
|`xauusd`|XAU/USD|Spot gold|1999-09-01|1997-01-01|
|`zarjpy`|ZAR/JPY|South African Rand vs Japanese Yen|1999-03-03|1997-01-01|
### Commodities
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`cocoacmdusd`|COCOA.CMD/USD|NY Cocoa|2017-10-20|2017-01-01|
|`coffeecmdusx`|COFFEE.CMD/USX|Coffee Arabica|2017-12-04|2017-01-01|
|`coppercmdusd`|COPPER.CMD/USD|High Grade Copper|2012-03-01|2012-01-01|
|`cottoncmdusx`|COTTON.CMD/USX|Cotton|2017-10-20|2017-01-01|
|`dieselcmdusd`|DIESEL.CMD/USD|Gas oil|2017-10-20|2017-01-01|
|`brentcmdusd`|BRENT.CMD/USD|US Brent Crude Oil|2010-12-02|2006-01-01|
|`lightcmdusd`|LIGHT.CMD/USD|US Light Crude Oil|2011-09-23|1983-01-01|
|`gascmdusd`|GAS.CMD/USD|Natural Gas|2012-08-20|2012-01-01|
|`ojuicecmdusx`|OJUICE.CMD/USX|Orange Juice|2017-10-20|2017-01-01|
|`sugarcmdusd`|SUGAR.CMD/USD|London Sugar No.5|2017-10-02|2017-01-01|
|`soybeancmdusx`|SOYBEAN.CMD/USX|Soybean|2017-12-01|2017-01-01|
### Indicies (CFD)
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`chiidxusd`|CHI.IDX/USD|China A50 Index|2017-07-17|2017-01-01|
|`dollaridxusd`|DOLLAR.IDX/USD|US Dollar Index|2017-12-01|2017-01-01|
|`fraidxeur`|FRA.IDX/EUR|France 40 Index|2011-09-18|1987-01-01|
|`usa30idxusd`|USA30.IDX/USD|USA 30 Index|2013-09-30|2013-01-01|
|`deuidxeur`|DEU.IDX/EUR|Germany 30 Index|2013-09-30|2013-01-01|
|`eusidxeur`|EUS.IDX/EUR|Europe 50 Index|2011-09-18|1998-01-01|
|`gbridxgbp`|GBR.IDX/GBP|UK 100 Index|2011-09-18|1988-01-01|
|`hkgidxhkd`|HKG.IDX/HKD|Hong Kong 40 Index|2011-09-18|1990-01-01|
|`espidxeur`|ESP.IDX/EUR|Spain 35 Index|2012-01-02|1992-01-01|
|`jpnidxjpy`|JPN.IDX/JPY|Japan 225|2011-09-18|1986-01-01|
|`usatechidxusd`|USATECH.IDX/USD|USA 100 Technical Index|2011-09-18|1990-01-01|
|`usa500idxusd`|USA500.IDX/USD|USA 500 Index|2011-09-18|1980-01-01|
|`cheidxchf`|CHE.IDX/CHF|Switzerland 20 Index|2011-09-18|1992-01-01|
|`ausidxaud`|AUS.IDX/AUD|Australia 200 Index|2013-01-02|1982-01-01|
|`indidxusd`|IND.IDX/USD|India 50 Index|2017-12-01|2017-01-01|
|`nldidxeur`|NLD.IDX/EUR|Netherlands 25 Index|2013-02-27|1999-01-01|
|`plnidxpln`|PLN.IDX/PLN|Poland 20 Index|2017-12-01|2017-01-01|
|`sgdidxsgd`|SGD.IDX/SGD|Singapore Blue Chip Cash Index|2017-12-01|2017-01-01|
|`ussc2000idxusd`|USSC2000.IDX/USD|US Small Cap 2000|2018-08-08|2018-01-01|
### Bonds (CFD)
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`bundtreur`|BUND.TR/EUR|Euro Bund|2016-05-02|2016-01-01|
|`ukgilttrgbp`|UKGILT.TR/GBP|UK Long Gilt|2017-12-26|2017-01-01|
|`ustbondtrusd`|USTBOND.TR/USD|US T-Bond|2018-01-04|2017-01-01|
### Austria 🇦🇹
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`ebsateur`|EBS.AT/EUR|Erste Group Bank AG|2016-11-04|2011-01-01|
|`rbiateur`|RBI.AT/EUR|Raiffeisen Bank International AG|2016-11-02|2011-01-01|
|`voeateur`|VOE.AT/EUR|Voestalpine AG|2016-11-04|2011-01-01|
### Belgium 🇧🇪
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`abibeeur`|ABI.BE/EUR|Anheuser-Busch InBev NV|2016-11-14|2011-01-01|
|`agsbeeur`|AGS.BE/EUR|Ageas|2016-11-14|2011-01-01|
|`belgbeeur`|BELG.BE/EUR|Proximus|2016-11-07|2011-01-01|
|`kbcbeeur`|KBC.BE/EUR|KBC Groep NV|2016-11-07|2011-01-01|
|`solbbeeur`|SOLB.BE/EUR|Solvay SA|2016-11-07|2011-01-01|
|`ucbbeeur`|UCB.BE/EUR|UCB SA|2016-11-07|2011-01-01|
|`umibeeur`|UMI.BE/EUR|Umicore SA|2016-11-07|2011-01-01|
### Denmark 🇩🇰
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`carlbdkdkk`|CARLB.DK/DKK|Carlsberg A/S|2016-11-07|2011-01-01|
|`colobdkdkk`|COLOB.DK/DKK|Coloplast A/S|2016-11-07|2011-01-01|
|`danskedkdkk`|DANSKE.DK/DKK|Danske Bank A/S|2016-11-08|2011-01-01|
|`maerskbdkdkk`|MAERSKB.DK/DKK|AP Moeller - Maersk A/S|2016-11-08|2011-01-01|
|`novobdkdkk`|NOVOB.DK/DKK|Novo Nordisk A/S|2016-11-07|2011-01-01|
|`nzymbdkdkk`|NZYMB.DK/DKK|Novozymes A/S|2016-11-07|2011-01-01|
|`pndoradkdkk`|PNDORA.DK/DKK|Pandora A/S|2016-11-08|2011-01-01|
|`vwsdkdkk`|VWS.DK/DKK|Vestas Wind Systems A/S|2016-11-07|2011-01-01|
### Finland 🇫🇮
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`eli1vfieur`|ELI1V.FI/EUR|Elisa OYJ|2016-11-03|2011-01-01|
|`nes1vfieur`|NES1V.FI/EUR|Neste OYJ|2016-11-03|2011-01-01|
|`nre1vfieur`|NRE1V.FI/EUR|Nokian Renkaat OYJ|2016-11-03|2011-01-01|
|`ote1vfieur`|OTE1V.FI/EUR|Outotec OYJ|2016-11-03|2011-01-01|
|`out1vfieur`|OUT1V.FI/EUR|Outokumpu OYJ|2016-11-03|2011-01-01|
|`stervfieur`|STERV.FI/EUR|Stora Enso OYJ|2016-11-03|2011-01-01|
|`tls1vfieur`|TLS1V.FI/EUR|Telia Company AB|2016-11-09|2016-01-01|
### France 🇫🇷
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`acfreur`|AC.FR/EUR|Accor SA|2016-08-11|2011-01-01|
|`acafreur`|ACA.FR/EUR|Credit Agricole SA|2016-09-30|2011-01-01|
|`affreur`|AF.FR/EUR|Air France-KLM|2016-09-27|2011-01-01|
|`aifreur`|AI.FR/EUR|Air Liquide SA|2016-09-30|2011-01-01|
|`airfreur`|AIR.FR/EUR|Airbus Group SE|2016-09-30|2014-01-01|
|`alofreur`|ALO.FR/EUR|Alstom SA|2016-09-27|2011-01-01|
|`bnfreur`|BN.FR/EUR|Danone SA|2016-09-30|2011-01-01|
|`bnpfreur`|BNP.FR/EUR|BNP Paribas SA|2016-09-30|2011-01-01|
|`cafreur`|CA.FR/EUR|Carrefour SA|2016-09-30|2011-01-01|
|`capfreur`|CAP.FR/EUR|Cap Gemini SA|2016-09-30|2011-01-01|
|`csfreur`|CS.FR/EUR|AXA SA|2016-09-30|2011-01-01|
|`dgfreur`|DG.FR/EUR|Vinci SA|2016-09-30|2011-01-01|
|`edffreur`|EDF.FR/EUR|Electricite de France SA|2016-09-30|2011-01-01|
|`eifreur`|EI.FR/EUR|Essilor International SA|2016-09-30|2011-01-01|
|`enfreur`|EN.FR/EUR|Bouygues SA|2016-09-30|2011-01-01|
|`engifreur`|ENGI.FR/EUR|Engie|2016-09-30|2015-01-01|
|`fpfreur`|FP.FR/EUR|Total SA|2016-09-30|2011-01-01|
|`frfreur`|FR.FR/EUR|Valeo SA|2016-09-30|2011-01-01|
|`glefreur`|GLE.FR/EUR|Societe Generale SA|2016-09-30|2011-01-01|
|`kerfreur`|KER.FR/EUR|Kering|2016-09-30|2011-01-01|
|`lifreur`|LI.FR/EUR|Klepierre|2016-08-05|2011-01-01|
|`lrfreur`|LR.FR/EUR|Legrand SA|2016-08-05|2011-01-01|
|`mcfreur`|MC.FR/EUR|LVMH Moet Hennessy Louis Vuitton SA|2016-08-05|2011-01-01|
|`orfreur`|OR.FR/EUR|L'Oreal SA|2016-08-05|2011-01-01|
|`orafreur`|ORA.FR/EUR|Orange SA|2016-08-05|2013-01-01|
|`pubfreur`|PUB.FR/EUR|Publicis Groupe SA|2016-08-05|2011-01-01|
|`rifreur`|RI.FR/EUR|Pernod-Ricard SA|2016-08-05|2011-01-01|
|`rnofreur`|RNO.FR/EUR|Renault SA|2016-08-05|2011-01-01|
|`saffreur`|SAF.FR/EUR|Safran SA|2016-08-05|2011-01-01|
|`sanfreur`|SAN.FR/EUR|Sanofi|2016-08-05|2011-01-01|
|`sgofreur`|SGO.FR/EUR|Cie de St-Gobain|2016-10-31|2011-01-01|
|`sufreur`|SU.FR/EUR|Schneider Electric SA|2016-08-05|2011-01-01|
|`ugfreur`|UG.FR/EUR|Peugeot SA|2016-08-05|2011-01-01|
|`viefreur`|VIE.FR/EUR|Veolia Environnement SA|2016-08-05|2011-01-01|
|`vivfreur`|VIV.FR/EUR|Vivendi SA|2016-08-05|2011-01-01|
|`vkfreur`|VK.FR/EUR|Vallourec SA|2016-08-05|2011-01-01|
### Germany 🇩🇪
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`adsdeeur`|ADS.DE/EUR|Adidas AG|2015-03-13|2011-01-01|
|`alvdeeur`|ALV.DE/EUR|Allianz SE|2015-04-09|2011-01-01|
|`basdeeur`|BAS.DE/EUR|BASF SE|2015-04-22|2011-01-01|
|`bayndeeur`|BAYN.DE/EUR|Bayer AG|2015-03-20|2011-01-01|
|`beideeur`|BEI.DE/EUR|Beiersdorf AG|2015-04-08|2011-01-01|
|`bmwdeeur`|BMW.DE/EUR|Bayerische Motoren Werke AG|2015-03-24|2011-01-01|
|`bossdeeur`|BOSS.DE/EUR|HUGO BOSS AG|2015-04-09|2012-01-01|
|`cbkdeeur`|CBK.DE/EUR|Commerzbank AG|2015-03-26|2011-01-01|
|`condeeur`|CON.DE/EUR|Continental AG|2015-04-08|2011-01-01|
|`daideeur`|DAI.DE/EUR|Daimler AG|2015-03-27|2011-01-01|
|`db1deeur`|DB1.DE/EUR|Deutsche Boerse AG|2015-04-14|2011-01-01|
|`dbkdeeur`|DBK.DE/EUR|Deutsche Bank AG|2015-03-25|2011-01-01|
|`dpwdeeur`|DPW.DE/EUR|Deutsche Post AG|2015-03-31|2011-01-01|
|`dtedeeur`|DTE.DE/EUR|Deutsche Telekom AG|2015-03-31|2011-01-01|
|`eoandeeur`|EOAN.DE/EUR|E.ON SE|2015-04-20|2011-01-01|
|`fmedeeur`|FME.DE/EUR|Fresenius Medical Care AG &amp; Co KGaA|2015-04-01|2011-01-01|
|`fredeeur`|FRE.DE/EUR|Fresenius SE &amp; Co KGaA|2015-04-10|2011-01-01|
|`heideeur`|HEI.DE/EUR|HeidelbergCement AG|2015-04-02|2011-01-01|
|`hen3deeur`|HEN3.DE/EUR|Henkel AG &amp; Co KGaA|2015-04-21|2011-01-01|
|`ifxdeeur`|IFX.DE/EUR|Infineon Technologies AG|2015-04-13|2011-01-01|
|`lhadeeur`|LHA.DE/EUR|Deutsche Lufthansa AG|2015-04-21|2011-01-01|
|`lindeeur`|LIN.DE/EUR|Linde AG|2015-04-21|2011-01-01|
|`lxsdeeur`|LXS.DE/EUR|Lanxess AG|2015-04-21|2011-01-01|
|`mrkdeeur`|MRK.DE/EUR|Merck KGaA|2015-03-24|2011-01-01|
|`muv2deeur`|MUV2.DE/EUR|Muenchener Rueckversicherungs AG|2015-04-21|2011-01-01|
|`pah3deeur`|PAH3.DE/EUR|Porsche Automobil Holding SE|2015-04-21|2011-01-01|
|`psmdeeur`|PSM.DE/EUR|ProSiebenSat.1 Media AG|2015-04-20|2013-01-01|
|`rwedeeur`|RWE.DE/EUR|RWE AG|2015-04-16|2011-01-01|
|`sapdeeur`|SAP.DE/EUR|SAP AG|2015-04-16|2011-01-01|
|`sdfdeeur`|SDF.DE/EUR|K+S AG|2015-04-15|2011-01-01|
|`siedeeur`|SIE.DE/EUR|Siemens AG|2015-04-20|2011-01-01|
|`tkadeeur`|TKA.DE/EUR|ThyssenKrupp AG|2015-04-14|2011-01-01|
|`tui1deeur`|TUI1.DE/EUR|TUI AG|2015-04-15|2011-01-01|
|`vnadeeur`|VNA.DE/EUR|Vonovia SE|2015-04-14|2015-01-01|
|`vow3deeur`|VOW3.DE/EUR|Volkswagen AG|2015-04-14|2011-01-01|
### Netherlands 🇳🇱
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`agnnleur`|AGN.NL/EUR|Aegon NV|2016-11-14|2011-01-01|
|`ahnleur`|AH.NL/EUR|Koninklijke Ahold Delhaize NV|2016-11-14|2011-01-01|
|`akzanleur`|AKZA.NL/EUR|Akzo Nobel NV|2016-11-14|2011-01-01|
|`asmlnleur`|ASML.NL/EUR|ASML Holding NV|2016-11-14|2011-01-01|
|`dsmnleur`|DSM.NL/EUR|Koninklijke DSM NV|2016-11-14|2011-01-01|
|`gtonleur`|GTO.NL/EUR|Gemalto NV|2016-11-14|2011-01-01|
|`heianleur`|HEIA.NL/EUR|Heineken NV|2016-11-14|2011-01-01|
|`inganleur`|INGA.NL/EUR|ING Groep NV|2016-11-14|2016-01-01|
|`kpnnleur`|KPN.NL/EUR|Koninklijke KPN NV|2016-11-14|2011-01-01|
|`mtnleur`|MT.NL/EUR|ArcelorMittal|2016-11-14|2011-01-01|
|`phianleur`|PHIA.NL/EUR|Koninklijke Philips NV|2016-11-14|2011-01-01|
|`randnleur`|RAND.NL/EUR|Randstad Holding NV|2016-11-14|2011-01-01|
|`rdsanleur`|RDSA.NL/EUR|Royal Dutch Shell PLC|2016-11-14|2011-01-01|
|`rennleur`|REN.NL/EUR|RELX NV|2016-11-14|2015-01-01|
|`unanleur`|UNA.NL/EUR|Unilever NV|2016-11-14|2011-01-01|
|`vpknleur`|VPK.NL/EUR|Koninklijke Vopak NV|2016-11-14|2011-01-01|
|`wklnleur`|WKL.NL/EUR|Wolters Kluwer NV|2016-11-14|2011-01-01|
### Norway 🇳🇴
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`dnbnonok`|DNB.NO/NOK|DNB ASA|2016-11-14|2011-01-01|
|`mhgnonok`|MHG.NO/NOK|Marine Harvest ASA|2016-11-14|2011-01-01|
|`nhynonok`|NHY.NO/NOK|Norsk Hydro ASA|2016-11-14|2011-01-01|
|`orknonok`|ORK.NO/NOK|Orkla ASA|2016-11-14|2011-01-01|
|`stlnonok`|STL.NO/NOK|Statoil ASA|2016-11-14|2011-01-01|
|`telnonok`|TEL.NO/NOK|Telenor ASA|2016-11-14|2011-01-01|
### Portugal 🇵🇹
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`edppteur`|EDP.PT/EUR|EDP - Energias de Portugal SA|2016-11-14|2011-01-01|
|`galppteur`|GALP.PT/EUR|Galp Energia SGPS SA|2016-11-14|2011-01-01|
### Spain 🇪🇸
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`acseseur`|ACS.ES/EUR|ACS Actividades de Construccion y Servicios SA|2016-11-14|2011-01-01|
|`acxeseur`|ACX.ES/EUR|Acerinox SA|2016-11-14|2011-01-01|
|`aenaeseur`|AENA.ES/EUR|Aena SA|2016-11-14|2015-01-01|
|`amseseur`|AMS.ES/EUR|Amadeus IT Holding SA|2016-11-14|2011-01-01|
|`bbvaeseur`|BBVA.ES/EUR|Banco Bilbao Vizcaya Argentaria SA|2016-11-14|2011-01-01|
|`cabkeseur`|CABK.ES/EUR|CaixaBank|2016-11-14|2011-01-01|
|`diaeseur`|DIA.ES/EUR|Distribuidora Internacional de Alimentacion SA|2016-11-14|2011-01-01|
|`eleeseur`|ELE.ES/EUR|Endesa SA|2016-11-14|2011-01-01|
|`engeseur`|ENG.ES/EUR|Enagas SA|2016-11-14|2011-01-01|
|`fereseur`|FER.ES/EUR|Ferrovial SA|2016-11-14|2011-01-01|
|`gameseur`|GAM.ES/EUR|Gamesa Corporacion Tecnologica SA|2016-11-14|2011-01-01|
|`gaseseur`|GAS.ES/EUR|Gas Natural SDG SA|2016-11-14|2011-01-01|
|`ibeeseur`|IBE.ES/EUR|Iberdrola SA|2016-11-14|2011-01-01|
|`itxeseur`|ITX.ES/EUR|Inditex SA|2016-11-14|2011-01-01|
|`reeeseur`|REE.ES/EUR|Red Electrica Corp SA|2016-11-14|2011-01-01|
|`repeseur`|REP.ES/EUR|Repsol SA|2016-11-14|2011-01-01|
|`saneseur`|SAN.ES/EUR|Banco Santander SA|2016-11-14|2011-01-01|
|`tefeseur`|TEF.ES/EUR|Telefonica SA|2016-11-14|2011-01-01|
### Sweden 🇸🇪
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`abbsesek`|ABB.SE/SEK|ABB Ltd|2016-11-14|2011-01-01|
|`alfasesek`|ALFA.SE/SEK|Alfa Laval AB|2016-11-07|2011-01-01|
|`atcoasesek`|ATCOA.SE/SEK|Atlas Copco AB|2016-11-14|2011-01-01|
|`eluxbsesek`|ELUXB.SE/SEK|Electrolux AB|2016-11-07|2011-01-01|
|`ericbsesek`|ERICB.SE/SEK|Telefonaktiebolaget LM Ericsson|2016-11-14|2011-01-01|
|`getibsesek`|GETIB.SE/SEK|Getinge AB|2016-11-07|2011-01-01|
|`hmbsesek`|HMB.SE/SEK|Hennes &amp; Mauritz AB|2016-11-07|2011-01-01|
|`invebsesek`|INVEB.SE/SEK|Investor AB|2016-11-14|2011-01-01|
|`ndasesek`|NDA.SE/SEK|Nordea Bank AB|2016-11-07|2011-01-01|
|`sandsesek`|SAND.SE/SEK|Sandvik AB|2016-11-08|2011-01-01|
|`scabsesek`|SCAB.SE/SEK|Svenska Cellulosa AB|2016-11-07|2011-01-01|
|`sebasesek`|SEBA.SE/SEK|Skandinaviska Enskilda Banken AB|2016-11-14|2011-01-01|
|`secubsesek`|SECUB.SE/SEK|Securitas AB|2016-11-07|2011-01-01|
|`skabsesek`|SKAB.SE/SEK|Skanska AB|2016-11-07|2011-01-01|
|`skfbsesek`|SKFB.SE/SEK|SKF AB|2016-11-07|2011-01-01|
|`swedasesek`|SWEDA.SE/SEK|Swedbank AB|2016-11-07|2011-01-01|
|`swmasesek`|SWMA.SE/SEK|Swedish Match AB|2016-11-07|2011-01-01|
|`tel2bsesek`|TEL2B.SE/SEK|Tele2 AB|2016-11-08|2011-01-01|
|`tlsnsesek`|TLSN.SE/SEK|Telia Company AB|2016-11-14|2016-01-01|
|`volvbsesek`|VOLVB.SE/SEK|Volvo AB|2016-11-07|2011-01-01|
### Switzerland 🇨🇭
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`abbnchchf`|ABBN.CH/CHF|ABB Ltd|2015-06-16|2011-01-01|
|`adenchchf`|ADEN.CH/CHF|Adecco SA|2015-06-16|2011-01-01|
|`baerchchf`|BAER.CH/CHF|Julius Baer Group Ltd|2015-06-16|2011-01-01|
|`clnchchf`|CLN.CH/CHF|Clariant AG|2015-06-16|2011-01-01|
|`csgnchchf`|CSGN.CH/CHF|Credit Suisse Group AG|2015-06-16|2011-01-01|
|`givnchchf`|GIVN.CH/CHF|Givaudan SA|2015-06-16|2011-01-01|
|`kninchchf`|KNIN.CH/CHF|Kuehne + Nagel International AG|2015-06-17|2011-01-01|
|`lhnchchf`|LHN.CH/CHF|Lafarge Holcim Ltd|2015-06-17|2015-01-01|
|`lonnchchf`|LONN.CH/CHF|Lonza Group AG|2015-06-16|2011-01-01|
|`nesnchchf`|NESN.CH/CHF|Nestle SA|2015-06-16|2011-01-01|
|`novnchchf`|NOVN.CH/CHF|Novartis AG|2015-06-16|2011-01-01|
|`rogchchf`|ROG.CH/CHF|Roche Holding AG|2015-07-03|2011-01-01|
|`scmnchchf`|SCMN.CH/CHF|Swisscom AG|2015-07-03|2011-01-01|
|`sgsnchchf`|SGSN.CH/CHF|SGS SA|2015-08-06|2011-01-01|
|`slhnchchf`|SLHN.CH/CHF|Swiss Life Holding AG|2015-08-06|2011-01-01|
|`soonchchf`|SOON.CH/CHF|Sonova Holding AG|2015-08-07|2011-01-01|
|`srenchchf`|SREN.CH/CHF|Swiss Re AG|2015-08-06|2011-01-01|
|`ubsgchchf`|UBSG.CH/CHF|UBS Group AG|2015-06-15|2014-01-01|
|`uhrchchf`|UHR.CH/CHF|Swatch Group AG/The|2015-08-07|2011-01-01|
|`zurnchchf`|ZURN.CH/CHF|Zurich Insurance Group AG|2015-08-07|2011-01-01|
### United Kingdom 🇬🇧
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`aalgbgbx`|AAL.GB/GBX|Anglo American PLC|2016-08-01|2011-01-01|
|`abfgbgbx`|ABF.GB/GBX|Associated British Foods PLC|2016-09-06|2011-01-01|
|`admgbgbx`|ADM.GB/GBX|Admiral Group PLC|2016-09-06|2011-01-01|
|`agkgbgbx`|AGK.GB/GBX|Aggreko PLC|2016-09-06|2011-01-01|
|`ahtgbgbx`|AHT.GB/GBX|Ashtead Group PLC|2016-09-06|2011-01-01|
|`antogbgbx`|ANTO.GB/GBX|Antofagasta PLC|2016-09-06|2011-01-01|
|`avgbgbx`|AV.GB/GBX|Aviva PLC|2016-09-06|2011-01-01|
|`azngbgbx`|AZN.GB/GBX|AstraZeneca PLC|2016-09-06|2011-01-01|
|`bagbgbx`|BA.GB/GBX|BAE Systems PLC|2016-09-06|2011-01-01|
|`babgbgbx`|BAB.GB/GBX|Babcock International Group PLC|2016-09-06|2011-01-01|
|`barcgbgbx`|BARC.GB/GBX|Barclays PLC|2016-09-06|2011-01-01|
|`batsgbgbx`|BATS.GB/GBX|British American Tobacco PLC|2016-09-06|2011-01-01|
|`blndgbgbx`|BLND.GB/GBX|British Land Co PLC|2016-09-06|2011-01-01|
|`bltgbgbx`|BLT.GB/GBX|BHP Billiton PLC|2016-09-06|2011-01-01|
|`bnzlgbgbx`|BNZL.GB/GBX|Bunzl PLC|2016-09-06|2011-01-01|
|`bpgbgbx`|BP.GB/GBX|BP PLC|2016-09-06|2011-01-01|
|`brbygbgbx`|BRBY.GB/GBX|Burberry Group PLC|2016-07-08|2011-01-01|
|`btgbgbx`|BT.GB/GBX|BT Group PLC|2016-07-07|2011-01-01|
|`cclgbgbx`|CCL.GB/GBX|Carnival PLC|2016-07-06|2011-01-01|
|`cnagbgbx`|CNA.GB/GBX|Centrica PLC|2016-07-07|2011-01-01|
|`cpggbgbx`|CPG.GB/GBX|Compass Group PLC|2016-07-08|2011-01-01|
|`cpigbgbx`|CPI.GB/GBX|Capita PLC|2016-07-07|2011-01-01|
|`crdagbgbx`|CRDA.GB/GBX|Croda International PLC|2016-11-01|2011-01-01|
|`crhgbgbx`|CRH.GB/GBX|CRH PLC|2016-11-08|2011-01-01|
|`dgegbgbx`|DGE.GB/GBX|Diageo PLC|2016-07-06|2011-01-01|
|`expngbgbx`|EXPN.GB/GBX|Experian PLC|2016-07-08|2011-01-01|
|`ezjgbgbx`|EZJ.GB/GBX|easyJet PLC|2016-07-08|2011-01-01|
|`fresgbgbx`|FRES.GB/GBX|Fresnillo PLC|2016-07-07|2011-01-01|
|`gfsgbgbx`|GFS.GB/GBX|G4S PLC|2016-07-07|2011-01-01|
|`glengbgbx`|GLEN.GB/GBX|Glencore PLC|2016-07-07|2011-01-01|
|`hmsogbgbx`|HMSO.GB/GBX|Hammerson PLC|2016-07-07|2011-01-01|
|`hsbagbgbx`|HSBA.GB/GBX|HSBC Holdings PLC|2016-07-07|2011-01-01|
|`iaggbgbx`|IAG.GB/GBX|International Consolidated Airlines Grou|2016-11-08|2011-01-01|
|`ihggbgbx`|IHG.GB/GBX|InterContinental Hotels Group PLC|2016-11-01|2011-01-01|
|`imtgbgbx`|IMT.GB/GBX|Imperial Brands Plc|2016-07-06|2016-01-01|
|`isatgbgbx`|ISAT.GB/GBX|Inmarsat PLC|2016-07-08|2011-01-01|
|`itrkgbgbx`|ITRK.GB/GBX|Intertek Group PLC|2016-07-06|2011-01-01|
|`itvgbgbx`|ITV.GB/GBX|ITV PLC|2016-07-07|2011-01-01|
|`kgfgbgbx`|KGF.GB/GBX|Kingfisher PLC|2016-07-07|2011-01-01|
|`landgbgbx`|LAND.GB/GBX|Land Securities Group PLC|2016-07-07|2011-01-01|
|`lgengbgbx`|LGEN.GB/GBX|Legal &amp; General Group PLC|2016-07-07|2011-01-01|
|`lloygbgbx`|LLOY.GB/GBX|Lloyds Banking Group PLC|2016-07-08|2011-01-01|
|`lsegbgbx`|LSE.GB/GBX|London Stock Exchange Group PLC|2016-07-06|2011-01-01|
|`mksgbgbx`|MKS.GB/GBX|Marks &amp; Spencer Group PLC|2016-07-07|2011-01-01|
|`mndigbgbx`|MNDI.GB/GBX|Mondi PLC|2016-07-08|2011-01-01|
|`mrwgbgbx`|MRW.GB/GBX|WM Morrison Supermarkets PLC|2016-07-07|2011-01-01|
|`nggbgbx`|NG.GB/GBX|National Grid PLC|2016-07-07|2011-01-01|
|`nxtgbgbx`|NXT.GB/GBX|Next PLC|2016-07-06|2011-01-01|
|`pfcgbgbx`|PFC.GB/GBX|Petrofac Ltd|2016-07-08|2011-01-01|
|`prugbgbx`|PRU.GB/GBX|Prudential PLC|2016-07-07|2011-01-01|
|`psngbgbx`|PSN.GB/GBX|Persimmon PLC|2016-07-08|2011-01-01|
|`psongbgbx`|PSON.GB/GBX|Pearson PLC|2016-07-07|2011-01-01|
|`rbgbgbx`|RB.GB/GBX|Reckitt Benckiser Group PLC|2016-07-06|2011-01-01|
|`rbsgbgbx`|RBS.GB/GBX|Royal Bank of Scotland Group PLC|2016-07-08|2011-01-01|
|`rdsbgbgbx`|RDSB.GB/GBX|Royal Dutch Shell PLC|2016-11-01|2011-01-01|
|`relgbgbx`|REL.GB/GBX|Reed Elsevier PLC|2016-07-08|2011-01-01|
|`riogbgbx`|RIO.GB/GBX|Rio Tinto PLC|2016-07-06|2011-01-01|
|`rmggbgbx`|RMG.GB/GBX|Royal Mail PLC|2016-07-07|2013-01-01|
|`rrgbgbx`|RR.GB/GBX|Rolls-Royce Holdings PLC|2016-07-08|2011-01-01|
|`rrsgbgbx`|RRS.GB/GBX|Randgold Resources Ltd|2016-07-06|2011-01-01|
|`rsagbgbx`|RSA.GB/GBX|RSA Insurance Group PLC|2016-07-07|2011-01-01|
|`sbrygbgbx`|SBRY.GB/GBX|J Sainsbury PLC|2016-07-07|2011-01-01|
|`sgegbgbx`|SGE.GB/GBX|Sage Group PLC/The|2016-07-08|2011-01-01|
|`shpgbgbx`|SHP.GB/GBX|Shire PLC|2016-07-06|2011-01-01|
|`skygbgbx`|SKY.GB/GBX|Sky Plc|2016-07-07|2014-01-01|
|`smingbgbx`|SMIN.GB/GBX|Smiths Group PLC|2016-07-08|2011-01-01|
|`sngbgbx`|SN.GB/GBX|Smith &amp; Nephew PLC|2016-07-08|2011-01-01|
|`ssegbgbx`|SSE.GB/GBX|SSE PLC|2016-07-08|2011-01-01|
|`stangbgbx`|STAN.GB/GBX|Standard Chartered PLC|2016-07-07|2011-01-01|
|`svtgbgbx`|SVT.GB/GBX|Severn Trent PLC|2016-07-06|2011-01-01|
|`tategbgbx`|TATE.GB/GBX|Tate &amp; Lyle PLC|2016-07-08|2011-01-01|
|`tlwgbgbx`|TLW.GB/GBX|Tullow Oil PLC|2016-07-07|2011-01-01|
|`tpkgbgbx`|TPK.GB/GBX|Travis Perkins PLC|2016-07-08|2011-01-01|
|`tscogbgbx`|TSCO.GB/GBX|Tesco PLC|2016-07-08|2011-01-01|
|`ulvrgbgbx`|ULVR.GB/GBX|Unilever PLC|2016-07-06|2011-01-01|
|`uugbgbx`|UU.GB/GBX|United Utilities Group PLC|2016-07-08|2011-01-01|
|`vodgbgbx`|VOD.GB/GBX|Vodafone Group PLC|2016-07-07|2011-01-01|
|`weirgbgbx`|WEIR.GB/GBX|Weir Group PLC/The|2016-07-08|2011-01-01|
|`wosgbgbx`|WOS.GB/GBX|Wolseley PLC|2016-07-06|2011-01-01|
|`wppgbgbx`|WPP.GB/GBX|WPP PLC|2016-07-08|2011-01-01|
|`wtbgbgbx`|WTB.GB/GBX|Whitbread PLC|2016-07-06|2011-01-01|
### United States 🇺🇸
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`aususd`|A.US/USD|AGILENT TECHNOLOGIES INC|2017-05-25|2017-01-01|
|`aaususd`|AA.US/USD|ALCOA INC|2018-01-30|2018-01-01|
|`aabaususd`|AABA.US/USD|ALTABA INC|2017-11-02|2017-01-01|
|`aalususd`|AAL.US/USD|AMERICAN AIRLINES GROUP INC|2017-11-02|2017-01-01|
|`aaplususd`|AAPL.US/USD|APPLE INC|2017-01-17|2017-01-01|
|`abcususd`|ABC.US/USD|AMERISOURCEBERGEN CORP|2018-01-30|2018-01-01|
|`abevususd`|ABEV.US/USD|Ambev S.A.|2017-01-26|2017-01-01|
|`abtususd`|ABT.US/USD|ABBOTT LABORATORIES|2017-05-11|2017-01-01|
|`adbeususd`|ADBE.US/USD|ADOBE SYSTEMS INC|2017-05-11|2017-01-01|
|`adiususd`|ADI.US/USD|ANALOG DEVICES INC|2018-01-30|2018-01-01|
|`adpususd`|ADP.US/USD|AUTOMATIC DATA PROCESSING|2017-11-02|2017-01-01|
|`adskususd`|ADSK.US/USD|AUTODESK INC|2018-01-30|2018-01-01|
|`aetususd`|AET.US/USD|AETNA INC|2017-05-11|2017-01-01|
|`aigususd`|AIG.US/USD|AMERICAN INTERNATIONAL GROUP|2017-05-11|2017-01-01|
|`allususd`|ALL.US/USD|ALLSTATE CORP|2018-01-31|2018-01-01|
|`alxnususd`|ALXN.US/USD|ALEXION PHARMACEUTICALS INC|2017-01-19|2017-01-01|
|`amatususd`|AMAT.US/USD|APPLIED MATERIALS INC|2017-05-11|2017-01-01|
|`amdususd`|AMD.US/USD|ADVANCED MICRO DEVICES|2017-11-02|2017-01-01|
|`amgnususd`|AMGN.US/USD|AMGEN INC|2017-01-19|2017-01-01|
|`amtususd`|AMT.US/USD|AMERICAN TOWER CORP|2017-11-02|2017-01-01|
|`amznususd`|AMZN.US/USD|AMAZON.COM INC|2017-01-19|2017-01-01|
|`antmususd`|ANTM.US/USD|ANTHEM INC|2017-11-02|2017-01-01|
|`apaususd`|APA.US/USD|APACHE CORP|2018-01-31|2018-01-01|
|`apcususd`|APC.US/USD|ANADARKO PETROLEUM CORP|2017-11-02|2017-01-01|
|`apdususd`|APD.US/USD|AIR PRODUCTS &amp; CHEMICALS INC|2017-11-02|2017-01-01|
|`atviususd`|ATVI.US/USD|ACTIVISION BLIZZARD INC|2017-05-11|2017-01-01|
|`avbususd`|AVB.US/USD|AVALONBAY COMMUNITIES INC|2018-01-31|2018-01-01|
|`avgoususd`|AVGO.US/USD|Broadcom Limited|2017-01-19|2017-01-01|
|`axpususd`|AXP.US/USD|AMERICAN EXPRESS CO|2017-11-02|2017-01-01|
|`aznususd`|AZN.US/USD|AstraZeneca PLC|2017-01-26|2017-01-01|
|`azoususd`|AZO.US/USD|AUTOZONE INC|2017-11-02|2017-01-01|
|`baususd`|BA.US/USD|Boeing Co|2017-01-19|2017-01-01|
|`babaususd`|BABA.US/USD|ALIBABA GROUP HOLDING-SP ADR|2017-01-19|2017-01-01|
|`bacususd`|BAC.US/USD|BANK OF AMERICA CORP|2017-01-23|2017-01-01|
|`bbdususd`|BBD.US/USD|Banco Bradesco S.A.|2017-01-26|2017-01-01|
|`bbtususd`|BBT.US/USD|BB&amp;T CORP|2018-01-31|2018-01-01|
|`bbyususd`|BBY.US/USD|BEST BUY CO INC|2017-05-11|2017-01-01|
|`bdxususd`|BDX.US/USD|BECTON DICKINSON AND CO|2018-01-31|2018-01-01|
|`biduususd`|BIDU.US/USD|BAIDU INC|2017-11-02|2017-01-01|
|`biibususd`|BIIB.US/USD|BIOGEN INC|2017-05-11|2017-01-01|
|`bkususd`|BK.US/USD|BANK OF NEW YORK MELLON CORP|2017-05-11|2017-01-01|
|`bmyususd`|BMY.US/USD|BRISTOL-MYERS SQUIBB CO|2017-05-11|2017-01-01|
|`bpususd`|BP.US/USD|BP p.l.c.|2018-01-31|2018-01-01|
|`brkbususd`|BRKB.US/USD|BERKSHIRE HATHAWAY INC-CL B|2017-11-06|2017-01-01|
|`bsxususd`|BSX.US/USD|BOSTON SCIENTIFIC CORP|2017-05-11|2017-01-01|
|`cususd`|C.US/USD|CITIGROUP INC|2017-01-23|2017-01-01|
|`cagususd`|CAG.US/USD|CONAGRA FOODS INC|2018-01-31|2018-01-01|
|`cahususd`|CAH.US/USD|CARDINAL HEALTH INC|2018-01-31|2018-01-01|
|`catususd`|CAT.US/USD|CATERPILLAR INC|2017-05-11|2017-01-01|
|`cbsususd`|CBS.US/USD|CBS CORP-CLASS B NON VOTING|2018-01-31|2018-01-01|
|`celgususd`|CELG.US/USD|CELGENE CORP|2017-05-11|2017-01-01|
|`cfususd`|CF.US/USD|CF INDUSTRIES HOLDINGS INC|2018-01-31|2018-01-01|
|`ciususd`|CI.US/USD|CIGNA CORP|2017-05-11|2017-01-01|
|`clususd`|CL.US/USD|COLGATE-PALMOLIVE CO|2017-11-02|2017-01-01|
|`cmcsaususd`|CMCSA.US/USD|COMCAST CORP-CLASS A|2017-01-19|2017-01-01|
|`cmeususd`|CME.US/USD|CME GROUP INC|2017-05-11|2017-01-01|
|`cmgususd`|CMG.US/USD|CHIPOTLE MEXICAN GRILL INC|2017-05-11|2017-01-01|
|`cmiususd`|CMI.US/USD|CUMMINS INC|2018-02-01|2018-01-01|
|`colususd`|COL.US/USD|ROCKWELL COLLINS INC|2017-11-02|2017-01-01|
|`copususd`|COP.US/USD|CONOCOPHILLIPS|2017-11-02|2017-01-01|
|`costususd`|COST.US/USD|COSTCO WHOLESALE CORP|2017-11-02|2017-01-01|
|`crmususd`|CRM.US/USD|SALESFORCE.COM INC|2017-05-11|2017-01-01|
|`csususd`|CS.US/USD|Credit Suisse Group AG|2017-01-26|2017-01-01|
|`cscoususd`|CSCO.US/USD|CISCO SYSTEMS INC|2017-01-19|2017-01-01|
|`csxususd`|CSX.US/USD|CSX CORP|2017-11-02|2017-01-01|
|`ctlususd`|CTL.US/USD|CENTURYLINK INC|2017-11-02|2017-01-01|
|`ctshususd`|CTSH.US/USD|COGNIZANT TECH SOLUTIONS-A|2017-11-02|2017-01-01|
|`cvsususd`|CVS.US/USD|CVS HEALTH CORP|2017-11-02|2017-01-01|
|`cvxususd`|CVX.US/USD|CHEVRON CORP|2017-01-19|2017-01-01|
|`dususd`|D.US/USD|DOMINION RESOURCES INC/VA|2018-02-01|2018-01-01|
|`dalususd`|DAL.US/USD|DELTA AIR LINES INC|2017-11-02|2017-01-01|
|`deususd`|DE.US/USD|DEERE &amp; CO|2017-05-11|2017-01-01|
|`dfsususd`|DFS.US/USD|DISCOVER FINANCIAL SERVICES|2018-02-01|2018-01-01|
|`dgususd`|DG.US/USD|DOLLAR GENERAL CORP|2017-05-11|2017-01-01|
|`dhiususd`|DHI.US/USD|DR HORTON INC|2018-02-01|2018-01-01|
|`dhrususd`|DHR.US/USD|DANAHER CORP|2017-11-02|2017-01-01|
|`disususd`|DIS.US/USD|WALT DISNEY CO/THE|2017-01-19|2017-01-01|
|`dltrususd`|DLTR.US/USD|DOLLAR TREE INC|2017-11-02|2017-01-01|
|`dukususd`|DUK.US/USD|DUKE ENERGY CORP|2017-05-11|2017-01-01|
|`dvaususd`|DVA.US/USD|DAVITA HEALTHCARE PARTNERS I|2018-02-01|2018-01-01|
|`dvnususd`|DVN.US/USD|DEVON ENERGY CORP|2018-02-01|2018-01-01|
|`eaususd`|EA.US/USD|ELECTRONIC ARTS INC|2017-05-11|2017-01-01|
|`ebayususd`|EBAY.US/USD|EBAY INC|2017-11-02|2017-01-01|
|`efxususd`|EFX.US/USD|EQUIFAX INC|2017-11-02|2017-01-01|
|`eixususd`|EIX.US/USD|EDISON INTERNATIONAL|2018-02-01|2018-01-01|
|`elususd`|EL.US/USD|ESTEE LAUDER COMPANIES-CL A|2018-02-01|2018-01-01|
|`emrususd`|EMR.US/USD|EMERSON ELECTRIC CO|2018-02-01|2018-01-01|
|`eogususd`|EOG.US/USD|EOG RESOURCES INC|2017-11-02|2017-01-01|
|`eqtususd`|EQT.US/USD|EQT CORP|2017-11-02|2017-01-01|
|`esrxususd`|ESRX.US/USD|EXPRESS SCRIPTS HOLDING CO|2017-11-02|2017-01-01|
|`excususd`|EXC.US/USD|EXELON CORP|2018-02-01|2018-01-01|
|`expeususd`|EXPE.US/USD|EXPEDIA INC|2017-11-02|2017-01-01|
|`fususd`|F.US/USD|FORD MOTOR CO|2017-11-02|2017-01-01|
|`fbususd`|FB.US/USD|FACEBOOK INC-A|2017-01-19|2017-01-01|
|`fcxususd`|FCX.US/USD|FREEPORT-MCMORAN INC|2017-11-02|2017-01-01|
|`fdxususd`|FDX.US/USD|FEDEX CORP|2017-11-02|2017-01-01|
|`feususd`|FE.US/USD|FIRSTENERGY CORP|2018-02-01|2018-01-01|
|`foxaususd`|FOXA.US/USD|TWENTY-FIRST CENTURY FOX-A|2018-01-31|2018-01-01|
|`geususd`|GE.US/USD|GENERAL ELECTRIC CO|2017-01-19|2017-01-01|
|`gildususd`|GILD.US/USD|GILEAD SCIENCES INC|2017-01-19|2017-01-01|
|`gisususd`|GIS.US/USD|GENERAL MILLS INC|2018-02-01|2018-01-01|
|`glwususd`|GLW.US/USD|CORNING INC|2017-05-11|2017-01-01|
|`gmususd`|GM.US/USD|GENERAL MOTORS CO|2017-11-02|2017-01-01|
|`googususd`|GOOG.US/USD|ALPHABET INC-CL C|2017-01-19|2017-01-01|
|`googlususd`|GOOGL.US/USD|ALPHABET INC-CL A|2017-01-19|2017-01-01|
|`gpsususd`|GPS.US/USD|GAP INC/THE|2018-02-01|2018-01-01|
|`gsususd`|GS.US/USD|GOLDMAN SACHS GROUP INC|2017-01-19|2017-01-01|
|`gwwususd`|GWW.US/USD|WW GRAINGER INC|2018-02-01|2018-01-01|
|`halususd`|HAL.US/USD|HALLIBURTON CO|2017-11-02|2017-01-01|
|`hcnususd`|HCN.US/USD|WELLTOWER INC|2018-02-01|2018-01-01|
|`hcpususd`|HCP.US/USD|HCP INC|2018-02-01|2018-01-01|
|`hdususd`|HD.US/USD|HOME DEPOT INC|2017-01-19|2017-01-01|
|`hesususd`|HES.US/USD|HESS CORP|2017-11-02|2017-01-01|
|`honususd`|HON.US/USD|HONEYWELL INTERNATIONAL INC|2017-11-02|2017-01-01|
|`hpqususd`|HPQ.US/USD|HP INC|2018-02-01|2018-01-01|
|`humususd`|HUM.US/USD|HUMANA INC|2017-11-02|2017-01-01|
|`ibmususd`|IBM.US/USD|INTL BUSINESS MACHINES CORP|2017-01-19|2017-01-01|
|`iceususd`|ICE.US/USD|INTERCONTINENTAL EXCHANGE IN|2017-11-06|2017-01-01|
|`ilmnususd`|ILMN.US/USD|ILLUMINA INC|2018-02-01|2018-01-01|
|`intcususd`|INTC.US/USD|INTEL CORP|2017-01-19|2017-01-01|
|`intuususd`|INTU.US/USD|INTUIT INC|2018-02-01|2018-01-01|
|`ipgususd`|IPG.US/USD|INTERPUBLIC GROUP OF COS INC|2018-02-01|2018-01-01|
|`isrgususd`|ISRG.US/USD|INTUITIVE SURGICAL INC|2018-02-01|2018-01-01|
|`itubususd`|ITUB.US/USD|Itau Unibanco Holding S.A.|2017-01-26|2017-01-01|
|`itwususd`|ITW.US/USD|ILLINOIS TOOL WORKS|2017-05-11|2017-01-01|
|`jciususd`|JCI.US/USD|JOHNSON CONTROLS INC|2017-11-02|2017-01-01|
|`jnjususd`|JNJ.US/USD|JOHNSON &amp; JOHNSON|2017-01-19|2017-01-01|
|`jpmususd`|JPM.US/USD|JPMORGAN CHASE &amp; CO|2017-01-19|2017-01-01|
|`jwnususd`|JWN.US/USD|NORDSTROM INC|2017-05-11|2017-01-01|
|`kususd`|K.US/USD|KELLOGG CO|2017-05-11|2017-01-01|
|`keyususd`|KEY.US/USD|KEYCORP|2017-11-02|2017-01-01|
|`khcususd`|KHC.US/USD|KRAFT HEINZ CO/THE|2017-05-11|2017-01-01|
|`kmbususd`|KMB.US/USD|KIMBERLY-CLARK CORP|2017-05-11|2017-01-01|
|`kmiususd`|KMI.US/USD|KINDER MORGAN INC|2017-11-02|2017-01-01|
|`koususd`|KO.US/USD|COCA-COLA CO/THE|2017-01-19|2017-01-01|
|`krususd`|KR.US/USD|KROGER CO|2017-11-02|2017-01-01|
|`kssususd`|KSS.US/USD|KOHLS CORP|2018-02-01|2018-01-01|
|`lususd`|L.US/USD|LOEWS CORP|2017-05-11|2017-01-01|
|`lenususd`|LEN.US/USD|LENNAR CORP-A|2017-05-11|2017-01-01|
|`llyususd`|LLY.US/USD|ELI LILLY &amp; CO|2017-05-11|2017-01-01|
|`lmtususd`|LMT.US/USD|LOCKHEED MARTIN CORP|2017-05-11|2017-01-01|
|`lowususd`|LOW.US/USD|LOWE'S COS INC|2017-11-02|2017-01-01|
|`lrcxususd`|LRCX.US/USD|LAM RESEARCH CORP|2017-11-02|2017-01-01|
|`luvususd`|LUV.US/USD|SOUTHWEST AIRLINES CO|2017-11-02|2017-01-01|
|`lvsususd`|LVS.US/USD|Las Vegas Sands Corp.|2017-01-26|2017-01-01|
|`mususd`|M.US/USD|MACY'S INC|2017-11-02|2017-01-01|
|`maususd`|MA.US/USD|MASTERCARD INC-CLASS A|2017-05-11|2017-01-01|
|`marususd`|MAR.US/USD|MARRIOTT INTERNATIONAL -CL A|2017-11-02|2017-01-01|
|`matususd`|MAT.US/USD|MATTEL INC|2018-02-01|2018-01-01|
|`mcdususd`|MCD.US/USD|MCDONALD'S CORP|2017-11-02|2017-01-01|
|`mchpususd`|MCHP.US/USD|MICROCHIP TECHNOLOGY INC|2018-02-01|2018-01-01|
|`mckususd`|MCK.US/USD|MCKESSON CORP|2017-11-02|2017-01-01|
|`mdlzususd`|MDLZ.US/USD|MONDELEZ INTERNATIONAL INC-A|2017-11-02|2017-01-01|
|`metususd`|MET.US/USD|METLIFE INC|2017-11-02|2017-01-01|
|`mgmususd`|MGM.US/USD|MGM RESORTS INTERNATIONAL|2017-11-02|2017-01-01|
|`mmmususd`|MMM.US/USD|3M CO|2017-05-11|2017-01-01|
|`moususd`|MO.US/USD|ALTRIA GROUP INC|2017-11-02|2017-01-01|
|`mpcususd`|MPC.US/USD|MARATHON PETROLEUM CORP|2018-02-01|2018-01-01|
|`mrkususd`|MRK.US/USD|MERCK &amp; CO. INC.|2017-11-02|2017-01-01|
|`mroususd`|MRO.US/USD|MARATHON OIL CORP|2018-02-01|2018-01-01|
|`msususd`|MS.US/USD|MORGAN STANLEY|2017-11-02|2017-01-01|
|`msftususd`|MSFT.US/USD|MICROSOFT CORP|2017-01-19|2017-01-01|
|`muususd`|MU.US/USD|MICRON TECHNOLOGY INC|2017-11-02|2017-01-01|
|`nblususd`|NBL.US/USD|NOBLE ENERGY INC|2018-02-01|2018-01-01|
|`neeususd`|NEE.US/USD|NEXTERA ENERGY INC|2018-02-01|2018-01-01|
|`nemususd`|NEM.US/USD|NEWMONT MINING CORP|2017-05-11|2017-01-01|
|`nflxususd`|NFLX.US/USD|NETFLIX INC|2017-01-19|2017-01-01|
|`nkeususd`|NKE.US/USD|NIKE INC|2017-11-02|2017-01-01|
|`nocususd`|NOC.US/USD|NORTHROP GRUMMAN CORP|2017-05-11|2017-01-01|
|`nrgususd`|NRG.US/USD|NRG ENERGY INC|2018-02-01|2018-01-01|
|`nscususd`|NSC.US/USD|NORFOLK SOUTHERN CORP|2018-02-01|2018-01-01|
|`nvdaususd`|NVDA.US/USD|NVIDIA CORP|2017-01-19|2017-01-01|
|`nwlususd`|NWL.US/USD|NEWELL BRANDS INC|2017-11-02|2017-01-01|
|`okeususd`|OKE.US/USD|ONEOK INC|2018-02-01|2018-01-01|
|`omcususd`|OMC.US/USD|OMNICOM GROUP|2018-02-01|2018-01-01|
|`orclususd`|ORCL.US/USD|ORACLE CORP|2017-11-02|2017-01-01|
|`orlyususd`|ORLY.US/USD|O'REILLY AUTOMOTIVE INC|2017-11-02|2017-01-01|
|`oxyususd`|OXY.US/USD|OCCIDENTAL PETROLEUM CORP|2017-05-11|2017-01-01|
|`payxususd`|PAYX.US/USD|PAYCHEX INC|2018-02-01|2018-01-01|
|`pbrususd`|PBR.US/USD|Petroleo Brasileiro S.A.|2017-01-26|2017-01-01|
|`pcarususd`|PCAR.US/USD|PACCAR INC|2018-02-01|2018-01-01|
|`pcgususd`|PCG.US/USD|P G &amp; E CORP|2017-11-02|2017-01-01|
|`pclnususd`|PCLN.US/USD|PRICELINE GROUP INC/THE|2017-01-19|2017-01-01|
|`pepususd`|PEP.US/USD|PEPSICO INC|2017-11-02|2017-01-01|
|`pfeususd`|PFE.US/USD|PFIZER INC|2017-01-19|2017-01-01|
|`pgususd`|PG.US/USD|PROCTER &amp; GAMBLE CO/THE|2017-01-19|2017-01-01|
|`pgrususd`|PGR.US/USD|PROGRESSIVE CORP|2018-02-01|2018-01-01|
|`phususd`|PH.US/USD|PARKER HANNIFIN CORP|2018-02-01|2018-01-01|
|`pmususd`|PM.US/USD|PHILIP MORRIS INTERNATIONAL|2017-11-02|2017-01-01|
|`pncususd`|PNC.US/USD|PNC FINANCIAL SERVICES GROUP|2017-11-02|2017-01-01|
|`ppgususd`|PPG.US/USD|PPG INDUSTRIES INC|2018-02-02|2018-01-01|
|`pruususd`|PRU.US/USD|PRUDENTIAL FINANCIAL INC|2018-02-01|2018-01-01|
|`psaususd`|PSA.US/USD|PUBLIC STORAGE|2018-02-01|2018-01-01|
|`psxususd`|PSX.US/USD|PHILLIPS 66|2018-02-01|2018-01-01|
|`pxdususd`|PXD.US/USD|PIONEER NATURAL RESOURCES CO|2017-11-02|2017-01-01|
|`pyplususd`|PYPL.US/USD|PAYPAL HOLDINGS INC|2017-11-02|2017-01-01|
|`qcomususd`|QCOM.US/USD|QUALCOMM INC|2017-11-02|2017-01-01|
|`regnususd`|REGN.US/USD|REGENERON PHARMACEUTICALS|2017-11-02|2017-01-01|
|`rfususd`|RF.US/USD|REGIONS FINANCIAL CORP|2018-02-01|2018-01-01|
|`rhtususd`|RHT.US/USD|RED HAT INC|2018-02-01|2018-01-01|
|`rostususd`|ROST.US/USD|ROSS STORES INC|2018-02-01|2018-01-01|
|`rrcususd`|RRC.US/USD|RANGE RESOURCES CORP|2018-02-01|2018-01-01|
|`rtnususd`|RTN.US/USD|RAYTHEON COMPANY|2018-02-01|2018-01-01|
|`sbuxususd`|SBUX.US/USD|STARBUCKS CORP|2017-11-02|2017-01-01|
|`schwususd`|SCHW.US/USD|SCHWAB (CHARLES) CORP|2017-11-02|2017-01-01|
|`shwususd`|SHW.US/USD|SHERWIN-WILLIAMS COMPANY|2018-02-01|2018-01-01|
|`sjmususd`|SJM.US/USD|JM SMUCKER COMPANY|2018-02-01|2018-01-01|
|`slvususd`|SLV.US/USD|iShares Silver Trust ETF|2018-02-01|2018-01-01|
|`snapususd`|SNAP.US/USD|SNAP Inc|2017-11-02|2017-01-01|
|`soususd`|SO.US/USD|SOUTHERN CO/THE|2017-11-02|2017-01-01|
|`spgususd`|SPG.US/USD|SIMON PROPERTY GROUP INC|2017-11-02|2017-01-01|
|`stiususd`|STI.US/USD|SUNTRUST BANKS INC|2018-02-01|2018-01-01|
|`sttususd`|STT.US/USD|STATE STREET CORP|2018-02-01|2018-01-01|
|`stzususd`|STZ.US/USD|CONSTELLATION BRANDS INC-A|2018-02-01|2018-01-01|
|`swkususd`|SWK.US/USD|STANLEY BLACK &amp; DECKER INC|2018-02-01|2018-01-01|
|`sykususd`|SYK.US/USD|STRYKER CORP|2018-02-01|2018-01-01|
|`symcususd`|SYMC.US/USD|SYMANTEC CORP|2018-02-01|2018-01-01|
|`syyususd`|SYY.US/USD|SYSCO CORP|2018-02-01|2018-01-01|
|`tususd`|T.US/USD|AT&amp;T INC|2017-01-19|2017-01-01|
|`tapususd`|TAP.US/USD|MOLSON COORS BREWING CO -B|2018-02-01|2018-01-01|
|`tevaususd`|TEVA.US/USD|TEVA PHARMACEUTICAL-SP ADR|2017-11-02|2017-01-01|
|`tgtususd`|TGT.US/USD|TARGET CORP|2017-11-02|2017-01-01|
|`tifususd`|TIF.US/USD|TIFFANY &amp; CO|2018-02-01|2018-01-01|
|`tjxususd`|TJX.US/USD|TJX COMPANIES INC|2017-11-02|2017-01-01|
|`tmoususd`|TMO.US/USD|THERMO FISHER SCIENTIFIC INC|2017-11-02|2017-01-01|
|`trowususd`|TROW.US/USD|T ROWE PRICE GROUP INC|2018-02-01|2018-01-01|
|`trvususd`|TRV.US/USD|TRAVELERS COS INC/THE|2017-11-02|2017-01-01|
|`tslaususd`|TSLA.US/USD|TESLA MOTORS INC|2017-01-19|2017-01-01|
|`tsmususd`|TSM.US/USD|Taiwan Semiconductor Manufacturing Company Limited|2018-02-01|2018-01-01|
|`tsnususd`|TSN.US/USD|TYSON FOODS INC-CL A|2018-02-01|2018-01-01|
|`twtrususd`|TWTR.US/USD|TWITTER INC|2017-11-02|2017-01-01|
|`txnususd`|TXN.US/USD|TEXAS INSTRUMENTS INC|2017-11-02|2017-01-01|
|`ultaususd`|ULTA.US/USD|ULTA SALON COSMETICS &amp; FRAGR|2017-11-02|2017-01-01|
|`unhususd`|UNH.US/USD|UNITEDHEALTH GROUP INC|2017-11-02|2017-01-01|
|`unpususd`|UNP.US/USD|UNION PACIFIC CORP|2017-11-15|2017-01-01|
|`upsususd`|UPS.US/USD|UNITED PARCEL SERVICE-CL B|2017-11-15|2017-01-01|
|`usbususd`|USB.US/USD|US BANCORP|2017-11-15|2017-01-01|
|`utxususd`|UTX.US/USD|UNITED TECHNOLOGIES CORP|2017-11-15|2017-01-01|
|`vususd`|V.US/USD|VISA INC-CLASS A SHARES|2017-01-19|2017-01-01|
|`valeususd`|VALE.US/USD|Vale S.A.|2017-01-26|2017-01-01|
|`vfcususd`|VFC.US/USD|VF CORP|2018-02-01|2018-01-01|
|`viabususd`|VIAB.US/USD|VIACOM INC-CLASS B|2018-02-01|2018-01-01|
|`vloususd`|VLO.US/USD|VALERO ENERGY CORP|2017-11-15|2017-01-01|
|`vmcususd`|VMC.US/USD|VULCAN MATERIALS CO|2018-02-01|2018-01-01|
|`vrtxususd`|VRTX.US/USD|VERTEX PHARMACEUTICALS INC|2017-11-15|2017-01-01|
|`vzususd`|VZ.US/USD|VERIZON COMMUNICATIONS INC|2017-11-15|2017-01-01|
|`wbaususd`|WBA.US/USD|WALGREENS BOOTS ALLIANCE INC|2017-11-15|2017-01-01|
|`wdcususd`|WDC.US/USD|WESTERN DIGITAL CORP|2017-11-15|2017-01-01|
|`wfcususd`|WFC.US/USD|WELLS FARGO &amp; CO|2017-01-23|2017-01-01|
|`whrususd`|WHR.US/USD|WHIRLPOOL CORP|2018-02-01|2018-01-01|
|`wmtususd`|WMT.US/USD|WAL-MART STORES INC|2017-11-15|2017-01-01|
|`wynnususd`|WYNN.US/USD|WYNN RESORTS LTD|2017-11-15|2017-01-01|
|`xususd`|X.US/USD|UNITED STATES STEEL CORP|2017-11-15|2017-01-01|
|`xlnxususd`|XLNX.US/USD|XILINX INC|2018-02-01|2018-01-01|
|`xomususd`|XOM.US/USD|EXXON MOBIL CORP|2017-01-19|2017-01-01|
|`yumususd`|YUM.US/USD|YUM! BRANDS INC|2018-02-01|2018-01-01|
|`zbhususd`|ZBH.US/USD|ZIMMER BIOMET HOLDINGS INC|2018-02-01|2018-01-01|
### ETF (CFD)
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`diaususd`|DIA.US/USD|SPDR Dow Jones® Industrial Average ETF|2017-05-11|2017-01-01|
|`dvyususd`|DVY.US/USD|iShares Select Dividend ETF|2017-05-11|2017-01-01|
|`eemususd`|EEM.US/USD|iShares MSCI Emerging Markets ETF|2017-01-23|2017-01-01|
|`efaususd`|EFA.US/USD|iShares MSCI EAFE ETF|2017-01-23|2017-01-01|
|`embususd`|EMB.US/USD|iShares J.P. Morgan USD Emerging Markets Bond ETF|2017-05-11|2017-01-01|
|`ewhususd`|EWH.US/USD|iShares MSCI Hong Kong ETF|2017-11-06|2017-01-01|
|`ewjususd`|EWJ.US/USD|iShares MSCI Japan ETF|2017-01-23|2017-01-01|
|`ewwususd`|EWW.US/USD|iShares MSCI Mexico Capped|2017-03-13|2017-01-01|
|`ewzususd`|EWZ.US/USD|iShares MSCI Brazil Capped|2017-01-26|2017-01-01|
|`ezuususd`|EZU.US/USD|iShares MSCI EMU ETF|2018-02-01|2018-01-01|
|`fxiususd`|FXI.US/USD|iShares China Large-Cap ETF|2017-01-26|2017-01-01|
|`gdxususd`|GDX.US/USD|VanEck Vectors Gold Miners ETF|2017-01-23|2017-01-01|
|`gdxjususd`|GDXJ.US/USD|VanEck Vectors Junior Gold Miners ETF|2017-01-26|2017-01-01|
|`gldususd`|GLD.US/USD|SPDR Gold Shares ETF|2017-01-23|2017-01-01|
|`ibbususd`|IBB.US/USD|iShares Nasdaq Biotechnology ETF|2017-05-11|2017-01-01|
|`iefususd`|IEF.US/USD|iShares 7-10 Year Treasury Bond ETF|2018-02-01|2018-01-01|
|`ijhususd`|IJH.US/USD|iShares Core S&amp;P Mid-Cap ETF|2018-02-01|2018-01-01|
|`ijrususd`|IJR.US/USD|iShares Core S&amp;P Small-Cap ETF|2017-05-11|2017-01-01|
|`iveususd`|IVE.US/USD|iShares S&amp;P 500 Value ETF|2017-05-11|2017-01-01|
|`ivwususd`|IVW.US/USD|iShares S&amp;P 500 Growth ETF|2017-05-11|2017-01-01|
|`iwdususd`|IWD.US/USD|iShares Russell 1000 Value ETF|2018-02-01|2018-01-01|
|`iwfususd`|IWF.US/USD|iShares Russell 1000 Growth ETF|2018-02-01|2018-01-01|
|`iwmususd`|IWM.US/USD|iShares Russell 2000 ETF|2017-01-23|2017-01-01|
|`iyrususd`|IYR.US/USD|iShares U.S. Real Estate ETF|2017-01-23|2017-01-01|
|`jnkususd`|JNK.US/USD|SPDR Barclays Capital High Yield Bond ETF|2017-01-23|2017-01-01|
|`qqqususd`|QQQ.US/USD|PowerShares QQQ ETF|2017-01-23|2017-01-01|
|`spyususd`|SPY.US/USD|SPDR S&amp;P 500 ETF|2017-02-16|2017-01-01|
|`tltususd`|TLT.US/USD|iShares 20+ Year Treasury Bond ETF|2017-01-23|2017-01-01|
|`usoususd`|USO.US/USD|United States Oil|2017-01-26|2017-01-01|
|`veaususd`|VEA.US/USD|Vanguard FTSE Developed Markets ETF|2017-11-15|2017-01-01|
|`vgkususd`|VGK.US/USD|Vanguard FTSE Europe ETF|2018-02-01|2018-01-01|
|`vnqususd`|VNQ.US/USD|Vanguard REIT ETF|2017-11-15|2017-01-01|
|`vxxususd`|VXX.US/USD|iPath S&amp;P 500 VIX ST Futures ETN|2017-01-26|2017-01-01|
|`xleususd`|XLE.US/USD|Energy Select Sector SPDR Fund|2017-11-15|2017-01-01|
|`xlfususd`|XLF.US/USD|Financial Select Sector SPDR Fund|2017-01-23|2017-01-01|
|`xliususd`|XLI.US/USD|Industrial Select Sector SPDR Fund|2017-01-23|2017-01-01|
|`xlkususd`|XLK.US/USD|Technology Select Sector SPDR Fund|2017-11-15|2017-01-01|
|`xlpususd`|XLP.US/USD|Consumer Staples Select Sector SPDR Fund|2017-01-23|2017-01-01|
|`xluususd`|XLU.US/USD|Utilities Select Sector SPDR Fund|2017-11-15|2017-01-01|
|`xlvususd`|XLV.US/USD|Health Care Select Sector SPDR Fund|2017-11-15|2017-01-01|
|`xlyususd`|XLY.US/USD|Consumer Discretionary Select Sector SPDR Fund|2017-11-15|2017-01-01|
|`xopususd`|XOP.US/USD|SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF|2017-01-26|2017-01-01|
### Crypto
|Instrument id|Instrument name|Description|Start date (tick, m1, m15, m30, h1)|Start date (d1, mn1)|
|-|-|-|-|-|
|`btcusd`|BTC/USD|Bitcoin vs US Dollar|2017-05-07|2017-01-01|
|`ethusd`|ETH/USD|Ether vs US Dollar|2017-12-11|2017-01-01|
