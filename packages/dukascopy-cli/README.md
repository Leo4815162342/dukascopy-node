<h1>dukascopy-cli</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli.png?raw=true" alt="dukascopy-cli"></p>

<p align="center">
  <a href="https://travis-ci.org/github/Leo4815162342/dukascopy-node"><img src="https://api.travis-ci.org/Leo4815162342/dukascopy-node.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="dukascopy-node tested with jest"></a>
</p>

> Download historical market tick data for 800+ instruments (Stocks / Commodities / Bonds / Currencies / CFDs / ETFs / Crypto) via CLI

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

#### yarn:

```bash
yarn dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

#### NPM:

```bash
npx dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

## Options

```bash
  -d, --debug                   Output extra debugging
  -s, --silent                  Hides the search config in the CLI output (default: false)
  -i, --instrument <value>      Trading instrument
  -from, --date-from <value>    From date (yyyy-mm-dd)
  -to, --date-to <value>        To date (yyyy-mm-dd)
  -t, --timeframe <value>       Timeframe aggregation (tick, m1, m15, m30, h1, d1, mn1) (default: "d1")
  -p, --price-type <value>      Price type: (bid, ask) (default: "bid")
  -utc, --utc-offset <value>    UTC offset in minutes (default: 0)
  -v, --volumes                 Include volumes (default: false)
  -fl, --flats                  Include flats (0 volumes) (default: false)
  -f, --format <value>          Output format (csv, json, array) (default: "json")
  -dir, --directory <value>     Download directory (default: "./download")
  -bs, --batch-size <value>     Batch size of downloaded artifacts (default: 10)
  -bp, --batch-pause <value>    Pause between batches in ms (default: 1000)
  -ch, --cache                  Use cache (default: false)
  -chpath, --cache-path <value> Folder path for cache data (default: './.dukascopy-cache')
  -r, --retries <value>         Number of retries for a failed artifact download (default: `0`)
  -rp, --retry-pause <value>    Pause between retries in milliseconds (default: `500`)
  -h, --help                    display help for command
```

## Screenshots

<p><img width="550" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli-output.png?raw=true" alt="dukascopy-cli output"></p>


***

## Instruments

