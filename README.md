<h1>dukascopy-node</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/master/dukascopy-node.png?raw=true" alt="dukascopy-node"></p>

<p align="center">
    <b>✨ Download free historical and real-time market price tick data ✨</b> <br>Stocks • Crypto • Commodities • Bonds • Currencies • CFDs • ETFs  <br> via Node.js and CLI
</p>

<p align="center">
    <a href="https://github.com/Leo4815162342/dukascopy-node/actions/workflows/cicd.yaml"><img src="https://github.com/Leo4815162342/dukascopy-node/actions/workflows/cicd.yaml/badge.svg" alt="Build Status of dukascopy-node npm package"></a>
    <a href="https://www.npmjs.com/package/dukascopy-node"><img src="https://badgen.net/npm/v/dukascopy-node?cache=600" alt="dukascopy-node latest version"></a>
    <a href="https://www.npmjs.com/package/dukascopy-node"><img src="https://badgen.net/npm/dt/dukascopy-node?cache=600" alt="Total number of downloads of dukascopy-node npm package"></a>
    <a href="https://github.com/Leo4815162342/dukascopy-node"><img src="https://badgen.net/github/stars/Leo4815162342/dukascopy-node?cache=600" alt="dukascopy-node github stars"></a>
</p>
<p align="center"><a href="https://www.dukascopy-node.app/">📚 Documentation</a></p>



***

## 🚀 Installation

<table>
    <thead>
        <tr>
            <th><img width="16" src="https://www.dukascopy-node.app/npm.png" alt="dukascopy-node via npm"> npm</th>
            <th><img width="16" src="https://www.dukascopy-node.app/yarn.png" alt="dukascopy-node via yarn"> yarn</th>
            <th><img width="16" src="https://www.dukascopy-node.app/pnpm.png" alt="dukascopy-node via pnpm"> pnpm</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><pre><code>npm install dukascopy-node --save</code></pre></td>
            <td><pre><code>yarn add dukascopy-node</code></pre></td>
            <td><pre><code>pnpm add dukascopy-node</code></pre></td>
        </tr>
    </tbody>
</table>

> [!IMPORTANT]  
> Node.js 18 or higher is required.

## ✨ Download Historical Price Data via CLI

```bash
npx dukascopy-node -i btcusd -from 2019-01-13 -to 2019-01-14 -t tick -f csv
```

