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
<p align="center"><a href="https://context7.com/leo4815162342/dukascopy-node"><img width="12" src="https://context7.com/favicon.ico" alt="dukascopy-node via pnpm"/> MCP Docs (via Context7 MCP)</a></p>



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

## ✨ Download Real-Time Price Data via Node.js 

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

📁 Instruments

* [Bonds 📊 (3)](#bnd_cfd)
* [ETFs 📈 (17)](#etf_cfd)
* [Crypto assets ₿ (29)](#vccy)
* [Agricultural commodities ☕ (6)](#cmd_agricultural)
* [Energy commodities ⚡ (4)](#cmd_energy)
* [Metals commodities ⚙️ (3)](#cmd_metals)
* [Germany ETFs 🇩🇪📈 (1)](#etf_cfd_de)
* [France ETFs 🇫🇷📈 (3)](#etf_cfd_fr)
* [Hong Kong ETFs 🇭🇰📈 (4)](#etf_cfd_hk)
* [United States ETFs 🇺🇸📈 (60)](#etf_cfd_us)
* [Forex currencies 💱 (290)](#fx_crosses)
* [Forex major currencies 💶 (7)](#fx_majors)
* [Forex metals 🥇 (51)](#fx_metals)
* [Africa 🌍 (1)](#idx_africa)
* [America 🌎 (6)](#idx_america)
* [Asia 🌏 (5)](#idx_asia)
* [Europe 🇪🇺 (9)](#idx_europe)
* [Austria 🇦🇹 (3)](#austria)
* [Belgium 🇧🇪 (7)](#belgium)
* [Denmark 🇩🇰 (8)](#denmark)
* [Finland 🇫🇮 (7)](#finland)
* [France 🇫🇷 (38)](#france)
* [Germany 🇩🇪 (43)](#germany)
* [Hong Kong 🇭🇰 (26)](#hong-kong)
* [Ireland 🇮🇪 (4)](#ireland)
* [Italy 🇮🇹 (38)](#italy)
* [Japan 🇯🇵 (53)](#japan)
* [Mexico 🇲🇽 (28)](#mexico)
* [Netherlands 🇳🇱 (15)](#netherlands)
* [Norway 🇳🇴 (5)](#norway)
* [Portugal 🇵🇹 (2)](#portugal)
* [Spain 🇪🇸 (19)](#spain)
* [Sweden 🇸🇪 (18)](#sweden)
* [Switzerland 🇨🇭 (25)](#switzerland)
* [United Kingdom 🇬🇧 (104)](#uk)
* [United States 🇺🇸 (546)](#us)
* [Crypto Curr  (1)](#crypto_curr)
* [Mutual Funds  (9)](#mutual_funds)
* [Ungrouped  (1)](#ungrouped)
<hr>
<h3 id="bnd_cfd">Bonds 📊</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Euro Bund](https://www.dukascopy-node.app/instrument/bundtreur)|`bundtreur`|May 2, 2016|
|[UK Long Gilt](https://www.dukascopy-node.app/instrument/ukgilttrgbp)|`ukgilttrgbp`|Dec 26, 2017|
|[US T-Bond](https://www.dukascopy-node.app/instrument/ustbondtrusd)|`ustbondtrusd`|Jan 1, 2000|
<h3 id="etf_cfd">ETFs 📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ARK Artificial Intelligence & Robotics UCITS ETF](https://www.dukascopy-node.app/instrument/arkiususd)|`arkiususd`|Jan 1, 2000|
|[Global X Cybersecurity Ucits ETF](https://www.dukascopy-node.app/instrument/bugggbgbp)|`bugggbgbp`|Jan 1, 2000|
|[iShares NASDAQ 100 UCITS ETF](https://www.dukascopy-node.app/instrument/cndxgbusd)|`cndxgbusd`|Feb 26, 2025|
|[EUR Deposit Interest Rates vs Euro](https://www.dukascopy-node.app/instrument/csh2freur)|`csh2freur`|Jan 1, 2000|
|[GBP Deposit Interest Rates vs](https://www.dukascopy-node.app/instrument/csh2gbgbx)|`csh2gbgbx`|Jan 1, 2000|
|[WisdomTree Cybersecurity UCITS ETF USD](https://www.dukascopy-node.app/instrument/cysegbgbx)|`cysegbgbx`|Jan 1, 2000|
|[iShares MSCI Europe Health Care Sector UCITS ETF](https://www.dukascopy-node.app/instrument/esihgbgbp)|`esihgbgbp`|Jan 1, 2000|
|[iShares Physical Gold ETC - IGLN](https://www.dukascopy-node.app/instrument/iglnususd)|`iglnususd`|Jan 1, 2000|
|[iShares S&P 500 Financial Sector UCITS ETF (LSE)](https://www.dukascopy-node.app/instrument/iufsususd)|`iufsususd`|Jan 1, 2000|
|[iShares MSCI Global Semiconductors UCITS ETF (London)](https://www.dukascopy-node.app/instrument/semigbgbp)|`semigbgbp`|Jan 1, 2000|
|[Invesco Physical Gold ETC](https://www.dukascopy-node.app/instrument/sgldususd)|`sgldususd`|Jan 1, 2000|
|[VanEck Semiconductors UCITS ETF](https://www.dukascopy-node.app/instrument/smhususd)|`smhususd`|Jan 1, 2000|
|[USD Deposit Interest Rates vs US Dollar](https://www.dukascopy-node.app/instrument/smtcususd)|`smtcususd`|Jan 1, 2000|
|[WisdomTree Artificial Intelligence UCITS ETF - USD Acc](https://www.dukascopy-node.app/instrument/wtaiususd)|`wtaiususd`|Jan 1, 2000|
|[Xtrackers FTSE Developed Europe Real Estate UCITS](https://www.dukascopy-node.app/instrument/xdergbgbx)|`xdergbgbx`|Jan 1, 2000|
|[Xtrackers MSCI World Health Care UCITS ETF 1C](https://www.dukascopy-node.app/instrument/xdwhususd)|`xdwhususd`|Jan 1, 2000|
|[Xtrackers MSCI World Information Technology UCITS ETF 1C](https://www.dukascopy-node.app/instrument/xdwtususd)|`xdwtususd`|Jan 1, 2000|
<h3 id="vccy">Crypto assets ₿</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Cardano vs US Dollar](https://www.dukascopy-node.app/instrument/adausd)|`adausd`|Jan 1, 2000|
|[Aave vs US Dollar](https://www.dukascopy-node.app/instrument/aveusd)|`aveusd`|Jan 1, 2000|
|[Basic Attnetion Token vs US Dollar](https://www.dukascopy-node.app/instrument/batusd)|`batusd`|Aug 5, 2019|
|[Bitcoin Cash vs Swiss Franc](https://www.dukascopy-node.app/instrument/bchchf)|`bchchf`|Mar 14, 2023|
|[Bitcoin Cash vs Euro](https://www.dukascopy-node.app/instrument/bcheur)|`bcheur`|Mar 14, 2023|
|[Bitcoin Cash vs Pound Sterling](https://www.dukascopy-node.app/instrument/bchgbp)|`bchgbp`|Mar 14, 2023|
|[Bitcoin Cash vs US Dollar](https://www.dukascopy-node.app/instrument/bchusd)|`bchusd`|May 17, 2021|
|[Bitcoin vs Swiss Franc](https://www.dukascopy-node.app/instrument/btcchf)|`btcchf`|Jan 1, 2000|
|[Bitcoin vs Euro](https://www.dukascopy-node.app/instrument/btceur)|`btceur`|Jan 1, 2000|
|[Bitcoin vs Pound Sterling](https://www.dukascopy-node.app/instrument/btcgbp)|`btcgbp`|Mar 14, 2023|
|[Bitcoin vs US Dollar](https://www.dukascopy-node.app/instrument/btcusd)|`btcusd`|Jan 1, 2000|
|[Compound vs US Dollar](https://www.dukascopy-node.app/instrument/cmpusd)|`cmpusd`|Jan 1, 2000|
|[Dashcoin vs US Dollar](https://www.dukascopy-node.app/instrument/dshusd)|`dshusd`|Aug 4, 2019|
|[Ether vs Swiss Franc](https://www.dukascopy-node.app/instrument/ethchf)|`ethchf`|Mar 14, 2023|
|[Ether vs Euro](https://www.dukascopy-node.app/instrument/etheur)|`etheur`|Mar 14, 2023|
|[Ether vs Pound Sterling](https://www.dukascopy-node.app/instrument/ethgbp)|`ethgbp`|Mar 14, 2023|
|[Ether vs US Dollar](https://www.dukascopy-node.app/instrument/ethusd)|`ethusd`|Jan 1, 2000|
|[Chainlink vs US Dollar](https://www.dukascopy-node.app/instrument/lnkusd)|`lnkusd`|Jan 1, 2000|
|[Litecoin vs Swiss Franc](https://www.dukascopy-node.app/instrument/ltcchf)|`ltcchf`|Mar 14, 2023|
|[Litecoin vs Euro](https://www.dukascopy-node.app/instrument/ltceur)|`ltceur`|Mar 14, 2023|
|[Litecoin vs Pound Sterling](https://www.dukascopy-node.app/instrument/ltcgbp)|`ltcgbp`|Mar 14, 2023|
|[Litecoin vs US Dollar](https://www.dukascopy-node.app/instrument/ltcusd)|`ltcusd`|Sep 3, 2018|
|[TRON vs US Dollar](https://www.dukascopy-node.app/instrument/trxusd)|`trxusd`|Aug 4, 2019|
|[Uniswap vs US Dollar](https://www.dukascopy-node.app/instrument/uniusd)|`uniusd`|Jan 1, 2000|
|[XLM - Stellar vs Swiss Franc](https://www.dukascopy-node.app/instrument/xlmchf)|`xlmchf`|Mar 14, 2023|
|[XLM - Stellar vs Euro](https://www.dukascopy-node.app/instrument/xlmeur)|`xlmeur`|Mar 14, 2023|
|[XLM - Stellar vs Pound Sterling](https://www.dukascopy-node.app/instrument/xlmgbp)|`xlmgbp`|Mar 14, 2023|
|[XLM - Stellar vs US Dollar](https://www.dukascopy-node.app/instrument/xlmusd)|`xlmusd`|Jan 1, 2000|
|[Yearn Finance vs US Dollar](https://www.dukascopy-node.app/instrument/yfiusd)|`yfiusd`|Jan 1, 2000|
<h3 id="cmd_agricultural">Agricultural commodities ☕</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[US Cocoa](https://www.dukascopy-node.app/instrument/cocoacmdusd)|`cocoacmdusd`|Jan 1, 2000|
|[Coffee Arabica](https://www.dukascopy-node.app/instrument/coffeecmdusx)|`coffeecmdusx`|Dec 4, 2017|
|[Cotton](https://www.dukascopy-node.app/instrument/cottoncmdusx)|`cottoncmdusx`|Oct 20, 2017|
|[Orange Juice](https://www.dukascopy-node.app/instrument/ojuicecmdusx)|`ojuicecmdusx`|Oct 20, 2017|
|[Soybean](https://www.dukascopy-node.app/instrument/soybeancmdusx)|`soybeancmdusx`|Dec 1, 2017|
|[Sugar White](https://www.dukascopy-node.app/instrument/sugarcmdusd)|`sugarcmdusd`|Jan 1, 2000|
<h3 id="cmd_energy">Energy commodities ⚡</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Brent Crude Oil](https://www.dukascopy-node.app/instrument/brentcmdusd)|`brentcmdusd`|Nov 17, 2006|
|[Gasoil](https://www.dukascopy-node.app/instrument/dieselcmdusd)|`dieselcmdusd`|Jan 1, 2000|
|[Natural Gas](https://www.dukascopy-node.app/instrument/gascmdusd)|`gascmdusd`|Sep 2, 2012|
|[Light Sweet Crude Oil](https://www.dukascopy-node.app/instrument/lightcmdusd)|`lightcmdusd`|Apr 20, 1983|
<h3 id="cmd_metals">Metals commodities ⚙️</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[High Grade Copper](https://www.dukascopy-node.app/instrument/coppercmdusd)|`coppercmdusd`|Mar 2, 2012|
|[Palladium](https://www.dukascopy-node.app/instrument/xpdcmdusd)|`xpdcmdusd`|Jan 1, 2000|
|[Platinum](https://www.dukascopy-node.app/instrument/xptcmdusd)|`xptcmdusd`|Jan 1, 2000|
<h3 id="etf_cfd_de">Germany ETFs 🇩🇪📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[iShares TecDAX UCITS DE ETF](https://www.dukascopy-node.app/instrument/tecdaxedeeur)|`tecdaxedeeur`|Jan 1, 2000|
<h3 id="etf_cfd_fr">France ETFs 🇫🇷📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[LYXOR ETF Daily X2 Short Bund](https://www.dukascopy-node.app/instrument/dsbfreur)|`dsbfreur`|Jan 1, 2000|
|[Lyxor ETF Leverage CAC 40](https://www.dukascopy-node.app/instrument/lvcfreur)|`lvcfreur`|Jan 1, 2000|
|[Lyxor UCITS ETF STOXX EUROPE 600 Banks](https://www.dukascopy-node.app/instrument/lyxbnkfreur)|`lyxbnkfreur`|Jan 1, 2000|
<h3 id="etf_cfd_hk">Hong Kong ETFs 🇭🇰📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[2822 CSOP FTSE China A50 ETF](https://www.dukascopy-node.app/instrument/2822hkhkd)|`2822hkhkd`|Jan 1, 2000|
|[Hang Seng H-Share Index ETF](https://www.dukascopy-node.app/instrument/2828hkhkd)|`2828hkhkd`|Jan 1, 2000|
|[iShares Core S&P BSE SENSEX India ETF](https://www.dukascopy-node.app/instrument/2836hkhkd)|`2836hkhkd`|Jan 1, 2000|
|[ChinaAMC CSI 300 Index ETF](https://www.dukascopy-node.app/instrument/3188hkhkd)|`3188hkhkd`|Jan 1, 2000|
<h3 id="etf_cfd_us">United States ETFs 🇺🇸📈</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ARK Atunonomous Technology & Robotics](https://www.dukascopy-node.app/instrument/arkqususd)|`arkqususd`|Jan 1, 2000|
|[ARK Space exporation & INNO](https://www.dukascopy-node.app/instrument/arkxususd)|`arkxususd`|Jan 1, 2000|
|[Amplify Travel TECH ETF](https://www.dukascopy-node.app/instrument/awayususd)|`awayususd`|Jan 1, 2000|
|[ProShares Bitcoin Strategy ETF](https://www.dukascopy-node.app/instrument/bitoususd)|`bitoususd`|Jan 1, 2000|
|[Valkyrie Bitcoin Strategy ETF](https://www.dukascopy-node.app/instrument/btfususd)|`btfususd`|Jan 1, 2000|
|[SPDR Dow Jones Industrial Average ETF](https://www.dukascopy-node.app/instrument/diaususd)|`diaususd`|Jan 1, 2000|
|[iShares Select Dividend ETF](https://www.dukascopy-node.app/instrument/dvyususd)|`dvyususd`|Jan 1, 2000|
|[iShares MSCI Emerging Markets ETF](https://www.dukascopy-node.app/instrument/eemususd)|`eemususd`|Jan 1, 2000|
|[iShares MSCI EAFE ETF](https://www.dukascopy-node.app/instrument/efaususd)|`efaususd`|Jan 1, 2000|
|[iShares J.P. Morgan USD Emerging Markets Bond ETF](https://www.dukascopy-node.app/instrument/embususd)|`embususd`|Jan 1, 2000|
|[Vaneck Video Game Esport ETF](https://www.dukascopy-node.app/instrument/espoususd)|`espoususd`|Jan 1, 2000|
|[iShares MSCI Hong Kong ETF](https://www.dukascopy-node.app/instrument/ewhususd)|`ewhususd`|Jan 1, 2000|
|[iShares MSCI Japan ETF](https://www.dukascopy-node.app/instrument/ewjususd)|`ewjususd`|Jan 1, 2000|
|[iShares MSCI Mexico Capped ETF](https://www.dukascopy-node.app/instrument/ewwususd)|`ewwususd`|Jan 1, 2000|
|[iShares MSCI Brazil Capped isin](https://www.dukascopy-node.app/instrument/ewzususd)|`ewzususd`|Jan 1, 2000|
|[iShares MSCI EMU ETF](https://www.dukascopy-node.app/instrument/ezuususd)|`ezuususd`|Jan 1, 2000|
|[Global X Fintech ETF](https://www.dukascopy-node.app/instrument/finxususd)|`finxususd`|Jan 1, 2000|
|[First Trust Nasdaq Food & BE](https://www.dukascopy-node.app/instrument/ftxgususd)|`ftxgususd`|Jan 1, 2000|
|[iShares China Large-Cap ETF](https://www.dukascopy-node.app/instrument/fxiususd)|`fxiususd`|Jan 1, 2000|
|[VanEck Vectors Junior Gold Miners ETF](https://www.dukascopy-node.app/instrument/gdxjususd)|`gdxjususd`|Jan 1, 2000|
|[VanEck Vectors Gold Miners ETF](https://www.dukascopy-node.app/instrument/gdxususd)|`gdxususd`|Jan 1, 2000|
|[SPDR Gold Shares ETF](https://www.dukascopy-node.app/instrument/gldususd)|`gldususd`|Jan 1, 2000|
|[iShares Nasdaq Biotechnology ETF](https://www.dukascopy-node.app/instrument/ibbususd)|`ibbususd`|Jan 1, 2000|
|[iShares 7-10 Year Treasury Bond ETF](https://www.dukascopy-node.app/instrument/iefususd)|`iefususd`|Jan 1, 2000|
|[iShares Core S&P Mid-Cap ETF](https://www.dukascopy-node.app/instrument/ijhususd)|`ijhususd`|Jan 1, 2000|
|[iShares Core S&P Small-Cap ETF](https://www.dukascopy-node.app/instrument/ijrususd)|`ijrususd`|Jan 1, 2000|
|[iShares S&P 500 Value ETF](https://www.dukascopy-node.app/instrument/iveususd)|`iveususd`|Jan 1, 2000|
|[iShares S&P 500 Growth ETF](https://www.dukascopy-node.app/instrument/ivwususd)|`ivwususd`|Jan 1, 2000|
|[iShares Russell 1000 Value ETF](https://www.dukascopy-node.app/instrument/iwdususd)|`iwdususd`|Jan 1, 2000|
|[iShares Russell 1000 Growth ETF](https://www.dukascopy-node.app/instrument/iwfususd)|`iwfususd`|Jan 1, 2000|
|[iShares Russell 2000 ETF](https://www.dukascopy-node.app/instrument/iwmususd)|`iwmususd`|Jan 1, 2000|
|[iShares U.S. Real Estate ETF](https://www.dukascopy-node.app/instrument/iyrususd)|`iyrususd`|Jan 1, 2000|
|[US Global Jets ETF](https://www.dukascopy-node.app/instrument/jetsususd)|`jetsususd`|Jan 1, 2000|
|[SPDR Barclays Capital High Yield Bond ETF](https://www.dukascopy-node.app/instrument/jnkususd)|`jnkususd`|Jan 1, 2000|
|[SPDR S&P Insureance ETF](https://www.dukascopy-node.app/instrument/kieususd)|`kieususd`|Jan 1, 2000|
|[SPDR S&P Regional Banking](https://www.dukascopy-node.app/instrument/kreususd)|`kreususd`|Jan 1, 2000|
|[Invesco Food & Beverage ETF](https://www.dukascopy-node.app/instrument/pbjususd)|`pbjususd`|Jan 1, 2000|
|[Invesco LEISURE & ENTERTAINMENT](https://www.dukascopy-node.app/instrument/pejususd)|`pejususd`|Jan 1, 2000|
|[Invesco Aerospace & Defense](https://www.dukascopy-node.app/instrument/ppaususd)|`ppaususd`|Jan 1, 2000|
|[PowerShares QQQ ETF](https://www.dukascopy-node.app/instrument/qqqususd)|`qqqususd`|Jan 1, 2000|
|[ROBO Global Robotics and Automation Index ETF](https://www.dukascopy-node.app/instrument/roboususd)|`roboususd`|Jan 1, 2000|
|[iShares Silver Trust ETF](https://www.dukascopy-node.app/instrument/slvususd)|`slvususd`|Jan 1, 2000|
|[SPDR S&P 500 ETF](https://www.dukascopy-node.app/instrument/spyususd)|`spyususd`|Jan 1, 2000|
|[iShares 20+ Year Treasury Bond ETF](https://www.dukascopy-node.app/instrument/tltususd)|`tltususd`|Jan 1, 2000|
|[United States Oil](https://www.dukascopy-node.app/instrument/usoususd)|`usoususd`|Jan 1, 2000|
|[Vanguard Energy ETF](https://www.dukascopy-node.app/instrument/vdeususd)|`vdeususd`|Jan 1, 2000|
|[Vanguard FTSE Developed Markets ETF](https://www.dukascopy-node.app/instrument/veaususd)|`veaususd`|Jan 1, 2000|
|[Vanguard FTSE Europe ETF](https://www.dukascopy-node.app/instrument/vgkususd)|`vgkususd`|Jan 1, 2000|
|[Vanguard REIT ETF](https://www.dukascopy-node.app/instrument/vnqususd)|`vnqususd`|Jan 1, 2000|
|[iPath S&P 500 VIX B SERIES CFD](https://www.dukascopy-node.app/instrument/vxxususd)|`vxxususd`|Jan 1, 2000|
|[Energy Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xleususd)|`xleususd`|Jan 1, 2000|
|[Financial Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlfususd)|`xlfususd`|Jan 1, 2000|
|[Industrial Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xliususd)|`xliususd`|Jan 1, 2000|
|[Technology Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlkususd)|`xlkususd`|Jan 1, 2000|
|[Consumer Staples Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlpususd)|`xlpususd`|Jan 1, 2000|
|[Utilities Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xluususd)|`xluususd`|Jan 1, 2000|
|[Health Care Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlvususd)|`xlvususd`|Jan 1, 2000|
|[Consumer Discretionary Select Sector SPDR Fund](https://www.dukascopy-node.app/instrument/xlyususd)|`xlyususd`|Jan 1, 2000|
|[SPDR S&P Oil & Gas Explor & Prodtn ETF](https://www.dukascopy-node.app/instrument/xopususd)|`xopususd`|Jan 1, 2000|
|[Invesco Real Estate S&P Select Sector UCITS ETF](https://www.dukascopy-node.app/instrument/xresususd)|`xresususd`|Jan 1, 2000|
<h3 id="fx_crosses">Forex currencies 💱</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[UAE Dirham vs Chinese Yuan](https://www.dukascopy-node.app/instrument/aedcnh)|`aedcnh`|Sep 17, 2024|
|[UAE Dirham vs Czech Koruna](https://www.dukascopy-node.app/instrument/aedczk)|`aedczk`|Sep 16, 2024|
|[UAE Dirham vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/aedhkd)|`aedhkd`|Sep 17, 2024|
|[UAE Dirham vs Hungarian Forint](https://www.dukascopy-node.app/instrument/aedhuf)|`aedhuf`|Sep 16, 2024|
|[UAE Dirham vs Yen](https://www.dukascopy-node.app/instrument/aedjpy)|`aedjpy`|Sep 16, 2024|
|[UAE Dirham vs Mexican Peso](https://www.dukascopy-node.app/instrument/aedmxn)|`aedmxn`|Sep 16, 2024|
|[UAE Dirham vs Romanian Leu](https://www.dukascopy-node.app/instrument/aedron)|`aedron`|Sep 16, 2024|
|[UAE Dirham vs Saudi Riyal](https://www.dukascopy-node.app/instrument/aedsar)|`aedsar`|Sep 16, 2024|
|[UAE Dirham vs Thai Baht](https://www.dukascopy-node.app/instrument/aedthb)|`aedthb`|Sep 16, 2024|
|[UAE Dirham vs Turkish Lira](https://www.dukascopy-node.app/instrument/aedtry)|`aedtry`|Sep 16, 2024|
|[UAE Dirham vs Rand](https://www.dukascopy-node.app/instrument/aedzar)|`aedzar`|Sep 16, 2024|
|[Australian Dollar vs UAE Dirham](https://www.dukascopy-node.app/instrument/audaed)|`audaed`|Sep 16, 2024|
|[Australian Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/audcad)|`audcad`|Nov 18, 1992|
|[Australian Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/audchf)|`audchf`|Nov 22, 1991|
|[Australian Dollar vs Chinese Yuan](https://www.dukascopy-node.app/instrument/audcnh)|`audcnh`|Jan 1, 2000|
|[Australian Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/audczk)|`audczk`|Jan 1, 2000|
|[Australian Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/auddkk)|`auddkk`|Jan 1, 2000|
|[Australian Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/audhkd)|`audhkd`|Jan 1, 2000|
|[Australian Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/audhuf)|`audhuf`|Jan 1, 2000|
|[Australian Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/audils)|`audils`|Sep 16, 2024|
|[Australian Dollar vs Yen](https://www.dukascopy-node.app/instrument/audjpy)|`audjpy`|Feb 4, 1991|
|[Australian Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/audmxn)|`audmxn`|Jan 1, 2000|
|[Australian Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/audnok)|`audnok`|Jan 1, 2000|
|[Australian Dollar vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/audnzd)|`audnzd`|Dec 21, 1993|
|[Australian Dollar vs Zloty](https://www.dukascopy-node.app/instrument/audpln)|`audpln`|Jan 2, 1990|
|[Australian Dollar vs Saudi Riyal](https://www.dukascopy-node.app/instrument/audsar)|`audsar`|Sep 16, 2024|
|[Australian Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/audsek)|`audsek`|Jan 1, 2000|
|[Australian Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/audsgd)|`audsgd`|Jun 4, 1999|
|[Australian Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/audthb)|`audthb`|Sep 16, 2024|
|[Australian Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/audtry)|`audtry`|Jan 1, 2000|
|[Australian Dollar vs Rand](https://www.dukascopy-node.app/instrument/audzar)|`audzar`|Jan 1, 2000|
|[Canadian Dollar vs UAE Dirham](https://www.dukascopy-node.app/instrument/cadaed)|`cadaed`|Sep 16, 2024|
|[Canadian Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/cadchf)|`cadchf`|Nov 22, 1991|
|[Canadian Dollar vs Chinese Yuan](https://www.dukascopy-node.app/instrument/cadcnh)|`cadcnh`|Sep 16, 2024|
|[Canadian Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/cadczk)|`cadczk`|Jan 1, 2000|
|[Canadian Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/caddkk)|`caddkk`|Jan 1, 2000|
|[Canadian Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/cadhkd)|`cadhkd`|Jun 16, 1999|
|[Canadian Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/cadhuf)|`cadhuf`|Jan 1, 2000|
|[Canadian Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/cadils)|`cadils`|Sep 16, 2024|
|[Canadian Dollar vs Yen](https://www.dukascopy-node.app/instrument/cadjpy)|`cadjpy`|Feb 23, 1993|
|[Canadian Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/cadmxn)|`cadmxn`|Jan 1, 2000|
|[Canadian Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/cadnok)|`cadnok`|Jan 1, 2000|
|[Canadian Dollar vs Zloty](https://www.dukascopy-node.app/instrument/cadpln)|`cadpln`|Nov 10, 1999|
|[Canadian Dollar vs Romanian Leu](https://www.dukascopy-node.app/instrument/cadron)|`cadron`|Sep 16, 2024|
|[Canadian Dollar vs Saudi Riyal](https://www.dukascopy-node.app/instrument/cadsar)|`cadsar`|Sep 16, 2024|
|[Canadian Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/cadsek)|`cadsek`|Jan 1, 2000|
|[Canadian Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/cadsgd)|`cadsgd`|Jan 1, 2000|
|[Canadian Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/cadthb)|`cadthb`|Sep 16, 2024|
|[Canadian Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/cadtry)|`cadtry`|Jan 1, 2000|
|[Canadian Dollar vs Rand](https://www.dukascopy-node.app/instrument/cadzar)|`cadzar`|Jan 1, 2000|
|[Swiss Franc vs UAE Dirham](https://www.dukascopy-node.app/instrument/chfaed)|`chfaed`|Sep 17, 2024|
|[Swiss Franc vs Chinese Yuan](https://www.dukascopy-node.app/instrument/chfcnh)|`chfcnh`|Sep 16, 2024|
|[Swiss Franc vs Czech Koruna](https://www.dukascopy-node.app/instrument/chfczk)|`chfczk`|Jan 1, 2000|
|[Swiss Franc vs Danish Krone](https://www.dukascopy-node.app/instrument/chfdkk)|`chfdkk`|Jan 1, 2000|
|[Swiss Franc vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/chfhkd)|`chfhkd`|Jan 1, 2000|
|[Swiss Franc vs Hungarian Forint](https://www.dukascopy-node.app/instrument/chfhuf)|`chfhuf`|Jan 1, 2000|
|[Swiss Franc vs Israeli Shekel](https://www.dukascopy-node.app/instrument/chfils)|`chfils`|Sep 16, 2024|
|[Swiss Franc vs Yen](https://www.dukascopy-node.app/instrument/chfjpy)|`chfjpy`|Dec 3, 1990|
|[Swiss Franc vs Mexican Peso](https://www.dukascopy-node.app/instrument/chfmxn)|`chfmxn`|Jan 1, 2000|
|[Swiss Franc vs Norwegian Krone](https://www.dukascopy-node.app/instrument/chfnok)|`chfnok`|Jan 1, 2000|
|[Swiss Franc vs Zloty](https://www.dukascopy-node.app/instrument/chfpln)|`chfpln`|Jan 1, 2000|
|[Swiss Franc vs Romanian Leu](https://www.dukascopy-node.app/instrument/chfron)|`chfron`|Sep 16, 2024|
|[Swiss Franc vs Saudi Riyal](https://www.dukascopy-node.app/instrument/chfsar)|`chfsar`|Sep 16, 2024|
|[Swiss Franc vs Swedish Krona](https://www.dukascopy-node.app/instrument/chfsek)|`chfsek`|Jan 1, 2000|
|[Swiss Franc vs Singapore Dollar](https://www.dukascopy-node.app/instrument/chfsgd)|`chfsgd`|Apr 29, 1998|
|[Swiss Franc vs Thai Baht](https://www.dukascopy-node.app/instrument/chfthb)|`chfthb`|Sep 16, 2024|
|[Swiss Franc vs Turkish Lira](https://www.dukascopy-node.app/instrument/chftry)|`chftry`|Jan 1, 2000|
|[Swiss Franc vs Rand](https://www.dukascopy-node.app/instrument/chfzar)|`chfzar`|Jan 1, 2000|
|[Chinese Yuan vs Czech Koruna](https://www.dukascopy-node.app/instrument/cnhczk)|`cnhczk`|Sep 16, 2024|
|[Chinese Yuan vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/cnhhkd)|`cnhhkd`|Sep 16, 2024|
|[Chinese Yuan vs Hungarian Forint](https://www.dukascopy-node.app/instrument/cnhhuf)|`cnhhuf`|Sep 16, 2024|
|[Chinese Yuan vs Yen](https://www.dukascopy-node.app/instrument/cnhjpy)|`cnhjpy`|Jan 1, 2000|
|[Chinese Yuan vs Mexican Peso](https://www.dukascopy-node.app/instrument/cnhmxn)|`cnhmxn`|Sep 16, 2024|
|[Chinese Yuan vs Thai Baht](https://www.dukascopy-node.app/instrument/cnhthb)|`cnhthb`|Sep 16, 2024|
|[Chinese Yuan vs Turkish Lira](https://www.dukascopy-node.app/instrument/cnhtry)|`cnhtry`|Sep 16, 2024|
|[Chinese Yuan vs Rand](https://www.dukascopy-node.app/instrument/cnhzar)|`cnhzar`|Sep 16, 2024|
|[Czech Koruna vs Hungarian Forint](https://www.dukascopy-node.app/instrument/czkhuf)|`czkhuf`|Jan 1, 2000|
|[Czech Koruna vs Yen](https://www.dukascopy-node.app/instrument/czkjpy)|`czkjpy`|Jan 1, 2000|
|[Czech Koruna vs Thai Baht](https://www.dukascopy-node.app/instrument/czkthb)|`czkthb`|Sep 16, 2024|
|[Czech Koruna vs Turkish Lira](https://www.dukascopy-node.app/instrument/czktry)|`czktry`|Jan 1, 2000|
|[Danish Krone vs UAE Dirham](https://www.dukascopy-node.app/instrument/dkkaed)|`dkkaed`|Sep 16, 2024|
|[Danish Krone vs Chinese Yuan](https://www.dukascopy-node.app/instrument/dkkcnh)|`dkkcnh`|Sep 16, 2024|
|[Danish Krone vs Czech Koruna](https://www.dukascopy-node.app/instrument/dkkczk)|`dkkczk`|Jan 1, 2000|
|[Danish Krone vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/dkkhkd)|`dkkhkd`|Jan 1, 2000|
|[Danish Krone vs Hungarian Forint](https://www.dukascopy-node.app/instrument/dkkhuf)|`dkkhuf`|Jan 1, 2000|
|[Danish Krone vs Israeli Shekel](https://www.dukascopy-node.app/instrument/dkkils)|`dkkils`|Sep 16, 2024|
|[Danish Krone vs Yen](https://www.dukascopy-node.app/instrument/dkkjpy)|`dkkjpy`|Jan 1, 2000|
|[Danish Krone vs Mexican Peso](https://www.dukascopy-node.app/instrument/dkkmxn)|`dkkmxn`|Jan 1, 2000|
|[Danish Krone vs Romanian Leu](https://www.dukascopy-node.app/instrument/dkkron)|`dkkron`|Sep 16, 2024|
|[Danish Krone vs Saudi Riyal](https://www.dukascopy-node.app/instrument/dkksar)|`dkksar`|Sep 16, 2024|
|[Danish Krone vs Thai Baht](https://www.dukascopy-node.app/instrument/dkkthb)|`dkkthb`|Sep 16, 2024|
|[Danish Krone vs Turkish Lira](https://www.dukascopy-node.app/instrument/dkktry)|`dkktry`|Jan 1, 2000|
|[Danish Krone vs Rand](https://www.dukascopy-node.app/instrument/dkkzar)|`dkkzar`|Jan 1, 2000|
|[Euro vs UAE Dirham](https://www.dukascopy-node.app/instrument/euraed)|`euraed`|Sep 16, 2024|
|[Euro vs Australian Dollar](https://www.dukascopy-node.app/instrument/euraud)|`euraud`|Oct 9, 1991|
|[Euro vs Canadian Dollar](https://www.dukascopy-node.app/instrument/eurcad)|`eurcad`|Oct 9, 1991|
|[Euro vs Swiss Franc](https://www.dukascopy-node.app/instrument/eurchf)|`eurchf`|Jan 14, 1991|
|[Euro vs Chinese Yuan](https://www.dukascopy-node.app/instrument/eurcnh)|`eurcnh`|Jan 1, 2000|
|[Euro vs Czech Koruna](https://www.dukascopy-node.app/instrument/eurczk)|`eurczk`|Jan 1, 2000|
|[Euro vs Danish Krone](https://www.dukascopy-node.app/instrument/eurdkk)|`eurdkk`|Feb 26, 1993|
|[Euro vs Pound Sterling](https://www.dukascopy-node.app/instrument/eurgbp)|`eurgbp`|Apr 14, 1995|
|[Euro vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/eurhkd)|`eurhkd`|Jun 3, 1999|
|[Euro vs Hungarian Forint](https://www.dukascopy-node.app/instrument/eurhuf)|`eurhuf`|Jun 30, 1999|
|[Euro vs Israeli Shekel](https://www.dukascopy-node.app/instrument/eurils)|`eurils`|Sep 16, 2024|
|[Euro vs Yen](https://www.dukascopy-node.app/instrument/eurjpy)|`eurjpy`|Jun 28, 1989|
|[Euro vs Mexican Peso](https://www.dukascopy-node.app/instrument/eurmxn)|`eurmxn`|Mar 22, 1999|
|[Euro vs Norwegian Krone](https://www.dukascopy-node.app/instrument/eurnok)|`eurnok`|Jun 3, 1991|
|[Euro vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/eurnzd)|`eurnzd`|Jan 5, 1999|
|[Euro vs Zloty](https://www.dukascopy-node.app/instrument/eurpln)|`eurpln`|Jun 3, 1999|
|[Euro vs Romanian Leu](https://www.dukascopy-node.app/instrument/eurron)|`eurron`|Jan 1, 2000|
|[Euro vs Saudi Riyal](https://www.dukascopy-node.app/instrument/eursar)|`eursar`|Sep 16, 2024|
|[Euro vs Swedish Krona](https://www.dukascopy-node.app/instrument/eursek)|`eursek`|Nov 20, 1992|
|[Euro vs Singapore Dollar](https://www.dukascopy-node.app/instrument/eursgd)|`eursgd`|Apr 29, 1998|
|[Euro vs Thai Baht](https://www.dukascopy-node.app/instrument/eurthb)|`eurthb`|Jan 1, 2000|
|[Euro vs Turkish Lira](https://www.dukascopy-node.app/instrument/eurtry)|`eurtry`|Jan 3, 2005|
|[Euro vs Rand](https://www.dukascopy-node.app/instrument/eurzar)|`eurzar`|Jun 7, 1999|
|[Pound Sterling vs UAE Dirham](https://www.dukascopy-node.app/instrument/gbpaed)|`gbpaed`|Sep 16, 2024|
|[Pound Sterling vs Australian Dollar](https://www.dukascopy-node.app/instrument/gbpaud)|`gbpaud`|Jan 30, 1991|
|[Pound Sterling vs Canadian Dollar](https://www.dukascopy-node.app/instrument/gbpcad)|`gbpcad`|Oct 25, 1990|
|[Pound Sterling vs Swiss Franc](https://www.dukascopy-node.app/instrument/gbpchf)|`gbpchf`|Sep 6, 1990|
|[Pound Sterling vs Chinese Yuan](https://www.dukascopy-node.app/instrument/gbpcnh)|`gbpcnh`|Jan 1, 2000|
|[Pound Sterling vs Czech Koruna](https://www.dukascopy-node.app/instrument/gbpczk)|`gbpczk`|Jan 1, 2000|
|[Pound Sterling vs Danish Krone](https://www.dukascopy-node.app/instrument/gbpdkk)|`gbpdkk`|Jan 1, 2000|
|[Pound Sterling vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/gbphkd)|`gbphkd`|Jan 1, 2000|
|[Pound Sterling vs Hungarian Forint](https://www.dukascopy-node.app/instrument/gbphuf)|`gbphuf`|Jan 1, 2000|
|[Pound Sterling vs Israeli Shekel](https://www.dukascopy-node.app/instrument/gbpils)|`gbpils`|Sep 16, 2024|
|[Pound Sterling vs Yen](https://www.dukascopy-node.app/instrument/gbpjpy)|`gbpjpy`|Jan 2, 1991|
|[Pound Sterling vs Mexican Peso](https://www.dukascopy-node.app/instrument/gbpmxn)|`gbpmxn`|Jan 1, 2000|
|[Pound Sterling vs Norwegian Krone](https://www.dukascopy-node.app/instrument/gbpnok)|`gbpnok`|Jan 1, 2000|
|[Pound Sterling vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/gbpnzd)|`gbpnzd`|Jan 20, 1997|
|[Pound Sterling vs Zloty](https://www.dukascopy-node.app/instrument/gbppln)|`gbppln`|Aug 22, 1990|
|[Pound Sterling vs Romanian Leu](https://www.dukascopy-node.app/instrument/gbpron)|`gbpron`|Sep 16, 2024|
|[Pound Sterling vs Saudi Riyal](https://www.dukascopy-node.app/instrument/gbpsar)|`gbpsar`|Sep 17, 2024|
|[Pound Sterling vs Swedish Krona](https://www.dukascopy-node.app/instrument/gbpsek)|`gbpsek`|Jan 1, 2000|
|[Pound Sterling vs Singapore Dollar](https://www.dukascopy-node.app/instrument/gbpsgd)|`gbpsgd`|Jan 1, 2000|
|[Pound Sterling vs Thai Baht](https://www.dukascopy-node.app/instrument/gbpthb)|`gbpthb`|Sep 17, 2024|
|[Pound Sterling vs Turkish Lira](https://www.dukascopy-node.app/instrument/gbptry)|`gbptry`|Jan 1, 2000|
|[Pound Sterling vs Rand](https://www.dukascopy-node.app/instrument/gbpzar)|`gbpzar`|Jan 1, 2000|
|[Hong Kong Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/hkdczk)|`hkdczk`|Jan 1, 2000|
|[Hong Kong Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/hkdhuf)|`hkdhuf`|Jan 1, 2000|
|[Hong Kong Dollar vs Yen](https://www.dukascopy-node.app/instrument/hkdjpy)|`hkdjpy`|Nov 4, 1998|
|[Hong Kong Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/hkdmxn)|`hkdmxn`|Jan 1, 2000|
|[Hong Kong Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/hkdthb)|`hkdthb`|Sep 17, 2024|
|[Hong Kong Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/hkdtry)|`hkdtry`|Jan 1, 2000|
|[Hong Kong Dollar vs Rand](https://www.dukascopy-node.app/instrument/hkdzar)|`hkdzar`|Jan 1, 2000|
|[Israeli Shekel vs UAE Dirham](https://www.dukascopy-node.app/instrument/ilsaed)|`ilsaed`|Sep 17, 2024|
|[Israeli Shekel vs Chinese Yuan](https://www.dukascopy-node.app/instrument/ilscnh)|`ilscnh`|Sep 17, 2024|
|[Israeli Shekel vs Czech Koruna](https://www.dukascopy-node.app/instrument/ilsczk)|`ilsczk`|Sep 17, 2024|
|[Israeli Shekel vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/ilshkd)|`ilshkd`|Sep 17, 2024|
|[Israeli Shekel vs Hungarian Forint](https://www.dukascopy-node.app/instrument/ilshuf)|`ilshuf`|Sep 17, 2024|
|[Israeli Shekel vs Yen](https://www.dukascopy-node.app/instrument/ilsjpy)|`ilsjpy`|Sep 17, 2024|
|[Israeli Shekel vs Mexican Peso](https://www.dukascopy-node.app/instrument/ilsmxn)|`ilsmxn`|Sep 17, 2024|
|[Israeli Shekel vs Romanian Leu](https://www.dukascopy-node.app/instrument/ilsron)|`ilsron`|Sep 17, 2024|
|[Israeli Shekel vs Saudi Riyal](https://www.dukascopy-node.app/instrument/ilssar)|`ilssar`|Sep 17, 2024|
|[Israeli Shekel vs Thai Baht](https://www.dukascopy-node.app/instrument/ilsthb)|`ilsthb`|Sep 17, 2024|
|[Israeli Shekel vs Turkish Lira](https://www.dukascopy-node.app/instrument/ilstry)|`ilstry`|Sep 17, 2024|
|[Israeli Shekel vs Rand](https://www.dukascopy-node.app/instrument/ilszar)|`ilszar`|Sep 17, 2024|
|[Yen vs Hungarian Forint](https://www.dukascopy-node.app/instrument/jpyhuf)|`jpyhuf`|Sep 17, 2024|
|[Mexican Peso vs Czech Koruna](https://www.dukascopy-node.app/instrument/mxnczk)|`mxnczk`|Jan 1, 2000|
|[Mexican Peso vs Hungarian Forint](https://www.dukascopy-node.app/instrument/mxnhuf)|`mxnhuf`|Jan 1, 2000|
|[Mexican Peso vs Yen](https://www.dukascopy-node.app/instrument/mxnjpy)|`mxnjpy`|Jul 23, 1998|
|[Mexican Peso vs Thai Baht](https://www.dukascopy-node.app/instrument/mxnthb)|`mxnthb`|Sep 17, 2024|
|[Mexican Peso vs Turkish Lira](https://www.dukascopy-node.app/instrument/mxntry)|`mxntry`|Jan 1, 2000|
|[Norwegian Krone vs UAE Dirham](https://www.dukascopy-node.app/instrument/nokaed)|`nokaed`|Sep 17, 2024|
|[Norwegian Krone vs Chinese Yuan](https://www.dukascopy-node.app/instrument/nokcnh)|`nokcnh`|Sep 17, 2024|
|[Norwegian Krone vs Czech Koruna](https://www.dukascopy-node.app/instrument/nokczk)|`nokczk`|Jan 1, 2000|
|[Norwegian Krone vs Danish Krone](https://www.dukascopy-node.app/instrument/nokdkk)|`nokdkk`|Jan 1, 2000|
|[Norwegian Krone vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/nokhkd)|`nokhkd`|Jan 1, 2000|
|[Norwegian Krone vs Hungarian Forint](https://www.dukascopy-node.app/instrument/nokhuf)|`nokhuf`|Jan 1, 2000|
|[Norwegian Krone vs Israeli Shekel](https://www.dukascopy-node.app/instrument/nokils)|`nokils`|Sep 17, 2024|
|[Norwegian Krone vs Yen](https://www.dukascopy-node.app/instrument/nokjpy)|`nokjpy`|Jan 1, 2000|
|[Norwegian Krone vs Mexican Peso](https://www.dukascopy-node.app/instrument/nokmxn)|`nokmxn`|Jan 1, 2000|
|[Norwegian Krone vs Romanian Leu](https://www.dukascopy-node.app/instrument/nokron)|`nokron`|Sep 17, 2024|
|[Norwegian Krone vs Saudi Riyal](https://www.dukascopy-node.app/instrument/noksar)|`noksar`|Sep 17, 2024|
|[Norwegian Krone vs Swedish Krona](https://www.dukascopy-node.app/instrument/noksek)|`noksek`|Jan 1, 2000|
|[Norwegian Krone vs Thai Baht](https://www.dukascopy-node.app/instrument/nokthb)|`nokthb`|Sep 17, 2024|
|[Norwegian Krone vs Turkish Lira](https://www.dukascopy-node.app/instrument/noktry)|`noktry`|Jan 1, 2000|
|[Norwegian Krone vs Rand](https://www.dukascopy-node.app/instrument/nokzar)|`nokzar`|Jan 1, 2000|
|[New Zealand Dollar vs UAE Dirham](https://www.dukascopy-node.app/instrument/nzdaed)|`nzdaed`|Sep 17, 2024|
|[New Zealand Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/nzdcad)|`nzdcad`|Mar 25, 2002|
|[New Zealand Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/nzdchf)|`nzdchf`|Jan 7, 1999|
|[New Zealand Dollar vs Chinese Yuan](https://www.dukascopy-node.app/instrument/nzdcnh)|`nzdcnh`|Jan 1, 2000|
|[New Zealand Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/nzdczk)|`nzdczk`|Jan 1, 2000|
|[New Zealand Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/nzddkk)|`nzddkk`|Jan 1, 2000|
|[New Zealand Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/nzdhkd)|`nzdhkd`|Jan 1, 2000|
|[New Zealand Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/nzdhuf)|`nzdhuf`|Jan 1, 2000|
|[New Zealand Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/nzdils)|`nzdils`|Sep 17, 2024|
|[New Zealand Dollar vs Yen](https://www.dukascopy-node.app/instrument/nzdjpy)|`nzdjpy`|Oct 1, 1998|
|[New Zealand Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/nzdmxn)|`nzdmxn`|Jan 1, 2000|
|[New Zealand Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/nzdnok)|`nzdnok`|Jan 1, 2000|
|[New Zealand Dollar vs Zloty](https://www.dukascopy-node.app/instrument/nzdpln)|`nzdpln`|Jan 1, 2000|
|[New Zealand Dollar vs Romanian Leu](https://www.dukascopy-node.app/instrument/nzdron)|`nzdron`|Sep 17, 2024|
|[New Zealand Dollar vs Saudi Riyal](https://www.dukascopy-node.app/instrument/nzdsar)|`nzdsar`|Sep 17, 2024|
|[New Zealand Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/nzdsek)|`nzdsek`|Jan 1, 2000|
|[New Zealand Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/nzdsgd)|`nzdsgd`|Jun 3, 1999|
|[New Zealand Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/nzdthb)|`nzdthb`|Sep 17, 2024|
|[New Zealand Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/nzdtry)|`nzdtry`|Jan 1, 2000|
|[New Zealand Dollar vs Rand](https://www.dukascopy-node.app/instrument/nzdzar)|`nzdzar`|Jan 1, 2000|
|[Zloty vs UAE Dirham](https://www.dukascopy-node.app/instrument/plnaed)|`plnaed`|Sep 17, 2024|
|[Zloty vs Chinese Yuan](https://www.dukascopy-node.app/instrument/plncnh)|`plncnh`|Sep 17, 2024|
|[Zloty vs Czech Koruna](https://www.dukascopy-node.app/instrument/plnczk)|`plnczk`|Jan 1, 2000|
|[Zloty vs Danish Krone](https://www.dukascopy-node.app/instrument/plndkk)|`plndkk`|Jan 1, 2000|
|[Zloty vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/plnhkd)|`plnhkd`|Jan 1, 2000|
|[Zloty vs Hungarian Forint](https://www.dukascopy-node.app/instrument/plnhuf)|`plnhuf`|Jan 1, 2000|
|[Zloty vs Israeli Shekel](https://www.dukascopy-node.app/instrument/plnils)|`plnils`|Sep 17, 2024|
|[Zloty vs Yen](https://www.dukascopy-node.app/instrument/plnjpy)|`plnjpy`|Jan 1, 2000|
|[Zloty vs Mexican Peso](https://www.dukascopy-node.app/instrument/plnmxn)|`plnmxn`|Jan 1, 2000|
|[Zloty vs Norwegian Krone](https://www.dukascopy-node.app/instrument/plnnok)|`plnnok`|Jan 1, 2000|
|[Zloty vs Romanian Leu](https://www.dukascopy-node.app/instrument/plnron)|`plnron`|Sep 17, 2024|
|[Zloty vs Saudi Riyal](https://www.dukascopy-node.app/instrument/plnsar)|`plnsar`|Sep 17, 2024|
|[Zloty vs Swedish Krona](https://www.dukascopy-node.app/instrument/plnsek)|`plnsek`|Jan 1, 2000|
|[Zloty vs Thai Baht](https://www.dukascopy-node.app/instrument/plnthb)|`plnthb`|Sep 17, 2024|
|[Zloty vs Turkish Lira](https://www.dukascopy-node.app/instrument/plntry)|`plntry`|Jan 1, 2000|
|[Zloty vs Rand](https://www.dukascopy-node.app/instrument/plnzar)|`plnzar`|Jan 1, 2000|
|[Romanian Leu vs Chinese Yuan](https://www.dukascopy-node.app/instrument/roncnh)|`roncnh`|Sep 17, 2024|
|[Romanian Leu vs Czech Koruna](https://www.dukascopy-node.app/instrument/ronczk)|`ronczk`|Sep 17, 2024|
|[Romanian Leu vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/ronhkd)|`ronhkd`|Sep 17, 2024|
|[Romanian Leu vs Hungarian Forint](https://www.dukascopy-node.app/instrument/ronhuf)|`ronhuf`|Sep 17, 2024|
|[Romanian Leu vs Yen](https://www.dukascopy-node.app/instrument/ronjpy)|`ronjpy`|Sep 17, 2024|
|[Romanian Leu vs Mexican Peso](https://www.dukascopy-node.app/instrument/ronmxn)|`ronmxn`|Sep 17, 2024|
|[Romanian Leu vs Thai Baht](https://www.dukascopy-node.app/instrument/ronthb)|`ronthb`|Sep 17, 2024|
|[Romanian Leu vs Turkish Lira](https://www.dukascopy-node.app/instrument/rontry)|`rontry`|Sep 17, 2024|
|[Romanian Leu vs Rand](https://www.dukascopy-node.app/instrument/ronzar)|`ronzar`|Sep 17, 2024|
|[Saudi Riyal vs Chinese Yuan](https://www.dukascopy-node.app/instrument/sarcnh)|`sarcnh`|Sep 17, 2024|
|[Saudi Riyal vs Czech Koruna](https://www.dukascopy-node.app/instrument/sarczk)|`sarczk`|Sep 17, 2024|
|[Saudi Riyal vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/sarhkd)|`sarhkd`|Sep 17, 2024|
|[Saudi Riyal vs Hungarian Forint](https://www.dukascopy-node.app/instrument/sarhuf)|`sarhuf`|Sep 17, 2024|
|[Saudi Riyal vs Yen](https://www.dukascopy-node.app/instrument/sarjpy)|`sarjpy`|Sep 17, 2024|
|[Saudi Riyal vs Mexican Peso](https://www.dukascopy-node.app/instrument/sarmxn)|`sarmxn`|Sep 17, 2024|
|[Saudi Riyal vs Romanian Leu](https://www.dukascopy-node.app/instrument/sarron)|`sarron`|Sep 17, 2024|
|[Saudi Riyal vs Thai Baht](https://www.dukascopy-node.app/instrument/sarthb)|`sarthb`|Sep 17, 2024|
|[Saudi Riyal vs Turkish Lira](https://www.dukascopy-node.app/instrument/sartry)|`sartry`|Sep 17, 2024|
|[Saudi Riyal vs Rand](https://www.dukascopy-node.app/instrument/sarzar)|`sarzar`|Sep 17, 2024|
|[Swedish Krona vs UAE Dirham](https://www.dukascopy-node.app/instrument/sekaed)|`sekaed`|Sep 17, 2024|
|[Swedish Krona vs Chinese Yuan](https://www.dukascopy-node.app/instrument/sekcnh)|`sekcnh`|Sep 17, 2024|
|[Swedish Krona vs Czech Koruna](https://www.dukascopy-node.app/instrument/sekczk)|`sekczk`|Jan 1, 2000|
|[Swedish Krona vs Danish Krone](https://www.dukascopy-node.app/instrument/sekdkk)|`sekdkk`|Jan 1, 2000|
|[Swedish Krona vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/sekhkd)|`sekhkd`|Jan 1, 2000|
|[Swedish Krona vs Hungarian Forint](https://www.dukascopy-node.app/instrument/sekhuf)|`sekhuf`|Jan 1, 2000|
|[Swedish Krona vs Israeli Shekel](https://www.dukascopy-node.app/instrument/sekils)|`sekils`|Sep 17, 2024|
|[Swedish Krona vs Yen](https://www.dukascopy-node.app/instrument/sekjpy)|`sekjpy`|Jan 1, 2000|
|[Swedish Krona vs Mexican Peso](https://www.dukascopy-node.app/instrument/sekmxn)|`sekmxn`|Jan 1, 2000|
|[Swedish Krona vs Romanian Leu](https://www.dukascopy-node.app/instrument/sekron)|`sekron`|Sep 17, 2024|
|[Swedish Krona vs Saudi Riyal](https://www.dukascopy-node.app/instrument/seksar)|`seksar`|Sep 17, 2024|
|[Swedish Krona vs Thai Baht](https://www.dukascopy-node.app/instrument/sekthb)|`sekthb`|Sep 17, 2024|
|[Swedish Krona vs Turkish Lira](https://www.dukascopy-node.app/instrument/sektry)|`sektry`|Jan 1, 2000|
|[Swedish Krona vs Rand](https://www.dukascopy-node.app/instrument/sekzar)|`sekzar`|Jan 1, 2000|
|[Singapore Dollar vs UAE Dirham](https://www.dukascopy-node.app/instrument/sgdaed)|`sgdaed`|Sep 17, 2024|
|[Singapore Dollar vs Chinese Yuan](https://www.dukascopy-node.app/instrument/sgdcnh)|`sgdcnh`|Sep 17, 2024|
|[Singapore Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/sgdczk)|`sgdczk`|Jan 1, 2000|
|[Singapore Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/sgddkk)|`sgddkk`|Jan 1, 2000|
|[Singapore Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/sgdhkd)|`sgdhkd`|Jan 1, 2000|
|[Singapore Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/sgdhuf)|`sgdhuf`|Jan 1, 2000|
|[Singapore Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/sgdils)|`sgdils`|Sep 17, 2024|
|[Singapore Dollar vs Yen](https://www.dukascopy-node.app/instrument/sgdjpy)|`sgdjpy`|May 31, 1999|
|[Singapore Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/sgdmxn)|`sgdmxn`|Jan 1, 2000|
|[Singapore Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/sgdnok)|`sgdnok`|Jan 1, 2000|
|[Singapore Dollar vs Zloty](https://www.dukascopy-node.app/instrument/sgdpln)|`sgdpln`|Jan 1, 2000|
|[Singapore Dollar vs Romanian Leu](https://www.dukascopy-node.app/instrument/sgdron)|`sgdron`|Sep 17, 2024|
|[Singapore Dollar vs Saudi Riyal](https://www.dukascopy-node.app/instrument/sgdsar)|`sgdsar`|Sep 17, 2024|
|[Singapore Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/sgdsek)|`sgdsek`|Jan 1, 2000|
|[Singapore Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/sgdthb)|`sgdthb`|Sep 17, 2024|
|[Singapore Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/sgdtry)|`sgdtry`|Jan 1, 2000|
|[Singapore Dollar vs Rand](https://www.dukascopy-node.app/instrument/sgdzar)|`sgdzar`|Jan 1, 2000|
|[Thai Baht vs Hungarian Forint](https://www.dukascopy-node.app/instrument/thbhuf)|`thbhuf`|Sep 17, 2024|
|[Thai Baht vs Yen](https://www.dukascopy-node.app/instrument/thbjpy)|`thbjpy`|Sep 17, 2024|
|[Turkish Lira vs Hungarian Forint](https://www.dukascopy-node.app/instrument/tryhuf)|`tryhuf`|Jan 1, 2000|
|[Turkish Lira vs Yen](https://www.dukascopy-node.app/instrument/tryjpy)|`tryjpy`|May 9, 2010|
|[Turkish Lira vs Thai Baht](https://www.dukascopy-node.app/instrument/trythb)|`trythb`|Sep 16, 2024|
|[US Dollar vs Chinese Yuan](https://www.dukascopy-node.app/instrument/usdcnh)|`usdcnh`|Jan 2, 2012|
|[US Dollar vs Czech Koruna](https://www.dukascopy-node.app/instrument/usdczk)|`usdczk`|Jan 1, 2000|
|[US Dollar vs Danish Krone](https://www.dukascopy-node.app/instrument/usddkk)|`usddkk`|Apr 12, 1990|
|[US Dollar vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/usdhkd)|`usdhkd`|Mar 17, 1986|
|[US Dollar vs Hungarian Forint](https://www.dukascopy-node.app/instrument/usdhuf)|`usdhuf`|Jul 14, 1998|
|[US Dollar vs Israeli Shekel](https://www.dukascopy-node.app/instrument/usdils)|`usdils`|Jan 1, 2000|
|[US Dollar vs Mexican Peso](https://www.dukascopy-node.app/instrument/usdmxn)|`usdmxn`|Mar 31, 1995|
|[US Dollar vs Norwegian Krone](https://www.dukascopy-node.app/instrument/usdnok)|`usdnok`|Mar 27, 1991|
|[US Dollar vs Zloty](https://www.dukascopy-node.app/instrument/usdpln)|`usdpln`|Mar 22, 1999|
|[US Dollar vs Romanian Leu](https://www.dukascopy-node.app/instrument/usdron)|`usdron`|Jan 1, 2000|
|[US Dollar vs Swedish Krona](https://www.dukascopy-node.app/instrument/usdsek)|`usdsek`|Jul 16, 1991|
|[US Dollar vs Singapore Dollar](https://www.dukascopy-node.app/instrument/usdsgd)|`usdsgd`|Jan 21, 1991|
|[US Dollar vs Thai Baht](https://www.dukascopy-node.app/instrument/usdthb)|`usdthb`|Jan 1, 2000|
|[US Dollar vs Turkish Lira](https://www.dukascopy-node.app/instrument/usdtry)|`usdtry`|Oct 18, 2001|
|[US Dollar vs Rand](https://www.dukascopy-node.app/instrument/usdzar)|`usdzar`|Nov 25, 1991|
|[Rand vs Czech Koruna](https://www.dukascopy-node.app/instrument/zarczk)|`zarczk`|Jan 1, 2000|
|[Rand vs Hungarian Forint](https://www.dukascopy-node.app/instrument/zarhuf)|`zarhuf`|Jan 1, 2000|
|[Rand vs Yen](https://www.dukascopy-node.app/instrument/zarjpy)|`zarjpy`|Jun 7, 1999|
|[Rand vs Mexican Peso](https://www.dukascopy-node.app/instrument/zarmxn)|`zarmxn`|Jan 1, 2000|
|[Rand vs Thai Baht](https://www.dukascopy-node.app/instrument/zarthb)|`zarthb`|Sep 17, 2024|
|[Rand vs Turkish Lira](https://www.dukascopy-node.app/instrument/zartry)|`zartry`|Jan 1, 2000|
<h3 id="fx_majors">Forex major currencies 💶</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Australian Dollar vs US Dollar](https://www.dukascopy-node.app/instrument/audusd)|`audusd`|Jan 4, 1993|
|[Euro vs US Dollar](https://www.dukascopy-node.app/instrument/eurusd)|`eurusd`|Mar 1, 1973|
|[Pound Sterling vs US Dollar](https://www.dukascopy-node.app/instrument/gbpusd)|`gbpusd`|Feb 10, 1986|
|[New Zealand Dollar vs US Dollar](https://www.dukascopy-node.app/instrument/nzdusd)|`nzdusd`|Jul 8, 1991|
|[US Dollar vs Canadian Dollar](https://www.dukascopy-node.app/instrument/usdcad)|`usdcad`|Feb 10, 1986|
|[US Dollar vs Swiss Franc](https://www.dukascopy-node.app/instrument/usdchf)|`usdchf`|Feb 10, 1986|
|[US Dollar vs Yen](https://www.dukascopy-node.app/instrument/usdjpy)|`usdjpy`|Feb 10, 1986|
<h3 id="fx_metals">Forex metals 🥇</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Silver vs UAE Dirham](https://www.dukascopy-node.app/instrument/xagaed)|`xagaed`|Sep 17, 2024|
|[Silver vs Australian Dollar](https://www.dukascopy-node.app/instrument/xagaud)|`xagaud`|Jan 1, 2000|
|[Silver vs Canadian Dollar](https://www.dukascopy-node.app/instrument/xagcad)|`xagcad`|Jan 1, 2000|
|[Silver vs Swiss Franc](https://www.dukascopy-node.app/instrument/xagchf)|`xagchf`|Jan 1, 2000|
|[Silver vs Chinese Yuan](https://www.dukascopy-node.app/instrument/xagcnh)|`xagcnh`|Sep 17, 2024|
|[Silver vs Czech Koruna](https://www.dukascopy-node.app/instrument/xagczk)|`xagczk`|Jan 1, 2000|
|[Silver vs Danish Krone](https://www.dukascopy-node.app/instrument/xagdkk)|`xagdkk`|Jan 1, 2000|
|[Silver vs Euro](https://www.dukascopy-node.app/instrument/xageur)|`xageur`|Jan 2, 1985|
|[Silver vs Pound Sterling](https://www.dukascopy-node.app/instrument/xaggbp)|`xaggbp`|Oct 1, 1986|
|[Silver vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/xaghkd)|`xaghkd`|Jan 2, 1990|
|[Silver vs Hungarian Forint](https://www.dukascopy-node.app/instrument/xaghuf)|`xaghuf`|Jan 1, 2000|
|[Silver vs Israeli Shekel](https://www.dukascopy-node.app/instrument/xagils)|`xagils`|Sep 17, 2024|
|[Silver vs Yen](https://www.dukascopy-node.app/instrument/xagjpy)|`xagjpy`|Sep 17, 2024|
|[Silver vs Mexican Peso](https://www.dukascopy-node.app/instrument/xagmxn)|`xagmxn`|Nov 7, 1990|
|[Silver vs Norwegian Krone](https://www.dukascopy-node.app/instrument/xagnok)|`xagnok`|Jan 1, 2000|
|[Silver vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/xagnzd)|`xagnzd`|Jan 1, 2000|
|[Silver vs Zloty](https://www.dukascopy-node.app/instrument/xagpln)|`xagpln`|Jan 1, 2000|
|[Silver vs Romanian Leu](https://www.dukascopy-node.app/instrument/xagron)|`xagron`|Sep 17, 2024|
|[Silver vs Saudi Riyal](https://www.dukascopy-node.app/instrument/xagsar)|`xagsar`|Sep 17, 2024|
|[Silver vs Swedish Krona](https://www.dukascopy-node.app/instrument/xagsek)|`xagsek`|Apr 1, 1977|
|[Silver vs Singapore Dollar](https://www.dukascopy-node.app/instrument/xagsgd)|`xagsgd`|Jan 2, 1980|
|[Silver vs Thai Baht](https://www.dukascopy-node.app/instrument/xagthb)|`xagthb`|Sep 17, 2024|
|[Silver vs Turkish Lira](https://www.dukascopy-node.app/instrument/xagtry)|`xagtry`|Dec 31, 1987|
|[Silver vs US Dollar](https://www.dukascopy-node.app/instrument/xagusd)|`xagusd`|Jun 3, 1999|
|[Silver vs Rand](https://www.dukascopy-node.app/instrument/xagzar)|`xagzar`|Sep 17, 2024|
|[Gold vs UAE Dirham](https://www.dukascopy-node.app/instrument/xauaed)|`xauaed`|Sep 17, 2024|
|[Gold vs Australian Dollar](https://www.dukascopy-node.app/instrument/xauaud)|`xauaud`|Jan 1, 2000|
|[Gold vs Canadian Dollar](https://www.dukascopy-node.app/instrument/xaucad)|`xaucad`|Jan 1, 2000|
|[Gold vs Swiss Franc](https://www.dukascopy-node.app/instrument/xauchf)|`xauchf`|Jan 1, 2000|
|[Gold vs Chinese Yuan](https://www.dukascopy-node.app/instrument/xaucnh)|`xaucnh`|Sep 17, 2024|
|[Gold vs Czech Koruna](https://www.dukascopy-node.app/instrument/xauczk)|`xauczk`|Jan 1, 2000|
|[Gold vs Danish Krone](https://www.dukascopy-node.app/instrument/xaudkk)|`xaudkk`|Jan 1, 2000|
|[Gold vs Euro](https://www.dukascopy-node.app/instrument/xaueur)|`xaueur`|Jan 1, 2000|
|[Gold vs Pound Sterling](https://www.dukascopy-node.app/instrument/xaugbp)|`xaugbp`|Jan 1, 2000|
|[Gold vs Hong Kong Dollar](https://www.dukascopy-node.app/instrument/xauhkd)|`xauhkd`|Jan 1, 2000|
|[Gold vs Hungarian Forint](https://www.dukascopy-node.app/instrument/xauhuf)|`xauhuf`|Jan 1, 2000|
|[Gold vs Israeli Shekel](https://www.dukascopy-node.app/instrument/xauils)|`xauils`|Sep 17, 2024|
|[Gold vs Yen](https://www.dukascopy-node.app/instrument/xaujpy)|`xaujpy`|Sep 17, 2024|
|[Gold vs Mexican Peso](https://www.dukascopy-node.app/instrument/xaumxn)|`xaumxn`|Jan 1, 2000|
|[Gold vs Norwegian Krone](https://www.dukascopy-node.app/instrument/xaunok)|`xaunok`|Jan 1, 2000|
|[Gold vs New Zealand Dollar](https://www.dukascopy-node.app/instrument/xaunzd)|`xaunzd`|Jan 1, 2000|
|[Gold vs Zloty](https://www.dukascopy-node.app/instrument/xaupln)|`xaupln`|Jan 1, 2000|
|[Gold vs Romanian Leu](https://www.dukascopy-node.app/instrument/xauron)|`xauron`|Sep 17, 2024|
|[Gold vs Saudi Riyal](https://www.dukascopy-node.app/instrument/xausar)|`xausar`|Sep 17, 2024|
|[Gold vs Swedish Krona](https://www.dukascopy-node.app/instrument/xausek)|`xausek`|Jan 1, 2000|
|[Gold vs Singapore Dollar](https://www.dukascopy-node.app/instrument/xausgd)|`xausgd`|Jan 1, 2000|
|[Gold vs Thai Baht](https://www.dukascopy-node.app/instrument/xauthb)|`xauthb`|Sep 17, 2024|
|[Gold vs Turkish Lira](https://www.dukascopy-node.app/instrument/xautry)|`xautry`|Jan 1, 2000|
|[Gold vs US Dollar](https://www.dukascopy-node.app/instrument/xauusd)|`xauusd`|Jun 3, 1999|
|[Gold vs Silver](https://www.dukascopy-node.app/instrument/xauxag)|`xauxag`|Sep 17, 2024|
|[Gold vs Rand](https://www.dukascopy-node.app/instrument/xauzar)|`xauzar`|Sep 17, 2024|
<h3 id="idx_africa">Africa 🌍</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[South Africa 40 Index](https://www.dukascopy-node.app/instrument/soaidxzar)|`soaidxzar`|Jan 1, 2000|
<h3 id="idx_america">America 🌎</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[US Dollar Index](https://www.dukascopy-node.app/instrument/dollaridxusd)|`dollaridxusd`|Jan 1, 2000|
|[US 30 Index](https://www.dukascopy-node.app/instrument/usa30idxusd)|`usa30idxusd`|Jan 1, 2013|
|[US 500 Index](https://www.dukascopy-node.app/instrument/usa500idxusd)|`usa500idxusd`|Jan 2, 1980|
|[US 100 Tech Index](https://www.dukascopy-node.app/instrument/usatechidxusd)|`usatechidxusd`|Nov 7, 1990|
|[US Small Cap 2000](https://www.dukascopy-node.app/instrument/ussc2000idxusd)|`ussc2000idxusd`|Jan 1, 2000|
|[Volatility Index](https://www.dukascopy-node.app/instrument/volidxusd)|`volidxusd`|Jan 1, 2000|
<h3 id="idx_asia">Asia 🌏</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Australia 200 Index](https://www.dukascopy-node.app/instrument/ausidxaud)|`ausidxaud`|Jun 1, 2014|
|[China A50 Index](https://www.dukascopy-node.app/instrument/chiidxusd)|`chiidxusd`|Jul 17, 2017|
|[Hong Kong Index](https://www.dukascopy-node.app/instrument/hkgidxhkd)|`hkgidxhkd`|Jun 3, 2013|
|[Japan 200+ Index](https://www.dukascopy-node.app/instrument/jpnidxjpy)|`jpnidxjpy`|Sep 4, 1986|
|[Singapore Blue Chip Cash Index](https://www.dukascopy-node.app/instrument/sgdidxsgd)|`sgdidxsgd`|Dec 1, 2017|
<h3 id="idx_europe">Europe 🇪🇺</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Switzerland 20 Index](https://www.dukascopy-node.app/instrument/cheidxchf)|`cheidxchf`|Jan 3, 1992|
|[Germany 40 Index](https://www.dukascopy-node.app/instrument/deuidxeur)|`deuidxeur`|Jan 1, 2013|
|[Spain 35 Index](https://www.dukascopy-node.app/instrument/espidxeur)|`espidxeur`|Jun 1, 2014|
|[EU Stocks 50 Index](https://www.dukascopy-node.app/instrument/eusidxeur)|`eusidxeur`|Jun 1, 2014|
|[France 40 Index](https://www.dukascopy-node.app/instrument/fraidxeur)|`fraidxeur`|Dec 31, 1987|
|[FTSE 100 Index](https://www.dukascopy-node.app/instrument/gbridxgbp)|`gbridxgbp`|Apr 5, 1988|
|[Italy 40 Index](https://www.dukascopy-node.app/instrument/itaidxeur)|`itaidxeur`|Jul 29, 2016|
|[Netherlands 25 Index](https://www.dukascopy-node.app/instrument/nldidxeur)|`nldidxeur`|Dec 1, 2017|
|[Poland 20 Index](https://www.dukascopy-node.app/instrument/plnidxpln)|`plnidxpln`|Jan 1, 2000|
<h3 id="austria">Austria 🇦🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Erste Group Bank AG](https://www.dukascopy-node.app/instrument/ebsateur)|`ebsateur`|Jan 1, 2000|
|[Raiffeisen Bank International AG](https://www.dukascopy-node.app/instrument/rbiateur)|`rbiateur`|Jan 1, 2000|
|[Voestalpine AG](https://www.dukascopy-node.app/instrument/voeateur)|`voeateur`|Jan 1, 2000|
<h3 id="belgium">Belgium 🇧🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Anheuser-Busch InBev NV](https://www.dukascopy-node.app/instrument/abibeeur)|`abibeeur`|Jan 1, 2000|
|[Ageas](https://www.dukascopy-node.app/instrument/agsbeeur)|`agsbeeur`|Jan 1, 2000|
|[Proximus](https://www.dukascopy-node.app/instrument/belgbeeur)|`belgbeeur`|Jan 1, 2000|
|[KBC Groep NV](https://www.dukascopy-node.app/instrument/kbcbeeur)|`kbcbeeur`|Jan 1, 2000|
|[Solvay SA](https://www.dukascopy-node.app/instrument/solbbeeur)|`solbbeeur`|Jan 1, 2000|
|[UCB SA](https://www.dukascopy-node.app/instrument/ucbbeeur)|`ucbbeeur`|Jan 1, 2000|
|[Umicore SA](https://www.dukascopy-node.app/instrument/umibeeur)|`umibeeur`|Jan 1, 2000|
<h3 id="denmark">Denmark 🇩🇰</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Carlsberg A/S](https://www.dukascopy-node.app/instrument/carlbdkdkk)|`carlbdkdkk`|Jan 1, 2000|
|[Coloplast A/S](https://www.dukascopy-node.app/instrument/colobdkdkk)|`colobdkdkk`|Jan 1, 2000|
|[Danske Bank A/S](https://www.dukascopy-node.app/instrument/danskedkdkk)|`danskedkdkk`|Jan 1, 2000|
|[AP Moeller - Maersk A/S](https://www.dukascopy-node.app/instrument/maerskbdkdkk)|`maerskbdkdkk`|Jan 1, 2000|
|[Novo Nordisk A/S](https://www.dukascopy-node.app/instrument/novobdkdkk)|`novobdkdkk`|Jan 1, 2000|
|[Novozymes A/S](https://www.dukascopy-node.app/instrument/nzymbdkdkk)|`nzymbdkdkk`|Jan 1, 2000|
|[Pandora A/S](https://www.dukascopy-node.app/instrument/pndoradkdkk)|`pndoradkdkk`|Jan 1, 2000|
|[Vestas Wind Systems A/S](https://www.dukascopy-node.app/instrument/vwsdkdkk)|`vwsdkdkk`|Jan 1, 2000|
<h3 id="finland">Finland 🇫🇮</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Elisa OYJ](https://www.dukascopy-node.app/instrument/eli1vfieur)|`eli1vfieur`|Jan 1, 2000|
|[Neste OYJ](https://www.dukascopy-node.app/instrument/nes1vfieur)|`nes1vfieur`|Jan 1, 2000|
|[Nokian Renkaat OYJ](https://www.dukascopy-node.app/instrument/nre1vfieur)|`nre1vfieur`|Jan 1, 2000|
|[Outotec OYJ](https://www.dukascopy-node.app/instrument/ote1vfieur)|`ote1vfieur`|Jan 1, 2000|
|[Outokumpu OYJ](https://www.dukascopy-node.app/instrument/out1vfieur)|`out1vfieur`|Jan 1, 2000|
|[Stora Enso OYJ](https://www.dukascopy-node.app/instrument/stervfieur)|`stervfieur`|Jan 1, 2000|
|[Telia Company AB](https://www.dukascopy-node.app/instrument/tls1vfieur)|`tls1vfieur`|Jan 1, 2000|
<h3 id="france">France 🇫🇷</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Credit Agricole SA](https://www.dukascopy-node.app/instrument/acafreur)|`acafreur`|Jan 3, 2011|
|[Accor SA](https://www.dukascopy-node.app/instrument/acfreur)|`acfreur`|Jan 1, 2000|
|[Air France-KLM](https://www.dukascopy-node.app/instrument/affreur)|`affreur`|Jan 1, 2000|
|[Air Liquide SA](https://www.dukascopy-node.app/instrument/aifreur)|`aifreur`|Jan 1, 2000|
|[Airbus Group SE](https://www.dukascopy-node.app/instrument/airfreur)|`airfreur`|Jan 2, 2014|
|[Alstom SA](https://www.dukascopy-node.app/instrument/alofreur)|`alofreur`|Jan 3, 2011|
|[Danone SA](https://www.dukascopy-node.app/instrument/bnfreur)|`bnfreur`|Jan 3, 2011|
|[BNP Paribas SA](https://www.dukascopy-node.app/instrument/bnpfreur)|`bnpfreur`|Jan 3, 2011|
|[Carrefour SA](https://www.dukascopy-node.app/instrument/cafreur)|`cafreur`|Jan 3, 2011|
|[Cap Gemini SA](https://www.dukascopy-node.app/instrument/capfreur)|`capfreur`|Jan 3, 2011|
|[AXA SA](https://www.dukascopy-node.app/instrument/csfreur)|`csfreur`|Jan 3, 2011|
|[Vinci SA](https://www.dukascopy-node.app/instrument/dgfreur)|`dgfreur`|Jan 3, 2011|
|[DASSAULT SYSTEMES SE](https://www.dukascopy-node.app/instrument/dsyfreur)|`dsyfreur`|Jan 1, 2000|
|[Bouygues SA](https://www.dukascopy-node.app/instrument/enfreur)|`enfreur`|Jan 3, 2011|
|[Engie](https://www.dukascopy-node.app/instrument/engifreur)|`engifreur`|Jan 1, 2000|
|[Total SA](https://www.dukascopy-node.app/instrument/fpfreur)|`fpfreur`|Jan 3, 2011|
|[Valeo SA](https://www.dukascopy-node.app/instrument/frfreur)|`frfreur`|Jan 3, 2011|
|[Societe Generale SA](https://www.dukascopy-node.app/instrument/glefreur)|`glefreur`|Jan 3, 2011|
|[THALES SA](https://www.dukascopy-node.app/instrument/hofreur)|`hofreur`|Jan 1, 2000|
|[Kering](https://www.dukascopy-node.app/instrument/kerfreur)|`kerfreur`|Jan 3, 2011|
|[Klepierre](https://www.dukascopy-node.app/instrument/lifreur)|`lifreur`|Jan 1, 2000|
|[Legrand SA](https://www.dukascopy-node.app/instrument/lrfreur)|`lrfreur`|Jan 3, 2011|
|[LVMH Moet Hennessy Louis Vuitton SA](https://www.dukascopy-node.app/instrument/mcfreur)|`mcfreur`|Jan 3, 2011|
|[Michelin SA](https://www.dukascopy-node.app/instrument/mlfreur)|`mlfreur`|Jun 14, 2022|
|[Orange SA](https://www.dukascopy-node.app/instrument/orafreur)|`orafreur`|Jul 1, 2013|
|[L'Oreal SA](https://www.dukascopy-node.app/instrument/orfreur)|`orfreur`|Jan 3, 2011|
|[Publicis Groupe SA](https://www.dukascopy-node.app/instrument/pubfreur)|`pubfreur`|Jan 3, 2011|
|[Pernod-Ricard SA](https://www.dukascopy-node.app/instrument/rifreur)|`rifreur`|Jan 3, 2011|
|[HERMES INTERNATIONAL](https://www.dukascopy-node.app/instrument/rmsfreur)|`rmsfreur`|Jan 1, 2000|
|[Renault SA](https://www.dukascopy-node.app/instrument/rnofreur)|`rnofreur`|Jan 3, 2011|
|[Safran SA](https://www.dukascopy-node.app/instrument/saffreur)|`saffreur`|Jan 3, 2011|
|[Sanofi](https://www.dukascopy-node.app/instrument/sanfreur)|`sanfreur`|Jan 3, 2011|
|[Cie de St-Gobain](https://www.dukascopy-node.app/instrument/sgofreur)|`sgofreur`|Jan 3, 2011|
|[Schneider Electric SA](https://www.dukascopy-node.app/instrument/sufreur)|`sufreur`|Jan 3, 2011|
|[SODEXO SA](https://www.dukascopy-node.app/instrument/swfreur)|`swfreur`|Jan 1, 2000|
|[Veolia Environnement SA](https://www.dukascopy-node.app/instrument/viefreur)|`viefreur`|Jan 3, 2011|
|[Vivendi SA](https://www.dukascopy-node.app/instrument/vivfreur)|`vivfreur`|Jan 3, 2011|
|[Vallourec SA](https://www.dukascopy-node.app/instrument/vkfreur)|`vkfreur`|Jan 1, 2000|
<h3 id="germany">Germany 🇩🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Adidas AG](https://www.dukascopy-node.app/instrument/adsdeeur)|`adsdeeur`|Jan 3, 2011|
|[Allianz SE](https://www.dukascopy-node.app/instrument/alvdeeur)|`alvdeeur`|Jan 3, 2011|
|[BASF SE](https://www.dukascopy-node.app/instrument/basdeeur)|`basdeeur`|Jan 3, 2011|
|[Bayer AG](https://www.dukascopy-node.app/instrument/bayndeeur)|`bayndeeur`|Jan 3, 2011|
|[Beiersdorf AG](https://www.dukascopy-node.app/instrument/beideeur)|`beideeur`|Jan 3, 2011|
|[Bayerische Motoren Werke AG](https://www.dukascopy-node.app/instrument/bmwdeeur)|`bmwdeeur`|Jan 3, 2011|
|[BRENNTAG SE](https://www.dukascopy-node.app/instrument/bnrdeeur)|`bnrdeeur`|Jan 1, 2000|
|[HUGO BOSS AG](https://www.dukascopy-node.app/instrument/bossdeeur)|`bossdeeur`|Jun 18, 2012|
|[Commerzbank AG](https://www.dukascopy-node.app/instrument/cbkdeeur)|`cbkdeeur`|Jan 3, 2011|
|[Continental AG](https://www.dukascopy-node.app/instrument/condeeur)|`condeeur`|Jan 3, 2011|
|[Covestro AG](https://www.dukascopy-node.app/instrument/covdeeur)|`covdeeur`|Jan 1, 2000|
|[Daimler AG](https://www.dukascopy-node.app/instrument/daideeur)|`daideeur`|Jan 3, 2011|
|[Deutsche Boerse AG](https://www.dukascopy-node.app/instrument/db1deeur)|`db1deeur`|Jan 3, 2011|
|[Deutsche Bank AG](https://www.dukascopy-node.app/instrument/dbkdeeur)|`dbkdeeur`|Jan 3, 2011|
|[Delivery Hero AG](https://www.dukascopy-node.app/instrument/dhrdeeur)|`dhrdeeur`|Jan 1, 2000|
|[DHL Group](https://www.dukascopy-node.app/instrument/dpwdeeur)|`dpwdeeur`|Jan 3, 2011|
|[Deutsche Telekom AG](https://www.dukascopy-node.app/instrument/dtedeeur)|`dtedeeur`|Jan 3, 2011|
|[E.ON SE](https://www.dukascopy-node.app/instrument/eoandeeur)|`eoandeeur`|Jan 3, 2011|
|[Fresenius Medical Care AG & Co KGaA](https://www.dukascopy-node.app/instrument/fmedeeur)|`fmedeeur`|Jan 3, 2011|
|[Fresenius SE & Co KGaA](https://www.dukascopy-node.app/instrument/fredeeur)|`fredeeur`|Jan 3, 2011|
|[HeidelbergCement AG](https://www.dukascopy-node.app/instrument/heideeur)|`heideeur`|Jan 3, 2011|
|[Henkel AG & Co KGaA](https://www.dukascopy-node.app/instrument/hen3deeur)|`hen3deeur`|Jan 3, 2011|
|[HELLOFRESH SE](https://www.dukascopy-node.app/instrument/hfgdeeur)|`hfgdeeur`|Jan 1, 2000|
|[Hannover Rueckversicheru-Reg](https://www.dukascopy-node.app/instrument/hnrdeeur)|`hnrdeeur`|Jan 1, 2000|
|[Infineon Technologies AG](https://www.dukascopy-node.app/instrument/ifxdeeur)|`ifxdeeur`|Jan 3, 2011|
|[Deutsche Lufthansa AG](https://www.dukascopy-node.app/instrument/lhadeeur)|`lhadeeur`|Jan 3, 2011|
|[Lanxess AG](https://www.dukascopy-node.app/instrument/lxsdeeur)|`lxsdeeur`|Jan 3, 2011|
|[Merck KGaA](https://www.dukascopy-node.app/instrument/mrkdeeur)|`mrkdeeur`|Jan 3, 2011|
|[MTU AERO ENGINES AG](https://www.dukascopy-node.app/instrument/mtxdeeur)|`mtxdeeur`|Jan 1, 2000|
|[Muenchener Rueckversicherungs AG](https://www.dukascopy-node.app/instrument/muv2deeur)|`muv2deeur`|Jan 3, 2011|
|[Porsche Automobil Holding SE](https://www.dukascopy-node.app/instrument/pah3deeur)|`pah3deeur`|Jan 3, 2011|
|[ProSiebenSat.1 Media AG](https://www.dukascopy-node.app/instrument/psmdeeur)|`psmdeeur`|Aug 19, 2013|
|[PUMA SE](https://www.dukascopy-node.app/instrument/pumdeeur)|`pumdeeur`|Jan 1, 2000|
|[RWE AG](https://www.dukascopy-node.app/instrument/rwedeeur)|`rwedeeur`|Jan 3, 2011|
|[SAP AG](https://www.dukascopy-node.app/instrument/sapdeeur)|`sapdeeur`|Jan 3, 2011|
|[K+S AG](https://www.dukascopy-node.app/instrument/sdfdeeur)|`sdfdeeur`|Aug 8, 2011|
|[Siemens AG](https://www.dukascopy-node.app/instrument/siedeeur)|`siedeeur`|Jan 3, 2011|
|[Sartorius AG](https://www.dukascopy-node.app/instrument/srtdeeur)|`srtdeeur`|Jan 1, 2000|
|[SYMRISE AG](https://www.dukascopy-node.app/instrument/sy1deeur)|`sy1deeur`|Jan 1, 2000|
|[ThyssenKrupp AG](https://www.dukascopy-node.app/instrument/tkadeeur)|`tkadeeur`|Jan 3, 2011|
|[TUI AG](https://www.dukascopy-node.app/instrument/tui1deeur)|`tui1deeur`|Jan 3, 2011|
|[Vonovia SE](https://www.dukascopy-node.app/instrument/vnadeeur)|`vnadeeur`|Apr 14, 2015|
|[Volkswagen AG](https://www.dukascopy-node.app/instrument/vow3deeur)|`vow3deeur`|Jan 3, 2011|
<h3 id="hong-kong">Hong Kong 🇭🇰</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[HSBC Holdings Plc](https://www.dukascopy-node.app/instrument/0005hkhkd)|`0005hkhkd`|Jan 2, 2018|
|[Galaxy Entertainment Group Ltd](https://www.dukascopy-node.app/instrument/0027hkhkd)|`0027hkhkd`|Jan 2, 2018|
|[Geely Automobile Holdings Ltd](https://www.dukascopy-node.app/instrument/0175hkhkd)|`0175hkhkd`|Jan 2, 2018|
|[China Resources Beer Holdings Co Ltd](https://www.dukascopy-node.app/instrument/0291hkhkd)|`0291hkhkd`|Jan 2, 2018|
|[Sinopec Corp](https://www.dukascopy-node.app/instrument/0386hkhkd)|`0386hkhkd`|Mar 1, 2018|
|[HK Exchanges & Clearing Ltd](https://www.dukascopy-node.app/instrument/0388hkhkd)|`0388hkhkd`|Jan 2, 2018|
|[Tencent Holdings Ltd](https://www.dukascopy-node.app/instrument/0700hkhkd)|`0700hkhkd`|Jan 2, 2018|
|[PetroChina Co Ltd](https://www.dukascopy-node.app/instrument/0857hkhkd)|`0857hkhkd`|Jan 2, 2018|
|[China National Offshore Oil Corporation Ltd](https://www.dukascopy-node.app/instrument/0883hkhkd)|`0883hkhkd`|Jan 2, 2018|
|[China Construction Bank Corp](https://www.dukascopy-node.app/instrument/0939hkhkd)|`0939hkhkd`|Jan 2, 2018|
|[China Mobile Ltd](https://www.dukascopy-node.app/instrument/0941hkhkd)|`0941hkhkd`|May 23, 2018|
|[CITIC Bank International Corp Ltd](https://www.dukascopy-node.app/instrument/0998hkhkd)|`0998hkhkd`|Feb 1, 2018|
|[CSPC Pharmaceutical Group Ltd](https://www.dukascopy-node.app/instrument/1093hkhkd)|`1093hkhkd`|Jan 2, 2018|
|[Sino Biopharmeceutical Ltd](https://www.dukascopy-node.app/instrument/1177hkhkd)|`1177hkhkd`|Jul 4, 2018|
|[Agricultural Bank of China Ltd](https://www.dukascopy-node.app/instrument/1288hkhkd)|`1288hkhkd`|Jan 2, 2018|
|[AIA Group Ltd](https://www.dukascopy-node.app/instrument/1299hkhkd)|`1299hkhkd`|Jan 2, 2018|
|[Industrial and Commercial Bank of China Ltd](https://www.dukascopy-node.app/instrument/1398hkhkd)|`1398hkhkd`|Jan 2, 2018|
|[Xiaomi Corp](https://www.dukascopy-node.app/instrument/1810hkhkd)|`1810hkhkd`|Jan 1, 2000|
|[Sunac China Holdings Ltd](https://www.dukascopy-node.app/instrument/1918hkhkd)|`1918hkhkd`|Feb 1, 2018|
|[Country Garden Holdings Ltd](https://www.dukascopy-node.app/instrument/2007hkhkd)|`2007hkhkd`|Jan 2, 2018|
|[AAC Technologies Holdings Inc](https://www.dukascopy-node.app/instrument/2018hkhkd)|`2018hkhkd`|Jan 2, 2018|
|[Ping An Insurance Ltd](https://www.dukascopy-node.app/instrument/2318hkhkd)|`2318hkhkd`|Jan 2, 2018|
|[BOC Hong Kong (Holdings) Ltd](https://www.dukascopy-node.app/instrument/2388hkhkd)|`2388hkhkd`|Apr 10, 2018|
|[China Life Insurance Company Ltd](https://www.dukascopy-node.app/instrument/2628hkhkd)|`2628hkhkd`|Jan 2, 2018|
|[China Merchants Bank Co Ltd](https://www.dukascopy-node.app/instrument/3968hkhkd)|`3968hkhkd`|Jan 2, 2018|
|[Bank of China Ltd](https://www.dukascopy-node.app/instrument/3988hkhkd)|`3988hkhkd`|Jun 4, 2019|
<h3 id="ireland">Ireland 🇮🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Bank Of Ireland Plc](https://www.dukascopy-node.app/instrument/birgieeur)|`birgieeur`|Jan 1, 2000|
|[Kingspan Group Plc](https://www.dukascopy-node.app/instrument/krxieeur)|`krxieeur`|Jan 1, 2000|
|[Kerry Group Plc](https://www.dukascopy-node.app/instrument/krzieeur)|`krzieeur`|Jan 1, 2000|
|[Ryanair Holdings Plc](https://www.dukascopy-node.app/instrument/ry4cieeur)|`ry4cieeur`|Jan 1, 2000|
<h3 id="italy">Italy 🇮🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[A2A Spa](https://www.dukascopy-node.app/instrument/a2aiteur)|`a2aiteur`|Jan 1, 2000|
|[Amplifon Spa](https://www.dukascopy-node.app/instrument/ampiteur)|`ampiteur`|Jan 1, 2000|
|[Azimut Holding Spa](https://www.dukascopy-node.app/instrument/azmiteur)|`azmiteur`|Jan 1, 2000|
|[Banco BPM Spa](https://www.dukascopy-node.app/instrument/bamiiteur)|`bamiiteur`|Jan 1, 2000|
|[Brunello Cucinelli Spa](https://www.dukascopy-node.app/instrument/bciteur)|`bciteur`|Jan 1, 2000|
|[Bper Banca Spa](https://www.dukascopy-node.app/instrument/bpeiteur)|`bpeiteur`|Jan 1, 2000|
|[Brembo Spa](https://www.dukascopy-node.app/instrument/breiteur)|`breiteur`|Jan 1, 2000|
|[Buzzi Unicem Spa](https://www.dukascopy-node.app/instrument/bzuiteur)|`bzuiteur`|Jan 1, 2000|
|[Davide Campari-Milano Spa](https://www.dukascopy-node.app/instrument/cpriteur)|`cpriteur`|Jan 1, 2000|
|[Danieli & C. Officine Meccaniche S.p.A.](https://www.dukascopy-node.app/instrument/daniteur)|`daniteur`|Jan 1, 2000|
|[Diasorin Spa](https://www.dukascopy-node.app/instrument/diaiteur)|`diaiteur`|Jan 1, 2000|
|[Enel SpA](https://www.dukascopy-node.app/instrument/eneliteur)|`eneliteur`|Jan 1, 2000|
|[ENI Spa](https://www.dukascopy-node.app/instrument/eniiteur)|`eniiteur`|Jan 1, 2000|
|[ERG Spa](https://www.dukascopy-node.app/instrument/ergiteur)|`ergiteur`|Jan 1, 2000|
|[FinecoBank Banca Fineco Spa](https://www.dukascopy-node.app/instrument/fbkiteur)|`fbkiteur`|Jan 1, 2000|
|[Fiat Chrysler Auto NV](https://www.dukascopy-node.app/instrument/fcaiteur)|`fcaiteur`|Jan 1, 2000|
|[Assicurazioni Generali Spa](https://www.dukascopy-node.app/instrument/giteur)|`giteur`|Jan 1, 2000|
|[Italgas Spa](https://www.dukascopy-node.app/instrument/igiteur)|`igiteur`|Jan 1, 2000|
|[Infrastrutture Wireless Italiane Spa](https://www.dukascopy-node.app/instrument/inwiteur)|`inwiteur`|Jan 1, 2000|
|[Intesa Sanpaolo Spa](https://www.dukascopy-node.app/instrument/ispiteur)|`ispiteur`|Jan 1, 2000|
|[Juventus Football Club Spa](https://www.dukascopy-node.app/instrument/juveiteur)|`juveiteur`|Jan 1, 2000|
|[Leonardo Spa](https://www.dukascopy-node.app/instrument/ldoiteur)|`ldoiteur`|Jan 1, 2000|
|[Mediobanca Spa](https://www.dukascopy-node.app/instrument/mbiteur)|`mbiteur`|Jan 1, 2000|
|[Moncler Spa](https://www.dukascopy-node.app/instrument/monciteur)|`monciteur`|Jan 1, 2000|
|[Mediaset Spa](https://www.dukascopy-node.app/instrument/msiteur)|`msiteur`|Jan 1, 2000|
|[Piaggio & C. Spa](https://www.dukascopy-node.app/instrument/piaiteur)|`piaiteur`|Jan 1, 2000|
|[Prysmian Spa](https://www.dukascopy-node.app/instrument/pryiteur)|`pryiteur`|Jan 1, 2000|
|[Ferrari NV](https://www.dukascopy-node.app/instrument/raceiteur)|`raceiteur`|Jan 1, 2000|
|[Salvatore Ferragamo S.p.A.](https://www.dukascopy-node.app/instrument/reciteur)|`reciteur`|Jan 1, 2000|
|[Salvatore Ferragamo S.p.A.](https://www.dukascopy-node.app/instrument/sferiteur)|`sferiteur`|Jan 1, 2000|
|[SAIPEM Spa](https://www.dukascopy-node.app/instrument/spmiteur)|`spmiteur`|Jan 1, 2000|
|[Snam Spa](https://www.dukascopy-node.app/instrument/srgiteur)|`srgiteur`|Jan 1, 2000|
|[STMicroelectronics NV](https://www.dukascopy-node.app/instrument/stmiteur)|`stmiteur`|Jan 1, 2000|
|[Tenaris SA](https://www.dukascopy-node.app/instrument/teniteur)|`teniteur`|Jan 1, 2000|
|[Telecom Italia Spa](https://www.dukascopy-node.app/instrument/tititeur)|`tititeur`|Jan 1, 2000|
|[Terna Spa](https://www.dukascopy-node.app/instrument/trniteur)|`trniteur`|Jan 1, 2000|
|[UniCredit Spa](https://www.dukascopy-node.app/instrument/ucgiteur)|`ucgiteur`|Jan 1, 2000|
|[WeBuild Spa](https://www.dukascopy-node.app/instrument/wbditeur)|`wbditeur`|Jan 1, 2000|
<h3 id="japan">Japan 🇯🇵</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Asahi Group Holdings Ltd](https://www.dukascopy-node.app/instrument/2502jpjpy)|`2502jpjpy`|Sep 26, 2018|
|[Kirin Brewery Co Ltd](https://www.dukascopy-node.app/instrument/2503jpjpy)|`2503jpjpy`|Sep 26, 2018|
|[Japan Tobacco Inc](https://www.dukascopy-node.app/instrument/2914jpjpy)|`2914jpjpy`|Sep 21, 2018|
|[Seven and I Holdings Co Ltd](https://www.dukascopy-node.app/instrument/3382jpjpy)|`3382jpjpy`|Sep 21, 2018|
|[Sumco Corp](https://www.dukascopy-node.app/instrument/3436jpjpy)|`3436jpjpy`|Sep 26, 2018|
|[Showa Denko KK](https://www.dukascopy-node.app/instrument/4004jpjpy)|`4004jpjpy`|Sep 21, 2018|
|[Sumitomo Chemical Co Ltd](https://www.dukascopy-node.app/instrument/4005jpjpy)|`4005jpjpy`|Sep 21, 2018|
|[Shin-Etsu Chemical Co Ltd](https://www.dukascopy-node.app/instrument/4063jpjpy)|`4063jpjpy`|Sep 21, 2018|
|[Kao Corp](https://www.dukascopy-node.app/instrument/4452jpjpy)|`4452jpjpy`|Sep 26, 2018|
|[Takeda Pharmaceutical Co Ltd](https://www.dukascopy-node.app/instrument/4502jpjpy)|`4502jpjpy`|Sep 21, 2018|
|[Astellas Pharma Inc](https://www.dukascopy-node.app/instrument/4503jpjpy)|`4503jpjpy`|Sep 26, 2018|
|[Shionogi & Co Ltd](https://www.dukascopy-node.app/instrument/4507jpjpy)|`4507jpjpy`|Sep 26, 2018|
|[Eisai Co Ltd](https://www.dukascopy-node.app/instrument/4523jpjpy)|`4523jpjpy`|Sep 21, 2018|
|[Terumo Corp](https://www.dukascopy-node.app/instrument/4543jpjpy)|`4543jpjpy`|Sep 26, 2018|
|[Z Holdings Corp](https://www.dukascopy-node.app/instrument/4689jpjpy)|`4689jpjpy`|Sep 21, 2018|
|[Shiseido Co Ltd](https://www.dukascopy-node.app/instrument/4911jpjpy)|`4911jpjpy`|Sep 21, 2018|
|[Bridgestone Corp](https://www.dukascopy-node.app/instrument/5108jpjpy)|`5108jpjpy`|Sep 26, 2018|
|[Tokai Carbon Co Ltd](https://www.dukascopy-node.app/instrument/5301jpjpy)|`5301jpjpy`|Sep 21, 2018|
|[Nippon Steel Corp](https://www.dukascopy-node.app/instrument/5401jpjpy)|`5401jpjpy`|Sep 21, 2018|
|[Recruit Holdings Co Ltd](https://www.dukascopy-node.app/instrument/6098jpjpy)|`6098jpjpy`|Sep 26, 2018|
|[Komatsu Ltd](https://www.dukascopy-node.app/instrument/6301jpjpy)|`6301jpjpy`|Sep 21, 2018|
|[Daikin Industries Ltd](https://www.dukascopy-node.app/instrument/6367jpjpy)|`6367jpjpy`|Sep 26, 2018|
|[Mitsubishi Electric Corp](https://www.dukascopy-node.app/instrument/6503jpjpy)|`6503jpjpy`|Sep 26, 2018|
|[Yaskawa Electric Corp](https://www.dukascopy-node.app/instrument/6506jpjpy)|`6506jpjpy`|Sep 21, 2018|
|[Fujitsu Ltd](https://www.dukascopy-node.app/instrument/6702jpjpy)|`6702jpjpy`|Sep 26, 2018|
|[Panasonic Corp](https://www.dukascopy-node.app/instrument/6752jpjpy)|`6752jpjpy`|Sep 26, 2018|
|[Sony Corp](https://www.dukascopy-node.app/instrument/6758jpjpy)|`6758jpjpy`|Sep 21, 2018|
|[TDK Corp](https://www.dukascopy-node.app/instrument/6762jpjpy)|`6762jpjpy`|Sep 21, 2018|
|[Denso Corp](https://www.dukascopy-node.app/instrument/6902jpjpy)|`6902jpjpy`|Sep 21, 2018|
|[FANUC Corp](https://www.dukascopy-node.app/instrument/6954jpjpy)|`6954jpjpy`|Sep 21, 2018|
|[Kyocera Corp](https://www.dukascopy-node.app/instrument/6971jpjpy)|`6971jpjpy`|Sep 21, 2018|
|[Nissan Motor Co Ltd](https://www.dukascopy-node.app/instrument/7201jpjpy)|`7201jpjpy`|Sep 26, 2018|
|[Toyota Motor Corp](https://www.dukascopy-node.app/instrument/7203jpjpy)|`7203jpjpy`|Sep 21, 2018|
|[Mazda Motor Corp](https://www.dukascopy-node.app/instrument/7261jpjpy)|`7261jpjpy`|Sep 26, 2018|
|[Honda Motor Co Ltd](https://www.dukascopy-node.app/instrument/7267jpjpy)|`7267jpjpy`|Sep 21, 2018|
|[Suzuki Motor Corp](https://www.dukascopy-node.app/instrument/7269jpjpy)|`7269jpjpy`|Sep 26, 2018|
|[Subaru Corp](https://www.dukascopy-node.app/instrument/7270jpjpy)|`7270jpjpy`|Sep 26, 2018|
|[Canon Inc](https://www.dukascopy-node.app/instrument/7751jpjpy)|`7751jpjpy`|Sep 21, 2018|
|[Nintendo Co Ltd](https://www.dukascopy-node.app/instrument/7974jpjpy)|`7974jpjpy`|Sep 21, 2018|
|[Mitsui & Co Ltd](https://www.dukascopy-node.app/instrument/8031jpjpy)|`8031jpjpy`|Sep 26, 2018|
|[Tokyo Electron Ltd](https://www.dukascopy-node.app/instrument/8035jpjpy)|`8035jpjpy`|Sep 21, 2018|
|[Mitsubishi UFJ Financial Group Inc](https://www.dukascopy-node.app/instrument/8306jpjpy)|`8306jpjpy`|Sep 21, 2018|
|[Sumitomo Mitsui Financial Group Inc](https://www.dukascopy-node.app/instrument/8316jpjpy)|`8316jpjpy`|Sep 21, 2018|
|[Mizuho Financial Group Inc](https://www.dukascopy-node.app/instrument/8411jpjpy)|`8411jpjpy`|Sep 26, 2018|
|[Tokio Marine Holdings Inc](https://www.dukascopy-node.app/instrument/8766jpjpy)|`8766jpjpy`|Sep 26, 2018|
|[Mitsui Fudosan Co Ltd](https://www.dukascopy-node.app/instrument/8801jpjpy)|`8801jpjpy`|Sep 26, 2018|
|[Mitsubishi Estate Co Ltd](https://www.dukascopy-node.app/instrument/8802jpjpy)|`8802jpjpy`|Sep 26, 2018|
|[East Japan Railway Co](https://www.dukascopy-node.app/instrument/9020jpjpy)|`9020jpjpy`|Sep 26, 2018|
|[Nippon Telegraph & Tel Corp](https://www.dukascopy-node.app/instrument/9432jpjpy)|`9432jpjpy`|Sep 21, 2018|
|[KDDI Corp](https://www.dukascopy-node.app/instrument/9433jpjpy)|`9433jpjpy`|Sep 26, 2018|
|[Tokyo Electric Power Co Holdings Inc](https://www.dukascopy-node.app/instrument/9501jpjpy)|`9501jpjpy`|Sep 21, 2018|
|[Fast Retailing Co Ltd](https://www.dukascopy-node.app/instrument/9983jpjpy)|`9983jpjpy`|Sep 21, 2018|
|[Softbank Group Corp](https://www.dukascopy-node.app/instrument/9984jpjpy)|`9984jpjpy`|Sep 21, 2018|
<h3 id="mexico">Mexico 🇲🇽</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Alfa SA B A](https://www.dukascopy-node.app/instrument/alfaamxmxn)|`alfaamxmxn`|Jan 1, 2000|
|[Alsea SAB de CV](https://www.dukascopy-node.app/instrument/alseamxmxn)|`alseamxmxn`|Jan 1, 2000|
|[America Movil SAB de C SERL](https://www.dukascopy-node.app/instrument/amxlmxmxn)|`amxlmxmxn`|Jan 1, 2000|
|[Arca Continental SAB de CV](https://www.dukascopy-node.app/instrument/arcamxmxn)|`arcamxmxn`|Jan 1, 2000|
|[Grupo Aeroportuario del Sureste](https://www.dukascopy-node.app/instrument/asurbmxmxn)|`asurbmxmxn`|Jan 1, 2000|
|[Banco Del Bajio SA](https://www.dukascopy-node.app/instrument/bbajioomxmxn)|`bbajioomxmxn`|Jan 1, 2000|
|[Bolsa Mexicana de Valores SAB de CV](https://www.dukascopy-node.app/instrument/bolsaamxmxn)|`bolsaamxmxn`|Jan 1, 2000|
|[Cemex Sab de CV](https://www.dukascopy-node.app/instrument/cemexcpomxmxn)|`cemexcpomxmxn`|Jan 1, 2000|
|[Fomento Economico Mexica UBD](https://www.dukascopy-node.app/instrument/femsaubdmxmxn)|`femsaubdmxmxn`|Jan 1, 2000|
|[Grupo Aeroportuario del Pacific Sab CV](https://www.dukascopy-node.app/instrument/gapbmxmxn)|`gapbmxmxn`|Jan 1, 2000|
|[Grupo Carso Sab De CV](https://www.dukascopy-node.app/instrument/gcarsoa1mxmxn)|`gcarsoa1mxmxn`|Jan 1, 2000|
|[Grupo Cementos de Chihuahua](https://www.dukascopy-node.app/instrument/gccmxmxn)|`gccmxmxn`|Jan 1, 2000|
|[Grupo Financiero Banorte O](https://www.dukascopy-node.app/instrument/gfnorteomxmxn)|`gfnorteomxmxn`|Jan 1, 2000|
|[Grupo Mexico SAB DE CV SER B](https://www.dukascopy-node.app/instrument/gmexicobmxmxn)|`gmexicobmxmxn`|Jan 1, 2000|
|[Gruma SA BB](https://www.dukascopy-node.app/instrument/grumabmxmxn)|`grumabmxmxn`|Jan 1, 2000|
|[Kimberly Clark DE Mexico A](https://www.dukascopy-node.app/instrument/kimberamxmxn)|`kimberamxmxn`|Jan 1, 2000|
|[Coca Cola Femsa Sab](https://www.dukascopy-node.app/instrument/kofublmxmxn)|`kofublmxmxn`|Jan 1, 2000|
|[Genomma Lab Internacional SAB de CV](https://www.dukascopy-node.app/instrument/labbmxmxn)|`labbmxmxn`|Jan 1, 2000|
|[El Puerto de Liverpool](https://www.dukascopy-node.app/instrument/livepolc1mxmxn)|`livepolc1mxmxn`|Jan 1, 2000|
|[Megacable Holdings SAB de CV](https://www.dukascopy-node.app/instrument/megacpomxmxn)|`megacpomxmxn`|Jan 1, 2000|
|[Grupo Aeroportuario del Centro Norte](https://www.dukascopy-node.app/instrument/omabmxmxn)|`omabmxmxn`|Jan 1, 2000|
|[Orbia Advance Corp SAB DE CV](https://www.dukascopy-node.app/instrument/orbiamxmxn)|`orbiamxmxn`|Jan 1, 2000|
|[Industrias Penoles SAB DE CV](https://www.dukascopy-node.app/instrument/peolesmxmxn)|`peolesmxmxn`|Jan 1, 2000|
|[Promotora Y Operadora DE INF](https://www.dukascopy-node.app/instrument/pinframxmxn)|`pinframxmxn`|Jan 1, 2000|
|[Qualitas Controladora SAB](https://www.dukascopy-node.app/instrument/qmxmxn)|`qmxmxn`|Jan 1, 2000|
|[Regional Sab De CV](https://www.dukascopy-node.app/instrument/ramxmxn)|`ramxmxn`|Jan 1, 2000|
|[Controladora Vuela Comp de Aviacion](https://www.dukascopy-node.app/instrument/volaramxmxn)|`volaramxmxn`|Jan 1, 2000|
|[Walmart De Mexico SAB](https://www.dukascopy-node.app/instrument/walmexmxmxn)|`walmexmxmxn`|Jan 1, 2000|
<h3 id="netherlands">Netherlands 🇳🇱</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Aegon NV](https://www.dukascopy-node.app/instrument/agnnleur)|`agnnleur`|Jan 1, 2000|
|[Koninklijke Ahold Delhaize NV](https://www.dukascopy-node.app/instrument/ahnleur)|`ahnleur`|Jan 1, 2000|
|[Akzo Nobel NV](https://www.dukascopy-node.app/instrument/akzanleur)|`akzanleur`|Jan 1, 2000|
|[ASML Holding NV](https://www.dukascopy-node.app/instrument/asmlnleur)|`asmlnleur`|Jan 1, 2000|
|[Koninklijke DSM NV](https://www.dukascopy-node.app/instrument/dsmnleur)|`dsmnleur`|Jan 1, 2000|
|[Heineken NV](https://www.dukascopy-node.app/instrument/heianleur)|`heianleur`|Jan 1, 2000|
|[ING Groep NV](https://www.dukascopy-node.app/instrument/inganleur)|`inganleur`|Jan 1, 2000|
|[Koninklijke KPN NV](https://www.dukascopy-node.app/instrument/kpnnleur)|`kpnnleur`|Jan 1, 2000|
|[ArcelorMittal](https://www.dukascopy-node.app/instrument/mtnleur)|`mtnleur`|Jan 1, 2000|
|[Koninklijke Philips NV](https://www.dukascopy-node.app/instrument/phianleur)|`phianleur`|Jan 1, 2000|
|[QIAGEN N.V.](https://www.dukascopy-node.app/instrument/qianleur)|`qianleur`|Jan 1, 2000|
|[Randstad Holding NV](https://www.dukascopy-node.app/instrument/randnleur)|`randnleur`|Jan 1, 2000|
|[Royal Dutch Shell PLC](https://www.dukascopy-node.app/instrument/rdsanleur)|`rdsanleur`|Jan 1, 2000|
|[Koninklijke Vopak NV](https://www.dukascopy-node.app/instrument/vpknleur)|`vpknleur`|Jan 1, 2000|
|[Wolters Kluwer NV](https://www.dukascopy-node.app/instrument/wklnleur)|`wklnleur`|Jan 1, 2000|
<h3 id="norway">Norway 🇳🇴</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Marine Harvest ASA](https://www.dukascopy-node.app/instrument/mhgnonok)|`mhgnonok`|Jan 1, 2000|
|[Norsk Hydro ASA](https://www.dukascopy-node.app/instrument/nhynonok)|`nhynonok`|Jan 1, 2000|
|[Orkla ASA](https://www.dukascopy-node.app/instrument/orknonok)|`orknonok`|Jan 1, 2000|
|[Statoil ASA](https://www.dukascopy-node.app/instrument/stlnonok)|`stlnonok`|Jan 1, 2000|
|[Telenor ASA](https://www.dukascopy-node.app/instrument/telnonok)|`telnonok`|Jan 1, 2000|
<h3 id="portugal">Portugal 🇵🇹</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[EDP - Energias de Portugal SA](https://www.dukascopy-node.app/instrument/edppteur)|`edppteur`|Jan 1, 2000|
|[Galp Energia SGPS SA](https://www.dukascopy-node.app/instrument/galppteur)|`galppteur`|Jan 1, 2000|
<h3 id="spain">Spain 🇪🇸</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ACS Actividades de Construccion y Servicios SA](https://www.dukascopy-node.app/instrument/acseseur)|`acseseur`|Jan 1, 2000|
|[Acerinox SA](https://www.dukascopy-node.app/instrument/acxeseur)|`acxeseur`|Jan 1, 2000|
|[Aena SA](https://www.dukascopy-node.app/instrument/aenaeseur)|`aenaeseur`|Jan 1, 2000|
|[Amadeus IT Holding SA](https://www.dukascopy-node.app/instrument/amseseur)|`amseseur`|Jan 1, 2000|
|[Banco Bilbao Vizcaya Argentaria SA](https://www.dukascopy-node.app/instrument/bbvaeseur)|`bbvaeseur`|Jan 1, 2000|
|[CaixaBank](https://www.dukascopy-node.app/instrument/cabkeseur)|`cabkeseur`|Jan 1, 2000|
|[Ebro Foods SA](https://www.dukascopy-node.app/instrument/ebreseur)|`ebreseur`|Jan 1, 2000|
|[Endesa SA](https://www.dukascopy-node.app/instrument/eleeseur)|`eleeseur`|Jan 1, 2000|
|[Enagas SA](https://www.dukascopy-node.app/instrument/engeseur)|`engeseur`|Jan 1, 2000|
|[Ferrovial SA](https://www.dukascopy-node.app/instrument/fereseur)|`fereseur`|Jan 1, 2000|
|[Gas Natural SDG SA](https://www.dukascopy-node.app/instrument/gaseseur)|`gaseseur`|Jan 1, 2000|
|[GRIFOLS SA](https://www.dukascopy-node.app/instrument/grfeseur)|`grfeseur`|Jan 1, 2000|
|[Iberdrola SA](https://www.dukascopy-node.app/instrument/ibeeseur)|`ibeeseur`|Jan 1, 2000|
|[Inditex SA](https://www.dukascopy-node.app/instrument/itxeseur)|`itxeseur`|Jan 1, 2000|
|[Mapfre SA](https://www.dukascopy-node.app/instrument/mapeseur)|`mapeseur`|Jan 1, 2000|
|[Repsol SA](https://www.dukascopy-node.app/instrument/repeseur)|`repeseur`|Jan 1, 2000|
|[Banco Santander SA](https://www.dukascopy-node.app/instrument/saneseur)|`saneseur`|Jan 1, 2000|
|[Telefonica SA](https://www.dukascopy-node.app/instrument/tefeseur)|`tefeseur`|Jan 1, 2000|
|[Viscofan SA](https://www.dukascopy-node.app/instrument/viseseur)|`viseseur`|Jan 1, 2000|
<h3 id="sweden">Sweden 🇸🇪</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Alfa Laval AB](https://www.dukascopy-node.app/instrument/alfasesek)|`alfasesek`|Jan 1, 2000|
|[Atlas Copco AB](https://www.dukascopy-node.app/instrument/atcoasesek)|`atcoasesek`|Jan 1, 2000|
|[Electrolux AB](https://www.dukascopy-node.app/instrument/eluxbsesek)|`eluxbsesek`|Jan 1, 2000|
|[Telefonaktiebolaget LM Ericsson](https://www.dukascopy-node.app/instrument/ericbsesek)|`ericbsesek`|Jan 1, 2000|
|[Getinge AB](https://www.dukascopy-node.app/instrument/getibsesek)|`getibsesek`|Jan 1, 2000|
|[Hennes & Mauritz AB](https://www.dukascopy-node.app/instrument/hmbsesek)|`hmbsesek`|Jan 1, 2000|
|[Investor AB](https://www.dukascopy-node.app/instrument/invebsesek)|`invebsesek`|Jan 1, 2000|
|[Nordea Bank AB](https://www.dukascopy-node.app/instrument/ndasesek)|`ndasesek`|Jan 1, 2000|
|[Sandvik AB](https://www.dukascopy-node.app/instrument/sandsesek)|`sandsesek`|Jan 1, 2000|
|[Svenska Cellulosa AB](https://www.dukascopy-node.app/instrument/scabsesek)|`scabsesek`|Jan 1, 2000|
|[Skandinaviska Enskilda Banken AB](https://www.dukascopy-node.app/instrument/sebasesek)|`sebasesek`|Jan 1, 2000|
|[Securitas AB](https://www.dukascopy-node.app/instrument/secubsesek)|`secubsesek`|Jan 1, 2000|
|[Skanska AB](https://www.dukascopy-node.app/instrument/skabsesek)|`skabsesek`|Jan 1, 2000|
|[SKF AB](https://www.dukascopy-node.app/instrument/skfbsesek)|`skfbsesek`|Jan 1, 2000|
|[Swedbank AB](https://www.dukascopy-node.app/instrument/swedasesek)|`swedasesek`|Jan 1, 2000|
|[Tele2 AB](https://www.dukascopy-node.app/instrument/tel2bsesek)|`tel2bsesek`|Jan 1, 2000|
|[Telia Company AB](https://www.dukascopy-node.app/instrument/tlsnsesek)|`tlsnsesek`|Jan 1, 2000|
|[Volvo AB](https://www.dukascopy-node.app/instrument/volvbsesek)|`volvbsesek`|Jan 1, 2000|
<h3 id="switzerland">Switzerland 🇨🇭</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[ABB Ltd](https://www.dukascopy-node.app/instrument/abbnchchf)|`abbnchchf`|Jan 1, 2000|
|[Adecco SA](https://www.dukascopy-node.app/instrument/adenchchf)|`adenchchf`|Jan 1, 2000|
|[Julius Baer Group Ltd](https://www.dukascopy-node.app/instrument/baerchchf)|`baerchchf`|Jan 1, 2000|
|[Richemont](https://www.dukascopy-node.app/instrument/cfrchchf)|`cfrchchf`|Jan 1, 2000|
|[Clariant AG](https://www.dukascopy-node.app/instrument/clnchchf)|`clnchchf`|Jan 1, 2000|
|[Givaudan SA](https://www.dukascopy-node.app/instrument/givnchchf)|`givnchchf`|Jan 1, 2000|
|[Kuehne + Nagel International AG](https://www.dukascopy-node.app/instrument/kninchchf)|`kninchchf`|Jan 1, 2000|
|[Lafarge Holcim Ltd](https://www.dukascopy-node.app/instrument/lhnchchf)|`lhnchchf`|Jan 1, 2000|
|[Chocoladefabriken Lindt & Sprungli](https://www.dukascopy-node.app/instrument/lispchchf)|`lispchchf`|Jan 1, 2000|
|[Logitech International SA](https://www.dukascopy-node.app/instrument/lognchchf)|`lognchchf`|Jan 1, 2000|
|[Lonza Group AG](https://www.dukascopy-node.app/instrument/lonnchchf)|`lonnchchf`|Jan 1, 2000|
|[Nestle SA](https://www.dukascopy-node.app/instrument/nesnchchf)|`nesnchchf`|Jan 1, 2000|
|[Novartis AG](https://www.dukascopy-node.app/instrument/novnchchf)|`novnchchf`|Jan 1, 2000|
|[OC Oerlikon Corporation](https://www.dukascopy-node.app/instrument/oerlchchf)|`oerlchchf`|Jan 1, 2000|
|[Roche Holding AG](https://www.dukascopy-node.app/instrument/rogchchf)|`rogchchf`|Jan 1, 2000|
|[Swisscom AG](https://www.dukascopy-node.app/instrument/scmnchchf)|`scmnchchf`|Jan 1, 2000|
|[SGS SA](https://www.dukascopy-node.app/instrument/sgsnchchf)|`sgsnchchf`|Jan 1, 2000|
|[Swiss Life Holding AG](https://www.dukascopy-node.app/instrument/slhnchchf)|`slhnchchf`|Jan 1, 2000|
|[Sonova Holding AG](https://www.dukascopy-node.app/instrument/soonchchf)|`soonchchf`|Jan 1, 2000|
|[Swiss Re AG](https://www.dukascopy-node.app/instrument/srenchchf)|`srenchchf`|Jan 1, 2000|
|[Temenos Group AG](https://www.dukascopy-node.app/instrument/temnchchf)|`temnchchf`|Jan 1, 2000|
|[UBS Group AG](https://www.dukascopy-node.app/instrument/ubsgchchf)|`ubsgchchf`|Jan 1, 2000|
|[Swatch Group AG/The](https://www.dukascopy-node.app/instrument/uhrchchf)|`uhrchchf`|Jan 1, 2000|
|[Swatch Group AG (The Registered)](https://www.dukascopy-node.app/instrument/uhrnchchf)|`uhrnchchf`|Jan 1, 2000|
|[Zurich Insurance Group AG](https://www.dukascopy-node.app/instrument/zurnchchf)|`zurnchchf`|Jan 1, 2000|
<h3 id="uk">United Kingdom 🇬🇧</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[Anglo American PLC](https://www.dukascopy-node.app/instrument/aalgbgbx)|`aalgbgbx`|Jan 1, 2000|
|[Associated British Foods PLC](https://www.dukascopy-node.app/instrument/abfgbgbx)|`abfgbgbx`|Jan 1, 2000|
|[Admiral Group PLC](https://www.dukascopy-node.app/instrument/admgbgbx)|`admgbgbx`|Jan 1, 2000|
|[iShares Ageing Population](https://www.dukascopy-node.app/instrument/agesgbgbx)|`agesgbgbx`|Feb 26, 2025|
|[Ashtead Group PLC](https://www.dukascopy-node.app/instrument/ahtgbgbx)|`ahtgbgbx`|Jan 1, 2000|
|[L&G Artificial Intelligence](https://www.dukascopy-node.app/instrument/aiaigbusd)|`aiaigbusd`|Mar 31, 2025|
|[Antofagasta PLC](https://www.dukascopy-node.app/instrument/antogbgbx)|`antogbgbx`|Jan 1, 2000|
|[Aviva PLC](https://www.dukascopy-node.app/instrument/avgbgbx)|`avgbgbx`|Jan 1, 2000|
|[AstraZeneca PLC](https://www.dukascopy-node.app/instrument/azngbgbx)|`azngbgbx`|Jan 1, 2000|
|[Babcock International Group PLC](https://www.dukascopy-node.app/instrument/babgbgbx)|`babgbgbx`|Jan 1, 2000|
|[BAE Systems PLC](https://www.dukascopy-node.app/instrument/bagbgbx)|`bagbgbx`|Jan 1, 2000|
|[Barclays PLC](https://www.dukascopy-node.app/instrument/barcgbgbx)|`barcgbgbx`|Jan 1, 2000|
|[British American Tobacco PLC](https://www.dukascopy-node.app/instrument/batsgbgbx)|`batsgbgbx`|Jan 1, 2000|
|[BARRATT DEVELOPMENTS PLC](https://www.dukascopy-node.app/instrument/bdevgbgbx)|`bdevgbgbx`|Jan 1, 2000|
|[British Land Co PLC](https://www.dukascopy-node.app/instrument/blndgbgbx)|`blndgbgbx`|Jan 1, 2000|
|[BHP Billiton PLC](https://www.dukascopy-node.app/instrument/bltgbgbx)|`bltgbgbx`|Jan 1, 2000|
|[Bunzl PLC](https://www.dukascopy-node.app/instrument/bnzlgbgbx)|`bnzlgbgbx`|Jan 1, 2000|
|[Burberry Group PLC](https://www.dukascopy-node.app/instrument/brbygbgbx)|`brbygbgbx`|Jan 1, 2000|
|[BT Group PLC](https://www.dukascopy-node.app/instrument/btgbgbx)|`btgbgbx`|Jan 1, 2000|
|[Carnival PLC](https://www.dukascopy-node.app/instrument/cclgbgbx)|`cclgbgbx`|Jan 1, 2000|
|[Centrica PLC](https://www.dukascopy-node.app/instrument/cnagbgbx)|`cnagbgbx`|Jan 1, 2000|
|[Compass Group PLC](https://www.dukascopy-node.app/instrument/cpggbgbx)|`cpggbgbx`|Jan 1, 2000|
|[Capita PLC](https://www.dukascopy-node.app/instrument/cpigbgbx)|`cpigbgbx`|Jan 1, 2000|
|[Croda International PLC](https://www.dukascopy-node.app/instrument/crdagbgbx)|`crdagbgbx`|Jan 1, 2000|
|[CRH PLC](https://www.dukascopy-node.app/instrument/crhgbgbx)|`crhgbgbx`|Jan 1, 2000|
|[DCC PLC](https://www.dukascopy-node.app/instrument/dccgbgbx)|`dccgbgbx`|Jan 1, 2000|
|[VanECK Defense](https://www.dukascopy-node.app/instrument/dfnggbgbp)|`dfnggbgbp`|Feb 26, 2025|
|[Diageo PLC](https://www.dukascopy-node.app/instrument/dgegbgbx)|`dgegbgbx`|Jan 1, 2000|
|[iShares Electric Vehicles and Driving Technology UCITS ETF](https://www.dukascopy-node.app/instrument/ecargbusd)|`ecargbusd`|Mar 31, 2025|
|[ELECTROCOMPONENTS PLC](https://www.dukascopy-node.app/instrument/ecmgbgbx)|`ecmgbgbx`|Jan 1, 2000|
|[Experian PLC](https://www.dukascopy-node.app/instrument/expngbgbx)|`expngbgbx`|Jan 1, 2000|
|[easyJet PLC](https://www.dukascopy-node.app/instrument/ezjgbgbx)|`ezjgbgbx`|Jan 1, 2000|
|[Fresnillo PLC](https://www.dukascopy-node.app/instrument/fresgbgbx)|`fresgbgbx`|Jan 1, 2000|
|[Glencore PLC](https://www.dukascopy-node.app/instrument/glengbgbx)|`glengbgbx`|Jan 1, 2000|
|[L&G Clean Water](https://www.dukascopy-node.app/instrument/glgggbgbx)|`glgggbgbx`|Mar 31, 2025|
|[GlaxoSmithKline PLC](https://www.dukascopy-node.app/instrument/gskgbgbx)|`gskgbgbx`|Jan 1, 2000|
|[HIKMA PHARMACEUTICALS PLC](https://www.dukascopy-node.app/instrument/hikgbgbx)|`hikgbgbx`|Jan 1, 2000|
|[HALMA PLC](https://www.dukascopy-node.app/instrument/hlmagbgbx)|`hlmagbgbx`|Jan 1, 2000|
|[Hammerson PLC](https://www.dukascopy-node.app/instrument/hmsogbgbx)|`hmsogbgbx`|Jan 1, 2000|
|[HSBC Holdings PLC](https://www.dukascopy-node.app/instrument/hsbagbgbx)|`hsbagbgbx`|Jan 1, 2000|
|[International Consolidated Airlines Grou](https://www.dukascopy-node.app/instrument/iaggbgbx)|`iaggbgbx`|Jan 1, 2000|
|[INTERMEDIATE CAPITAL GROUP](https://www.dukascopy-node.app/instrument/icpgbgbx)|`icpgbgbx`|Jan 1, 2000|
|[InterContinental Hotels Group PLC](https://www.dukascopy-node.app/instrument/ihggbgbx)|`ihggbgbx`|Jan 1, 2000|
|[3i Group PLC](https://www.dukascopy-node.app/instrument/iiigbgbx)|`iiigbgbx`|Jan 1, 2000|
|[Imperial Brands PLC](https://www.dukascopy-node.app/instrument/imtgbgbx)|`imtgbgbx`|Jan 1, 2000|
|[WisdomTree Artificial Intelligence UCITS ETF](https://www.dukascopy-node.app/instrument/intlgbgbx)|`intlgbgbx`|Mar 31, 2025|
|[Intertek Group PLC](https://www.dukascopy-node.app/instrument/itrkgbgbx)|`itrkgbgbx`|Jan 1, 2000|
|[ITV PLC](https://www.dukascopy-node.app/instrument/itvgbgbx)|`itvgbgbx`|Jan 1, 2000|
|[Kingfisher PLC](https://www.dukascopy-node.app/instrument/kgfgbgbx)|`kgfgbgbx`|Jan 1, 2000|
|[Land Securities Group PLC](https://www.dukascopy-node.app/instrument/landgbgbx)|`landgbgbx`|Jan 1, 2000|
|[Legal & General Group PLC](https://www.dukascopy-node.app/instrument/lgengbgbx)|`lgengbgbx`|Jan 1, 2000|
|[Lloyds Banking Group PLC](https://www.dukascopy-node.app/instrument/lloygbgbx)|`lloygbgbx`|Jan 1, 2000|
|[London Stock Exchange Group PLC](https://www.dukascopy-node.app/instrument/lsegbgbx)|`lsegbgbx`|Jan 1, 2000|
|[Marks & Spencer Group PLC](https://www.dukascopy-node.app/instrument/mksgbgbx)|`mksgbgbx`|Jan 1, 2000|
|[Mondi PLC](https://www.dukascopy-node.app/instrument/mndigbgbx)|`mndigbgbx`|Jan 1, 2000|
|[M&G PLC](https://www.dukascopy-node.app/instrument/mnggbgbx)|`mnggbgbx`|Jan 1, 2000|
|[National Grid PLC](https://www.dukascopy-node.app/instrument/nggbgbx)|`nggbgbx`|Jan 1, 2000|
|[Next PLC](https://www.dukascopy-node.app/instrument/nxtgbgbx)|`nxtgbgbx`|Jan 1, 2000|
|[OCADO GROUP PLC](https://www.dukascopy-node.app/instrument/ocdogbgbx)|`ocdogbgbx`|Jan 1, 2000|
|[PHOENIX GROUP HOLDINGS PLC](https://www.dukascopy-node.app/instrument/phnxgbgbx)|`phnxgbgbx`|Jan 1, 2000|
|[Prudential PLC](https://www.dukascopy-node.app/instrument/prugbgbx)|`prugbgbx`|Jan 1, 2000|
|[Persimmon PLC](https://www.dukascopy-node.app/instrument/psngbgbx)|`psngbgbx`|Jan 1, 2000|
|[Pearson PLC](https://www.dukascopy-node.app/instrument/psongbgbx)|`psongbgbx`|Jan 1, 2000|
|[Reckitt Benckiser Group PLC](https://www.dukascopy-node.app/instrument/rbgbgbx)|`rbgbgbx`|Jan 1, 2000|
|[Royal Bank of Scotland Group PLC](https://www.dukascopy-node.app/instrument/rbsgbgbx)|`rbsgbgbx`|Jan 1, 2000|
|[Royal Dutch Shell PLC](https://www.dukascopy-node.app/instrument/rdsbgbgbx)|`rdsbgbgbx`|Jan 1, 2000|
|[RELX PLC](https://www.dukascopy-node.app/instrument/relgbgbx)|`relgbgbx`|Jan 1, 2000|
|[Rio Tinto PLC](https://www.dukascopy-node.app/instrument/riogbgbx)|`riogbgbx`|Jan 1, 2000|
|[RIGHTMOVE PLC](https://www.dukascopy-node.app/instrument/rmvgbgbx)|`rmvgbgbx`|Jan 1, 2000|
|[Rolls-Royce Holdings PLC](https://www.dukascopy-node.app/instrument/rrgbgbx)|`rrgbgbx`|Jan 1, 2000|
|[RENTOKIL INITIAL PLC](https://www.dukascopy-node.app/instrument/rtogbgbx)|`rtogbgbx`|Jan 1, 2000|
|[J Sainsbury PLC](https://www.dukascopy-node.app/instrument/sbrygbgbx)|`sbrygbgbx`|Jan 1, 2000|
|[Schroders PLC](https://www.dukascopy-node.app/instrument/sdrgbgbx)|`sdrgbgbx`|Jan 1, 2000|
|[Sage Group PLC/The](https://www.dukascopy-node.app/instrument/sgegbgbx)|`sgegbgbx`|Jan 1, 2000|
|[SEGRO PLC](https://www.dukascopy-node.app/instrument/sgrogbgbx)|`sgrogbgbx`|Jan 1, 2000|
|[Standard Life Aberdeen Plc](https://www.dukascopy-node.app/instrument/slagbgbx)|`slagbgbx`|Jan 1, 2000|
|[Smiths Group PLC](https://www.dukascopy-node.app/instrument/smingbgbx)|`smingbgbx`|Jan 1, 2000|
|[SCOTTISH MORTGAGE INV TR PLC](https://www.dukascopy-node.app/instrument/smtgbgbx)|`smtgbgbx`|Jan 1, 2000|
|[Smith & Nephew PLC](https://www.dukascopy-node.app/instrument/sngbgbx)|`sngbgbx`|Jan 1, 2000|
|[SPIRAX-SARCO ENGINEERING PLC](https://www.dukascopy-node.app/instrument/spxgbgbx)|`spxgbgbx`|Jan 1, 2000|
|[SSE PLC](https://www.dukascopy-node.app/instrument/ssegbgbx)|`ssegbgbx`|Jan 1, 2000|
|[Standard Chartered PLC](https://www.dukascopy-node.app/instrument/stangbgbx)|`stangbgbx`|Jan 1, 2000|
|[ST JAMES'S PLACE PLC](https://www.dukascopy-node.app/instrument/stjgbgbx)|`stjgbgbx`|Jan 1, 2000|
|[iShares Sust MSCI USA SRI](https://www.dukascopy-node.app/instrument/suasgbusd)|`suasgbusd`|Feb 26, 2025|
|[iShares MSCI EM SRI UCITS ETF](https://www.dukascopy-node.app/instrument/susmgbusd)|`susmgbusd`|Feb 26, 2025|
|[iShares MSCI USA SRI UCITS ETF](https://www.dukascopy-node.app/instrument/suusgbgbx)|`suusgbgbx`|Feb 26, 2025|
|[Severn Trent PLC](https://www.dukascopy-node.app/instrument/svtgbgbx)|`svtgbgbx`|Jan 1, 2000|
|[Tate & Lyle PLC](https://www.dukascopy-node.app/instrument/tategbgbx)|`tategbgbx`|Jan 1, 2000|
|[Tullow Oil PLC](https://www.dukascopy-node.app/instrument/tlwgbgbx)|`tlwgbgbx`|Jan 1, 2000|
|[Travis Perkins PLC](https://www.dukascopy-node.app/instrument/tpkgbgbx)|`tpkgbgbx`|Jan 1, 2000|
|[Tesco PLC](https://www.dukascopy-node.app/instrument/tscogbgbx)|`tscogbgbx`|Jan 1, 2000|
|[TAYLOR WIMPEY PLC](https://www.dukascopy-node.app/instrument/twgbgbx)|`twgbgbx`|Jan 1, 2000|
|[Unilever PLC](https://www.dukascopy-node.app/instrument/ulvrgbgbx)|`ulvrgbgbx`|Jan 1, 2000|
|[United Utilities Group PLC](https://www.dukascopy-node.app/instrument/uugbgbx)|`uugbgbx`|Jan 1, 2000|
|[Vodafone Group PLC](https://www.dukascopy-node.app/instrument/vodgbgbx)|`vodgbgbx`|Jan 1, 2000|
|[Vanguard FTSE 1000 UCITS ETF](https://www.dukascopy-node.app/instrument/vukggbgbp)|`vukggbgbp`|Mar 31, 2025|
|[Vanguard FTSE All-World UCITS ETF](https://www.dukascopy-node.app/instrument/vwrpgbgbp)|`vwrpgbgbp`|Mar 31, 2025|
|[Weir Group PLC/The](https://www.dukascopy-node.app/instrument/weirgbgbx)|`weirgbgbx`|Jan 1, 2000|
|[Wolseley PLC](https://www.dukascopy-node.app/instrument/wosgbgbx)|`wosgbgbx`|Jan 1, 2000|
|[WPP PLC](https://www.dukascopy-node.app/instrument/wppgbgbx)|`wppgbgbx`|Jan 1, 2000|
|[Ishares III PLC - Ishares Msci World Small Cap UCITS ETF](https://www.dukascopy-node.app/instrument/wsmlgbusd)|`wsmlgbusd`|Feb 26, 2025|
|[Whitbread PLC](https://www.dukascopy-node.app/instrument/wtbgbgbx)|`wtbgbgbx`|Jan 1, 2000|
|[Xtrackers Nasdaq 100](https://www.dukascopy-node.app/instrument/xnaqgbgbp)|`xnaqgbgbp`|Mar 31, 2025|
|[Xtrackers MSCI Europe Utilities Screened](https://www.dukascopy-node.app/instrument/xs6rgbgbx)|`xs6rgbgbx`|Mar 31, 2025|
<h3 id="us">United States 🇺🇸</h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[AbbVie Inc](https://www.dukascopy-node.app/instrument/aabvususd)|`aabvususd`|Jan 1, 2000|
|[AMERICAN AIRLINES GROUP INC](https://www.dukascopy-node.app/instrument/aalususd)|`aalususd`|Jan 1, 2000|
|[APPLE INC](https://www.dukascopy-node.app/instrument/aaplususd)|`aaplususd`|Jan 1, 2000|
|[ADVANCE AUTO PARTS INC](https://www.dukascopy-node.app/instrument/aapususd)|`aapususd`|Jan 1, 2000|
|[ALCOA INC](https://www.dukascopy-node.app/instrument/aaususd)|`aaususd`|Jan 1, 2000|
|[Ambev S.A.](https://www.dukascopy-node.app/instrument/abevususd)|`abevususd`|Jan 1, 2000|
|[ABBOTT LABORATORIES](https://www.dukascopy-node.app/instrument/abtususd)|`abtususd`|Jan 1, 2000|
|[ARCH CAPITAL GROUP LTD](https://www.dukascopy-node.app/instrument/acglususd)|`acglususd`|Jan 1, 2000|
|[AECOM](https://www.dukascopy-node.app/instrument/acmususd)|`acmususd`|Jan 1, 2000|
|[ACCENTURE PLC-CL A](https://www.dukascopy-node.app/instrument/acnususd)|`acnususd`|Jan 1, 2000|
|[ADOBE SYSTEMS INC](https://www.dukascopy-node.app/instrument/adbeususd)|`adbeususd`|Jan 1, 2000|
|[ANALOG DEVICES INC](https://www.dukascopy-node.app/instrument/adiususd)|`adiususd`|Jan 1, 2000|
|[AUTODESK INC](https://www.dukascopy-node.app/instrument/adskususd)|`adskususd`|Jan 1, 2000|
|[AMERICAN ELECTRIC POWER](https://www.dukascopy-node.app/instrument/aepususd)|`aepususd`|Jan 1, 2000|
|[AMERICAN FINANCIAL GROUP INC](https://www.dukascopy-node.app/instrument/afgususd)|`afgususd`|Jan 1, 2000|
|[AGNC INVESTMENT CORP](https://www.dukascopy-node.app/instrument/agncususd)|`agncususd`|Jan 1, 2000|
|[AMERICAN INTERNATIONAL GROUP](https://www.dukascopy-node.app/instrument/aigususd)|`aigususd`|Jan 1, 2000|
|[ARTHUR J GALLAGHER & CO](https://www.dukascopy-node.app/instrument/ajgususd)|`ajgususd`|Jan 1, 2000|
|[ALBEMARLE CORP](https://www.dukascopy-node.app/instrument/albususd)|`albususd`|Jan 1, 2000|
|[ALIGN TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/algnususd)|`algnususd`|Jan 1, 2000|
|[ALKERMES PLC](https://www.dukascopy-node.app/instrument/alksususd)|`alksususd`|Jan 1, 2000|
|[ALASKA AIR GROUP INC](https://www.dukascopy-node.app/instrument/alkususd)|`alkususd`|Jan 1, 2000|
|[ALLEGION PLC](https://www.dukascopy-node.app/instrument/alleususd)|`alleususd`|Jan 1, 2000|
|[ALLSTATE CORP](https://www.dukascopy-node.app/instrument/allususd)|`allususd`|Jan 1, 2000|
|[ALLY FINANCIAL INC](https://www.dukascopy-node.app/instrument/allyususd)|`allyususd`|Jan 1, 2000|
|[APPLIED MATERIALS INC](https://www.dukascopy-node.app/instrument/amatususd)|`amatususd`|Jan 1, 2000|
|[AMCOR PLC](https://www.dukascopy-node.app/instrument/amcrususd)|`amcrususd`|Jan 1, 2000|
|[ADVANCED MICRO DEVICES](https://www.dukascopy-node.app/instrument/amdususd)|`amdususd`|Jan 1, 2000|
|[AMGEN INC](https://www.dukascopy-node.app/instrument/amgnususd)|`amgnususd`|Jan 1, 2000|
|[AMERICAN HOMES 4 RENT- A](https://www.dukascopy-node.app/instrument/amhususd)|`amhususd`|Jan 1, 2000|
|[AMERIPRISE FINANCIAL INC](https://www.dukascopy-node.app/instrument/ampususd)|`ampususd`|Jan 1, 2000|
|[AMERICAN TOWER CORP](https://www.dukascopy-node.app/instrument/amtususd)|`amtususd`|Jan 1, 2000|
|[American Well Corp. (Class A)](https://www.dukascopy-node.app/instrument/amwlususd)|`amwlususd`|Jan 1, 2000|
|[AMAZON.COM INC](https://www.dukascopy-node.app/instrument/amznususd)|`amznususd`|Jan 1, 2000|
|[AON PLC-CLASS A](https://www.dukascopy-node.app/instrument/aonususd)|`aonususd`|Jan 1, 2000|
|[SMITH (A.O.) CORP](https://www.dukascopy-node.app/instrument/aosususd)|`aosususd`|Jan 1, 2000|
|[APACHE CORP](https://www.dukascopy-node.app/instrument/apaususd)|`apaususd`|Jan 1, 2000|
|[AIR PRODUCTS & CHEMICALS INC](https://www.dukascopy-node.app/instrument/apdususd)|`apdususd`|Jan 1, 2000|
|[ALEXANDRIA REAL ESTATE EQUIT](https://www.dukascopy-node.app/instrument/areususd)|`areususd`|Jan 1, 2000|
|[ARAMARK](https://www.dukascopy-node.app/instrument/armkususd)|`armkususd`|Jan 1, 2000|
|[ANTERO RESOURCES CORP](https://www.dukascopy-node.app/instrument/arususd)|`arususd`|Jan 1, 2000|
|[ARROW ELECTRONICS INC](https://www.dukascopy-node.app/instrument/arwususd)|`arwususd`|Jan 1, 2000|
|[ATMOS ENERGY CORP](https://www.dukascopy-node.app/instrument/atoususd)|`atoususd`|Jan 1, 2000|
|[AGILENT TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/aususd)|`aususd`|Jan 1, 2000|
|[AVALONBAY COMMUNITIES INC](https://www.dukascopy-node.app/instrument/avbususd)|`avbususd`|Jan 1, 2000|
|[Broadcom Limited](https://www.dukascopy-node.app/instrument/avgoususd)|`avgoususd`|Jan 1, 2000|
|[AVANTOR INC](https://www.dukascopy-node.app/instrument/avtrususd)|`avtrususd`|Jan 1, 2000|
|[AMERICAN WATER WORKS CO INC](https://www.dukascopy-node.app/instrument/awkususd)|`awkususd`|Jan 1, 2000|
|[AMERICAN EXPRESS CO](https://www.dukascopy-node.app/instrument/axpususd)|`axpususd`|Aug 26, 2015|
|[AXALTA COATING SYSTEMS LTD](https://www.dukascopy-node.app/instrument/axtaususd)|`axtaususd`|Jan 1, 2000|
|[AstraZeneca PLC](https://www.dukascopy-node.app/instrument/aznususd)|`aznususd`|Jan 1, 2000|
|[ALIBABA GROUP HOLDING-SP ADR](https://www.dukascopy-node.app/instrument/babaususd)|`babaususd`|Jan 1, 2000|
|[BANK OF AMERICA CORP](https://www.dukascopy-node.app/instrument/bacususd)|`bacususd`|Jan 1, 2000|
|[BOOZ ALLEN HAMILTON HOLDINGS](https://www.dukascopy-node.app/instrument/bahususd)|`bahususd`|Jan 1, 2000|
|[Boeing Co](https://www.dukascopy-node.app/instrument/baususd)|`baususd`|Aug 26, 2015|
|[Banco Bradesco S.A.](https://www.dukascopy-node.app/instrument/bbdususd)|`bbdususd`|Jan 1, 2000|
|[BATH & BODY WORKS INC](https://www.dukascopy-node.app/instrument/bbwiususd)|`bbwiususd`|Jan 1, 2000|
|[BEST BUY CO INC](https://www.dukascopy-node.app/instrument/bbyususd)|`bbyususd`|Jan 1, 2000|
|[BAIDU INC - SPON ADR](https://www.dukascopy-node.app/instrument/biduususd)|`biduususd`|Jan 1, 2000|
|[BIOGEN INC](https://www.dukascopy-node.app/instrument/biibususd)|`biibususd`|Jan 1, 2000|
|[BIO-RAD LABORATORIES-A](https://www.dukascopy-node.app/instrument/bioususd)|`bioususd`|Jan 1, 2000|
|[BAKER HUGHES CO](https://www.dukascopy-node.app/instrument/bkrususd)|`bkrususd`|Jan 1, 2000|
|[BANK OF NEW YORK MELLON CORP](https://www.dukascopy-node.app/instrument/bkususd)|`bkususd`|Jan 1, 2000|
|[BIOMARIN PHARMACEUTICAL INC](https://www.dukascopy-node.app/instrument/bmrnususd)|`bmrnususd`|Jan 1, 2000|
|[BRISTOL-MYERS SQUIBB CO](https://www.dukascopy-node.app/instrument/bmyususd)|`bmyususd`|Jan 1, 2000|
|[POPULAR INC](https://www.dukascopy-node.app/instrument/bpopususd)|`bpopususd`|Jan 1, 2000|
|[BP p.l.c.](https://www.dukascopy-node.app/instrument/bpususd)|`bpususd`|Jan 1, 2000|
|[BERKSHIRE HATHAWAY INC-CL B](https://www.dukascopy-node.app/instrument/brkbususd)|`brkbususd`|Jan 1, 2000|
|[BRUKER CORP](https://www.dukascopy-node.app/instrument/brkrususd)|`brkrususd`|Jan 1, 2000|
|[BROWN & BROWN INC](https://www.dukascopy-node.app/instrument/broususd)|`broususd`|Jan 1, 2000|
|[BROADRIDGE FINANCIAL SOLUTIO](https://www.dukascopy-node.app/instrument/brususd)|`brususd`|Jan 1, 2000|
|[BRIXMOR PROPERTY GROUP INC](https://www.dukascopy-node.app/instrument/brxususd)|`brxususd`|Jan 1, 2000|
|[BOSTON SCIENTIFIC CORP](https://www.dukascopy-node.app/instrument/bsxususd)|`bsxususd`|Jan 1, 2000|
|[BURLINGTON STORES INC](https://www.dukascopy-node.app/instrument/burlususd)|`burlususd`|Jan 1, 2000|
|[BORGWARNER INC](https://www.dukascopy-node.app/instrument/bwaususd)|`bwaususd`|Jan 1, 2000|
|[BEYOND MEAT INC](https://www.dukascopy-node.app/instrument/byndususd)|`byndususd`|Jan 1, 2000|
|[CREDIT ACCEPTANCE CORP](https://www.dukascopy-node.app/instrument/caccususd)|`caccususd`|Jan 1, 2000|
|[CACI INTERNATIONAL INC -CL A](https://www.dukascopy-node.app/instrument/caciususd)|`caciususd`|Jan 1, 2000|
|[CONAGRA FOODS INC](https://www.dukascopy-node.app/instrument/cagususd)|`cagususd`|Jan 1, 2000|
|[CARDINAL HEALTH INC](https://www.dukascopy-node.app/instrument/cahususd)|`cahususd`|Jan 1, 2000|
|[CARRIER GLOBAL CORP](https://www.dukascopy-node.app/instrument/carrususd)|`carrususd`|Jan 1, 2000|
|[CASEY'S GENERAL STORES INC](https://www.dukascopy-node.app/instrument/casyususd)|`casyususd`|Jan 1, 2000|
|[CATERPILLAR INC](https://www.dukascopy-node.app/instrument/catususd)|`catususd`|Aug 26, 2015|
|[CBOE GLOBAL MARKETS INC](https://www.dukascopy-node.app/instrument/cboeususd)|`cboeususd`|Jan 1, 2000|
|[CHUBB LTD](https://www.dukascopy-node.app/instrument/cbususd)|`cbususd`|Jan 1, 2000|
|[CROWN CASTLE INTL CORP](https://www.dukascopy-node.app/instrument/cciususd)|`cciususd`|Jan 1, 2000|
|[CROWN HOLDINGS INC](https://www.dukascopy-node.app/instrument/cckususd)|`cckususd`|Jan 1, 2000|
|[CARNIVAL CORP](https://www.dukascopy-node.app/instrument/cclususd)|`cclususd`|Jan 1, 2000|
|[CERIDIAN HCM HOLDING INC](https://www.dukascopy-node.app/instrument/cdayususd)|`cdayususd`|Jan 1, 2000|
|[CENTENNIAL RESOURCE DEVELO-A / Permian Resources Corp](https://www.dukascopy-node.app/instrument/cdevususd)|`cdevususd`|Jan 1, 2000|
|[CADENCE DESIGN SYS INC](https://www.dukascopy-node.app/instrument/cdnsususd)|`cdnsususd`|Jan 1, 2000|
|[CDW CORP/DE](https://www.dukascopy-node.app/instrument/cdwususd)|`cdwususd`|Jan 1, 2000|
|[CELANESE CORP](https://www.dukascopy-node.app/instrument/ceususd)|`ceususd`|Jan 1, 2000|
|[CITIZENS FINANCIAL GROUP](https://www.dukascopy-node.app/instrument/cfgususd)|`cfgususd`|Jan 1, 2000|
|[CULLEN/FROST BANKERS INC](https://www.dukascopy-node.app/instrument/cfrususd)|`cfrususd`|Jan 1, 2000|
|[CF INDUSTRIES HOLDINGS INC](https://www.dukascopy-node.app/instrument/cfususd)|`cfususd`|Jan 1, 2000|
|[COGNEX CORP](https://www.dukascopy-node.app/instrument/cgnxususd)|`cgnxususd`|Jan 1, 2000|
|[CHURCH & DWIGHT CO INC](https://www.dukascopy-node.app/instrument/chdususd)|`chdususd`|Jan 1, 2000|
|[CIGNA CORP](https://www.dukascopy-node.app/instrument/ciususd)|`ciususd`|Jan 1, 2000|
|[COLGATE-PALMOLIVE CO](https://www.dukascopy-node.app/instrument/clususd)|`clususd`|Jan 1, 2000|
|[COMCAST CORP-CLASS A](https://www.dukascopy-node.app/instrument/cmcsaususd)|`cmcsaususd`|Jan 1, 2000|
|[CME GROUP INC](https://www.dukascopy-node.app/instrument/cmeususd)|`cmeususd`|Jan 1, 2000|
|[CHIPOTLE MEXICAN GRILL INC](https://www.dukascopy-node.app/instrument/cmgususd)|`cmgususd`|Jan 1, 2000|
|[CENTENE CORP](https://www.dukascopy-node.app/instrument/cncususd)|`cncususd`|Jan 1, 2000|
|[AMERICOLD REALTY TRUST](https://www.dukascopy-node.app/instrument/coldususd)|`coldususd`|Jan 1, 2000|
|[COOPER COS INC/THE](https://www.dukascopy-node.app/instrument/cooususd)|`cooususd`|Jan 1, 2000|
|[CONOCOPHILLIPS](https://www.dukascopy-node.app/instrument/copususd)|`copususd`|Jan 1, 2000|
|[COSTCO WHOLESALE CORP](https://www.dukascopy-node.app/instrument/costususd)|`costususd`|Jan 1, 2000|
|[CAPRI HOLDINGS LTD](https://www.dukascopy-node.app/instrument/cpriususd)|`cpriususd`|Jan 1, 2000|
|[COPART INC](https://www.dukascopy-node.app/instrument/cprtususd)|`cprtususd`|Jan 1, 2000|
|[CAMDEN PROPERTY TRUST](https://www.dukascopy-node.app/instrument/cptususd)|`cptususd`|Jan 1, 2000|
|[CHARLES RIVER LABORATORIES](https://www.dukascopy-node.app/instrument/crlususd)|`crlususd`|Jan 1, 2000|
|[SALESFORCE.COM INC](https://www.dukascopy-node.app/instrument/crmususd)|`crmususd`|Jan 1, 2000|
|[CISCO SYSTEMS INC](https://www.dukascopy-node.app/instrument/cscoususd)|`cscoususd`|Aug 26, 2015|
|[COSTAR GROUP INC](https://www.dukascopy-node.app/instrument/csgpususd)|`csgpususd`|Jan 1, 2000|
|[CARLISLE COS INC](https://www.dukascopy-node.app/instrument/cslususd)|`cslususd`|Jan 1, 2000|
|[CSX CORP](https://www.dukascopy-node.app/instrument/csxususd)|`csxususd`|Jan 1, 2000|
|[CENTURYLINK INC](https://www.dukascopy-node.app/instrument/ctlususd)|`ctlususd`|Jan 1, 2000|
|[COGNIZANT TECH SOLUTIONS-A](https://www.dukascopy-node.app/instrument/ctshususd)|`ctshususd`|Jan 1, 2000|
|[CORTEVA INC](https://www.dukascopy-node.app/instrument/ctvaususd)|`ctvaususd`|Jan 1, 2000|
|[CUBESMART](https://www.dukascopy-node.app/instrument/cubeususd)|`cubeususd`|Jan 1, 2000|
|[CITIGROUP INC](https://www.dukascopy-node.app/instrument/cususd)|`cususd`|Jan 1, 2000|
|[CARVANA CO](https://www.dukascopy-node.app/instrument/cvnaususd)|`cvnaususd`|Jan 1, 2000|
|[CVS HEALTH CORP](https://www.dukascopy-node.app/instrument/cvsususd)|`cvsususd`|Jan 1, 2000|
|[CHEVRON CORP](https://www.dukascopy-node.app/instrument/cvxususd)|`cvxususd`|Aug 26, 2015|
|[CAESARS ENTERTAINMENT INC](https://www.dukascopy-node.app/instrument/czrususd)|`czrususd`|Jan 1, 2000|
|[DELTA AIR LINES INC](https://www.dukascopy-node.app/instrument/dalususd)|`dalususd`|Jan 1, 2000|
|[DROPBOX INC-CLASS A](https://www.dukascopy-node.app/instrument/dbxususd)|`dbxususd`|Jan 1, 2000|
|[DELL TECHNOLOGIES -C](https://www.dukascopy-node.app/instrument/dellususd)|`dellususd`|Jan 1, 2000|
|[DEERE & CO](https://www.dukascopy-node.app/instrument/deususd)|`deususd`|Jan 1, 2000|
|[DOLLAR GENERAL CORP](https://www.dukascopy-node.app/instrument/dgususd)|`dgususd`|Jan 1, 2000|
|[DR HORTON INC](https://www.dukascopy-node.app/instrument/dhiususd)|`dhiususd`|Jan 1, 2000|
|[DANAHER CORP](https://www.dukascopy-node.app/instrument/dhrususd)|`dhrususd`|Jan 1, 2000|
|[WALT DISNEY CO/THE](https://www.dukascopy-node.app/instrument/disususd)|`disususd`|Aug 26, 2015|
|[DICK'S SPORTING GOODS INC](https://www.dukascopy-node.app/instrument/dksususd)|`dksususd`|Jan 1, 2000|
|[DIGITAL REALTY TRUST INC](https://www.dukascopy-node.app/instrument/dlrususd)|`dlrususd`|Jan 1, 2000|
|[DOLLAR TREE INC](https://www.dukascopy-node.app/instrument/dltrususd)|`dltrususd`|Jan 1, 2000|
|[DOCUSIGN INC](https://www.dukascopy-node.app/instrument/docuususd)|`docuususd`|Jan 1, 2000|
|[AMDOCS LTD](https://www.dukascopy-node.app/instrument/doxususd)|`doxususd`|Jan 1, 2000|
|[DOMINO'S PIZZA INC](https://www.dukascopy-node.app/instrument/dpzususd)|`dpzususd`|Jan 1, 2000|
|[DYNATRACE INC](https://www.dukascopy-node.app/instrument/dtususd)|`dtususd`|Jan 1, 2000|
|[DUKE ENERGY CORP](https://www.dukascopy-node.app/instrument/dukususd)|`dukususd`|Jan 1, 2000|
|[DOMINION RESOURCES INC/VA](https://www.dukascopy-node.app/instrument/dususd)|`dususd`|Jan 1, 2000|
|[DAVITA HEALTHCARE PARTNERS I](https://www.dukascopy-node.app/instrument/dvaususd)|`dvaususd`|Jan 1, 2000|
|[DEVON ENERGY CORP](https://www.dukascopy-node.app/instrument/dvnususd)|`dvnususd`|Jan 1, 2000|
|[DEXCOM INC](https://www.dukascopy-node.app/instrument/dxcmususd)|`dxcmususd`|Jan 1, 2000|
|[DXC TECHNOLOGY CO](https://www.dukascopy-node.app/instrument/dxcususd)|`dxcususd`|Jan 1, 2000|
|[ELECTRONIC ARTS INC](https://www.dukascopy-node.app/instrument/eaususd)|`eaususd`|Jan 1, 2000|
|[EBAY INC](https://www.dukascopy-node.app/instrument/ebayususd)|`ebayususd`|Jan 1, 2000|
|[EURONET WORLDWIDE INC](https://www.dukascopy-node.app/instrument/eeftususd)|`eeftususd`|Jan 1, 2000|
|[EQUIFAX INC](https://www.dukascopy-node.app/instrument/efxususd)|`efxususd`|Jan 1, 2000|
|[ENCOMPASS HEALTH CORP](https://www.dukascopy-node.app/instrument/ehcususd)|`ehcususd`|Jan 1, 2000|
|[EDISON INTERNATIONAL](https://www.dukascopy-node.app/instrument/eixususd)|`eixususd`|Jan 1, 2000|
|[ELANCO ANIMAL HEALTH INC](https://www.dukascopy-node.app/instrument/elanususd)|`elanususd`|Jan 1, 2000|
|[EQUITY LIFESTYLE PROPERTIES](https://www.dukascopy-node.app/instrument/elsususd)|`elsususd`|Jan 1, 2000|
|[ESTEE LAUDER COMPANIES-CL A](https://www.dukascopy-node.app/instrument/elususd)|`elususd`|Jan 1, 2000|
|[EMERSON ELECTRIC CO](https://www.dukascopy-node.app/instrument/emrususd)|`emrususd`|Jan 1, 2000|
|[ENPHASE ENERGY INC](https://www.dukascopy-node.app/instrument/enphususd)|`enphususd`|Jan 1, 2000|
|[ENTEGRIS INC](https://www.dukascopy-node.app/instrument/entgususd)|`entgususd`|Jan 1, 2000|
|[EOG RESOURCES INC](https://www.dukascopy-node.app/instrument/eogususd)|`eogususd`|Jan 1, 2000|
|[EPAM SYSTEMS INC](https://www.dukascopy-node.app/instrument/epamususd)|`epamususd`|Jan 1, 2000|
|[EQUITABLE HOLDINGS INC](https://www.dukascopy-node.app/instrument/eqhususd)|`eqhususd`|Jan 1, 2000|
|[EQT CORP](https://www.dukascopy-node.app/instrument/eqtususd)|`eqtususd`|Jan 1, 2000|
|[ESSEX PROPERTY TRUST INC](https://www.dukascopy-node.app/instrument/essususd)|`essususd`|Jan 1, 2000|
|[ELASTIC NV](https://www.dukascopy-node.app/instrument/estcususd)|`estcususd`|Jan 1, 2000|
|[EVERSOURCE ENERGY](https://www.dukascopy-node.app/instrument/esususd)|`esususd`|Jan 1, 2000|
|[EATON CORP PLC](https://www.dukascopy-node.app/instrument/etnususd)|`etnususd`|Jan 1, 2000|
|[ETSY INC](https://www.dukascopy-node.app/instrument/etsyususd)|`etsyususd`|Jan 1, 2000|
|[EVERGY INC](https://www.dukascopy-node.app/instrument/evrgususd)|`evrgususd`|Jan 1, 2000|
|[EAST WEST BANCORP INC](https://www.dukascopy-node.app/instrument/ewbcususd)|`ewbcususd`|Jan 1, 2000|
|[EDWARDS LIFESCIENCES CORP](https://www.dukascopy-node.app/instrument/ewususd)|`ewususd`|Jan 1, 2000|
|[EXELON CORP](https://www.dukascopy-node.app/instrument/excususd)|`excususd`|Jan 1, 2000|
|[EXELIXIS INC](https://www.dukascopy-node.app/instrument/exelususd)|`exelususd`|Jan 1, 2000|
|[EXPEDIA INC](https://www.dukascopy-node.app/instrument/expeususd)|`expeususd`|Jan 1, 2000|
|[EXTRA SPACE STORAGE INC](https://www.dukascopy-node.app/instrument/exrususd)|`exrususd`|Jan 1, 2000|
|[DIAMONDBACK ENERGY INC](https://www.dukascopy-node.app/instrument/fangususd)|`fangususd`|Jan 1, 2000|
|[FACEBOOK INC-A / Meta](https://www.dukascopy-node.app/instrument/fbususd)|`fbususd`|Jan 1, 2000|
|[FIRST CITIZENS BCSHS  -CL A](https://www.dukascopy-node.app/instrument/fcncaususd)|`fcncaususd`|Jan 1, 2000|
|[FREEPORT-MCMORAN INC](https://www.dukascopy-node.app/instrument/fcxususd)|`fcxususd`|Jan 1, 2000|
|[FACTSET RESEARCH SYSTEMS INC](https://www.dukascopy-node.app/instrument/fdsususd)|`fdsususd`|Jan 1, 2000|
|[FEDEX CORP](https://www.dukascopy-node.app/instrument/fdxususd)|`fdxususd`|Jan 1, 2000|
|[FIRSTENERGY CORP](https://www.dukascopy-node.app/instrument/feususd)|`feususd`|Jan 1, 2000|
|[FAIR ISAAC CORP](https://www.dukascopy-node.app/instrument/ficoususd)|`ficoususd`|Jan 1, 2000|
|[FIFTH THIRD BANCORP](https://www.dukascopy-node.app/instrument/fitbususd)|`fitbususd`|Jan 1, 2000|
|[FIVE BELOW](https://www.dukascopy-node.app/instrument/fiveususd)|`fiveususd`|Jan 1, 2000|
|[FLEETCOR TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/fltususd)|`fltususd`|Jan 1, 2000|
|[FLOOR & DECOR HOLDINGS INC-A](https://www.dukascopy-node.app/instrument/fndususd)|`fndususd`|Jan 1, 2000|
|[FIDELITY NATIONAL FINANCIAL](https://www.dukascopy-node.app/instrument/fnfususd)|`fnfususd`|Jan 1, 2000|
|[TWENTY-FIRST CENTURY FOX-A](https://www.dukascopy-node.app/instrument/foxaususd)|`foxaususd`|Jan 1, 2000|
|[FMC TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/ftiususd)|`ftiususd`|Jan 1, 2000|
|[FORTINET INC](https://www.dukascopy-node.app/instrument/ftntususd)|`ftntususd`|Jan 1, 2000|
|[FORTIVE CORP](https://www.dukascopy-node.app/instrument/ftvususd)|`ftvususd`|Jan 1, 2000|
|[FORD MOTOR CO](https://www.dukascopy-node.app/instrument/fususd)|`fususd`|Jan 1, 2000|
|[GODADDY INC - CLASS A](https://www.dukascopy-node.app/instrument/gddyususd)|`gddyususd`|Jan 1, 2000|
|[GENERAL DYNAMICS CORP](https://www.dukascopy-node.app/instrument/gdususd)|`gdususd`|Jan 1, 2000|
|[GENERAL ELECTRIC CO](https://www.dukascopy-node.app/instrument/geususd)|`geususd`|Aug 26, 2015|
|[GRACO INC](https://www.dukascopy-node.app/instrument/gggususd)|`gggususd`|Jan 1, 2000|
|[GUARDANT HEALTH INC](https://www.dukascopy-node.app/instrument/ghususd)|`ghususd`|Jan 1, 2000|
|[GILEAD SCIENCES INC](https://www.dukascopy-node.app/instrument/gildususd)|`gildususd`|Jan 1, 2000|
|[GENERAL MILLS INC](https://www.dukascopy-node.app/instrument/gisususd)|`gisususd`|Jan 1, 2000|
|[GAMING AND LEISURE PROPERTIE](https://www.dukascopy-node.app/instrument/glpiususd)|`glpiususd`|Jan 1, 2000|
|[GLOBE LIFE INC](https://www.dukascopy-node.app/instrument/glususd)|`glususd`|Jan 1, 2000|
|[CORNING INC](https://www.dukascopy-node.app/instrument/glwususd)|`glwususd`|Jan 1, 2000|
|[GENERAL MOTORS CO](https://www.dukascopy-node.app/instrument/gmususd)|`gmususd`|Jan 1, 2000|
|[GENERAC HOLDINGS INC](https://www.dukascopy-node.app/instrument/gnrcususd)|`gnrcususd`|Jan 1, 2000|
|[ALPHABET INC-CL A](https://www.dukascopy-node.app/instrument/googlususd)|`googlususd`|Jan 1, 2000|
|[ALPHABET INC-CL C](https://www.dukascopy-node.app/instrument/googususd)|`googususd`|Jan 1, 2000|
|[GLOBAL PAYMENTS INC](https://www.dukascopy-node.app/instrument/gpnususd)|`gpnususd`|Jan 1, 2000|
|[GAP INC/THE](https://www.dukascopy-node.app/instrument/gpsususd)|`gpsususd`|Jan 1, 2000|
|[GOLDMAN SACHS GROUP INC](https://www.dukascopy-node.app/instrument/gsususd)|`gsususd`|Aug 26, 2015|
|[GENPACT LTD](https://www.dukascopy-node.app/instrument/gususd)|`gususd`|Jan 1, 2000|
|[HALLIBURTON CO](https://www.dukascopy-node.app/instrument/halususd)|`halususd`|Jan 1, 2000|
|[HANESBRANDS INC](https://www.dukascopy-node.app/instrument/hbiususd)|`hbiususd`|Jan 1, 2000|
|[HCA HEALTHCARE INC](https://www.dukascopy-node.app/instrument/hcaususd)|`hcaususd`|Jan 1, 2000|
|[WELLTOWER INC](https://www.dukascopy-node.app/instrument/hcnususd)|`hcnususd`|Jan 1, 2000|
|[HOME DEPOT INC](https://www.dukascopy-node.app/instrument/hdususd)|`hdususd`|Aug 26, 2015|
|[HEICO CORP](https://www.dukascopy-node.app/instrument/heiususd)|`heiususd`|Jan 1, 2000|
|[HUNTINGTON INGALLS INDUSTRIE](https://www.dukascopy-node.app/instrument/hiiususd)|`hiiususd`|Jan 1, 2000|
|[HILTON WORLDWIDE HOLDINGS IN](https://www.dukascopy-node.app/instrument/hltususd)|`hltususd`|Jan 1, 2000|
|[HARLEY-DAVIDSON INC](https://www.dukascopy-node.app/instrument/hogususd)|`hogususd`|Jan 1, 2000|
|[HONEYWELL INTERNATIONAL INC](https://www.dukascopy-node.app/instrument/honususd)|`honususd`|Jan 1, 2000|
|[HEWLETT PACKARD ENTERPRISE](https://www.dukascopy-node.app/instrument/hpeususd)|`hpeususd`|Jan 1, 2000|
|[HP INC](https://www.dukascopy-node.app/instrument/hpqususd)|`hpqususd`|Jan 1, 2000|
|[HEALTHCARE TRUST OF AME-CL A](https://www.dukascopy-node.app/instrument/htaususd)|`htaususd`|Jan 1, 2000|
|[HUBBELL INC](https://www.dukascopy-node.app/instrument/hubbususd)|`hubbususd`|Jan 1, 2000|
|[HUBSPOT INC](https://www.dukascopy-node.app/instrument/hubsususd)|`hubsususd`|Jan 1, 2000|
|[HUMANA INC](https://www.dukascopy-node.app/instrument/humususd)|`humususd`|Jan 1, 2000|
|[HYATT HOTELS CORP - CL A](https://www.dukascopy-node.app/instrument/hususd)|`hususd`|Jan 1, 2000|
|[HOWMET AEROSPACE INC](https://www.dukascopy-node.app/instrument/hwmususd)|`hwmususd`|Jan 1, 2000|
|[INTERACTIVE BROKERS GRO-CL A](https://www.dukascopy-node.app/instrument/ibkrususd)|`ibkrususd`|Jan 1, 2000|
|[INTL BUSINESS MACHINES CORP](https://www.dukascopy-node.app/instrument/ibmususd)|`ibmususd`|Aug 26, 2015|
|[INTERCONTINENTAL EXCHANGE IN](https://www.dukascopy-node.app/instrument/iceususd)|`iceususd`|Jan 1, 2000|
|[IDEXX LABORATORIES INC](https://www.dukascopy-node.app/instrument/idxxususd)|`idxxususd`|Jan 1, 2000|
|[IDEX CORP](https://www.dukascopy-node.app/instrument/iexususd)|`iexususd`|Jan 1, 2000|
|[ILLUMINA INC](https://www.dukascopy-node.app/instrument/ilmnususd)|`ilmnususd`|Jan 1, 2000|
|[INCYTE CORP](https://www.dukascopy-node.app/instrument/incyususd)|`incyususd`|Jan 1, 2000|
|[INTEL CORP](https://www.dukascopy-node.app/instrument/intcususd)|`intcususd`|Aug 26, 2015|
|[INTUIT INC](https://www.dukascopy-node.app/instrument/intuususd)|`intuususd`|Jan 1, 2000|
|[INVITATION HOMES INC](https://www.dukascopy-node.app/instrument/invhususd)|`invhususd`|Jan 1, 2000|
|[IONIS PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/ionsususd)|`ionsususd`|Jan 1, 2000|
|[IPG PHOTONICS CORP](https://www.dukascopy-node.app/instrument/ipgpususd)|`ipgpususd`|Jan 1, 2000|
|[INTERPUBLIC GROUP OF COS INC](https://www.dukascopy-node.app/instrument/ipgususd)|`ipgususd`|Jan 1, 2000|
|[IQVIA HOLDINGS INC](https://www.dukascopy-node.app/instrument/iqvususd)|`iqvususd`|Jan 1, 2000|
|[INGERSOLL-RAND INC](https://www.dukascopy-node.app/instrument/irususd)|`irususd`|Jan 1, 2000|
|[INTUITIVE SURGICAL INC](https://www.dukascopy-node.app/instrument/isrgususd)|`isrgususd`|Jan 1, 2000|
|[Itau Unibanco Holding S.A. isin=US4655621062](https://www.dukascopy-node.app/instrument/itubususd)|`itubususd`|Jan 1, 2000|
|[GARTNER INC](https://www.dukascopy-node.app/instrument/itususd)|`itususd`|Jan 1, 2000|
|[ILLINOIS TOOL WORKS](https://www.dukascopy-node.app/instrument/itwususd)|`itwususd`|Jan 1, 2000|
|[INVESCO LTD](https://www.dukascopy-node.app/instrument/ivzususd)|`ivzususd`|Jan 1, 2000|
|[JAZZ PHARMACEUTICALS PLC](https://www.dukascopy-node.app/instrument/jazzususd)|`jazzususd`|Jan 1, 2000|
|[JETBLUE AIRWAYS CORP](https://www.dukascopy-node.app/instrument/jbluususd)|`jbluususd`|Jan 1, 2000|
|[JOHNSON CONTROLS INC](https://www.dukascopy-node.app/instrument/jciususd)|`jciususd`|Jan 1, 2000|
|[JEFFERIES FINANCIAL GROUP IN](https://www.dukascopy-node.app/instrument/jefususd)|`jefususd`|Jan 1, 2000|
|[JACK HENRY & ASSOCIATES INC](https://www.dukascopy-node.app/instrument/jkhyususd)|`jkhyususd`|Jan 1, 2000|
|[JONES LANG LASALLE INC](https://www.dukascopy-node.app/instrument/jllususd)|`jllususd`|Jan 1, 2000|
|[JOHNSON & JOHNSON](https://www.dukascopy-node.app/instrument/jnjususd)|`jnjususd`|Aug 26, 2015|
|[JPMORGAN CHASE & CO](https://www.dukascopy-node.app/instrument/jpmususd)|`jpmususd`|Aug 26, 2015|
|[KEYSIGHT TECHNOLOGIES IN](https://www.dukascopy-node.app/instrument/keysususd)|`keysususd`|Jan 1, 2000|
|[KEYCORP](https://www.dukascopy-node.app/instrument/keyususd)|`keyususd`|Jan 1, 2000|
|[KRAFT HEINZ CO/THE](https://www.dukascopy-node.app/instrument/khcususd)|`khcususd`|Jan 1, 2000|
|[KIMBERLY-CLARK CORP](https://www.dukascopy-node.app/instrument/kmbususd)|`kmbususd`|Jan 1, 2000|
|[KINDER MORGAN INC](https://www.dukascopy-node.app/instrument/kmiususd)|`kmiususd`|Jan 1, 2000|
|[CARMAX INC](https://www.dukascopy-node.app/instrument/kmxususd)|`kmxususd`|Jan 1, 2000|
|[KNIGHT-SWIFT TRANSPORTATION](https://www.dukascopy-node.app/instrument/knxususd)|`knxususd`|Jan 1, 2000|
|[COCA-COLA CO/THE](https://www.dukascopy-node.app/instrument/koususd)|`koususd`|Aug 26, 2015|
|[KILROY REALTY CORP](https://www.dukascopy-node.app/instrument/krcususd)|`krcususd`|Jan 1, 2000|
|[KROGER CO](https://www.dukascopy-node.app/instrument/krususd)|`krususd`|Jan 1, 2000|
|[KOHLS CORP](https://www.dukascopy-node.app/instrument/kssususd)|`kssususd`|Jan 1, 2000|
|[KELLOGG CO](https://www.dukascopy-node.app/instrument/kususd)|`kususd`|Jan 1, 2000|
|[LAMAR ADVERTISING CO-A](https://www.dukascopy-node.app/instrument/lamrususd)|`lamrususd`|Jan 1, 2000|
|[LEIDOS HOLDINGS INC](https://www.dukascopy-node.app/instrument/ldosususd)|`ldosususd`|Jan 1, 2000|
|[LEAR CORP](https://www.dukascopy-node.app/instrument/leaususd)|`leaususd`|Jan 1, 2000|
|[LENNAR CORP-A](https://www.dukascopy-node.app/instrument/lenususd)|`lenususd`|Jan 1, 2000|
|[L3HARRIS TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/lhxususd)|`lhxususd`|Jan 1, 2000|
|[LKQ CORP](https://www.dukascopy-node.app/instrument/lkqususd)|`lkqususd`|Jan 1, 2000|
|[ELI LILLY & CO](https://www.dukascopy-node.app/instrument/llyususd)|`llyususd`|Jan 1, 2000|
|[LOCKHEED MARTIN CORP](https://www.dukascopy-node.app/instrument/lmtususd)|`lmtususd`|Jan 1, 2000|
|[LINCOLN NATIONAL CORP](https://www.dukascopy-node.app/instrument/lncususd)|`lncususd`|Jan 1, 2000|
|[CHENIERE ENERGY INC](https://www.dukascopy-node.app/instrument/lngususd)|`lngususd`|Jan 1, 2000|
|[ALLIANT ENERGY CORP](https://www.dukascopy-node.app/instrument/lntususd)|`lntususd`|Jan 1, 2000|
|[LOWE'S COS INC](https://www.dukascopy-node.app/instrument/lowususd)|`lowususd`|Jan 1, 2000|
|[LPL FINANCIAL HOLDINGS INC](https://www.dukascopy-node.app/instrument/lplaususd)|`lplaususd`|Jan 1, 2000|
|[LAM RESEARCH CORP](https://www.dukascopy-node.app/instrument/lrcxususd)|`lrcxususd`|Jan 1, 2000|
|[LANDSTAR SYSTEM INC](https://www.dukascopy-node.app/instrument/lstrususd)|`lstrususd`|Jan 1, 2000|
|[LULULEMON ATHLETICA INC](https://www.dukascopy-node.app/instrument/luluususd)|`luluususd`|Jan 1, 2000|
|[LOEWS CORP](https://www.dukascopy-node.app/instrument/lususd)|`lususd`|Jan 1, 2000|
|[SOUTHWEST AIRLINES CO](https://www.dukascopy-node.app/instrument/luvususd)|`luvususd`|Jan 1, 2000|
|[Las Vegas Sands Corp.](https://www.dukascopy-node.app/instrument/lvsususd)|`lvsususd`|Jan 1, 2000|
|[LAMB WESTON HOLDINGS INC](https://www.dukascopy-node.app/instrument/lwususd)|`lwususd`|Jan 1, 2000|
|[LYONDELLBASELL INDU-CL A](https://www.dukascopy-node.app/instrument/lybususd)|`lybususd`|Jan 1, 2000|
|[LYFT INC-A](https://www.dukascopy-node.app/instrument/lyftususd)|`lyftususd`|Jan 1, 2000|
|[LIVE NATION ENTERTAINMENT IN](https://www.dukascopy-node.app/instrument/lyvususd)|`lyvususd`|Jan 1, 2000|
|[MID-AMERICA APARTMENT COMM](https://www.dukascopy-node.app/instrument/maaususd)|`maaususd`|Jan 1, 2000|
|[MANHATTAN ASSOCIATES INC](https://www.dukascopy-node.app/instrument/manhususd)|`manhususd`|Jan 1, 2000|
|[MARRIOTT INTERNATIONAL -CL A](https://www.dukascopy-node.app/instrument/marususd)|`marususd`|Jan 1, 2000|
|[MASIMO CORP](https://www.dukascopy-node.app/instrument/masiususd)|`masiususd`|Jan 1, 2000|
|[MATTEL INC](https://www.dukascopy-node.app/instrument/matususd)|`matususd`|Jan 1, 2000|
|[MASTERCARD INC-CLASS A](https://www.dukascopy-node.app/instrument/maususd)|`maususd`|Jan 1, 2000|
|[MCDONALD'S CORP](https://www.dukascopy-node.app/instrument/mcdususd)|`mcdususd`|Aug 26, 2015|
|[MICROCHIP TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/mchpususd)|`mchpususd`|Jan 1, 2000|
|[MCKESSON CORP](https://www.dukascopy-node.app/instrument/mckususd)|`mckususd`|Jan 1, 2000|
|[MONGODB INC](https://www.dukascopy-node.app/instrument/mdbususd)|`mdbususd`|Jan 1, 2000|
|[MONDELEZ INTERNATIONAL INC-A](https://www.dukascopy-node.app/instrument/mdlzususd)|`mdlzususd`|Jan 1, 2000|
|[MEDTRONIC PLC](https://www.dukascopy-node.app/instrument/mdtususd)|`mdtususd`|Jan 1, 2000|
|[METLIFE INC](https://www.dukascopy-node.app/instrument/metususd)|`metususd`|Jan 1, 2000|
|[MGM RESORTS INTERNATIONAL](https://www.dukascopy-node.app/instrument/mgmususd)|`mgmususd`|Jan 1, 2000|
|[MOHAWK INDUSTRIES INC](https://www.dukascopy-node.app/instrument/mhkususd)|`mhkususd`|Jan 1, 2000|
|[MIDDLEBY CORP](https://www.dukascopy-node.app/instrument/middususd)|`middususd`|Jan 1, 2000|
|[MARKEL CORP](https://www.dukascopy-node.app/instrument/mklususd)|`mklususd`|Jan 1, 2000|
|[MKS INSTRUMENTS INC](https://www.dukascopy-node.app/instrument/mksiususd)|`mksiususd`|Jan 1, 2000|
|[MARKETAXESS HOLDINGS INC](https://www.dukascopy-node.app/instrument/mktxususd)|`mktxususd`|Jan 1, 2000|
|[MARTIN MARIETTA MATERIALS](https://www.dukascopy-node.app/instrument/mlmususd)|`mlmususd`|Jan 1, 2000|
|[3M CO](https://www.dukascopy-node.app/instrument/mmmususd)|`mmmususd`|Aug 26, 2015|
|[MOLINA HEALTHCARE INC](https://www.dukascopy-node.app/instrument/mohususd)|`mohususd`|Jan 1, 2000|
|[ALTRIA GROUP INC](https://www.dukascopy-node.app/instrument/moususd)|`moususd`|Jan 1, 2000|
|[MARATHON PETROLEUM CORP](https://www.dukascopy-node.app/instrument/mpcususd)|`mpcususd`|Jan 1, 2000|
|[MONOLITHIC POWER SYSTEMS INC](https://www.dukascopy-node.app/instrument/mpwrususd)|`mpwrususd`|Jan 1, 2000|
|[MEDICAL PROPERTIES TRUST INC](https://www.dukascopy-node.app/instrument/mpwususd)|`mpwususd`|Jan 1, 2000|
|[MERCK & CO. INC.](https://www.dukascopy-node.app/instrument/mrkususd)|`mrkususd`|Aug 26, 2015|
|[Moderna Inc](https://www.dukascopy-node.app/instrument/mrnaususd)|`mrnaususd`|Jan 1, 2000|
|[MARVELL TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/mrvlususd)|`mrvlususd`|Jan 1, 2000|
|[MSCI INC](https://www.dukascopy-node.app/instrument/msciususd)|`msciususd`|Jan 1, 2000|
|[MICROSOFT CORP](https://www.dukascopy-node.app/instrument/msftususd)|`msftususd`|Aug 26, 2015|
|[MORGAN STANLEY](https://www.dukascopy-node.app/instrument/msususd)|`msususd`|Jan 1, 2000|
|[MATCH GROUP INC](https://www.dukascopy-node.app/instrument/mtchususd)|`mtchususd`|Jan 1, 2000|
|[METTLER-TOLEDO INTERNATIONAL](https://www.dukascopy-node.app/instrument/mtdususd)|`mtdususd`|Jan 1, 2000|
|[VAIL RESORTS INC](https://www.dukascopy-node.app/instrument/mtnususd)|`mtnususd`|Jan 1, 2000|
|[MACY'S INC](https://www.dukascopy-node.app/instrument/mususd)|`mususd`|Jan 1, 2000|
|[MICRON TECHNOLOGY INC](https://www.dukascopy-node.app/instrument/muususd)|`muususd`|Jan 1, 2000|
|[NEUROCRINE BIOSCIENCES INC](https://www.dukascopy-node.app/instrument/nbixususd)|`nbixususd`|Jan 1, 2000|
|[NORWEGIAN CRUISE LINE HOLDIN](https://www.dukascopy-node.app/instrument/nclhususd)|`nclhususd`|Jan 1, 2000|
|[NORDSON CORP](https://www.dukascopy-node.app/instrument/ndsnususd)|`ndsnususd`|Jan 1, 2000|
|[NEXTERA ENERGY INC](https://www.dukascopy-node.app/instrument/neeususd)|`neeususd`|Jan 1, 2000|
|[NEWMONT MINING CORP](https://www.dukascopy-node.app/instrument/nemususd)|`nemususd`|Jan 1, 2000|
|[NETFLIX INC](https://www.dukascopy-node.app/instrument/nflxususd)|`nflxususd`|Jan 1, 2000|
|[Nio INC](https://www.dukascopy-node.app/instrument/nioususd)|`nioususd`|Jan 1, 2000|
|[NIKE INC -CL B](https://www.dukascopy-node.app/instrument/nkeususd)|`nkeususd`|Aug 26, 2015|
|[Gen Digital Inc / NORTONLIFELOCK INC](https://www.dukascopy-node.app/instrument/nlokususd)|`nlokususd`|Jan 1, 2000|
|[ANNALY CAPITAL MANAGEMENT IN](https://www.dukascopy-node.app/instrument/nlyususd)|`nlyususd`|Jan 1, 2000|
|[NORTHROP GRUMMAN CORP](https://www.dukascopy-node.app/instrument/nocususd)|`nocususd`|Jan 1, 2000|
|[SERVICENOW INC](https://www.dukascopy-node.app/instrument/nowususd)|`nowususd`|Jan 1, 2000|
|[NRG ENERGY INC](https://www.dukascopy-node.app/instrument/nrgususd)|`nrgususd`|Jan 1, 2000|
|[NORFOLK SOUTHERN CORP](https://www.dukascopy-node.app/instrument/nscususd)|`nscususd`|Jan 1, 2000|
|[NUTANIX INC - A](https://www.dukascopy-node.app/instrument/ntnxususd)|`ntnxususd`|Jan 1, 2000|
|[NVIDIA CORP](https://www.dukascopy-node.app/instrument/nvdaususd)|`nvdaususd`|Jan 1, 2000|
|[NEWELL BRANDS INC](https://www.dukascopy-node.app/instrument/nwlususd)|`nwlususd`|Jan 1, 2000|
|[NEWS CORP - CLASS B](https://www.dukascopy-node.app/instrument/nwsususd)|`nwsususd`|Jan 1, 2000|
|[NEXSTAR MEDIA GROUP INC-CL A](https://www.dukascopy-node.app/instrument/nxstususd)|`nxstususd`|Jan 1, 2000|
|[NEW YORK TIMES CO-A](https://www.dukascopy-node.app/instrument/nytususd)|`nytususd`|Jan 1, 2000|
|[OWENS CORNING](https://www.dukascopy-node.app/instrument/ocususd)|`ocususd`|Jan 1, 2000|
|[OLD DOMINION FREIGHT LINE](https://www.dukascopy-node.app/instrument/odflususd)|`odflususd`|Jan 1, 2000|
|[OGE ENERGY CORP](https://www.dukascopy-node.app/instrument/ogeususd)|`ogeususd`|Jan 1, 2000|
|[ORGANON & CO](https://www.dukascopy-node.app/instrument/ognususd)|`ognususd`|Jan 1, 2000|
|[OMEGA HEALTHCARE INVESTORS](https://www.dukascopy-node.app/instrument/ohiususd)|`ohiususd`|Jan 1, 2000|
|[ONEOK INC](https://www.dukascopy-node.app/instrument/okeususd)|`okeususd`|Jan 1, 2000|
|[OKTA INC](https://www.dukascopy-node.app/instrument/oktaususd)|`oktaususd`|Jan 1, 2000|
|[UNIVERSAL DISPLAY CORP](https://www.dukascopy-node.app/instrument/oledususd)|`oledususd`|Jan 1, 2000|
|[OLLIE'S BARGAIN OUTLET HOLDI](https://www.dukascopy-node.app/instrument/olliususd)|`olliususd`|Jan 1, 2000|
|[OLIN CORP](https://www.dukascopy-node.app/instrument/olnususd)|`olnususd`|Jan 1, 2000|
|[OMNICOM GROUP](https://www.dukascopy-node.app/instrument/omcususd)|`omcususd`|Jan 1, 2000|
|[ONEMAIN HOLDINGS INC](https://www.dukascopy-node.app/instrument/omfususd)|`omfususd`|Jan 1, 2000|
|[ON SEMICONDUCTOR](https://www.dukascopy-node.app/instrument/onususd)|`onususd`|Jan 1, 2000|
|[ORACLE CORP](https://www.dukascopy-node.app/instrument/orclususd)|`orclususd`|Jan 1, 2000|
|[O'REILLY AUTOMOTIVE INC](https://www.dukascopy-node.app/instrument/orlyususd)|`orlyususd`|Jan 1, 2000|
|[OTIS WORLDWIDE CORP](https://www.dukascopy-node.app/instrument/otisususd)|`otisususd`|Jan 1, 2000|
|[REALTY INCOME CORP](https://www.dukascopy-node.app/instrument/oususd)|`oususd`|Jan 1, 2000|
|[OCCIDENTAL PETROLEUM CORP](https://www.dukascopy-node.app/instrument/oxyususd)|`oxyususd`|Jan 1, 2000|
|[PALO ALTO NETWORKS INC](https://www.dukascopy-node.app/instrument/panwususd)|`panwususd`|Jan 1, 2000|
|[PAYCOM SOFTWARE INC](https://www.dukascopy-node.app/instrument/paycususd)|`paycususd`|Jan 1, 2000|
|[PAYCHEX INC](https://www.dukascopy-node.app/instrument/payxususd)|`payxususd`|Jan 1, 2000|
|[PBF ENERGY INC-CLASS A](https://www.dukascopy-node.app/instrument/pbfususd)|`pbfususd`|Jan 1, 2000|
|[Petroleo Brasileiro S.A.](https://www.dukascopy-node.app/instrument/pbrususd)|`pbrususd`|Jan 1, 2000|
|[PACCAR INC](https://www.dukascopy-node.app/instrument/pcarususd)|`pcarususd`|Jan 1, 2000|
|[P G & E CORP](https://www.dukascopy-node.app/instrument/pcgususd)|`pcgususd`|Jan 1, 2000|
|[PRICELINE GROUP INC/THE](https://www.dukascopy-node.app/instrument/pclnususd)|`pclnususd`|Jan 1, 2000|
|[PAYLOCITY HOLDING CORP](https://www.dukascopy-node.app/instrument/pctyususd)|`pctyususd`|Jan 1, 2000|
|[HEALTHPEAK PROPERTIES INC](https://www.dukascopy-node.app/instrument/peakususd)|`peakususd`|Jan 1, 2000|
|[PENN NATIONAL GAMING INC](https://www.dukascopy-node.app/instrument/pennususd)|`pennususd`|Jan 1, 2000|
|[PEPSICO INC](https://www.dukascopy-node.app/instrument/pepususd)|`pepususd`|Jan 1, 2000|
|[PFIZER INC](https://www.dukascopy-node.app/instrument/pfeususd)|`pfeususd`|Aug 26, 2015|
|[PROGRESSIVE CORP](https://www.dukascopy-node.app/instrument/pgrususd)|`pgrususd`|Jan 1, 2000|
|[PROCTER & GAMBLE CO/THE](https://www.dukascopy-node.app/instrument/pgususd)|`pgususd`|Aug 26, 2015|
|[PARKER HANNIFIN CORP](https://www.dukascopy-node.app/instrument/phususd)|`phususd`|Jan 1, 2000|
|[POLARIS INC](https://www.dukascopy-node.app/instrument/piiususd)|`piiususd`|Jan 1, 2000|
|[PACKAGING CORP OF AMERICA](https://www.dukascopy-node.app/instrument/pkgususd)|`pkgususd`|Jan 1, 2000|
|[PLANET FITNESS INC - CL A](https://www.dukascopy-node.app/instrument/plntususd)|`plntususd`|Jan 1, 2000|
|[Palantir Technologies Inc. (Class A)](https://www.dukascopy-node.app/instrument/pltrususd)|`pltrususd`|Jan 1, 2000|
|[Plug Power Inc](https://www.dukascopy-node.app/instrument/plugususd)|`plugususd`|Jan 1, 2000|
|[PHILIP MORRIS INTERNATIONAL](https://www.dukascopy-node.app/instrument/pmususd)|`pmususd`|Jan 1, 2000|
|[PNC FINANCIAL SERVICES GROUP](https://www.dukascopy-node.app/instrument/pncususd)|`pncususd`|Jan 1, 2000|
|[PENTAIR PLC](https://www.dukascopy-node.app/instrument/pnrususd)|`pnrususd`|Jan 1, 2000|
|[INSULET CORP](https://www.dukascopy-node.app/instrument/poddususd)|`poddususd`|Jan 1, 2000|
|[POOL CORP](https://www.dukascopy-node.app/instrument/poolususd)|`poolususd`|Jan 1, 2000|
|[PERRIGO CO PLC](https://www.dukascopy-node.app/instrument/prgoususd)|`prgoususd`|Jan 1, 2000|
|[PRUDENTIAL FINANCIAL INC](https://www.dukascopy-node.app/instrument/pruususd)|`pruususd`|Jan 1, 2000|
|[PUBLIC STORAGE](https://www.dukascopy-node.app/instrument/psaususd)|`psaususd`|Jan 1, 2000|
|[PURE STORAGE INC - CLASS A](https://www.dukascopy-node.app/instrument/pstgususd)|`pstgususd`|Jan 1, 2000|
|[PTC INC](https://www.dukascopy-node.app/instrument/ptcususd)|`ptcususd`|Jan 1, 2000|
|[PATTERSON-UTI ENERGY INC](https://www.dukascopy-node.app/instrument/ptenususd)|`ptenususd`|Jan 1, 2000|
|[Peloton Interactive Inc](https://www.dukascopy-node.app/instrument/ptonususd)|`ptonususd`|Jan 1, 2000|
|[PVH CORP](https://www.dukascopy-node.app/instrument/pvhususd)|`pvhususd`|Jan 1, 2000|
|[PAYPAL HOLDINGS INC](https://www.dukascopy-node.app/instrument/pyplususd)|`pyplususd`|Jan 1, 2000|
|[QUALCOMM INC](https://www.dukascopy-node.app/instrument/qcomususd)|`qcomususd`|Jan 1, 2000|
|[QORVO INC](https://www.dukascopy-node.app/instrument/qrvoususd)|`qrvoususd`|Jan 1, 2000|
|[ROYAL CARIBBEAN CRUISES LTD](https://www.dukascopy-node.app/instrument/rclususd)|`rclususd`|Jan 1, 2000|
|[REGENERON PHARMACEUTICALS](https://www.dukascopy-node.app/instrument/regnususd)|`regnususd`|Jan 1, 2000|
|[REGENCY CENTERS CORP](https://www.dukascopy-node.app/instrument/regususd)|`regususd`|Jan 1, 2000|
|[EVEREST RE GROUP LTD](https://www.dukascopy-node.app/instrument/reususd)|`reususd`|Jan 1, 2000|
|[REGIONS FINANCIAL CORP](https://www.dukascopy-node.app/instrument/rfususd)|`rfususd`|Jan 1, 2000|
|[REINSURANCE GROUP OF AMERICA](https://www.dukascopy-node.app/instrument/rgaususd)|`rgaususd`|Jan 1, 2000|
|[ROYAL GOLD INC](https://www.dukascopy-node.app/instrument/rgldususd)|`rgldususd`|Jan 1, 2000|
|[RAYMOND JAMES FINANCIAL INC](https://www.dukascopy-node.app/instrument/rjfususd)|`rjfususd`|Jan 1, 2000|
|[RESMED INC](https://www.dukascopy-node.app/instrument/rmdususd)|`rmdususd`|Jan 1, 2000|
|[RINGCENTRAL INC-CLASS A](https://www.dukascopy-node.app/instrument/rngususd)|`rngususd`|Jan 1, 2000|
|[RENAISSANCERE HOLDINGS LTD](https://www.dukascopy-node.app/instrument/rnrususd)|`rnrususd`|Jan 1, 2000|
|[Roku Inc](https://www.dukascopy-node.app/instrument/rokuususd)|`rokuususd`|Jan 1, 2000|
|[ROLLINS INC](https://www.dukascopy-node.app/instrument/rolususd)|`rolususd`|Jan 1, 2000|
|[ROSS STORES INC](https://www.dukascopy-node.app/instrument/rostususd)|`rostususd`|Jan 1, 2000|
|[RPM INTERNATIONAL INC](https://www.dukascopy-node.app/instrument/rpmususd)|`rpmususd`|Jan 1, 2000|
|[RANGE RESOURCES CORP](https://www.dukascopy-node.app/instrument/rrcususd)|`rrcususd`|Jan 1, 2000|
|[REGAL REXNORD CORP](https://www.dukascopy-node.app/instrument/rrxususd)|`rrxususd`|Jan 1, 2000|
|[RELIANCE STEEL & ALUMINUM](https://www.dukascopy-node.app/instrument/rsususd)|`rsususd`|Jan 1, 2000|
|[RAYTHEON TECHNOLOGIES CORP](https://www.dukascopy-node.app/instrument/rtxususd)|`rtxususd`|Jan 1, 2000|
|[SABRE CORP](https://www.dukascopy-node.app/instrument/sabrususd)|`sabrususd`|Jan 1, 2000|
|[STARBUCKS CORP](https://www.dukascopy-node.app/instrument/sbuxususd)|`sbuxususd`|Jan 1, 2000|
|[SOUTHERN COPPER CORP](https://www.dukascopy-node.app/instrument/sccoususd)|`sccoususd`|Jan 1, 2000|
|[SCHWAB (CHARLES) CORP](https://www.dukascopy-node.app/instrument/schwususd)|`schwususd`|Jan 1, 2000|
|[SERVICE CORP INTERNATIONAL](https://www.dukascopy-node.app/instrument/sciususd)|`sciususd`|Jan 1, 2000|
|[SOLAREDGE TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/sedgususd)|`sedgususd`|Jan 1, 2000|
|[SEI INVESTMENTS COMPANY](https://www.dukascopy-node.app/instrument/seicususd)|`seicususd`|Jan 1, 2000|
|[SPROUTS FARMERS MARKET INC](https://www.dukascopy-node.app/instrument/sfmususd)|`sfmususd`|Jan 1, 2000|
|[SHERWIN-WILLIAMS CO/THE](https://www.dukascopy-node.app/instrument/shwususd)|`shwususd`|Jan 1, 2000|
|[JM SMUCKER CO/THE](https://www.dukascopy-node.app/instrument/sjmususd)|`sjmususd`|Jan 1, 2000|
|[SCHLUMBERGER LTD](https://www.dukascopy-node.app/instrument/slbususd)|`slbususd`|Jan 1, 2000|
|[SLM CORP](https://www.dukascopy-node.app/instrument/slmususd)|`slmususd`|Jan 1, 2000|
|[SNAP Inc.](https://www.dukascopy-node.app/instrument/snapususd)|`snapususd`|Jan 1, 2000|
|[Snowflake Inc. (Class A)](https://www.dukascopy-node.app/instrument/snowususd)|`snowususd`|Jan 1, 2000|
|[SYNOPSYS INC](https://www.dukascopy-node.app/instrument/snpsususd)|`snpsususd`|Jan 1, 2000|
|[SOUTHERN CO/THE](https://www.dukascopy-node.app/instrument/soususd)|`soususd`|Jan 1, 2000|
|[S&P GLOBAL INC](https://www.dukascopy-node.app/instrument/spgiususd)|`spgiususd`|Jan 1, 2000|
|[SIMON PROPERTY GROUP INC](https://www.dukascopy-node.app/instrument/spgususd)|`spgususd`|Jan 1, 2000|
|[SPOTIFY TECHNOLOGY SA](https://www.dukascopy-node.app/instrument/spotususd)|`spotususd`|Jan 1, 2000|
|[SPIRIT AEROSYSTEMS HOLD-CL A](https://www.dukascopy-node.app/instrument/sprususd)|`sprususd`|Jan 1, 2000|
|[Square Inc](https://www.dukascopy-node.app/instrument/sqususd)|`sqususd`|Jan 1, 2000|
|[SAREPTA THERAPEUTICS INC](https://www.dukascopy-node.app/instrument/srptususd)|`srptususd`|Jan 1, 2000|
|[SS&C TECHNOLOGIES HOLDINGS](https://www.dukascopy-node.app/instrument/ssncususd)|`ssncususd`|Jan 1, 2000|
|[STERIS PLC](https://www.dukascopy-node.app/instrument/steususd)|`steususd`|Jan 1, 2000|
|[STATE STREET CORP](https://www.dukascopy-node.app/instrument/sttususd)|`sttususd`|Jan 1, 2000|
|[CONSTELLATION BRANDS INC-A](https://www.dukascopy-node.app/instrument/stzususd)|`stzususd`|Jan 1, 2000|
|[SUN COMMUNITIES INC](https://www.dukascopy-node.app/instrument/suiususd)|`suiususd`|Jan 1, 2000|
|[SKYWORKS SOLUTIONS INC](https://www.dukascopy-node.app/instrument/swksususd)|`swksususd`|Jan 1, 2000|
|[STANLEY BLACK & DECKER INC](https://www.dukascopy-node.app/instrument/swkususd)|`swkususd`|Jan 1, 2000|
|[SYNCHRONY FINANCIAL](https://www.dukascopy-node.app/instrument/syfususd)|`syfususd`|Jan 1, 2000|
|[STRYKER CORP](https://www.dukascopy-node.app/instrument/sykususd)|`sykususd`|Jan 1, 2000|
|[SYSCO CORP](https://www.dukascopy-node.app/instrument/syyususd)|`syyususd`|Jan 1, 2000|
|[MOLSON COORS BREWING CO -B](https://www.dukascopy-node.app/instrument/tapususd)|`tapususd`|Jan 1, 2000|
|[TRANSDIGM GROUP INC](https://www.dukascopy-node.app/instrument/tdgususd)|`tdgususd`|Jan 1, 2000|
|[TELEDYNE TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/tdyususd)|`tdyususd`|Jan 1, 2000|
|[ATLASSIAN CORP PLC-CLASS A](https://www.dukascopy-node.app/instrument/teamususd)|`teamususd`|Jan 1, 2000|
|[BIO-TECHNE CORP](https://www.dukascopy-node.app/instrument/techususd)|`techususd`|Jan 1, 2000|
|[TE CONNECTIVITY LTD](https://www.dukascopy-node.app/instrument/telususd)|`telususd`|Jan 1, 2000|
|[TEVA PHARMACEUTICAL-SP ADR](https://www.dukascopy-node.app/instrument/tevaususd)|`tevaususd`|Jan 1, 2000|
|[TRUIST FINANCIAL CORP](https://www.dukascopy-node.app/instrument/tfcususd)|`tfcususd`|Jan 1, 2000|
|[TELEFLEX INC](https://www.dukascopy-node.app/instrument/tfxususd)|`tfxususd`|Jan 1, 2000|
|[TARGET CORP](https://www.dukascopy-node.app/instrument/tgtususd)|`tgtususd`|Jan 1, 2000|
|[TJX COMPANIES INC](https://www.dukascopy-node.app/instrument/tjxususd)|`tjxususd`|Jan 1, 2000|
|[THERMO FISHER SCIENTIFIC INC](https://www.dukascopy-node.app/instrument/tmoususd)|`tmoususd`|Jan 1, 2000|
|[T-MOBILE US INC](https://www.dukascopy-node.app/instrument/tmusususd)|`tmusususd`|Jan 1, 2000|
|[TOLL BROTHERS INC](https://www.dukascopy-node.app/instrument/tolususd)|`tolususd`|Jan 1, 2000|
|[TAPESTRY INC](https://www.dukascopy-node.app/instrument/tprususd)|`tprususd`|Jan 1, 2000|
|[TEMPUR SEALY INTERNATIONAL I](https://www.dukascopy-node.app/instrument/tpxususd)|`tpxususd`|Jan 1, 2000|
|[TARGA RESOURCES CORP](https://www.dukascopy-node.app/instrument/trgpususd)|`trgpususd`|Jan 1, 2000|
|[TRIMBLE INC](https://www.dukascopy-node.app/instrument/trmbususd)|`trmbususd`|Jan 1, 2000|
|[T ROWE PRICE GROUP INC](https://www.dukascopy-node.app/instrument/trowususd)|`trowususd`|Jan 1, 2000|
|[TRANSUNION](https://www.dukascopy-node.app/instrument/truususd)|`truususd`|Jan 1, 2000|
|[TRAVELERS COS INC/THE](https://www.dukascopy-node.app/instrument/trvususd)|`trvususd`|Aug 26, 2015|
|[TESLA MOTORS INC](https://www.dukascopy-node.app/instrument/tslaususd)|`tslaususd`|Jan 1, 2000|
|[Taiwan Semiconductor Manufacturing Company Limited](https://www.dukascopy-node.app/instrument/tsmususd)|`tsmususd`|Jan 1, 2000|
|[TYSON FOODS INC-CL A](https://www.dukascopy-node.app/instrument/tsnususd)|`tsnususd`|Jan 1, 2000|
|[TRADE DESK INC/THE -CLASS A](https://www.dukascopy-node.app/instrument/ttdususd)|`ttdususd`|Jan 1, 2000|
|[TRANE TECHNOLOGIES PLC](https://www.dukascopy-node.app/instrument/ttususd)|`ttususd`|Jan 1, 2000|
|[TAKE-TWO INTERACTIVE SOFTWRE](https://www.dukascopy-node.app/instrument/ttwoususd)|`ttwoususd`|Jan 1, 2000|
|[AT&T INC](https://www.dukascopy-node.app/instrument/tususd)|`tususd`|Aug 26, 2015|
|[TWILIO INC - A](https://www.dukascopy-node.app/instrument/twloususd)|`twloususd`|Jan 1, 2000|
|[TEXAS INSTRUMENTS INC](https://www.dukascopy-node.app/instrument/txnususd)|`txnususd`|Jan 1, 2000|
|[TYLER TECHNOLOGIES INC](https://www.dukascopy-node.app/instrument/tylususd)|`tylususd`|Jan 1, 2000|
|[UNDER ARMOUR INC-CLASS A](https://www.dukascopy-node.app/instrument/uaaususd)|`uaaususd`|Jan 1, 2000|
|[UNITED AIRLINES HOLDINGS INC](https://www.dukascopy-node.app/instrument/ualususd)|`ualususd`|Jan 1, 2000|
|[UNDER ARMOUR INC-CLASS C](https://www.dukascopy-node.app/instrument/uaususd)|`uaususd`|Jan 1, 2000|
|[Uber Technologies Inc.](https://www.dukascopy-node.app/instrument/uberususd)|`uberususd`|Jan 1, 2000|
|[UDR INC](https://www.dukascopy-node.app/instrument/udrususd)|`udrususd`|Jan 1, 2000|
|[UGI CORP](https://www.dukascopy-node.app/instrument/ugiususd)|`ugiususd`|Jan 1, 2000|
|[UNIVERSAL HEALTH SERVICES-B](https://www.dukascopy-node.app/instrument/uhsususd)|`uhsususd`|Jan 1, 2000|
|[ULTA SALON COSMETICS & FRAGR](https://www.dukascopy-node.app/instrument/ultaususd)|`ultaususd`|Jan 1, 2000|
|[UNITEDHEALTH GROUP INC](https://www.dukascopy-node.app/instrument/unhususd)|`unhususd`|Aug 26, 2015|
|[UNION PACIFIC CORP](https://www.dukascopy-node.app/instrument/unpususd)|`unpususd`|Jan 1, 2000|
|[UNITED PARCEL SERVICE-CL B](https://www.dukascopy-node.app/instrument/upsususd)|`upsususd`|Jan 1, 2000|
|[UNITED RENTALS INC](https://www.dukascopy-node.app/instrument/uriususd)|`uriususd`|Jan 1, 2000|
|[US BANCORP](https://www.dukascopy-node.app/instrument/usbususd)|`usbususd`|Jan 1, 2000|
|[US FOODS HOLDING CORP](https://www.dukascopy-node.app/instrument/usfdususd)|`usfdususd`|Jan 1, 2000|
|[UNITED THERAPEUTICS CORP](https://www.dukascopy-node.app/instrument/uthrususd)|`uthrususd`|Jan 1, 2000|
|[Vale S.A.](https://www.dukascopy-node.app/instrument/valeususd)|`valeususd`|Jan 1, 2000|
|[VEEVA SYSTEMS INC-CLASS A](https://www.dukascopy-node.app/instrument/veevususd)|`veevususd`|Jan 1, 2000|
|[VF CORP](https://www.dukascopy-node.app/instrument/vfcususd)|`vfcususd`|Jan 1, 2000|
|[VICI PROPERTIES INC](https://www.dukascopy-node.app/instrument/viciususd)|`viciususd`|Jan 1, 2000|
|[VIRTU FINANCIAL INC-CLASS A](https://www.dukascopy-node.app/instrument/virtususd)|`virtususd`|Jan 1, 2000|
|[VALERO ENERGY CORP](https://www.dukascopy-node.app/instrument/vloususd)|`vloususd`|Jan 1, 2000|
|[VERTEX PHARMACEUTICALS INC](https://www.dukascopy-node.app/instrument/vrtxususd)|`vrtxususd`|Jan 1, 2000|
|[VISTRA CORP](https://www.dukascopy-node.app/instrument/vstususd)|`vstususd`|Jan 1, 2000|
|[VIATRIS INC](https://www.dukascopy-node.app/instrument/vtrsususd)|`vtrsususd`|Jan 1, 2000|
|[VISA INC-CLASS A SHARES](https://www.dukascopy-node.app/instrument/vususd)|`vususd`|Aug 26, 2015|
|[VERIZON COMMUNICATIONS INC](https://www.dukascopy-node.app/instrument/vzususd)|`vzususd`|Aug 26, 2015|
|[WABTEC CORP](https://www.dukascopy-node.app/instrument/wabususd)|`wabususd`|Jan 1, 2000|
|[WESTERN ALLIANCE BANCORP](https://www.dukascopy-node.app/instrument/walususd)|`walususd`|Jan 1, 2000|
|[WEBSTER FINANCIAL CORP](https://www.dukascopy-node.app/instrument/wbsususd)|`wbsususd`|Jan 1, 2000|
|[WORKDAY INC-CLASS A](https://www.dukascopy-node.app/instrument/wdayususd)|`wdayususd`|Jan 1, 2000|
|[WESTERN DIGITAL CORP](https://www.dukascopy-node.app/instrument/wdcususd)|`wdcususd`|Jan 1, 2000|
|[WENDY'S CO/THE](https://www.dukascopy-node.app/instrument/wenususd)|`wenususd`|Jan 1, 2000|
|[WEX INC](https://www.dukascopy-node.app/instrument/wexususd)|`wexususd`|Jan 1, 2000|
|[WELLS FARGO & CO](https://www.dukascopy-node.app/instrument/wfcususd)|`wfcususd`|Jan 1, 2000|
|[WHIRLPOOL CORP](https://www.dukascopy-node.app/instrument/whrususd)|`whrususd`|Jan 1, 2000|
|[WYNDHAM HOTELS & RESORTS INC](https://www.dukascopy-node.app/instrument/whususd)|`whususd`|Jan 1, 2000|
|[WESTLAKE CORP](https://www.dukascopy-node.app/instrument/wlkususd)|`wlkususd`|Jan 1, 2000|
|[WAL-MART STORES INC](https://www.dukascopy-node.app/instrument/wmtususd)|`wmtususd`|Aug 26, 2015|
|[WP CAREY INC](https://www.dukascopy-node.app/instrument/wpcususd)|`wpcususd`|Jan 1, 2000|
|[WR BERKLEY CORP](https://www.dukascopy-node.app/instrument/wrbususd)|`wrbususd`|Jan 1, 2000|
|[WILLIAMS-SONOMA INC](https://www.dukascopy-node.app/instrument/wsmususd)|`wsmususd`|Jan 1, 2000|
|[WATSCO INC](https://www.dukascopy-node.app/instrument/wsoususd)|`wsoususd`|Jan 1, 2000|
|[WEST PHARMACEUTICAL SERVICES](https://www.dukascopy-node.app/instrument/wstususd)|`wstususd`|Jan 1, 2000|
|[ESSENTIAL UTILITIES INC](https://www.dukascopy-node.app/instrument/wtrgususd)|`wtrgususd`|Jan 1, 2000|
|[WILLIS TOWERS WATSON PLC](https://www.dukascopy-node.app/instrument/wtwususd)|`wtwususd`|Jan 1, 2000|
|[WAYFAIR INC- CLASS A](https://www.dukascopy-node.app/instrument/wususd)|`wususd`|Jan 1, 2000|
|[WOODWARD INC](https://www.dukascopy-node.app/instrument/wwdususd)|`wwdususd`|Jan 1, 2000|
|[WYNN RESORTS LTD](https://www.dukascopy-node.app/instrument/wynnususd)|`wynnususd`|Jan 1, 2000|
|[EXXON MOBIL CORP](https://www.dukascopy-node.app/instrument/xomususd)|`xomususd`|Aug 26, 2015|
|[Xpeng Inc ADR](https://www.dukascopy-node.app/instrument/xpevususd)|`xpevususd`|Jan 1, 2000|
|[XPO LOGISTICS INC](https://www.dukascopy-node.app/instrument/xpoususd)|`xpoususd`|Jan 1, 2000|
|[XYLEM INC](https://www.dukascopy-node.app/instrument/xylususd)|`xylususd`|Jan 1, 2000|
|[YUM CHINA HOLDINGS INC](https://www.dukascopy-node.app/instrument/yumcususd)|`yumcususd`|Jan 1, 2000|
|[YUM! BRANDS INC](https://www.dukascopy-node.app/instrument/yumususd)|`yumususd`|Jan 1, 2000|
|[ZIMMER BIOMET HOLDINGS INC](https://www.dukascopy-node.app/instrument/zbhususd)|`zbhususd`|Jan 1, 2000|
|[ZEBRA TECHNOLOGIES CORP-CL A](https://www.dukascopy-node.app/instrument/zbraususd)|`zbraususd`|Jan 1, 2000|
|[Zoom Video Communications Inc. (Class A)](https://www.dukascopy-node.app/instrument/zmususd)|`zmususd`|Jan 1, 2000|
|[ZSCALER INC](https://www.dukascopy-node.app/instrument/zsususd)|`zsususd`|Jan 1, 2000|
|[ZOETIS INC](https://www.dukascopy-node.app/instrument/ztsususd)|`ztsususd`|Jan 1, 2000|
|[ZILLOW GROUP INC - C](https://www.dukascopy-node.app/instrument/zususd)|`zususd`|Jan 1, 2000|
<h3 id="crypto_curr">Crypto Curr </h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[EUR Coin vs Euro](https://www.dukascopy-node.app/instrument/euceur)|`euceur`|Jul 6, 2026|
<h3 id="mutual_funds">Mutual Funds </h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[BlackRock ICS Euro Liquidity Fund vs Euro](https://www.dukascopy-node.app/instrument/ie0005023803fneur)|`ie0005023803fneur`|May 8, 2025|
|[Goldman Sachs Euro Government Liquid Reserves Fund Institutional Accumulation (T) Class vs Euro](https://www.dukascopy-node.app/instrument/ie000p6xlj75fneur)|`ie000p6xlj75fneur`|Apr 21, 2026|
|[BlackRock ICS Sterling Government Liquidity Fund vs Pound Sterling](https://www.dukascopy-node.app/instrument/ie00b40g6s53fngbp)|`ie00b40g6s53fngbp`|May 8, 2025|
|[Goldman Sachs Euro Liquid Reserves Fund Institutional Accumulation (T) Class vs Euro](https://www.dukascopy-node.app/instrument/ie00b96cnn65fneur)|`ie00b96cnn65fneur`|Apr 21, 2026|
|[Goldman Sachs US$ Liquid Reserves Fund Institutional Accumulation (T) Class vs US Dollar](https://www.dukascopy-node.app/instrument/ie00bhc9jr32fnusd)|`ie00bhc9jr32fnusd`|Apr 21, 2026|
|[BlackRock ICS US Dollar Liquidity Fund vs US Dollar](https://www.dukascopy-node.app/instrument/ie00bhrwwy54fnusd)|`ie00bhrwwy54fnusd`|May 7, 2025|
|[Goldman Sachs Sterling Government Liquid Reserves Fund Institutional Accumulation (T) Class vs Pound Sterling](https://www.dukascopy-node.app/instrument/ie00bkv42047fngbp)|`ie00bkv42047fngbp`|Apr 21, 2026|
|[Goldman Sachs Sterling Liquid Reserves Fund Institutional Accumulation (T) Class vs Pound Sterling](https://www.dukascopy-node.app/instrument/ie00bl0bl405fngbp)|`ie00bl0bl405fngbp`|Apr 21, 2026|
|[Goldman Sachs US$ Treasury Liquid Reserves Fund Institutional Accumulation (T) Class vs US Dollar](https://www.dukascopy-node.app/instrument/ie00bl0bl736fnusd)|`ie00bl0bl736fnusd`|Apr 21, 2026|
<h3 id="ungrouped">Ungrouped </h3>

|Instrument|id|Earliest data (UTC)|
|-|-|-|
|[USC/USD](https://www.dukascopy-node.app/instrument/uscusd)|`uscusd`|Jan 1, 2000|

#### ⚖️ Legal Disclaimer

`dukascopy-node` is not affiliated, endorsed, or vetted by Dukascopy Bank SA. It's an open-source tool that uses Dukascopy's publicly available APIs, and is intended for research and educational purposes.