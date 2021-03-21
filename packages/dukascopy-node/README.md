<h1>dukascopy-node</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-node/dukascopy-node.png?raw=true" alt="dukascopy-node"></p>

<p align="center">
  <a href="https://travis-ci.org/github/Leo4815162342/dukascopy-node"><img src="https://api.travis-ci.org/Leo4815162342/dukascopy-node.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="dukascopy-node tested with jest"></a>
</p>


> Download historical market prices for 700+ instruments (Stocks / Commodities / Bonds / Currencies / CFDs / ETFs / Crypto) via Node.js

## Installation

#### NPM:

```bash
npm install dukascopy-node --save
```

#### yarn:

```bash
yarn add dukascopy-node
```



## Usage ([try it live](https://runkit.com/embed/of4ho2xv8rvv))

```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'btcusd',
      dates: {
        from: '2018-01-01',
        to: '2019-01-01'
      },
      timeframe: 'd1',
      format: 'json'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

## Config object

|Name|Type|Required|Default|Description|
|-|-|-|-|-|
|`instrument`|`String`|true||An id of the trading instrument. Supported values: [see list](#instruments)|
|`dates`|`Object`|true||An object with a date range|
|`dates.from`|<p>`Date`</p><p>`String`</p><p>`Number`</p>|true||Date representing the start of the time range. Can be of Date type, string (e.g. `2021-03-04` or `2021-03-04T00:00:00.000Z`), or timestamp integer (e.g. `1614816000000`)|
|`dates.to`|<p>`Date`</p><p>`String`</p><p>`Number`</p>|true||Date representing the end of the time range Can be of Date type, string (e.g. `2021-03-04` or `2021-03-04T00:00:00.000Z`), or timestamp integer (e.g.   `1614816000000`)|
|`timeframe`|`String`|false|`d1`|Granularity of aggregation of OHLC (open, high, low, close) data. Supported values:<ul><li>`tick` (every single tick/price change)</li><li>`m1` (1 minute)</li><li>`m15` (15 minutes)</li><li>`m30` (30 minutes)</li><li>`h1` (1 hour)</li><li>`d1` (1 day)</li><li>`mn1` (1 month)</li></ul>|
|`priceType`|`String`|false|`bid`|Type of price (offer side). Supported values:<ul><li>`bid`</li><li>`ask`</li></ul>|
|`format`|`String`|false|`array`|Format of the generated output. Supported values:<ul><li>`array`</li><li>`json`</li><li>`csv`</li></ul>|
|`utcOffset`|`Number`|false|`0`|UTC offset in minutes.|
|`volumes`|`Boolean`|false|`true`|A flag indicating whether the output should contain volume data|
|`ignoreFlats`|`Boolean`|false|`true`|A flag indicating whether the output should contain timeframe entries with 0 (flat) volume. Those mainly come from non-trading days, such as weekends or bank holidays.|
|`batchSize`|`Number`|false|`10`|Number of requests sent to data storage per batch. We don't want to send bunch of requests at the same time, we want to split them in groups (batches) and fetch them one by one with pause in between (see `pauseBetweenBatchesMs`). Main purpose - not to fall under rate limiting restrictions.|
|`pauseBetweenBatchesMs`|`Number`|false|`1000`|Pause between downloading batches (in milliseconds).|
|`useCache`|`Boolean`|false|`false`|A flag indicating whether a file-system cache is going to be used to store response artifacts for subsequent lookups. When set to `true`, it significantly speeds up calls when requesting overlapping or similar data|
|`cacheFolderPath`|`String`|false|`./.dukascopy-cache`|Folder path where all cache artifacts (binary data) will be stored|

***

#### Example of a full config object


```javascript
{
  instrument: 'btcusd',
  dates: {
    from: '2018-01-01', // or 2018-01-01T00:00:00.000Z
    to: '2019-01-01', // or 2019-01-01T00:00:00.000Z
  },
  timeframe: 'd1',
  priceType: 'ask',
  format: 'json',
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true,
  batchSize: 10,
  pauseBetweenBatchesMs: 1000,
  useCache: true,
  cacheFolderPath: '.dukascopy-cache'
}
```

***

## Instruments

* [Bonds 📊 (3)](#bnd_cfd)
* [Crypto ₿ (3)](#vccy)
* [Agricultural ☕ (6)](#cmd_agricultural)
* [Energy ⚡ (4)](#cmd_energy)
* [Metals ⚙️ (1)](#cmd_metals)
* [ETFs 📈 (43)](#etf_cfd_us)
* [Forex crosses 💱 (54)](#fx_crosses)
* [Forex majors 💶 (7)](#fx_majors)
* [Forex metals 🥇 (2)](#fx_metals)
* [America 🌎 (5)](#idx_america)
* [Asia / Pacific 🌏 (6)](#idx_asia)
* [Europe 🌍 (8)](#idx_europe)
* [Austria 🇦🇹 (3)](#austria)
* [Belgium 🇧🇪 (7)](#belgium)
* [Denmark 🇩🇰 (8)](#denmark)
* [Finland 🇫🇮 (7)](#finland)
* [France 🇫🇷 (35)](#france)
* [Germany 🇩🇪 (35)](#germany)
* [Hong Kong 🇭🇰 (26)](#hong-kong)
* [Japan 🇯🇵 (56)](#japan)
* [Netherlands 🇳🇱 (16)](#netherlands)
* [Norway 🇳🇴 (6)](#norway)
* [Portugal 🇵🇹 (2)](#portugal)
* [Spain 🇪🇸 (18)](#spain)
* [Sweden 🇸🇪 (20)](#sweden)
* [Switzerland 🇨🇭 (20)](#switzerland)
* [UK 🇬🇧 (80)](#uk)
* [US 🇺🇸 (247)](#us)
<hr>
<h3 id="bnd_cfd">Bonds 📊</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`bundtreur`|BUND.TR/EUR|Euro Bund|May 2, 2016, 6 AM|May 2, 2016|May 1, 2016|Jan 1, 2016|
|`ukgilttrgbp`|UKGILT.TR/GBP|UK Long Gilt|Dec 26, 2017, 5 AM|Dec 26, 2017|Dec 1, 2017|Jan 1, 2017|
|`ustbondtrusd`|USTBOND.TR/USD|US T-Bond|Jan 1, 2000, 12 AM|Jan 4, 2018|Dec 1, 2017|Jan 1, 2017|
<h3 id="vccy">Crypto ₿</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`btcusd`|BTC/USD|Bitcoin vs US Dollar|May 7, 2017, 11 PM|May 7, 2017|May 1, 2017|Jan 1, 2017|
|`ethusd`|ETH/USD|Ether vs US Dollar|Dec 11, 2017, 11 PM|Dec 11, 2017|Dec 1, 2017|Jan 1, 2017|
|`ltcusd`|LTC/USD|Litecoin vs US Dollar|Sep 3, 2018, 12 AM|Sep 3, 2018|Sep 1, 2018|Jan 1, 2018|
<h3 id="cmd_agricultural">Agricultural ☕</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`cocoacmdusd`|COCOA.CMD/USD|NY Cocoa|Oct 20, 2017, 12 AM|Oct 20, 2017|Oct 1, 2017|Jan 1, 2017|
|`coffeecmdusx`|COFFEE.CMD/USX|Coffee Arabica|Dec 4, 2017, 7 AM|Dec 4, 2017|Dec 1, 2017|Jan 1, 2017|
|`cottoncmdusx`|COTTON.CMD/USX|Cotton|Oct 20, 2017, 8 AM|Oct 20, 2017|Oct 1, 2017|Jan 1, 2017|
|`ojuicecmdusx`|OJUICE.CMD/USX|Orange Juice|Oct 20, 2017, 12 PM|Oct 20, 2017|Oct 1, 2017|Jan 1, 2017|
|`soybeancmdusx`|SOYBEAN.CMD/USX|Soybean|Dec 1, 2017, 12 AM|Dec 1, 2017|Dec 1, 2017|Jan 1, 2017|
|`sugarcmdusd`|SUGAR.CMD/USD|London Sugar No.5|Oct 2, 2017, 12 AM|Oct 2, 2017|Oct 1, 2017|Jan 1, 2017|
<h3 id="cmd_energy">Energy ⚡</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dieselcmdusd`|DIESEL.CMD/USD|Gas oil|Oct 20, 2017, 8 AM|Oct 20, 2017|Oct 1, 2017|Jan 1, 2017|
|`brentcmdusd`|BRENT.CMD/USD|US Brent Crude Oil|Dec 2, 2010, 1 AM|Dec 2, 2010|Dec 1, 2010|Jan 1, 2006|
|`lightcmdusd`|LIGHT.CMD/USD|US Light Crude Oil|Jan 1, 2013, 5 AM|Sep 23, 2011|Sep 1, 2011|Jan 1, 1983|
|`gascmdusd`|GAS.CMD/USD|Natural Gas|Sep 2, 2012, 10 PM|Aug 20, 2012|Aug 1, 2012|Jan 1, 2012|
<h3 id="cmd_metals">Metals ⚙️</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`coppercmdusd`|COPPER.CMD/USD|High Grade Copper|Mar 1, 2012, 12 AM|Mar 1, 2012|Mar 1, 2012|Jan 1, 2012|
<h3 id="etf_cfd_us">ETFs 📈</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`diaususd`|DIA.US/USD|SPDR Dow Jones® Industrial Average ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`dvyususd`|DVY.US/USD|iShares Select Dividend ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`eemususd`|EEM.US/USD|iShares MSCI Emerging Markets ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`efaususd`|EFA.US/USD|iShares MSCI EAFE ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`embususd`|EMB.US/USD|iShares J.P. Morgan USD Emerging Markets Bond ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`ewhususd`|EWH.US/USD|iShares MSCI Hong Kong ETF|Nov 6, 2017, 2 PM|Nov 6, 2017|Nov 1, 2017|Jan 1, 2017|
|`ewjususd`|EWJ.US/USD|iShares MSCI Japan ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`ewwususd`|EWW.US/USD|iShares MSCI Mexico Capped|Mar 13, 2017, 2 PM|Mar 13, 2017|Mar 1, 2017|Jan 1, 2017|
|`ewzususd`|EWZ.US/USD|iShares MSCI Brazil Capped|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`ezuususd`|EZU.US/USD|iShares MSCI EMU ETF|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`fxiususd`|FXI.US/USD|iShares China Large-Cap ETF|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`gdxususd`|GDX.US/USD|VanEck Vectors Gold Miners ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`gdxjususd`|GDXJ.US/USD|VanEck Vectors Junior Gold Miners ETF|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`gldususd`|GLD.US/USD|SPDR Gold Shares ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`ibbususd`|IBB.US/USD|iShares Nasdaq Biotechnology ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`iefususd`|IEF.US/USD|iShares 7-10 Year Treasury Bond ETF|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`ijhususd`|IJH.US/USD|iShares Core S&P Mid-Cap ETF|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`ijrususd`|IJR.US/USD|iShares Core S&P Small-Cap ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`iveususd`|IVE.US/USD|iShares S&P 500 Value ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`ivwususd`|IVW.US/USD|iShares S&P 500 Growth ETF|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`iwdususd`|IWD.US/USD|iShares Russell 1000 Value ETF|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`iwfususd`|IWF.US/USD|iShares Russell 1000 Growth ETF|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`iwmususd`|IWM.US/USD|iShares Russell 2000 ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`iyrususd`|IYR.US/USD|iShares U.S. Real Estate ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`jnkususd`|JNK.US/USD|SPDR Barclays Capital High Yield Bond ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`qqqususd`|QQQ.US/USD|PowerShares QQQ ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`slvususd`|SLV.US/USD|iShares Silver Trust ETF|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`spyususd`|SPY.US/USD|SPDR S&P 500 ETF|Feb 16, 2017, 3 PM|Feb 16, 2017|Feb 1, 2017|Jan 1, 2017|
|`tltususd`|TLT.US/USD|iShares 20+ Year Treasury Bond ETF|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`usoususd`|USO.US/USD|United States Oil|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`veaususd`|VEA.US/USD|Vanguard FTSE Developed Markets ETF|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`vgkususd`|VGK.US/USD|Vanguard FTSE Europe ETF|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`vnqususd`|VNQ.US/USD|Vanguard REIT ETF|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`vxxususd`|VXX.US/USD|iPath S&P 500 VIX ST Futures ETN|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`xleususd`|XLE.US/USD|Energy Select Sector SPDR Fund|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xlfususd`|XLF.US/USD|Financial Select Sector SPDR Fund|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`xliususd`|XLI.US/USD|Industrial Select Sector SPDR Fund|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`xlkususd`|XLK.US/USD|Technology Select Sector SPDR Fund|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xlpususd`|XLP.US/USD|Consumer Staples Select Sector SPDR Fund|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`xluususd`|XLU.US/USD|Utilities Select Sector SPDR Fund|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xlvususd`|XLV.US/USD|Health Care Select Sector SPDR Fund|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xlyususd`|XLY.US/USD|Consumer Discretionary Select Sector SPDR Fund|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xopususd`|XOP.US/USD|SPDR S&P Oil & Gas Explor & Prodtn ETF|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
<h3 id="fx_crosses">Forex crosses 💱</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`audcad`|AUD/CAD|Australian Dollar vs Canadian Dollar|Jan 3, 2006, 12 AM|Dec 26, 2005|Jan 1, 2006|Jan 1, 1992|
|`audchf`|AUD/CHF|Australian Dollar vs Swiss Franc|Mar 1, 2006, 12 AM|Dec 26, 2005|Jan 1, 2006|Jan 1, 1991|
|`audjpy`|AUD/JPY|Australian Dollar vs Japanese Yen|Nov 30, 2003, 9 PM|Nov 29, 2003|Nov 1, 2003|Jan 1, 1991|
|`audnzd`|AUD/NZD|Australian Dollar vs New Zealand Dollar|Dec 12, 2006, 12 AM|Dec 8, 2006|Dec 1, 2006|Jan 1, 1993|
|`audsgd`|AUD/SGD|Australian Dollar vs Singapore Dollar|Mar 14, 2007, 12 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`cadchf`|CAD/CHF|Canadian Dollar vs Swiss Franc|Jan 2, 2006, 10 PM|Dec 26, 2005|Jan 1, 2006|Jan 1, 1991|
|`cadhkd`|CAD/HKD|Canadian Dollar vs Hong Kong Dollar|Mar 13, 2007, 5 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1997|
|`cadjpy`|CAD/JPY|Canadian Dollar vs Japanese Yen|Oct 25, 2004, 12 AM|Oct 20, 2004|Oct 1, 2004|Jan 1, 1993|
|`chfjpy`|CHF/JPY|Swiss Franc vs Japanese Yen|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1990|
|`chfsgd`|CHF/SGD|Swiss Franc vs Singapore Dollar|Jun 4, 2007, 9 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1998|
|`euraud`|EUR/AUD|Euro vs Australian Dollar|Oct 7, 2005, 5 AM|Oct 2, 2005|Oct 1, 2005|Jan 1, 1991|
|`eurcad`|EUR/CAD|Euro vs Canadian Dollar|Oct 25, 2004, 12 AM|Oct 20, 2004|Oct 1, 2004|Jan 1, 1991|
|`eurchf`|EUR/CHF|Euro vs Swiss Franc|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1990|
|`eurczk`|EUR/CZK|Euro vs Czech Koruna|Jan 3, 2016, 10 PM|Jan 3, 2016|Jan 1, 2016|Jan 1, 2016|
|`eurdkk`|EUR/DKK|Euro vs Danish Krone|Oct 25, 2004, 12 AM|Oct 20, 2004|Oct 1, 2004|Jan 1, 1993|
|`eurgbp`|EUR/GBP|Euro vs Pound Sterling|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1995|
|`eurhkd`|EUR/HKD|Euro vs Hong Kong Dollar|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`eurhuf`|EUR/HUF|Euro vs Hungarian Forint|Mar 14, 2007, 2 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`eurjpy`|EUR/JPY|Euro vs Japanese Yen|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1972|
|`eurnok`|EUR/NOK|Euro vs Norwegian Krone|Oct 25, 2004, 12 AM|Oct 20, 2004|Oct 1, 2004|Jan 1, 1991|
|`eurnzd`|EUR/NZD|Euro vs New Zealand Dollar|Jan 2, 2006, 10 PM|Dec 26, 2005|Jan 1, 2006|Jan 1, 1999|
|`eurpln`|EUR/PLN|Euro vs Polish Zloty|Mar 14, 2007, 12 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`eurrub`|EUR/RUB|Euro vs Russian Rouble|Mar 13, 2007, 5 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`eursek`|EUR/SEK|Euro vs Swedish Krona|Oct 27, 2004, 5 PM|Oct 27, 2004|Oct 1, 2004|Jan 1, 1991|
|`eursgd`|EUR/SGD|Euro vs Singapore Dollar|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1998|
|`eurtry`|EUR/TRY|Euro vs Turkish Lira|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 2005|
|`gbpaud`|GBP/AUD|Pound Sterling vs Australian Dollar|Mar 22, 2006, 12 AM|Jan 1, 2006|Jan 1, 2006|Jan 1, 1991|
|`gbpcad`|GBP/CAD|Pound Sterling vs Canadian Dollar|Jan 2, 2006, 10 PM|Jan 1, 2006|Jan 1, 2006|Jan 1, 1990|
|`gbpchf`|GBP/CHF|Pound Sterling vs Swiss Franc|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1990|
|`gbpjpy`|GBP/JPY|Pound Sterling vs Japanese Yen|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1991|
|`gbpnzd`|GBP/NZD|Pound Sterling vs New Zealand Dollar|Jan 2, 2006, 10 PM|Jan 1, 2006|Jan 1, 2006|Jan 1, 1994|
|`hkdjpy`|HKD/JPY|Hong Kong Dollar vs Japanese Yen|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1997|
|`nzdcad`|NZD/CAD|New Zealand Dollar vs Canadian Dollar|Jan 2, 2006, 10 PM|Jan 1, 2006|Jan 1, 2006|Jan 1, 2002|
|`nzdchf`|NZD/CHF|New Zealand Dollar vs Swiss Franc|Jan 2, 2006, 10 PM|Jan 1, 2006|Jan 1, 2006|Jan 1, 1997|
|`nzdjpy`|NZD/JPY|New Zealand Dollar vs Japanese Yen|Jan 2, 2006, 10 PM|Jan 1, 2006|Jan 1, 2006|Jan 1, 1997|
|`sgdjpy`|SGD/JPY|Singapore Dollar vs Japanese Yen|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1997|
|`tryjpy`|TRY/JPY|Turkish Lira vs Japanese Yen|May 9, 2010, 9 PM|May 9, 2010|May 1, 2010|Jan 1, 2010|
|`usdcnh`|USD/CNH|US Dollar vs Offshore Chinese Renminbi|Jun 27, 2012, 12 AM|Jun 27, 2012|Jun 1, 2012|Jan 1, 2012|
|`usdczk`|USD/CZK|US Dollar vs Czech Koruna|Jan 3, 2016, 9 PM|Jan 3, 2016|Jan 1, 2016|Jan 1, 2016|
|`usddkk`|USD/DKK|US Dollar vs Danish Krone|Aug 4, 2003, 12 AM|Aug 4, 2003|Aug 1, 2003|Jan 1, 1990|
|`usdhkd`|USD/HKD|US Dollar vs Hong Kong Dollar|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1986|
|`usdhuf`|USD/HUF|US Dollar vs Hungarian Forint|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1998|
|`usdils`|USD/ILS|US Dollar vs Israeli Shekel|Dec 15, 2016, 6 AM|Dec 15, 2016|Dec 1, 2016|Jan 1, 2016|
|`usdmxn`|USD/MXN|US Dollar vs Mexican Peso|Mar 13, 2007, 7 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1995|
|`usdnok`|USD/NOK|US Dollar vs Norwegian Krone|Aug 4, 2003, 12 AM|Aug 4, 2003|Aug 1, 2003|Jan 1, 1991|
|`usdpln`|USD/PLN|US Dollar vs Polish Zloty|Mar 13, 2007, 4 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`usdron`|USD/RON|US Dollar vs Romanian Leu|Dec 18, 2016, 10 PM|Dec 18, 2016|Dec 1, 2016|Jan 1, 2016|
|`usdrub`|USD/RUB|US Dollar vs Russian Ruble|Mar 13, 2007, 7 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1999|
|`usdsek`|USD/SEK|US Dollar vs Swedish Krona|Aug 4, 2003, 12 AM|Aug 4, 2003|Aug 1, 2003|Jan 1, 1991|
|`usdsgd`|USD/SGD|US Dollar vs Singapore Dollar|Nov 16, 2004, 6 PM|Nov 16, 2004|Nov 1, 2004|Jan 1, 1990|
|`usdthb`|USD/THB|US Dollar vs Thai Baht|Feb 13, 2017, 6 AM|Feb 13, 2017|Feb 1, 2017|Jan 1, 2017|
|`usdtry`|USD/TRY|US Dollar vs Turkish Lira|Mar 13, 2007, 7 AM|Mar 13, 2007|Mar 1, 2007|Jan 1, 1998|
|`usdzar`|USD/ZAR|US Dollar vs South African Rand|Oct 13, 1997, 6 PM|Oct 13, 1997|Oct 1, 1997|Jan 1, 1990|
|`zarjpy`|ZAR/JPY|South African Rand vs Japanese Yen|Jun 4, 2007, 12 AM|Mar 3, 1999|Mar 1, 1999|Jan 1, 1997|
<h3 id="fx_majors">Forex majors 💶</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`audusd`|AUD/USD|Australian Dollar vs US Dollar|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1986|
|`eurusd`|EUR/USD|Euro vs US Dollar|May 4, 2003, 7 PM|May 4, 2003|May 1, 2003|Jan 1, 1972|
|`gbpusd`|GBP/USD|Pound Sterling vs US Dollar|May 4, 2003, 8 PM|May 4, 2003|May 1, 2003|Jan 1, 1986|
|`nzdusd`|NZD/USD|New Zealand Dollar vs US Dollar|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1991|
|`usdcad`|USD/CAD|US Dollar vs Canadian Dollar|Aug 3, 2003, 5 PM|Aug 3, 2003|Aug 1, 2003|Jan 1, 1986|
|`usdchf`|USD/CHF|US Dollar vs Swiss Franc|May 4, 2003, 8 PM|May 4, 2003|May 1, 2003|Jan 1, 1986|
|`usdjpy`|USD/JPY|US Dollar vs Japanese Yen|May 4, 2003, 5 PM|May 4, 2003|May 1, 2003|Jan 1, 1986|
<h3 id="fx_metals">Forex metals 🥇</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`xagusd`|XAG/USD|Spot silver|Aug 13, 1997, 2 PM|Aug 13, 1997|Aug 1, 1997|Jan 1, 1997|
|`xauusd`|XAU/USD|Spot gold|May 5, 2003, 12 AM|Sep 1, 1999|Sep 1, 1999|Jan 1, 1997|
<h3 id="idx_america">America 🌎</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dollaridxusd`|DOLLAR.IDX/USD|US Dollar Index|Dec 1, 2017, 12 AM|Dec 1, 2017|Dec 1, 2017|Jan 1, 2017|
|`usa30idxusd`|USA30.IDX/USD|USA 30 Index|Sep 18, 2011, 9 PM|Sep 30, 2013|Sep 1, 2013|Jan 1, 2013|
|`usatechidxusd`|USATECH.IDX/USD|USA 100 Technical Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1990|
|`usa500idxusd`|USA500.IDX/USD|USA 500 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1980|
|`ussc2000idxusd`|USSC2000.IDX/USD|US Small Cap 2000|Jan 1, 2000, 12 AM|Aug 8, 2018|Aug 1, 2018|Jan 1, 2018|
<h3 id="idx_asia">Asia / Pacific 🌏</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`chiidxusd`|CHI.IDX/USD|China A50 Index|Jul 17, 2017, 7 PM|Jul 17, 2017|Jul 1, 2017|Jan 1, 2017|
|`hkgidxhkd`|HKG.IDX/HKD|Hong Kong 40 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1990|
|`jpnidxjpy`|JPN.IDX/JPY|Japan 225|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1986|
|`ausidxaud`|AUS.IDX/AUD|Australia 200 Index|Jan 2, 2013, 6 AM|Jan 2, 2013|Jan 1, 2013|Jan 1, 1982|
|`indidxusd`|IND.IDX/USD|India 50 Index|Dec 1, 2017, 2 AM|Dec 1, 2017|Dec 1, 2017|Jan 1, 2017|
|`sgdidxsgd`|SGD.IDX/SGD|Singapore Blue Chip Cash Index|Dec 1, 2017, 12 AM|Dec 1, 2017|Dec 1, 2017|Jan 1, 2017|
<h3 id="idx_europe">Europe 🌍</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`fraidxeur`|FRA.IDX/EUR|France 40 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1987|
|`deuidxeur`|DEU.IDX/EUR|Germany 30 Index|Sep 18, 2011, 9 PM|Sep 30, 2013|Sep 1, 2013|Jan 1, 2013|
|`eusidxeur`|EUS.IDX/EUR|Europe 50 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1998|
|`gbridxgbp`|GBR.IDX/GBP|UK 100 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1988|
|`espidxeur`|ESP.IDX/EUR|Spain 35 Index|Jan 2, 2012, 8 AM|Jan 2, 2012|Jan 1, 2012|Jan 1, 1992|
|`cheidxchf`|CHE.IDX/CHF|Switzerland 20 Index|Sep 18, 2011, 9 PM|Sep 18, 2011|Sep 1, 2011|Jan 1, 1992|
|`nldidxeur`|NLD.IDX/EUR|Netherlands 25 Index|Feb 25, 2013, 9 AM|Feb 27, 2013|Feb 1, 2013|Jan 1, 1999|
|`plnidxpln`|PLN.IDX/PLN|Poland 20 Index|Dec 1, 2017, 7 AM|Dec 1, 2017|Dec 1, 2017|Jan 1, 2017|
<h3 id="austria">Austria 🇦🇹</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`ebsateur`|EBS.AT/EUR|Erste Group Bank AG|Nov 4, 2016, 3 PM|Nov 4, 2016|Jan 1, 2011|Jan 1, 2011|
|`rbiateur`|RBI.AT/EUR|Raiffeisen Bank International AG|Nov 2, 2016, 8 AM|Nov 2, 2016|Jan 1, 2011|Jan 1, 2011|
|`voeateur`|VOE.AT/EUR|Voestalpine AG|Nov 4, 2016, 3 PM|Nov 4, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="belgium">Belgium 🇧🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abibeeur`|ABI.BE/EUR|Anheuser-Busch InBev NV|Nov 14, 2016, 4 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`agsbeeur`|AGS.BE/EUR|Ageas|Nov 14, 2016, 4 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`belgbeeur`|BELG.BE/EUR|Proximus|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`kbcbeeur`|KBC.BE/EUR|KBC Groep NV|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`solbbeeur`|SOLB.BE/EUR|Solvay SA|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`ucbbeeur`|UCB.BE/EUR|UCB SA|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`umibeeur`|UMI.BE/EUR|Umicore SA|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="denmark">Denmark 🇩🇰</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`carlbdkdkk`|CARLB.DK/DKK|Carlsberg A/S|Nov 7, 2016, 3 PM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`colobdkdkk`|COLOB.DK/DKK|Coloplast A/S|Nov 7, 2016, 3 PM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`danskedkdkk`|DANSKE.DK/DKK|Danske Bank A/S|Nov 8, 2016, 1 PM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`maerskbdkdkk`|MAERSKB.DK/DKK|AP Moeller - Maersk A/S|Nov 8, 2016, 2 PM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`novobdkdkk`|NOVOB.DK/DKK|Novo Nordisk A/S|Nov 7, 2016, 3 PM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`nzymbdkdkk`|NZYMB.DK/DKK|Novozymes A/S|Nov 7, 2016, 3 PM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`pndoradkdkk`|PNDORA.DK/DKK|Pandora A/S|Nov 8, 2016, 2 PM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`vwsdkdkk`|VWS.DK/DKK|Vestas Wind Systems A/S|Nov 7, 2016, 3 PM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="finland">Finland 🇫🇮</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`eli1vfieur`|ELI1V.FI/EUR|Elisa OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`nes1vfieur`|NES1V.FI/EUR|Neste OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`nre1vfieur`|NRE1V.FI/EUR|Nokian Renkaat OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`ote1vfieur`|OTE1V.FI/EUR|Outotec OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`out1vfieur`|OUT1V.FI/EUR|Outokumpu OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`stervfieur`|STERV.FI/EUR|Stora Enso OYJ|Nov 3, 2016, 8 AM|Nov 3, 2016|Jan 1, 2011|Jan 1, 2011|
|`tls1vfieur`|TLS1V.FI/EUR|Telia Company AB|Nov 9, 2016, 9 AM|Nov 9, 2016|Apr 1, 2016|Jan 1, 2016|
<h3 id="france">France 🇫🇷</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`acfreur`|AC.FR/EUR|Accor SA|Aug 11, 2016, 8 AM|Aug 11, 2016|Jan 1, 2011|Jan 1, 2011|
|`acafreur`|ACA.FR/EUR|Credit Agricole SA|Sep 30, 2016, 7 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`affreur`|AF.FR/EUR|Air France-KLM|Sep 27, 2016, 7 AM|Sep 27, 2016|Jan 1, 2011|Jan 1, 2011|
|`aifreur`|AI.FR/EUR|Air Liquide SA|Sep 30, 2016, 8 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`airfreur`|AIR.FR/EUR|Airbus Group SE|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2014|Jan 1, 2014|
|`alofreur`|ALO.FR/EUR|Alstom SA|Sep 27, 2016, 7 AM|Sep 27, 2016|Jan 1, 2011|Jan 1, 2011|
|`bnfreur`|BN.FR/EUR|Danone SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`bnpfreur`|BNP.FR/EUR|BNP Paribas SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`cafreur`|CA.FR/EUR|Carrefour SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`capfreur`|CAP.FR/EUR|Cap Gemini SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`csfreur`|CS.FR/EUR|AXA SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`dgfreur`|DG.FR/EUR|Vinci SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`edffreur`|EDF.FR/EUR|Electricite de France SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`enfreur`|EN.FR/EUR|Bouygues SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`engifreur`|ENGI.FR/EUR|Engie|Sep 30, 2016, 9 AM|Sep 30, 2016|Jul 1, 2015|Jan 1, 2015|
|`fpfreur`|FP.FR/EUR|Total SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`frfreur`|FR.FR/EUR|Valeo SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`glefreur`|GLE.FR/EUR|Societe Generale SA|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`kerfreur`|KER.FR/EUR|Kering|Sep 30, 2016, 9 AM|Sep 30, 2016|Jan 1, 2011|Jan 1, 2011|
|`lifreur`|LI.FR/EUR|Klepierre|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`lrfreur`|LR.FR/EUR|Legrand SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`mcfreur`|MC.FR/EUR|LVMH Moet Hennessy Louis Vuitton SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`orfreur`|OR.FR/EUR|L'Oreal SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`orafreur`|ORA.FR/EUR|Orange SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jul 1, 2013|Jan 1, 2013|
|`pubfreur`|PUB.FR/EUR|Publicis Groupe SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`rifreur`|RI.FR/EUR|Pernod-Ricard SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`rnofreur`|RNO.FR/EUR|Renault SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`saffreur`|SAF.FR/EUR|Safran SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`sanfreur`|SAN.FR/EUR|Sanofi|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`sgofreur`|SGO.FR/EUR|Cie de St-Gobain|Oct 31, 2016, 9 AM|Oct 31, 2016|Jan 1, 2011|Jan 1, 2011|
|`sufreur`|SU.FR/EUR|Schneider Electric SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`ugfreur`|UG.FR/EUR|Peugeot SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`viefreur`|VIE.FR/EUR|Veolia Environnement SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`vivfreur`|VIV.FR/EUR|Vivendi SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
|`vkfreur`|VK.FR/EUR|Vallourec SA|Aug 5, 2016, 2 PM|Aug 5, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="germany">Germany 🇩🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`adsdeeur`|ADS.DE/EUR|Adidas AG|Mar 13, 2015, 8 AM|Mar 13, 2015|Jan 1, 2011|Jan 1, 2011|
|`alvdeeur`|ALV.DE/EUR|Allianz SE|Apr 9, 2015, 7 AM|Apr 9, 2015|Jan 1, 2011|Jan 1, 2011|
|`basdeeur`|BAS.DE/EUR|BASF SE|Apr 22, 2015, 7 AM|Apr 22, 2015|Jan 1, 2011|Jan 1, 2011|
|`bayndeeur`|BAYN.DE/EUR|Bayer AG|Mar 20, 2015, 8 AM|Mar 20, 2015|Jan 1, 2011|Jan 1, 2011|
|`beideeur`|BEI.DE/EUR|Beiersdorf AG|Apr 8, 2015, 7 AM|Apr 8, 2015|Jan 1, 2011|Jan 1, 2011|
|`bmwdeeur`|BMW.DE/EUR|Bayerische Motoren Werke AG|Mar 24, 2015, 8 AM|Mar 24, 2015|Jan 1, 2011|Jan 1, 2011|
|`bossdeeur`|BOSS.DE/EUR|HUGO BOSS AG|Apr 9, 2015, 7 AM|Apr 9, 2015|Jun 1, 2012|Jan 1, 2012|
|`cbkdeeur`|CBK.DE/EUR|Commerzbank AG|Mar 26, 2015, 8 AM|Mar 26, 2015|Jan 1, 2011|Jan 1, 2011|
|`condeeur`|CON.DE/EUR|Continental AG|Apr 8, 2015, 7 AM|Apr 8, 2015|Jan 1, 2011|Jan 1, 2011|
|`daideeur`|DAI.DE/EUR|Daimler AG|Mar 27, 2015, 8 AM|Mar 27, 2015|Jan 1, 2011|Jan 1, 2011|
|`db1deeur`|DB1.DE/EUR|Deutsche Boerse AG|Apr 14, 2015, 7 AM|Apr 14, 2015|Jan 1, 2011|Jan 1, 2011|
|`dbkdeeur`|DBK.DE/EUR|Deutsche Bank AG|Mar 25, 2015, 8 AM|Mar 25, 2015|Jan 1, 2011|Jan 1, 2011|
|`dpwdeeur`|DPW.DE/EUR|Deutsche Post AG|Mar 31, 2015, 7 AM|Mar 31, 2015|Jan 1, 2011|Jan 1, 2011|
|`dtedeeur`|DTE.DE/EUR|Deutsche Telekom AG|Mar 31, 2015, 7 AM|Mar 31, 2015|Jan 1, 2011|Jan 1, 2011|
|`eoandeeur`|EOAN.DE/EUR|E.ON SE|Apr 20, 2015, 7 AM|Apr 20, 2015|Jan 1, 2011|Jan 1, 2011|
|`fmedeeur`|FME.DE/EUR|Fresenius Medical Care AG & Co KGaA|Apr 1, 2015, 7 AM|Apr 1, 2015|Jan 1, 2011|Jan 1, 2011|
|`fredeeur`|FRE.DE/EUR|Fresenius SE & Co KGaA|Apr 10, 2015, 7 AM|Apr 10, 2015|Jan 1, 2011|Jan 1, 2011|
|`heideeur`|HEI.DE/EUR|HeidelbergCement AG|Apr 2, 2015, 7 AM|Apr 2, 2015|Jan 1, 2011|Jan 1, 2011|
|`hen3deeur`|HEN3.DE/EUR|Henkel AG & Co KGaA|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`ifxdeeur`|IFX.DE/EUR|Infineon Technologies AG|Apr 13, 2015, 7 AM|Apr 13, 2015|Jan 1, 2011|Jan 1, 2011|
|`lhadeeur`|LHA.DE/EUR|Deutsche Lufthansa AG|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`lindeeur`|LIN.DE/EUR|Linde AG|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`lxsdeeur`|LXS.DE/EUR|Lanxess AG|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`mrkdeeur`|MRK.DE/EUR|Merck KGaA|Mar 24, 2015, 8 AM|Mar 24, 2015|Jan 1, 2011|Jan 1, 2011|
|`muv2deeur`|MUV2.DE/EUR|Muenchener Rueckversicherungs AG|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`pah3deeur`|PAH3.DE/EUR|Porsche Automobil Holding SE|Apr 21, 2015, 7 AM|Apr 21, 2015|Jan 1, 2011|Jan 1, 2011|
|`psmdeeur`|PSM.DE/EUR|ProSiebenSat.1 Media AG|Apr 20, 2015, 7 AM|Apr 20, 2015|Aug 1, 2013|Jan 1, 2013|
|`rwedeeur`|RWE.DE/EUR|RWE AG|Apr 16, 2015, 7 AM|Apr 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`sapdeeur`|SAP.DE/EUR|SAP AG|Apr 16, 2015, 7 AM|Apr 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`sdfdeeur`|SDF.DE/EUR|K+S AG|Apr 15, 2015, 7 AM|Apr 15, 2015|Aug 1, 2011|Jan 1, 2011|
|`siedeeur`|SIE.DE/EUR|Siemens AG|Apr 20, 2015, 7 AM|Apr 20, 2015|Jan 1, 2011|Jan 1, 2011|
|`tkadeeur`|TKA.DE/EUR|ThyssenKrupp AG|Apr 14, 2015, 7 AM|Apr 14, 2015|Jan 1, 2011|Jan 1, 2011|
|`tui1deeur`|TUI1.DE/EUR|TUI AG|Apr 15, 2015, 7 AM|Apr 15, 2015|Jan 1, 2011|Jan 1, 2011|
|`vnadeeur`|VNA.DE/EUR|Vonovia SE|Apr 14, 2015, 7 AM|Apr 14, 2015|Apr 1, 2015|Jan 1, 2015|
|`vow3deeur`|VOW3.DE/EUR|Volkswagen AG|Apr 14, 2015, 7 AM|Apr 14, 2015|Jan 1, 2011|Jan 1, 2011|
<h3 id="hong-kong">Hong Kong 🇭🇰</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`0005hkhkd`|0005.HK/HKD|HSBC Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0027hkhkd`|0027.HK/HKD|Galaxy Entertainment Group|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0175hkhkd`|0175.HK/HKD|Geely Automobile Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0291hkhkd`|0291.HK/HKD|China Resources Beer Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0386hkhkd`|0386.HK/HKD|Sinopec Corp|Mar 1, 2018, 1 AM|Mar 1, 2018|Mar 1, 2018|Jan 1, 2018|
|`0388hkhkd`|0388.HK/HKD|HK Exchanges & Clearing|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0700hkhkd`|0700.HK/HKD|Tencent Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0857hkhkd`|0857.HK/HKD|PetroChina|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0883hkhkd`|0883.HK/HKD|China National Offshore Oil Corporation|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0939hkhkd`|0939.HK/HKD|China Construction Bank|Mar 29, 2008, 6 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`0941hkhkd`|0941.HK/HKD|China Mobile|Apr 10, 2018, 1 AM|Apr 10, 2018|Apr 1, 2018|Jan 1, 2018|
|`0998hkhkd`|0998.HK/HKD|CITIC Bank International|Feb 1, 2018, 1 AM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`1093hkhkd`|1093.HK/HKD|CSPC Pharmaceutical Group|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`1177hkhkd`|1177.HK/HKD|Sino Biopharmeceutical|May 23, 2018, 1 AM|May 23, 2018|May 1, 2018|Jan 1, 2018|
|`1288hkhkd`|1288.HK/HKD|Agricultural Bank of China|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`1299hkhkd`|1299.HK/HKD|AIA|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`1398hkhkd`|1398.HK/HKD|Industrial and Commercial Bank of China|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`1918hkhkd`|1918.HK/HKD|Sunac China Holdings|Feb 1, 2018, 1 AM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`2007hkhkd`|2007.HK/HKD|Country Garden Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`2018hkhkd`|2018.HK/HKD|AAC Technologies Holdings|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`2318hkhkd`|2318.HK/HKD|Ping An Insurance|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`2388hkhkd`|2388.HK/HKD|BOC Hong Kong (Holdings)|Feb 5, 2018, 1 AM|Feb 5, 2018|Feb 1, 2018|Jan 1, 2018|
|`2628hkhkd`|2628.HK/HKD|China Life Insurance Company|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`3333hkhkd`|3333.HK/HKD|China Evergrande Group|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`3968hkhkd`|3968.HK/HKD|China Merchants Bank|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
|`3988hkhkd`|3988.HK/HKD|Bank of China|Jan 2, 2018, 1 AM|Jan 2, 2018|Jan 1, 2018|Jan 1, 2018|
<h3 id="japan">Japan 🇯🇵</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`2502jpjpy`|2502.JP/JPY|Asahi Group Holdings|Mar 22, 2018, 11 PM|Mar 22, 2018|Mar 1, 2018|Jan 1, 2018|
|`2503jpjpy`|2503.JP/JPY|Kirin Brewery Co|May 22, 2018, 11 PM|May 22, 2018|May 1, 2018|Jan 1, 2018|
|`2914jpjpy`|2914.JP/JPY|Japan Tobacco|Mar 28, 2018, 11 PM|Mar 28, 2018|Mar 1, 2018|Jan 1, 2018|
|`3382jpjpy`|3382.JP/JPY|Seven and I Holdings|Apr 1, 2018, 11 PM|Apr 1, 2018|Apr 1, 2018|Jan 1, 2018|
|`3436jpjpy`|3436.JP/JPY|Sumco Corp|Apr 4, 2018, 11 PM|Apr 4, 2018|Apr 1, 2018|Jan 1, 2018|
|`4004jpjpy`|4004.JP/JPY|Showa Denko|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4005jpjpy`|4005.JP/JPY|Sumitomo Chemical|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4063jpjpy`|4063.JP/JPY|Shin-Etsu Chemical|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4452jpjpy`|4452.JP/JPY|Kao Corp|Jul 3, 2018, 5 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4502jpjpy`|4502.JP/JPY|Takeda|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4503jpjpy`|4503.JP/JPY|Astellas Pharma|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4507jpjpy`|4507.JP/JPY|Shionogi|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4523jpjpy`|4523.JP/JPY|Eisai|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4543jpjpy`|4543.JP/JPY|Terumo Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4689jpjpy`|4689.JP/JPY|Yahoo Japan Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`4911jpjpy`|4911.JP/JPY|Shiseido|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`5108jpjpy`|5108.JP/JPY|Bridgestone Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`5301jpjpy`|5301.JP/JPY|Tokai Carbon|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`5401jpjpy`|5401.JP/JPY|Nippon Steel Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6098jpjpy`|6098.JP/JPY|Recruit Holdings Co Ltd|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6301jpjpy`|6301.JP/JPY|Komatsu|Aug 14, 2018, 12 AM|Aug 14, 2018|Aug 1, 2018|Jan 1, 2018|
|`6367jpjpy`|6367.JP/JPY|Daikin Industries|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6501jpjpy`|6501.JP/JPY|Hitachi|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6502jpjpy`|6502.JP/JPY|Toshiba Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6503jpjpy`|6503.JP/JPY|Mitsubishi Electric Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6506jpjpy`|6506.JP/JPY|Yaskawa Electric Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6702jpjpy`|6702.JP/JPY|Fujitsu|Aug 14, 2018, 12 AM|Aug 14, 2018|Aug 1, 2018|Jan 1, 2018|
|`6752jpjpy`|6752.JP/JPY|Panasonic Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6758jpjpy`|6758.JP/JPY|Sony Corp Japan|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6762jpjpy`|6762.JP/JPY|TDK Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6902jpjpy`|6902.JP/JPY|Denso Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6954jpjpy`|6954.JP/JPY|Fanuc|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`6971jpjpy`|6971.JP/JPY|Kyocera|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7201jpjpy`|7201.JP/JPY|Nissan Motor Co|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7203jpjpy`|7203.JP/JPY|Toyota Motor Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7261jpjpy`|7261.JP/JPY|Mazda Motor|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7267jpjpy`|7267.JP/JPY|Honda Motor Company|Jul 3, 2018, 5 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7269jpjpy`|7269.JP/JPY|Suzuki Motor Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7270jpjpy`|7270.JP/JPY|Subaru Corporation|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7751jpjpy`|7751.JP/JPY|Canon|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`7974jpjpy`|7974.JP/JPY|Nintendo Co Ltd|Jul 3, 2018, 5 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8031jpjpy`|8031.JP/JPY|Mitsui and Company|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8035jpjpy`|8035.JP/JPY|Tokyo Electron|Jul 3, 2018, 5 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8306jpjpy`|8306.JP/JPY|Mitsubishi UFJ Financial Group|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8316jpjpy`|8316.JP/JPY|Sumitomo Mitsui Financial Group|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8411jpjpy`|8411.JP/JPY|Mizuho Financial Group|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8766jpjpy`|8766.JP/JPY|Tokio Marine Holdings|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8801jpjpy`|8801.JP/JPY|Mitsui Fudosan Company|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`8802jpjpy`|8802.JP/JPY|Mitsubishi Estate Company|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9020jpjpy`|9020.JP/JPY|East Japan Railway Company|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9432jpjpy`|9432.JP/JPY|Nippon Telegraph and Tel|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9433jpjpy`|9433.JP/JPY|KDDI Corp|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9437jpjpy`|9437.JP/JPY|NTT Docomo|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9501jpjpy`|9501.JP/JPY|Tokyo Electric Power Company|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9983jpjpy`|9983.JP/JPY|Fast Retailing|Jul 3, 2018, 12 AM|Jul 3, 2018|Jul 1, 2018|Jan 1, 2018|
|`9984jpjpy`|9984.JP/JPY|Softbank Group Corp|Aug 14, 2018, 12 AM|Sep 26, 2018|Sep 1, 2018|Jan 1, 2018|
<h3 id="netherlands">Netherlands 🇳🇱</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`agnnleur`|AGN.NL/EUR|Aegon NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`ahnleur`|AH.NL/EUR|Koninklijke Ahold Delhaize NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`akzanleur`|AKZA.NL/EUR|Akzo Nobel NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`asmlnleur`|ASML.NL/EUR|ASML Holding NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`dsmnleur`|DSM.NL/EUR|Koninklijke DSM NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`heianleur`|HEIA.NL/EUR|Heineken NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`inganleur`|INGA.NL/EUR|ING Groep NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jul 1, 2016|Jan 1, 2016|
|`kpnnleur`|KPN.NL/EUR|Koninklijke KPN NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`mtnleur`|MT.NL/EUR|ArcelorMittal|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`phianleur`|PHIA.NL/EUR|Koninklijke Philips NV|Nov 9, 2016, 2 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`randnleur`|RAND.NL/EUR|Randstad Holding NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`rdsanleur`|RDSA.NL/EUR|Royal Dutch Shell PLC|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`rennleur`|REN.NL/EUR|RELX NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jul 1, 2015|Jan 1, 2015|
|`unanleur`|UNA.NL/EUR|Unilever NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`vpknleur`|VPK.NL/EUR|Koninklijke Vopak NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`wklnleur`|WKL.NL/EUR|Wolters Kluwer NV|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="norway">Norway 🇳🇴</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`dnbnonok`|DNB.NO/NOK|DNB ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Nov 1, 2011|Jan 1, 2011|
|`mhgnonok`|MHG.NO/NOK|Marine Harvest ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`nhynonok`|NHY.NO/NOK|Norsk Hydro ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`orknonok`|ORK.NO/NOK|Orkla ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`stlnonok`|STL.NO/NOK|Statoil ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`telnonok`|TEL.NO/NOK|Telenor ASA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="portugal">Portugal 🇵🇹</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`edppteur`|EDP.PT/EUR|EDP - Energias de Portugal SA|Nov 14, 2016, 3 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`galppteur`|GALP.PT/EUR|Galp Energia SGPS SA|Nov 14, 2016, 3 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="spain">Spain 🇪🇸</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`acseseur`|ACS.ES/EUR|ACS Actividades de Construccion y Servicios SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`acxeseur`|ACX.ES/EUR|Acerinox SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`aenaeseur`|AENA.ES/EUR|Aena SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Feb 1, 2015|Jan 1, 2015|
|`amseseur`|AMS.ES/EUR|Amadeus IT Holding SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`bbvaeseur`|BBVA.ES/EUR|Banco Bilbao Vizcaya Argentaria SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`cabkeseur`|CABK.ES/EUR|CaixaBank|Nov 14, 2016, 11 AM|Nov 14, 2016|Jul 1, 2011|Jan 1, 2011|
|`diaeseur`|DIA.ES/EUR|Distribuidora Internacional de Alimentacion SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jul 1, 2011|Jan 1, 2011|
|`eleeseur`|ELE.ES/EUR|Endesa SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`engeseur`|ENG.ES/EUR|Enagas SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`fereseur`|FER.ES/EUR|Ferrovial SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`gameseur`|GAM.ES/EUR|Gamesa Corporacion Tecnologica SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`gaseseur`|GAS.ES/EUR|Gas Natural SDG SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`ibeeseur`|IBE.ES/EUR|Iberdrola SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`itxeseur`|ITX.ES/EUR|Inditex SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`reeeseur`|REE.ES/EUR|Red Electrica Corp SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`repeseur`|REP.ES/EUR|Repsol SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`saneseur`|SAN.ES/EUR|Banco Santander SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`tefeseur`|TEF.ES/EUR|Telefonica SA|Nov 14, 2016, 11 AM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="sweden">Sweden 🇸🇪</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abbsesek`|ABB.SE/SEK|ABB Ltd|Nov 14, 2016, 1 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`alfasesek`|ALFA.SE/SEK|Alfa Laval AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`atcoasesek`|ATCOA.SE/SEK|Atlas Copco AB|Nov 14, 2016, 2 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`eluxbsesek`|ELUXB.SE/SEK|Electrolux AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`ericbsesek`|ERICB.SE/SEK|Telefonaktiebolaget LM Ericsson|Nov 14, 2016, 3 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`getibsesek`|GETIB.SE/SEK|Getinge AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`hmbsesek`|HMB.SE/SEK|Hennes & Mauritz AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`invebsesek`|INVEB.SE/SEK|Investor AB|Nov 14, 2016, 3 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`ndasesek`|NDA.SE/SEK|Nordea Bank AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`sandsesek`|SAND.SE/SEK|Sandvik AB|Nov 7, 2016, 8 AM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`scabsesek`|SCAB.SE/SEK|Svenska Cellulosa AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`sebasesek`|SEBA.SE/SEK|Skandinaviska Enskilda Banken AB|Nov 14, 2016, 3 PM|Nov 14, 2016|Jan 1, 2011|Jan 1, 2011|
|`secubsesek`|SECUB.SE/SEK|Securitas AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`skabsesek`|SKAB.SE/SEK|Skanska AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`skfbsesek`|SKFB.SE/SEK|SKF AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`swedasesek`|SWEDA.SE/SEK|Swedbank AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`swmasesek`|SWMA.SE/SEK|Swedish Match AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`tel2bsesek`|TEL2B.SE/SEK|Tele2 AB|Nov 7, 2016, 8 AM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`tlsnsesek`|TLSN.SE/SEK|Telia Company AB|Nov 14, 2016, 4 PM|Nov 14, 2016|Apr 1, 2016|Jan 1, 2016|
|`volvbsesek`|VOLVB.SE/SEK|Volvo AB|Nov 7, 2016, 8 AM|Nov 7, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="switzerland">Switzerland 🇨🇭</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`abbnchchf`|ABBN.CH/CHF|ABB Ltd|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`adenchchf`|ADEN.CH/CHF|Adecco SA|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`baerchchf`|BAER.CH/CHF|Julius Baer Group Ltd|Jun 16, 2015, 3 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`clnchchf`|CLN.CH/CHF|Clariant AG|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`csgnchchf`|CSGN.CH/CHF|Credit Suisse Group AG|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`givnchchf`|GIVN.CH/CHF|Givaudan SA|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`kninchchf`|KNIN.CH/CHF|Kuehne + Nagel International AG|Jun 17, 2015, 3 AM|Jun 17, 2015|Jan 1, 2011|Jan 1, 2011|
|`lhnchchf`|LHN.CH/CHF|Lafarge Holcim Ltd|Jun 17, 2015, 3 AM|Jun 17, 2015|Jun 1, 2015|Jan 1, 2015|
|`lonnchchf`|LONN.CH/CHF|Lonza Group AG|Jun 16, 2015, 3 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`nesnchchf`|NESN.CH/CHF|Nestle SA|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`novnchchf`|NOVN.CH/CHF|Novartis AG|Jun 16, 2015, 7 AM|Jun 16, 2015|Jan 1, 2011|Jan 1, 2011|
|`rogchchf`|ROG.CH/CHF|Roche Holding AG|Jul 3, 2015, 7 AM|Jul 3, 2015|Jan 1, 2011|Jan 1, 2011|
|`scmnchchf`|SCMN.CH/CHF|Swisscom AG|Jul 3, 2015, 3 AM|Jul 3, 2015|Jan 1, 2011|Jan 1, 2011|
|`sgsnchchf`|SGSN.CH/CHF|SGS SA|Aug 6, 2015, 7 AM|Aug 6, 2015|Jan 1, 2011|Jan 1, 2011|
|`slhnchchf`|SLHN.CH/CHF|Swiss Life Holding AG|Aug 6, 2015, 7 AM|Aug 6, 2015|Jan 1, 2011|Jan 1, 2011|
|`soonchchf`|SOON.CH/CHF|Sonova Holding AG|Aug 7, 2015, 3 AM|Aug 7, 2015|Jan 1, 2011|Jan 1, 2011|
|`srenchchf`|SREN.CH/CHF|Swiss Re AG|Aug 6, 2015, 7 AM|Aug 6, 2015|May 1, 2011|Jan 1, 2011|
|`ubsgchchf`|UBSG.CH/CHF|UBS Group AG|Jun 15, 2015, 7 AM|Jun 15, 2015|Nov 1, 2014|Jan 1, 2014|
|`uhrchchf`|UHR.CH/CHF|Swatch Group AG/The|Aug 7, 2015, 3 AM|Aug 7, 2015|Jan 1, 2011|Jan 1, 2011|
|`zurnchchf`|ZURN.CH/CHF|Zurich Insurance Group AG|Aug 7, 2015, 7 AM|Aug 7, 2015|Jan 1, 2011|Jan 1, 2011|
<h3 id="uk">UK 🇬🇧</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`aalgbgbx`|AAL.GB/GBX|Anglo American PLC|Aug 25, 2015, 6 AM|Aug 1, 2016|Jan 1, 2011|Jan 1, 2011|
|`abfgbgbx`|ABF.GB/GBX|Associated British Foods PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`admgbgbx`|ADM.GB/GBX|Admiral Group PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`agkgbgbx`|AGK.GB/GBX|Aggreko PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`ahtgbgbx`|AHT.GB/GBX|Ashtead Group PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`antogbgbx`|ANTO.GB/GBX|Antofagasta PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`avgbgbx`|AV.GB/GBX|Aviva PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`azngbgbx`|AZN.GB/GBX|AstraZeneca PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`bagbgbx`|BA.GB/GBX|BAE Systems PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`babgbgbx`|BAB.GB/GBX|Babcock International Group PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`barcgbgbx`|BARC.GB/GBX|Barclays PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`batsgbgbx`|BATS.GB/GBX|British American Tobacco PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`blndgbgbx`|BLND.GB/GBX|British Land Co PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`bltgbgbx`|BLT.GB/GBX|BHP Billiton PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`bnzlgbgbx`|BNZL.GB/GBX|Bunzl PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`bpgbgbx`|BP.GB/GBX|BP PLC|Sep 6, 2016, 7 AM|Sep 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`brbygbgbx`|BRBY.GB/GBX|Burberry Group PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`btgbgbx`|BT.GB/GBX|BT Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`cclgbgbx`|CCL.GB/GBX|Carnival PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`cnagbgbx`|CNA.GB/GBX|Centrica PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`cpggbgbx`|CPG.GB/GBX|Compass Group PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`cpigbgbx`|CPI.GB/GBX|Capita PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`crdagbgbx`|CRDA.GB/GBX|Croda International PLC|Nov 1, 2016, 10 AM|Nov 1, 2016|Jan 1, 2011|Jan 1, 2011|
|`crhgbgbx`|CRH.GB/GBX|CRH PLC|Nov 8, 2016, 8 AM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`dgegbgbx`|DGE.GB/GBX|Diageo PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`expngbgbx`|EXPN.GB/GBX|Experian PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`ezjgbgbx`|EZJ.GB/GBX|easyJet PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`fresgbgbx`|FRES.GB/GBX|Fresnillo PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`gfsgbgbx`|GFS.GB/GBX|G4S PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`glengbgbx`|GLEN.GB/GBX|Glencore PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|May 1, 2011|Jan 1, 2011|
|`gskgbgbx`|GSK.GB/GBX|GlaxoSmithKline PLC|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2020|
|`hmsogbgbx`|HMSO.GB/GBX|Hammerson PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`hsbagbgbx`|HSBA.GB/GBX|HSBC Holdings PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`iaggbgbx`|IAG.GB/GBX|International Consolidated Airlines Grou|Nov 8, 2016, 1 PM|Nov 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`ihggbgbx`|IHG.GB/GBX|InterContinental Hotels Group PLC|Nov 1, 2016, 8 AM|Nov 1, 2016|Jan 1, 2011|Jan 1, 2011|
|`imtgbgbx`|IMT.GB/GBX|Imperial Brands Plc|Jul 6, 2016, 7 AM|Jul 6, 2016|Feb 1, 2016|Jan 1, 2016|
|`isatgbgbx`|ISAT.GB/GBX|Inmarsat PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`itrkgbgbx`|ITRK.GB/GBX|Intertek Group PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`itvgbgbx`|ITV.GB/GBX|ITV PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`kgfgbgbx`|KGF.GB/GBX|Kingfisher PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`landgbgbx`|LAND.GB/GBX|Land Securities Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`lgengbgbx`|LGEN.GB/GBX|Legal & General Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`lloygbgbx`|LLOY.GB/GBX|Lloyds Banking Group PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`lsegbgbx`|LSE.GB/GBX|London Stock Exchange Group PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`mksgbgbx`|MKS.GB/GBX|Marks & Spencer Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`mndigbgbx`|MNDI.GB/GBX|Mondi PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`mrwgbgbx`|MRW.GB/GBX|WM Morrison Supermarkets PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`nggbgbx`|NG.GB/GBX|National Grid PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`nxtgbgbx`|NXT.GB/GBX|Next PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`pfcgbgbx`|PFC.GB/GBX|Petrofac Ltd|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`prugbgbx`|PRU.GB/GBX|Prudential PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`psngbgbx`|PSN.GB/GBX|Persimmon PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`psongbgbx`|PSON.GB/GBX|Pearson PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`rbgbgbx`|RB.GB/GBX|Reckitt Benckiser Group PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`rbsgbgbx`|RBS.GB/GBX|Royal Bank of Scotland Group PLC|Jul 8, 2016, 11 AM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`rdsbgbgbx`|RDSB.GB/GBX|Royal Dutch Shell PLC|Nov 1, 2016, 10 AM|Nov 1, 2016|Jan 1, 2011|Jan 1, 2011|
|`relgbgbx`|REL.GB/GBX|Reed Elsevier PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`riogbgbx`|RIO.GB/GBX|Rio Tinto PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`rmggbgbx`|RMG.GB/GBX|Royal Mail PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Oct 1, 2013|Jan 1, 2013|
|`rrgbgbx`|RR.GB/GBX|Rolls-Royce Holdings PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`rsagbgbx`|RSA.GB/GBX|RSA Insurance Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`sbrygbgbx`|SBRY.GB/GBX|J Sainsbury PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`sgegbgbx`|SGE.GB/GBX|Sage Group PLC/The|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`skygbgbx`|SKY.GB/GBP|Sky Plc|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2016|
|`smingbgbx`|SMIN.GB/GBX|Smiths Group PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`sngbgbx`|SN.GB/GBX|Smith & Nephew PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`ssegbgbx`|SSE.GB/GBX|SSE PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`stangbgbx`|STAN.GB/GBX|Standard Chartered PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`svtgbgbx`|SVT.GB/GBX|Severn Trent PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`tategbgbx`|TATE.GB/GBX|Tate & Lyle PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`tlwgbgbx`|TLW.GB/GBX|Tullow Oil PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`tpkgbgbx`|TPK.GB/GBX|Travis Perkins PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`tscogbgbx`|TSCO.GB/GBX|Tesco PLC|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`ulvrgbgbx`|ULVR.GB/GBX|Unilever PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`uugbgbx`|UU.GB/GBX|United Utilities Group PLC|Jul 8, 2016, 3 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`vodgbgbx`|VOD.GB/GBX|Vodafone Group PLC|Jul 7, 2016, 9 AM|Jul 7, 2016|Jan 1, 2011|Jan 1, 2011|
|`weirgbgbx`|WEIR.GB/GBX|Weir Group PLC/The|Jul 8, 2016, 2 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`wosgbgbx`|WOS.GB/GBX|Wolseley PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
|`wppgbgbx`|WPP.GB/GBX|WPP PLC|Jul 8, 2016, 12 PM|Jul 8, 2016|Jan 1, 2011|Jan 1, 2011|
|`wtbgbgbx`|WTB.GB/GBX|Whitbread PLC|Jul 6, 2016, 7 AM|Jul 6, 2016|Jan 1, 2011|Jan 1, 2011|
<h3 id="us">US 🇺🇸</h3>