![dukascopy-node-1080p](https://user-images.githubusercontent.com/12486774/210557823-63ba12f1-ab77-42ae-ad27-6c199b0c1fdb.gif)


[🛠️ View full CLI specification](https://www.dukascopy-node.app/config/cli)

---

## ✨ Download Historical Price Data via Node.js

```javascript
const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'btcusd',
      dates: {
        from: new Date('2019-01-13'),
        to: new Date('2019-01-14')
      },
      timeframe: 'tick',
      format: 'json'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

[🛠️ View full Node.js specification](https://www.dukascopy-node.app/config/node)

## Download Real-Time Price Data via Node.js 

```javascript
const { getRealTimeRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getRealTimeRates({
      instrument: 'eurusd',
      timeframe: 'tick',
      format: 'json'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

[ℹ️ More Information](https://www.dukascopy-node.app/downloading-real-time-data)

---

## 📖 Quick start
* [Basic usage of `dukascopy-node`](https://www.dukascopy-node.app/output-formats)
* [Downloading tick data](https://www.dukascopy-node.app/downloading-tick-data)
* [Date formatting and converting timezones](https://www.dukascopy-node.app/custom-date-format-and-timezone-conversion)
* [Dealing with empty data and errors](https://www.dukascopy-node.app/errors-and-empty-data)
* [Downloading data with cache](https://www.dukascopy-node.app/using-cache)
* [Downloading data with custom batching](https://www.dukascopy-node.app/custom-batching)
* [Usage with typescript](https://www.dukascopy-node.app/with-typescript)
* [Debugging](https://www.dukascopy-node.app/debugging)

---

## 📂 Instruments

* [Bonds 📊 (3)](#bnd_cfd)
* [Crypto assets ₿ (33)](#vccy)
* [Agricultural commodities ☕ (6)](#cmd_agricultural)
* [Energy commodities ⚡ (4)](#cmd_energy)
* [Metals commodities ⚙️ (3)](#cmd_metals)
* [Germany ETFs 🇩🇪📈 (1)](#etf_cfd_de)
* [France ETFs 🇫🇷📈 (3)](#etf_cfd_fr)
* [Hong Kong ETFs 🇭🇰📈 (4)](#etf_cfd_hk)
* [United States ETFs 🇺🇸📈 (62)](#etf_cfd_us)
* [Forex currencies 💱 (293)](#fx_crosses)
* [Forex major currencies 💶 (7)](#fx_majors)
* [Forex metals 🥇 (51)](#fx_metals)
* [America 🌎 (6)](#idx_america)
* [Asia 🌏 (6)](#idx_asia)
* [Europe 🇪🇺 (9)](#idx_europe)
* [Africa 🌍 (1)](#idx_africa)
* [Austria 🇦🇹 (3)](#austria)
* [Belgium 🇧🇪 (7)](#belgium)
* [Denmark 🇩🇰 (8)](#denmark)
* [Finland 🇫🇮 (7)](#finland)
* [France 🇫🇷 (41)](#france)
* [Germany 🇩🇪 (44)](#germany)
* [Hong Kong 🇭🇰 (27)](#hong-kong)
* [Ireland 🇮🇪 (5)](#ireland)
* [Italy 🇮🇹 (48)](#italy)
* [Japan 🇯🇵 (55)](#japan)
* [Mexico 🇲🇽 (29)](#mexico)
* [Netherlands 🇳🇱 (17)](#netherlands)
* [Norway 🇳🇴 (6)](#norway)
* [Portugal 🇵🇹 (2)](#portugal)
* [Spain 🇪🇸 (24)](#spain)
* [Sweden 🇸🇪 (20)](#sweden)
* [Switzerland 🇨🇭 (28)](#switzerland)
* [United Kingdom 🇬🇧 (102)](#uk)
* [United States 🇺🇸 (608)](#us)
* [ETFs 📈 (34)](#etf_cfd)
<hr>
<h3 id="bnd_cfd">Bonds 📊</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Euro Bund](https://www.dukascopy-node.app/instrument/bundtreur)|`bundtreur`|May 2, 2016|
|[UK Long Gilt](https://www.dukascopy-node.app/instrument/ukgilttrgbp)|`ukgilttrgbp`|Dec 26, 2017|
|[US T-Bond](https://www.dukascopy-node.app/instrument/ustbondtrusd)|`ustbondtrusd`|Dec 18, 2018|
<h3 id="vccy">Crypto assets ₿</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Cardano vs US Dollar](https://www.dukascopy-node.app/instrument/adausd)|`adausd`|Sep 25, 2021|
|[Aave vs US Dollar](https://www.dukascopy-node.app/instrument/aveusd)|`aveusd`|Sep 15, 2021|
|[Basic Attention Token vs US Dollar](https://www.dukascopy-node.app/instrument/batusd)|`batusd`|Aug 5, 2019|
|[Bitcoin Cash vs. Swiss franc](https://www.dukascopy-node.app/instrument/bchchf)|`bchchf`|Mar 14, 2023|
|[Bitcoin Cash vs. Euro](https://www.dukascopy-node.app/instrument/bcheur)|`bcheur`|Mar 14, 2023|
|[Bitcoin Cash vs. Pound sterling](https://www.dukascopy-node.app/instrument/bchgbp)|`bchgbp`|Mar 14, 2023|
|[Bitcoin Cash vs US dollar](https://www.dukascopy-node.app/instrument/bchusd)|`bchusd`|May 17, 2021|
|[Bitcoin vs. Swiss franc](https://www.dukascopy-node.app/instrument/btcchf)|`btcchf`|Mar 14, 2023|
|[Bitcoin vs. Euro](https://www.dukascopy-node.app/instrument/btceur)|`btceur`|May 15, 2018|
|[Bitcoin vs. Pound sterling](https://www.dukascopy-node.app/instrument/btcgbp)|`btcgbp`|Mar 14, 2023|
|[Bitcoin vs US Dollar](https://www.dukascopy-node.app/instrument/btcusd)|`btcusd`|May 7, 2017|
|[Compound vs US Dollar](https://www.dukascopy-node.app/instrument/cmpusd)|`cmpusd`|Sep 25, 2021|
|[Dashcoin vs US Dollar](https://www.dukascopy-node.app/instrument/dshusd)|`dshusd`|Aug 4, 2019|
|[Enjin vs US Dollar](https://www.dukascopy-node.app/instrument/enjusd)|`enjusd`|Sep 25, 2021|
|[EOS vs US Dollar](https://www.dukascopy-node.app/instrument/eosusd)|`eosusd`|Aug 4, 2019|
|[Ethereum vs. Swiss franc](https://www.dukascopy-node.app/instrument/ethchf)|`ethchf`|Mar 14, 2023|
|[Ethereum vs. Euro](https://www.dukascopy-node.app/instrument/etheur)|`etheur`|Mar 14, 2023|
|[Ethereum vs. Pound sterling](https://www.dukascopy-node.app/instrument/ethgbp)|`ethgbp`|Mar 14, 2023|
|[Ether vs US Dollar](https://www.dukascopy-node.app/instrument/ethusd)|`ethusd`|Dec 11, 2017|
|[Chainlink vs US Dollar](https://www.dukascopy-node.app/instrument/lnkusd)|`lnkusd`|Sep 25, 2021|
|[Litecoin vs. Swiss franc](https://www.dukascopy-node.app/instrument/ltcchf)|`ltcchf`|Mar 14, 2023|
|[Litecoin vs. Euro](https://www.dukascopy-node.app/instrument/ltceur)|`ltceur`|Mar 14, 2023|
|[Litecoin vs. Pound sterling](https://www.dukascopy-node.app/instrument/ltcgbp)|`ltcgbp`|Mar 14, 2023|
|[Litecoin vs US Dollar](https://www.dukascopy-node.app/instrument/ltcusd)|`ltcusd`|Sep 3, 2018|
|[Polygon vs US Dollar](https://www.dukascopy-node.app/instrument/matusd)|`matusd`|Sep 25, 2021|
|[Maker vs US Dollar](https://www.dukascopy-node.app/instrument/mkrusd)|`mkrusd`|Sep 25, 2021|
|[TRON vs US Dollar](https://www.dukascopy-node.app/instrument/trxusd)|`trxusd`|Aug 4, 2019|
|[Uniswap vs US Dollar](https://www.dukascopy-node.app/instrument/uniusd)|`uniusd`|Oct 1, 2021|
|[Stellar vs. Swiss franc](https://www.dukascopy-node.app/instrument/xlmchf)|`xlmchf`|Mar 14, 2023|
|[Stellar vs. Euro](https://www.dukascopy-node.app/instrument/xlmeur)|`xlmeur`|Mar 14, 2023|
|[Stellar vs. Pound sterling](https://www.dukascopy-node.app/instrument/xlmgbp)|`xlmgbp`|Mar 14, 2023|
|[Stellar vs US Dollar](https://www.dukascopy-node.app/instrument/xlmusd)|`xlmusd`|May 25, 2021|
|[Yearn.finance vs US Dollar](https://www.dukascopy-node.app/instrument/yfiusd)|`yfiusd`|Sep 25, 2021|
<h3 id="cmd_agricultural">Agricultural commodities ☕</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[NY Cocoa](https://www.dukascopy-node.app/instrument/cocoacmdusd)|`cocoacmdusd`|Oct 20, 2017|
|[Coffee Arabica](https://www.dukascopy-node.app/instrument/coffeecmdusx)|`coffeecmdusx`|Dec 4, 2017|
|[Cotton](https://www.dukascopy-node.app/instrument/cottoncmdusx)|`cottoncmdusx`|Oct 20, 2017|
|[Orange Juice](https://www.dukascopy-node.app/instrument/ojuicecmdusx)|`ojuicecmdusx`|Oct 20, 2017|
|[Soybean](https://www.dukascopy-node.app/instrument/soybeancmdusx)|`soybeancmdusx`|Dec 1, 2017|
|[London Sugar No.5](https://www.dukascopy-node.app/instrument/sugarcmdusd)|`sugarcmdusd`|Oct 2, 2017|
<h3 id="cmd_energy">Energy commodities ⚡</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Gas oil](https://www.dukascopy-node.app/instrument/dieselcmdusd)|`dieselcmdusd`|Dec 26, 2017|
|[US Brent Crude Oil](https://www.dukascopy-node.app/instrument/brentcmdusd)|`brentcmdusd`|Nov 17, 2006|
|[US Light Crude Oil](https://www.dukascopy-node.app/instrument/lightcmdusd)|`lightcmdusd`|Apr 20, 1983|
|[Natural Gas](https://www.dukascopy-node.app/instrument/gascmdusd)|`gascmdusd`|Sep 2, 2012|
<h3 id="cmd_metals">Metals commodities ⚙️</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[High Grade Copper](https://www.dukascopy-node.app/instrument/coppercmdusd)|`coppercmdusd`|Mar 2, 2012|
|[Palladium](https://www.dukascopy-node.app/instrument/xpdcmdusd)|`xpdcmdusd`|Jul 4, 2021|
|[Platinum](https://www.dukascopy-node.app/instrument/xptcmdusd)|`xptcmdusd`|Nov 1, 2021|
<h3 id="etf_cfd_de">Germany ETFs 🇩🇪📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[iShares TecDAX UCITS DE ETF](https://www.dukascopy-node.app/instrument/tecdaxedeeur)|`tecdaxedeeur`|Sep 22, 2020|
<h3 id="etf_cfd_fr">France ETFs 🇫🇷📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[LYXOR ETF Daily X2 Short Bund](https://www.dukascopy-node.app/instrument/dsbfreur)|`dsbfreur`|Sep 22, 2020|
|[Lyxor ETF Leverage CAC 40](https://www.dukascopy-node.app/instrument/lvcfreur)|`lvcfreur`|Sep 22, 2020|
|[Lyxor UCITS ETF STOXX EUROPE 600 Banks](https://www.dukascopy-node.app/instrument/lyxbnkfreur)|`lyxbnkfreur`|Sep 22, 2020|
<h3 id="etf_cfd_hk">Hong Kong ETFs 🇭🇰📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[CSOP FTSE China A50 ETF](https://www.dukascopy-node.app/instrument/2822hkhkd)|`2822hkhkd`|Sep 28, 2020|
|[Hang Seng H-Share Index ETF](https://www.dukascopy-node.app/instrument/2828hkhkd)|`2828hkhkd`|Sep 28, 2020|
|[iShares Core S&P BSE SENSEX India ETF](https://www.dukascopy-node.app/instrument/2836hkhkd)|`2836hkhkd`|Sep 28, 2020|
|[ChinaAMC CSI 300 Index ETF](https://www.dukascopy-node.app/instrument/3188hkhkd)|`3188hkhkd`|Sep 28, 2020|
<h3 id="etf_cfd_us">United States ETFs 🇺🇸📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[SPDR Dow Jones® Industrial Average ETF](https://www.dukascopy-node.app/instrument/diaususd)|`diaususd`|May 11, 2017|
|[iShares Select Dividend ETF](https://www.dukascopy-node.app/instrument/dvyususd)|`dvyususd`|May 11, 2017|
|[iShares MSCI Emerging Markets ETF](https://www.dukascopy-node.app/instrument/eemususd)|`eemususd`|Jan 26, 2017|
|[iShares MSCI EAFE ETF](https://www.dukascopy-node.app/instrument/efaususd)|`efaususd`|Jan 26, 2017|
|[iShares J.P. Morgan USD Emerging Markets Bond ETF](https://www.dukascopy-node.app/instrument/embususd)|`embususd`|May 11, 2017|
|[iShares MSCI Hong Kong ETF](https://www.dukascopy-node.app/instrument/ewhususd)|`ewhususd`|Nov 6, 2017|
|[iShares MSCI Japan ETF](https://www.dukascopy-node.app/instrument/ewjususd)|`ewjususd`|Jan 26, 2017|
|[iShares MSCI Mexico Capped](https://www.dukascopy-node.app/instrument/ewwususd)|`ewwususd`|Mar 13, 2017|
|[iShares MSCI Brazil Capped](https://www.dukascopy-node.app/instrument/ewzususd)|`ewzususd`|Jan 26, 2017|
|[iShares MSCI EMU ETF](https://www.dukascopy-node.app/instrument/ezuususd)|`ezuususd`|Feb 1, 2018|
|[iShares China Large-Cap ETF](https://www.dukascopy-node.app/instrument/fxiususd)|`fxiususd`|Jan 26, 2017|
|[VanEck Vectors Gold Miners ETF](https://www.dukascopy-node.app/instrument/gdxususd)|`gdxususd`|Jan 26, 2017|
|[VanEck Vectors Junior Gold Miners ETF](https://www.dukascopy-node.app/instrument/gdxjususd)|`gdxjususd`|Jan 26, 2017|
|[SPDR Gold Shares ETF](https://www.dukascopy-node.app/instrument/gldususd)|`gldususd`|Jan 26, 2017|
|[iShares Nasdaq Biotechnology ETF](https://www.dukascopy-node.app/instrument/ibbususd)|`ibbususd`|May 11, 2017|
|[iShares 7-10 Year Treasury Bond ETF](https://www.dukascopy-node.app/instrument/iefususd)|`iefususd`|Feb 1, 2018|
|[iShares Core S&P Mid-Cap ETF](https://www.dukascopy-node.app/instrument/ijhususd)|`ijhususd`|Feb 1, 2018|
|[iShares Core S&P Small-Cap ETF](https://www.dukascopy-node.app/instrument/ijrususd)|`ijrususd`|May 11, 2017|
|[iShares S&P 500 Value ETF](https://www.dukascopy-node.app/instrument/iveususd)|`iveususd`|May 11, 2017|
|[iShares S&P 500 Growth ETF](https://www.dukascopy-node.app/instrument/ivwususd)|`ivwususd`|May 11, 2017|
|[iShares Russell 1000 Value ETF](https://www.dukascopy-node.app/instrument/iwdususd)|`iwdususd`|Feb 1, 2018|
|[iShares Russell 1000 Growth ETF](https://www.dukascopy-node.app/instrument/iwfususd)|`iwfususd`|Feb 1, 2018|
|[iShares Russell 2000 ETF](https://www.dukascopy-node.app/instrument/iwmususd)|`iwmususd`|Jan 26, 2017|
|[iShares U.S. Real Estate ETF](https://www.dukascopy-node.app/instrument/iyrususd)|`iyrususd`|Jan 26, 2017|
|[SPDR Barclays Capital High Yield Bond ETF](https://www.dukascopy-node.app/instrument/jnkususd)|`jnkususd`|Jan 26, 2017|
|[PowerShares QQQ ETF](https://www.dukascopy-node.app/instrument/qqqususd)|`qqqususd`|Jan 26, 2017|
|[iShares Silver Trust ETF](https://www.dukascopy-node.app/instrument/slvususd)|`slvususd`|Feb 1, 2018|
|[SPDR S&P 500 ETF](https://www.dukascopy-node.app/instrument/spyususd)|`spyususd`|Feb 16, 2017|
|[iShares 20+ Year Treasury Bond ETF](https://www.dukascopy-node.app/instrument/tltususd)|`tltususd`|Jan 26, 2017|
|[United States Oil Fund](https://www.dukascopy-node.app/instrument/usoususd)|`usoususd`|Jan 26, 2017|
|[Vanguard FTSE Developed Markets ETF](https://www.dukascopy-node.app/instrument/veaususd)|`veaususd`|Nov 15, 2017|
|[Vanguard FTSE Europe ETF](https://www.dukascopy-node.app/instrument/vgkususd)|`vgkususd`|Feb 1, 2018|
|[Vanguard REIT ETF](https://www.dukascopy-node.app/instrument/vnqususd)|`vnqususd`|Nov 15, 2017|
|[iPath S&P 500 VIX ST Futures ETN](https://www.dukascopy-node.app/instrument/vxxususd)|`vxxususd`|Jan 26, 2017|
|[Energy Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xleususd)|`xleususd`|Nov 15, 2017|
|[Financial Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlfususd)|`xlfususd`|Jan 26, 2017|
|[Industrial Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xliususd)|`xliususd`|Jan 26, 2017|
|[Technology Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlkususd)|`xlkususd`|Nov 15, 2017|
|[Consumer Staples Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlpususd)|`xlpususd`|Jan 26, 2017|
|[Utilities Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xluususd)|`xluususd`|Nov 15, 2017|
|[Health Care Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlvususd)|`xlvususd`|Nov 15, 2017|
|[Consumer Discretionary Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlyususd)|`xlyususd`|Nov 15, 2017|
|[SPDR S&P Oil & Gas Explor & Prodtn ETF](https://www.dukascopy-node.app/instrument/xopususd)|`xopususd`|Jan 26, 2017|
|[ARK Autonomous Technology & Robotics ETF](https://www.dukascopy-node.app/instrument/arkqususd)|`arkqususd`|Mar 19, 2020|
|[ARK Space Exporation & Innovation ETF](https://www.dukascopy-node.app/instrument/arkxususd)|`arkxususd`|Jan 2, 2024|
|[Amplify Travel Tech ETF](https://www.dukascopy-node.app/instrument/awayususd)|`awayususd`|Mar 19, 2020|
|[ProShares Bitcoin ETF](https://www.dukascopy-node.app/instrument/bitoususd)|`bitoususd`|Nov 22, 2022|
|[Valkyrie Bitcoin and Ether Strategy ETF](https://www.dukascopy-node.app/instrument/btfususd)|`btfususd`|Jun 29, 2022|
|[VanEck Video Gaming and eSports ETF](https://www.dukascopy-node.app/instrument/espoususd)|`espoususd`|Mar 19, 2020|
|[Global X FinTech ETF](https://www.dukascopy-node.app/instrument/finxususd)|`finxususd`|Mar 18, 2020|
|[First Trust Nasdaq Food & Beverage ETF](https://www.dukascopy-node.app/instrument/ftxgususd)|`ftxgususd`|Jan 2, 2024|
|[iShares US Insurance ETF](https://www.dukascopy-node.app/instrument/iakususd)|`iakususd`|Mar 23, 2020|
|[iShares US Aerospace & Defense ETF](https://www.dukascopy-node.app/instrument/itaususd)|`itaususd`|Mar 23, 2020|
|[US Global Jets ETF](https://www.dukascopy-node.app/instrument/jetsususd)|`jetsususd`|May 15, 2020|
|[SPDR S&P Insurance ETF](https://www.dukascopy-node.app/instrument/kieususd)|`kieususd`|Jan 2, 2020|
|[SPDR S&P Regional Banking ETF](https://www.dukascopy-node.app/instrument/kreususd)|`kreususd`|Mar 23, 2020|
|[Invesco Food & Beverage ETF](https://www.dukascopy-node.app/instrument/pbjususd)|`pbjususd`|Mar 20, 2020|
|[Invesco Leisure & Entertainment ETF](https://www.dukascopy-node.app/instrument/pejususd)|`pejususd`|Mar 18, 2020|
|[Invesco Aerospace & Defense ETF](https://www.dukascopy-node.app/instrument/ppaususd)|`ppaususd`|Mar 24, 2020|
|[ROBO Global Robotics & Automation Index ETF](https://www.dukascopy-node.app/instrument/roboususd)|`roboususd`|Oct 3, 2022|
|[Vanguard Energy ETF](https://www.dukascopy-node.app/instrument/vdeususd)|`vdeususd`|Mar 23, 2020|
|[Invesco Real Estate S&P US Select Sector UCITS ETF Acc](https://www.dukascopy-node.app/instrument/xresususd)|`xresususd`|Jan 2, 2018|
<h3 id="fx_crosses">Forex currencies 💱</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Australian Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/audcad)|`audcad`|Nov 18, 1992|
|[Australian Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/audchf)|`audchf`|Nov 22, 1991|
|[Australian Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/audjpy)|`audjpy`|Feb 4, 1991|
|[Australian Dollar vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/audnzd)|`audnzd`|Dec 21, 1993|
|[Australian Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/audsgd)|`audsgd`|Jun 4, 1999|
|[Canadian Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/cadchf)|`cadchf`|Nov 22, 1991|
|[Canadian Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/cadhkd)|`cadhkd`|Jun 16, 1999|
|[Canadian Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/cadjpy)|`cadjpy`|Feb 23, 1993|
|[Swiss Franc vs Japanese Yen](https://www.dukascopy-node.app/instrument/chfjpy)|`chfjpy`|Dec 3, 1990|
|[Swiss Franc vs Singapore Dollar](https://www.dukascopy-node.app/instrument/chfsgd)|`chfsgd`|Apr 29, 1998|
|[Euro vs Australian Dollar](https://www.dukascopy-node.app/instrument/euraud)|`euraud`|Oct 9, 1991|
|[Euro vs Canadian Dollar](https://www.dukascopy-node.app/instrument/eurcad)|`eurcad`|Oct 9, 1991|
|[Euro vs Swiss Franc](https://www.dukascopy-node.app/instrument/eurchf)|`eurchf`|Jan 14, 1991|
|[Euro vs Czech Koruna](https://www.dukascopy-node.app/instrument/eurczk)|`eurczk`|Jan 3, 2016|
|[Euro vs Danish Krone](https://www.dukascopy-node.app/instrument/eurdkk)|`eurdkk`|Feb 26, 1993|
|[Euro vs Pound Sterling](https://www.dukascopy-node.app/instrument/eurgbp)|`eurgbp`|Apr 14, 1995|
|[Euro vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/eurhkd)|`eurhkd`|Jun 3, 1999|
|[Euro vs Hungarian Forint](https://www.dukascopy-node.app/instrument/eurhuf)|`eurhuf`|Jun 30, 1999|
|[Euro vs Japanese Yen](https://www.dukascopy-node.app/instrument/eurjpy)|`eurjpy`|Jun 28, 1989|
|[Euro vs Norwegian Krone](https://www.dukascopy-node.app/instrument/eurnok)|`eurnok`|Jun 3, 1991|
|[Euro vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/eurnzd)|`eurnzd`|Jan 5, 1999|
|[Euro vs Polish Zloty](https://www.dukascopy-node.app/instrument/eurpln)|`eurpln`|Jun 3, 1999|
|[Euro vs Swedish Krona](https://www.dukascopy-node.app/instrument/eursek)|`eursek`|Nov 20, 1992|
|[Euro vs Singapore Dollar](https://www.dukascopy-node.app/instrument/eursgd)|`eursgd`|Apr 29, 1998|
|[Euro vs Turkish Lira](https://www.dukascopy-node.app/instrument/eurtry)|`eurtry`|Jan 3, 2005|
|[Pound Sterling vs Australian Dollar](https://www.dukascopy-node.app/instrument/gbpaud)|`gbpaud`|Jan 30, 1991|
|[Pound Sterling vs Canadian Dollar](https://www.dukascopy-node.app/instrument/gbpcad)|`gbpcad`|Oct 25, 1990|
|[Pound Sterling vs Swiss Franc](https://www.dukascopy-node.app/instrument/gbpchf)|`gbpchf`|Sep 6, 1990|
|[Pound Sterling vs Japanese Yen](https://www.dukascopy-node.app/instrument/gbpjpy)|`gbpjpy`|Jan 2, 1991|
|[Pound Sterling vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/gbpnzd)|`gbpnzd`|Jan 20, 1997|
|[Hong Kong Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/hkdjpy)|`hkdjpy`|Nov 4, 1998|
|[New Zealand Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/nzdcad)|`nzdcad`|Mar 25, 2002|
|[New Zealand Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/nzdchf)|`nzdchf`|Jan 7, 1999|
|[New Zealand Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/nzdjpy)|`nzdjpy`|Oct 1, 1998|
|[Singapore Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/sgdjpy)|`sgdjpy`|May 31, 1999|
|[Turkish Lira vs Japanese Yen](https://www.dukascopy-node.app/instrument/tryjpy)|`tryjpy`|May 9, 2010|
|[US Dollar vs United Arab Emirates Dirham](https://www.dukascopy-node.app/instrument/usdaed)|`usdaed`|Mar 22, 2024|
|[US Dollar vs Offshore Chinese Renminbi](https://www.dukascopy-node.app/instrument/usdcnh)|`usdcnh`|Jan 2, 2012|
|[US Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/usdczk)|`usdczk`|Jan 3, 2016|
|[US Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/usddkk)|`usddkk`|Apr 12, 1990|
|[US Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/usdhkd)|`usdhkd`|Mar 17, 1986|
|[US Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/usdhuf)|`usdhuf`|Jul 14, 1998|
|[US Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/usdils)|`usdils`|Dec 15, 2016|
|[US Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/usdmxn)|`usdmxn`|Mar 31, 1995|
|[US Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/usdnok)|`usdnok`|Mar 27, 1991|
|[US Dollar vs Polish Zloty](https://www.dukascopy-node.app/instrument/usdpln)|`usdpln`|Mar 22, 1999|
|[US Dollar vs Romanian Leu](https://www.dukascopy-node.app/instrument/usdron)|`usdron`|Dec 19, 2016|
|[US Dollar vs Saudi Riyal](https://www.dukascopy-node.app/instrument/usdsar)|`usdsar`|Mar 25, 2024|
|[US Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/usdsek)|`usdsek`|Jul 16, 1991|
|[US Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/usdsgd)|`usdsgd`|Jan 21, 1991|
|[US Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/usdthb)|`usdthb`|Feb 13, 2017|
|[US Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/usdtry)|`usdtry`|Oct 18, 2001|
|[US Dollar vs South African Rand](https://www.dukascopy-node.app/instrument/usdzar)|`usdzar`|Nov 25, 1991|
|[South African Rand vs Japanese Yen](https://www.dukascopy-node.app/instrument/zarjpy)|`zarjpy`|Jun 7, 1999|
|[United Arab Emirates dirham vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/aedcnh)|`aedcnh`|Sep 17, 2024|
|[United Arab Emirates dirham vs. Czech koruna](https://www.dukascopy-node.app/instrument/aedczk)|`aedczk`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/aedhkd)|`aedhkd`|Sep 17, 2024|
|[United Arab Emirates dirham vs. Hungarian forint](https://www.dukascopy-node.app/instrument/aedhuf)|`aedhuf`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Japanese yen](https://www.dukascopy-node.app/instrument/aedjpy)|`aedjpy`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Mexican peso](https://www.dukascopy-node.app/instrument/aedmxn)|`aedmxn`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Romanian leu](https://www.dukascopy-node.app/instrument/aedron)|`aedron`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Saudi riyal](https://www.dukascopy-node.app/instrument/aedsar)|`aedsar`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Thai baht](https://www.dukascopy-node.app/instrument/aedthb)|`aedthb`|Sep 16, 2024|
|[United Arab Emirates dirham vs. Turkish lira](https://www.dukascopy-node.app/instrument/aedtry)|`aedtry`|Sep 16, 2024|
|[United Arab Emirates dirham vs. South African rand](https://www.dukascopy-node.app/instrument/aedzar)|`aedzar`|Sep 16, 2024|
|[Australian dollar vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/audaed)|`audaed`|Sep 16, 2024|
|[Australian dollar vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/audcnh)|`audcnh`|Apr 17, 2023|
|[Australian dollar vs. Czech koruna](https://www.dukascopy-node.app/instrument/audczk)|`audczk`|Dec 19, 2023|
|[Australian dollar vs. Danish krone](https://www.dukascopy-node.app/instrument/auddkk)|`auddkk`|Dec 19, 2023|
|[Australian dollar vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/audhkd)|`audhkd`|Dec 19, 2023|
|[Australian dollar vs. Hungarian forint](https://www.dukascopy-node.app/instrument/audhuf)|`audhuf`|Apr 23, 2024|
|[Australian dollar vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/audils)|`audils`|Sep 16, 2024|
|[Australian dollar vs. Mexican peso](https://www.dukascopy-node.app/instrument/audmxn)|`audmxn`|Dec 19, 2023|
|[Australian dollar vs. Norwegian krone](https://www.dukascopy-node.app/instrument/audnok)|`audnok`|Dec 19, 2023|
|[Australian dollar vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/audpln)|`audpln`|Jan 2, 1990|
|[Australian dollar vs. Romanian leu](https://www.dukascopy-node.app/instrument/audron)|`audron`|Sep 16, 2024|
|[Australian dollar vs. Saudi riyal](https://www.dukascopy-node.app/instrument/audsar)|`audsar`|Sep 16, 2024|
|[Australian dollar vs. Swedish krona](https://www.dukascopy-node.app/instrument/audsek)|`audsek`|Dec 19, 2023|
|[Australian dollar vs. Thai baht](https://www.dukascopy-node.app/instrument/audthb)|`audthb`|Sep 16, 2024|
|[Australian dollar vs. Turkish lira](https://www.dukascopy-node.app/instrument/audtry)|`audtry`|Dec 19, 2023|
|[Australian dollar vs. South African rand](https://www.dukascopy-node.app/instrument/audzar)|`audzar`|Apr 24, 2024|
|[Canadian dollar vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/cadaed)|`cadaed`|Sep 16, 2024|
|[Canadian dollar vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/cadcnh)|`cadcnh`|Sep 16, 2024|
|[Canadian dollar vs. Czech koruna](https://www.dukascopy-node.app/instrument/cadczk)|`cadczk`|May 15, 2024|
|[Canadian dollar vs. Danish krone](https://www.dukascopy-node.app/instrument/caddkk)|`caddkk`|May 15, 2024|
|[Canadian dollar vs. Hungarian forint](https://www.dukascopy-node.app/instrument/cadhuf)|`cadhuf`|May 15, 2024|
|[Canadian dollar vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/cadils)|`cadils`|Sep 16, 2024|
|[Canadian dollar vs. Mexican peso](https://www.dukascopy-node.app/instrument/cadmxn)|`cadmxn`|May 15, 2024|
|[Canadian dollar vs. Norwegian krone](https://www.dukascopy-node.app/instrument/cadnok)|`cadnok`|May 15, 2024|
|[Canadian dollar vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/cadpln)|`cadpln`|Nov 10, 1999|
|[Canadian dollar vs. Romanian leu](https://www.dukascopy-node.app/instrument/cadron)|`cadron`|Sep 16, 2024|
|[Canadian dollar vs. Saudi riyal](https://www.dukascopy-node.app/instrument/cadsar)|`cadsar`|Sep 16, 2024|
|[Canadian dollar vs. Swedish krona](https://www.dukascopy-node.app/instrument/cadsek)|`cadsek`|May 15, 2024|
|[Canadian dollar vs. Singapore dollar](https://www.dukascopy-node.app/instrument/cadsgd)|`cadsgd`|May 15, 2024|
|[Canadian dollar vs. Thai baht](https://www.dukascopy-node.app/instrument/cadthb)|`cadthb`|Sep 16, 2024|
|[Canadian dollar vs. Turkish lira](https://www.dukascopy-node.app/instrument/cadtry)|`cadtry`|May 15, 2024|
|[Canadian dollar vs. South African rand](https://www.dukascopy-node.app/instrument/cadzar)|`cadzar`|May 15, 2024|
|[Swiss franc vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/chfaed)|`chfaed`|Sep 17, 2024|
|[Swiss franc vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/chfcnh)|`chfcnh`|Sep 16, 2024|
|[Swiss franc vs. Czech koruna](https://www.dukascopy-node.app/instrument/chfczk)|`chfczk`|May 15, 2024|
|[Swiss franc vs. Danish krone](https://www.dukascopy-node.app/instrument/chfdkk)|`chfdkk`|May 15, 2024|
|[Swiss franc vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/chfhkd)|`chfhkd`|May 15, 2024|
|[Swiss franc vs. Hungarian forint](https://www.dukascopy-node.app/instrument/chfhuf)|`chfhuf`|May 15, 2024|
|[Swiss franc vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/chfils)|`chfils`|Sep 16, 2024|
|[Swiss franc vs. Mexican peso](https://www.dukascopy-node.app/instrument/chfmxn)|`chfmxn`|May 15, 2024|
|[Swiss franc vs. Norwegian krone](https://www.dukascopy-node.app/instrument/chfnok)|`chfnok`|May 15, 2024|
|[Swiss franc vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/chfpln)|`chfpln`|Oct 4, 2004|
|[Swiss franc vs. Romanian leu](https://www.dukascopy-node.app/instrument/chfron)|`chfron`|Sep 16, 2024|
|[Swiss franc vs. Saudi riyal](https://www.dukascopy-node.app/instrument/chfsar)|`chfsar`|Sep 16, 2024|
|[Swiss franc vs. Swedish krona](https://www.dukascopy-node.app/instrument/chfsek)|`chfsek`|May 15, 2024|
|[Swiss franc vs. Thai baht](https://www.dukascopy-node.app/instrument/chfthb)|`chfthb`|Sep 16, 2024|
|[Swiss franc vs. Turkish lira](https://www.dukascopy-node.app/instrument/chftry)|`chftry`|May 15, 2024|
|[Swiss franc vs. South African rand](https://www.dukascopy-node.app/instrument/chfzar)|`chfzar`|May 15, 2024|
|[Renminbi (offshore) vs. Czech koruna](https://www.dukascopy-node.app/instrument/cnhczk)|`cnhczk`|Sep 16, 2024|
|[Renminbi (offshore) vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/cnhhkd)|`cnhhkd`|Sep 16, 2024|
|[Renminbi (offshore) vs. Hungarian forint](https://www.dukascopy-node.app/instrument/cnhhuf)|`cnhhuf`|Sep 16, 2024|
|[Renminbi (offshore) vs. Japanese yen](https://www.dukascopy-node.app/instrument/cnhjpy)|`cnhjpy`|May 15, 2024|
|[Renminbi (offshore) vs. Mexican peso](https://www.dukascopy-node.app/instrument/cnhmxn)|`cnhmxn`|Sep 16, 2024|
|[Renminbi (offshore) vs. Thai baht](https://www.dukascopy-node.app/instrument/cnhthb)|`cnhthb`|Sep 16, 2024|
|[Renminbi (offshore) vs. Turkish lira](https://www.dukascopy-node.app/instrument/cnhtry)|`cnhtry`|Sep 16, 2024|
|[Renminbi (offshore) vs. South African rand](https://www.dukascopy-node.app/instrument/cnhzar)|`cnhzar`|Sep 16, 2024|
|[Czech koruna vs. Hungarian forint](https://www.dukascopy-node.app/instrument/czkhuf)|`czkhuf`|May 15, 2024|
|[Czech koruna vs. Japanese yen](https://www.dukascopy-node.app/instrument/czkjpy)|`czkjpy`|May 15, 2024|
|[Czech koruna vs. Thai baht](https://www.dukascopy-node.app/instrument/czkthb)|`czkthb`|Sep 16, 2024|
|[Czech koruna vs. Turkish lira](https://www.dukascopy-node.app/instrument/czktry)|`czktry`|May 15, 2024|
|[Danish krone vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/dkkaed)|`dkkaed`|Sep 16, 2024|
|[Danish krone vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/dkkcnh)|`dkkcnh`|Sep 16, 2024|
|[Danish krone vs. Czech koruna](https://www.dukascopy-node.app/instrument/dkkczk)|`dkkczk`|May 15, 2024|
|[Danish krone vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/dkkhkd)|`dkkhkd`|May 15, 2024|
|[Danish krone vs. Hungarian forint](https://www.dukascopy-node.app/instrument/dkkhuf)|`dkkhuf`|May 15, 2024|
|[Danish krone vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/dkkils)|`dkkils`|Sep 16, 2024|
|[Danish krone vs. Japanese yen](https://www.dukascopy-node.app/instrument/dkkjpy)|`dkkjpy`|May 15, 2024|
|[Danish krone vs. Mexican peso](https://www.dukascopy-node.app/instrument/dkkmxn)|`dkkmxn`|May 15, 2024|
|[Danish krone vs. Romanian leu](https://www.dukascopy-node.app/instrument/dkkron)|`dkkron`|Sep 16, 2024|
|[Danish krone vs. Saudi riyal](https://www.dukascopy-node.app/instrument/dkksar)|`dkksar`|Sep 16, 2024|
|[Danish krone vs. Thai baht](https://www.dukascopy-node.app/instrument/dkkthb)|`dkkthb`|Sep 16, 2024|
|[Danish krone vs. Turkish lira](https://www.dukascopy-node.app/instrument/dkktry)|`dkktry`|May 15, 2024|
|[Danish krone vs. South African rand](https://www.dukascopy-node.app/instrument/dkkzar)|`dkkzar`|May 15, 2024|
|[Euro vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/euraed)|`euraed`|Sep 16, 2024|
|[Euro vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/eurcnh)|`eurcnh`|May 15, 2024|
|[Euro vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/eurils)|`eurils`|Sep 16, 2024|
|[Euro vs. Mexican peso](https://www.dukascopy-node.app/instrument/eurmxn)|`eurmxn`|Mar 22, 1999|
|[Euro vs. Romanian leu](https://www.dukascopy-node.app/instrument/eurron)|`eurron`|Sep 16, 2024|
|[Euro vs. Saudi riyal](https://www.dukascopy-node.app/instrument/eursar)|`eursar`|Sep 16, 2024|
|[Euro vs. Thai baht](https://www.dukascopy-node.app/instrument/eurthb)|`eurthb`|Sep 16, 2024|
|[Euro vs. South African rand](https://www.dukascopy-node.app/instrument/eurzar)|`eurzar`|Jun 7, 1999|
|[Pound sterling vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/gbpaed)|`gbpaed`|Sep 16, 2024|
|[Pound sterling vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/gbpcnh)|`gbpcnh`|May 15, 2024|
|[Pound sterling vs. Czech koruna](https://www.dukascopy-node.app/instrument/gbpczk)|`gbpczk`|May 15, 2024|
|[Pound sterling vs. Danish krone](https://www.dukascopy-node.app/instrument/gbpdkk)|`gbpdkk`|May 15, 2024|
|[Pound sterling vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/gbphkd)|`gbphkd`|May 15, 2024|
|[Pound sterling vs. Hungarian forint](https://www.dukascopy-node.app/instrument/gbphuf)|`gbphuf`|May 15, 2024|
|[Pound sterling vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/gbpils)|`gbpils`|Sep 16, 2024|
|[Pound sterling vs. Mexican peso](https://www.dukascopy-node.app/instrument/gbpmxn)|`gbpmxn`|May 15, 2024|
|[Pound sterling vs. Norwegian krone](https://www.dukascopy-node.app/instrument/gbpnok)|`gbpnok`|May 15, 2024|
|[Pound sterling vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/gbppln)|`gbppln`|Aug 22, 1990|
|[Pound sterling vs. Romanian leu](https://www.dukascopy-node.app/instrument/gbpron)|`gbpron`|Sep 16, 2024|
|[Pound sterling vs. Saudi riyal](https://www.dukascopy-node.app/instrument/gbpsar)|`gbpsar`|Sep 17, 2024|
|[Pound sterling vs. Swedish krona](https://www.dukascopy-node.app/instrument/gbpsek)|`gbpsek`|May 15, 2024|
|[Pound sterling vs. Singapore dollar](https://www.dukascopy-node.app/instrument/gbpsgd)|`gbpsgd`|May 15, 2024|
|[Pound sterling vs. Thai baht](https://www.dukascopy-node.app/instrument/gbpthb)|`gbpthb`|Sep 17, 2024|
|[Pound sterling vs. Turkish lira](https://www.dukascopy-node.app/instrument/gbptry)|`gbptry`|May 15, 2024|
|[Pound sterling vs. South African rand](https://www.dukascopy-node.app/instrument/gbpzar)|`gbpzar`|May 15, 2024|
|[Hong Kong dollar vs. Czech koruna](https://www.dukascopy-node.app/instrument/hkdczk)|`hkdczk`|May 15, 2024|
|[Hong Kong dollar vs. Hungarian forint](https://www.dukascopy-node.app/instrument/hkdhuf)|`hkdhuf`|May 15, 2024|
|[Hong Kong dollar vs. Mexican peso](https://www.dukascopy-node.app/instrument/hkdmxn)|`hkdmxn`|May 15, 2024|
|[Hong Kong dollar vs. Thai baht](https://www.dukascopy-node.app/instrument/hkdthb)|`hkdthb`|Sep 17, 2024|
|[Hong Kong dollar vs. Turkish lira](https://www.dukascopy-node.app/instrument/hkdtry)|`hkdtry`|May 15, 2024|
|[Hong Kong dollar vs. South African rand](https://www.dukascopy-node.app/instrument/hkdzar)|`hkdzar`|May 15, 2024|
|[Israeli new shekel vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/ilsaed)|`ilsaed`|Sep 17, 2024|
|[Israeli new shekel vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/ilscnh)|`ilscnh`|Sep 17, 2024|
|[Israeli new shekel vs. Czech koruna](https://www.dukascopy-node.app/instrument/ilsczk)|`ilsczk`|Sep 17, 2024|
|[Israeli new shekel vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/ilshkd)|`ilshkd`|Sep 17, 2024|
|[Israeli new shekel vs. Hungarian forint](https://www.dukascopy-node.app/instrument/ilshuf)|`ilshuf`|Sep 17, 2024|
|[Israeli new shekel vs. Japanese yen](https://www.dukascopy-node.app/instrument/ilsjpy)|`ilsjpy`|Sep 17, 2024|
|[Israeli new shekel vs. Mexican peso](https://www.dukascopy-node.app/instrument/ilsmxn)|`ilsmxn`|Sep 17, 2024|
|[Israeli new shekel vs. Romanian leu](https://www.dukascopy-node.app/instrument/ilsron)|`ilsron`|Sep 17, 2024|
|[Israeli new shekel vs. Saudi riyal](https://www.dukascopy-node.app/instrument/ilssar)|`ilssar`|Sep 17, 2024|
|[Israeli new shekel vs. Thai baht](https://www.dukascopy-node.app/instrument/ilsthb)|`ilsthb`|Sep 17, 2024|
|[Israeli new shekel vs. Turkish lira](https://www.dukascopy-node.app/instrument/ilstry)|`ilstry`|Sep 17, 2024|
|[Israeli new shekel vs. South African rand](https://www.dukascopy-node.app/instrument/ilszar)|`ilszar`|Sep 17, 2024|
|[Japanese yen vs. Hungarian forint](https://www.dukascopy-node.app/instrument/jpyhuf)|`jpyhuf`|Sep 17, 2024|
|[Mexican peso vs. Czech koruna](https://www.dukascopy-node.app/instrument/mxnczk)|`mxnczk`|May 15, 2024|
|[Mexican peso vs. Hungarian forint](https://www.dukascopy-node.app/instrument/mxnhuf)|`mxnhuf`|May 15, 2024|
|[Mexican peso vs. Japanese yen](https://www.dukascopy-node.app/instrument/mxnjpy)|`mxnjpy`|Jul 23, 1998|
|[Mexican peso vs. Thai baht](https://www.dukascopy-node.app/instrument/mxnthb)|`mxnthb`|Sep 17, 2024|
|[Mexican peso vs. Turkish lira](https://www.dukascopy-node.app/instrument/mxntry)|`mxntry`|May 15, 2024|
|[Norwegian krone vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/nokaed)|`nokaed`|Sep 17, 2024|
|[Norwegian krone vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/nokcnh)|`nokcnh`|Sep 17, 2024|
|[Norwegian krone vs. Czech koruna](https://www.dukascopy-node.app/instrument/nokczk)|`nokczk`|May 15, 2024|
|[Norwegian krone vs. Danish krone](https://www.dukascopy-node.app/instrument/nokdkk)|`nokdkk`|May 15, 2024|
|[Norwegian krone vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/nokhkd)|`nokhkd`|May 15, 2024|
|[Norwegian krone vs. Hungarian forint](https://www.dukascopy-node.app/instrument/nokhuf)|`nokhuf`|May 15, 2024|
|[Norwegian krone vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/nokils)|`nokils`|Sep 17, 2024|
|[Norwegian krone vs. Japanese yen](https://www.dukascopy-node.app/instrument/nokjpy)|`nokjpy`|May 15, 2024|
|[Norwegian krone vs. Mexican peso](https://www.dukascopy-node.app/instrument/nokmxn)|`nokmxn`|May 26, 2024|
|[Norwegian krone vs. Romanian leu](https://www.dukascopy-node.app/instrument/nokron)|`nokron`|Sep 17, 2024|
|[Norwegian krone vs. Saudi riyal](https://www.dukascopy-node.app/instrument/noksar)|`noksar`|Sep 17, 2024|
|[Norwegian krone vs. Swedish krona](https://www.dukascopy-node.app/instrument/noksek)|`noksek`|May 15, 2024|
|[Norwegian krone vs. Thai baht](https://www.dukascopy-node.app/instrument/nokthb)|`nokthb`|Sep 17, 2024|
|[Norwegian krone vs. Turkish lira](https://www.dukascopy-node.app/instrument/noktry)|`noktry`|May 15, 2024|
|[Norwegian krone vs. South African rand](https://www.dukascopy-node.app/instrument/nokzar)|`nokzar`|May 15, 2024|
|[New Zealand dollar vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/nzdaed)|`nzdaed`|Sep 17, 2024|
|[New Zealand dollar vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/nzdcnh)|`nzdcnh`|May 15, 2024|
|[New Zealand dollar vs. Czech koruna](https://www.dukascopy-node.app/instrument/nzdczk)|`nzdczk`|May 15, 2024|
|[New Zealand dollar vs. Danish krone](https://www.dukascopy-node.app/instrument/nzddkk)|`nzddkk`|May 15, 2024|
|[New Zealand dollar vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/nzdhkd)|`nzdhkd`|May 15, 2024|
|[New Zealand dollar vs. Hungarian forint](https://www.dukascopy-node.app/instrument/nzdhuf)|`nzdhuf`|May 15, 2024|
|[New Zealand dollar vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/nzdils)|`nzdils`|Sep 17, 2024|
|[New Zealand dollar vs. Mexican peso](https://www.dukascopy-node.app/instrument/nzdmxn)|`nzdmxn`|May 15, 2024|
|[New Zealand dollar vs. Norwegian krone](https://www.dukascopy-node.app/instrument/nzdnok)|`nzdnok`|May 15, 2024|
|[New Zealand dollar vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/nzdpln)|`nzdpln`|May 4, 2001|
|[New Zealand dollar vs. Romanian leu](https://www.dukascopy-node.app/instrument/nzdron)|`nzdron`|Sep 17, 2024|
|[New Zealand dollar vs. Saudi riyal](https://www.dukascopy-node.app/instrument/nzdsar)|`nzdsar`|Sep 17, 2024|
|[New Zealand dollar vs. Swedish krona](https://www.dukascopy-node.app/instrument/nzdsek)|`nzdsek`|May 15, 2024|
|[New Zealand dollar vs. Singapore dollar](https://www.dukascopy-node.app/instrument/nzdsgd)|`nzdsgd`|Jun 3, 1999|
|[New Zealand dollar vs. Thai baht](https://www.dukascopy-node.app/instrument/nzdthb)|`nzdthb`|Sep 17, 2024|
|[New Zealand dollar vs. Turkish lira](https://www.dukascopy-node.app/instrument/nzdtry)|`nzdtry`|May 15, 2024|
|[New Zealand dollar vs. South African rand](https://www.dukascopy-node.app/instrument/nzdzar)|`nzdzar`|May 15, 2024|
|[Polish zÅ‚oty vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/plnaed)|`plnaed`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/plncnh)|`plncnh`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Czech koruna](https://www.dukascopy-node.app/instrument/plnczk)|`plnczk`|May 15, 2024|
|[Polish zÅ‚oty vs. Danish krone](https://www.dukascopy-node.app/instrument/plndkk)|`plndkk`|Dec 28, 2001|
|[Polish zÅ‚oty vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/plnhkd)|`plnhkd`|May 15, 2024|
|[Polish zÅ‚oty vs. Hungarian forint](https://www.dukascopy-node.app/instrument/plnhuf)|`plnhuf`|May 15, 2024|
|[Polish zÅ‚oty vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/plnils)|`plnils`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Japanese yen](https://www.dukascopy-node.app/instrument/plnjpy)|`plnjpy`|May 15, 2024|
|[Polish zÅ‚oty vs. Mexican peso](https://www.dukascopy-node.app/instrument/plnmxn)|`plnmxn`|May 15, 2024|
|[Polish zÅ‚oty vs. Norwegian krone](https://www.dukascopy-node.app/instrument/plnnok)|`plnnok`|May 15, 2024|
|[Polish zÅ‚oty vs. Romanian leu](https://www.dukascopy-node.app/instrument/plnron)|`plnron`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Saudi riyal](https://www.dukascopy-node.app/instrument/plnsar)|`plnsar`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Swedish krona](https://www.dukascopy-node.app/instrument/plnsek)|`plnsek`|May 15, 2024|
|[Polish zÅ‚oty vs. Thai baht](https://www.dukascopy-node.app/instrument/plnthb)|`plnthb`|Sep 17, 2024|
|[Polish zÅ‚oty vs. Turkish lira](https://www.dukascopy-node.app/instrument/plntry)|`plntry`|May 15, 2024|
|[Polish zÅ‚oty vs. South African rand](https://www.dukascopy-node.app/instrument/plnzar)|`plnzar`|May 15, 2024|
|[Romanian leu vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/roncnh)|`roncnh`|Sep 17, 2024|
|[Romanian leu vs. Czech koruna](https://www.dukascopy-node.app/instrument/ronczk)|`ronczk`|Sep 17, 2024|
|[Romanian leu vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/ronhkd)|`ronhkd`|Sep 17, 2024|
|[Romanian leu vs. Hungarian forint](https://www.dukascopy-node.app/instrument/ronhuf)|`ronhuf`|Sep 17, 2024|
|[Romanian leu vs. Japanese yen](https://www.dukascopy-node.app/instrument/ronjpy)|`ronjpy`|Sep 17, 2024|
|[Romanian leu vs. Mexican peso](https://www.dukascopy-node.app/instrument/ronmxn)|`ronmxn`|Sep 17, 2024|
|[Romanian leu vs. Thai baht](https://www.dukascopy-node.app/instrument/ronthb)|`ronthb`|Sep 17, 2024|
|[Romanian leu vs. Turkish lira](https://www.dukascopy-node.app/instrument/rontry)|`rontry`|Sep 17, 2024|
|[Romanian leu vs. South African rand](https://www.dukascopy-node.app/instrument/ronzar)|`ronzar`|Sep 17, 2024|
|[Saudi riyal vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/sarcnh)|`sarcnh`|Sep 17, 2024|
|[Saudi riyal vs. Czech koruna](https://www.dukascopy-node.app/instrument/sarczk)|`sarczk`|Sep 17, 2024|
|[Saudi riyal vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/sarhkd)|`sarhkd`|Sep 17, 2024|
|[Saudi riyal vs. Hungarian forint](https://www.dukascopy-node.app/instrument/sarhuf)|`sarhuf`|Sep 17, 2024|
|[Saudi riyal vs. Japanese yen](https://www.dukascopy-node.app/instrument/sarjpy)|`sarjpy`|Sep 17, 2024|
|[Saudi riyal vs. Mexican peso](https://www.dukascopy-node.app/instrument/sarmxn)|`sarmxn`|Sep 17, 2024|
|[Saudi riyal vs. Romanian leu](https://www.dukascopy-node.app/instrument/sarron)|`sarron`|Sep 17, 2024|
|[Saudi riyal vs. Thai baht](https://www.dukascopy-node.app/instrument/sarthb)|`sarthb`|Sep 17, 2024|
|[Saudi riyal vs. Turkish lira](https://www.dukascopy-node.app/instrument/sartry)|`sartry`|Sep 17, 2024|
|[Saudi riyal vs. South African rand](https://www.dukascopy-node.app/instrument/sarzar)|`sarzar`|Sep 17, 2024|
|[Swedish krona vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/sekaed)|`sekaed`|Sep 17, 2024|
|[Swedish krona vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/sekcnh)|`sekcnh`|Sep 17, 2024|
|[Swedish krona vs. Czech koruna](https://www.dukascopy-node.app/instrument/sekczk)|`sekczk`|May 15, 2024|
|[Swedish krona vs. Danish krone](https://www.dukascopy-node.app/instrument/sekdkk)|`sekdkk`|May 15, 2024|
|[Swedish krona vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/sekhkd)|`sekhkd`|May 15, 2024|
|[Swedish krona vs. Hungarian forint](https://www.dukascopy-node.app/instrument/sekhuf)|`sekhuf`|May 15, 2024|
|[Swedish krona vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/sekils)|`sekils`|Sep 17, 2024|
|[Swedish krona vs. Japanese yen](https://www.dukascopy-node.app/instrument/sekjpy)|`sekjpy`|May 15, 2024|
|[Swedish krona vs. Mexican peso](https://www.dukascopy-node.app/instrument/sekmxn)|`sekmxn`|May 15, 2024|
|[Swedish krona vs. Romanian leu](https://www.dukascopy-node.app/instrument/sekron)|`sekron`|Sep 17, 2024|
|[Swedish krona vs. Saudi riyal](https://www.dukascopy-node.app/instrument/seksar)|`seksar`|Sep 17, 2024|
|[Swedish krona vs. Thai baht](https://www.dukascopy-node.app/instrument/sekthb)|`sekthb`|Sep 17, 2024|
|[Swedish krona vs. Turkish lira](https://www.dukascopy-node.app/instrument/sektry)|`sektry`|May 15, 2024|
|[Swedish krona vs. South African rand](https://www.dukascopy-node.app/instrument/sekzar)|`sekzar`|May 15, 2024|
|[Singapore dollar vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/sgdaed)|`sgdaed`|Sep 17, 2024|
|[Singapore dollar vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/sgdcnh)|`sgdcnh`|Sep 17, 2024|
|[Singapore dollar vs. Czech koruna](https://www.dukascopy-node.app/instrument/sgdczk)|`sgdczk`|May 15, 2024|
|[Singapore dollar vs. Danish krone](https://www.dukascopy-node.app/instrument/sgddkk)|`sgddkk`|May 15, 2024|
|[Singapore dollar vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/sgdhkd)|`sgdhkd`|May 15, 2024|
|[Singapore dollar vs. Hungarian forint](https://www.dukascopy-node.app/instrument/sgdhuf)|`sgdhuf`|May 15, 2024|
|[Singapore dollar vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/sgdils)|`sgdils`|Sep 17, 2024|
|[Singapore dollar vs. Mexican peso](https://www.dukascopy-node.app/instrument/sgdmxn)|`sgdmxn`|May 15, 2024|
|[Singapore dollar vs. Norwegian krone](https://www.dukascopy-node.app/instrument/sgdnok)|`sgdnok`|May 15, 2024|
|[Singapore dollar vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/sgdpln)|`sgdpln`|May 15, 2024|
|[Singapore dollar vs. Romanian leu](https://www.dukascopy-node.app/instrument/sgdron)|`sgdron`|Sep 17, 2024|
|[Singapore dollar vs. Saudi riyal](https://www.dukascopy-node.app/instrument/sgdsar)|`sgdsar`|Sep 17, 2024|
|[Singapore dollar vs. Swedish krona](https://www.dukascopy-node.app/instrument/sgdsek)|`sgdsek`|May 15, 2024|
|[Singapore dollar vs. Thai baht](https://www.dukascopy-node.app/instrument/sgdthb)|`sgdthb`|Sep 17, 2024|
|[Singapore dollar vs. Turkish lira](https://www.dukascopy-node.app/instrument/sgdtry)|`sgdtry`|May 15, 2024|
|[Singapore dollar vs. South African rand](https://www.dukascopy-node.app/instrument/sgdzar)|`sgdzar`|May 15, 2024|
|[Thai baht vs. Hungarian forint](https://www.dukascopy-node.app/instrument/thbhuf)|`thbhuf`|Sep 17, 2024|
|[Thai baht vs. Japanese yen](https://www.dukascopy-node.app/instrument/thbjpy)|`thbjpy`|Sep 17, 2024|
|[Turkish lira vs. Hungarian forint](https://www.dukascopy-node.app/instrument/tryhuf)|`tryhuf`|May 15, 2024|
|[Turkish lira vs. Thai baht](https://www.dukascopy-node.app/instrument/trythb)|`trythb`|Sep 16, 2024|
|[South African rand vs. Czech koruna](https://www.dukascopy-node.app/instrument/zarczk)|`zarczk`|May 15, 2024|
|[South African rand vs. Hungarian forint](https://www.dukascopy-node.app/instrument/zarhuf)|`zarhuf`|May 15, 2024|
|[South African rand vs. Mexican peso](https://www.dukascopy-node.app/instrument/zarmxn)|`zarmxn`|May 15, 2024|
|[South African rand vs. Thai baht](https://www.dukascopy-node.app/instrument/zarthb)|`zarthb`|Sep 17, 2024|
|[South African rand vs. Turkish lira](https://www.dukascopy-node.app/instrument/zartry)|`zartry`|May 15, 2024|
<h3 id="fx_majors">Forex major currencies 💶</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Australian Dollar vs US Dollar](https://www.dukascopy-node.app/instrument/audusd)|`audusd`|Jan 4, 1993|
|[Euro vs US Dollar](https://www.dukascopy-node.app/instrument/eurusd)|`eurusd`|Mar 1, 1973|
|[Pound Sterling vs US Dollar](https://www.dukascopy-node.app/instrument/gbpusd)|`gbpusd`|Feb 10, 1986|
|[New Zealand Dollar vs US Dollar](https://www.dukascopy-node.app/instrument/nzdusd)|`nzdusd`|Jul 8, 1991|
|[US Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/usdcad)|`usdcad`|Feb 10, 1986|
|[US Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/usdchf)|`usdchf`|Feb 10, 1986|
|[US Dollar vs Japanese Yen](https://www.dukascopy-node.app/instrument/usdjpy)|`usdjpy`|Feb 10, 1986|
<h3 id="fx_metals">Forex metals 🥇</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Spot silver](https://www.dukascopy-node.app/instrument/xagusd)|`xagusd`|Jun 3, 1999|
|[Spot gold](https://www.dukascopy-node.app/instrument/xauusd)|`xauusd`|Jun 3, 1999|
|[Silver (troy oz) vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/xagaed)|`xagaed`|Sep 17, 2024|
|[Silver (troy oz) vs. Australian dollar](https://www.dukascopy-node.app/instrument/xagaud)|`xagaud`|Sep 19, 2011|
|[Silver (troy oz) vs. Canadian dollar](https://www.dukascopy-node.app/instrument/xagcad)|`xagcad`|May 15, 2024|
|[Silver (troy oz) vs. Swiss franc](https://www.dukascopy-node.app/instrument/xagchf)|`xagchf`|Mar 14, 2023|
|[Silver (troy oz) vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/xagcnh)|`xagcnh`|Sep 17, 2024|
|[Silver (troy oz) vs. Czech koruna](https://www.dukascopy-node.app/instrument/xagczk)|`xagczk`|May 15, 2024|
|[Silver (troy oz) vs. Danish krone](https://www.dukascopy-node.app/instrument/xagdkk)|`xagdkk`|Sep 19, 2011|
|[Silver (troy oz) vs. Euro](https://www.dukascopy-node.app/instrument/xageur)|`xageur`|Jan 2, 1985|
|[Silver (troy oz) vs. Pound sterling](https://www.dukascopy-node.app/instrument/xaggbp)|`xaggbp`|Oct 1, 1986|
|[Silver (troy oz) vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/xaghkd)|`xaghkd`|Jan 2, 1990|
|[Silver (troy oz) vs. Hungarian forint](https://www.dukascopy-node.app/instrument/xaghuf)|`xaghuf`|May 15, 2024|
|[Silver (troy oz) vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/xagils)|`xagils`|Sep 17, 2024|
|[Silver (troy oz) vs. Japanese yen](https://www.dukascopy-node.app/instrument/xagjpy)|`xagjpy`|Sep 17, 2024|
|[Silver (troy oz) vs. Mexican peso](https://www.dukascopy-node.app/instrument/xagmxn)|`xagmxn`|Nov 7, 1990|
|[Silver (troy oz) vs. Norwegian krone](https://www.dukascopy-node.app/instrument/xagnok)|`xagnok`|May 15, 2024|
|[Silver (troy oz) vs. New Zealand dollar](https://www.dukascopy-node.app/instrument/xagnzd)|`xagnzd`|Jan 9, 2003|
|[Silver (troy oz) vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/xagpln)|`xagpln`|May 15, 2024|
|[Silver (troy oz) vs. Romanian leu](https://www.dukascopy-node.app/instrument/xagron)|`xagron`|Sep 17, 2024|
|[Silver (troy oz) vs. Saudi riyal](https://www.dukascopy-node.app/instrument/xagsar)|`xagsar`|Sep 17, 2024|
|[Silver (troy oz) vs. Swedish krona](https://www.dukascopy-node.app/instrument/xagsek)|`xagsek`|Apr 1, 1977|
|[Silver (troy oz) vs. Singapore dollar](https://www.dukascopy-node.app/instrument/xagsgd)|`xagsgd`|Jan 2, 1980|
|[Silver (troy oz) vs. Thai baht](https://www.dukascopy-node.app/instrument/xagthb)|`xagthb`|Sep 17, 2024|
|[Silver (troy oz) vs. Turkish lira](https://www.dukascopy-node.app/instrument/xagtry)|`xagtry`|Dec 31, 1987|
|[Silver(troy oz) vs. South African rand](https://www.dukascopy-node.app/instrument/xagzar)|`xagzar`|Sep 17, 2024|
|[Gold (troy oz) vs. United Arab Emirates dirham](https://www.dukascopy-node.app/instrument/xauaed)|`xauaed`|Sep 17, 2024|
|[Gold (troy oz) vs. Australian dollar](https://www.dukascopy-node.app/instrument/xauaud)|`xauaud`|May 15, 2024|
|[Gold (troy oz) vs. Canadian dollar](https://www.dukascopy-node.app/instrument/xaucad)|`xaucad`|May 15, 2024|
|[Gold (troy oz) vs. Swiss franc](https://www.dukascopy-node.app/instrument/xauchf)|`xauchf`|Mar 14, 2023|
|[Gold (troy oz) vs. Renminbi (offshore)](https://www.dukascopy-node.app/instrument/xaucnh)|`xaucnh`|Sep 17, 2024|
|[Gold (troy oz) vs. Czech koruna](https://www.dukascopy-node.app/instrument/xauczk)|`xauczk`|May 15, 2024|
|[Gold (troy oz) vs. Danish krone](https://www.dukascopy-node.app/instrument/xaudkk)|`xaudkk`|May 15, 2024|
|[Gold (troy oz) vs. Euro](https://www.dukascopy-node.app/instrument/xaueur)|`xaueur`|Mar 14, 2023|
|[Gold (troy oz) vs. Pound sterling](https://www.dukascopy-node.app/instrument/xaugbp)|`xaugbp`|Mar 14, 2023|
|[Gold (troy oz) vs. Hong Kong dollar](https://www.dukascopy-node.app/instrument/xauhkd)|`xauhkd`|May 15, 2024|
|[Gold (troy oz) vs. Hungarian forint](https://www.dukascopy-node.app/instrument/xauhuf)|`xauhuf`|May 15, 2024|
|[Gold (troy oz) vs. Israeli new shekel](https://www.dukascopy-node.app/instrument/xauils)|`xauils`|Sep 17, 2024|
|[Gold (troy oz) vs. Japanese yen](https://www.dukascopy-node.app/instrument/xaujpy)|`xaujpy`|Sep 17, 2024|
|[Gold (troy oz) vs. Mexican peso](https://www.dukascopy-node.app/instrument/xaumxn)|`xaumxn`|May 15, 2024|
|[Gold (troy oz) vs. Norwegian krone](https://www.dukascopy-node.app/instrument/xaunok)|`xaunok`|May 15, 2024|
|[Gold (troy oz) vs. New Zealand dollar](https://www.dukascopy-node.app/instrument/xaunzd)|`xaunzd`|May 15, 2024|
|[Gold (troy oz) vs. Polish zÅ‚oty](https://www.dukascopy-node.app/instrument/xaupln)|`xaupln`|May 15, 2024|
|[Gold (troy oz) vs. Romanian leu](https://www.dukascopy-node.app/instrument/xauron)|`xauron`|Sep 17, 2024|
|[Gold (troy oz) vs. Saudi riyal](https://www.dukascopy-node.app/instrument/xausar)|`xausar`|Sep 17, 2024|
|[Gold (troy oz) vs. Swedish krona](https://www.dukascopy-node.app/instrument/xausek)|`xausek`|May 15, 2024|
|[Gold (troy oz) vs. Singapore dollar](https://www.dukascopy-node.app/instrument/xausgd)|`xausgd`|May 15, 2024|
|[Gold (troy oz) vs. Thai baht](https://www.dukascopy-node.app/instrument/xauthb)|`xauthb`|Sep 17, 2024|
|[Gold (troy oz) vs. Turkish lira](https://www.dukascopy-node.app/instrument/xautry)|`xautry`|May 15, 2024|
|[Gold (troy oz) vs. Silver (troy oz)](https://www.dukascopy-node.app/instrument/xauxag)|`xauxag`|Sep 17, 2024|
|[Gold (troy oz) vs. South African rand](https://www.dukascopy-node.app/instrument/xauzar)|`xauzar`|Sep 17, 2024|
<h3 id="idx_america">America 🌎</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[US Dollar Index](https://www.dukascopy-node.app/instrument/dollaridxusd)|`dollaridxusd`|Dec 1, 2017|
|[USA 30 Index](https://www.dukascopy-node.app/instrument/usa30idxusd)|`usa30idxusd`|Jan 1, 2013|
|[USA 100 Technical Index](https://www.dukascopy-node.app/instrument/usatechidxusd)|`usatechidxusd`|Nov 7, 1990|
|[USA 500 Index](https://www.dukascopy-node.app/instrument/usa500idxusd)|`usa500idxusd`|Jan 2, 1980|
|[US Small Cap 2000](https://www.dukascopy-node.app/instrument/ussc2000idxusd)|`ussc2000idxusd`|Aug 8, 2018|
|[Volatility Index](https://www.dukascopy-node.app/instrument/volidxusd)|`volidxusd`|Oct 5, 2022|
<h3 id="idx_asia">Asia 🌏</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[China A50 Index](https://www.dukascopy-node.app/instrument/chiidxusd)|`chiidxusd`|Jul 17, 2017|
|[Hong Kong 40 Index](https://www.dukascopy-node.app/instrument/hkgidxhkd)|`hkgidxhkd`|Jun 3, 2013|
|[Japan 225](https://www.dukascopy-node.app/instrument/jpnidxjpy)|`jpnidxjpy`|Sep 4, 1986|
|[Australia 200 Index](https://www.dukascopy-node.app/instrument/ausidxaud)|`ausidxaud`|Jun 1, 2014|
|[India 50 Index](https://www.dukascopy-node.app/instrument/indidxusd)|`indidxusd`|Dec 1, 2017|
|[Singapore Blue Chip Cash Index](https://www.dukascopy-node.app/instrument/sgdidxsgd)|`sgdidxsgd`|Dec 1, 2017|
<h3 id="idx_europe">Europe 🇪🇺</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[France 40 Index](https://www.dukascopy-node.app/instrument/fraidxeur)|`fraidxeur`|Dec 31, 1987|
|[Germany 40 Index](https://www.dukascopy-node.app/instrument/deuidxeur)|`deuidxeur`|Jan 1, 2013|
|[Europe 50 Index](https://www.dukascopy-node.app/instrument/eusidxeur)|`eusidxeur`|Jun 2, 2014|
|[UK 100 Index](https://www.dukascopy-node.app/instrument/gbridxgbp)|`gbridxgbp`|Apr 5, 1988|
|[Spain 35 Index](https://www.dukascopy-node.app/instrument/espidxeur)|`espidxeur`|Jun 2, 2014|
|[Switzerland 20 Index](https://www.dukascopy-node.app/instrument/cheidxchf)|`cheidxchf`|Jan 3, 1992|
|[Italy 40 Index](https://www.dukascopy-node.app/instrument/itaidxeur)|`itaidxeur`|Jul 29, 2016|
|[Netherlands 25 Index](https://www.dukascopy-node.app/instrument/nldidxeur)|`nldidxeur`|Dec 1, 2017|
|[Poland 20 Index](https://www.dukascopy-node.app/instrument/plnidxpln)|`plnidxpln`|Dec 1, 2017|
<h3 id="idx_africa">Africa 🌍</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[South Africa 40 Index](https://www.dukascopy-node.app/instrument/soaidxzar)|`soaidxzar`|Oct 5, 2022|
<h3 id="austria">Austria 🇦🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Erste Group Bank AG](https://www.dukascopy-node.app/instrument/ebsateur)|`ebsateur`|Jan 3, 2011|
|[Raiffeisen Bank International AG](https://www.dukascopy-node.app/instrument/rbiateur)|`rbiateur`|Jan 3, 2011|
|[Voestalpine AG](https://www.dukascopy-node.app/instrument/voeateur)|`voeateur`|Jan 3, 2011|
<h3 id="belgium">Belgium 🇧🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Anheuser-Busch InBev NV](https://www.dukascopy-node.app/instrument/abibeeur)|`abibeeur`|Jan 3, 2011|
|[Ageas](https://www.dukascopy-node.app/instrument/agsbeeur)|`agsbeeur`|Jan 3, 2011|
|[Proximus](https://www.dukascopy-node.app/instrument/belgbeeur)|`belgbeeur`|Jan 3, 2011|
|[KBC Groep NV](https://www.dukascopy-node.app/instrument/kbcbeeur)|`kbcbeeur`|Jan 3, 2011|
|[Solvay SA](https://www.dukascopy-node.app/instrument/solbbeeur)|`solbbeeur`|Jan 3, 2011|
|[UCB SA](https://www.dukascopy-node.app/instrument/ucbbeeur)|`ucbbeeur`|Jan 3, 2011|
|[Umicore SA](https://www.dukascopy-node.app/instrument/umibeeur)|`umibeeur`|Jan 3, 2011|
<h3 id="denmark">Denmark 🇩🇰</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Carlsberg A/S](https://www.dukascopy-node.app/instrument/carlbdkdkk)|`carlbdkdkk`|Jan 3, 2011|
|[Coloplast A/S](https://www.dukascopy-node.app/instrument/colobdkdkk)|`colobdkdkk`|Jan 3, 2011|
|[Danske Bank A/S](https://www.dukascopy-node.app/instrument/danskedkdkk)|`danskedkdkk`|Jan 3, 2011|
|[AP Moeller - Maersk A/S](https://www.dukascopy-node.app/instrument/maerskbdkdkk)|`maerskbdkdkk`|Jan 3, 2011|
|[Novo Nordisk A/S](https://www.dukascopy-node.app/instrument/novobdkdkk)|`novobdkdkk`|Jan 3, 2011|
|[Novozymes A/S](https://www.dukascopy-node.app/instrument/nzymbdkdkk)|`nzymbdkdkk`|Jan 3, 2011|
|[Pandora A/S](https://www.dukascopy-node.app/instrument/pndoradkdkk)|`pndoradkdkk`|Jan 3, 2011|
|[Vestas Wind Systems A/S](https://www.dukascopy-node.app/instrument/vwsdkdkk)|`vwsdkdkk`|Jan 3, 2011|
<h3 id="finland">Finland 🇫🇮</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Elisa OYJ](https://www.dukascopy-node.app/instrument/eli1vfieur)|`eli1vfieur`|Jan 3, 2011|
|[Neste OYJ](https://www.dukascopy-node.app/instrument/nes1vfieur)|`nes1vfieur`|Jan 3, 2011|
|[Nokian Renkaat OYJ](https://www.dukascopy-node.app/instrument/nre1vfieur)|`nre1vfieur`|Jan 3, 2011|
|[Outotec OYJ](https://www.dukascopy-node.app/instrument/ote1vfieur)|`ote1vfieur`|Jan 3, 2011|
|[Outokumpu OYJ](https://www.dukascopy-node.app/instrument/out1vfieur)|`out1vfieur`|Mar 3, 2014|
|[Stora Enso OYJ](https://www.dukascopy-node.app/instrument/stervfieur)|`stervfieur`|Jan 3, 2011|
|[Telia Company AB](https://www.dukascopy-node.app/instrument/tls1vfieur)|`tls1vfieur`|Apr 18, 2016|
<h3 id="france">France 🇫🇷</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Accor SA](https://www.dukascopy-node.app/instrument/acfreur)|`acfreur`|Jan 3, 2011|
|[Credit Agricole SA](https://www.dukascopy-node.app/instrument/acafreur)|`acafreur`|Jan 3, 2011|
|[Air France-KLM](https://www.dukascopy-node.app/instrument/affreur)|`affreur`|Jan 3, 2011|
|[Air Liquide SA](https://www.dukascopy-node.app/instrument/aifreur)|`aifreur`|Jan 3, 2011|
|[Airbus Group SE](https://www.dukascopy-node.app/instrument/airfreur)|`airfreur`|Jan 2, 2014|
|[Alstom SA](https://www.dukascopy-node.app/instrument/alofreur)|`alofreur`|Jan 3, 2011|
|[ATOS SE](https://www.dukascopy-node.app/instrument/atofreur)|`atofreur`|Jun 14, 2022|
|[Danone SA](https://www.dukascopy-node.app/instrument/bnfreur)|`bnfreur`|Jan 3, 2011|
|[BNP Paribas SA](https://www.dukascopy-node.app/instrument/bnpfreur)|`bnpfreur`|Jan 3, 2011|
|[Carrefour SA](https://www.dukascopy-node.app/instrument/cafreur)|`cafreur`|Jan 3, 2011|
|[Cap Gemini SA](https://www.dukascopy-node.app/instrument/capfreur)|`capfreur`|Jan 3, 2011|
|[AXA SA](https://www.dukascopy-node.app/instrument/csfreur)|`csfreur`|Jan 3, 2011|
|[Vinci SA](https://www.dukascopy-node.app/instrument/dgfreur)|`dgfreur`|Jan 3, 2011|
|[DASSAULT SYSTEMES SE](https://www.dukascopy-node.app/instrument/dsyfreur)|`dsyfreur`|May 12, 2022|
|[Electricite de France SA](https://www.dukascopy-node.app/instrument/edffreur)|`edffreur`|Jan 3, 2011|
|[Bouygues SA](https://www.dukascopy-node.app/instrument/enfreur)|`enfreur`|Jan 3, 2011|
|[Engie](https://www.dukascopy-node.app/instrument/engifreur)|`engifreur`|Jul 31, 2015|
|[Total SA](https://www.dukascopy-node.app/instrument/fpfreur)|`fpfreur`|Jan 3, 2011|
|[Valeo SA](https://www.dukascopy-node.app/instrument/frfreur)|`frfreur`|Jan 3, 2011|
|[Societe Generale SA](https://www.dukascopy-node.app/instrument/glefreur)|`glefreur`|Jan 3, 2011|
|[THALES SA](https://www.dukascopy-node.app/instrument/hofreur)|`hofreur`|May 12, 2022|
|[Kering](https://www.dukascopy-node.app/instrument/kerfreur)|`kerfreur`|Jan 3, 2011|
|[Klepierre](https://www.dukascopy-node.app/instrument/lifreur)|`lifreur`|Jan 3, 2011|
|[Legrand SA](https://www.dukascopy-node.app/instrument/lrfreur)|`lrfreur`|Jan 3, 2011|
|[LVMH Moet Hennessy Louis Vuitton SA](https://www.dukascopy-node.app/instrument/mcfreur)|`mcfreur`|Jan 3, 2011|
|[Michelin SA](https://www.dukascopy-node.app/instrument/mlfreur)|`mlfreur`|Jun 14, 2022|
|[L'Oreal SA](https://www.dukascopy-node.app/instrument/orfreur)|`orfreur`|Jan 3, 2011|
|[Orange SA](https://www.dukascopy-node.app/instrument/orafreur)|`orafreur`|Jul 1, 2013|
|[Publicis Groupe SA](https://www.dukascopy-node.app/instrument/pubfreur)|`pubfreur`|Jan 3, 2011|
|[Pernod-Ricard SA](https://www.dukascopy-node.app/instrument/rifreur)|`rifreur`|Jan 3, 2011|
|[HERMES INTERNATIONAL](https://www.dukascopy-node.app/instrument/rmsfreur)|`rmsfreur`|May 12, 2022|
|[Renault SA](https://www.dukascopy-node.app/instrument/rnofreur)|`rnofreur`|Jan 3, 2011|
|[Safran SA](https://www.dukascopy-node.app/instrument/saffreur)|`saffreur`|Jan 3, 2011|
|[Sanofi](https://www.dukascopy-node.app/instrument/sanfreur)|`sanfreur`|Jan 3, 2011|
|[Cie de St-Gobain](https://www.dukascopy-node.app/instrument/sgofreur)|`sgofreur`|Jan 3, 2011|
|[Schneider Electric SA](https://www.dukascopy-node.app/instrument/sufreur)|`sufreur`|Jan 3, 2011|
|[SODEXO SA](https://www.dukascopy-node.app/instrument/swfreur)|`swfreur`|May 12, 2022|
|[Peugeot SA](https://www.dukascopy-node.app/instrument/ugfreur)|`ugfreur`|Jan 3, 2011|
|[Veolia Environnement SA](https://www.dukascopy-node.app/instrument/viefreur)|`viefreur`|Jan 3, 2011|
|[Vivendi SA](https://www.dukascopy-node.app/instrument/vivfreur)|`vivfreur`|Jan 3, 2011|
|[Vallourec SA](https://www.dukascopy-node.app/instrument/vkfreur)|`vkfreur`|Jan 3, 2011|
<h3 id="germany">Germany 🇩🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Adidas AG](https://www.dukascopy-node.app/instrument/adsdeeur)|`adsdeeur`|Jan 3, 2011|
|[Allianz SE](https://www.dukascopy-node.app/instrument/alvdeeur)|`alvdeeur`|Jan 3, 2011|
|[BASF SE](https://www.dukascopy-node.app/instrument/basdeeur)|`basdeeur`|Jan 3, 2011|
|[Bayer AG](https://www.dukascopy-node.app/instrument/bayndeeur)|`bayndeeur`|Jan 3, 2011|
|[Beiersdorf AG](https://www.dukascopy-node.app/instrument/beideeur)|`beideeur`|Jan 3, 2011|
|[Bayerische Motoren Werke AG](https://www.dukascopy-node.app/instrument/bmwdeeur)|`bmwdeeur`|Jan 3, 2011|
|[BRENNTAG SE](https://www.dukascopy-node.app/instrument/bnrdeeur)|`bnrdeeur`|May 12, 2022|
|[HUGO BOSS AG](https://www.dukascopy-node.app/instrument/bossdeeur)|`bossdeeur`|Jun 18, 2012|
|[Commerzbank AG](https://www.dukascopy-node.app/instrument/cbkdeeur)|`cbkdeeur`|Jan 3, 2011|
|[Continental AG](https://www.dukascopy-node.app/instrument/condeeur)|`condeeur`|Jan 3, 2011|
|[Covestro AG](https://www.dukascopy-node.app/instrument/covdeeur)|`covdeeur`|May 12, 2022|
|[Daimler AG](https://www.dukascopy-node.app/instrument/daideeur)|`daideeur`|Jan 3, 2011|
|[Deutsche Boerse AG](https://www.dukascopy-node.app/instrument/db1deeur)|`db1deeur`|Jan 3, 2011|
|[Deutsche Bank AG](https://www.dukascopy-node.app/instrument/dbkdeeur)|`dbkdeeur`|Jan 3, 2011|
|[Delivery Hero AG](https://www.dukascopy-node.app/instrument/dhrdeeur)|`dhrdeeur`|May 12, 2022|
|[Deutsche Post AG](https://www.dukascopy-node.app/instrument/dpwdeeur)|`dpwdeeur`|Jan 3, 2011|
|[Deutsche Telekom AG](https://www.dukascopy-node.app/instrument/dtedeeur)|`dtedeeur`|Jan 3, 2011|
|[E.ON SE](https://www.dukascopy-node.app/instrument/eoandeeur)|`eoandeeur`|Jan 3, 2011|
|[Fresenius Medical Care AG & Co KGaA](https://www.dukascopy-node.app/instrument/fmedeeur)|`fmedeeur`|Jan 3, 2011|
|[Fresenius SE & Co KGaA](https://www.dukascopy-node.app/instrument/fredeeur)|`fredeeur`|Jan 3, 2011|
|[HeidelbergCement AG](https://www.dukascopy-node.app/instrument/heideeur)|`heideeur`|Jan 3, 2011|
|[Henkel AG & Co KGaA](https://www.dukascopy-node.app/instrument/hen3deeur)|`hen3deeur`|Jan 3, 2011|
|[HELLOFRESH SE](https://www.dukascopy-node.app/instrument/hfgdeeur)|`hfgdeeur`|May 12, 2022|
|[Hannover Rueckversicheru-Reg](https://www.dukascopy-node.app/instrument/hnrdeeur)|`hnrdeeur`|May 12, 2022|
|[Infineon Technologies AG](https://www.dukascopy-node.app/instrument/ifxdeeur)|`ifxdeeur`|Jan 3, 2011|
|[Deutsche Lufthansa AG](https://www.dukascopy-node.app/instrument/lhadeeur)|`lhadeeur`|Jan 3, 2011|
|[Linde AG](https://www.dukascopy-node.app/instrument/lindeeur)|`lindeeur`|Jan 3, 2011|
|[Lanxess AG](https://www.dukascopy-node.app/instrument/lxsdeeur)|`lxsdeeur`|Jan 3, 2011|
|[Merck KGaA](https://www.dukascopy-node.app/instrument/mrkdeeur)|`mrkdeeur`|Jan 3, 2011|
|[MTU AERO ENGINES AG](https://www.dukascopy-node.app/instrument/mtxdeeur)|`mtxdeeur`|May 12, 2022|
|[Muenchener Rueckversicherungs AG](https://www.dukascopy-node.app/instrument/muv2deeur)|`muv2deeur`|Jan 3, 2011|
|[Porsche Automobil Holding SE](https://www.dukascopy-node.app/instrument/pah3deeur)|`pah3deeur`|Jan 3, 2011|
|[ProSiebenSat.1 Media AG](https://www.dukascopy-node.app/instrument/psmdeeur)|`psmdeeur`|Aug 19, 2013|
|[PUMA SE](https://www.dukascopy-node.app/instrument/pumdeeur)|`pumdeeur`|May 12, 2022|
|[RWE AG](https://www.dukascopy-node.app/instrument/rwedeeur)|`rwedeeur`|Jan 3, 2011|
|[SAP AG](https://www.dukascopy-node.app/instrument/sapdeeur)|`sapdeeur`|Jan 3, 2011|
|[K+S AG](https://www.dukascopy-node.app/instrument/sdfdeeur)|`sdfdeeur`|Aug 8, 2011|
|[Siemens AG](https://www.dukascopy-node.app/instrument/siedeeur)|`siedeeur`|Jan 3, 2011|
|[Sartorius AG - Vorzug](https://www.dukascopy-node.app/instrument/srtdeeur)|`srtdeeur`|May 12, 2022|
|[SYMRISE AG](https://www.dukascopy-node.app/instrument/sy1deeur)|`sy1deeur`|May 12, 2022|
|[ThyssenKrupp AG](https://www.dukascopy-node.app/instrument/tkadeeur)|`tkadeeur`|Jan 3, 2011|
|[TUI AG](https://www.dukascopy-node.app/instrument/tui1deeur)|`tui1deeur`|Jan 3, 2011|
|[Vonovia SE](https://www.dukascopy-node.app/instrument/vnadeeur)|`vnadeeur`|Apr 14, 2015|
|[Volkswagen AG](https://www.dukascopy-node.app/instrument/vow3deeur)|`vow3deeur`|Jan 3, 2011|
<h3 id="hong-kong">Hong Kong 🇭🇰</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[HSBC Holdings](https://www.dukascopy-node.app/instrument/0005hkhkd)|`0005hkhkd`|Jan 2, 2018|
|[Galaxy Entertainment Group](https://www.dukascopy-node.app/instrument/0027hkhkd)|`0027hkhkd`|Jan 2, 2018|
|[Geely Automobile Holdings](https://www.dukascopy-node.app/instrument/0175hkhkd)|`0175hkhkd`|Jan 2, 2018|
|[China Resources Beer Holdings](https://www.dukascopy-node.app/instrument/0291hkhkd)|`0291hkhkd`|Jan 2, 2018|
|[Sinopec Corp](https://www.dukascopy-node.app/instrument/0386hkhkd)|`0386hkhkd`|Mar 1, 2018|
|[HK Exchanges & Clearing](https://www.dukascopy-node.app/instrument/0388hkhkd)|`0388hkhkd`|Jan 2, 2018|
|[Tencent Holdings](https://www.dukascopy-node.app/instrument/0700hkhkd)|`0700hkhkd`|Jan 2, 2018|
|[PetroChina](https://www.dukascopy-node.app/instrument/0857hkhkd)|`0857hkhkd`|Jan 2, 2018|
|[China National Offshore Oil Corporation](https://www.dukascopy-node.app/instrument/0883hkhkd)|`0883hkhkd`|Jan 2, 2018|
|[China Construction Bank](https://www.dukascopy-node.app/instrument/0939hkhkd)|`0939hkhkd`|Jan 2, 2018|
|[China Mobile](https://www.dukascopy-node.app/instrument/0941hkhkd)|`0941hkhkd`|May 23, 2018|
|[CITIC Bank International](https://www.dukascopy-node.app/instrument/0998hkhkd)|`0998hkhkd`|Feb 1, 2018|
|[CSPC Pharmaceutical Group](https://www.dukascopy-node.app/instrument/1093hkhkd)|`1093hkhkd`|Jan 2, 2018|
|[Sino Biopharmeceutical](https://www.dukascopy-node.app/instrument/1177hkhkd)|`1177hkhkd`|Jul 4, 2018|
|[Agricultural Bank of China](https://www.dukascopy-node.app/instrument/1288hkhkd)|`1288hkhkd`|Jan 2, 2018|
|[AIA](https://www.dukascopy-node.app/instrument/1299hkhkd)|`1299hkhkd`|Jan 2, 2018|
|[Industrial and Commercial Bank of China](https://www.dukascopy-node.app/instrument/1398hkhkd)|`1398hkhkd`|Jan 2, 2018|
|[Xiaomi Corp](https://www.dukascopy-node.app/instrument/1810hkhkd)|`1810hkhkd`|Sep 28, 2020|
|[Sunac China Holdings](https://www.dukascopy-node.app/instrument/1918hkhkd)|`1918hkhkd`|Feb 1, 2018|
|[Country Garden Holdings](https://www.dukascopy-node.app/instrument/2007hkhkd)|`2007hkhkd`|Jan 2, 2018|
|[AAC Technologies Holdings](https://www.dukascopy-node.app/instrument/2018hkhkd)|`2018hkhkd`|Jan 2, 2018|
|[Ping An Insurance](https://www.dukascopy-node.app/instrument/2318hkhkd)|`2318hkhkd`|Jan 2, 2018|
|[BOC Hong Kong (Holdings)](https://www.dukascopy-node.app/instrument/2388hkhkd)|`2388hkhkd`|Apr 10, 2018|
|[China Life Insurance Company](https://www.dukascopy-node.app/instrument/2628hkhkd)|`2628hkhkd`|Jan 2, 2018|
|[China Evergrande Group](https://www.dukascopy-node.app/instrument/3333hkhkd)|`3333hkhkd`|Jan 2, 2018|
|[China Merchants Bank](https://www.dukascopy-node.app/instrument/3968hkhkd)|`3968hkhkd`|Jan 2, 2018|
|[Bank of China](https://www.dukascopy-node.app/instrument/3988hkhkd)|`3988hkhkd`|Jun 4, 2019|
<h3 id="ireland">Ireland 🇮🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Bank Of Ireland Plc](https://www.dukascopy-node.app/instrument/birgieeur)|`birgieeur`|Jun 1, 2020|
|[CRH Plc](https://www.dukascopy-node.app/instrument/crgieeur)|`crgieeur`|Oct 1, 2020|
|[Kingspan Group Plc](https://www.dukascopy-node.app/instrument/krxieeur)|`krxieeur`|Jun 1, 2020|
|[Kerry Group Plc](https://www.dukascopy-node.app/instrument/krzieeur)|`krzieeur`|Jun 1, 2020|
|[Ryanair Holdings Plc](https://www.dukascopy-node.app/instrument/ry4cieeur)|`ry4cieeur`|Oct 1, 2020|
<h3 id="italy">Italy 🇮🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[A2A Spa](https://www.dukascopy-node.app/instrument/a2aiteur)|`a2aiteur`|Jun 1, 2020|
|[Autogrill Spa](https://www.dukascopy-node.app/instrument/agliteur)|`agliteur`|Jun 1, 2020|
|[Amplifon Spa](https://www.dukascopy-node.app/instrument/ampiteur)|`ampiteur`|Jun 1, 2020|
|[Atlantia Spa](https://www.dukascopy-node.app/instrument/atliteur)|`atliteur`|Jun 1, 2020|
|[Azimut Holding Spa](https://www.dukascopy-node.app/instrument/azmiteur)|`azmiteur`|Jun 1, 2020|
|[Banco BPM Spa](https://www.dukascopy-node.app/instrument/bamiiteur)|`bamiiteur`|Aug 10, 2020|
|[Brunello Cucinelli Spa](https://www.dukascopy-node.app/instrument/bciteur)|`bciteur`|Nov 2, 2020|
|[Banca Monte dei Paschi di Siena Spa](https://www.dukascopy-node.app/instrument/bmpsiteur)|`bmpsiteur`|Dec 17, 2020|
|[Bper Banca Spa](https://www.dukascopy-node.app/instrument/bpeiteur)|`bpeiteur`|Dec 17, 2020|
|[Brembo Spa](https://www.dukascopy-node.app/instrument/breiteur)|`breiteur`|Dec 17, 2020|
|[Buzzi Unicem Spa](https://www.dukascopy-node.app/instrument/bzuiteur)|`bzuiteur`|Dec 17, 2020|
|[Cattolica Ass Coop A](https://www.dukascopy-node.app/instrument/cassiteur)|`cassiteur`|Dec 17, 2020|
|[Cerved Information Solutions SPA](https://www.dukascopy-node.app/instrument/cerviteur)|`cerviteur`|Dec 17, 2020|
|[Davide Campari-Milano Spa](https://www.dukascopy-node.app/instrument/cpriteur)|`cpriteur`|Dec 17, 2020|
|[Credito Valtellinese Spa](https://www.dukascopy-node.app/instrument/cvaliteur)|`cvaliteur`|Dec 17, 2020|
|[Danieli & Co Spa](https://www.dukascopy-node.app/instrument/daniteur)|`daniteur`|Dec 17, 2020|
|[Diasorin Spa](https://www.dukascopy-node.app/instrument/diaiteur)|`diaiteur`|Dec 17, 2020|
|[Enel SpA](https://www.dukascopy-node.app/instrument/eneliteur)|`eneliteur`|Dec 17, 2020|
|[ENI Spa](https://www.dukascopy-node.app/instrument/eniiteur)|`eniiteur`|Dec 17, 2020|
|[ERG Spa](https://www.dukascopy-node.app/instrument/ergiteur)|`ergiteur`|Dec 17, 2020|
|[FinecoBank Banca Fineco Spa](https://www.dukascopy-node.app/instrument/fbkiteur)|`fbkiteur`|Dec 17, 2020|
|[Fiat Chrysler Auto NV](https://www.dukascopy-node.app/instrument/fcaiteur)|`fcaiteur`|Dec 17, 2020|
|[Assicurazioni Generali Spa](https://www.dukascopy-node.app/instrument/giteur)|`giteur`|Dec 17, 2020|
|[Italgas Spa](https://www.dukascopy-node.app/instrument/igiteur)|`igiteur`|Dec 17, 2020|
|[Infrastrutture Wireless Italiane Spa](https://www.dukascopy-node.app/instrument/inwiteur)|`inwiteur`|Dec 17, 2020|
|[Intesa Sanpaolo Spa](https://www.dukascopy-node.app/instrument/ispiteur)|`ispiteur`|Dec 17, 2020|
|[Juventus Football Club Spa](https://www.dukascopy-node.app/instrument/juveiteur)|`juveiteur`|Dec 17, 2020|
|[Leonardo Spa](https://www.dukascopy-node.app/instrument/ldoiteur)|`ldoiteur`|Dec 17, 2020|
|[Mediobanca Spa](https://www.dukascopy-node.app/instrument/mbiteur)|`mbiteur`|Dec 17, 2020|
|[Moncler Spa](https://www.dukascopy-node.app/instrument/monciteur)|`monciteur`|Dec 17, 2020|
|[Mediaset Spa](https://www.dukascopy-node.app/instrument/msiteur)|`msiteur`|Dec 17, 2020|
|[Piaggio & C. Spa](https://www.dukascopy-node.app/instrument/piaiteur)|`piaiteur`|Dec 17, 2020|
|[Prysmian Spa](https://www.dukascopy-node.app/instrument/pryiteur)|`pryiteur`|Dec 17, 2020|
|[Ferrari NV](https://www.dukascopy-node.app/instrument/raceiteur)|`raceiteur`|Dec 17, 2020|
|[Recordati Industria Chimica e Farma Spa](https://www.dukascopy-node.app/instrument/reciteur)|`reciteur`|Dec 17, 2020|
|[Salvat Ferragamo Spa](https://www.dukascopy-node.app/instrument/sferiteur)|`sferiteur`|Dec 17, 2020|
|[SAIPEM Spa](https://www.dukascopy-node.app/instrument/spmiteur)|`spmiteur`|Dec 17, 2020|
|[Snam Spa](https://www.dukascopy-node.app/instrument/srgiteur)|`srgiteur`|Dec 17, 2020|
|[Saras Spa](https://www.dukascopy-node.app/instrument/srsiteur)|`srsiteur`|Dec 17, 2020|
|[STMicroelectronics NV](https://www.dukascopy-node.app/instrument/stmiteur)|`stmiteur`|Dec 17, 2020|
|[Tenaris SA](https://www.dukascopy-node.app/instrument/teniteur)|`teniteur`|Dec 17, 2020|
|[Tiscali Spa](https://www.dukascopy-node.app/instrument/tisiteur)|`tisiteur`|Dec 17, 2020|
|[Telecom Italia Spa](https://www.dukascopy-node.app/instrument/tititeur)|`tititeur`|Dec 17, 2020|
|[Tods Spa](https://www.dukascopy-node.app/instrument/toditeur)|`toditeur`|Dec 17, 2020|
|[Terna Spa](https://www.dukascopy-node.app/instrument/trniteur)|`trniteur`|Dec 17, 2020|
|[UniCredit Spa](https://www.dukascopy-node.app/instrument/ucgiteur)|`ucgiteur`|Dec 17, 2020|
|[Unipolsai Assicurazioni Spa](https://www.dukascopy-node.app/instrument/usiteur)|`usiteur`|Dec 17, 2020|
|[WeBuild Spa](https://www.dukascopy-node.app/instrument/wbditeur)|`wbditeur`|Dec 17, 2020|
<h3 id="japan">Japan 🇯🇵</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Asahi Group Holdings](https://www.dukascopy-node.app/instrument/2502jpjpy)|`2502jpjpy`|Sep 26, 2018|
|[Kirin Brewery Co](https://www.dukascopy-node.app/instrument/2503jpjpy)|`2503jpjpy`|Sep 26, 2018|
|[Japan Tobacco](https://www.dukascopy-node.app/instrument/2914jpjpy)|`2914jpjpy`|Sep 21, 2018|
|[Seven and I Holdings](https://www.dukascopy-node.app/instrument/3382jpjpy)|`3382jpjpy`|Sep 21, 2018|
|[Sumco Corp](https://www.dukascopy-node.app/instrument/3436jpjpy)|`3436jpjpy`|Sep 26, 2018|
|[Showa Denko](https://www.dukascopy-node.app/instrument/4004jpjpy)|`4004jpjpy`|Sep 21, 2018|
|[Sumitomo Chemical](https://www.dukascopy-node.app/instrument/4005jpjpy)|`4005jpjpy`|Sep 21, 2018|
|[Shin-Etsu Chemical](https://www.dukascopy-node.app/instrument/4063jpjpy)|`4063jpjpy`|Sep 21, 2018|
|[Kao Corp](https://www.dukascopy-node.app/instrument/4452jpjpy)|`4452jpjpy`|Sep 26, 2018|
|[Takeda](https://www.dukascopy-node.app/instrument/4502jpjpy)|`4502jpjpy`|Sep 21, 2018|
|[Astellas Pharma](https://www.dukascopy-node.app/instrument/4503jpjpy)|`4503jpjpy`|Sep 26, 2018|
|[Shionogi](https://www.dukascopy-node.app/instrument/4507jpjpy)|`4507jpjpy`|Sep 26, 2018|
|[Eisai](https://www.dukascopy-node.app/instrument/4523jpjpy)|`4523jpjpy`|Sep 21, 2018|
|[Terumo Corp](https://www.dukascopy-node.app/instrument/4543jpjpy)|`4543jpjpy`|Sep 26, 2018|
|[Yahoo Japan Corp](https://www.dukascopy-node.app/instrument/4689jpjpy)|`4689jpjpy`|Sep 21, 2018|
|[Shiseido](https://www.dukascopy-node.app/instrument/4911jpjpy)|`4911jpjpy`|Sep 21, 2018|
|[Bridgestone Corp](https://www.dukascopy-node.app/instrument/5108jpjpy)|`5108jpjpy`|Sep 26, 2018|
|[Tokai Carbon](https://www.dukascopy-node.app/instrument/5301jpjpy)|`5301jpjpy`|Sep 21, 2018|
|[Nippon Steel Corp](https://www.dukascopy-node.app/instrument/5401jpjpy)|`5401jpjpy`|Sep 21, 2018|
|[Recruit Holdings Co Ltd](https://www.dukascopy-node.app/instrument/6098jpjpy)|`6098jpjpy`|Sep 26, 2018|
|[Komatsu](https://www.dukascopy-node.app/instrument/6301jpjpy)|`6301jpjpy`|Sep 21, 2018|
|[Daikin Industries](https://www.dukascopy-node.app/instrument/6367jpjpy)|`6367jpjpy`|Sep 26, 2018|
|[Hitachi](https://www.dukascopy-node.app/instrument/6501jpjpy)|`6501jpjpy`|Sep 26, 2018|
|[Toshiba Corp](https://www.dukascopy-node.app/instrument/6502jpjpy)|`6502jpjpy`|Sep 26, 2018|
|[Mitsubishi Electric Corp](https://www.dukascopy-node.app/instrument/6503jpjpy)|`6503jpjpy`|Sep 26, 2018|
|[Yaskawa Electric Corp](https://www.dukascopy-node.app/instrument/6506jpjpy)|`6506jpjpy`|Sep 21, 2018|
|[Fujitsu](https://www.dukascopy-node.app/instrument/6702jpjpy)|`6702jpjpy`|Sep 26, 2018|
|[Panasonic Corp](https://www.dukascopy-node.app/instrument/6752jpjpy)|`6752jpjpy`|Sep 26, 2018|
|[Sony Corp Japan](https://www.dukascopy-node.app/instrument/6758jpjpy)|`6758jpjpy`|Sep 21, 2018|
|[TDK Corp](https://www.dukascopy-node.app/instrument/6762jpjpy)|`6762jpjpy`|Sep 21, 2018|
|[Denso Corp](https://www.dukascopy-node.app/instrument/6902jpjpy)|`6902jpjpy`|Sep 21, 2018|
|[Fanuc](https://www.dukascopy-node.app/instrument/6954jpjpy)|`6954jpjpy`|Sep 21, 2018|
|[Kyocera](https://www.dukascopy-node.app/instrument/6971jpjpy)|`6971jpjpy`|Sep 21, 2018|
|[Nissan Motor Co](https://www.dukascopy-node.app/instrument/7201jpjpy)|`7201jpjpy`|Sep 26, 2018|
|[Toyota Motor Corp](https://www.dukascopy-node.app/instrument/7203jpjpy)|`7203jpjpy`|Sep 21, 2018|
|[Mazda Motor](https://www.dukascopy-node.app/instrument/7261jpjpy)|`7261jpjpy`|Sep 26, 2018|
|[Honda Motor Company](https://www.dukascopy-node.app/instrument/7267jpjpy)|`7267jpjpy`|Sep 21, 2018|
|[Suzuki Motor Corp](https://www.dukascopy-node.app/instrument/7269jpjpy)|`7269jpjpy`|Sep 26, 2018|
|[Subaru Corporation](https://www.dukascopy-node.app/instrument/7270jpjpy)|`7270jpjpy`|Sep 26, 2018|
|[Canon](https://www.dukascopy-node.app/instrument/7751jpjpy)|`7751jpjpy`|Sep 21, 2018|
|[Nintendo Co Ltd](https://www.dukascopy-node.app/instrument/7974jpjpy)|`7974jpjpy`|Sep 21, 2018|
|[Mitsui and Company](https://www.dukascopy-node.app/instrument/8031jpjpy)|`8031jpjpy`|Sep 26, 2018|
|[Tokyo Electron](https://www.dukascopy-node.app/instrument/8035jpjpy)|`8035jpjpy`|Sep 21, 2018|
|[Mitsubishi UFJ Financial Group](https://www.dukascopy-node.app/instrument/8306jpjpy)|`8306jpjpy`|Sep 21, 2018|
|[Sumitomo Mitsui Financial Group](https://www.dukascopy-node.app/instrument/8316jpjpy)|`8316jpjpy`|Sep 21, 2018|
|[Mizuho Financial Group](https://www.dukascopy-node.app/instrument/8411jpjpy)|`8411jpjpy`|Sep 26, 2018|
|[Tokio Marine Holdings](https://www.dukascopy-node.app/instrument/8766jpjpy)|`8766jpjpy`|Sep 26, 2018|
|[Mitsui Fudosan Company](https://www.dukascopy-node.app/instrument/8801jpjpy)|`8801jpjpy`|Sep 26, 2018|
|[Mitsubishi Estate Company](https://www.dukascopy-node.app/instrument/8802jpjpy)|`8802jpjpy`|Sep 26, 2018|
|[East Japan Railway Company](https://www.dukascopy-node.app/instrument/9020jpjpy)|`9020jpjpy`|Sep 26, 2018|
|[Nippon Telegraph and Tel](https://www.dukascopy-node.app/instrument/9432jpjpy)|`9432jpjpy`|Sep 21, 2018|
|[KDDI Corp](https://www.dukascopy-node.app/instrument/9433jpjpy)|`9433jpjpy`|Sep 26, 2018|
|[Tokyo Electric Power Company](https://www.dukascopy-node.app/instrument/9501jpjpy)|`9501jpjpy`|Sep 21, 2018|
|[Fast Retailing](https://www.dukascopy-node.app/instrument/9983jpjpy)|`9983jpjpy`|Sep 21, 2018|
|[Softbank Group Corp](https://www.dukascopy-node.app/instrument/9984jpjpy)|`9984jpjpy`|Sep 21, 2018|
<h3 id="mexico">Mexico 🇲🇽</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Alfa SA B A](https://www.dukascopy-node.app/instrument/alfaamxmxn)|`alfaamxmxn`|Oct 13, 2022|
|[Alsea SAB de CV](https://www.dukascopy-node.app/instrument/alseamxmxn)|`alseamxmxn`|Oct 13, 2022|
|[America Movil SAB de C SERL](https://www.dukascopy-node.app/instrument/amxlmxmxn)|`amxlmxmxn`|Oct 13, 2022|
|[Arca Continental SAB de CV](https://www.dukascopy-node.app/instrument/arcamxmxn)|`arcamxmxn`|Oct 13, 2022|
|[Grupo Aeroportuario del Sureste](https://www.dukascopy-node.app/instrument/asurbmxmxn)|`asurbmxmxn`|Oct 13, 2022|
|[Banco Del Bajio SA](https://www.dukascopy-node.app/instrument/bbajioomxmxn)|`bbajioomxmxn`|Oct 13, 2022|
|[Bolsa Mexicana de Valores SAB de CV](https://www.dukascopy-node.app/instrument/bolsaamxmxn)|`bolsaamxmxn`|Oct 13, 2022|
|[Cemex Sab de CV](https://www.dukascopy-node.app/instrument/cemexcpomxmxn)|`cemexcpomxmxn`|Oct 13, 2022|
|[Grupo Elektra SAB DE CV](https://www.dukascopy-node.app/instrument/elektramxmxn)|`elektramxmxn`|Oct 13, 2022|
|[Fomento Economico Mexica UBD](https://www.dukascopy-node.app/instrument/femsaubdmxmxn)|`femsaubdmxmxn`|Oct 13, 2022|
|[Grupo Aeroportuario del Pacific Sab CV](https://www.dukascopy-node.app/instrument/gapbmxmxn)|`gapbmxmxn`|Oct 13, 2022|
|[Grupo Carso Sab De CV](https://www.dukascopy-node.app/instrument/gcarsoa1mxmxn)|`gcarsoa1mxmxn`|Oct 13, 2022|
|[Grupo Cementos de Chihuahua](https://www.dukascopy-node.app/instrument/gccmxmxn)|`gccmxmxn`|Oct 13, 2022|
|[Grupo Financiero Banorte O](https://www.dukascopy-node.app/instrument/gfnorteomxmxn)|`gfnorteomxmxn`|Oct 13, 2022|
|[Grupo Mexico SAB DE CV SER B](https://www.dukascopy-node.app/instrument/gmexicobmxmxn)|`gmexicobmxmxn`|Oct 13, 2022|
|[Gruma SA BB](https://www.dukascopy-node.app/instrument/grumabmxmxn)|`grumabmxmxn`|Oct 13, 2022|
|[Kimberly Clark DE Mexico A](https://www.dukascopy-node.app/instrument/kimberamxmxn)|`kimberamxmxn`|Oct 13, 2022|
|[Coca Cola Femsa Sab](https://www.dukascopy-node.app/instrument/kofublmxmxn)|`kofublmxmxn`|Oct 13, 2022|
|[Genomma Lab Internacional SAB de CV](https://www.dukascopy-node.app/instrument/labbmxmxn)|`labbmxmxn`|Oct 13, 2022|
|[El Puerto de Liverpool](https://www.dukascopy-node.app/instrument/livepolc1mxmxn)|`livepolc1mxmxn`|Oct 13, 2022|
|[Megacable Holdings SAB de CV](https://www.dukascopy-node.app/instrument/megacpomxmxn)|`megacpomxmxn`|Oct 13, 2022|
|[Grupo Aeroportuario del Centro Norte](https://www.dukascopy-node.app/instrument/omabmxmxn)|`omabmxmxn`|Oct 13, 2022|
|[Orbia Advance Corp SAB DE CV](https://www.dukascopy-node.app/instrument/orbiamxmxn)|`orbiamxmxn`|Oct 13, 2022|
|[Industrias Penoles SAB DE CV](https://www.dukascopy-node.app/instrument/peolesmxmxn)|`peolesmxmxn`|Oct 13, 2022|
|[Promotora Y Operadora DE INF](https://www.dukascopy-node.app/instrument/pinframxmxn)|`pinframxmxn`|Oct 13, 2022|
|[Qualitas Controladora SAB](https://www.dukascopy-node.app/instrument/qmxmxn)|`qmxmxn`|Oct 13, 2022|
|[Regional Sab De CV](https://www.dukascopy-node.app/instrument/ramxmxn)|`ramxmxn`|Oct 13, 2022|
|[Controladora Vuela Comp de Aviacion](https://www.dukascopy-node.app/instrument/volaramxmxn)|`volaramxmxn`|Oct 13, 2022|
|[Walmart De Mexico SAB](https://www.dukascopy-node.app/instrument/walmexmxmxn)|`walmexmxmxn`|Oct 13, 2022|
<h3 id="netherlands">Netherlands 🇳🇱</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Aegon NV](https://www.dukascopy-node.app/instrument/agnnleur)|`agnnleur`|Jan 3, 2011|
|[Koninklijke Ahold Delhaize NV](https://www.dukascopy-node.app/instrument/ahnleur)|`ahnleur`|Jan 3, 2011|
|[Akzo Nobel NV](https://www.dukascopy-node.app/instrument/akzanleur)|`akzanleur`|Jan 3, 2011|
|[ASML Holding NV](https://www.dukascopy-node.app/instrument/asmlnleur)|`asmlnleur`|Jan 3, 2011|
|[Koninklijke DSM NV](https://www.dukascopy-node.app/instrument/dsmnleur)|`dsmnleur`|Jan 3, 2011|
|[Heineken NV](https://www.dukascopy-node.app/instrument/heianleur)|`heianleur`|Jan 3, 2011|
|[ING Groep NV](https://www.dukascopy-node.app/instrument/inganleur)|`inganleur`|Jul 22, 2016|
|[Koninklijke KPN NV](https://www.dukascopy-node.app/instrument/kpnnleur)|`kpnnleur`|Jan 3, 2011|
|[ArcelorMittal](https://www.dukascopy-node.app/instrument/mtnleur)|`mtnleur`|Jan 3, 2011|
|[Koninklijke Philips NV](https://www.dukascopy-node.app/instrument/phianleur)|`phianleur`|Jan 3, 2011|
|[QIAGEN N.V.](https://www.dukascopy-node.app/instrument/qianleur)|`qianleur`|May 12, 2022|
|[Randstad Holding NV](https://www.dukascopy-node.app/instrument/randnleur)|`randnleur`|Jan 3, 2011|
|[Royal Dutch Shell PLC](https://www.dukascopy-node.app/instrument/rdsanleur)|`rdsanleur`|Jan 3, 2011|
|[RELX NV](https://www.dukascopy-node.app/instrument/rennleur)|`rennleur`|Jul 20, 2015|
|[Unilever NV](https://www.dukascopy-node.app/instrument/unanleur)|`unanleur`|Jan 3, 2011|
|[Koninklijke Vopak NV](https://www.dukascopy-node.app/instrument/vpknleur)|`vpknleur`|Jan 3, 2011|
|[Wolters Kluwer NV](https://www.dukascopy-node.app/instrument/wklnleur)|`wklnleur`|Jan 3, 2011|
<h3 id="norway">Norway 🇳🇴</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[DNB ASA](https://www.dukascopy-node.app/instrument/dnbnonok)|`dnbnonok`|Nov 15, 2011|
|[Marine Harvest ASA](https://www.dukascopy-node.app/instrument/mhgnonok)|`mhgnonok`|Jan 3, 2011|
|[Norsk Hydro ASA](https://www.dukascopy-node.app/instrument/nhynonok)|`nhynonok`|Jan 3, 2011|
|[Orkla ASA](https://www.dukascopy-node.app/instrument/orknonok)|`orknonok`|Jan 3, 2011|
|[Statoil ASA](https://www.dukascopy-node.app/instrument/stlnonok)|`stlnonok`|Jan 3, 2011|
|[Telenor ASA](https://www.dukascopy-node.app/instrument/telnonok)|`telnonok`|Jan 3, 2011|
<h3 id="portugal">Portugal 🇵🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[EDP - Energias de Portugal SA](https://www.dukascopy-node.app/instrument/edppteur)|`edppteur`|Jan 3, 2011|
|[Galp Energia SGPS SA](https://www.dukascopy-node.app/instrument/galppteur)|`galppteur`|Jan 3, 2011|
<h3 id="spain">Spain 🇪🇸</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ACS Actividades de Construccion y Servicios SA](https://www.dukascopy-node.app/instrument/acseseur)|`acseseur`|Jan 3, 2011|
|[Acerinox SA](https://www.dukascopy-node.app/instrument/acxeseur)|`acxeseur`|Jan 3, 2011|
|[Aena SA](https://www.dukascopy-node.app/instrument/aenaeseur)|`aenaeseur`|Feb 11, 2015|
|[Amadeus IT Holding SA](https://www.dukascopy-node.app/instrument/amseseur)|`amseseur`|Jan 3, 2011|
|[Applus Services](https://www.dukascopy-node.app/instrument/appeseur)|`appeseur`|May 11, 2022|
|[Banco Bilbao Vizcaya Argentaria SA](https://www.dukascopy-node.app/instrument/bbvaeseur)|`bbvaeseur`|Jan 3, 2011|
|[CaixaBank](https://www.dukascopy-node.app/instrument/cabkeseur)|`cabkeseur`|Jul 1, 2011|
|[Distribuidora Internacional de Alimentacion SA](https://www.dukascopy-node.app/instrument/diaeseur)|`diaeseur`|Jul 5, 2011|
|[Ebro Foods SA](https://www.dukascopy-node.app/instrument/ebreseur)|`ebreseur`|May 11, 2022|
|[Endesa SA](https://www.dukascopy-node.app/instrument/eleeseur)|`eleeseur`|Jan 3, 2011|
|[Enagas SA](https://www.dukascopy-node.app/instrument/engeseur)|`engeseur`|Jan 3, 2011|
|[Fomento de Construcciones y Contratas SA](https://www.dukascopy-node.app/instrument/fcceseur)|`fcceseur`|Jan 3, 2011|
|[Ferrovial SA](https://www.dukascopy-node.app/instrument/fereseur)|`fereseur`|Jan 3, 2011|
|[Gamesa Corporacion Tecnologica SA](https://www.dukascopy-node.app/instrument/gameseur)|`gameseur`|Jan 3, 2011|
|[Gas Natural SDG SA](https://www.dukascopy-node.app/instrument/gaseseur)|`gaseseur`|Jan 3, 2011|
|[GRIFOLS SA](https://www.dukascopy-node.app/instrument/grfeseur)|`grfeseur`|May 11, 2022|
|[Iberdrola SA](https://www.dukascopy-node.app/instrument/ibeeseur)|`ibeeseur`|Jan 3, 2011|
|[Inditex SA](https://www.dukascopy-node.app/instrument/itxeseur)|`itxeseur`|Jan 3, 2011|
|[Mapfre SA](https://www.dukascopy-node.app/instrument/mapeseur)|`mapeseur`|Jan 3, 2011|
|[Red Electrica Corp SA](https://www.dukascopy-node.app/instrument/reeeseur)|`reeeseur`|Jan 3, 2011|
|[Repsol SA](https://www.dukascopy-node.app/instrument/repeseur)|`repeseur`|Jan 3, 2011|
|[Banco Santander SA](https://www.dukascopy-node.app/instrument/saneseur)|`saneseur`|Jan 3, 2011|
|[Telefonica SA](https://www.dukascopy-node.app/instrument/tefeseur)|`tefeseur`|Jan 3, 2011|
|[Viscofan SA](https://www.dukascopy-node.app/instrument/viseseur)|`viseseur`|May 11, 2022|
<h3 id="sweden">Sweden 🇸🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ABB Ltd](https://www.dukascopy-node.app/instrument/abbsesek)|`abbsesek`|Jan 3, 2011|
|[Alfa Laval AB](https://www.dukascopy-node.app/instrument/alfasesek)|`alfasesek`|Jan 3, 2011|
|[Atlas Copco AB](https://www.dukascopy-node.app/instrument/atcoasesek)|`atcoasesek`|Jan 3, 2011|
|[Electrolux AB](https://www.dukascopy-node.app/instrument/eluxbsesek)|`eluxbsesek`|Jan 3, 2011|
|[Telefonaktiebolaget LM Ericsson](https://www.dukascopy-node.app/instrument/ericbsesek)|`ericbsesek`|Jan 3, 2011|
|[Getinge AB](https://www.dukascopy-node.app/instrument/getibsesek)|`getibsesek`|Jan 3, 2011|
|[Hennes & Mauritz AB](https://www.dukascopy-node.app/instrument/hmbsesek)|`hmbsesek`|Jan 3, 2011|
|[Investor AB](https://www.dukascopy-node.app/instrument/invebsesek)|`invebsesek`|Jan 3, 2011|
|[Nordea Bank AB](https://www.dukascopy-node.app/instrument/ndasesek)|`ndasesek`|Jan 3, 2011|
|[Sandvik AB](https://www.dukascopy-node.app/instrument/sandsesek)|`sandsesek`|Jan 3, 2011|
|[Svenska Cellulosa AB](https://www.dukascopy-node.app/instrument/scabsesek)|`scabsesek`|Jan 3, 2011|
|[Skandinaviska Enskilda Banken AB](https://www.dukascopy-node.app/instrument/sebasesek)|`sebasesek`|Jan 3, 2011|
|[Securitas AB](https://www.dukascopy-node.app/instrument/secubsesek)|`secubsesek`|Jan 3, 2011|
|[Skanska AB](https://www.dukascopy-node.app/instrument/skabsesek)|`skabsesek`|Jan 3, 2011|
|[SKF AB](https://www.dukascopy-node.app/instrument/skfbsesek)|`skfbsesek`|Jan 3, 2011|
|[Swedbank AB](https://www.dukascopy-node.app/instrument/swedasesek)|`swedasesek`|Jan 3, 2011|
|[Swedish Match AB](https://www.dukascopy-node.app/instrument/swmasesek)|`swmasesek`|Jan 3, 2011|
|[Tele2 AB](https://www.dukascopy-node.app/instrument/tel2bsesek)|`tel2bsesek`|Jan 3, 2011|
|[Telia Company AB](https://www.dukascopy-node.app/instrument/tlsnsesek)|`tlsnsesek`|Apr 18, 2016|
|[Volvo AB](https://www.dukascopy-node.app/instrument/volvbsesek)|`volvbsesek`|Jan 3, 2011|
<h3 id="switzerland">Switzerland 🇨🇭</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ABB Ltd](https://www.dukascopy-node.app/instrument/abbnchchf)|`abbnchchf`|Jan 3, 2011|
|[Adecco SA](https://www.dukascopy-node.app/instrument/adenchchf)|`adenchchf`|Jan 3, 2011|
|[Julius Baer Group Ltd](https://www.dukascopy-node.app/instrument/baerchchf)|`baerchchf`|Jan 3, 2011|
|[Richemont](https://www.dukascopy-node.app/instrument/cfrchchf)|`cfrchchf`|Jun 14, 2022|
|[Clariant AG](https://www.dukascopy-node.app/instrument/clnchchf)|`clnchchf`|Jan 3, 2011|
|[Credit Suisse Group AG](https://www.dukascopy-node.app/instrument/csgnchchf)|`csgnchchf`|Jan 3, 2011|
|[Givaudan SA](https://www.dukascopy-node.app/instrument/givnchchf)|`givnchchf`|Jan 3, 2011|
|[Kuehne + Nagel International AG](https://www.dukascopy-node.app/instrument/kninchchf)|`kninchchf`|Jan 3, 2011|
|[Lafarge Holcim Ltd](https://www.dukascopy-node.app/instrument/lhnchchf)|`lhnchchf`|Jun 17, 2015|
|[Chocoladefabriken Lindt & Sprungli](https://www.dukascopy-node.app/instrument/lispchchf)|`lispchchf`|Jun 14, 2022|
|[Logitech International SA](https://www.dukascopy-node.app/instrument/lognchchf)|`lognchchf`|Jan 3, 2011|
|[Lonza Group AG](https://www.dukascopy-node.app/instrument/lonnchchf)|`lonnchchf`|Jan 3, 2011|
|[Meyer Burger](https://www.dukascopy-node.app/instrument/mbtnchchf)|`mbtnchchf`|Jun 14, 2022|
|[Nestle SA](https://www.dukascopy-node.app/instrument/nesnchchf)|`nesnchchf`|Jan 3, 2011|
|[Novartis AG](https://www.dukascopy-node.app/instrument/novnchchf)|`novnchchf`|Jan 3, 2011|
|[OC Oerlikon Corporation](https://www.dukascopy-node.app/instrument/oerlchchf)|`oerlchchf`|Jan 3, 2011|
|[Roche Holding AG](https://www.dukascopy-node.app/instrument/rogchchf)|`rogchchf`|Jan 3, 2011|
|[Swisscom AG](https://www.dukascopy-node.app/instrument/scmnchchf)|`scmnchchf`|Jan 3, 2011|
|[SGS SA](https://www.dukascopy-node.app/instrument/sgsnchchf)|`sgsnchchf`|Jan 3, 2011|
|[Swiss Life Holding AG](https://www.dukascopy-node.app/instrument/slhnchchf)|`slhnchchf`|Jan 3, 2011|
|[Sonova Holding AG](https://www.dukascopy-node.app/instrument/soonchchf)|`soonchchf`|Jan 3, 2011|
|[Swiss Re AG](https://www.dukascopy-node.app/instrument/srenchchf)|`srenchchf`|May 23, 2011|
|[Temenos Group AG](https://www.dukascopy-node.app/instrument/temnchchf)|`temnchchf`|Jan 3, 2011|
|[UBS Group AG](https://www.dukascopy-node.app/instrument/ubsgchchf)|`ubsgchchf`|Nov 28, 2014|
|[Swatch Group AG/The](https://www.dukascopy-node.app/instrument/uhrchchf)|`uhrchchf`|Jan 3, 2011|
|[Swatch Group AG (The Registered)](https://www.dukascopy-node.app/instrument/uhrnchchf)|`uhrnchchf`|Jun 14, 2022|
|[Vifor Pharma](https://www.dukascopy-node.app/instrument/vifnchchf)|`vifnchchf`|Jun 14, 2022|
|[Zurich Insurance Group AG](https://www.dukascopy-node.app/instrument/zurnchchf)|`zurnchchf`|Jan 3, 2011|
<h3 id="uk">United Kingdom 🇬🇧</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Anglo American PLC](https://www.dukascopy-node.app/instrument/aalgbgbx)|`aalgbgbx`|Jan 4, 2011|
|[Associated British Foods PLC](https://www.dukascopy-node.app/instrument/abfgbgbx)|`abfgbgbx`|Jan 4, 2011|
|[Admiral Group PLC](https://www.dukascopy-node.app/instrument/admgbgbx)|`admgbgbx`|Jan 4, 2011|
|[Aggreko PLC](https://www.dukascopy-node.app/instrument/agkgbgbx)|`agkgbgbx`|Jan 4, 2011|
|[Ashtead Group PLC](https://www.dukascopy-node.app/instrument/ahtgbgbx)|`ahtgbgbx`|Jan 4, 2011|
|[Antofagasta PLC](https://www.dukascopy-node.app/instrument/antogbgbx)|`antogbgbx`|Jan 4, 2011|
|[Aviva PLC](https://www.dukascopy-node.app/instrument/avgbgbx)|`avgbgbx`|Jan 4, 2011|
|[AVEVA GROUP PLC](https://www.dukascopy-node.app/instrument/avvgbgbx)|`avvgbgbx`|May 11, 2022|
|[AstraZeneca PLC](https://www.dukascopy-node.app/instrument/azngbgbx)|`azngbgbx`|Jan 4, 2011|
|[BAE Systems PLC](https://www.dukascopy-node.app/instrument/bagbgbx)|`bagbgbx`|Jan 4, 2011|
|[Babcock International Group PLC](https://www.dukascopy-node.app/instrument/babgbgbx)|`babgbgbx`|Jan 4, 2011|
|[Barclays PLC](https://www.dukascopy-node.app/instrument/barcgbgbx)|`barcgbgbx`|Jan 4, 2011|
|[British American Tobacco PLC](https://www.dukascopy-node.app/instrument/batsgbgbx)|`batsgbgbx`|Jan 4, 2011|
|[BARRATT DEVELOPMENTS PLC](https://www.dukascopy-node.app/instrument/bdevgbgbx)|`bdevgbgbx`|May 11, 2022|
|[British Land Co PLC](https://www.dukascopy-node.app/instrument/blndgbgbx)|`blndgbgbx`|Jan 4, 2011|
|[BHP Billiton PLC](https://www.dukascopy-node.app/instrument/bltgbgbx)|`bltgbgbx`|Jan 4, 2011|
|[Bunzl PLC](https://www.dukascopy-node.app/instrument/bnzlgbgbx)|`bnzlgbgbx`|Jan 4, 2011|
|[BP PLC](https://www.dukascopy-node.app/instrument/bpgbgbx)|`bpgbgbx`|Jan 4, 2011|
|[Burberry Group PLC](https://www.dukascopy-node.app/instrument/brbygbgbx)|`brbygbgbx`|Jan 4, 2011|
|[BT Group PLC](https://www.dukascopy-node.app/instrument/btgbgbx)|`btgbgbx`|Jan 4, 2011|
|[Carnival PLC](https://www.dukascopy-node.app/instrument/cclgbgbx)|`cclgbgbx`|Jan 4, 2011|
|[Centrica PLC](https://www.dukascopy-node.app/instrument/cnagbgbx)|`cnagbgbx`|Jan 4, 2011|
|[Compass Group PLC](https://www.dukascopy-node.app/instrument/cpggbgbx)|`cpggbgbx`|Jan 4, 2011|
|[Capita PLC](https://www.dukascopy-node.app/instrument/cpigbgbx)|`cpigbgbx`|Jan 4, 2011|
|[Croda International PLC](https://www.dukascopy-node.app/instrument/crdagbgbx)|`crdagbgbx`|Jan 4, 2011|
|[CRH PLC](https://www.dukascopy-node.app/instrument/crhgbgbx)|`crhgbgbx`|Jan 4, 2011|
|[DCC PLC](https://www.dukascopy-node.app/instrument/dccgbgbx)|`dccgbgbx`|May 11, 2022|
|[Diageo PLC](https://www.dukascopy-node.app/instrument/dgegbgbx)|`dgegbgbx`|Jan 4, 2011|
|[DECHRA PHARMACEUTICALS PLC](https://www.dukascopy-node.app/instrument/dphgbgbx)|`dphgbgbx`|May 11, 2022|
|[ELECTROCOMPONENTS PLC](https://www.dukascopy-node.app/instrument/ecmgbgbx)|`ecmgbgbx`|May 11, 2022|
|[Experian PLC](https://www.dukascopy-node.app/instrument/expngbgbx)|`expngbgbx`|Jan 4, 2011|
|[easyJet PLC](https://www.dukascopy-node.app/instrument/ezjgbgbx)|`ezjgbgbx`|Jan 4, 2011|
|[Fresnillo PLC](https://www.dukascopy-node.app/instrument/fresgbgbx)|`fresgbgbx`|Jan 4, 2011|
|[G4S PLC](https://www.dukascopy-node.app/instrument/gfsgbgbx)|`gfsgbgbx`|Jan 4, 2011|
|[Glencore PLC](https://www.dukascopy-node.app/instrument/glengbgbx)|`glengbgbx`|May 19, 2011|
|[GlaxoSmithKline PLC](https://www.dukascopy-node.app/instrument/gskgbgbx)|`gskgbgbx`|Jan 4, 2011|
|[HIKMA PHARMACEUTICALS PLC](https://www.dukascopy-node.app/instrument/hikgbgbx)|`hikgbgbx`|May 12, 2022|
|[HALMA PLC](https://www.dukascopy-node.app/instrument/hlmagbgbx)|`hlmagbgbx`|May 12, 2022|
|[Hammerson PLC](https://www.dukascopy-node.app/instrument/hmsogbgbx)|`hmsogbgbx`|Jan 4, 2011|
|[HSBC Holdings PLC](https://www.dukascopy-node.app/instrument/hsbagbgbx)|`hsbagbgbx`|Jan 4, 2011|
|[International Consolidated Airlines Grou](https://www.dukascopy-node.app/instrument/iaggbgbx)|`iaggbgbx`|Jan 24, 2011|
|[INTERMEDIATE CAPITAL GROUP](https://www.dukascopy-node.app/instrument/icpgbgbx)|`icpgbgbx`|May 12, 2022|
|[InterContinental Hotels Group PLC](https://www.dukascopy-node.app/instrument/ihggbgbx)|`ihggbgbx`|Jan 4, 2011|
|[3i Group PLC](https://www.dukascopy-node.app/instrument/iiigbgbx)|`iiigbgbx`|Jan 4, 2011|
|[Imperial Brands Plc](https://www.dukascopy-node.app/instrument/imtgbgbx)|`imtgbgbx`|Feb 8, 2016|
|[Intertek Group PLC](https://www.dukascopy-node.app/instrument/itrkgbgbx)|`itrkgbgbx`|Jan 4, 2011|
|[ITV PLC](https://www.dukascopy-node.app/instrument/itvgbgbx)|`itvgbgbx`|Jan 4, 2011|
|[Kingfisher PLC](https://www.dukascopy-node.app/instrument/kgfgbgbx)|`kgfgbgbx`|Jan 4, 2011|
|[Land Securities Group PLC](https://www.dukascopy-node.app/instrument/landgbgbx)|`landgbgbx`|Jan 4, 2011|
|[Legal & General Group PLC](https://www.dukascopy-node.app/instrument/lgengbgbx)|`lgengbgbx`|Jan 4, 2011|
|[Lloyds Banking Group PLC](https://www.dukascopy-node.app/instrument/lloygbgbx)|`lloygbgbx`|Jan 4, 2011|
|[London Stock Exchange Group PLC](https://www.dukascopy-node.app/instrument/lsegbgbx)|`lsegbgbx`|Jan 4, 2011|
|[Meggitt PLC](https://www.dukascopy-node.app/instrument/mggtgbgbx)|`mggtgbgbx`|Jan 4, 2011|
|[Marks & Spencer Group PLC](https://www.dukascopy-node.app/instrument/mksgbgbx)|`mksgbgbx`|Jan 4, 2011|
|[Mondi PLC](https://www.dukascopy-node.app/instrument/mndigbgbx)|`mndigbgbx`|Jan 4, 2011|
|[M&G PLC](https://www.dukascopy-node.app/instrument/mnggbgbx)|`mnggbgbx`|May 12, 2022|
|[WM Morrison Supermarkets PLC](https://www.dukascopy-node.app/instrument/mrwgbgbx)|`mrwgbgbx`|Jan 4, 2011|
|[National Grid PLC](https://www.dukascopy-node.app/instrument/nggbgbx)|`nggbgbx`|Jan 4, 2011|
|[Next PLC](https://www.dukascopy-node.app/instrument/nxtgbgbx)|`nxtgbgbx`|Jan 4, 2011|
|[OCADO GROUP PLC](https://www.dukascopy-node.app/instrument/ocdogbgbx)|`ocdogbgbx`|May 12, 2022|
|[Petrofac Ltd](https://www.dukascopy-node.app/instrument/pfcgbgbx)|`pfcgbgbx`|Jan 4, 2011|
|[PHOENIX GROUP HOLDINGS PLC](https://www.dukascopy-node.app/instrument/phnxgbgbx)|`phnxgbgbx`|May 12, 2022|
|[Prudential PLC](https://www.dukascopy-node.app/instrument/prugbgbx)|`prugbgbx`|Jan 4, 2011|
|[Persimmon PLC](https://www.dukascopy-node.app/instrument/psngbgbx)|`psngbgbx`|Jan 4, 2011|
|[Pearson PLC](https://www.dukascopy-node.app/instrument/psongbgbx)|`psongbgbx`|Jan 4, 2011|
|[Reckitt Benckiser Group PLC](https://www.dukascopy-node.app/instrument/rbgbgbx)|`rbgbgbx`|Jan 4, 2011|
|[Royal Bank of Scotland Group PLC](https://www.dukascopy-node.app/instrument/rbsgbgbx)|`rbsgbgbx`|Jan 4, 2011|
|[Royal Dutch Shell PLC](https://www.dukascopy-node.app/instrument/rdsbgbgbx)|`rdsbgbgbx`|Jan 4, 2011|
|[Reed Elsevier PLC](https://www.dukascopy-node.app/instrument/relgbgbx)|`relgbgbx`|Jan 4, 2011|
|[Rio Tinto PLC](https://www.dukascopy-node.app/instrument/riogbgbx)|`riogbgbx`|Jan 4, 2011|
|[Royal Mail PLC](https://www.dukascopy-node.app/instrument/rmggbgbx)|`rmggbgbx`|Oct 11, 2013|
|[RIGHTMOVE PLC](https://www.dukascopy-node.app/instrument/rmvgbgbx)|`rmvgbgbx`|May 12, 2022|
|[Rolls-Royce Holdings PLC](https://www.dukascopy-node.app/instrument/rrgbgbx)|`rrgbgbx`|Jan 4, 2011|
|[RSA Insurance Group PLC](https://www.dukascopy-node.app/instrument/rsagbgbx)|`rsagbgbx`|Jan 4, 2011|
|[RENTOKIL INITIAL PLC](https://www.dukascopy-node.app/instrument/rtogbgbx)|`rtogbgbx`|May 12, 2022|
|[J Sainsbury PLC](https://www.dukascopy-node.app/instrument/sbrygbgbx)|`sbrygbgbx`|Jan 4, 2011|
|[Schroders PLC](https://www.dukascopy-node.app/instrument/sdrgbgbx)|`sdrgbgbx`|Jan 4, 2011|
|[Sage Group PLC/The](https://www.dukascopy-node.app/instrument/sgegbgbx)|`sgegbgbx`|Jan 4, 2011|
|[SEGRO PLC](https://www.dukascopy-node.app/instrument/sgrogbgbx)|`sgrogbgbx`|May 12, 2022|
|[Sky Plc](https://www.dukascopy-node.app/instrument/skygbgbx)|`skygbgbx`|Nov 14, 2014|
|[Standard Life Aberdeen Plc](https://www.dukascopy-node.app/instrument/slagbgbx)|`slagbgbx`|Sep 5, 2017|
|[DS SMITH PLC](https://www.dukascopy-node.app/instrument/smdsgbgbx)|`smdsgbgbx`|May 12, 2022|
|[Smiths Group PLC](https://www.dukascopy-node.app/instrument/smingbgbx)|`smingbgbx`|Jan 4, 2011|
|[SCOTTISH MORTGAGE INV TR PLC](https://www.dukascopy-node.app/instrument/smtgbgbx)|`smtgbgbx`|May 12, 2022|
|[Smith & Nephew PLC](https://www.dukascopy-node.app/instrument/sngbgbx)|`sngbgbx`|Jan 4, 2011|
|[SPIRAX-SARCO ENGINEERING PLC](https://www.dukascopy-node.app/instrument/spxgbgbx)|`spxgbgbx`|May 12, 2022|
|[SSE PLC](https://www.dukascopy-node.app/instrument/ssegbgbx)|`ssegbgbx`|Jan 4, 2011|
|[Standard Chartered PLC](https://www.dukascopy-node.app/instrument/stangbgbx)|`stangbgbx`|Jan 4, 2011|
|[ST JAMES'S PLACE PLC](https://www.dukascopy-node.app/instrument/stjgbgbx)|`stjgbgbx`|May 12, 2022|
|[Severn Trent PLC](https://www.dukascopy-node.app/instrument/svtgbgbx)|`svtgbgbx`|Jan 4, 2011|
|[Tate & Lyle PLC](https://www.dukascopy-node.app/instrument/tategbgbx)|`tategbgbx`|Jan 4, 2011|
|[Tullow Oil PLC](https://www.dukascopy-node.app/instrument/tlwgbgbx)|`tlwgbgbx`|Jan 4, 2011|
|[Travis Perkins PLC](https://www.dukascopy-node.app/instrument/tpkgbgbx)|`tpkgbgbx`|Jan 4, 2011|
|[Tesco PLC](https://www.dukascopy-node.app/instrument/tscogbgbx)|`tscogbgbx`|Jan 4, 2011|
|[TAYLOR WIMPEY PLC](https://www.dukascopy-node.app/instrument/twgbgbx)|`twgbgbx`|Jun 14, 2022|
|[Unilever PLC](https://www.dukascopy-node.app/instrument/ulvrgbgbx)|`ulvrgbgbx`|Jan 4, 2011|
|[United Utilities Group PLC](https://www.dukascopy-node.app/instrument/uugbgbx)|`uugbgbx`|Jan 4, 2011|
|[Vodafone Group PLC](https://www.dukascopy-node.app/instrument/vodgbgbx)|`vodgbgbx`|Jan 4, 2011|
|[Weir Group PLC/The](https://www.dukascopy-node.app/instrument/weirgbgbx)|`weirgbgbx`|Jan 4, 2011|
|[Wolseley PLC](https://www.dukascopy-node.app/instrument/wosgbgbx)|`wosgbgbx`|Jan 4, 2011|
|[WPP PLC](https://www.dukascopy-node.app/instrument/wppgbgbx)|`wppgbgbx`|Jan 4, 2011|
|[Whitbread PLC](https://www.dukascopy-node.app/instrument/wtbgbgbx)|`wtbgbgbx`|Jan 4, 2011|
<h3 id="us">United States 🇺🇸</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[AGILENT TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/aususd)|`aususd`|May 25, 2017|
|[ALCOA INC](https://www.dukascopy-node.app/instrument/aaususd)|`aaususd`|Jan 30, 2018|
|[AbbVie Inc](https://www.dukascopy-node.app/instrument/aabvususd)|`aabvususd`|Oct 1, 2020|
|[AMERICAN AIRLINES GROUP INC](https://www.dukascopy-node.app/instrument/aalususd)|`aalususd`|Nov 2, 2017|
|[ADVANCE AUTO PARTS INC](https://www.dukascopy-node.app/instrument/aapususd)|`aapususd`|May 12, 2022|
|[APPLE INC](https://www.dukascopy-node.app/instrument/aaplususd)|`aaplususd`|Jan 26, 2017|
|[AMERISOURCEBERGEN CORP](https://www.dukascopy-node.app/instrument/abcususd)|`abcususd`|Jan 30, 2018|
|[Ambev S.A.](https://www.dukascopy-node.app/instrument/abevususd)|`abevususd`|Jan 26, 2017|
|[ABIOMED INC](https://www.dukascopy-node.app/instrument/abmdususd)|`abmdususd`|May 12, 2022|
|[ABBOTT LABORATORIES](https://www.dukascopy-node.app/instrument/abtususd)|`abtususd`|May 11, 2017|
|[ARCH CAPITAL GROUP LTD](https://www.dukascopy-node.app/instrument/acglususd)|`acglususd`|May 12, 2022|
|[AECOM](https://www.dukascopy-node.app/instrument/acmususd)|`acmususd`|May 12, 2022|
|[ACCENTURE PLC-CL A](https://www.dukascopy-node.app/instrument/acnususd)|`acnususd`|May 12, 2022|
|[ADOBE SYSTEMS INC](https://www.dukascopy-node.app/instrument/adbeususd)|`adbeususd`|May 11, 2017|
|[ANALOG DEVICES INC](https://www.dukascopy-node.app/instrument/adiususd)|`adiususd`|Jan 30, 2018|
|[AUTOMATIC DATA PROCESSING](https://www.dukascopy-node.app/instrument/adpususd)|`adpususd`|Nov 2, 2017|
|[AUTODESK INC](https://www.dukascopy-node.app/instrument/adskususd)|`adskususd`|Jan 30, 2018|
|[AMERICAN ELECTRIC POWER](https://www.dukascopy-node.app/instrument/aepususd)|`aepususd`|Sep 26, 2016|
|[AMERICAN FINANCIAL GROUP INC](https://www.dukascopy-node.app/instrument/afgususd)|`afgususd`|Aug 22, 2022|
|[AGNC INVESTMENT CORP](https://www.dukascopy-node.app/instrument/agncususd)|`agncususd`|May 12, 2022|
|[AMERICAN INTERNATIONAL GROUP](https://www.dukascopy-node.app/instrument/aigususd)|`aigususd`|May 11, 2017|
|[ARTHUR J GALLAGHER & CO](https://www.dukascopy-node.app/instrument/ajgususd)|`ajgususd`|May 12, 2022|
|[ALBEMARLE CORP](https://www.dukascopy-node.app/instrument/albususd)|`albususd`|May 12, 2022|
|[ALIGN TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/algnususd)|`algnususd`|May 16, 2022|
|[ALASKA AIR GROUP INC](https://www.dukascopy-node.app/instrument/alkususd)|`alkususd`|May 12, 2022|
|[ALKERMES PLC](https://www.dukascopy-node.app/instrument/alksususd)|`alksususd`|May 12, 2022|
|[ALLSTATE CORP](https://www.dukascopy-node.app/instrument/allususd)|`allususd`|Jan 31, 2018|
|[ALLEGION PLC](https://www.dukascopy-node.app/instrument/alleususd)|`alleususd`|May 12, 2022|
|[ALLY FINANCIAL INC](https://www.dukascopy-node.app/instrument/allyususd)|`allyususd`|Jun 15, 2022|
|[ALNYLAM PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/alnyususd)|`alnyususd`|May 12, 2022|
|[ALEXION PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/alxnususd)|`alxnususd`|Jan 26, 2017|
|[APPLIED MATERIALS INC](https://www.dukascopy-node.app/instrument/amatususd)|`amatususd`|May 11, 2017|
|[AMCOR PLC](https://www.dukascopy-node.app/instrument/amcrususd)|`amcrususd`|May 12, 2022|
|[ADVANCED MICRO DEVICES](https://www.dukascopy-node.app/instrument/amdususd)|`amdususd`|Nov 2, 2017|
|[AMGEN INC](https://www.dukascopy-node.app/instrument/amgnususd)|`amgnususd`|Jan 26, 2017|
|[AMERICAN HOMES 4 RENT- A](https://www.dukascopy-node.app/instrument/amhususd)|`amhususd`|May 12, 2022|
|[AMERIPRISE FINANCIAL INC](https://www.dukascopy-node.app/instrument/ampususd)|`ampususd`|Jan 31, 2018|
|[AMERICAN TOWER CORP](https://www.dukascopy-node.app/instrument/amtususd)|`amtususd`|Nov 2, 2017|
|[American Well Corp Class A](https://www.dukascopy-node.app/instrument/amwlususd)|`amwlususd`|Oct 1, 2020|
|[AMAZON.COM INC](https://www.dukascopy-node.app/instrument/amznususd)|`amznususd`|Jan 26, 2017|
|[ARISTA NETWORKS INC](https://www.dukascopy-node.app/instrument/anetususd)|`anetususd`|May 12, 2022|
|[ANSYS INC](https://www.dukascopy-node.app/instrument/anssususd)|`anssususd`|May 12, 2022|
|[ANTHEM INC](https://www.dukascopy-node.app/instrument/antmususd)|`antmususd`|Nov 2, 2017|
|[AON PLC-CLASS A](https://www.dukascopy-node.app/instrument/aonususd)|`aonususd`|May 12, 2022|
|[SMITH (A.O.) CORP](https://www.dukascopy-node.app/instrument/aosususd)|`aosususd`|May 12, 2022|
|[APACHE CORP](https://www.dukascopy-node.app/instrument/apaususd)|`apaususd`|Jan 31, 2018|
|[AIR PRODUCTS & CHEMICALS INC](https://www.dukascopy-node.app/instrument/apdususd)|`apdususd`|Nov 2, 2017|
|[APTIV PLC](https://www.dukascopy-node.app/instrument/aptvususd)|`aptvususd`|May 12, 2022|
|[ANTERO RESOURCES CORP](https://www.dukascopy-node.app/instrument/arususd)|`arususd`|May 12, 2022|
|[ALEXANDRIA REAL ESTATE EQUIT](https://www.dukascopy-node.app/instrument/areususd)|`areususd`|May 12, 2022|
|[ARAMARK](https://www.dukascopy-node.app/instrument/armkususd)|`armkususd`|May 13, 2022|
|[ARROW ELECTRONICS INC](https://www.dukascopy-node.app/instrument/arwususd)|`arwususd`|May 17, 2022|
|[ATMOS ENERGY CORP](https://www.dukascopy-node.app/instrument/atoususd)|`atoususd`|May 12, 2022|
|[ACTIVISION BLIZZARD INC](https://www.dukascopy-node.app/instrument/atviususd)|`atviususd`|May 11, 2017|
|[AVALONBAY COMMUNITIES INC](https://www.dukascopy-node.app/instrument/avbususd)|`avbususd`|Jan 31, 2018|
|[Broadcom Limited](https://www.dukascopy-node.app/instrument/avgoususd)|`avgoususd`|Jan 26, 2017|
|[AVALARA INC](https://www.dukascopy-node.app/instrument/avlrususd)|`avlrususd`|May 12, 2022|
|[AVANTOR INC](https://www.dukascopy-node.app/instrument/avtrususd)|`avtrususd`|May 12, 2022|
|[AMERICAN WATER WORKS CO INC](https://www.dukascopy-node.app/instrument/awkususd)|`awkususd`|May 12, 2022|
|[AMERICAN EXPRESS CO](https://www.dukascopy-node.app/instrument/axpususd)|`axpususd`|Nov 2, 2017|
|[AXALTA COATING SYSTEMS LTD](https://www.dukascopy-node.app/instrument/axtaususd)|`axtaususd`|May 12, 2022|
|[ALTERYX INC - CLASS A](https://www.dukascopy-node.app/instrument/ayxususd)|`ayxususd`|May 12, 2022|
|[AstraZeneca PLC](https://www.dukascopy-node.app/instrument/aznususd)|`aznususd`|Jan 26, 2017|
|[AUTOZONE INC](https://www.dukascopy-node.app/instrument/azoususd)|`azoususd`|Nov 2, 2017|
|[ASPEN TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/azpnususd)|`azpnususd`|May 18, 2022|
|[Boeing Co](https://www.dukascopy-node.app/instrument/baususd)|`baususd`|Jan 26, 2017|
|[ALIBABA GROUP HOLDING-SP ADR](https://www.dukascopy-node.app/instrument/babaususd)|`babaususd`|Jan 26, 2017|
|[BANK OF AMERICA CORP](https://www.dukascopy-node.app/instrument/bacususd)|`bacususd`|Jan 26, 2017|
|[BOOZ ALLEN HAMILTON HOLDINGS](https://www.dukascopy-node.app/instrument/bahususd)|`bahususd`|May 12, 2022|
|[Banco Bradesco S.A.](https://www.dukascopy-node.app/instrument/bbdususd)|`bbdususd`|Jan 26, 2017|
|[BATH & BODY WORKS INC](https://www.dukascopy-node.app/instrument/bbwiususd)|`bbwiususd`|May 12, 2022|
|[BEST BUY CO INC](https://www.dukascopy-node.app/instrument/bbyususd)|`bbyususd`|May 11, 2017|
|[BECTON DICKINSON AND CO](https://www.dukascopy-node.app/instrument/bdxususd)|`bdxususd`|Jan 31, 2018|
|[BERRY GLOBAL GROUP INC](https://www.dukascopy-node.app/instrument/beryususd)|`beryususd`|May 12, 2022|
|[BUNGE LTD](https://www.dukascopy-node.app/instrument/bgususd)|`bgususd`|May 12, 2022|
|[BAIDU INC](https://www.dukascopy-node.app/instrument/biduususd)|`biduususd`|Nov 2, 2017|
|[BIOGEN INC](https://www.dukascopy-node.app/instrument/biibususd)|`biibususd`|May 11, 2017|
|[BIO-RAD LABORATORIES-A](https://www.dukascopy-node.app/instrument/bioususd)|`bioususd`|May 12, 2022|
|[BANK OF NEW YORK MELLON CORP](https://www.dukascopy-node.app/instrument/bkususd)|`bkususd`|May 11, 2017|
|[BLACK KNIGHT INC](https://www.dukascopy-node.app/instrument/bkiususd)|`bkiususd`|May 12, 2022|
|[BAKER HUGHES CO](https://www.dukascopy-node.app/instrument/bkrususd)|`bkrususd`|May 12, 2022|
|[BLACKROCK INC](https://www.dukascopy-node.app/instrument/blkususd)|`blkususd`|May 12, 2022|
|[BIOMARIN PHARMACEUTICAL INC](https://www.dukascopy-node.app/instrument/bmrnususd)|`bmrnususd`|May 12, 2022|
|[BRISTOL-MYERS SQUIBB CO](https://www.dukascopy-node.app/instrument/bmyususd)|`bmyususd`|May 11, 2017|
|[BP p.l.c.](https://www.dukascopy-node.app/instrument/bpususd)|`bpususd`|Jan 31, 2018|
|[POPULAR INC](https://www.dukascopy-node.app/instrument/bpopususd)|`bpopususd`|May 13, 2022|
|[BROADRIDGE FINANCIAL SOLUTIO](https://www.dukascopy-node.app/instrument/brususd)|`brususd`|May 12, 2022|
|[BERKSHIRE HATHAWAY INC-CL B](https://www.dukascopy-node.app/instrument/brkbususd)|`brkbususd`|Nov 6, 2017|
|[BRUKER CORP](https://www.dukascopy-node.app/instrument/brkrususd)|`brkrususd`|May 12, 2022|
|[BROWN & BROWN INC](https://www.dukascopy-node.app/instrument/broususd)|`broususd`|May 12, 2022|
|[BRIXMOR PROPERTY GROUP INC](https://www.dukascopy-node.app/instrument/brxususd)|`brxususd`|May 13, 2022|
|[BOSTON SCIENTIFIC CORP](https://www.dukascopy-node.app/instrument/bsxususd)|`bsxususd`|May 11, 2017|
|[BURLINGTON STORES INC](https://www.dukascopy-node.app/instrument/burlususd)|`burlususd`|Jun 15, 2022|
|[BORGWARNER INC](https://www.dukascopy-node.app/instrument/bwaususd)|`bwaususd`|May 12, 2022|
|[BEYOND MEAT INC](https://www.dukascopy-node.app/instrument/byndususd)|`byndususd`|May 12, 2022|
|[CITIGROUP INC](https://www.dukascopy-node.app/instrument/cususd)|`cususd`|Jan 26, 2017|
|[CREDIT ACCEPTANCE CORP](https://www.dukascopy-node.app/instrument/caccususd)|`caccususd`|May 12, 2022|
|[CACI INTERNATIONAL INC -CL A](https://www.dukascopy-node.app/instrument/caciususd)|`caciususd`|May 13, 2022|
|[CONAGRA FOODS INC](https://www.dukascopy-node.app/instrument/cagususd)|`cagususd`|Jan 31, 2018|
|[CARDINAL HEALTH INC](https://www.dukascopy-node.app/instrument/cahususd)|`cahususd`|Jan 31, 2018|
|[CARRIER GLOBAL CORP](https://www.dukascopy-node.app/instrument/carrususd)|`carrususd`|May 12, 2022|
|[CASEY'S GENERAL STORES INC](https://www.dukascopy-node.app/instrument/casyususd)|`casyususd`|May 12, 2022|
|[CATERPILLAR INC](https://www.dukascopy-node.app/instrument/catususd)|`catususd`|May 11, 2017|
|[CHUBB LTD](https://www.dukascopy-node.app/instrument/cbususd)|`cbususd`|May 12, 2022|
|[CBOE GLOBAL MARKETS INC](https://www.dukascopy-node.app/instrument/cboeususd)|`cboeususd`|May 12, 2022|
|[CROWN CASTLE INTL CORP](https://www.dukascopy-node.app/instrument/cciususd)|`cciususd`|May 12, 2022|
|[CROWN HOLDINGS INC](https://www.dukascopy-node.app/instrument/cckususd)|`cckususd`|May 13, 2022|
|[CARNIVAL CORP](https://www.dukascopy-node.app/instrument/cclususd)|`cclususd`|May 12, 2022|
|[CERIDIAN HCM HOLDING INC](https://www.dukascopy-node.app/instrument/cdayususd)|`cdayususd`|May 12, 2022|
|[CENTENNIAL RESOURCE DEVELO-A](https://www.dukascopy-node.app/instrument/cdevususd)|`cdevususd`|May 13, 2022|
|[CDK GLOBAL INC](https://www.dukascopy-node.app/instrument/cdkususd)|`cdkususd`|May 12, 2022|
|[CADENCE DESIGN SYS INC](https://www.dukascopy-node.app/instrument/cdnsususd)|`cdnsususd`|May 12, 2022|
|[CDW CORP/DE](https://www.dukascopy-node.app/instrument/cdwususd)|`cdwususd`|May 12, 2022|
|[CELANESE CORP](https://www.dukascopy-node.app/instrument/ceususd)|`ceususd`|May 12, 2022|
|[CERNER CORP](https://www.dukascopy-node.app/instrument/cernususd)|`cernususd`|May 18, 2018|
|[CF INDUSTRIES HOLDINGS INC](https://www.dukascopy-node.app/instrument/cfususd)|`cfususd`|Jan 31, 2018|
|[CITIZENS FINANCIAL GROUP](https://www.dukascopy-node.app/instrument/cfgususd)|`cfgususd`|May 12, 2022|
|[CULLEN/FROST BANKERS INC](https://www.dukascopy-node.app/instrument/cfrususd)|`cfrususd`|May 12, 2022|
|[COGNEX CORP](https://www.dukascopy-node.app/instrument/cgnxususd)|`cgnxususd`|May 12, 2022|
|[CHURCH & DWIGHT CO INC](https://www.dukascopy-node.app/instrument/chdususd)|`chdususd`|May 12, 2022|
|[CHANGE HEALTHCARE INC](https://www.dukascopy-node.app/instrument/chngususd)|`chngususd`|May 12, 2022|
|[CIGNA CORP](https://www.dukascopy-node.app/instrument/ciususd)|`ciususd`|May 11, 2017|
|[COLGATE-PALMOLIVE CO](https://www.dukascopy-node.app/instrument/clususd)|`clususd`|Nov 2, 2017|
|[CONTINENTAL RESOURCES INC/OK](https://www.dukascopy-node.app/instrument/clrususd)|`clrususd`|May 12, 2022|
|[COMCAST CORP-CLASS A](https://www.dukascopy-node.app/instrument/cmcsaususd)|`cmcsaususd`|Jan 26, 2017|
|[CME GROUP INC](https://www.dukascopy-node.app/instrument/cmeususd)|`cmeususd`|May 11, 2017|
|[CHIPOTLE MEXICAN GRILL INC](https://www.dukascopy-node.app/instrument/cmgususd)|`cmgususd`|May 11, 2017|
|[CUMMINS INC](https://www.dukascopy-node.app/instrument/cmiususd)|`cmiususd`|Feb 1, 2018|
|[CENTENE CORP](https://www.dukascopy-node.app/instrument/cncususd)|`cncususd`|May 12, 2022|
|[CAPITAL ONE FINANCIAL CORP](https://www.dukascopy-node.app/instrument/cofususd)|`cofususd`|May 18, 2018|
|[COHERENT INC](https://www.dukascopy-node.app/instrument/cohrususd)|`cohrususd`|May 13, 2022|
|[AMERICOLD REALTY TRUST](https://www.dukascopy-node.app/instrument/coldususd)|`coldususd`|May 12, 2022|
|[COOPER COS INC/THE](https://www.dukascopy-node.app/instrument/cooususd)|`cooususd`|May 12, 2022|
|[CONOCOPHILLIPS](https://www.dukascopy-node.app/instrument/copususd)|`copususd`|Nov 2, 2017|
|[COSTCO WHOLESALE CORP](https://www.dukascopy-node.app/instrument/costususd)|`costususd`|Nov 2, 2017|
|[COUPA SOFTWARE INC](https://www.dukascopy-node.app/instrument/coupususd)|`coupususd`|May 16, 2022|
|[CAPRI HOLDINGS LTD](https://www.dukascopy-node.app/instrument/cpriususd)|`cpriususd`|May 12, 2022|
|[COPART INC](https://www.dukascopy-node.app/instrument/cprtususd)|`cprtususd`|May 12, 2022|
|[CAMDEN PROPERTY TRUST](https://www.dukascopy-node.app/instrument/cptususd)|`cptususd`|May 12, 2022|
|[CHARLES RIVER LABORATORIES](https://www.dukascopy-node.app/instrument/crlususd)|`crlususd`|May 12, 2022|
|[SALESFORCE.COM INC](https://www.dukascopy-node.app/instrument/crmususd)|`crmususd`|May 11, 2017|
|[Credit Suisse Group AG](https://www.dukascopy-node.app/instrument/csususd)|`csususd`|Jan 26, 2017|
|[CISCO SYSTEMS INC](https://www.dukascopy-node.app/instrument/cscoususd)|`cscoususd`|Jan 26, 2017|
|[COSTAR GROUP INC](https://www.dukascopy-node.app/instrument/csgpususd)|`csgpususd`|May 12, 2022|
|[CARLISLE COS INC](https://www.dukascopy-node.app/instrument/cslususd)|`cslususd`|Jun 15, 2022|
|[CSX CORP](https://www.dukascopy-node.app/instrument/csxususd)|`csxususd`|Nov 2, 2017|
|[CENTURYLINK INC](https://www.dukascopy-node.app/instrument/ctlususd)|`ctlususd`|Nov 2, 2017|
|[CATALENT INC](https://www.dukascopy-node.app/instrument/ctltususd)|`ctltususd`|May 12, 2022|
|[COGNIZANT TECH SOLUTIONS-A](https://www.dukascopy-node.app/instrument/ctshususd)|`ctshususd`|Nov 2, 2017|
|[CORTEVA INC](https://www.dukascopy-node.app/instrument/ctvaususd)|`ctvaususd`|May 12, 2022|
|[CITRIX SYSTEMS INC](https://www.dukascopy-node.app/instrument/ctxsususd)|`ctxsususd`|May 18, 2018|
|[CUBESMART](https://www.dukascopy-node.app/instrument/cubeususd)|`cubeususd`|May 12, 2022|
|[CARVANA CO](https://www.dukascopy-node.app/instrument/cvnaususd)|`cvnaususd`|May 12, 2022|
|[CVS HEALTH CORP](https://www.dukascopy-node.app/instrument/cvsususd)|`cvsususd`|Nov 2, 2017|
|[CHEVRON CORP](https://www.dukascopy-node.app/instrument/cvxususd)|`cvxususd`|Jan 26, 2017|
|[CAESARS ENTERTAINMENT INC](https://www.dukascopy-node.app/instrument/czrususd)|`czrususd`|May 16, 2022|
|[DOMINION RESOURCES INC/VA](https://www.dukascopy-node.app/instrument/dususd)|`dususd`|Feb 1, 2018|
|[DELTA AIR LINES INC](https://www.dukascopy-node.app/instrument/dalususd)|`dalususd`|Nov 2, 2017|
|[DROPBOX INC-CLASS A](https://www.dukascopy-node.app/instrument/dbxususd)|`dbxususd`|May 12, 2022|
|[DEERE & CO](https://www.dukascopy-node.app/instrument/deususd)|`deususd`|May 11, 2017|
|[DELL TECHNOLOGIES -C](https://www.dukascopy-node.app/instrument/dellususd)|`dellususd`|May 12, 2022|
|[DISCOVER FINANCIAL SERVICES](https://www.dukascopy-node.app/instrument/dfsususd)|`dfsususd`|Feb 1, 2018|
|[DOLLAR GENERAL CORP](https://www.dukascopy-node.app/instrument/dgususd)|`dgususd`|May 11, 2017|
|[DR HORTON INC](https://www.dukascopy-node.app/instrument/dhiususd)|`dhiususd`|Feb 1, 2018|
|[DANAHER CORP](https://www.dukascopy-node.app/instrument/dhrususd)|`dhrususd`|Nov 2, 2017|
|[WALT DISNEY CO/THE](https://www.dukascopy-node.app/instrument/disususd)|`disususd`|Jan 26, 2017|
|[DICK'S SPORTING GOODS INC](https://www.dukascopy-node.app/instrument/dksususd)|`dksususd`|May 12, 2022|
|[DIGITAL REALTY TRUST INC](https://www.dukascopy-node.app/instrument/dlrususd)|`dlrususd`|May 12, 2022|
|[DOLLAR TREE INC](https://www.dukascopy-node.app/instrument/dltrususd)|`dltrususd`|Nov 2, 2017|
|[DOCUSIGN INC](https://www.dukascopy-node.app/instrument/docuususd)|`docuususd`|May 12, 2022|
|[AMDOCS LTD](https://www.dukascopy-node.app/instrument/doxususd)|`doxususd`|May 16, 2022|
|[DOMINO'S PIZZA INC](https://www.dukascopy-node.app/instrument/dpzususd)|`dpzususd`|May 12, 2022|
|[DUKE REALTY CORP](https://www.dukascopy-node.app/instrument/dreususd)|`dreususd`|May 12, 2022|
|[DYNATRACE INC](https://www.dukascopy-node.app/instrument/dtususd)|`dtususd`|May 12, 2022|
|[DUKE ENERGY CORP](https://www.dukascopy-node.app/instrument/dukususd)|`dukususd`|May 11, 2017|
|[DAVITA HEALTHCARE PARTNERS I](https://www.dukascopy-node.app/instrument/dvaususd)|`dvaususd`|Feb 1, 2018|
|[DEVON ENERGY CORP](https://www.dukascopy-node.app/instrument/dvnususd)|`dvnususd`|Feb 1, 2018|
|[DXC TECHNOLOGY CO](https://www.dukascopy-node.app/instrument/dxcususd)|`dxcususd`|May 12, 2022|
|[DEXCOM INC](https://www.dukascopy-node.app/instrument/dxcmususd)|`dxcmususd`|May 12, 2022|
|[ELECTRONIC ARTS INC](https://www.dukascopy-node.app/instrument/eaususd)|`eaususd`|May 11, 2017|
|[EBAY INC](https://www.dukascopy-node.app/instrument/ebayususd)|`ebayususd`|Nov 2, 2017|
|[EURONET WORLDWIDE INC](https://www.dukascopy-node.app/instrument/eeftususd)|`eeftususd`|May 12, 2022|
|[EQUIFAX INC](https://www.dukascopy-node.app/instrument/efxususd)|`efxususd`|Nov 2, 2017|
|[ENCOMPASS HEALTH CORP](https://www.dukascopy-node.app/instrument/ehcususd)|`ehcususd`|May 12, 2022|
|[EDISON INTERNATIONAL](https://www.dukascopy-node.app/instrument/eixususd)|`eixususd`|Feb 1, 2018|
|[ESTEE LAUDER COMPANIES-CL A](https://www.dukascopy-node.app/instrument/elususd)|`elususd`|Feb 1, 2018|
|[ELANCO ANIMAL HEALTH INC](https://www.dukascopy-node.app/instrument/elanususd)|`elanususd`|May 12, 2022|
|[EQUITY LIFESTYLE PROPERTIES](https://www.dukascopy-node.app/instrument/elsususd)|`elsususd`|May 12, 2022|
|[EMERSON ELECTRIC CO](https://www.dukascopy-node.app/instrument/emrususd)|`emrususd`|Feb 1, 2018|
|[ENPHASE ENERGY INC](https://www.dukascopy-node.app/instrument/enphususd)|`enphususd`|May 12, 2022|
|[ENTEGRIS INC](https://www.dukascopy-node.app/instrument/entgususd)|`entgususd`|May 12, 2022|
|[EOG RESOURCES INC](https://www.dukascopy-node.app/instrument/eogususd)|`eogususd`|Nov 2, 2017|
|[EPAM SYSTEMS INC](https://www.dukascopy-node.app/instrument/epamususd)|`epamususd`|May 16, 2022|
|[EQUITABLE HOLDINGS INC](https://www.dukascopy-node.app/instrument/eqhususd)|`eqhususd`|May 12, 2022|
|[EQT CORP](https://www.dukascopy-node.app/instrument/eqtususd)|`eqtususd`|Nov 2, 2017|
|[EVERSOURCE ENERGY](https://www.dukascopy-node.app/instrument/esususd)|`esususd`|May 12, 2022|
|[ESSEX PROPERTY TRUST INC](https://www.dukascopy-node.app/instrument/essususd)|`essususd`|May 12, 2022|
|[ELASTIC NV](https://www.dukascopy-node.app/instrument/estcususd)|`estcususd`|May 12, 2022|
|[EATON CORP PLC](https://www.dukascopy-node.app/instrument/etnususd)|`etnususd`|May 12, 2022|
|[ETSY INC](https://www.dukascopy-node.app/instrument/etsyususd)|`etsyususd`|May 12, 2022|
|[EVERGY INC](https://www.dukascopy-node.app/instrument/evrgususd)|`evrgususd`|May 12, 2022|
|[EDWARDS LIFESCIENCES CORP](https://www.dukascopy-node.app/instrument/ewususd)|`ewususd`|May 12, 2022|
|[EAST WEST BANCORP INC](https://www.dukascopy-node.app/instrument/ewbcususd)|`ewbcususd`|May 12, 2022|
|[EXELON CORP](https://www.dukascopy-node.app/instrument/excususd)|`excususd`|Feb 1, 2018|
|[EXELIXIS INC](https://www.dukascopy-node.app/instrument/exelususd)|`exelususd`|May 12, 2022|
|[EXPEDIA INC](https://www.dukascopy-node.app/instrument/expeususd)|`expeususd`|Nov 2, 2017|
|[EXTRA SPACE STORAGE INC](https://www.dukascopy-node.app/instrument/exrususd)|`exrususd`|May 12, 2022|
|[FORD MOTOR CO](https://www.dukascopy-node.app/instrument/fususd)|`fususd`|Nov 2, 2017|
|[DIAMONDBACK ENERGY INC](https://www.dukascopy-node.app/instrument/fangususd)|`fangususd`|May 12, 2022|
|[FACEBOOK INC-A / META](https://www.dukascopy-node.app/instrument/fbususd)|`fbususd`|Jan 26, 2017|
|[FORTUNE BRANDS HOME & SECURI](https://www.dukascopy-node.app/instrument/fbhsususd)|`fbhsususd`|May 12, 2022|
|[FIRST CITIZENS BCSHS -CL A](https://www.dukascopy-node.app/instrument/fcncaususd)|`fcncaususd`|May 12, 2022|
|[FREEPORT-MCMORAN INC](https://www.dukascopy-node.app/instrument/fcxususd)|`fcxususd`|Nov 2, 2017|
|[FACTSET RESEARCH SYSTEMS INC](https://www.dukascopy-node.app/instrument/fdsususd)|`fdsususd`|Jun 3, 2022|
|[FEDEX CORP](https://www.dukascopy-node.app/instrument/fdxususd)|`fdxususd`|Nov 2, 2017|
|[FIRSTENERGY CORP](https://www.dukascopy-node.app/instrument/feususd)|`feususd`|Feb 1, 2018|
|[FAIR ISAAC CORP](https://www.dukascopy-node.app/instrument/ficoususd)|`ficoususd`|May 18, 2022|
|[FIFTH THIRD BANCORP](https://www.dukascopy-node.app/instrument/fitbususd)|`fitbususd`|Jan 31, 2018|
|[FIVE BELOW](https://www.dukascopy-node.app/instrument/fiveususd)|`fiveususd`|May 12, 2022|
|[FOOT LOCKER INC](https://www.dukascopy-node.app/instrument/flususd)|`flususd`|May 12, 2022|
|[FLEETCOR TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/fltususd)|`fltususd`|May 12, 2022|
|[FLOOR & DECOR HOLDINGS INC-A](https://www.dukascopy-node.app/instrument/fndususd)|`fndususd`|May 12, 2022|
|[FIDELITY NATIONAL FINANCIAL](https://www.dukascopy-node.app/instrument/fnfususd)|`fnfususd`|May 12, 2022|
|[TWENTY-FIRST CENTURY FOX-A](https://www.dukascopy-node.app/instrument/foxaususd)|`foxaususd`|Jan 31, 2018|
|[FIRST REPUBLIC BANK/CA](https://www.dukascopy-node.app/instrument/frcususd)|`frcususd`|May 12, 2022|
|[FMC TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/ftiususd)|`ftiususd`|May 12, 2022|
|[FORTINET INC](https://www.dukascopy-node.app/instrument/ftntususd)|`ftntususd`|May 12, 2022|
|[FORTIVE CORP](https://www.dukascopy-node.app/instrument/ftvususd)|`ftvususd`|May 12, 2022|
|[GENPACT LTD](https://www.dukascopy-node.app/instrument/gususd)|`gususd`|May 12, 2022|
|[GENERAL DYNAMICS CORP](https://www.dukascopy-node.app/instrument/gdususd)|`gdususd`|May 12, 2022|
|[GODADDY INC - CLASS A](https://www.dukascopy-node.app/instrument/gddyususd)|`gddyususd`|May 12, 2022|
|[GENERAL ELECTRIC CO](https://www.dukascopy-node.app/instrument/geususd)|`geususd`|Jan 26, 2017|
|[GRACO INC](https://www.dukascopy-node.app/instrument/gggususd)|`gggususd`|May 12, 2022|
|[GUARDANT HEALTH INC](https://www.dukascopy-node.app/instrument/ghususd)|`ghususd`|May 12, 2022|
|[GILEAD SCIENCES INC](https://www.dukascopy-node.app/instrument/gildususd)|`gildususd`|Jan 26, 2017|
|[GENERAL MILLS INC](https://www.dukascopy-node.app/instrument/gisususd)|`gisususd`|Feb 1, 2018|
|[GLOBE LIFE INC](https://www.dukascopy-node.app/instrument/glususd)|`glususd`|May 12, 2022|
|[GAMING AND LEISURE PROPERTIE](https://www.dukascopy-node.app/instrument/glpiususd)|`glpiususd`|May 12, 2022|
|[CORNING INC](https://www.dukascopy-node.app/instrument/glwususd)|`glwususd`|May 11, 2017|
|[GENERAL MOTORS CO](https://www.dukascopy-node.app/instrument/gmususd)|`gmususd`|Nov 2, 2017|
|[GENERAC HOLDINGS INC](https://www.dukascopy-node.app/instrument/gnrcususd)|`gnrcususd`|May 12, 2022|
|[ALPHABET INC-CL C](https://www.dukascopy-node.app/instrument/googususd)|`googususd`|Jan 26, 2017|
|[ALPHABET INC-CL A](https://www.dukascopy-node.app/instrument/googlususd)|`googlususd`|Jan 26, 2017|
|[GLOBAL PAYMENTS INC](https://www.dukascopy-node.app/instrument/gpnususd)|`gpnususd`|May 12, 2022|
|[GAP INC/THE](https://www.dukascopy-node.app/instrument/gpsususd)|`gpsususd`|Feb 1, 2018|
|[GOLDMAN SACHS GROUP INC](https://www.dukascopy-node.app/instrument/gsususd)|`gsususd`|Jan 26, 2017|
|[WW GRAINGER INC](https://www.dukascopy-node.app/instrument/gwwususd)|`gwwususd`|Feb 1, 2018|
|[HYATT HOTELS CORP - CL A](https://www.dukascopy-node.app/instrument/hususd)|`hususd`|May 12, 2022|
|[HALLIBURTON CO](https://www.dukascopy-node.app/instrument/halususd)|`halususd`|Nov 2, 2017|
|[HANESBRANDS INC](https://www.dukascopy-node.app/instrument/hbiususd)|`hbiususd`|May 12, 2022|
|[HCA HEALTHCARE INC](https://www.dukascopy-node.app/instrument/hcaususd)|`hcaususd`|May 12, 2022|
|[WELLTOWER INC](https://www.dukascopy-node.app/instrument/hcnususd)|`hcnususd`|Feb 1, 2018|
|[HOME DEPOT INC](https://www.dukascopy-node.app/instrument/hdususd)|`hdususd`|Jan 26, 2017|
|[HEICO CORP](https://www.dukascopy-node.app/instrument/heiususd)|`heiususd`|May 16, 2022|
|[HESS CORP](https://www.dukascopy-node.app/instrument/hesususd)|`hesususd`|Nov 2, 2017|
|[HUNTINGTON INGALLS INDUSTRIE](https://www.dukascopy-node.app/instrument/hiiususd)|`hiiususd`|May 12, 2022|
|[HILTON WORLDWIDE HOLDINGS IN](https://www.dukascopy-node.app/instrument/hltususd)|`hltususd`|May 12, 2022|
|[HARLEY-DAVIDSON INC](https://www.dukascopy-node.app/instrument/hogususd)|`hogususd`|May 12, 2022|
|[HONEYWELL INTERNATIONAL INC](https://www.dukascopy-node.app/instrument/honususd)|`honususd`|Nov 2, 2017|
|[HEWLETT PACKARD ENTERPRISE](https://www.dukascopy-node.app/instrument/hpeususd)|`hpeususd`|May 12, 2022|
|[HP INC](https://www.dukascopy-node.app/instrument/hpqususd)|`hpqususd`|Feb 1, 2018|
|[HEALTHCARE TRUST OF AME-CL A](https://www.dukascopy-node.app/instrument/htaususd)|`htaususd`|May 12, 2022|
|[HUBBELL INC](https://www.dukascopy-node.app/instrument/hubbususd)|`hubbususd`|May 13, 2022|
|[HUBSPOT INC](https://www.dukascopy-node.app/instrument/hubsususd)|`hubsususd`|May 12, 2022|
|[HUMANA INC](https://www.dukascopy-node.app/instrument/humususd)|`humususd`|Nov 2, 2017|
|[HOWMET AEROSPACE INC](https://www.dukascopy-node.app/instrument/hwmususd)|`hwmususd`|May 12, 2022|
|[HORIZON THERAPEUTICS PLC](https://www.dukascopy-node.app/instrument/hznpususd)|`hznpususd`|May 12, 2022|
|[INTERACTIVE BROKERS GRO-CL A](https://www.dukascopy-node.app/instrument/ibkrususd)|`ibkrususd`|May 12, 2022|
|[INTL BUSINESS MACHINES CORP](https://www.dukascopy-node.app/instrument/ibmususd)|`ibmususd`|Jan 26, 2017|
|[INTERCONTINENTAL EXCHANGE IN](https://www.dukascopy-node.app/instrument/iceususd)|`iceususd`|Nov 6, 2017|
|[IDEXX LABORATORIES INC](https://www.dukascopy-node.app/instrument/idxxususd)|`idxxususd`|May 12, 2022|
|[IDEX CORP](https://www.dukascopy-node.app/instrument/iexususd)|`iexususd`|May 12, 2022|
|[ILLUMINA INC](https://www.dukascopy-node.app/instrument/ilmnususd)|`ilmnususd`|Feb 1, 2018|
|[INCYTE CORP](https://www.dukascopy-node.app/instrument/incyususd)|`incyususd`|May 12, 2022|
|[INTEL CORP](https://www.dukascopy-node.app/instrument/intcususd)|`intcususd`|Jan 26, 2017|
|[INTUIT INC](https://www.dukascopy-node.app/instrument/intuususd)|`intuususd`|Feb 1, 2018|
|[INVITATION HOMES INC](https://www.dukascopy-node.app/instrument/invhususd)|`invhususd`|May 12, 2022|
|[IONIS PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/ionsususd)|`ionsususd`|May 12, 2022|
|[INTERPUBLIC GROUP OF COS INC](https://www.dukascopy-node.app/instrument/ipgususd)|`ipgususd`|Feb 1, 2018|
|[IPG PHOTONICS CORP](https://www.dukascopy-node.app/instrument/ipgpususd)|`ipgpususd`|May 12, 2022|
|[IQVIA HOLDINGS INC](https://www.dukascopy-node.app/instrument/iqvususd)|`iqvususd`|May 12, 2022|
|[INGERSOLL-RAND INC](https://www.dukascopy-node.app/instrument/irususd)|`irususd`|May 12, 2022|
|[INTUITIVE SURGICAL INC](https://www.dukascopy-node.app/instrument/isrgususd)|`isrgususd`|Feb 1, 2018|
|[GARTNER INC](https://www.dukascopy-node.app/instrument/itususd)|`itususd`|May 12, 2022|
|[Itau Unibanco Holding S.A.](https://www.dukascopy-node.app/instrument/itubususd)|`itubususd`|Jan 26, 2017|
|[ILLINOIS TOOL WORKS](https://www.dukascopy-node.app/instrument/itwususd)|`itwususd`|May 11, 2017|
|[INVESCO LTD](https://www.dukascopy-node.app/instrument/ivzususd)|`ivzususd`|May 12, 2022|
|[JAZZ PHARMACEUTICALS PLC](https://www.dukascopy-node.app/instrument/jazzususd)|`jazzususd`|May 12, 2022|
|[JETBLUE AIRWAYS CORP](https://www.dukascopy-node.app/instrument/jbluususd)|`jbluususd`|May 12, 2022|
|[JOHNSON CONTROLS INC](https://www.dukascopy-node.app/instrument/jciususd)|`jciususd`|Nov 2, 2017|
|[JEFFERIES FINANCIAL GROUP IN](https://www.dukascopy-node.app/instrument/jefususd)|`jefususd`|May 12, 2022|
|[JACK HENRY & ASSOCIATES INC](https://www.dukascopy-node.app/instrument/jkhyususd)|`jkhyususd`|May 12, 2022|
|[JONES LANG LASALLE INC](https://www.dukascopy-node.app/instrument/jllususd)|`jllususd`|May 12, 2022|
|[JOHNSON & JOHNSON](https://www.dukascopy-node.app/instrument/jnjususd)|`jnjususd`|Jan 26, 2017|
|[JPMORGAN CHASE & CO](https://www.dukascopy-node.app/instrument/jpmususd)|`jpmususd`|Jan 26, 2017|
|[NORDSTROM INC](https://www.dukascopy-node.app/instrument/jwnususd)|`jwnususd`|May 11, 2017|
|[KELLOGG CO](https://www.dukascopy-node.app/instrument/kususd)|`kususd`|May 11, 2017|
|[KEYCORP](https://www.dukascopy-node.app/instrument/keyususd)|`keyususd`|Nov 2, 2017|
|[KEYSIGHT TECHNOLOGIES IN](https://www.dukascopy-node.app/instrument/keysususd)|`keysususd`|May 12, 2022|
|[KRAFT HEINZ CO/THE](https://www.dukascopy-node.app/instrument/khcususd)|`khcususd`|May 11, 2017|
|[KIMBERLY-CLARK CORP](https://www.dukascopy-node.app/instrument/kmbususd)|`kmbususd`|May 11, 2017|
|[KINDER MORGAN INC](https://www.dukascopy-node.app/instrument/kmiususd)|`kmiususd`|Nov 2, 2017|
|[CARMAX INC](https://www.dukascopy-node.app/instrument/kmxususd)|`kmxususd`|May 12, 2022|
|[KNIGHT-SWIFT TRANSPORTATION](https://www.dukascopy-node.app/instrument/knxususd)|`knxususd`|May 12, 2022|
|[COCA-COLA CO/THE](https://www.dukascopy-node.app/instrument/koususd)|`koususd`|Jan 26, 2017|
|[KROGER CO](https://www.dukascopy-node.app/instrument/krususd)|`krususd`|Nov 2, 2017|
|[KILROY REALTY CORP](https://www.dukascopy-node.app/instrument/krcususd)|`krcususd`|May 13, 2022|
|[KOHLS CORP](https://www.dukascopy-node.app/instrument/kssususd)|`kssususd`|Feb 1, 2018|
|[LOEWS CORP](https://www.dukascopy-node.app/instrument/lususd)|`lususd`|May 11, 2017|
|[LAMAR ADVERTISING CO-A](https://www.dukascopy-node.app/instrument/lamrususd)|`lamrususd`|May 13, 2022|
|[LEIDOS HOLDINGS INC](https://www.dukascopy-node.app/instrument/ldosususd)|`ldosususd`|May 12, 2022|
|[LEAR CORP](https://www.dukascopy-node.app/instrument/leaususd)|`leaususd`|Jun 15, 2022|
|[LENNAR CORP-A](https://www.dukascopy-node.app/instrument/lenususd)|`lenususd`|May 11, 2017|
|[L3HARRIS TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/lhxususd)|`lhxususd`|May 12, 2022|
|[LKQ CORP](https://www.dukascopy-node.app/instrument/lkqususd)|`lkqususd`|May 12, 2022|
|[ELI LILLY & CO](https://www.dukascopy-node.app/instrument/llyususd)|`llyususd`|May 11, 2017|
|[LOCKHEED MARTIN CORP](https://www.dukascopy-node.app/instrument/lmtususd)|`lmtususd`|May 11, 2017|
|[LINCOLN NATIONAL CORP](https://www.dukascopy-node.app/instrument/lncususd)|`lncususd`|May 12, 2022|
|[CHENIERE ENERGY INC](https://www.dukascopy-node.app/instrument/lngususd)|`lngususd`|May 12, 2022|
|[ALLIANT ENERGY CORP](https://www.dukascopy-node.app/instrument/lntususd)|`lntususd`|May 12, 2022|
|[LOWE'S COS INC](https://www.dukascopy-node.app/instrument/lowususd)|`lowususd`|Nov 2, 2017|
|[LPL FINANCIAL HOLDINGS INC](https://www.dukascopy-node.app/instrument/lplaususd)|`lplaususd`|Jun 15, 2022|
|[LAM RESEARCH CORP](https://www.dukascopy-node.app/instrument/lrcxususd)|`lrcxususd`|Nov 2, 2017|
|[LIFE STORAGE INC](https://www.dukascopy-node.app/instrument/lsiususd)|`lsiususd`|May 12, 2022|
|[LANDSTAR SYSTEM INC](https://www.dukascopy-node.app/instrument/lstrususd)|`lstrususd`|May 13, 2022|
|[LULULEMON ATHLETICA INC](https://www.dukascopy-node.app/instrument/luluususd)|`luluususd`|May 13, 2022|
|[SOUTHWEST AIRLINES CO](https://www.dukascopy-node.app/instrument/luvususd)|`luvususd`|Nov 2, 2017|
|[Las Vegas Sands Corp.](https://www.dukascopy-node.app/instrument/lvsususd)|`lvsususd`|Jan 26, 2017|
|[LAMB WESTON HOLDINGS INC](https://www.dukascopy-node.app/instrument/lwususd)|`lwususd`|May 16, 2022|
|[LYONDELLBASELL INDU-CL A](https://www.dukascopy-node.app/instrument/lybususd)|`lybususd`|May 13, 2022|
|[LYFT INC-A](https://www.dukascopy-node.app/instrument/lyftususd)|`lyftususd`|May 13, 2022|
|[LIVE NATION ENTERTAINMENT IN](https://www.dukascopy-node.app/instrument/lyvususd)|`lyvususd`|May 13, 2022|
|[MACY'S INC](https://www.dukascopy-node.app/instrument/mususd)|`mususd`|Nov 2, 2017|
|[MASTERCARD INC-CLASS A](https://www.dukascopy-node.app/instrument/maususd)|`maususd`|May 11, 2017|
|[MID-AMERICA APARTMENT COMM](https://www.dukascopy-node.app/instrument/maaususd)|`maaususd`|May 13, 2022|
|[MANHATTAN ASSOCIATES INC](https://www.dukascopy-node.app/instrument/manhususd)|`manhususd`|May 13, 2022|
|[MARRIOTT INTERNATIONAL -CL A](https://www.dukascopy-node.app/instrument/marususd)|`marususd`|Nov 2, 2017|
|[MASIMO CORP](https://www.dukascopy-node.app/instrument/masiususd)|`masiususd`|May 13, 2022|
|[MATTEL INC](https://www.dukascopy-node.app/instrument/matususd)|`matususd`|Feb 1, 2018|
|[MCDONALD'S CORP](https://www.dukascopy-node.app/instrument/mcdususd)|`mcdususd`|Nov 2, 2017|
|[MICROCHIP TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/mchpususd)|`mchpususd`|Feb 1, 2018|
|[MCKESSON CORP](https://www.dukascopy-node.app/instrument/mckususd)|`mckususd`|Nov 2, 2017|
|[MONGODB INC](https://www.dukascopy-node.app/instrument/mdbususd)|`mdbususd`|May 13, 2022|
|[MONDELEZ INTERNATIONAL INC-A](https://www.dukascopy-node.app/instrument/mdlzususd)|`mdlzususd`|Nov 2, 2017|
|[MEDTRONIC PLC](https://www.dukascopy-node.app/instrument/mdtususd)|`mdtususd`|May 13, 2022|
|[METLIFE INC](https://www.dukascopy-node.app/instrument/metususd)|`metususd`|Nov 2, 2017|
|[MGM RESORTS INTERNATIONAL](https://www.dukascopy-node.app/instrument/mgmususd)|`mgmususd`|Nov 2, 2017|
|[MOHAWK INDUSTRIES INC](https://www.dukascopy-node.app/instrument/mhkususd)|`mhkususd`|May 13, 2022|
|[MIDDLEBY CORP](https://www.dukascopy-node.app/instrument/middususd)|`middususd`|May 13, 2022|
|[MARKEL CORP](https://www.dukascopy-node.app/instrument/mklususd)|`mklususd`|May 13, 2022|
|[MKS INSTRUMENTS INC](https://www.dukascopy-node.app/instrument/mksiususd)|`mksiususd`|May 13, 2022|
|[MARKETAXESS HOLDINGS INC](https://www.dukascopy-node.app/instrument/mktxususd)|`mktxususd`|May 13, 2022|
|[MARTIN MARIETTA MATERIALS](https://www.dukascopy-node.app/instrument/mlmususd)|`mlmususd`|May 13, 2022|
|[3M CO](https://www.dukascopy-node.app/instrument/mmmususd)|`mmmususd`|May 11, 2017|
|[MANDIANT INC](https://www.dukascopy-node.app/instrument/mndtususd)|`mndtususd`|May 13, 2022|
|[ALTRIA GROUP INC](https://www.dukascopy-node.app/instrument/moususd)|`moususd`|Nov 2, 2017|
|[MOLINA HEALTHCARE INC](https://www.dukascopy-node.app/instrument/mohususd)|`mohususd`|May 13, 2022|
|[MARATHON PETROLEUM CORP](https://www.dukascopy-node.app/instrument/mpcususd)|`mpcususd`|Feb 1, 2018|
|[MEDICAL PROPERTIES TRUST INC](https://www.dukascopy-node.app/instrument/mpwususd)|`mpwususd`|May 13, 2022|
|[MONOLITHIC POWER SYSTEMS INC](https://www.dukascopy-node.app/instrument/mpwrususd)|`mpwrususd`|May 13, 2022|
|[MERCK & CO. INC.](https://www.dukascopy-node.app/instrument/mrkususd)|`mrkususd`|Nov 2, 2017|
|[Moderna](https://www.dukascopy-node.app/instrument/mrnaususd)|`mrnaususd`|Oct 1, 2020|
|[MARATHON OIL CORP](https://www.dukascopy-node.app/instrument/mroususd)|`mroususd`|Feb 1, 2018|
|[MARVELL TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/mrvlususd)|`mrvlususd`|May 13, 2022|
|[MORGAN STANLEY](https://www.dukascopy-node.app/instrument/msususd)|`msususd`|Nov 2, 2017|
|[MSCI INC](https://www.dukascopy-node.app/instrument/msciususd)|`msciususd`|Jun 15, 2022|
|[MICROSOFT CORP](https://www.dukascopy-node.app/instrument/msftususd)|`msftususd`|Jan 26, 2017|
|[MATCH GROUP INC](https://www.dukascopy-node.app/instrument/mtchususd)|`mtchususd`|May 13, 2022|
|[METTLER-TOLEDO INTERNATIONAL](https://www.dukascopy-node.app/instrument/mtdususd)|`mtdususd`|May 13, 2022|
|[VAIL RESORTS INC](https://www.dukascopy-node.app/instrument/mtnususd)|`mtnususd`|May 13, 2022|
|[MICRON TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/muususd)|`muususd`|Nov 2, 2017|
|[NEUROCRINE BIOSCIENCES INC](https://www.dukascopy-node.app/instrument/nbixususd)|`nbixususd`|May 13, 2022|
|[NORWEGIAN CRUISE LINE HOLDIN](https://www.dukascopy-node.app/instrument/nclhususd)|`nclhususd`|May 13, 2022|
|[NORDSON CORP](https://www.dukascopy-node.app/instrument/ndsnususd)|`ndsnususd`|May 13, 2022|
|[NEXTERA ENERGY INC](https://www.dukascopy-node.app/instrument/neeususd)|`neeususd`|Feb 1, 2018|
|[NEWMONT MINING CORP](https://www.dukascopy-node.app/instrument/nemususd)|`nemususd`|May 11, 2017|
|[NETFLIX INC](https://www.dukascopy-node.app/instrument/nflxususd)|`nflxususd`|Jan 26, 2017|
|[Nio INC](https://www.dukascopy-node.app/instrument/nioususd)|`nioususd`|Nov 23, 2020|
|[NIKE INC](https://www.dukascopy-node.app/instrument/nkeususd)|`nkeususd`|Nov 2, 2017|
|[NORTONLIFELOCK INC](https://www.dukascopy-node.app/instrument/nlokususd)|`nlokususd`|Jun 15, 2022|
|[NIELSEN HOLDINGS PLC](https://www.dukascopy-node.app/instrument/nlsnususd)|`nlsnususd`|May 13, 2022|
|[ANNALY CAPITAL MANAGEMENT IN](https://www.dukascopy-node.app/instrument/nlyususd)|`nlyususd`|May 13, 2022|
|[NORTHROP GRUMMAN CORP](https://www.dukascopy-node.app/instrument/nocususd)|`nocususd`|May 11, 2017|
|[SERVICENOW INC](https://www.dukascopy-node.app/instrument/nowususd)|`nowususd`|May 13, 2022|
|[NRG ENERGY INC](https://www.dukascopy-node.app/instrument/nrgususd)|`nrgususd`|Feb 1, 2018|
|[NORFOLK SOUTHERN CORP](https://www.dukascopy-node.app/instrument/nscususd)|`nscususd`|Feb 1, 2018|
|[NUTANIX INC - A](https://www.dukascopy-node.app/instrument/ntnxususd)|`ntnxususd`|May 13, 2022|
|[NVIDIA CORP](https://www.dukascopy-node.app/instrument/nvdaususd)|`nvdaususd`|Jan 26, 2017|
|[NVR INC](https://www.dukascopy-node.app/instrument/nvrususd)|`nvrususd`|May 26, 2022|
|[NEWELL BRANDS INC](https://www.dukascopy-node.app/instrument/nwlususd)|`nwlususd`|Nov 2, 2017|
|[NEWS CORP - CLASS B](https://www.dukascopy-node.app/instrument/nwsususd)|`nwsususd`|May 13, 2022|
|[NEXSTAR MEDIA GROUP INC-CL A](https://www.dukascopy-node.app/instrument/nxstususd)|`nxstususd`|May 13, 2022|
|[NEW YORK TIMES CO-A](https://www.dukascopy-node.app/instrument/nytususd)|`nytususd`|May 13, 2022|
|[REALTY INCOME CORP](https://www.dukascopy-node.app/instrument/oususd)|`oususd`|May 13, 2022|
|[OWENS CORNING](https://www.dukascopy-node.app/instrument/ocususd)|`ocususd`|May 13, 2022|
|[OLD DOMINION FREIGHT LINE](https://www.dukascopy-node.app/instrument/odflususd)|`odflususd`|May 13, 2022|
|[OGE ENERGY CORP](https://www.dukascopy-node.app/instrument/ogeususd)|`ogeususd`|May 13, 2022|
|[ORGANON & CO](https://www.dukascopy-node.app/instrument/ognususd)|`ognususd`|May 13, 2022|
|[OMEGA HEALTHCARE INVESTORS](https://www.dukascopy-node.app/instrument/ohiususd)|`ohiususd`|May 13, 2022|
|[ONEOK INC](https://www.dukascopy-node.app/instrument/okeususd)|`okeususd`|Feb 1, 2018|
|[OKTA INC](https://www.dukascopy-node.app/instrument/oktaususd)|`oktaususd`|May 13, 2022|
|[UNIVERSAL DISPLAY CORP](https://www.dukascopy-node.app/instrument/oledususd)|`oledususd`|May 13, 2022|
|[OLLIE'S BARGAIN OUTLET HOLDI](https://www.dukascopy-node.app/instrument/olliususd)|`olliususd`|May 13, 2022|
|[OLIN CORP](https://www.dukascopy-node.app/instrument/olnususd)|`olnususd`|May 13, 2022|
|[OMNICOM GROUP](https://www.dukascopy-node.app/instrument/omcususd)|`omcususd`|Feb 1, 2018|
|[ONEMAIN HOLDINGS INC](https://www.dukascopy-node.app/instrument/omfususd)|`omfususd`|May 13, 2022|
|[ON SEMICONDUCTOR](https://www.dukascopy-node.app/instrument/onususd)|`onususd`|May 13, 2022|
|[ORACLE CORP](https://www.dukascopy-node.app/instrument/orclususd)|`orclususd`|Nov 2, 2017|
|[O'REILLY AUTOMOTIVE INC](https://www.dukascopy-node.app/instrument/orlyususd)|`orlyususd`|Nov 2, 2017|
|[OTIS WORLDWIDE CORP](https://www.dukascopy-node.app/instrument/otisususd)|`otisususd`|May 13, 2022|
|[OCCIDENTAL PETROLEUM CORP](https://www.dukascopy-node.app/instrument/oxyususd)|`oxyususd`|May 11, 2017|
|[PALO ALTO NETWORKS INC](https://www.dukascopy-node.app/instrument/panwususd)|`panwususd`|May 13, 2022|
|[PARAMOUNT GLOBAL-CLASS B](https://www.dukascopy-node.app/instrument/paraususd)|`paraususd`|Jun 15, 2022|
|[PAYCOM SOFTWARE INC](https://www.dukascopy-node.app/instrument/paycususd)|`paycususd`|May 13, 2022|
|[PAYCHEX INC](https://www.dukascopy-node.app/instrument/payxususd)|`payxususd`|Feb 1, 2018|
|[PBF ENERGY INC-CLASS A](https://www.dukascopy-node.app/instrument/pbfususd)|`pbfususd`|May 13, 2022|
|[Petroleo Brasileiro S.A.](https://www.dukascopy-node.app/instrument/pbrususd)|`pbrususd`|Jan 26, 2017|
|[PACCAR INC](https://www.dukascopy-node.app/instrument/pcarususd)|`pcarususd`|Feb 1, 2018|
|[P G & E CORP](https://www.dukascopy-node.app/instrument/pcgususd)|`pcgususd`|Nov 2, 2017|
|[PRICELINE GROUP INC/THE](https://www.dukascopy-node.app/instrument/pclnususd)|`pclnususd`|Jan 26, 2017|
|[PAYLOCITY HOLDING CORP](https://www.dukascopy-node.app/instrument/pctyususd)|`pctyususd`|May 19, 2022|
|[HEALTHPEAK PROPERTIES INC](https://www.dukascopy-node.app/instrument/peakususd)|`peakususd`|Jun 15, 2022|
|[PENN NATIONAL GAMING INC](https://www.dukascopy-node.app/instrument/pennususd)|`pennususd`|May 13, 2022|
|[PEPSICO INC](https://www.dukascopy-node.app/instrument/pepususd)|`pepususd`|Nov 2, 2017|
|[PFIZER INC](https://www.dukascopy-node.app/instrument/pfeususd)|`pfeususd`|Jan 26, 2017|
|[PROCTER & GAMBLE CO/THE](https://www.dukascopy-node.app/instrument/pgususd)|`pgususd`|Jan 26, 2017|
|[PROGRESSIVE CORP](https://www.dukascopy-node.app/instrument/pgrususd)|`pgrususd`|Feb 1, 2018|
|[PARKER HANNIFIN CORP](https://www.dukascopy-node.app/instrument/phususd)|`phususd`|Feb 1, 2018|
|[POLARIS INC](https://www.dukascopy-node.app/instrument/piiususd)|`piiususd`|May 13, 2022|
|[PACKAGING CORP OF AMERICA](https://www.dukascopy-node.app/instrument/pkgususd)|`pkgususd`|May 13, 2022|
|[ANAPLAN INC](https://www.dukascopy-node.app/instrument/planususd)|`planususd`|May 13, 2022|
|[PLANET FITNESS INC - CL A](https://www.dukascopy-node.app/instrument/plntususd)|`plntususd`|May 13, 2022|
|[Palantir Tech Inc A](https://www.dukascopy-node.app/instrument/pltrususd)|`pltrususd`|Oct 1, 2020|
|[Plug Power Inc](https://www.dukascopy-node.app/instrument/plugususd)|`plugususd`|Oct 2, 2020|
|[PHILIP MORRIS INTERNATIONAL](https://www.dukascopy-node.app/instrument/pmususd)|`pmususd`|Nov 2, 2017|
|[PNC FINANCIAL SERVICES GROUP](https://www.dukascopy-node.app/instrument/pncususd)|`pncususd`|Nov 2, 2017|
|[PENTAIR PLC](https://www.dukascopy-node.app/instrument/pnrususd)|`pnrususd`|May 13, 2022|
|[INSULET CORP](https://www.dukascopy-node.app/instrument/poddususd)|`poddususd`|May 16, 2022|
|[POOL CORP](https://www.dukascopy-node.app/instrument/poolususd)|`poolususd`|May 13, 2022|
|[PPG INDUSTRIES INC](https://www.dukascopy-node.app/instrument/ppgususd)|`ppgususd`|Feb 2, 2018|
|[PERRIGO CO PLC](https://www.dukascopy-node.app/instrument/prgoususd)|`prgoususd`|May 13, 2022|
|[PRUDENTIAL FINANCIAL INC](https://www.dukascopy-node.app/instrument/pruususd)|`pruususd`|Feb 1, 2018|
|[PUBLIC STORAGE](https://www.dukascopy-node.app/instrument/psaususd)|`psaususd`|Feb 1, 2018|
|[PURE STORAGE INC - CLASS A](https://www.dukascopy-node.app/instrument/pstgususd)|`pstgususd`|May 13, 2022|
|[PHILLIPS 66](https://www.dukascopy-node.app/instrument/psxususd)|`psxususd`|Feb 1, 2018|
|[PTC INC](https://www.dukascopy-node.app/instrument/ptcususd)|`ptcususd`|May 13, 2022|
|[PATTERSON-UTI ENERGY INC](https://www.dukascopy-node.app/instrument/ptenususd)|`ptenususd`|May 13, 2022|
|[Peloton Interactive Inc](https://www.dukascopy-node.app/instrument/ptonususd)|`ptonususd`|Oct 1, 2020|
|[PVH CORP](https://www.dukascopy-node.app/instrument/pvhususd)|`pvhususd`|May 13, 2022|
|[PIONEER NATURAL RESOURCES CO](https://www.dukascopy-node.app/instrument/pxdususd)|`pxdususd`|Nov 2, 2017|
|[PAYPAL HOLDINGS INC](https://www.dukascopy-node.app/instrument/pyplususd)|`pyplususd`|Nov 2, 2017|
|[QUALCOMM INC](https://www.dukascopy-node.app/instrument/qcomususd)|`qcomususd`|Nov 2, 2017|
|[QORVO INC](https://www.dukascopy-node.app/instrument/qrvoususd)|`qrvoususd`|May 13, 2022|
|[ROYAL CARIBBEAN CRUISES LTD](https://www.dukascopy-node.app/instrument/rclususd)|`rclususd`|May 13, 2022|
|[EVEREST RE GROUP LTD](https://www.dukascopy-node.app/instrument/reususd)|`reususd`|May 13, 2022|
|[REGENCY CENTERS CORP](https://www.dukascopy-node.app/instrument/regususd)|`regususd`|May 13, 2022|
|[REGENERON PHARMACEUTICALS](https://www.dukascopy-node.app/instrument/regnususd)|`regnususd`|Nov 2, 2017|
|[REGIONS FINANCIAL CORP](https://www.dukascopy-node.app/instrument/rfususd)|`rfususd`|Feb 1, 2018|
|[REINSURANCE GROUP OF AMERICA](https://www.dukascopy-node.app/instrument/rgaususd)|`rgaususd`|May 23, 2022|
|[ROYAL GOLD INC](https://www.dukascopy-node.app/instrument/rgldususd)|`rgldususd`|May 13, 2022|
|[RAYMOND JAMES FINANCIAL INC](https://www.dukascopy-node.app/instrument/rjfususd)|`rjfususd`|May 13, 2022|
|[RESMED INC](https://www.dukascopy-node.app/instrument/rmdususd)|`rmdususd`|May 13, 2022|
|[RINGCENTRAL INC-CLASS A](https://www.dukascopy-node.app/instrument/rngususd)|`rngususd`|May 16, 2022|
|[RENAISSANCERE HOLDINGS LTD](https://www.dukascopy-node.app/instrument/rnrususd)|`rnrususd`|Jun 15, 2022|
|[Roku Inc](https://www.dukascopy-node.app/instrument/rokuususd)|`rokuususd`|Nov 23, 2020|
|[ROLLINS INC](https://www.dukascopy-node.app/instrument/rolususd)|`rolususd`|May 13, 2022|
|[ROSS STORES INC](https://www.dukascopy-node.app/instrument/rostususd)|`rostususd`|Feb 1, 2018|
|[RPM INTERNATIONAL INC](https://www.dukascopy-node.app/instrument/rpmususd)|`rpmususd`|May 13, 2022|
|[RANGE RESOURCES CORP](https://www.dukascopy-node.app/instrument/rrcususd)|`rrcususd`|Feb 1, 2018|
|[REGAL REXNORD CORP](https://www.dukascopy-node.app/instrument/rrxususd)|`rrxususd`|May 13, 2022|
|[RELIANCE STEEL & ALUMINUM](https://www.dukascopy-node.app/instrument/rsususd)|`rsususd`|May 16, 2022|
|[RAYTHEON TECHNOLOGIES CORP](https://www.dukascopy-node.app/instrument/rtxususd)|`rtxususd`|Jun 15, 2022|
|[SABRE CORP](https://www.dukascopy-node.app/instrument/sabrususd)|`sabrususd`|May 13, 2022|
|[SIGNATURE BANK](https://www.dukascopy-node.app/instrument/sbnyususd)|`sbnyususd`|May 16, 2022|
|[STARBUCKS CORP](https://www.dukascopy-node.app/instrument/sbuxususd)|`sbuxususd`|Nov 2, 2017|
|[SOUTHERN COPPER CORP](https://www.dukascopy-node.app/instrument/sccoususd)|`sccoususd`|May 13, 2022|
|[SCHWAB (CHARLES) CORP](https://www.dukascopy-node.app/instrument/schwususd)|`schwususd`|Nov 2, 2017|
|[SERVICE CORP INTERNATIONAL](https://www.dukascopy-node.app/instrument/sciususd)|`sciususd`|May 13, 2022|
|[SOLAREDGE TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/sedgususd)|`sedgususd`|May 13, 2022|
|[SEI INVESTMENTS COMPANY](https://www.dukascopy-node.app/instrument/seicususd)|`seicususd`|May 13, 2022|
|[SPROUTS FARMERS MARKET INC](https://www.dukascopy-node.app/instrument/sfmususd)|`sfmususd`|May 13, 2022|
|[SEAGEN INC](https://www.dukascopy-node.app/instrument/sgenususd)|`sgenususd`|May 13, 2022|
|[SHERWIN-WILLIAMS COMPANY](https://www.dukascopy-node.app/instrument/shwususd)|`shwususd`|Feb 1, 2018|
|[SVB FINANCIAL GROUP](https://www.dukascopy-node.app/instrument/sivbususd)|`sivbususd`|May 13, 2022|
|[JM SMUCKER COMPANY](https://www.dukascopy-node.app/instrument/sjmususd)|`sjmususd`|Feb 1, 2018|
|[SCHLUMBERGER LTD](https://www.dukascopy-node.app/instrument/slbususd)|`slbususd`|May 13, 2022|
|[SLM CORP](https://www.dukascopy-node.app/instrument/slmususd)|`slmususd`|May 13, 2022|
|[SNAP Inc](https://www.dukascopy-node.app/instrument/snapususd)|`snapususd`|Nov 2, 2017|
|[Snowflake Inc Class A](https://www.dukascopy-node.app/instrument/snowususd)|`snowususd`|Sep 22, 2020|
|[SYNOPSYS INC](https://www.dukascopy-node.app/instrument/snpsususd)|`snpsususd`|May 13, 2022|
|[SOUTHERN CO/THE](https://www.dukascopy-node.app/instrument/soususd)|`soususd`|Nov 2, 2017|
|[SIMON PROPERTY GROUP INC](https://www.dukascopy-node.app/instrument/spgususd)|`spgususd`|Nov 2, 2017|
|[S&P GLOBAL INC](https://www.dukascopy-node.app/instrument/spgiususd)|`spgiususd`|May 13, 2022|
|[SPLUNK INC](https://www.dukascopy-node.app/instrument/splkususd)|`splkususd`|May 16, 2022|
|[SPOTIFY TECHNOLOGY SA](https://www.dukascopy-node.app/instrument/spotususd)|`spotususd`|May 13, 2022|
|[SPIRIT AEROSYSTEMS HOLD-CL A](https://www.dukascopy-node.app/instrument/sprususd)|`sprususd`|May 13, 2022|
|[Square Inc](https://www.dukascopy-node.app/instrument/sqususd)|`sqususd`|Oct 23, 2020|
|[SAREPTA THERAPEUTICS INC](https://www.dukascopy-node.app/instrument/srptususd)|`srptususd`|May 13, 2022|
|[SS&C TECHNOLOGIES HOLDINGS](https://www.dukascopy-node.app/instrument/ssncususd)|`ssncususd`|May 13, 2022|
|[STERIS PLC](https://www.dukascopy-node.app/instrument/steususd)|`steususd`|May 13, 2022|
|[STATE STREET CORP](https://www.dukascopy-node.app/instrument/sttususd)|`sttususd`|Feb 1, 2018|
|[CONSTELLATION BRANDS INC-A](https://www.dukascopy-node.app/instrument/stzususd)|`stzususd`|Feb 1, 2018|
|[SUN COMMUNITIES INC](https://www.dukascopy-node.app/instrument/suiususd)|`suiususd`|May 13, 2022|
|[STANLEY BLACK & DECKER INC](https://www.dukascopy-node.app/instrument/swkususd)|`swkususd`|Feb 1, 2018|
|[SKYWORKS SOLUTIONS INC](https://www.dukascopy-node.app/instrument/swksususd)|`swksususd`|May 13, 2022|
|[SYNCHRONY FINANCIAL](https://www.dukascopy-node.app/instrument/syfususd)|`syfususd`|May 13, 2022|
|[STRYKER CORP](https://www.dukascopy-node.app/instrument/sykususd)|`sykususd`|Feb 1, 2018|
|[SYSCO CORP](https://www.dukascopy-node.app/instrument/syyususd)|`syyususd`|Feb 1, 2018|
|[AT&T INC](https://www.dukascopy-node.app/instrument/tususd)|`tususd`|Jan 26, 2017|
|[MOLSON COORS BREWING CO -B](https://www.dukascopy-node.app/instrument/tapususd)|`tapususd`|Feb 1, 2018|
|[TRANSDIGM GROUP INC](https://www.dukascopy-node.app/instrument/tdgususd)|`tdgususd`|May 13, 2022|
|[TELEDYNE TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/tdyususd)|`tdyususd`|May 16, 2022|
|[ATLASSIAN CORP PLC-CLASS A](https://www.dukascopy-node.app/instrument/teamususd)|`teamususd`|May 13, 2022|
|[BIO-TECHNE CORP](https://www.dukascopy-node.app/instrument/techususd)|`techususd`|Jun 15, 2022|
|[TE CONNECTIVITY LTD](https://www.dukascopy-node.app/instrument/telususd)|`telususd`|May 13, 2022|
|[TEVA PHARMACEUTICAL-SP ADR](https://www.dukascopy-node.app/instrument/tevaususd)|`tevaususd`|Nov 2, 2017|
|[TRUIST FINANCIAL CORP](https://www.dukascopy-node.app/instrument/tfcususd)|`tfcususd`|Jun 15, 2022|
|[TELEFLEX INC](https://www.dukascopy-node.app/instrument/tfxususd)|`tfxususd`|May 13, 2022|
|[TARGET CORP](https://www.dukascopy-node.app/instrument/tgtususd)|`tgtususd`|Nov 2, 2017|
|[TJX COMPANIES INC](https://www.dukascopy-node.app/instrument/tjxususd)|`tjxususd`|Nov 2, 2017|
|[THERMO FISHER SCIENTIFIC INC](https://www.dukascopy-node.app/instrument/tmoususd)|`tmoususd`|Nov 2, 2017|
|[T-MOBILE US INC](https://www.dukascopy-node.app/instrument/tmusususd)|`tmusususd`|May 13, 2022|
|[TOLL BROTHERS INC](https://www.dukascopy-node.app/instrument/tolususd)|`tolususd`|May 13, 2022|
|[TAPESTRY INC](https://www.dukascopy-node.app/instrument/tprususd)|`tprususd`|May 13, 2022|
|[TEMPUR SEALY INTERNATIONAL I](https://www.dukascopy-node.app/instrument/tpxususd)|`tpxususd`|May 13, 2022|
|[TARGA RESOURCES CORP](https://www.dukascopy-node.app/instrument/trgpususd)|`trgpususd`|May 13, 2022|
|[TRIMBLE INC](https://www.dukascopy-node.app/instrument/trmbususd)|`trmbususd`|May 13, 2022|
|[T ROWE PRICE GROUP INC](https://www.dukascopy-node.app/instrument/trowususd)|`trowususd`|Feb 1, 2018|
|[TRANSUNION](https://www.dukascopy-node.app/instrument/truususd)|`truususd`|May 13, 2022|
|[TRAVELERS COS INC/THE](https://www.dukascopy-node.app/instrument/trvususd)|`trvususd`|Nov 2, 2017|
|[TESLA MOTORS INC](https://www.dukascopy-node.app/instrument/tslaususd)|`tslaususd`|Jan 26, 2017|
|[Taiwan Semiconductor Manufacturing Company Limited](https://www.dukascopy-node.app/instrument/tsmususd)|`tsmususd`|Feb 1, 2018|
|[TYSON FOODS INC-CL A](https://www.dukascopy-node.app/instrument/tsnususd)|`tsnususd`|Feb 1, 2018|
|[TRANE TECHNOLOGIES PLC](https://www.dukascopy-node.app/instrument/ttususd)|`ttususd`|May 13, 2022|
|[TRADE DESK INC/THE -CLASS A](https://www.dukascopy-node.app/instrument/ttdususd)|`ttdususd`|May 13, 2022|
|[TAKE-TWO INTERACTIVE SOFTWRE](https://www.dukascopy-node.app/instrument/ttwoususd)|`ttwoususd`|May 13, 2022|
|[TWILIO INC - A](https://www.dukascopy-node.app/instrument/twloususd)|`twloususd`|May 13, 2022|
|[TWITTER INC](https://www.dukascopy-node.app/instrument/twtrususd)|`twtrususd`|Nov 2, 2017|
|[TEXAS INSTRUMENTS INC](https://www.dukascopy-node.app/instrument/txnususd)|`txnususd`|Nov 2, 2017|
|[TYLER TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/tylususd)|`tylususd`|May 13, 2022|
|[UNDER ARMOUR INC-CLASS C](https://www.dukascopy-node.app/instrument/uaususd)|`uaususd`|May 13, 2022|
|[UNDER ARMOUR INC-CLASS A](https://www.dukascopy-node.app/instrument/uaaususd)|`uaaususd`|May 13, 2022|
|[Uber Inc](https://www.dukascopy-node.app/instrument/uberususd)|`uberususd`|Oct 1, 2020|
|[UDR INC](https://www.dukascopy-node.app/instrument/udrususd)|`udrususd`|May 19, 2022|
|[UGI CORP](https://www.dukascopy-node.app/instrument/ugiususd)|`ugiususd`|May 13, 2022|
|[UNIVERSAL HEALTH SERVICES-B](https://www.dukascopy-node.app/instrument/uhsususd)|`uhsususd`|May 13, 2022|
|[ULTA SALON COSMETICS & FRAGR](https://www.dukascopy-node.app/instrument/ultaususd)|`ultaususd`|Nov 2, 2017|
|[UNITEDHEALTH GROUP INC](https://www.dukascopy-node.app/instrument/unhususd)|`unhususd`|Nov 2, 2017|
|[UNION PACIFIC CORP](https://www.dukascopy-node.app/instrument/unpususd)|`unpususd`|Nov 15, 2017|
|[UNITED PARCEL SERVICE-CL B](https://www.dukascopy-node.app/instrument/upsususd)|`upsususd`|Nov 15, 2017|
|[UNITED RENTALS INC](https://www.dukascopy-node.app/instrument/uriususd)|`uriususd`|May 13, 2022|
|[US BANCORP](https://www.dukascopy-node.app/instrument/usbususd)|`usbususd`|Nov 15, 2017|
|[US FOODS HOLDING CORP](https://www.dukascopy-node.app/instrument/usfdususd)|`usfdususd`|May 13, 2022|
|[UNITED THERAPEUTICS CORP](https://www.dukascopy-node.app/instrument/uthrususd)|`uthrususd`|May 13, 2022|
|[VISA INC-CLASS A SHARES](https://www.dukascopy-node.app/instrument/vususd)|`vususd`|Jan 26, 2017|
|[Vale S.A.](https://www.dukascopy-node.app/instrument/valeususd)|`valeususd`|Jan 26, 2017|
|[VEEVA SYSTEMS INC-CLASS A](https://www.dukascopy-node.app/instrument/veevususd)|`veevususd`|May 13, 2022|
|[VF CORP](https://www.dukascopy-node.app/instrument/vfcususd)|`vfcususd`|Feb 1, 2018|
|[VICI PROPERTIES INC](https://www.dukascopy-node.app/instrument/viciususd)|`viciususd`|May 13, 2022|
|[VIRTU FINANCIAL INC-CLASS A](https://www.dukascopy-node.app/instrument/virtususd)|`virtususd`|May 13, 2022|
|[VALERO ENERGY CORP](https://www.dukascopy-node.app/instrument/vloususd)|`vloususd`|Nov 15, 2017|
|[VULCAN MATERIALS CO](https://www.dukascopy-node.app/instrument/vmcususd)|`vmcususd`|Feb 1, 2018|
|[VMWARE INC-CLASS A](https://www.dukascopy-node.app/instrument/vmwususd)|`vmwususd`|May 13, 2022|
|[VOYA FINANCIAL INC](https://www.dukascopy-node.app/instrument/voyaususd)|`voyaususd`|May 13, 2022|
|[VERTEX PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/vrtxususd)|`vrtxususd`|Nov 15, 2017|
|[VISTRA CORP](https://www.dukascopy-node.app/instrument/vstususd)|`vstususd`|May 13, 2022|
|[VIATRIS INC](https://www.dukascopy-node.app/instrument/ualususd)|`ualususd`|May 13, 2022|
|[VERIZON COMMUNICATIONS INC](https://www.dukascopy-node.app/instrument/vzususd)|`vzususd`|Nov 15, 2017|
|[WAYFAIR INC- CLASS A](https://www.dukascopy-node.app/instrument/wususd)|`wususd`|May 13, 2022|
|[WABTEC CORP](https://www.dukascopy-node.app/instrument/wabususd)|`wabususd`|May 13, 2022|
|[WESTERN ALLIANCE BANCORP](https://www.dukascopy-node.app/instrument/walususd)|`walususd`|May 13, 2022|
|[WALGREENS BOOTS ALLIANCE INC](https://www.dukascopy-node.app/instrument/wbaususd)|`wbaususd`|Nov 15, 2017|
|[WEBSTER FINANCIAL CORP](https://www.dukascopy-node.app/instrument/wbsususd)|`wbsususd`|May 16, 2022|
|[WORKDAY INC-CLASS A](https://www.dukascopy-node.app/instrument/wdayususd)|`wdayususd`|May 13, 2022|
|[WESTERN DIGITAL CORP](https://www.dukascopy-node.app/instrument/wdcususd)|`wdcususd`|Nov 15, 2017|
|[WENDY'S CO/THE](https://www.dukascopy-node.app/instrument/wenususd)|`wenususd`|May 13, 2022|
|[WEX INC](https://www.dukascopy-node.app/instrument/wexususd)|`wexususd`|Jun 15, 2022|
|[WELLS FARGO & CO](https://www.dukascopy-node.app/instrument/wfcususd)|`wfcususd`|Jan 26, 2017|
|[WYNDHAM HOTELS & RESORTS INC](https://www.dukascopy-node.app/instrument/whususd)|`whususd`|May 13, 2022|
|[WHIRLPOOL CORP](https://www.dukascopy-node.app/instrument/whrususd)|`whrususd`|Feb 1, 2018|
|[WESTLAKE CORP](https://www.dukascopy-node.app/instrument/wlkususd)|`wlkususd`|May 13, 2022|
|[WAL-MART STORES INC](https://www.dukascopy-node.app/instrument/wmtususd)|`wmtususd`|Nov 15, 2017|
|[WP CAREY INC](https://www.dukascopy-node.app/instrument/wpcususd)|`wpcususd`|May 13, 2022|
|[WR BERKLEY CORP](https://www.dukascopy-node.app/instrument/wrbususd)|`wrbususd`|May 13, 2022|
|[WESTROCK CO](https://www.dukascopy-node.app/instrument/wrkususd)|`wrkususd`|May 13, 2022|
|[WILLIAMS-SONOMA INC](https://www.dukascopy-node.app/instrument/wsmususd)|`wsmususd`|May 13, 2022|
|[WATSCO INC](https://www.dukascopy-node.app/instrument/wsoususd)|`wsoususd`|May 13, 2022|
|[WEST PHARMACEUTICAL SERVICES](https://www.dukascopy-node.app/instrument/wstususd)|`wstususd`|May 13, 2022|
|[ESSENTIAL UTILITIES INC](https://www.dukascopy-node.app/instrument/wtrgususd)|`wtrgususd`|May 13, 2022|
|[WILLIS TOWERS WATSON PLC](https://www.dukascopy-node.app/instrument/wtwususd)|`wtwususd`|May 13, 2022|
|[WOODWARD INC](https://www.dukascopy-node.app/instrument/wwdususd)|`wwdususd`|May 16, 2022|
|[WYNN RESORTS LTD](https://www.dukascopy-node.app/instrument/wynnususd)|`wynnususd`|Nov 15, 2017|
|[UNITED STATES STEEL CORP](https://www.dukascopy-node.app/instrument/xususd)|`xususd`|Nov 15, 2017|
|[XILINX INC](https://www.dukascopy-node.app/instrument/xlnxususd)|`xlnxususd`|Feb 1, 2018|
|[EXXON MOBIL CORP](https://www.dukascopy-node.app/instrument/xomususd)|`xomususd`|Jan 26, 2017|
|[Xpeng Inc ADR](https://www.dukascopy-node.app/instrument/xpevususd)|`xpevususd`|Dec 23, 2020|
|[XPO LOGISTICS INC](https://www.dukascopy-node.app/instrument/xpoususd)|`xpoususd`|May 13, 2022|
|[XYLEM INC](https://www.dukascopy-node.app/instrument/xylususd)|`xylususd`|May 13, 2022|
|[ALLEGHANY CORP](https://www.dukascopy-node.app/instrument/yususd)|`yususd`|May 13, 2022|
|[YUM! BRANDS INC](https://www.dukascopy-node.app/instrument/yumususd)|`yumususd`|Feb 1, 2018|
|[YUM CHINA HOLDINGS INC](https://www.dukascopy-node.app/instrument/yumcususd)|`yumcususd`|May 13, 2022|
|[ZILLOW GROUP INC - C](https://www.dukascopy-node.app/instrument/zususd)|`zususd`|May 13, 2022|
|[ZIMMER BIOMET HOLDINGS INC](https://www.dukascopy-node.app/instrument/zbhususd)|`zbhususd`|Feb 1, 2018|
|[ZEBRA TECHNOLOGIES CORP-CL A](https://www.dukascopy-node.app/instrument/zbraususd)|`zbraususd`|May 13, 2022|
|[ZEN.US/USD](https://www.dukascopy-node.app/instrument/zenususd)|`zenususd`|May 13, 2022|
|[Zoom Video Communications (A Class)](https://www.dukascopy-node.app/instrument/zmususd)|`zmususd`|Sep 30, 2020|
|[ZSCALER INC](https://www.dukascopy-node.app/instrument/zsususd)|`zsususd`|May 13, 2022|
|[ZOETIS INC](https://www.dukascopy-node.app/instrument/ztsususd)|`ztsususd`|May 16, 2022|
<h3 id="etf_cfd">ETFs 📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ARK 21Shares Active Bitcoin Ethereum Strategy ETF Fund](https://www.dukascopy-node.app/instrument/arkiususd)|`arkiususd`|Apr 25, 2024|
|[Global X Cybersecurity UCITS ETF Fund](https://www.dukascopy-node.app/instrument/bugggbgbx)|`bugggbgbx`|Oct 21, 2024|
|[Lyxor Smart Overnight Return - UCITS ETF C-GBP](https://www.dukascopy-node.app/instrument/csh2gbgbx)|`csh2gbgbx`|Mar 1, 2023|
|[WisdomTree Cybersecurity UCITS ETF Fund](https://www.dukascopy-node.app/instrument/cysegbgbx)|`cysegbgbx`|Feb 1, 2021|
|[iShares MSCI Europe Health Care Sector UCITS ETF Fund](https://www.dukascopy-node.app/instrument/esihgbgbx)|`esihgbgbx`|Oct 24, 2024|
|[iShares Physical Gold ETC Fund](https://www.dukascopy-node.app/instrument/iglnususd)|`iglnususd`|Jan 22, 2020|
|[iShares S&P 500 Financials Sector UCITS ETF](https://www.dukascopy-node.app/instrument/iufsususd)|`iufsususd`|Mar 20, 2020|
|[iShares MSCI Global Semiconductors UCITS ETF](https://www.dukascopy-node.app/instrument/semigbgbx)|`semigbgbx`|Oct 21, 2024|
|[Invesco Physical Gold ETC Fund](https://www.dukascopy-node.app/instrument/sgldususd)|`sgldususd`|Mar 20, 2020|
|[VanEck Semiconductor ETF Fund](https://www.dukascopy-node.app/instrument/smhususd)|`smhususd`|Dec 9, 2020|
|[Lyxor Smart Overnight Return - UCITS ETF C-USD](https://www.dukascopy-node.app/instrument/smtcususd)|`smtcususd`|Jan 4, 2023|
|[Wisdomtree Artificial Intelligence And Innovation Fund](https://www.dukascopy-node.app/instrument/wtaiususd)|`wtaiususd`|Mar 18, 2020|
|[Xtrackers FTSE Developed Europe Real Estate UCITS ETF](https://www.dukascopy-node.app/instrument/xdergbgbx)|`xdergbgbx`|Jan 4, 2016|
|[Xtrackers MSCI World Health Care UCITS ETF Fund](https://www.dukascopy-node.app/instrument/xdwhususd)|`xdwhususd`|Mar 20, 2020|
|[Xtrackers MSCI World Information Technology UCITS ETF](https://www.dukascopy-node.app/instrument/xdwtususd)|`xdwtususd`|Mar 24, 2020|
|[Invesco Real Estate S&P US Select Sector UCITS ETF Acc](https://www.dukascopy-node.app/instrument/xresususd)|`xresususd`|Jan 2, 2018|
|[Lyxor Smart Overnight Return - UCITS ETF C-EUR](https://www.dukascopy-node.app/instrument/csh2freur)|`csh2freur`|Jan 2, 2023|
|[iShares Ageing Population UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/agesgbgbx)|`agesgbgbx`|Mar 20, 2020|
|[L&G Artificial Intelligence UCITS ETF](https://www.dukascopy-node.app/instrument/aiaigbusd)|`aiaigbusd`|Feb 28, 2020|
|[iShares NASDAQ 100 UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/cndxgbusd)|`cndxgbusd`|Feb 28, 2020|
|[VanEck Defense ETF A USD Acc (GBP)](https://www.dukascopy-node.app/instrument/dfnggbgbp)|`dfnggbgbp`|Apr 11, 2023|
|[iShares Electric Vehicles and Driving Technology UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/ecargbusd)|`ecargbusd`|Mar 25, 2020|
|[L&G Clean Water UCITS ETF](https://www.dukascopy-node.app/instrument/glgggbgbx)|`glgggbgbx`|Mar 3, 2020|
|[WisdomTree Artificial Intelligence UCITS ETF - USD Acc](https://www.dukascopy-node.app/instrument/intlgbgbx)|`intlgbgbx`|Jan 2, 2020|
|[L&G Cyber Security UCITS ETF](https://www.dukascopy-node.app/instrument/ispygbgbx)|`ispygbgbx`|Feb 28, 2020|
|[iShares MSCI USA SRI UCITS ETF](https://www.dukascopy-node.app/instrument/suasgbusd)|`suasgbusd`|Feb 28, 2020|
|[iShares MSCI EM SRI UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/susmgbusd)|`susmgbusd`|Feb 28, 2020|
|[iShares MSCI USA SRI UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/suusgbgbx)|`suusgbgbx`|Feb 28, 2020|
|[SPDR S&P U.S. Utilities Select Sector UCITS ETF](https://www.dukascopy-node.app/instrument/sxlugbusd)|`sxlugbusd`|Jan 2, 2020|
|[Vanguard FTSE 100 UCITS ETF GBP Acc](https://www.dukascopy-node.app/instrument/vukggbgbp)|`vukggbgbp`|Feb 28, 2020|
|[VWRP VANGUARD FTSE ALL-WORLD UCITS ETF](https://www.dukascopy-node.app/instrument/vwrpgbgbp)|`vwrpgbgbp`|Feb 28, 2020|
|[iShares MSCI World Small Cap UCITS ETF USD (Acc)](https://www.dukascopy-node.app/instrument/wsmlgbusd)|`wsmlgbusd`|Feb 28, 2020|
|[Xtrackers NASDAQ 100 UCITS ETF 1C (GBP)](https://www.dukascopy-node.app/instrument/xnaqgbgbp)|`xnaqgbgbp`|Feb 16, 2021|
|[Xtrackers MSCI Europe Utilities Screened UCITS ETF 1C](https://www.dukascopy-node.app/instrument/xs6rgbgbx)|`xs6rgbgbx`|Feb 3, 2020|
---

#### ⚖️ Legal Disclaimer

`dukascopy-node` is not affiliated, endorsed, or vetted by Dukascopy Bank SA. It's an open-source tool that uses Dukascopy's publicly available APIs, and is intended for research and educational purposes.