* [Bonds 📊 (3)](#bnd_cfd)
* [Crypto assets ₿ (5)](#vccy)
* [Agricultural commodities ☕ (6)](#cmd_agricultural)
* [Energy commodities ⚡ (4)](#cmd_energy)
* [Metals commodities ⚙️ (1)](#cmd_metals)
* [Germany ETFs 🇩🇪📈 (1)](#etf_cfd_de)
* [France ETFs 🇫🇷📈 (3)](#etf_cfd_fr)
* [Hong Kong ETFs 🇭🇰📈 (5)](#etf_cfd_hk)
* [United States ETFs 🇺🇸📈 (43)](#etf_cfd_us)
* [Forex currencies 💱 (54)](#fx_crosses)
* [Forex major currencies 💶 (7)](#fx_majors)
* [Forex metals 🥇 (2)](#fx_metals)
* [America 🌎 (5)](#idx_america)
* [Asia 🌏 (6)](#idx_asia)
* [Europe 🌍 (8)](#idx_europe)
* [Austria 🇦🇹 (3)](#austria)
* [Belgium 🇧🇪 (7)](#belgium)
* [Denmark 🇩🇰 (8)](#denmark)
* [Finland 🇫🇮 (7)](#finland)
* [France 🇫🇷 (35)](#france)
* [Germany 🇩🇪 (35)](#germany)
* [Hong Kong 🇭🇰 (27)](#hong-kong)
* [Ireland 🇮🇪 (5)](#ireland)
* [Italy 🇮🇹 (48)](#italy)
* [Japan 🇯🇵 (55)](#japan)
* [Netherlands 🇳🇱 (16)](#netherlands)
* [Norway 🇳🇴 (6)](#norway)
* [Portugal 🇵🇹 (2)](#portugal)
* [Spain 🇪🇸 (18)](#spain)
* [Sweden 🇸🇪 (20)](#sweden)
* [Switzerland 🇨🇭 (20)](#switzerland)
* [United Kingdom 🇬🇧 (80)](#uk)
* [United States 🇺🇸 (258)](#us)
<hr>
<h3 id="bnd_cfd">Bonds 📊</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`bundtreur`|BUND.TR/EUR|Euro Bund|May 2, 2016, 6:01:02 AM|May 2, 2016, 6:01 AM|May 2, 2016, 6 AM|May 2, 2016|
|`ukgilttrgbp`|UKGILT.TR/GBP|UK Long Gilt|Dec 28, 2017, 4:18:15 PM|Dec 28, 2017, 4:18 PM|Dec 28, 2017, 4 PM|Dec 26, 2017|
|`ustbondtrusd`|USTBOND.TR/USD|US T-Bond|Dec 18, 2018, 8:02:08 PM|Jan 21, 2019, 12:00 AM|Jan 21, 2019, 12 AM|Dec 18, 2018|
<h3 id="vccy">Crypto assets ₿</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`bchusd`|BCH/USD|Bitcoin Cash vs US dollar|May 17, 2021, 12:09:25 PM|Jun 9, 2021, 2:38 PM|Jun 9, 2021, 3 PM|Jun 10, 2021|
|`btcusd`|BTC/USD|Bitcoin vs US Dollar|May 7, 2017, 11:59:59 PM|May 7, 2017, 11:59 PM|May 7, 2017, 11 PM|May 7, 2017|
|`ethusd`|ETH/USD|Ether vs US Dollar|Dec 11, 2017, 11:51:21 PM|Dec 11, 2017, 11:51 PM|Dec 11, 2017, 11 PM|Dec 11, 2017|
|`ltcusd`|LTC/USD|Litecoin vs US Dollar|Sep 3, 2018, 12:00:00 AM|Sep 3, 2018, 12:00 AM|Sep 3, 2018, 12 AM|Sep 3, 2018|
|`xlmusd`|XLM/USD|Stellar vs US Dollar|Jan 1, 2000, 12:00:00 AM|May 25, 2021, 7:58 AM|May 25, 2021, 7 AM|May 25, 2021|
<h3 id="cmd_agricultural">Agricultural commodities ☕</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`cocoacmdusd`|COCOA.CMD/USD|NY Cocoa|Oct 20, 2017, 8:45:00 AM|Oct 20, 2017, 8:45 AM|Oct 20, 2017, 8 AM|Oct 20, 2017|
|`coffeecmdusx`|COFFEE.CMD/USX|Coffee Arabica|Dec 4, 2017, 9:15:00 AM|Dec 4, 2017, 9:15 AM|Dec 4, 2017, 10 AM|Dec 4, 2017|
|`cottoncmdusx`|COTTON.CMD/USX|Cotton|Oct 20, 2017, 8:44:16 AM|Oct 20, 2017, 8:44 AM|Oct 20, 2017, 8 AM|Oct 20, 2017|
|`ojuicecmdusx`|OJUICE.CMD/USX|Orange Juice|Oct 20, 2017, 12:00:00 PM|Oct 20, 2017, 12:00 PM|Oct 20, 2017, 12 PM|Oct 20, 2017|
|`soybeancmdusx`|SOYBEAN.CMD/USX|Soybean|Dec 1, 2017, 2:00:00 AM|Dec 1, 2017, 2:00 AM|Dec 1, 2017, 2 AM|Dec 1, 2017|
|`sugarcmdusd`|SUGAR.CMD/USD|London Sugar No.5|Oct 2, 2017, 7:45:00 AM|Oct 2, 2017, 7:45 AM|Oct 2, 2017, 8 AM|Oct 2, 2017|
<h3 id="cmd_energy">Energy commodities ⚡</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dieselcmdusd`|DIESEL.CMD/USD|Gas oil|Dec 26, 2017, 1:00:00 AM|Dec 26, 2017, 1:00 AM|Dec 26, 2017, 1 AM|Dec 26, 2017|
|`brentcmdusd`|BRENT.CMD/USD|US Brent Crude Oil|Dec 2, 2010, 1:00:33 AM|Dec 2, 2010, 1:00 AM|Dec 2, 2010, 1 AM|Nov 17, 2006|
|`lightcmdusd`|LIGHT.CMD/USD|US Light Crude Oil|Jan 1, 2013, 5:44:02 AM|Sep 23, 2011, 7:09 AM|Sep 23, 2011, 7 AM|Apr 20, 1983|
|`gascmdusd`|GAS.CMD/USD|Natural Gas|Sep 2, 2012, 10:02:33 PM|Sep 2, 2012, 10:02 PM|Sep 2, 2012, 10 PM|Sep 2, 2012|
<h3 id="cmd_metals">Metals commodities ⚙️</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`coppercmdusd`|COPPER.CMD/USD|High Grade Copper|Mar 2, 2012, 12:00:07 AM|Mar 2, 2012, 12:00 AM|Mar 2, 2012, 12 AM|Mar 2, 2012|
<h3 id="etf_cfd_de">Germany ETFs 🇩🇪📈</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`tecdaxedeeur`|TECDAXE.DE/EUR|iShares TecDAX UCITS DE ETF|Sep 22, 2020, 7:00:00 AM|Sep 22, 2020, 7:00 AM|Sep 22, 2020, 6 AM|Sep 22, 2020|
<h3 id="etf_cfd_fr">France ETFs 🇫🇷📈</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dsbfreur`|DSB.FR/EUR|LYXOR ETF Daily X2 Short Bund|Sep 22, 2020, 7:00:00 AM|Sep 22, 2020, 7:00 AM|Sep 22, 2020, 7 AM|Sep 22, 2020|
|`lvcfreur`|LVC.FR/EUR|Lyxor ETF Leverage CAC 40|Sep 22, 2020, 7:00:00 AM|Sep 22, 2020, 7:00 AM|Sep 22, 2020, 7 AM|Sep 22, 2020|
|`lyxbnkfreur`|LYXBNK.FR/EUR|Lyxor UCITS ETF STOXX EUROPE 600 Banks|Sep 22, 2020, 7:00:12 AM|Sep 22, 2020, 7:00 AM|Sep 22, 2020, 7 AM|Sep 22, 2020|
<h3 id="etf_cfd_hk">Hong Kong ETFs 🇭🇰📈</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`2822hkhkd`|2822.HK/HKD|CSOP FTSE China A50 ETF|Sep 28, 2020, 1:30:00 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
|`2828hkhkd`|2828.HK/HKD|Hang Seng H-Share Index ETF|Sep 28, 2020, 1:30:00 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
|`2833hkhkd`|2833.HK/HKD|Hang Seng Index ETF|Sep 28, 2020, 1:30:00 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
|`2836hkhkd`|2836.HK/HKD|iShares Core S&P BSE SENSEX India ETF|Sep 28, 2020, 1:30:02 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
|`3188hkhkd`|3188.HK/HKD|ChinaAMC CSI 300 Index ETF|Sep 28, 2020, 1:30:00 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
<h3 id="etf_cfd_us">United States ETFs 🇺🇸📈</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`diaususd`|DIA.US/USD|SPDR Dow Jones® Industrial Average ETF|May 11, 2017, 1:30:01 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`dvyususd`|DVY.US/USD|iShares Select Dividend ETF|May 11, 2017, 1:30:13 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`eemususd`|EEM.US/USD|iShares MSCI Emerging Markets ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`efaususd`|EFA.US/USD|iShares MSCI EAFE ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`embususd`|EMB.US/USD|iShares J.P. Morgan USD Emerging Markets Bond ETF|May 11, 2017, 1:30:07 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`ewhususd`|EWH.US/USD|iShares MSCI Hong Kong ETF|Nov 6, 2017, 2:30:01 PM|Nov 6, 2017, 2:30 PM|Nov 6, 2017, 2 PM|Nov 6, 2017|
|`ewjususd`|EWJ.US/USD|iShares MSCI Japan ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`ewwususd`|EWW.US/USD|iShares MSCI Mexico Capped|Mar 13, 2017, 2:25:17 PM|Mar 13, 2017, 2:25 PM|Mar 13, 2017, 2 PM|Mar 13, 2017|
|`ewzususd`|EWZ.US/USD|iShares MSCI Brazil Capped|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`ezuususd`|EZU.US/USD|iShares MSCI EMU ETF|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`fxiususd`|FXI.US/USD|iShares China Large-Cap ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gdxususd`|GDX.US/USD|VanEck Vectors Gold Miners ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gdxjususd`|GDXJ.US/USD|VanEck Vectors Junior Gold Miners ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gldususd`|GLD.US/USD|SPDR Gold Shares ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`ibbususd`|IBB.US/USD|iShares Nasdaq Biotechnology ETF|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`iefususd`|IEF.US/USD|iShares 7-10 Year Treasury Bond ETF|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`ijhususd`|IJH.US/USD|iShares Core S&P Mid-Cap ETF|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`ijrususd`|IJR.US/USD|iShares Core S&P Small-Cap ETF|May 11, 2017, 1:30:04 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`iveususd`|IVE.US/USD|iShares S&P 500 Value ETF|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`ivwususd`|IVW.US/USD|iShares S&P 500 Growth ETF|May 11, 2017, 1:30:06 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`iwdususd`|IWD.US/USD|iShares Russell 1000 Value ETF|Feb 1, 2018, 2:30:09 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`iwfususd`|IWF.US/USD|iShares Russell 1000 Growth ETF|Feb 1, 2018, 2:30:09 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`iwmususd`|IWM.US/USD|iShares Russell 2000 ETF|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`iyrususd`|IYR.US/USD|iShares U.S. Real Estate ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`jnkususd`|JNK.US/USD|SPDR Barclays Capital High Yield Bond ETF|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`qqqususd`|QQQ.US/USD|PowerShares QQQ ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`slvususd`|SLV.US/USD|iShares Silver Trust ETF|Feb 1, 2018, 3:27:00 PM|Feb 1, 2018, 3:26 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`spyususd`|SPY.US/USD|SPDR S&P 500 ETF|Feb 16, 2017, 3:27:00 PM|Feb 16, 2017, 3:27 PM|Feb 16, 2017, 3 PM|Feb 16, 2017|
|`tltususd`|TLT.US/USD|iShares 20+ Year Treasury Bond ETF|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`usoususd`|USO.US/USD|United States Oil|Jan 26, 2017, 2:30:17 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`veaususd`|VEA.US/USD|Vanguard FTSE Developed Markets ETF|Nov 15, 2017, 3:24:37 PM|Nov 15, 2017, 3:24 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`vgkususd`|VGK.US/USD|Vanguard FTSE Europe ETF|Feb 1, 2018, 3:38:22 PM|Feb 1, 2018, 3:38 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`vnqususd`|VNQ.US/USD|Vanguard REIT ETF|Nov 15, 2017, 3:48:16 PM|Nov 15, 2017, 3:48 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`vxxususd`|VXX.US/USD|iPath S&P 500 VIX ST Futures ETN|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`xleususd`|XLE.US/USD|Energy Select Sector SPDR Fund|Nov 15, 2017, 4:45:59 PM|Nov 15, 2017, 4:45 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xlfususd`|XLF.US/USD|Financial Select Sector SPDR Fund|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`xliususd`|XLI.US/USD|Industrial Select Sector SPDR Fund|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`xlkususd`|XLK.US/USD|Technology Select Sector SPDR Fund|Nov 15, 2017, 4:47:43 PM|Nov 15, 2017, 4:47 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xlpususd`|XLP.US/USD|Consumer Staples Select Sector SPDR Fund|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`xluususd`|XLU.US/USD|Utilities Select Sector SPDR Fund|Nov 15, 2017, 4:48:28 PM|Nov 15, 2017, 4:48 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xlvususd`|XLV.US/USD|Health Care Select Sector SPDR Fund|Nov 15, 2017, 4:48:53 PM|Nov 15, 2017, 4:48 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xlyususd`|XLY.US/USD|Consumer Discretionary Select Sector SPDR Fund|Nov 15, 2017, 4:49:26 PM|Nov 15, 2017, 4:49 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xopususd`|XOP.US/USD|SPDR S&P Oil & Gas Explor & Prodtn ETF|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
<h3 id="fx_crosses">Forex currencies 💱</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`audcad`|AUD/CAD|Australian Dollar vs Canadian Dollar|Jan 3, 2006, 12:00:05 AM|Jan 3, 2006, 12:00 AM|Jan 3, 2006, 12 AM|Nov 18, 1992|
|`audchf`|AUD/CHF|Australian Dollar vs Swiss Franc|Mar 1, 2006, 12:01:00 AM|Mar 1, 2006, 12:01 AM|Mar 1, 2006, 12 AM|Nov 22, 1991|
|`audjpy`|AUD/JPY|Australian Dollar vs Japanese Yen|Nov 30, 2003, 10:00:00 PM|Nov 30, 2003, 10:00 PM|Nov 30, 2003, 9 PM|Feb 4, 1991|
|`audnzd`|AUD/NZD|Australian Dollar vs New Zealand Dollar|Dec 12, 2006, 12:01:02 AM|Dec 12, 2006, 12:01 AM|Dec 12, 2006, 12 AM|Dec 21, 1993|
|`audsgd`|AUD/SGD|Australian Dollar vs Singapore Dollar|Mar 14, 2007, 12:00:20 AM|Mar 13, 2007, 5:10 AM|Mar 13, 2007, 5 AM|Jun 4, 1999|
|`cadchf`|CAD/CHF|Canadian Dollar vs Swiss Franc|Jan 2, 2006, 10:38:05 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Nov 22, 1991|
|`cadhkd`|CAD/HKD|Canadian Dollar vs Hong Kong Dollar|Mar 13, 2007, 5:44:28 AM|Mar 13, 2007, 5:44 AM|Mar 13, 2007, 5 AM|Jun 16, 1999|
|`cadjpy`|CAD/JPY|Canadian Dollar vs Japanese Yen|Oct 25, 2004, 12:01:01 AM|Oct 25, 2004, 12:01 AM|Oct 25, 2004, 12 AM|Feb 23, 1993|
|`chfjpy`|CHF/JPY|Swiss Franc vs Japanese Yen|Aug 3, 2003, 9:00:14 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Dec 3, 1990|
|`chfsgd`|CHF/SGD|Swiss Franc vs Singapore Dollar|Jun 4, 2007, 9:31:10 AM|Jun 4, 2007, 9:31 AM|Jun 4, 2007, 9 AM|Apr 29, 1998|
|`euraud`|EUR/AUD|Euro vs Australian Dollar|Oct 7, 2005, 5:54:01 AM|Oct 7, 2005, 5:54 AM|Oct 7, 2005, 5 AM|Oct 9, 1991|
|`eurcad`|EUR/CAD|Euro vs Canadian Dollar|Oct 25, 2004, 12:00:05 AM|Oct 25, 2004, 12:00 AM|Oct 25, 2004, 12 AM|Oct 9, 1991|
|`eurchf`|EUR/CHF|Euro vs Swiss Franc|Aug 3, 2003, 9:00:00 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Jan 14, 1991|
|`eurczk`|EUR/CZK|Euro vs Czech Koruna|Jan 3, 2016, 11:00:39 PM|Jan 2, 2017, 12:00 AM|Jan 2, 2017, 12 AM|Jan 2, 2017|
|`eurdkk`|EUR/DKK|Euro vs Danish Krone|Oct 25, 2004, 12:33:06 AM|Oct 25, 2004, 12:33 AM|Oct 25, 2004, 12 AM|Feb 26, 1993|
|`eurgbp`|EUR/GBP|Euro vs Pound Sterling|Aug 3, 2003, 9:00:00 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Apr 14, 1995|
|`eurhkd`|EUR/HKD|Euro vs Hong Kong Dollar|Mar 13, 2007, 4:52:10 AM|Mar 13, 2007, 4:52 AM|Mar 13, 2007, 4 AM|Jun 3, 1999|
|`eurhuf`|EUR/HUF|Euro vs Hungarian Forint|Mar 14, 2007, 6:13:37 AM|Mar 13, 2007, 8:03 AM|Mar 13, 2007, 8 AM|Jun 30, 1999|
|`eurjpy`|EUR/JPY|Euro vs Japanese Yen|Aug 3, 2003, 9:00:01 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Jun 28, 1989|
|`eurnok`|EUR/NOK|Euro vs Norwegian Krone|Oct 25, 2004, 12:18:08 AM|Oct 25, 2004, 12:18 AM|Oct 25, 2004, 12 AM|Jun 3, 1991|
|`eurnzd`|EUR/NZD|Euro vs New Zealand Dollar|Jan 2, 2006, 10:38:22 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Jan 5, 1999|
|`eurpln`|EUR/PLN|Euro vs Polish Zloty|Mar 14, 2007, 12:00:03 AM|Mar 13, 2007, 4:45 AM|Mar 13, 2007, 4 AM|Jun 3, 1999|
|`eurrub`|EUR/RUB|Euro vs Russian Rouble|Mar 13, 2007, 7:00:04 AM|Mar 13, 2007, 7:00 AM|Mar 13, 2007, 7 AM|Jun 3, 1999|
|`eursek`|EUR/SEK|Euro vs Swedish Krona|Oct 27, 2004, 5:16:02 PM|Oct 27, 2004, 5:16 PM|Oct 27, 2004, 5 PM|Nov 20, 1992|
|`eursgd`|EUR/SGD|Euro vs Singapore Dollar|Mar 13, 2007, 4:42:05 AM|Mar 13, 2007, 4:42 AM|Mar 13, 2007, 4 AM|Apr 29, 1998|
|`eurtry`|EUR/TRY|Euro vs Turkish Lira|Mar 13, 2007, 4:54:03 AM|Mar 13, 2007, 4:54 AM|Mar 13, 2007, 4 AM|Jan 3, 2005|
|`gbpaud`|GBP/AUD|Pound Sterling vs Australian Dollar|Mar 22, 2006, 12:00:08 AM|Mar 22, 2006, 12:00 AM|Mar 22, 2006, 12 AM|Jan 30, 1991|
|`gbpcad`|GBP/CAD|Pound Sterling vs Canadian Dollar|Jan 2, 2006, 10:38:05 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Oct 25, 1990|
|`gbpchf`|GBP/CHF|Pound Sterling vs Swiss Franc|Aug 4, 2003, 10:00:05 AM|Aug 4, 2003, 10:00 AM|Aug 4, 2003, 10 AM|Sep 6, 1990|
|`gbpjpy`|GBP/JPY|Pound Sterling vs Japanese Yen|Aug 3, 2003, 9:00:00 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Jan 2, 1991|
|`gbpnzd`|GBP/NZD|Pound Sterling vs New Zealand Dollar|Jan 2, 2006, 10:38:05 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Jan 20, 1997|
|`hkdjpy`|HKD/JPY|Hong Kong Dollar vs Japanese Yen|Mar 13, 2007, 4:30:00 AM|Mar 13, 2007, 4:30 AM|Mar 13, 2007, 4 AM|Nov 4, 1998|
|`nzdcad`|NZD/CAD|New Zealand Dollar vs Canadian Dollar|Jan 2, 2006, 10:38:06 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Mar 25, 2002|
|`nzdchf`|NZD/CHF|New Zealand Dollar vs Swiss Franc|Jan 2, 2006, 10:38:04 PM|Jan 2, 2006, 10:38 PM|Jan 2, 2006, 10 PM|Jan 7, 1999|
|`nzdjpy`|NZD/JPY|New Zealand Dollar vs Japanese Yen|Jan 2, 2006, 10:39:04 PM|Jan 2, 2006, 10:39 PM|Jan 2, 2006, 10 PM|Oct 1, 1998|
|`sgdjpy`|SGD/JPY|Singapore Dollar vs Japanese Yen|Mar 13, 2007, 4:01:00 AM|Mar 13, 2007, 4:01 AM|Mar 13, 2007, 4 AM|May 31, 1999|
|`tryjpy`|TRY/JPY|Turkish Lira vs Japanese Yen|May 9, 2010, 9:43:33 PM|May 9, 2010, 9:43 PM|May 9, 2010, 9 PM|May 9, 2010|
|`usdcnh`|USD/CNH|US Dollar vs Offshore Chinese Renminbi|Jun 27, 2012, 12:07:42 AM|Jun 27, 2012, 12:07 AM|Jun 26, 2012, 9 PM|Jan 2, 2012|
|`usdczk`|USD/CZK|US Dollar vs Czech Koruna|Jan 3, 2016, 10:00:12 PM|Jan 3, 2016, 10:00 PM|Jan 3, 2016, 10 PM|Jan 3, 2016|
|`usddkk`|USD/DKK|US Dollar vs Danish Krone|Aug 4, 2003, 12:00:09 AM|Aug 4, 2003, 12:00 AM|Aug 3, 2003, 9 PM|Apr 12, 1990|
|`usdhkd`|USD/HKD|US Dollar vs Hong Kong Dollar|Mar 13, 2007, 4:01:10 AM|Mar 13, 2007, 4:01 AM|Mar 13, 2007, 4 AM|Mar 17, 1986|
|`usdhuf`|USD/HUF|US Dollar vs Hungarian Forint|Mar 13, 2007, 4:58:03 AM|Mar 13, 2007, 4:58 AM|Mar 13, 2007, 4 AM|Jul 14, 1998|
|`usdils`|USD/ILS|US Dollar vs Israeli Shekel|Dec 15, 2016, 6:00:00 AM|Dec 15, 2016, 6:00 AM|Dec 15, 2016, 6 AM|Dec 15, 2016|
|`usdmxn`|USD/MXN|US Dollar vs Mexican Peso|Mar 13, 2007, 7:01:04 AM|Mar 13, 2007, 7:01 AM|Mar 13, 2007, 7 AM|Mar 31, 1995|
|`usdnok`|USD/NOK|US Dollar vs Norwegian Krone|Aug 4, 2003, 12:00:08 AM|Aug 4, 2003, 12:00 AM|Aug 3, 2003, 9 PM|Mar 27, 1991|
|`usdpln`|USD/PLN|US Dollar vs Polish Zloty|Mar 13, 2007, 4:56:04 AM|Mar 13, 2007, 4:56 AM|Mar 13, 2007, 4 AM|Mar 22, 1999|
|`usdron`|USD/RON|US Dollar vs Romanian Leu|Dec 19, 2016, 6:30:00 AM|Dec 19, 2016, 6:30 AM|Dec 19, 2016, 7 AM|Dec 20, 2016|
|`usdrub`|USD/RUB|US Dollar vs Russian Ruble|Mar 13, 2007, 7:03:01 AM|Mar 13, 2007, 7:03 AM|Mar 13, 2007, 7 AM|Mar 22, 1999|
|`usdsek`|USD/SEK|US Dollar vs Swedish Krona|Aug 4, 2003, 12:00:01 AM|Aug 4, 2003, 12:00 AM|Aug 3, 2003, 9 PM|Jul 16, 1991|
|`usdsgd`|USD/SGD|US Dollar vs Singapore Dollar|Nov 16, 2004, 6:03:02 PM|Nov 16, 2004, 6:03 PM|Nov 16, 2004, 6 PM|Jan 21, 1991|
|`usdthb`|USD/THB|US Dollar vs Thai Baht|Feb 13, 2017, 6:00:01 AM|Feb 13, 2017, 6:00 AM|Feb 13, 2017, 6 AM|Feb 13, 2017|
|`usdtry`|USD/TRY|US Dollar vs Turkish Lira|Mar 13, 2007, 7:01:00 AM|Mar 13, 2007, 7:01 AM|Mar 13, 2007, 7 AM|Oct 18, 2001|
|`usdzar`|USD/ZAR|US Dollar vs South African Rand|Aug 4, 2003, 10:03:02 AM|Aug 4, 2003, 10:03 AM|Aug 4, 2003, 10 AM|Nov 25, 1991|
|`zarjpy`|ZAR/JPY|South African Rand vs Japanese Yen|Jun 4, 2007, 12:00:18 AM|Jun 4, 2007, 12:00 AM|Jun 4, 2007, 12 AM|Jun 7, 1999|
<h3 id="fx_majors">Forex major currencies 💶</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`audusd`|AUD/USD|Australian Dollar vs US Dollar|Aug 3, 2003, 9:00:05 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Jan 4, 1993|
|`eurusd`|EUR/USD|Euro vs US Dollar|May 4, 2003, 9:00:00 PM|May 4, 2003, 9:00 PM|May 4, 2003, 9 PM|Mar 1, 1973|
|`gbpusd`|GBP/USD|Pound Sterling vs US Dollar|May 4, 2003, 9:00:00 PM|May 4, 2003, 9:00 PM|May 4, 2003, 8 PM|Feb 10, 1986|
|`nzdusd`|NZD/USD|New Zealand Dollar vs US Dollar|Aug 3, 2003, 9:00:00 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Jul 8, 1991|
|`usdcad`|USD/CAD|US Dollar vs Canadian Dollar|Aug 3, 2003, 9:00:01 PM|Aug 3, 2003, 9:00 PM|Aug 3, 2003, 9 PM|Feb 10, 1986|
|`usdchf`|USD/CHF|US Dollar vs Swiss Franc|May 4, 2003, 9:00:01 PM|May 4, 2003, 9:00 PM|May 4, 2003, 8 PM|Feb 10, 1986|
|`usdjpy`|USD/JPY|US Dollar vs Japanese Yen|May 4, 2003, 9:00:00 PM|May 4, 2003, 9:00 PM|May 4, 2003, 9 PM|Feb 10, 1986|
<h3 id="fx_metals">Forex metals 🥇</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`xagusd`|XAG/USD|Spot silver|May 4, 2003, 11:09:04 PM|May 4, 2003, 11:09 PM|May 4, 2003, 11 PM|Jun 3, 1999|
|`xauusd`|XAU/USD|Spot gold|May 5, 2003, 12:01:03 AM|May 5, 2003, 12:01 AM|May 5, 2003, 12 AM|Jun 3, 1999|
<h3 id="idx_america">America 🌎</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dollaridxusd`|DOLLAR.IDX/USD|US Dollar Index|Dec 1, 2017, 1:00:00 AM|Dec 1, 2017, 1:00 AM|Dec 1, 2017, 12 AM|Dec 1, 2017|
|`usa30idxusd`|USA30.IDX/USD|USA 30 Index|Jan 1, 2013, 5:44:03 AM|Sep 30, 2013, 1:34 PM|Sep 30, 2013, 1 PM|Sep 30, 2013|
|`usatechidxusd`|USATECH.IDX/USD|USA 100 Technical Index|Jan 1, 2013, 5:44:03 AM|Sep 19, 2011, 1:30 PM|Sep 18, 2011, 9 PM|Nov 7, 1990|
|`usa500idxusd`|USA500.IDX/USD|USA 500 Index|Jan 16, 2012, 12:00:07 AM|Sep 19, 2011, 6:31 AM|Sep 18, 2011, 9 PM|Jan 2, 1980|
|`ussc2000idxusd`|USSC2000.IDX/USD|US Small Cap 2000|Aug 8, 2018, 1:30:05 PM|Aug 8, 2018, 1:30 PM|Aug 8, 2018, 1 PM|Aug 8, 2018|
<h3 id="idx_asia">Asia 🌏</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`chiidxusd`|CHI.IDX/USD|China A50 Index|Jul 17, 2017, 7:30:02 PM|Jul 17, 2017, 7:30 PM|Jul 17, 2017, 7 PM|Jul 17, 2017|
|`hkgidxhkd`|HKG.IDX/HKD|Hong Kong 40 Index|Jun 3, 2013, 1:15:21 AM|Jun 3, 2013, 1:15 AM|Jun 3, 2013, 1 AM|Jun 3, 2013|
|`jpnidxjpy`|JPN.IDX/JPY|Japan 225|Jan 1, 2013, 5:44:03 AM|Sep 19, 2011, 2:06 AM|Sep 18, 2011, 9 PM|Sep 4, 1986|
|`ausidxaud`|AUS.IDX/AUD|Australia 200 Index|Jun 1, 2014, 11:50:09 PM|Jun 1, 2014, 11:50 PM|Jun 1, 2014, 11 PM|Jun 1, 2014|
|`indidxusd`|IND.IDX/USD|India 50 Index|Dec 1, 2017, 2:36:15 AM|Dec 1, 2017, 2:36 AM|Dec 1, 2017, 2 AM|Dec 1, 2017|
|`sgdidxsgd`|SGD.IDX/SGD|Singapore Blue Chip Cash Index|Dec 1, 2017, 12:58:48 AM|Dec 1, 2017, 12:58 AM|Dec 1, 2017, 12 AM|Dec 1, 2017|
<h3 id="idx_europe">Europe 🌍</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`fraidxeur`|FRA.IDX/EUR|France 40 Index|Jan 1, 2013, 5:15:34 PM|Sep 19, 2011, 7:00 AM|Sep 19, 2011, 7 AM|Dec 31, 1987|
|`deuidxeur`|DEU.IDX/EUR|Germany 30 Index|Jan 1, 2013, 5:44:03 AM|Sep 30, 2013, 3:13 PM|Sep 30, 2013, 2 PM|Sep 30, 2013|
|`eusidxeur`|EUS.IDX/EUR|Europe 50 Index|Jun 2, 2014, 6:00:57 AM|Jun 2, 2014, 6:00 AM|Jun 2, 2014, 6 AM|Jun 2, 2014|
|`gbridxgbp`|GBR.IDX/GBP|UK 100 Index|Jan 1, 2013, 3:51:37 AM|Sep 19, 2011, 2:06 AM|Sep 18, 2011, 9 PM|Apr 5, 1988|
|`espidxeur`|ESP.IDX/EUR|Spain 35 Index|Jun 2, 2014, 7:01:09 AM|Jun 2, 2014, 7:01 AM|Jun 2, 2014, 7 AM|Jun 2, 2014|
|`cheidxchf`|CHE.IDX/CHF|Switzerland 20 Index|Jan 3, 2013, 8:02:00 AM|Sep 19, 2011, 7:02 AM|Sep 19, 2011, 7 AM|Jan 3, 1992|
|`nldidxeur`|NLD.IDX/EUR|Netherlands 25 Index|Dec 1, 2017, 8:00:23 AM|Dec 1, 2017, 8:00 AM|Dec 1, 2017, 8 AM|Dec 1, 2017|
|`plnidxpln`|PLN.IDX/PLN|Poland 20 Index|Dec 1, 2017, 7:45:00 AM|Dec 1, 2017, 7:45 AM|Dec 1, 2017, 7 AM|Dec 1, 2017|
<h3 id="austria">Austria 🇦🇹</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`ebsateur`|EBS.AT/EUR|Erste Group Bank AG|Nov 15, 2016, 8:27:59 AM|Nov 15, 2016, 8:27 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rbiateur`|RBI.AT/EUR|Raiffeisen Bank International AG|Nov 15, 2016, 8:28:00 AM|Nov 15, 2016, 8:28 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`voeateur`|VOE.AT/EUR|Voestalpine AG|Nov 15, 2016, 8:27:58 AM|Nov 15, 2016, 8:27 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="belgium">Belgium 🇧🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abibeeur`|ABI.BE/EUR|Anheuser-Busch InBev NV|Nov 21, 2016, 8:00:06 AM|Nov 21, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`agsbeeur`|AGS.BE/EUR|Ageas|Nov 21, 2016, 8:00:06 AM|Nov 21, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`belgbeeur`|BELG.BE/EUR|Proximus|Nov 7, 2016, 8:02:01 AM|Nov 7, 2016, 8:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`kbcbeeur`|KBC.BE/EUR|KBC Groep NV|Nov 7, 2016, 8:01:01 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`solbbeeur`|SOLB.BE/EUR|Solvay SA|Nov 7, 2016, 8:01:05 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ucbbeeur`|UCB.BE/EUR|UCB SA|Nov 7, 2016, 8:01:58 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`umibeeur`|UMI.BE/EUR|Umicore SA|Nov 7, 2016, 8:01:02 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="denmark">Denmark 🇩🇰</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`carlbdkdkk`|CARLB.DK/DKK|Carlsberg A/S|Nov 8, 2016, 8:00:03 AM|Nov 8, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`colobdkdkk`|COLOB.DK/DKK|Coloplast A/S|Nov 8, 2016, 8:00:04 AM|Nov 8, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`danskedkdkk`|DANSKE.DK/DKK|Danske Bank A/S|Nov 8, 2016, 1:51:41 PM|Nov 8, 2016, 1:51 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`maerskbdkdkk`|MAERSKB.DK/DKK|AP Moeller - Maersk A/S|Nov 8, 2016, 2:36:37 PM|Nov 8, 2016, 2:36 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`novobdkdkk`|NOVOB.DK/DKK|Novo Nordisk A/S|Nov 8, 2016, 8:01:00 AM|Nov 8, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`nzymbdkdkk`|NZYMB.DK/DKK|Novozymes A/S|Nov 8, 2016, 8:01:05 AM|Nov 8, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`pndoradkdkk`|PNDORA.DK/DKK|Pandora A/S|Nov 8, 2016, 2:36:49 PM|Nov 8, 2016, 2:36 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`vwsdkdkk`|VWS.DK/DKK|Vestas Wind Systems A/S|Nov 8, 2016, 8:01:02 AM|Nov 8, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="finland">Finland 🇫🇮</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`eli1vfieur`|ELI1V.FI/EUR|Elisa OYJ|Nov 3, 2016, 8:00:04 AM|Nov 3, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`nes1vfieur`|NES1V.FI/EUR|Neste OYJ|Nov 3, 2016, 8:02:00 AM|Nov 3, 2016, 8:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`nre1vfieur`|NRE1V.FI/EUR|Nokian Renkaat OYJ|Nov 3, 2016, 8:02:00 AM|Nov 3, 2016, 8:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ote1vfieur`|OTE1V.FI/EUR|Outotec OYJ|Nov 3, 2016, 8:00:01 AM|Nov 3, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`out1vfieur`|OUT1V.FI/EUR|Outokumpu OYJ|Nov 3, 2016, 8:03:24 AM|Nov 3, 2016, 8:03 AM|Mar 3, 2014, 8 AM|Mar 3, 2014|
|`stervfieur`|STERV.FI/EUR|Stora Enso OYJ|Nov 3, 2016, 8:00:03 AM|Nov 3, 2016, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tls1vfieur`|TLS1V.FI/EUR|Telia Company AB|Nov 9, 2016, 9:14:30 AM|Nov 9, 2016, 9:14 AM|Apr 18, 2016, 7 AM|Apr 18, 2016|
<h3 id="france">France 🇫🇷</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`acfreur`|AC.FR/EUR|Accor SA|Aug 11, 2016, 8:59:52 AM|Aug 11, 2016, 8:59 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`acafreur`|ACA.FR/EUR|Credit Agricole SA|Sep 30, 2016, 7:00:19 AM|Sep 30, 2016, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`affreur`|AF.FR/EUR|Air France-KLM|Sep 27, 2016, 7:53:59 AM|Sep 27, 2016, 7:53 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`aifreur`|AI.FR/EUR|Air Liquide SA|Sep 30, 2016, 8:06:30 AM|Sep 30, 2016, 8:06 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`airfreur`|AIR.FR/EUR|Airbus Group SE|Sep 30, 2016, 9:34:32 AM|Sep 30, 2016, 9:34 AM|Jan 2, 2014, 8 AM|Jan 2, 2014|
|`alofreur`|ALO.FR/EUR|Alstom SA|Sep 27, 2016, 7:53:59 AM|Sep 27, 2016, 7:53 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bnfreur`|BN.FR/EUR|Danone SA|Sep 30, 2016, 9:23:42 AM|Sep 30, 2016, 9:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bnpfreur`|BNP.FR/EUR|BNP Paribas SA|Sep 30, 2016, 9:23:42 AM|Sep 30, 2016, 9:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`cafreur`|CA.FR/EUR|Carrefour SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`capfreur`|CAP.FR/EUR|Cap Gemini SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`csfreur`|CS.FR/EUR|AXA SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`dgfreur`|DG.FR/EUR|Vinci SA|Sep 30, 2016, 9:31:14 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`edffreur`|EDF.FR/EUR|Electricite de France SA|Sep 30, 2016, 9:31:25 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`enfreur`|EN.FR/EUR|Bouygues SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`engifreur`|ENGI.FR/EUR|Engie|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jul 31, 2015, 7 AM|Jul 31, 2015|
|`fpfreur`|FP.FR/EUR|Total SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`frfreur`|FR.FR/EUR|Valeo SA|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`glefreur`|GLE.FR/EUR|Societe Generale SA|Sep 30, 2016, 9:31:10 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`kerfreur`|KER.FR/EUR|Kering|Sep 30, 2016, 9:31:09 AM|Sep 30, 2016, 9:31 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lifreur`|LI.FR/EUR|Klepierre|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lrfreur`|LR.FR/EUR|Legrand SA|Aug 5, 2016, 2:50:11 PM|Aug 5, 2016, 2:50 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`mcfreur`|MC.FR/EUR|LVMH Moet Hennessy Louis Vuitton SA|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`orfreur`|OR.FR/EUR|L'Oreal SA|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`orafreur`|ORA.FR/EUR|Orange SA|Aug 5, 2016, 3:00:01 PM|Aug 5, 2016, 3:00 PM|Jul 1, 2013, 7 AM|Jul 1, 2013|
|`pubfreur`|PUB.FR/EUR|Publicis Groupe SA|Aug 5, 2016, 3:00:01 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rifreur`|RI.FR/EUR|Pernod-Ricard SA|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rnofreur`|RNO.FR/EUR|Renault SA|Aug 8, 2016, 7:00:15 AM|Aug 8, 2016, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`saffreur`|SAF.FR/EUR|Safran SA|Aug 5, 2016, 3:00:05 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sanfreur`|SAN.FR/EUR|Sanofi|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sgofreur`|SGO.FR/EUR|Cie de St-Gobain|Oct 31, 2016, 9:47:37 AM|Oct 31, 2016, 9:47 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sufreur`|SU.FR/EUR|Schneider Electric SA|Aug 5, 2016, 3:00:01 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ugfreur`|UG.FR/EUR|Peugeot SA|Aug 5, 2016, 3:00:02 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`viefreur`|VIE.FR/EUR|Veolia Environnement SA|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`vivfreur`|VIV.FR/EUR|Vivendi SA|Aug 5, 2016, 3:00:00 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`vkfreur`|VK.FR/EUR|Vallourec SA|Aug 5, 2016, 3:00:05 PM|Aug 5, 2016, 3:00 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="germany">Germany 🇩🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`adsdeeur`|ADS.DE/EUR|Adidas AG|Mar 13, 2015, 8:00:16 AM|Mar 13, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`alvdeeur`|ALV.DE/EUR|Allianz SE|Apr 9, 2015, 7:00:27 AM|Apr 9, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`basdeeur`|BAS.DE/EUR|BASF SE|Apr 22, 2015, 7:00:27 AM|Apr 22, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bayndeeur`|BAYN.DE/EUR|Bayer AG|Mar 20, 2015, 8:00:11 AM|Mar 20, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`beideeur`|BEI.DE/EUR|Beiersdorf AG|Apr 8, 2015, 7:00:13 AM|Apr 8, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bmwdeeur`|BMW.DE/EUR|Bayerische Motoren Werke AG|Mar 24, 2015, 8:00:27 AM|Mar 24, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bossdeeur`|BOSS.DE/EUR|HUGO BOSS AG|Apr 9, 2015, 7:02:07 AM|Apr 9, 2015, 7:02 AM|Jun 18, 2012, 7 AM|Jun 18, 2012|
|`cbkdeeur`|CBK.DE/EUR|Commerzbank AG|Mar 26, 2015, 8:00:16 AM|Mar 26, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`condeeur`|CON.DE/EUR|Continental AG|Apr 8, 2015, 7:00:27 AM|Apr 8, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`daideeur`|DAI.DE/EUR|Daimler AG|Mar 27, 2015, 8:02:31 AM|Mar 27, 2015, 8:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`db1deeur`|DB1.DE/EUR|Deutsche Boerse AG|Apr 14, 2015, 7:00:18 AM|Apr 14, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`dbkdeeur`|DBK.DE/EUR|Deutsche Bank AG|Mar 25, 2015, 8:00:29 AM|Mar 25, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`dpwdeeur`|DPW.DE/EUR|Deutsche Post AG|Mar 31, 2015, 7:00:24 AM|Mar 31, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`dtedeeur`|DTE.DE/EUR|Deutsche Telekom AG|Mar 31, 2015, 7:00:30 AM|Mar 31, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`eoandeeur`|EOAN.DE/EUR|E.ON SE|Apr 20, 2015, 7:00:28 AM|Apr 20, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`fmedeeur`|FME.DE/EUR|Fresenius Medical Care AG & Co KGaA|Apr 1, 2015, 7:00:17 AM|Apr 1, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`fredeeur`|FRE.DE/EUR|Fresenius SE & Co KGaA|Apr 10, 2015, 7:00:25 AM|Apr 10, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`heideeur`|HEI.DE/EUR|HeidelbergCement AG|Apr 2, 2015, 7:00:30 AM|Apr 2, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`hen3deeur`|HEN3.DE/EUR|Henkel AG & Co KGaA|Apr 21, 2015, 7:00:12 AM|Apr 21, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ifxdeeur`|IFX.DE/EUR|Infineon Technologies AG|Apr 13, 2015, 7:00:12 AM|Apr 13, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lhadeeur`|LHA.DE/EUR|Deutsche Lufthansa AG|Apr 21, 2015, 7:00:16 AM|Apr 21, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lindeeur`|LIN.DE/EUR|Linde AG|Apr 21, 2015, 7:00:04 AM|Apr 21, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lxsdeeur`|LXS.DE/EUR|Lanxess AG|Apr 21, 2015, 7:00:13 AM|Apr 21, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`mrkdeeur`|MRK.DE/EUR|Merck KGaA|Mar 24, 2015, 8:00:14 AM|Mar 24, 2015, 8:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`muv2deeur`|MUV2.DE/EUR|Muenchener Rueckversicherungs AG|Apr 21, 2015, 7:02:19 AM|Apr 21, 2015, 7:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`pah3deeur`|PAH3.DE/EUR|Porsche Automobil Holding SE|Apr 21, 2015, 7:02:08 AM|Apr 21, 2015, 7:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`psmdeeur`|PSM.DE/EUR|ProSiebenSat.1 Media AG|Apr 20, 2015, 7:02:21 AM|Apr 20, 2015, 7:02 AM|Aug 19, 2013, 7 AM|Aug 19, 2013|
|`rwedeeur`|RWE.DE/EUR|RWE AG|Apr 16, 2015, 7:00:22 AM|Apr 16, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sapdeeur`|SAP.DE/EUR|SAP AG|Apr 16, 2015, 7:00:26 AM|Apr 16, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sdfdeeur`|SDF.DE/EUR|K+S AG|Apr 15, 2015, 7:00:08 AM|Apr 15, 2015, 7:00 AM|Aug 8, 2011, 7 AM|Aug 8, 2011|
|`siedeeur`|SIE.DE/EUR|Siemens AG|Apr 20, 2015, 7:00:01 AM|Apr 20, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tkadeeur`|TKA.DE/EUR|ThyssenKrupp AG|Apr 14, 2015, 7:00:06 AM|Apr 14, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tui1deeur`|TUI1.DE/EUR|TUI AG|Apr 15, 2015, 7:02:21 AM|Apr 15, 2015, 7:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`vnadeeur`|VNA.DE/EUR|Vonovia SE|Apr 14, 2015, 7:02:17 AM|Apr 14, 2015, 7:02 AM|Apr 14, 2015, 7 AM|Apr 14, 2015|
|`vow3deeur`|VOW3.DE/EUR|Volkswagen AG|Apr 14, 2015, 7:00:21 AM|Apr 14, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="hong-kong">Hong Kong 🇭🇰</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`0005hkhkd`|0005.HK/HKD|HSBC Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0027hkhkd`|0027.HK/HKD|Galaxy Entertainment Group|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0175hkhkd`|0175.HK/HKD|Geely Automobile Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0291hkhkd`|0291.HK/HKD|China Resources Beer Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0386hkhkd`|0386.HK/HKD|Sinopec Corp|Mar 1, 2018, 1:30:00 AM|Mar 1, 2018, 1:30 AM|Mar 1, 2018, 1 AM|Mar 1, 2018|
|`0388hkhkd`|0388.HK/HKD|HK Exchanges & Clearing|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0700hkhkd`|0700.HK/HKD|Tencent Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0857hkhkd`|0857.HK/HKD|PetroChina|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0883hkhkd`|0883.HK/HKD|China National Offshore Oil Corporation|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0939hkhkd`|0939.HK/HKD|China Construction Bank|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`0941hkhkd`|0941.HK/HKD|China Mobile|May 23, 2018, 1:30:00 AM|May 23, 2018, 1:30 AM|May 23, 2018, 1 AM|May 23, 2018|
|`0998hkhkd`|0998.HK/HKD|CITIC Bank International|Feb 1, 2018, 1:30:00 AM|Feb 1, 2018, 1:30 AM|Feb 1, 2018, 1 AM|Feb 1, 2018|
|`1093hkhkd`|1093.HK/HKD|CSPC Pharmaceutical Group|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`1177hkhkd`|1177.HK/HKD|Sino Biopharmeceutical|Jul 4, 2018, 1:30:00 AM|Jul 4, 2018, 1:30 AM|Jul 4, 2018, 1 AM|Jul 4, 2018|
|`1288hkhkd`|1288.HK/HKD|Agricultural Bank of China|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`1299hkhkd`|1299.HK/HKD|AIA|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`1398hkhkd`|1398.HK/HKD|Industrial and Commercial Bank of China|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`1810hkhkd`|1810.HK/HKD|Xiaomi Corp|Sep 28, 2020, 1:30:00 AM|Sep 28, 2020, 1:30 AM|Sep 28, 2020, 1 AM|Sep 28, 2020|
|`1918hkhkd`|1918.HK/HKD|Sunac China Holdings|Feb 1, 2018, 1:30:00 AM|Feb 1, 2018, 1:30 AM|Feb 1, 2018, 1 AM|Feb 1, 2018|
|`2007hkhkd`|2007.HK/HKD|Country Garden Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`2018hkhkd`|2018.HK/HKD|AAC Technologies Holdings|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`2318hkhkd`|2318.HK/HKD|Ping An Insurance|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`2388hkhkd`|2388.HK/HKD|BOC Hong Kong (Holdings)|Apr 10, 2018, 1:30:00 AM|Apr 10, 2018, 1:30 AM|Apr 10, 2018, 1 AM|Apr 10, 2018|
|`2628hkhkd`|2628.HK/HKD|China Life Insurance Company|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`3333hkhkd`|3333.HK/HKD|China Evergrande Group|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`3968hkhkd`|3968.HK/HKD|China Merchants Bank|Jan 2, 2018, 1:30:00 AM|Jan 2, 2018, 1:30 AM|Jan 2, 2018, 1 AM|Jan 2, 2018|
|`3988hkhkd`|3988.HK/HKD|Bank of China|Jun 4, 2019, 7:21:06 AM|Jun 4, 2019, 7:21 AM|Jun 4, 2019, 7 AM|Jun 4, 2019|
<h3 id="ireland">Ireland 🇮🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`birgieeur`|BIRG.IE/EUR|Bank Of Ireland Plc|Jun 1, 2020, 7:00:00 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`crgieeur`|CRG.IE/EUR|CRH Plc|Oct 1, 2020, 7:00:00 AM|Oct 1, 2020, 7:00 AM|Oct 1, 2020, 7 AM|Oct 1, 2020|
|`krxieeur`|KRX.IE/EUR|Kingspan Group Plc|Jun 1, 2020, 7:00:01 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`krzieeur`|KRZ.IE/EUR|Kerry Group Plc|Jun 1, 2020, 7:00:01 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`ry4cieeur`|RY4C.IE/EUR|Ryanair Holdings Plc|Oct 1, 2020, 7:00:00 AM|Oct 1, 2020, 7:00 AM|Oct 1, 2020, 7 AM|Oct 1, 2020|
<h3 id="italy">Italy 🇮🇹</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`a2aiteur`|A2A.IT/EUR|A2A Spa|Jun 1, 2020, 7:00:01 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`agliteur`|AGL.IT/EUR|Autogrill Spa|Jun 1, 2020, 7:00:00 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`ampiteur`|AMP.IT/EUR|Amplifon Spa|Jun 1, 2020, 7:00:00 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`atliteur`|ATL.IT/EUR|Atlantia Spa|Jun 1, 2020, 7:00:00 AM|Jun 1, 2020, 7:00 AM|Jun 1, 2020, 7 AM|Jun 1, 2020|
|`azmiteur`|AZM.IT/EUR|Azimut Holding Spa|Jun 1, 2020, 12:00:12 PM|Jun 1, 2020, 12:00 PM|Jun 1, 2020, 12 PM|Jun 1, 2020|
|`bamiiteur`|BAMI.IT/EUR|Banco BPM Spa|Aug 10, 2020, 12:05:04 PM|Aug 10, 2020, 12:05 PM|Aug 10, 2020, 12 PM|Aug 10, 2020|
|`bciteur`|BC.IT/EUR|Brunello Cucinelli Spa|Nov 2, 2020, 12:00:15 PM|Nov 2, 2020, 12:00 PM|Nov 2, 2020, 12 PM|Nov 2, 2020|
|`bmpsiteur`|BMPS.IT/EUR|Banca Monte dei Paschi di Siena Spa|Dec 17, 2020, 2:20:47 PM|Dec 17, 2020, 2:20 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`bpeiteur`|BPE.IT/EUR|Bper Banca Spa|Dec 17, 2020, 2:19:03 PM|Dec 17, 2020, 2:19 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`breiteur`|BRE.IT/EUR|Brembo Spa|Dec 17, 2020, 2:18:20 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`bzuiteur`|BZU.IT/EUR|Buzzi Unicem Spa|Dec 17, 2020, 2:18:14 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`cassiteur`|CASS.IT/EUR|Cattolica Ass Coop A|Dec 17, 2020, 2:20:47 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`cerviteur`|CERV.IT/EUR|Cerved Information Solutions SPA|Dec 17, 2020, 2:19:52 PM|Dec 17, 2020, 2:19 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`cpriteur`|CPR.IT/EUR|Davide Campari-Milano Spa|Dec 17, 2020, 2:18:00 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`cvaliteur`|CVAL.IT/EUR|Credito Valtellinese Spa|Dec 17, 2020, 2:23:52 PM|Dec 17, 2020, 2:23 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`daniteur`|DAN.IT/EUR|Danieli & Co Spa|Dec 17, 2020, 2:30:04 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`diaiteur`|DIA.IT/EUR|Diasorin Spa|Dec 17, 2020, 2:18:15 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`eneliteur`|ENEL.IT/EUR|Enel SpA|Dec 17, 2020, 2:18:14 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`eniiteur`|ENI.IT/EUR|ENI Spa|Dec 17, 2020, 2:18:11 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`ergiteur`|ERG.IT/EUR|ERG Spa|Dec 17, 2020, 2:19:15 PM|Dec 17, 2020, 2:19 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`fbkiteur`|FBK.IT/EUR|FinecoBank Banca Fineco Spa|Dec 17, 2020, 2:18:18 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`fcaiteur`|FCA.IT/EUR|Fiat Chrysler Auto NV|Dec 17, 2020, 2:18:14 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`giteur`|DLG.IT/EUR|Assicurazioni Generali Spa|Dec 17, 2020, 2:17:44 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`igiteur`|IG.IT/EUR|Italgas Spa|Dec 17, 2020, 2:19:04 PM|Dec 17, 2020, 2:19 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`inwiteur`|INW.IT/EUR|Infrastrutture Wireless Italiane Spa|Dec 17, 2020, 2:17:54 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`ispiteur`|ISP.IT/EUR|Intesa Sanpaolo Spa|Dec 17, 2020, 2:18:00 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`juveiteur`|JUVE.IT/EUR|Juventus Football Club Spa|Dec 17, 2020, 2:18:22 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`ldoiteur`|LDO.IT/EUR|Leonardo Spa|Dec 17, 2020, 2:18:09 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`mbiteur`|MB.IT/EUR|Mediobanca Spa|Dec 17, 2020, 2:19:04 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`monciteur`|MONC.IT/EUR|Moncler Spa|Dec 17, 2020, 2:18:12 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`msiteur`|MS.IT/EUR|Mediaset Spa|Dec 17, 2020, 2:22:59 PM|Dec 17, 2020, 2:22 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`piaiteur`|PIA.IT/EUR|Piaggio & C. Spa|Dec 17, 2020, 2:18:15 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`pryiteur`|PRY.IT/EUR|Prysmian Spa|Dec 17, 2020, 2:18:00 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`raceiteur`|RACE.IT/EUR|Ferrari NV|Dec 17, 2020, 2:18:05 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`reciteur`|REC.IT/EUR|Recordati Industria Chimica e Farma Spa|Dec 17, 2020, 2:18:26 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`sferiteur`|SFER.IT/EUR|Salvat Ferragamo Spa|Dec 17, 2020, 2:20:56 PM|Dec 17, 2020, 2:20 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`spmiteur`|SPM.IT/EUR|SAIPEM Spa|Dec 17, 2020, 2:19:00 PM|Dec 17, 2020, 2:19 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`srgiteur`|SRG.IT/EUR|Snam Spa|Dec 17, 2020, 2:19:04 PM|Dec 17, 2020, 2:17 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`srsiteur`|SRS.IT/EUR|Saras Spa|Dec 17, 2020, 2:20:02 PM|Dec 17, 2020, 2:20 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`stmiteur`|STM.IT/EUR|STMicroelectronics NV|Dec 17, 2020, 2:18:18 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`teniteur`|TEN.IT/EUR|Tenaris SA|Dec 17, 2020, 2:18:18 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`tisiteur`|TIS.IT/EUR|Tiscali Spa|Dec 17, 2020, 2:30:05 PM|Dec 17, 2020, 2:30 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`tititeur`|TIT.IT/EUR|Telecom Italia Spa|Dec 17, 2020, 2:18:16 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`toditeur`|TOD.IT/EUR|Tods Spa|Dec 17, 2020, 2:21:31 PM|Dec 17, 2020, 2:21 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`trniteur`|TRN.IT/EUR|Terna Spa|Dec 17, 2020, 2:18:14 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`ucgiteur`|UCG.IT/EUR|UniCredit Spa|Dec 17, 2020, 2:18:08 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`usiteur`|US.IT/EUR|Unipolsai Assicurazioni Spa|Dec 17, 2020, 2:22:52 PM|Dec 17, 2020, 2:22 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
|`wbditeur`|WBD.IT/EUR|WeBuild Spa|Dec 17, 2020, 2:18:28 PM|Dec 17, 2020, 2:18 PM|Dec 17, 2020, 2 PM|Dec 17, 2020|
<h3 id="japan">Japan 🇯🇵</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`2502jpjpy`|2502.JP/JPY|Asahi Group Holdings|Sep 26, 2018, 12:01:30 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`2503jpjpy`|2503.JP/JPY|Kirin Brewery Co|Sep 26, 2018, 12:01:57 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`2914jpjpy`|2914.JP/JPY|Japan Tobacco|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`3382jpjpy`|3382.JP/JPY|Seven and I Holdings|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`3436jpjpy`|3436.JP/JPY|Sumco Corp|Sep 26, 2018, 12:00:25 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`4004jpjpy`|4004.JP/JPY|Showa Denko|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4005jpjpy`|4005.JP/JPY|Sumitomo Chemical|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4063jpjpy`|4063.JP/JPY|Shin-Etsu Chemical|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4452jpjpy`|4452.JP/JPY|Kao Corp|Sep 26, 2018, 12:05:04 AM|Sep 26, 2018, 12:05 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`4502jpjpy`|4502.JP/JPY|Takeda|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4503jpjpy`|4503.JP/JPY|Astellas Pharma|Sep 26, 2018, 12:00:39 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`4507jpjpy`|4507.JP/JPY|Shionogi|Sep 26, 2018, 12:02:19 AM|Sep 26, 2018, 12:02 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`4523jpjpy`|4523.JP/JPY|Eisai|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4543jpjpy`|4543.JP/JPY|Terumo Corp|Sep 26, 2018, 12:01:16 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`4689jpjpy`|4689.JP/JPY|Yahoo Japan Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`4911jpjpy`|4911.JP/JPY|Shiseido|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`5108jpjpy`|5108.JP/JPY|Bridgestone Corp|Sep 26, 2018, 12:00:08 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`5301jpjpy`|5301.JP/JPY|Tokai Carbon|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`5401jpjpy`|5401.JP/JPY|Nippon Steel Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6098jpjpy`|6098.JP/JPY|Recruit Holdings Co Ltd|Sep 26, 2018, 12:06:10 AM|Sep 26, 2018, 12:06 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6301jpjpy`|6301.JP/JPY|Komatsu|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6367jpjpy`|6367.JP/JPY|Daikin Industries|Sep 26, 2018, 12:02:03 AM|Sep 26, 2018, 12:02 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6501jpjpy`|6501.JP/JPY|Hitachi|Sep 26, 2018, 12:02:24 AM|Sep 26, 2018, 12:02 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6502jpjpy`|6502.JP/JPY|Toshiba Corp|Sep 26, 2018, 12:01:42 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6503jpjpy`|6503.JP/JPY|Mitsubishi Electric Corp|Sep 26, 2018, 12:06:50 AM|Sep 26, 2018, 12:06 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6506jpjpy`|6506.JP/JPY|Yaskawa Electric Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6702jpjpy`|6702.JP/JPY|Fujitsu|Sep 26, 2018, 12:00:29 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6752jpjpy`|6752.JP/JPY|Panasonic Corp|Sep 26, 2018, 12:00:12 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`6758jpjpy`|6758.JP/JPY|Sony Corp Japan|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6762jpjpy`|6762.JP/JPY|TDK Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6902jpjpy`|6902.JP/JPY|Denso Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6954jpjpy`|6954.JP/JPY|Fanuc|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`6971jpjpy`|6971.JP/JPY|Kyocera|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`7201jpjpy`|7201.JP/JPY|Nissan Motor Co|Sep 26, 2018, 12:00:11 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`7203jpjpy`|7203.JP/JPY|Toyota Motor Corp|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`7261jpjpy`|7261.JP/JPY|Mazda Motor|Sep 26, 2018, 12:01:03 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`7267jpjpy`|7267.JP/JPY|Honda Motor Company|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`7269jpjpy`|7269.JP/JPY|Suzuki Motor Corp|Sep 26, 2018, 12:07:44 AM|Sep 26, 2018, 12:07 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`7270jpjpy`|7270.JP/JPY|Subaru Corporation|Sep 26, 2018, 12:01:15 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`7751jpjpy`|7751.JP/JPY|Canon|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`7974jpjpy`|7974.JP/JPY|Nintendo Co Ltd|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`8031jpjpy`|8031.JP/JPY|Mitsui and Company|Sep 26, 2018, 12:01:57 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`8035jpjpy`|8035.JP/JPY|Tokyo Electron|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`8306jpjpy`|8306.JP/JPY|Mitsubishi UFJ Financial Group|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`8316jpjpy`|8316.JP/JPY|Sumitomo Mitsui Financial Group|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`8411jpjpy`|8411.JP/JPY|Mizuho Financial Group|Sep 26, 2018, 12:02:27 AM|Sep 26, 2018, 12:02 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`8766jpjpy`|8766.JP/JPY|Tokio Marine Holdings|Sep 26, 2018, 12:01:29 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`8801jpjpy`|8801.JP/JPY|Mitsui Fudosan Company|Sep 26, 2018, 12:01:18 AM|Sep 26, 2018, 12:01 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`8802jpjpy`|8802.JP/JPY|Mitsubishi Estate Company|Sep 26, 2018, 12:00:15 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`9020jpjpy`|9020.JP/JPY|East Japan Railway Company|Sep 26, 2018, 12:05:52 AM|Sep 26, 2018, 12:05 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`9432jpjpy`|9432.JP/JPY|Nippon Telegraph and Tel|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`9433jpjpy`|9433.JP/JPY|KDDI Corp|Sep 26, 2018, 12:16:21 AM|Sep 26, 2018, 12:16 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
|`9501jpjpy`|9501.JP/JPY|Tokyo Electric Power Company|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`9983jpjpy`|9983.JP/JPY|Fast Retailing|Sep 21, 2018, 12:00:00 AM|Sep 21, 2018, 12:00 AM|Sep 21, 2018, 12 AM|Sep 21, 2018|
|`9984jpjpy`|9984.JP/JPY|Softbank Group Corp|Sep 21, 2018, 12:00:00 AM|Sep 26, 2018, 12:00 AM|Sep 26, 2018, 12 AM|Sep 26, 2018|
<h3 id="netherlands">Netherlands 🇳🇱</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`agnnleur`|AGN.NL/EUR|Aegon NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ahnleur`|AH.NL/EUR|Koninklijke Ahold Delhaize NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`akzanleur`|AKZA.NL/EUR|Akzo Nobel NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`asmlnleur`|ASML.NL/EUR|ASML Holding NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`dsmnleur`|DSM.NL/EUR|Koninklijke DSM NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`heianleur`|HEIA.NL/EUR|Heineken NV|Nov 14, 2016, 11:24:14 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`inganleur`|INGA.NL/EUR|ING Groep NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jul 22, 2016, 7 AM|Jul 22, 2016|
|`kpnnleur`|KPN.NL/EUR|Koninklijke KPN NV|Nov 14, 2016, 11:24:21 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`mtnleur`|MT.NL/EUR|ArcelorMittal|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`phianleur`|PHIA.NL/EUR|Koninklijke Philips NV|Nov 9, 2016, 2:27:19 PM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`randnleur`|RAND.NL/EUR|Randstad Holding NV|Nov 14, 2016, 11:24:34 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rdsanleur`|RDSA.NL/EUR|Royal Dutch Shell PLC|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rennleur`|REN.NL/EUR|RELX NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jul 20, 2015, 7 AM|Jul 20, 2015|
|`unanleur`|UNA.NL/EUR|Unilever NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`vpknleur`|VPK.NL/EUR|Koninklijke Vopak NV|Nov 14, 2016, 11:24:14 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`wklnleur`|WKL.NL/EUR|Wolters Kluwer NV|Nov 14, 2016, 11:24:13 AM|Nov 14, 2016, 11:24 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="norway">Norway 🇳🇴</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dnbnonok`|DNB.NO/NOK|DNB ASA|Nov 14, 2016, 11:25:59 AM|Nov 14, 2016, 11:25 AM|Nov 15, 2011, 8 AM|Nov 15, 2011|
|`mhgnonok`|MHG.NO/NOK|Marine Harvest ASA|Nov 14, 2016, 11:26:00 AM|Nov 14, 2016, 11:26 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`nhynonok`|NHY.NO/NOK|Norsk Hydro ASA|Nov 14, 2016, 11:25:59 AM|Nov 14, 2016, 11:25 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`orknonok`|ORK.NO/NOK|Orkla ASA|Nov 14, 2016, 11:25:58 AM|Nov 14, 2016, 11:25 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`stlnonok`|STL.NO/NOK|Statoil ASA|Nov 14, 2016, 11:25:59 AM|Nov 14, 2016, 11:25 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`telnonok`|TEL.NO/NOK|Telenor ASA|Nov 14, 2016, 11:26:39 AM|Nov 14, 2016, 11:26 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="portugal">Portugal 🇵🇹</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`edppteur`|EDP.PT/EUR|EDP - Energias de Portugal SA|Nov 14, 2016, 3:55:01 PM|Nov 14, 2016, 3:55 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`galppteur`|GALP.PT/EUR|Galp Energia SGPS SA|Nov 14, 2016, 3:55:01 PM|Nov 14, 2016, 3:54 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="spain">Spain 🇪🇸</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`acseseur`|ACS.ES/EUR|ACS Actividades de Construccion y Servicios SA|Nov 14, 2016, 11:23:20 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`acxeseur`|ACX.ES/EUR|Acerinox SA|Nov 14, 2016, 11:23:18 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`aenaeseur`|AENA.ES/EUR|Aena SA|Nov 14, 2016, 11:23:18 AM|Nov 14, 2016, 11:23 AM|Feb 11, 2015, 11 AM|Feb 11, 2015|
|`amseseur`|AMS.ES/EUR|Amadeus IT Holding SA|Nov 14, 2016, 11:23:28 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`bbvaeseur`|BBVA.ES/EUR|Banco Bilbao Vizcaya Argentaria SA|Nov 14, 2016, 11:23:14 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`cabkeseur`|CABK.ES/EUR|CaixaBank|Nov 14, 2016, 11:23:16 AM|Nov 14, 2016, 11:23 AM|Jul 1, 2011, 7 AM|Jul 1, 2011|
|`diaeseur`|DIA.ES/EUR|Distribuidora Internacional de Alimentacion SA|Nov 14, 2016, 11:24:03 AM|Nov 14, 2016, 11:24 AM|Jul 5, 2011, 10 AM|Jul 5, 2011|
|`eleeseur`|ELE.ES/EUR|Endesa SA|Nov 14, 2016, 11:23:18 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`engeseur`|ENG.ES/EUR|Enagas SA|Nov 14, 2016, 11:23:13 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`fereseur`|FER.ES/EUR|Ferrovial SA|Nov 14, 2016, 11:23:12 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`gameseur`|GAM.ES/EUR|Gamesa Corporacion Tecnologica SA|Nov 14, 2016, 11:23:13 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`gaseseur`|GAS.ES/EUR|Gas Natural SDG SA|Nov 14, 2016, 11:23:15 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ibeeseur`|IBE.ES/EUR|Iberdrola SA|Nov 14, 2016, 11:23:15 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`itxeseur`|ITX.ES/EUR|Inditex SA|Nov 14, 2016, 11:23:13 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`reeeseur`|REE.ES/EUR|Red Electrica Corp SA|Nov 14, 2016, 11:23:34 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`repeseur`|REP.ES/EUR|Repsol SA|Nov 14, 2016, 11:23:14 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`saneseur`|SAN.ES/EUR|Banco Santander SA|Nov 14, 2016, 11:23:12 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tefeseur`|TEF.ES/EUR|Telefonica SA|Nov 14, 2016, 11:23:23 AM|Nov 14, 2016, 11:23 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="sweden">Sweden 🇸🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abbsesek`|ABB.SE/SEK|ABB Ltd|Nov 14, 2016, 4:09:04 PM|Nov 14, 2016, 4:09 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`alfasesek`|ALFA.SE/SEK|Alfa Laval AB|Nov 7, 2016, 8:01:35 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`atcoasesek`|ATCOA.SE/SEK|Atlas Copco AB|Nov 14, 2016, 4:09:03 PM|Nov 14, 2016, 4:09 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`eluxbsesek`|ELUXB.SE/SEK|Electrolux AB|Nov 7, 2016, 8:01:01 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ericbsesek`|ERICB.SE/SEK|Telefonaktiebolaget LM Ericsson|Nov 14, 2016, 4:09:02 PM|Nov 14, 2016, 4:09 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`getibsesek`|GETIB.SE/SEK|Getinge AB|Nov 7, 2016, 8:01:05 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`hmbsesek`|HMB.SE/SEK|Hennes & Mauritz AB|Nov 7, 2016, 8:01:34 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`invebsesek`|INVEB.SE/SEK|Investor AB|Nov 14, 2016, 4:09:08 PM|Nov 14, 2016, 4:09 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`ndasesek`|NDA.SE/SEK|Nordea Bank AB|Nov 7, 2016, 8:01:06 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sandsesek`|SAND.SE/SEK|Sandvik AB|Nov 7, 2016, 8:01:02 AM|Nov 8, 2016, 8:02 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`scabsesek`|SCAB.SE/SEK|Svenska Cellulosa AB|Nov 7, 2016, 8:01:00 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sebasesek`|SEBA.SE/SEK|Skandinaviska Enskilda Banken AB|Nov 14, 2016, 4:09:02 PM|Nov 14, 2016, 4:09 PM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`secubsesek`|SECUB.SE/SEK|Securitas AB|Nov 7, 2016, 8:01:21 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`skabsesek`|SKAB.SE/SEK|Skanska AB|Nov 7, 2016, 8:01:21 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`skfbsesek`|SKFB.SE/SEK|SKF AB|Nov 7, 2016, 8:01:00 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`swedasesek`|SWEDA.SE/SEK|Swedbank AB|Nov 7, 2016, 8:01:59 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`swmasesek`|SWMA.SE/SEK|Swedish Match AB|Nov 7, 2016, 8:01:05 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tel2bsesek`|TEL2B.SE/SEK|Tele2 AB|Nov 7, 2016, 8:01:03 AM|Nov 8, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`tlsnsesek`|TLSN.SE/SEK|Telia Company AB|Nov 14, 2016, 4:09:02 PM|Nov 14, 2016, 4:09 PM|Apr 18, 2016, 7 AM|Apr 18, 2016|
|`volvbsesek`|VOLVB.SE/SEK|Volvo AB|Nov 7, 2016, 8:01:18 AM|Nov 7, 2016, 8:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="switzerland">Switzerland 🇨🇭</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abbnchchf`|ABBN.CH/CHF|ABB Ltd|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`adenchchf`|ADEN.CH/CHF|Adecco SA|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`baerchchf`|BAER.CH/CHF|Julius Baer Group Ltd|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`clnchchf`|CLN.CH/CHF|Clariant AG|Jun 16, 2015, 7:01:51 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`csgnchchf`|CSGN.CH/CHF|Credit Suisse Group AG|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`givnchchf`|GIVN.CH/CHF|Givaudan SA|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`kninchchf`|KNIN.CH/CHF|Kuehne + Nagel International AG|Jun 17, 2015, 7:01:14 AM|Jun 17, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`lhnchchf`|LHN.CH/CHF|Lafarge Holcim Ltd|Jun 17, 2015, 7:01:14 AM|Jun 17, 2015, 7:01 AM|Jun 17, 2015, 7 AM|Jun 17, 2015|
|`lonnchchf`|LONN.CH/CHF|Lonza Group AG|Jun 16, 2015, 7:01:50 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`nesnchchf`|NESN.CH/CHF|Nestle SA|Jun 16, 2015, 7:01:52 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`novnchchf`|NOVN.CH/CHF|Novartis AG|Jun 16, 2015, 7:01:51 AM|Jun 16, 2015, 7:01 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`rogchchf`|ROG.CH/CHF|Roche Holding AG|Jul 3, 2015, 7:00:16 AM|Jul 3, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`scmnchchf`|SCMN.CH/CHF|Swisscom AG|Jul 3, 2015, 7:00:16 AM|Jul 3, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`sgsnchchf`|SGSN.CH/CHF|SGS SA|Aug 6, 2015, 7:00:11 AM|Aug 6, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`slhnchchf`|SLHN.CH/CHF|Swiss Life Holding AG|Aug 6, 2015, 7:00:11 AM|Aug 6, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`soonchchf`|SOON.CH/CHF|Sonova Holding AG|Aug 7, 2015, 7:00:48 AM|Aug 7, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`srenchchf`|SREN.CH/CHF|Swiss Re AG|Aug 6, 2015, 7:00:11 AM|Aug 6, 2015, 7:00 AM|May 23, 2011, 7 AM|May 23, 2011|
|`ubsgchchf`|UBSG.CH/CHF|UBS Group AG|Jun 15, 2015, 7:00:43 AM|Jun 15, 2015, 7:00 AM|Nov 28, 2014, 8 AM|Nov 28, 2014|
|`uhrchchf`|UHR.CH/CHF|Swatch Group AG/The|Aug 7, 2015, 3:45:00 AM|Aug 7, 2015, 3:45 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
|`zurnchchf`|ZURN.CH/CHF|Zurich Insurance Group AG|Aug 7, 2015, 7:00:49 AM|Aug 7, 2015, 7:00 AM|Jan 3, 2011, 8 AM|Jan 3, 2011|
<h3 id="uk">United Kingdom 🇬🇧</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`aalgbgbx`|AAL.GB/GBX|Anglo American PLC|Aug 25, 2015, 7:00:26 AM|Aug 10, 2016, 8:02 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`abfgbgbx`|ABF.GB/GBX|Associated British Foods PLC|Sep 6, 2016, 7:00:11 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`admgbgbx`|ADM.GB/GBX|Admiral Group PLC|Sep 6, 2016, 7:00:06 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`agkgbgbx`|AGK.GB/GBX|Aggreko PLC|Sep 6, 2016, 7:00:28 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`ahtgbgbx`|AHT.GB/GBX|Ashtead Group PLC|Sep 6, 2016, 7:00:06 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`antogbgbx`|ANTO.GB/GBX|Antofagasta PLC|Sep 6, 2016, 7:00:11 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`avgbgbx`|AV.GB/GBX|Aviva PLC|Sep 6, 2016, 7:00:10 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`azngbgbx`|AZN.GB/GBX|AstraZeneca PLC|Sep 6, 2016, 7:00:22 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`bagbgbx`|BA.GB/GBX|BAE Systems PLC|Sep 6, 2016, 7:00:02 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`babgbgbx`|BAB.GB/GBX|Babcock International Group PLC|Sep 6, 2016, 7:00:26 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`barcgbgbx`|BARC.GB/GBX|Barclays PLC|Sep 6, 2016, 7:00:29 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`batsgbgbx`|BATS.GB/GBX|British American Tobacco PLC|Sep 6, 2016, 7:00:28 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`blndgbgbx`|BLND.GB/GBX|British Land Co PLC|Sep 6, 2016, 7:00:26 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`bltgbgbx`|BLT.GB/GBX|BHP Billiton PLC|Sep 6, 2016, 7:00:00 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`bnzlgbgbx`|BNZL.GB/GBX|Bunzl PLC|Sep 6, 2016, 7:00:26 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`bpgbgbx`|BP.GB/GBX|BP PLC|Sep 6, 2016, 7:00:11 AM|Sep 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`brbygbgbx`|BRBY.GB/GBX|Burberry Group PLC|Jul 8, 2016, 2:48:38 PM|Jul 8, 2016, 2:48 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`btgbgbx`|BT.GB/GBX|BT Group PLC|Jul 7, 2016, 9:19:45 AM|Jul 7, 2016, 9:19 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`cclgbgbx`|CCL.GB/GBX|Carnival PLC|Jul 6, 2016, 7:08:16 AM|Jul 6, 2016, 7:08 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`cnagbgbx`|CNA.GB/GBX|Centrica PLC|Jul 7, 2016, 9:19:47 AM|Jul 7, 2016, 9:19 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`cpggbgbx`|CPG.GB/GBX|Compass Group PLC|Jul 8, 2016, 2:48:50 PM|Jul 8, 2016, 2:48 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`cpigbgbx`|CPI.GB/GBX|Capita PLC|Jul 7, 2016, 9:19:50 AM|Jul 7, 2016, 9:19 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`crdagbgbx`|CRDA.GB/GBX|Croda International PLC|Nov 1, 2016, 10:17:55 AM|Nov 1, 2016, 10:17 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`crhgbgbx`|CRH.GB/GBX|CRH PLC|Jan 5, 2017, 8:02:03 AM|Jan 5, 2017, 8:02 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`dgegbgbx`|DGE.GB/GBX|Diageo PLC|Jul 6, 2016, 7:08:09 AM|Jul 6, 2016, 7:08 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`expngbgbx`|EXPN.GB/GBX|Experian PLC|Jul 8, 2016, 2:49:01 PM|Jul 8, 2016, 2:49 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`ezjgbgbx`|EZJ.GB/GBX|easyJet PLC|Jul 8, 2016, 2:49:03 PM|Jul 8, 2016, 2:49 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`fresgbgbx`|FRES.GB/GBX|Fresnillo PLC|Jul 7, 2016, 9:20:18 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`gfsgbgbx`|GFS.GB/GBX|G4S PLC|Jul 7, 2016, 9:20:10 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`glengbgbx`|GLEN.GB/GBX|Glencore PLC|Jul 7, 2016, 9:44:38 AM|Jul 7, 2016, 9:44 AM|May 19, 2011, 8 AM|May 19, 2011|
|`gskgbgbx`|GSK.GB/GBX|GlaxoSmithKline PLC|Jul 6, 2016, 7:00:45 AM|Jul 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`hmsogbgbx`|HMSO.GB/GBX|Hammerson PLC|Jul 7, 2016, 9:20:09 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`hsbagbgbx`|HSBA.GB/GBX|HSBC Holdings PLC|Jul 7, 2016, 9:20:08 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`iaggbgbx`|IAG.GB/GBX|International Consolidated Airlines Grou|Nov 8, 2016, 1:50:55 PM|Nov 8, 2016, 1:50 PM|Jan 24, 2011, 8 AM|Jan 24, 2011|
|`ihggbgbx`|IHG.GB/GBX|InterContinental Hotels Group PLC|Nov 1, 2016, 8:37:29 AM|Nov 1, 2016, 8:37 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`imtgbgbx`|IMT.GB/GBX|Imperial Brands Plc|Jul 6, 2016, 7:03:22 AM|Jul 6, 2016, 7:03 AM|Feb 8, 2016, 8 AM|Feb 8, 2016|
|`itrkgbgbx`|ITRK.GB/GBX|Intertek Group PLC|Jul 6, 2016, 7:14:52 AM|Jul 6, 2016, 7:14 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`itvgbgbx`|ITV.GB/GBX|ITV PLC|Jul 7, 2016, 9:20:45 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`kgfgbgbx`|KGF.GB/GBX|Kingfisher PLC|Jul 7, 2016, 9:20:37 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`landgbgbx`|LAND.GB/GBX|Land Securities Group PLC|Jul 7, 2016, 9:20:55 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`lgengbgbx`|LGEN.GB/GBX|Legal & General Group PLC|Jul 7, 2016, 9:20:45 AM|Jul 7, 2016, 9:20 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`lloygbgbx`|LLOY.GB/GBX|Lloyds Banking Group PLC|Jul 8, 2016, 2:50:03 PM|Jul 8, 2016, 2:50 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`lsegbgbx`|LSE.GB/GBX|London Stock Exchange Group PLC|Jul 6, 2016, 7:34:44 AM|Jul 6, 2016, 7:34 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`mksgbgbx`|MKS.GB/GBX|Marks & Spencer Group PLC|Jul 7, 2016, 9:21:52 AM|Jul 7, 2016, 9:21 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`mndigbgbx`|MNDI.GB/GBX|Mondi PLC|Jul 8, 2016, 2:50:16 PM|Jul 8, 2016, 2:50 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`mrwgbgbx`|MRW.GB/GBX|WM Morrison Supermarkets PLC|Jul 7, 2016, 9:22:39 AM|Jul 7, 2016, 9:22 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`nggbgbx`|NG.GB/GBX|National Grid PLC|Jul 7, 2016, 9:21:30 AM|Jul 7, 2016, 9:21 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`nxtgbgbx`|NXT.GB/GBX|Next PLC|Jul 6, 2016, 7:00:20 AM|Jul 6, 2016, 7:00 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`pfcgbgbx`|PFC.GB/GBX|Petrofac Ltd|Jul 8, 2016, 2:50:28 PM|Jul 8, 2016, 2:50 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`prugbgbx`|PRU.GB/GBX|Prudential PLC|Jul 7, 2016, 9:21:12 AM|Jul 7, 2016, 9:21 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`psngbgbx`|PSN.GB/GBX|Persimmon PLC|Jul 8, 2016, 2:50:33 PM|Jul 8, 2016, 2:50 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`psongbgbx`|PSON.GB/GBX|Pearson PLC|Jul 7, 2016, 9:23:09 AM|Jul 7, 2016, 9:23 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`rbgbgbx`|RB.GB/GBX|Reckitt Benckiser Group PLC|Jul 6, 2016, 7:03:30 AM|Jul 6, 2016, 7:03 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`rbsgbgbx`|RBS.GB/GBX|Royal Bank of Scotland Group PLC|Jul 8, 2016, 11:42:35 AM|Jul 8, 2016, 11:42 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`rdsbgbgbx`|RDSB.GB/GBX|Royal Dutch Shell PLC|Nov 1, 2016, 10:04:45 AM|Nov 1, 2016, 10:04 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`relgbgbx`|REL.GB/GBX|Reed Elsevier PLC|Jul 8, 2016, 2:50:53 PM|Jul 8, 2016, 2:50 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`riogbgbx`|RIO.GB/GBX|Rio Tinto PLC|Jul 6, 2016, 7:08:00 AM|Jul 6, 2016, 7:08 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`rmggbgbx`|RMG.GB/GBX|Royal Mail PLC|Jul 7, 2016, 9:24:51 AM|Jul 7, 2016, 9:24 AM|Oct 11, 2013, 8 AM|Oct 11, 2013|
|`rrgbgbx`|RR.GB/GBX|Rolls-Royce Holdings PLC|Jul 8, 2016, 2:51:03 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`rsagbgbx`|RSA.GB/GBX|RSA Insurance Group PLC|Jul 7, 2016, 9:21:45 AM|Jul 7, 2016, 9:21 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`sbrygbgbx`|SBRY.GB/GBX|J Sainsbury PLC|Jul 7, 2016, 9:22:39 AM|Jul 7, 2016, 9:22 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`sgegbgbx`|SGE.GB/GBX|Sage Group PLC/The|Jul 8, 2016, 2:51:23 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`skygbgbx`|SKY.GB/GBP|Sky Plc|Jul 7, 2016, 9:22:29 AM|Jul 7, 2016, 9:22 AM|Nov 14, 2014, 8 AM|Nov 14, 2014|
|`slagbgbx`|SLA.GB/GBX|Standard Life Aberdeen Plc|Sep 5, 2017, 12:47:07 PM|Sep 5, 2017, 12:47 PM|Sep 5, 2017, 12 PM|Sep 5, 2017|
|`smingbgbx`|SMIN.GB/GBX|Smiths Group PLC|Jul 8, 2016, 2:51:38 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`sngbgbx`|SN.GB/GBX|Smith & Nephew PLC|Jul 8, 2016, 2:51:42 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`ssegbgbx`|SSE.GB/GBX|SSE PLC|Jul 8, 2016, 2:51:48 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`stangbgbx`|STAN.GB/GBX|Standard Chartered PLC|Jul 7, 2016, 9:22:15 AM|Jul 7, 2016, 9:22 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`svtgbgbx`|SVT.GB/GBX|Severn Trent PLC|Jul 6, 2016, 7:05:34 AM|Jul 6, 2016, 7:05 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`tategbgbx`|TATE.GB/GBX|Tate & Lyle PLC|Jul 8, 2016, 2:51:53 PM|Jul 8, 2016, 2:51 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`tlwgbgbx`|TLW.GB/GBX|Tullow Oil PLC|Jul 7, 2016, 9:22:26 AM|Jul 7, 2016, 9:22 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`tpkgbgbx`|TPK.GB/GBX|Travis Perkins PLC|Jul 8, 2016, 2:52:02 PM|Jul 8, 2016, 2:52 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`tscogbgbx`|TSCO.GB/GBX|Tesco PLC|Jul 8, 2016, 2:52:03 PM|Jul 8, 2016, 2:52 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`ulvrgbgbx`|ULVR.GB/GBX|Unilever PLC|Jul 6, 2016, 7:02:51 AM|Jul 6, 2016, 7:02 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`uugbgbx`|UU.GB/GBX|United Utilities Group PLC|Jul 8, 2016, 3:02:48 PM|Jul 8, 2016, 3:02 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`vodgbgbx`|VOD.GB/GBX|Vodafone Group PLC|Jul 7, 2016, 9:22:48 AM|Jul 7, 2016, 9:22 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`weirgbgbx`|WEIR.GB/GBX|Weir Group PLC/The|Jul 8, 2016, 2:52:20 PM|Jul 8, 2016, 2:52 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`wosgbgbx`|WOS.GB/GBX|Wolseley PLC|Jul 6, 2016, 7:08:57 AM|Jul 6, 2016, 7:08 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`wppgbgbx`|WPP.GB/GBX|WPP PLC|Jul 8, 2016, 12:41:45 PM|Jul 8, 2016, 12:41 PM|Jan 4, 2011, 8 AM|Jan 4, 2011|
|`wtbgbgbx`|WTB.GB/GBX|Whitbread PLC|Jul 6, 2016, 7:09:30 AM|Jul 6, 2016, 7:09 AM|Jan 4, 2011, 8 AM|Jan 4, 2011|
<h3 id="us">United States 🇺🇸</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`aususd`|A.US/USD|AGILENT TECHNOLOGIES INC|May 25, 2017, 2:30:00 PM|May 25, 2017, 2:30 PM|May 25, 2017, 2 PM|May 25, 2017|
|`aaususd`|AA.US/USD|ALCOA INC|Jan 30, 2018, 5:32:23 PM|Jan 30, 2018, 5:32 PM|Jan 30, 2018, 5 PM|Jan 30, 2018|
|`aabvususd`|AABV.US/USD|AbbVie Inc|Oct 1, 2020, 1:30:00 PM|Oct 1, 2020, 1:30 PM|Oct 1, 2020, 2 PM|Oct 1, 2020|
|`aalususd`|AAL.US/USD|AMERICAN AIRLINES GROUP INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`aaplususd`|AAPL.US/USD|APPLE INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`abcususd`|ABC.US/USD|AMERISOURCEBERGEN CORP|Jan 30, 2018, 4:01:31 PM|Jan 30, 2018, 4:01 PM|Jan 30, 2018, 4 PM|Jan 30, 2018|
|`abevususd`|ABEV.US/USD|Ambev S.A.|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`abtususd`|ABT.US/USD|ABBOTT LABORATORIES|May 11, 2017, 1:30:39 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`adbeususd`|ADBE.US/USD|ADOBE SYSTEMS INC|May 11, 2017, 1:30:10 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`adiususd`|ADI.US/USD|ANALOG DEVICES INC|Jan 30, 2018, 4:05:35 PM|Jan 30, 2018, 4:05 PM|Jan 30, 2018, 4 PM|Jan 30, 2018|
|`adpususd`|ADP.US/USD|AUTOMATIC DATA PROCESSING|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`adskususd`|ADSK.US/USD|AUTODESK INC|Jan 30, 2018, 4:19:51 PM|Jan 30, 2018, 4:19 PM|Jan 30, 2018, 4 PM|Jan 30, 2018|
|`aepususd`|AEP.US/USD|AMERICAN ELECTRIC POWER|Sep 26, 2016, 2:30:34 PM|Sep 26, 2016, 2:30 PM|Sep 26, 2016, 2 PM|Sep 26, 2016|
|`aigususd`|AIG.US/USD|AMERICAN INTERNATIONAL GROUP|May 11, 2017, 1:30:33 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`allususd`|ALL.US/USD|ALLSTATE CORP|Jan 31, 2018, 3:21:15 PM|Jan 31, 2018, 3:21 PM|Jan 31, 2018, 3 PM|Jan 31, 2018|
|`alxnususd`|ALXN.US/USD|ALEXION PHARMACEUTICALS INC|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`amatususd`|AMAT.US/USD|APPLIED MATERIALS INC|May 11, 2017, 1:30:03 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`amdususd`|AMD.US/USD|ADVANCED MICRO DEVICES|Nov 2, 2017, 1:41:48 PM|Nov 2, 2017, 1:41 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`amgnususd`|AMGN.US/USD|AMGEN INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`ampususd`|AMP.US/USD|AMERIPRISE FINANCIAL INC|Jan 31, 2018, 4:29:54 PM|Jan 31, 2018, 4:29 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`amtususd`|AMT.US/USD|AMERICAN TOWER CORP|Nov 2, 2017, 1:43:08 PM|Nov 2, 2017, 1:43 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`amwlususd`|AMWL.US/USD|American Well Corp Class A|Oct 1, 2020, 1:30:00 PM|Oct 1, 2020, 1:30 PM|Oct 1, 2020, 2 PM|Oct 1, 2020|
|`amznususd`|AMZN.US/USD|AMAZON.COM INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`antmususd`|ANTM.US/USD|ANTHEM INC|Nov 2, 2017, 1:44:13 PM|Nov 2, 2017, 1:44 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`apaususd`|APA.US/USD|APACHE CORP|Jan 31, 2018, 4:35:03 PM|Jan 31, 2018, 4:35 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`apdususd`|APD.US/USD|AIR PRODUCTS & CHEMICALS INC|Nov 2, 2017, 1:47:10 PM|Nov 2, 2017, 1:47 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`atviususd`|ATVI.US/USD|ACTIVISION BLIZZARD INC|May 11, 2017, 1:30:07 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`avbususd`|AVB.US/USD|AVALONBAY COMMUNITIES INC|Jan 31, 2018, 4:35:58 PM|Jan 31, 2018, 4:35 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`avgoususd`|AVGO.US/USD|Broadcom Limited|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`axpususd`|AXP.US/USD|AMERICAN EXPRESS CO|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`aznususd`|AZN.US/USD|AstraZeneca PLC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`azoususd`|AZO.US/USD|AUTOZONE INC|Nov 2, 2017, 1:49:57 PM|Nov 2, 2017, 1:49 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`baususd`|BA.US/USD|Boeing Co|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`babaususd`|BABA.US/USD|ALIBABA GROUP HOLDING-SP ADR|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`bacususd`|BAC.US/USD|BANK OF AMERICA CORP|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`bbdususd`|BBD.US/USD|Banco Bradesco S.A.|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`bbyususd`|BBY.US/USD|BEST BUY CO INC|May 11, 2017, 1:30:12 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`bdxususd`|BDX.US/USD|BECTON DICKINSON AND CO|Jan 31, 2018, 4:41:01 PM|Jan 31, 2018, 4:40 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`biduususd`|BIDU.US/USD|BAIDU INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`biibususd`|BIIB.US/USD|BIOGEN INC|May 11, 2017, 1:30:07 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`bkususd`|BK.US/USD|BANK OF NEW YORK MELLON CORP|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`bmyususd`|BMY.US/USD|BRISTOL-MYERS SQUIBB CO|May 11, 2017, 1:31:06 PM|May 11, 2017, 1:31 PM|May 11, 2017, 1 PM|May 11, 2017|
|`bpususd`|BP.US/USD|BP p.l.c.|Jan 31, 2018, 4:45:44 PM|Jan 31, 2018, 4:45 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`brkbususd`|BRKB.US/USD|BERKSHIRE HATHAWAY INC-CL B|Nov 6, 2017, 2:30:01 PM|Nov 6, 2017, 2:30 PM|Nov 6, 2017, 2 PM|Nov 6, 2017|
|`bsxususd`|BSX.US/USD|BOSTON SCIENTIFIC CORP|May 11, 2017, 1:30:08 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`cususd`|C.US/USD|CITIGROUP INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`cagususd`|CAG.US/USD|CONAGRA FOODS INC|Jan 31, 2018, 4:46:49 PM|Jan 31, 2018, 4:46 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`cahususd`|CAH.US/USD|CARDINAL HEALTH INC|Jan 31, 2018, 4:47:57 PM|Jan 31, 2018, 4:47 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`catususd`|CAT.US/USD|CATERPILLAR INC|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`cernususd`|CERN.US/USD|CERNER CORP|May 18, 2018, 1:30:00 PM|May 18, 2018, 1:30 PM|May 18, 2018, 1 PM|May 18, 2018|
|`cfususd`|CF.US/USD|CF INDUSTRIES HOLDINGS INC|Jan 31, 2018, 4:49:59 PM|Jan 31, 2018, 4:49 PM|Jan 31, 2018, 4 PM|Jan 31, 2018|
|`ciususd`|CI.US/USD|CIGNA CORP|May 11, 2017, 1:30:06 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`clususd`|CL.US/USD|COLGATE-PALMOLIVE CO|Nov 2, 2017, 1:56:31 PM|Nov 2, 2017, 1:56 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`cmcsaususd`|CMCSA.US/USD|COMCAST CORP-CLASS A|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`cmeususd`|CME.US/USD|CME GROUP INC|May 11, 2017, 1:30:08 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`cmgususd`|CMG.US/USD|CHIPOTLE MEXICAN GRILL INC|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`cmiususd`|CMI.US/USD|CUMMINS INC|Feb 1, 2018, 2:34:59 PM|Feb 1, 2018, 2:34 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`cofususd`|COF.US/USD|CAPITAL ONE FINANCIAL CORP|May 18, 2018, 1:30:02 PM|May 18, 2018, 1:30 PM|May 18, 2018, 1 PM|May 18, 2018|
|`copususd`|COP.US/USD|CONOCOPHILLIPS|Nov 2, 2017, 1:57:41 PM|Nov 2, 2017, 1:57 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`costususd`|COST.US/USD|COSTCO WHOLESALE CORP|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`crmususd`|CRM.US/USD|SALESFORCE.COM INC|May 11, 2017, 1:30:14 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`csususd`|CS.US/USD|Credit Suisse Group AG|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`cscoususd`|CSCO.US/USD|CISCO SYSTEMS INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`csxususd`|CSX.US/USD|CSX CORP|Nov 2, 2017, 1:58:24 PM|Nov 2, 2017, 1:58 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`ctlususd`|CTL.US/USD|CENTURYLINK INC|Nov 2, 2017, 1:59:30 PM|Nov 2, 2017, 1:59 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`ctshususd`|CTSH.US/USD|COGNIZANT TECH SOLUTIONS-A|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`ctxsususd`|CTXS.US/USD|CITRIX SYSTEMS INC|May 18, 2018, 1:30:00 PM|May 18, 2018, 1:30 PM|May 18, 2018, 1 PM|May 18, 2018|
|`cvsususd`|CVS.US/USD|CVS HEALTH CORP|Nov 2, 2017, 2:04:03 PM|Nov 2, 2017, 2:04 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`cvxususd`|CVX.US/USD|CHEVRON CORP|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`dususd`|D.US/USD|DOMINION RESOURCES INC/VA|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`dalususd`|DAL.US/USD|DELTA AIR LINES INC|Nov 2, 2017, 2:04:58 PM|Nov 2, 2017, 2:04 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`deususd`|DE.US/USD|DEERE & CO|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`dfsususd`|DFS.US/USD|DISCOVER FINANCIAL SERVICES|Feb 1, 2018, 2:30:02 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`dgususd`|DG.US/USD|DOLLAR GENERAL CORP|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`dhiususd`|DHI.US/USD|DR HORTON INC|Feb 1, 2018, 2:30:01 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`dhrususd`|DHR.US/USD|DANAHER CORP|Nov 2, 2017, 2:05:55 PM|Nov 2, 2017, 2:05 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`disususd`|DIS.US/USD|WALT DISNEY CO/THE|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`dltrususd`|DLTR.US/USD|DOLLAR TREE INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`dukususd`|DUK.US/USD|DUKE ENERGY CORP|May 11, 2017, 1:30:08 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`dvaususd`|DVA.US/USD|DAVITA HEALTHCARE PARTNERS I|Feb 1, 2018, 2:30:02 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`dvnususd`|DVN.US/USD|DEVON ENERGY CORP|Feb 1, 2018, 2:30:10 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`eaususd`|EA.US/USD|ELECTRONIC ARTS INC|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`ebayususd`|EBAY.US/USD|EBAY INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`efxususd`|EFX.US/USD|EQUIFAX INC|Nov 2, 2017, 2:08:24 PM|Nov 2, 2017, 2:08 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`eixususd`|EIX.US/USD|EDISON INTERNATIONAL|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`elususd`|EL.US/USD|ESTEE LAUDER COMPANIES-CL A|Feb 1, 2018, 2:30:04 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`emrususd`|EMR.US/USD|EMERSON ELECTRIC CO|Feb 1, 2018, 2:30:02 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`eogususd`|EOG.US/USD|EOG RESOURCES INC|Nov 2, 2017, 2:09:26 PM|Nov 2, 2017, 2:09 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`eqtususd`|EQT.US/USD|EQT CORP|Nov 2, 2017, 2:11:45 PM|Nov 2, 2017, 2:11 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`excususd`|EXC.US/USD|EXELON CORP|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`expeususd`|EXPE.US/USD|EXPEDIA INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`fususd`|F.US/USD|FORD MOTOR CO|Nov 2, 2017, 2:13:09 PM|Nov 2, 2017, 2:13 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`fbususd`|FB.US/USD|FACEBOOK INC-A|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`fcxususd`|FCX.US/USD|FREEPORT-MCMORAN INC|Nov 2, 2017, 2:13:48 PM|Nov 2, 2017, 2:13 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`fdxususd`|FDX.US/USD|FEDEX CORP|Nov 2, 2017, 2:14:46 PM|Nov 2, 2017, 2:14 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`feususd`|FE.US/USD|FIRSTENERGY CORP|Feb 1, 2018, 2:30:04 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`fitbususd`|FITB.US/USD|FIFTH THIRD BANCORP|Jan 31, 2018, 3:28:01 PM|Jan 31, 2018, 3:28 PM|Jan 31, 2018, 3 PM|Jan 31, 2018|
|`foxaususd`|FOXA.US/USD|TWENTY-FIRST CENTURY FOX-A|Jan 31, 2018, 3:28:22 PM|Jan 31, 2018, 3:28 PM|Jan 31, 2018, 3 PM|Jan 31, 2018|
|`geususd`|GE.US/USD|GENERAL ELECTRIC CO|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gildususd`|GILD.US/USD|GILEAD SCIENCES INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gisususd`|GIS.US/USD|GENERAL MILLS INC|Feb 1, 2018, 2:30:09 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`glwususd`|GLW.US/USD|CORNING INC|May 11, 2017, 1:30:47 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`gmususd`|GM.US/USD|GENERAL MOTORS CO|Nov 2, 2017, 2:16:22 PM|Nov 2, 2017, 2:16 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`googususd`|GOOG.US/USD|ALPHABET INC-CL C|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`googlususd`|GOOGL.US/USD|ALPHABET INC-CL A|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gpsususd`|GPS.US/USD|GAP INC/THE|Feb 1, 2018, 2:30:24 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`gsususd`|GS.US/USD|GOLDMAN SACHS GROUP INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`gwwususd`|GWW.US/USD|WW GRAINGER INC|Feb 1, 2018, 2:31:12 PM|Feb 1, 2018, 2:31 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`halususd`|HAL.US/USD|HALLIBURTON CO|Nov 2, 2017, 2:18:18 PM|Nov 2, 2017, 2:18 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`hcnususd`|HCN.US/USD|WELLTOWER INC|Feb 1, 2018, 2:30:00 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`hdususd`|HD.US/USD|HOME DEPOT INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`hesususd`|HES.US/USD|HESS CORP|Nov 2, 2017, 2:50:59 PM|Nov 2, 2017, 2:50 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`honususd`|HON.US/USD|HONEYWELL INTERNATIONAL INC|Nov 2, 2017, 2:52:10 PM|Nov 2, 2017, 2:52 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`hpqususd`|HPQ.US/USD|HP INC|Feb 1, 2018, 2:30:10 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`humususd`|HUM.US/USD|HUMANA INC|Nov 2, 2017, 2:53:32 PM|Nov 2, 2017, 2:53 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`ibmususd`|IBM.US/USD|INTL BUSINESS MACHINES CORP|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`iceususd`|ICE.US/USD|INTERCONTINENTAL EXCHANGE IN|Nov 6, 2017, 2:30:02 PM|Nov 6, 2017, 2:30 PM|Nov 6, 2017, 2 PM|Nov 6, 2017|
|`ilmnususd`|ILMN.US/USD|ILLUMINA INC|Feb 1, 2018, 2:30:03 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`intcususd`|INTC.US/USD|INTEL CORP|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`intuususd`|INTU.US/USD|INTUIT INC|Feb 1, 2018, 2:30:01 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`ipgususd`|IPG.US/USD|INTERPUBLIC GROUP OF COS INC|Feb 1, 2018, 2:30:12 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`isrgususd`|ISRG.US/USD|INTUITIVE SURGICAL INC|Feb 1, 2018, 2:30:31 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`itubususd`|ITUB.US/USD|Itau Unibanco Holding S.A.|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`itwususd`|ITW.US/USD|ILLINOIS TOOL WORKS|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`jciususd`|JCI.US/USD|JOHNSON CONTROLS INC|Nov 2, 2017, 2:54:23 PM|Nov 2, 2017, 2:54 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`jnjususd`|JNJ.US/USD|JOHNSON & JOHNSON|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`jpmususd`|JPM.US/USD|JPMORGAN CHASE & CO|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`jwnususd`|JWN.US/USD|NORDSTROM INC|May 11, 2017, 1:30:53 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`kususd`|K.US/USD|KELLOGG CO|May 11, 2017, 1:30:15 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`keyususd`|KEY.US/USD|KEYCORP|Nov 2, 2017, 3:37:57 PM|Nov 2, 2017, 3:37 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`khcususd`|KHC.US/USD|KRAFT HEINZ CO/THE|May 11, 2017, 1:30:09 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`kmbususd`|KMB.US/USD|KIMBERLY-CLARK CORP|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`kmiususd`|KMI.US/USD|KINDER MORGAN INC|Nov 2, 2017, 3:40:20 PM|Nov 2, 2017, 3:40 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`koususd`|KO.US/USD|COCA-COLA CO/THE|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`krususd`|KR.US/USD|KROGER CO|Nov 2, 2017, 3:41:03 PM|Nov 2, 2017, 3:41 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`kssususd`|KSS.US/USD|KOHLS CORP|Feb 1, 2018, 2:30:10 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`lususd`|L.US/USD|LOEWS CORP|May 11, 2017, 1:30:05 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`lenususd`|LEN.US/USD|LENNAR CORP-A|May 11, 2017, 1:30:15 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`llyususd`|LLY.US/USD|ELI LILLY & CO|May 11, 2017, 1:31:11 PM|May 11, 2017, 1:31 PM|May 11, 2017, 1 PM|May 11, 2017|
|`lmtususd`|LMT.US/USD|LOCKHEED MARTIN CORP|May 11, 2017, 1:30:06 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`lowususd`|LOW.US/USD|LOWE'S COS INC|Nov 2, 2017, 3:41:42 PM|Nov 2, 2017, 3:41 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`lrcxususd`|LRCX.US/USD|LAM RESEARCH CORP|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`luvususd`|LUV.US/USD|SOUTHWEST AIRLINES CO|Nov 2, 2017, 3:43:21 PM|Nov 2, 2017, 3:43 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`lvsususd`|LVS.US/USD|Las Vegas Sands Corp.|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`mususd`|M.US/USD|MACY'S INC|Nov 2, 2017, 3:44:11 PM|Nov 2, 2017, 3:44 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`maususd`|MA.US/USD|MASTERCARD INC-CLASS A|May 11, 2017, 1:30:06 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`marususd`|MAR.US/USD|MARRIOTT INTERNATIONAL -CL A|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`matususd`|MAT.US/USD|MATTEL INC|Feb 1, 2018, 2:30:10 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`mcdususd`|MCD.US/USD|MCDONALD'S CORP|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`mchpususd`|MCHP.US/USD|MICROCHIP TECHNOLOGY INC|Feb 1, 2018, 2:30:09 PM|Feb 1, 2018, 2:30 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`mckususd`|MCK.US/USD|MCKESSON CORP|Nov 2, 2017, 3:45:32 PM|Nov 2, 2017, 3:45 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`mdlzususd`|MDLZ.US/USD|MONDELEZ INTERNATIONAL INC-A|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`metususd`|MET.US/USD|METLIFE INC|Nov 2, 2017, 3:47:15 PM|Nov 2, 2017, 3:47 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`mgmususd`|MGM.US/USD|MGM RESORTS INTERNATIONAL|Nov 2, 2017, 2:16:50 PM|Nov 2, 2017, 2:16 PM|Nov 2, 2017, 2 PM|Nov 2, 2017|
|`mmmususd`|MMM.US/USD|3M CO|May 11, 2017, 1:32:14 PM|May 11, 2017, 1:32 PM|May 11, 2017, 1 PM|May 11, 2017|
|`moususd`|MO.US/USD|ALTRIA GROUP INC|Nov 2, 2017, 3:48:43 PM|Nov 2, 2017, 3:48 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`mpcususd`|MPC.US/USD|MARATHON PETROLEUM CORP|Feb 1, 2018, 2:40:50 PM|Feb 1, 2018, 2:40 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`mrkususd`|MRK.US/USD|MERCK & CO. INC.|Nov 2, 2017, 1:30:01 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`mrnaususd`|MRNA.US/USD|Moderna|Oct 1, 2020, 1:30:00 PM|Oct 1, 2020, 1:30 PM|Oct 1, 2020, 2 PM|Oct 1, 2020|
|`mroususd`|MRO.US/USD|MARATHON OIL CORP|Feb 1, 2018, 2:41:34 PM|Feb 1, 2018, 2:41 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`msususd`|MS.US/USD|MORGAN STANLEY|Nov 2, 2017, 3:50:21 PM|Nov 2, 2017, 3:50 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`msftususd`|MSFT.US/USD|MICROSOFT CORP|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`muususd`|MU.US/USD|MICRON TECHNOLOGY INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`neeususd`|NEE.US/USD|NEXTERA ENERGY INC|Feb 1, 2018, 2:47:23 PM|Feb 1, 2018, 2:47 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`nemususd`|NEM.US/USD|NEWMONT MINING CORP|May 11, 2017, 1:30:15 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`nflxususd`|NFLX.US/USD|NETFLIX INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`nioususd`|NIO.US/USD|Nio INC|Nov 27, 2020, 5:59:59 PM|Nov 27, 2020, 5:59 PM|Nov 27, 2020, 5 PM|Nov 23, 2020|
|`nkeususd`|NKE.US/USD|NIKE INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`nocususd`|NOC.US/USD|NORTHROP GRUMMAN CORP|May 11, 2017, 1:31:47 PM|May 11, 2017, 1:31 PM|May 11, 2017, 1 PM|May 11, 2017|
|`nrgususd`|NRG.US/USD|NRG ENERGY INC|Feb 1, 2018, 2:48:29 PM|Feb 1, 2018, 2:47 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`nscususd`|NSC.US/USD|NORFOLK SOUTHERN CORP|Feb 1, 2018, 2:49:48 PM|Feb 1, 2018, 2:49 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`nvdaususd`|NVDA.US/USD|NVIDIA CORP|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`nwlususd`|NWL.US/USD|NEWELL BRANDS INC|Nov 2, 2017, 3:52:26 PM|Nov 2, 2017, 3:52 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`okeususd`|OKE.US/USD|ONEOK INC|Feb 1, 2018, 2:50:08 PM|Feb 1, 2018, 2:50 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`omcususd`|OMC.US/USD|OMNICOM GROUP|Feb 1, 2018, 2:50:50 PM|Feb 1, 2018, 2:50 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`orclususd`|ORCL.US/USD|ORACLE CORP|Nov 2, 2017, 3:53:19 PM|Nov 2, 2017, 3:53 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`orlyususd`|ORLY.US/USD|O'REILLY AUTOMOTIVE INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`oxyususd`|OXY.US/USD|OCCIDENTAL PETROLEUM CORP|May 11, 2017, 1:30:16 PM|May 11, 2017, 1:30 PM|May 11, 2017, 1 PM|May 11, 2017|
|`payxususd`|PAYX.US/USD|PAYCHEX INC|Feb 1, 2018, 2:50:48 PM|Feb 1, 2018, 2:50 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`pbrususd`|PBR.US/USD|Petroleo Brasileiro S.A.|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`pcarususd`|PCAR.US/USD|PACCAR INC|Feb 1, 2018, 2:50:58 PM|Feb 1, 2018, 2:50 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`pcgususd`|PCG.US/USD|P G & E CORP|Nov 2, 2017, 3:54:09 PM|Nov 2, 2017, 3:54 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`pclnususd`|PCLN.US/USD|PRICELINE GROUP INC/THE|Jan 26, 2017, 2:30:14 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`pepususd`|PEP.US/USD|PEPSICO INC|Nov 2, 2017, 3:55:51 PM|Nov 2, 2017, 3:55 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`pfeususd`|PFE.US/USD|PFIZER INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`pgususd`|PG.US/USD|PROCTER & GAMBLE CO/THE|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`pgrususd`|PGR.US/USD|PROGRESSIVE CORP|Feb 1, 2018, 2:52:03 PM|Feb 1, 2018, 2:51 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`phususd`|PH.US/USD|PARKER HANNIFIN CORP|Feb 1, 2018, 2:52:46 PM|Feb 1, 2018, 2:52 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`pltrususd`|PLTR.US/USD|Palantir Tech Inc A|Oct 5, 2020, 5:59:59 PM|Oct 5, 2020, 5:59 PM|Oct 5, 2020, 5 PM|Oct 1, 2020|
|`plugususd`|PLUG.US/USD|Plug Power Inc|Oct 2, 2020, 1:30:00 PM|Oct 2, 2020, 1:30 PM|Oct 2, 2020, 2 PM|Oct 2, 2020|
|`pmususd`|PM.US/USD|PHILIP MORRIS INTERNATIONAL|Nov 2, 2017, 3:56:40 PM|Nov 2, 2017, 3:56 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`pncususd`|PNC.US/USD|PNC FINANCIAL SERVICES GROUP|Nov 2, 2017, 3:57:29 PM|Nov 2, 2017, 3:57 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`ppgususd`|PPG.US/USD|PPG INDUSTRIES INC|Feb 2, 2018, 2:30:14 PM|Feb 2, 2018, 2:30 PM|Feb 2, 2018, 2 PM|Feb 2, 2018|
|`pruususd`|PRU.US/USD|PRUDENTIAL FINANCIAL INC|Feb 1, 2018, 2:57:44 PM|Feb 1, 2018, 2:57 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`psaususd`|PSA.US/USD|PUBLIC STORAGE|Feb 1, 2018, 2:58:35 PM|Feb 1, 2018, 2:58 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`psxususd`|PSX.US/USD|PHILLIPS 66|Feb 1, 2018, 2:59:08 PM|Feb 1, 2018, 2:59 PM|Feb 1, 2018, 2 PM|Feb 1, 2018|
|`ptonususd`|PTON.US/USD|Peloton Interactive Inc|Oct 1, 2020, 1:30:00 PM|Oct 1, 2020, 1:30 PM|Oct 1, 2020, 2 PM|Oct 1, 2020|
|`pxdususd`|PXD.US/USD|PIONEER NATURAL RESOURCES CO|Nov 2, 2017, 3:58:40 PM|Nov 2, 2017, 3:58 PM|Nov 2, 2017, 3 PM|Nov 2, 2017|
|`pyplususd`|PYPL.US/USD|PAYPAL HOLDINGS INC|Nov 2, 2017, 4:00:27 PM|Nov 2, 2017, 4:00 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`qcomususd`|QCOM.US/USD|QUALCOMM INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`regnususd`|REGN.US/USD|REGENERON PHARMACEUTICALS|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`rfususd`|RF.US/USD|REGIONS FINANCIAL CORP|Feb 1, 2018, 3:01:00 PM|Feb 1, 2018, 3:00 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`rokuususd`|ROKU.US/USD|Roku Inc|Nov 23, 2020, 2:30:00 PM|Nov 23, 2020, 2:30 PM|Nov 23, 2020, 3 PM|Nov 23, 2020|
|`rostususd`|ROST.US/USD|ROSS STORES INC|Feb 1, 2018, 3:19:13 PM|Feb 1, 2018, 3:19 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`rrcususd`|RRC.US/USD|RANGE RESOURCES CORP|Feb 1, 2018, 3:19:58 PM|Feb 1, 2018, 3:19 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`sbuxususd`|SBUX.US/USD|STARBUCKS CORP|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`schwususd`|SCHW.US/USD|SCHWAB (CHARLES) CORP|Nov 2, 2017, 4:02:24 PM|Nov 2, 2017, 4:02 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`shwususd`|SHW.US/USD|SHERWIN-WILLIAMS COMPANY|Feb 1, 2018, 3:21:33 PM|Feb 1, 2018, 3:21 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`sjmususd`|SJM.US/USD|JM SMUCKER COMPANY|Feb 1, 2018, 3:26:16 PM|Feb 1, 2018, 3:26 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`snapususd`|SNAP.US/USD|SNAP Inc|Nov 2, 2017, 4:03:48 PM|Nov 2, 2017, 4:03 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`snowususd`|SNOW.US/USD|Snowflake Inc Class A|Sep 22, 2020, 1:30:00 PM|Sep 22, 2020, 1:30 PM|Sep 22, 2020, 2 PM|Sep 22, 2020|
|`soususd`|SO.US/USD|SOUTHERN CO/THE|Nov 2, 2017, 4:04:52 PM|Nov 2, 2017, 4:04 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`spgususd`|SPG.US/USD|SIMON PROPERTY GROUP INC|Nov 2, 2017, 4:05:47 PM|Nov 2, 2017, 4:05 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`sqususd`|SQ.US/USD|Square Inc|Oct 23, 2020, 5:59:59 PM|Oct 23, 2020, 5:59 PM|Oct 23, 2020, 5 PM|Oct 23, 2020|
|`sttususd`|STT.US/USD|STATE STREET CORP|Feb 1, 2018, 3:30:02 PM|Feb 1, 2018, 3:29 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`stzususd`|STZ.US/USD|CONSTELLATION BRANDS INC-A|Feb 1, 2018, 3:30:22 PM|Feb 1, 2018, 3:30 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`swkususd`|SWK.US/USD|STANLEY BLACK & DECKER INC|Feb 1, 2018, 3:31:21 PM|Feb 1, 2018, 3:31 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`sykususd`|SYK.US/USD|STRYKER CORP|Feb 1, 2018, 3:32:00 PM|Feb 1, 2018, 3:32 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`syyususd`|SYY.US/USD|SYSCO CORP|Feb 1, 2018, 3:34:03 PM|Feb 1, 2018, 3:33 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`tususd`|T.US/USD|AT&T INC|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`tapususd`|TAP.US/USD|MOLSON COORS BREWING CO -B|Feb 1, 2018, 3:34:19 PM|Feb 1, 2018, 3:34 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`tevaususd`|TEVA.US/USD|TEVA PHARMACEUTICAL-SP ADR|Nov 2, 2017, 4:06:40 PM|Nov 2, 2017, 4:06 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`tgtususd`|TGT.US/USD|TARGET CORP|Nov 2, 2017, 4:17:00 PM|Nov 2, 2017, 4:17 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`tjxususd`|TJX.US/USD|TJX COMPANIES INC|Nov 2, 2017, 4:17:42 PM|Nov 2, 2017, 4:17 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`tmoususd`|TMO.US/USD|THERMO FISHER SCIENTIFIC INC|Nov 2, 2017, 4:18:32 PM|Nov 2, 2017, 4:18 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`trowususd`|TROW.US/USD|T ROWE PRICE GROUP INC|Feb 1, 2018, 3:35:14 PM|Feb 1, 2018, 3:35 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`trvususd`|TRV.US/USD|TRAVELERS COS INC/THE|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`tslaususd`|TSLA.US/USD|TESLA MOTORS INC|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`tsmususd`|TSM.US/USD|Taiwan Semiconductor Manufacturing Company Limited|Feb 1, 2018, 3:35:43 PM|Feb 1, 2018, 3:35 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`tsnususd`|TSN.US/USD|TYSON FOODS INC-CL A|Feb 1, 2018, 3:37:00 PM|Feb 1, 2018, 3:36 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`twtrususd`|TWTR.US/USD|TWITTER INC|Nov 2, 2017, 4:19:20 PM|Nov 2, 2017, 4:19 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`txnususd`|TXN.US/USD|TEXAS INSTRUMENTS INC|Nov 2, 2017, 1:30:00 PM|Nov 2, 2017, 1:30 PM|Nov 2, 2017, 1 PM|Nov 2, 2017|
|`uberususd`|UBER.US/USD|Uber Inc|Oct 1, 2020, 1:30:00 PM|Oct 1, 2020, 1:30 PM|Oct 1, 2020, 2 PM|Oct 1, 2020|
|`ultaususd`|ULTA.US/USD|ULTA SALON COSMETICS & FRAGR|Nov 2, 2017, 4:20:40 PM|Nov 2, 2017, 4:20 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`unhususd`|UNH.US/USD|UNITEDHEALTH GROUP INC|Nov 2, 2017, 4:21:11 PM|Nov 2, 2017, 4:21 PM|Nov 2, 2017, 4 PM|Nov 2, 2017|
|`unpususd`|UNP.US/USD|UNION PACIFIC CORP|Nov 15, 2017, 2:57:28 PM|Nov 15, 2017, 2:57 PM|Nov 15, 2017, 2 PM|Nov 15, 2017|
|`upsususd`|UPS.US/USD|UNITED PARCEL SERVICE-CL B|Nov 15, 2017, 3:22:15 PM|Nov 15, 2017, 3:22 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`usbususd`|USB.US/USD|US BANCORP|Nov 15, 2017, 3:22:56 PM|Nov 15, 2017, 3:22 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`vususd`|V.US/USD|VISA INC-CLASS A SHARES|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`valeususd`|VALE.US/USD|Vale S.A.|Jan 26, 2017, 2:30:01 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`vfcususd`|VFC.US/USD|VF CORP|Feb 1, 2018, 3:37:45 PM|Feb 1, 2018, 3:37 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`vloususd`|VLO.US/USD|VALERO ENERGY CORP|Nov 15, 2017, 3:32:06 PM|Nov 15, 2017, 3:32 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`vmcususd`|VMC.US/USD|VULCAN MATERIALS CO|Feb 1, 2018, 3:39:44 PM|Feb 1, 2018, 3:39 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`vrtxususd`|VRTX.US/USD|VERTEX PHARMACEUTICALS INC|Nov 15, 2017, 3:48:41 PM|Nov 15, 2017, 3:48 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`vzususd`|VZ.US/USD|VERIZON COMMUNICATIONS INC|Nov 15, 2017, 3:49:15 PM|Nov 15, 2017, 3:49 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`wbaususd`|WBA.US/USD|WALGREENS BOOTS ALLIANCE INC|Nov 15, 2017, 3:56:02 PM|Nov 15, 2017, 3:56 PM|Nov 15, 2017, 3 PM|Nov 15, 2017|
|`wdcususd`|WDC.US/USD|WESTERN DIGITAL CORP|Nov 15, 2017, 4:41:01 PM|Nov 15, 2017, 4:40 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`wfcususd`|WFC.US/USD|WELLS FARGO & CO|Jan 26, 2017, 2:30:00 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`whrususd`|WHR.US/USD|WHIRLPOOL CORP|Feb 1, 2018, 3:40:10 PM|Feb 1, 2018, 3:40 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`wmtususd`|WMT.US/USD|WAL-MART STORES INC|Nov 15, 2017, 4:41:08 PM|Nov 15, 2017, 4:41 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`wynnususd`|WYNN.US/USD|WYNN RESORTS LTD|Nov 15, 2017, 4:42:00 PM|Nov 15, 2017, 4:41 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xususd`|X.US/USD|UNITED STATES STEEL CORP|Nov 15, 2017, 4:45:20 PM|Nov 15, 2017, 4:45 PM|Nov 15, 2017, 4 PM|Nov 15, 2017|
|`xlnxususd`|XLNX.US/USD|XILINX INC|Feb 1, 2018, 3:40:19 PM|Feb 1, 2018, 3:40 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`xomususd`|XOM.US/USD|EXXON MOBIL CORP|Jan 26, 2017, 2:30:02 PM|Jan 26, 2017, 2:30 PM|Jan 26, 2017, 2 PM|Jan 26, 2017|
|`xpevususd`|XPEV.US/USD|Xpeng Inc ADR|Dec 23, 2020, 2:41:02 PM|Dec 23, 2020, 2:41 PM|Dec 23, 2020, 2 PM|Dec 23, 2020|
|`yumususd`|YUM.US/USD|YUM! BRANDS INC|Feb 1, 2018, 3:40:56 PM|Feb 1, 2018, 3:40 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`zbhususd`|ZBH.US/USD|ZIMMER BIOMET HOLDINGS INC|Feb 1, 2018, 3:41:57 PM|Feb 1, 2018, 3:41 PM|Feb 1, 2018, 3 PM|Feb 1, 2018|
|`zmususd`|ZM.US/USD|Zoom Video Communications (A Class)|Sep 30, 2020, 1:30:00 PM|Sep 30, 2020, 1:30 PM|Sep 30, 2020, 2 PM|Sep 30, 2020|