|Instrument id|Name|Description|Earliset tick data (UTC)|Earliset minute data (UTC)|Earliset hour data (UTC)|Earliset day data (UTC)|
|-|-|-|-|-|-|-|
|`aususd`|A.US/USD|AGILENT TECHNOLOGIES INC|May 25, 2017, 2 PM|May 25, 2017|May 1, 2017|Jan 1, 2017|
|`aaususd`|AA.US/USD|ALCOA INC|Jan 30, 2018, 3 PM|Jan 30, 2018|Jan 1, 2018|Jan 1, 2018|
|`aalususd`|AAL.US/USD|AMERICAN AIRLINES GROUP INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`aaplususd`|AAPL.US/USD|APPLE INC|Jan 17, 2017, 3 PM|Jan 17, 2017|Jan 1, 2017|Jan 1, 2017|
|`abcususd`|ABC.US/USD|AMERISOURCEBERGEN CORP|Jan 30, 2018, 4 PM|Jan 30, 2018|Jan 1, 2018|Jan 1, 2018|
|`abevususd`|ABEV.US/USD|Ambev S.A.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`abtususd`|ABT.US/USD|ABBOTT LABORATORIES|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`adbeususd`|ADBE.US/USD|ADOBE SYSTEMS INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`adiususd`|ADI.US/USD|ANALOG DEVICES INC|Jan 30, 2018, 4 PM|Jan 30, 2018|Jan 1, 2018|Jan 1, 2018|
|`adpususd`|ADP.US/USD|AUTOMATIC DATA PROCESSING|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`adskususd`|ADSK.US/USD|AUTODESK INC|Jan 30, 2018, 4 PM|Jan 30, 2018|Jan 1, 2018|Jan 1, 2018|
|`aepususd`|AEP.US/USD|AMERICAN ELECTRIC POWER|Sep 26, 2016, 2 PM|Sep 26, 2016|Sep 1, 2016|Jan 1, 2016|
|`aigususd`|AIG.US/USD|AMERICAN INTERNATIONAL GROUP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`allususd`|ALL.US/USD|ALLSTATE CORP|Jan 31, 2018, 3 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`alxnususd`|ALXN.US/USD|ALEXION PHARMACEUTICALS INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`amatususd`|AMAT.US/USD|APPLIED MATERIALS INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`amdususd`|AMD.US/USD|ADVANCED MICRO DEVICES|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`amgnususd`|AMGN.US/USD|AMGEN INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`ampususd`|AMP.US/USD|AMERIPRISE FINANCIAL INC|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`amtususd`|AMT.US/USD|AMERICAN TOWER CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`amznususd`|AMZN.US/USD|AMAZON.COM INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`antmususd`|ANTM.US/USD|ANTHEM INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`apaususd`|APA.US/USD|APACHE CORP|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`apdususd`|APD.US/USD|AIR PRODUCTS & CHEMICALS INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`atviususd`|ATVI.US/USD|ACTIVISION BLIZZARD INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`avbususd`|AVB.US/USD|AVALONBAY COMMUNITIES INC|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`avgoususd`|AVGO.US/USD|Broadcom Limited|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`axpususd`|AXP.US/USD|AMERICAN EXPRESS CO|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`aznususd`|AZN.US/USD|AstraZeneca PLC|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`azoususd`|AZO.US/USD|AUTOZONE INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`baususd`|BA.US/USD|Boeing Co|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`babaususd`|BABA.US/USD|ALIBABA GROUP HOLDING-SP ADR|Jan 19, 2017, 8 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`bacususd`|BAC.US/USD|BANK OF AMERICA CORP|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`bbdususd`|BBD.US/USD|Banco Bradesco S.A.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`bbyususd`|BBY.US/USD|BEST BUY CO INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`bdxususd`|BDX.US/USD|BECTON DICKINSON AND CO|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`biduususd`|BIDU.US/USD|BAIDU INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`biibususd`|BIIB.US/USD|BIOGEN INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`bkususd`|BK.US/USD|BANK OF NEW YORK MELLON CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`bmyususd`|BMY.US/USD|BRISTOL-MYERS SQUIBB CO|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`bpususd`|BP.US/USD|BP p.l.c.|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`brkbususd`|BRKB.US/USD|BERKSHIRE HATHAWAY INC-CL B|Nov 6, 2017, 2 PM|Nov 6, 2017|Nov 1, 2017|Jan 1, 2017|
|`bsxususd`|BSX.US/USD|BOSTON SCIENTIFIC CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`cususd`|C.US/USD|CITIGROUP INC|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`cagususd`|CAG.US/USD|CONAGRA FOODS INC|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`cahususd`|CAH.US/USD|CARDINAL HEALTH INC|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`catususd`|CAT.US/USD|CATERPILLAR INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`cernususd`|CERN.US/USD|CERNER CORP|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2020|
|`cfususd`|CF.US/USD|CF INDUSTRIES HOLDINGS INC|Jan 31, 2018, 4 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`ciususd`|CI.US/USD|CIGNA CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`clususd`|CL.US/USD|COLGATE-PALMOLIVE CO|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`cmcsaususd`|CMCSA.US/USD|COMCAST CORP-CLASS A|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`cmeususd`|CME.US/USD|CME GROUP INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`cmgususd`|CMG.US/USD|CHIPOTLE MEXICAN GRILL INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`cmiususd`|CMI.US/USD|CUMMINS INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`cofususd`|COF.US/USD|CAPITAL ONE FINANCIAL CORP|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2020|
|`copususd`|COP.US/USD|CONOCOPHILLIPS|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`costususd`|COST.US/USD|COSTCO WHOLESALE CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`crmususd`|CRM.US/USD|SALESFORCE.COM INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`csususd`|CS.US/USD|Credit Suisse Group AG|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`cscoususd`|CSCO.US/USD|CISCO SYSTEMS INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`csxususd`|CSX.US/USD|CSX CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ctlususd`|CTL.US/USD|CENTURYLINK INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ctshususd`|CTSH.US/USD|COGNIZANT TECH SOLUTIONS-A|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ctxsususd`|CTXS.US/USD|CITRIX SYSTEMS INC|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2020|
|`cvsususd`|CVS.US/USD|CVS HEALTH CORP|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`cvxususd`|CVX.US/USD|CHEVRON CORP|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`dususd`|D.US/USD|DOMINION RESOURCES INC/VA|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`dalususd`|DAL.US/USD|DELTA AIR LINES INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`deususd`|DE.US/USD|DEERE & CO|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`dfsususd`|DFS.US/USD|DISCOVER FINANCIAL SERVICES|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`dgususd`|DG.US/USD|DOLLAR GENERAL CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`dhiususd`|DHI.US/USD|DR HORTON INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`dhrususd`|DHR.US/USD|DANAHER CORP|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`disususd`|DIS.US/USD|WALT DISNEY CO/THE|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`dltrususd`|DLTR.US/USD|DOLLAR TREE INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`dukususd`|DUK.US/USD|DUKE ENERGY CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`dvaususd`|DVA.US/USD|DAVITA HEALTHCARE PARTNERS I|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`dvnususd`|DVN.US/USD|DEVON ENERGY CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`eaususd`|EA.US/USD|ELECTRONIC ARTS INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`ebayususd`|EBAY.US/USD|EBAY INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`efxususd`|EFX.US/USD|EQUIFAX INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`eixususd`|EIX.US/USD|EDISON INTERNATIONAL|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`elususd`|EL.US/USD|ESTEE LAUDER COMPANIES-CL A|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`emrususd`|EMR.US/USD|EMERSON ELECTRIC CO|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`eogususd`|EOG.US/USD|EOG RESOURCES INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`eqtususd`|EQT.US/USD|EQT CORP|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`excususd`|EXC.US/USD|EXELON CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`expeususd`|EXPE.US/USD|EXPEDIA INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`fususd`|F.US/USD|FORD MOTOR CO|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`fbususd`|FB.US/USD|FACEBOOK INC-A|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`fcxususd`|FCX.US/USD|FREEPORT-MCMORAN INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`fdxususd`|FDX.US/USD|FEDEX CORP|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`feususd`|FE.US/USD|FIRSTENERGY CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`fitbususd`|FITB.US/USD|FIFTH THIRD BANCORP|Dec 27, 2020, 12 AM|Dec 27, 2020|Dec 27, 2020|Jan 1, 2020|
|`foxaususd`|FOXA.US/USD|TWENTY-FIRST CENTURY FOX-A|Jan 31, 2018, 3 PM|Jan 31, 2018|Jan 1, 2018|Jan 1, 2018|
|`geususd`|GE.US/USD|GENERAL ELECTRIC CO|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`gildususd`|GILD.US/USD|GILEAD SCIENCES INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`gisususd`|GIS.US/USD|GENERAL MILLS INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`glwususd`|GLW.US/USD|CORNING INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`gmususd`|GM.US/USD|GENERAL MOTORS CO|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`googususd`|GOOG.US/USD|ALPHABET INC-CL C|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`googlususd`|GOOGL.US/USD|ALPHABET INC-CL A|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`gpsususd`|GPS.US/USD|GAP INC/THE|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`gsususd`|GS.US/USD|GOLDMAN SACHS GROUP INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`gwwususd`|GWW.US/USD|WW GRAINGER INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`halususd`|HAL.US/USD|HALLIBURTON CO|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`hcnususd`|HCN.US/USD|WELLTOWER INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`hdususd`|HD.US/USD|HOME DEPOT INC|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`hesususd`|HES.US/USD|HESS CORP|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`honususd`|HON.US/USD|HONEYWELL INTERNATIONAL INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`hpqususd`|HPQ.US/USD|HP INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`humususd`|HUM.US/USD|HUMANA INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ibmususd`|IBM.US/USD|INTL BUSINESS MACHINES CORP|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`iceususd`|ICE.US/USD|INTERCONTINENTAL EXCHANGE IN|Nov 6, 2017, 2 PM|Nov 6, 2017|Nov 1, 2017|Jan 1, 2017|
|`ilmnususd`|ILMN.US/USD|ILLUMINA INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`intcususd`|INTC.US/USD|INTEL CORP|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`intuususd`|INTU.US/USD|INTUIT INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`ipgususd`|IPG.US/USD|INTERPUBLIC GROUP OF COS INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`isrgususd`|ISRG.US/USD|INTUITIVE SURGICAL INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`itubususd`|ITUB.US/USD|Itau Unibanco Holding S.A.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`itwususd`|ITW.US/USD|ILLINOIS TOOL WORKS|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`jciususd`|JCI.US/USD|JOHNSON CONTROLS INC|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`jnjususd`|JNJ.US/USD|JOHNSON & JOHNSON|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`jpmususd`|JPM.US/USD|JPMORGAN CHASE & CO|Jan 19, 2017, 5 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`jwnususd`|JWN.US/USD|NORDSTROM INC|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`kususd`|K.US/USD|KELLOGG CO|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`keyususd`|KEY.US/USD|KEYCORP|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`khcususd`|KHC.US/USD|KRAFT HEINZ CO/THE|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`kmbususd`|KMB.US/USD|KIMBERLY-CLARK CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`kmiususd`|KMI.US/USD|KINDER MORGAN INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`koususd`|KO.US/USD|COCA-COLA CO/THE|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`krususd`|KR.US/USD|KROGER CO|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`kssususd`|KSS.US/USD|KOHLS CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`lususd`|L.US/USD|LOEWS CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`lenususd`|LEN.US/USD|LENNAR CORP-A|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`llyususd`|LLY.US/USD|ELI LILLY & CO|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`lmtususd`|LMT.US/USD|LOCKHEED MARTIN CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`lowususd`|LOW.US/USD|LOWE'S COS INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`lrcxususd`|LRCX.US/USD|LAM RESEARCH CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`luvususd`|LUV.US/USD|SOUTHWEST AIRLINES CO|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`lvsususd`|LVS.US/USD|Las Vegas Sands Corp.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`mususd`|M.US/USD|MACY'S INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`maususd`|MA.US/USD|MASTERCARD INC-CLASS A|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`marususd`|MAR.US/USD|MARRIOTT INTERNATIONAL -CL A|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`matususd`|MAT.US/USD|MATTEL INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`mcdususd`|MCD.US/USD|MCDONALD'S CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mchpususd`|MCHP.US/USD|MICROCHIP TECHNOLOGY INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`mckususd`|MCK.US/USD|MCKESSON CORP|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mdlzususd`|MDLZ.US/USD|MONDELEZ INTERNATIONAL INC-A|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`metususd`|MET.US/USD|METLIFE INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mgmususd`|MGM.US/USD|MGM RESORTS INTERNATIONAL|Nov 2, 2017, 2 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mmmususd`|MMM.US/USD|3M CO|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`moususd`|MO.US/USD|ALTRIA GROUP INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mpcususd`|MPC.US/USD|MARATHON PETROLEUM CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`mrkususd`|MRK.US/USD|MERCK & CO. INC.|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`mroususd`|MRO.US/USD|MARATHON OIL CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`msususd`|MS.US/USD|MORGAN STANLEY|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`msftususd`|MSFT.US/USD|MICROSOFT CORP|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`muususd`|MU.US/USD|MICRON TECHNOLOGY INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`nblususd`|NBL.US/USD|NOBLE ENERGY INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`neeususd`|NEE.US/USD|NEXTERA ENERGY INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`nemususd`|NEM.US/USD|NEWMONT MINING CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`nflxususd`|NFLX.US/USD|NETFLIX INC|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`nkeususd`|NKE.US/USD|NIKE INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`nocususd`|NOC.US/USD|NORTHROP GRUMMAN CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`nrgususd`|NRG.US/USD|NRG ENERGY INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`nscususd`|NSC.US/USD|NORFOLK SOUTHERN CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`nvdaususd`|NVDA.US/USD|NVIDIA CORP|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`nwlususd`|NWL.US/USD|NEWELL BRANDS INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`okeususd`|OKE.US/USD|ONEOK INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`omcususd`|OMC.US/USD|OMNICOM GROUP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`orclususd`|ORCL.US/USD|ORACLE CORP|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`orlyususd`|ORLY.US/USD|O'REILLY AUTOMOTIVE INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`oxyususd`|OXY.US/USD|OCCIDENTAL PETROLEUM CORP|May 11, 2017, 1 PM|May 11, 2017|May 1, 2017|Jan 1, 2017|
|`payxususd`|PAYX.US/USD|PAYCHEX INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`pbrususd`|PBR.US/USD|Petroleo Brasileiro S.A.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`pcarususd`|PCAR.US/USD|PACCAR INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`pcgususd`|PCG.US/USD|P G & E CORP|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`pclnususd`|PCLN.US/USD|PRICELINE GROUP INC/THE|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`pepususd`|PEP.US/USD|PEPSICO INC|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`pfeususd`|PFE.US/USD|PFIZER INC|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`pgususd`|PG.US/USD|PROCTER & GAMBLE CO/THE|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`pgrususd`|PGR.US/USD|PROGRESSIVE CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`phususd`|PH.US/USD|PARKER HANNIFIN CORP|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`pmususd`|PM.US/USD|PHILIP MORRIS INTERNATIONAL|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`pncususd`|PNC.US/USD|PNC FINANCIAL SERVICES GROUP|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ppgususd`|PPG.US/USD|PPG INDUSTRIES INC|Feb 2, 2018, 2 PM|Feb 2, 2018|Feb 1, 2018|Jan 1, 2018|
|`pruususd`|PRU.US/USD|PRUDENTIAL FINANCIAL INC|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`psaususd`|PSA.US/USD|PUBLIC STORAGE|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`psxususd`|PSX.US/USD|PHILLIPS 66|Feb 1, 2018, 2 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`pxdususd`|PXD.US/USD|PIONEER NATURAL RESOURCES CO|Nov 2, 2017, 3 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`pyplususd`|PYPL.US/USD|PAYPAL HOLDINGS INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`qcomususd`|QCOM.US/USD|QUALCOMM INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`regnususd`|REGN.US/USD|REGENERON PHARMACEUTICALS|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`rfususd`|RF.US/USD|REGIONS FINANCIAL CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`rostususd`|ROST.US/USD|ROSS STORES INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`rrcususd`|RRC.US/USD|RANGE RESOURCES CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`sbuxususd`|SBUX.US/USD|STARBUCKS CORP|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`schwususd`|SCHW.US/USD|SCHWAB (CHARLES) CORP|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`shwususd`|SHW.US/USD|SHERWIN-WILLIAMS COMPANY|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`sjmususd`|SJM.US/USD|JM SMUCKER COMPANY|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`snapususd`|SNAP.US/USD|SNAP Inc|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`soususd`|SO.US/USD|SOUTHERN CO/THE|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`spgususd`|SPG.US/USD|SIMON PROPERTY GROUP INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`sttususd`|STT.US/USD|STATE STREET CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`stzususd`|STZ.US/USD|CONSTELLATION BRANDS INC-A|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`swkususd`|SWK.US/USD|STANLEY BLACK & DECKER INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`sykususd`|SYK.US/USD|STRYKER CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`syyususd`|SYY.US/USD|SYSCO CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`tususd`|T.US/USD|AT&T INC|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`tapususd`|TAP.US/USD|MOLSON COORS BREWING CO -B|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`tevaususd`|TEVA.US/USD|TEVA PHARMACEUTICAL-SP ADR|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`tgtususd`|TGT.US/USD|TARGET CORP|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`tifususd`|TIF.US/USD|TIFFANY & CO|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`tjxususd`|TJX.US/USD|TJX COMPANIES INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`tmoususd`|TMO.US/USD|THERMO FISHER SCIENTIFIC INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`trowususd`|TROW.US/USD|T ROWE PRICE GROUP INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`trvususd`|TRV.US/USD|TRAVELERS COS INC/THE|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`tslaususd`|TSLA.US/USD|TESLA MOTORS INC|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`tsmususd`|TSM.US/USD|Taiwan Semiconductor Manufacturing Company Limited|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`tsnususd`|TSN.US/USD|TYSON FOODS INC-CL A|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`twtrususd`|TWTR.US/USD|TWITTER INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`txnususd`|TXN.US/USD|TEXAS INSTRUMENTS INC|Nov 2, 2017, 1 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`ultaususd`|ULTA.US/USD|ULTA SALON COSMETICS & FRAGR|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`unhususd`|UNH.US/USD|UNITEDHEALTH GROUP INC|Nov 2, 2017, 4 PM|Nov 2, 2017|Nov 1, 2017|Jan 1, 2017|
|`unpususd`|UNP.US/USD|UNION PACIFIC CORP|Nov 15, 2017, 2 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`upsususd`|UPS.US/USD|UNITED PARCEL SERVICE-CL B|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`usbususd`|USB.US/USD|US BANCORP|Nov 15, 2017, 3 PM|Mar 29, 2008|Nov 1, 2017|Jan 1, 2017|
|`vususd`|V.US/USD|VISA INC-CLASS A SHARES|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`valeususd`|VALE.US/USD|Vale S.A.|Jan 26, 2017, 2 PM|Jan 26, 2017|Jan 1, 2017|Jan 1, 2017|
|`vfcususd`|VFC.US/USD|VF CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`vloususd`|VLO.US/USD|VALERO ENERGY CORP|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`vmcususd`|VMC.US/USD|VULCAN MATERIALS CO|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`vrtxususd`|VRTX.US/USD|VERTEX PHARMACEUTICALS INC|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`vzususd`|VZ.US/USD|VERIZON COMMUNICATIONS INC|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`wbaususd`|WBA.US/USD|WALGREENS BOOTS ALLIANCE INC|Nov 15, 2017, 3 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`wdcususd`|WDC.US/USD|WESTERN DIGITAL CORP|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`wfcususd`|WFC.US/USD|WELLS FARGO & CO|Jan 23, 2017, 4 PM|Jan 23, 2017|Jan 1, 2017|Jan 1, 2017|
|`whrususd`|WHR.US/USD|WHIRLPOOL CORP|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`wmtususd`|WMT.US/USD|WAL-MART STORES INC|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`wynnususd`|WYNN.US/USD|WYNN RESORTS LTD|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xususd`|X.US/USD|UNITED STATES STEEL CORP|Nov 15, 2017, 4 PM|Nov 15, 2017|Nov 1, 2017|Jan 1, 2017|
|`xlnxususd`|XLNX.US/USD|XILINX INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`xomususd`|XOM.US/USD|EXXON MOBIL CORP|Jan 19, 2017, 6 PM|Jan 19, 2017|Jan 1, 2017|Jan 1, 2017|
|`yumususd`|YUM.US/USD|YUM! BRANDS INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|
|`zbhususd`|ZBH.US/USD|ZIMMER BIOMET HOLDINGS INC|Feb 1, 2018, 3 PM|Feb 1, 2018|Feb 1, 2018|Jan 1, 2018|