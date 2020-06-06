'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Validator = _interopDefault(require('fastest-validator'));
var fetch = _interopDefault(require('node-fetch'));

/* eslint-disable prettier/prettier */
(function (Instrument) {
    /**
     * ### AGILENT TECHNOLOGIES INC
     * *A.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-25**
     * `m1` | **2017-05-25**
     * `m30` | **2017-05-25**
     * `h1` | **2017-05-25**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aususd"] = "aususd";
    /**
     * ### ALCOA INC
     * *AA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-30**
     * `m1` | **2018-01-30**
     * `m30` | **2018-01-30**
     * `h1` | **2018-01-30**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["aaususd"] = "aaususd";
    /**
     * ### ALTABA INC
     * *AABA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aabaususd"] = "aabaususd";
    /**
     * ### Anglo American PLC
     * *AAL.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-01**
     * `m1` | **2016-08-01**
     * `m30` | **2016-08-01**
     * `h1` | **2016-08-01**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["aalgbgbx"] = "aalgbgbx";
    /**
     * ### AMERICAN AIRLINES GROUP INC
     * *AAL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aalususd"] = "aalususd";
    /**
     * ### APPLE INC
     * *AAPL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-17**
     * `m1` | **2017-01-17**
     * `m30` | **2017-01-17**
     * `h1` | **2017-01-17**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aaplususd"] = "aaplususd";
    /**
     * ### ABB Ltd
     * *ABB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["abbsesek"] = "abbsesek";
    /**
     * ### AMERISOURCEBERGEN CORP
     * *ABC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-30**
     * `m1` | **2018-01-30**
     * `m30` | **2018-01-30**
     * `h1` | **2018-01-30**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["abcususd"] = "abcususd";
    /**
     * ### Ambev S.A.
     * *ABEV.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["abevususd"] = "abevususd";
    /**
     * ### Associated British Foods PLC
     * *ABF.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["abfgbgbx"] = "abfgbgbx";
    /**
     * ### Anheuser-Busch InBev NV
     * *ABI.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["abibeeur"] = "abibeeur";
    /**
     * ### ABBOTT LABORATORIES
     * *ABT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["abtususd"] = "abtususd";
    /**
     * ### Accor SA
     * *AC.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-11**
     * `m1` | **2016-08-11**
     * `m30` | **2016-08-11**
     * `h1` | **2016-08-11**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["acfreur"] = "acfreur";
    /**
     * ### Credit Agricole SA
     * *ACA.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["acafreur"] = "acafreur";
    /**
     * ### ACS Actividades de Construccion y Servicios SA
     * *ACS.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["acseseur"] = "acseseur";
    /**
     * ### Acerinox SA
     * *ACX.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["acxeseur"] = "acxeseur";
    /**
     * ### ADOBE SYSTEMS INC
     * *ADBE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["adbeususd"] = "adbeususd";
    /**
     * ### ANALOG DEVICES INC
     * *ADI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-30**
     * `m1` | **2018-01-30**
     * `m30` | **2018-01-30**
     * `h1` | **2018-01-30**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["adiususd"] = "adiususd";
    /**
     * ### Admiral Group PLC
     * *ADM.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["admgbgbx"] = "admgbgbx";
    /**
     * ### AUTOMATIC DATA PROCESSING
     * *ADP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["adpususd"] = "adpususd";
    /**
     * ### Adidas AG
     * *ADS.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-13**
     * `m1` | **2015-03-13**
     * `m30` | **2015-03-13**
     * `h1` | **2015-03-13**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["adsdeeur"] = "adsdeeur";
    /**
     * ### AUTODESK INC
     * *ADSK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-30**
     * `m1` | **2018-01-30**
     * `m30` | **2018-01-30**
     * `h1` | **2018-01-30**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["adskususd"] = "adskususd";
    /**
     * ### Aena SA
     * *AENA.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2015-01-01**
     * `mn1` | **2015-01-01**
     */
    Instrument["aenaeseur"] = "aenaeseur";
    /**
     * ### AETNA INC
     * *AET.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aetususd"] = "aetususd";
    /**
     * ### Air France-KLM
     * *AF.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-27**
     * `m1` | **2016-09-27**
     * `m30` | **2016-09-27**
     * `h1` | **2016-09-27**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["affreur"] = "affreur";
    /**
     * ### Aggreko PLC
     * *AGK.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["agkgbgbx"] = "agkgbgbx";
    /**
     * ### Aegon NV
     * *AGN.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["agnnleur"] = "agnnleur";
    /**
     * ### Ageas
     * *AGS.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["agsbeeur"] = "agsbeeur";
    /**
     * ### Koninklijke Ahold Delhaize NV
     * *AH.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ahnleur"] = "ahnleur";
    /**
     * ### Ashtead Group PLC
     * *AHT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ahtgbgbx"] = "ahtgbgbx";
    /**
     * ### Air Liquide SA
     * *AI.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["aifreur"] = "aifreur";
    /**
     * ### AMERICAN INTERNATIONAL GROUP
     * *AIG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aigususd"] = "aigususd";
    /**
     * ### Airbus Group SE
     * *AIR.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2014-01-01**
     * `mn1` | **2014-01-01**
     */
    Instrument["airfreur"] = "airfreur";
    /**
     * ### Akzo Nobel NV
     * *AKZA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["akzanleur"] = "akzanleur";
    /**
     * ### Alfa Laval AB
     * *ALFA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["alfasesek"] = "alfasesek";
    /**
     * ### ALLSTATE CORP
     * *ALL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["allususd"] = "allususd";
    /**
     * ### Alstom SA
     * *ALO.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-27**
     * `m1` | **2016-09-27**
     * `m30` | **2016-09-27**
     * `h1` | **2016-09-27**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["alofreur"] = "alofreur";
    /**
     * ### Allianz SE
     * *ALV.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-09**
     * `m1` | **2015-04-09**
     * `m30` | **2015-04-09**
     * `h1` | **2015-04-09**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["alvdeeur"] = "alvdeeur";
    /**
     * ### ALEXION PHARMACEUTICALS INC
     * *ALXN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["alxnususd"] = "alxnususd";
    /**
     * ### APPLIED MATERIALS INC
     * *AMAT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["amatususd"] = "amatususd";
    /**
     * ### ADVANCED MICRO DEVICES
     * *AMD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["amdususd"] = "amdususd";
    /**
     * ### AMGEN INC
     * *AMGN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["amgnususd"] = "amgnususd";
    /**
     * ### Amadeus IT Holding SA
     * *AMS.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["amseseur"] = "amseseur";
    /**
     * ### AMERICAN TOWER CORP
     * *AMT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["amtususd"] = "amtususd";
    /**
     * ### AMAZON.COM INC
     * *AMZN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["amznususd"] = "amznususd";
    /**
     * ### ANTHEM INC
     * *ANTM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["antmususd"] = "antmususd";
    /**
     * ### Antofagasta PLC
     * *ANTO.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["antogbgbx"] = "antogbgbx";
    /**
     * ### APACHE CORP
     * *APA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["apaususd"] = "apaususd";
    /**
     * ### ANADARKO PETROLEUM CORP
     * *APC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["apcususd"] = "apcususd";
    /**
     * ### AIR PRODUCTS &amp; CHEMICALS INC
     * *APD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["apdususd"] = "apdususd";
    /**
     * ### ASML Holding NV
     * *ASML.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["asmlnleur"] = "asmlnleur";
    /**
     * ### Atlas Copco AB
     * *ATCOA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["atcoasesek"] = "atcoasesek";
    /**
     * ### ACTIVISION BLIZZARD INC
     * *ATVI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["atviususd"] = "atviususd";
    /**
     * ### Australian Dollar vs Canadian Dollar
     * *AUD/CAD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2005-12-26**
     * `m1` | **2005-12-26**
     * `m30` | **2005-12-26**
     * `h1` | **2005-12-26**
     * `d1` | **1992-01-01**
     * `mn1` | **1992-01-01**
     */
    Instrument["audcad"] = "audcad";
    /**
     * ### Australian Dollar vs Swiss Franc
     * *AUD/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2005-12-26**
     * `m1` | **2005-12-26**
     * `m30` | **2005-12-26**
     * `h1` | **2005-12-26**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["audchf"] = "audchf";
    /**
     * ### Australian Dollar vs Japanese Yen
     * *AUD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-11-29**
     * `m1` | **2003-11-29**
     * `m30` | **2003-11-29**
     * `h1` | **2003-11-29**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["audjpy"] = "audjpy";
    /**
     * ### Australian Dollar vs New Zealand Dollar
     * *AUD/NZD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-12-08**
     * `m1` | **2006-12-08**
     * `m30` | **2006-12-08**
     * `h1` | **2006-12-08**
     * `d1` | **1993-01-01**
     * `mn1` | **1993-01-01**
     */
    Instrument["audnzd"] = "audnzd";
    /**
     * ### Australian Dollar vs Singapore Dollar
     * *AUD/SGD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["audsgd"] = "audsgd";
    /**
     * ### Australian Dollar vs US Dollar
     * *AUD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["audusd"] = "audusd";
    /**
     * ### Aviva PLC
     * *AV.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["avgbgbx"] = "avgbgbx";
    /**
     * ### AVALONBAY COMMUNITIES INC
     * *AVB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["avbususd"] = "avbususd";
    /**
     * ### Broadcom Limited
     * *AVGO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["avgoususd"] = "avgoususd";
    /**
     * ### AMERICAN EXPRESS CO
     * *AXP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["axpususd"] = "axpususd";
    /**
     * ### AstraZeneca PLC
     * *AZN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["azngbgbx"] = "azngbgbx";
    /**
     * ### AstraZeneca PLC
     * *AZN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["aznususd"] = "aznususd";
    /**
     * ### AUTOZONE INC
     * *AZO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["azoususd"] = "azoususd";
    /**
     * ### BAE Systems PLC
     * *BA.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bagbgbx"] = "bagbgbx";
    /**
     * ### Boeing Co
     * *BA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["baususd"] = "baususd";
    /**
     * ### Babcock International Group PLC
     * *BAB.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["babgbgbx"] = "babgbgbx";
    /**
     * ### ALIBABA GROUP HOLDING-SP ADR
     * *BABA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["babaususd"] = "babaususd";
    /**
     * ### BANK OF AMERICA CORP
     * *BAC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bacususd"] = "bacususd";
    /**
     * ### Barclays PLC
     * *BARC.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["barcgbgbx"] = "barcgbgbx";
    /**
     * ### BASF SE
     * *BAS.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-22**
     * `m1` | **2015-04-22**
     * `m30` | **2015-04-22**
     * `h1` | **2015-04-22**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["basdeeur"] = "basdeeur";
    /**
     * ### British American Tobacco PLC
     * *BATS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["batsgbgbx"] = "batsgbgbx";
    /**
     * ### Bayer AG
     * *BAYN.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-20**
     * `m1` | **2015-03-20**
     * `m30` | **2015-03-20**
     * `h1` | **2015-03-20**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bayndeeur"] = "bayndeeur";
    /**
     * ### Banco Bradesco S.A.
     * *BBD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bbdususd"] = "bbdususd";
    /**
     * ### BB&amp;T CORP
     * *BBT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["bbtususd"] = "bbtususd";
    /**
     * ### Banco Bilbao Vizcaya Argentaria SA
     * *BBVA.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bbvaeseur"] = "bbvaeseur";
    /**
     * ### BEST BUY CO INC
     * *BBY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bbyususd"] = "bbyususd";
    /**
     * ### BECTON DICKINSON AND CO
     * *BDX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["bdxususd"] = "bdxususd";
    /**
     * ### Beiersdorf AG
     * *BEI.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-08**
     * `m1` | **2015-04-08**
     * `m30` | **2015-04-08**
     * `h1` | **2015-04-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["beideeur"] = "beideeur";
    /**
     * ### Proximus
     * *BELG.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["belgbeeur"] = "belgbeeur";
    /**
     * ### BAIDU INC
     * *BIDU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["biduususd"] = "biduususd";
    /**
     * ### BIOGEN INC
     * *BIIB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["biibususd"] = "biibususd";
    /**
     * ### BANK OF NEW YORK MELLON CORP
     * *BK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bkususd"] = "bkususd";
    /**
     * ### British Land Co PLC
     * *BLND.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["blndgbgbx"] = "blndgbgbx";
    /**
     * ### BHP Billiton PLC
     * *BLT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bltgbgbx"] = "bltgbgbx";
    /**
     * ### Bayerische Motoren Werke AG
     * *BMW.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-24**
     * `m1` | **2015-03-24**
     * `m30` | **2015-03-24**
     * `h1` | **2015-03-24**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bmwdeeur"] = "bmwdeeur";
    /**
     * ### BRISTOL-MYERS SQUIBB CO
     * *BMY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bmyususd"] = "bmyususd";
    /**
     * ### Danone SA
     * *BN.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bnfreur"] = "bnfreur";
    /**
     * ### BNP Paribas SA
     * *BNP.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bnpfreur"] = "bnpfreur";
    /**
     * ### Bunzl PLC
     * *BNZL.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bnzlgbgbx"] = "bnzlgbgbx";
    /**
     * ### HUGO BOSS AG
     * *BOSS.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-09**
     * `m1` | **2015-04-09**
     * `m30` | **2015-04-09**
     * `h1` | **2015-04-09**
     * `d1` | **2012-01-01**
     * `mn1` | **2012-01-01**
     */
    Instrument["bossdeeur"] = "bossdeeur";
    /**
     * ### BP PLC
     * *BP.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-06**
     * `m1` | **2016-09-06**
     * `m30` | **2016-09-06**
     * `h1` | **2016-09-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["bpgbgbx"] = "bpgbgbx";
    /**
     * ### BP p.l.c.
     * *BP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["bpususd"] = "bpususd";
    /**
     * ### Burberry Group PLC
     * *BRBY.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["brbygbgbx"] = "brbygbgbx";
    /**
     * ### BERKSHIRE HATHAWAY INC-CL B
     * *BRKB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-06**
     * `m1` | **2017-11-06**
     * `m30` | **2017-11-06**
     * `h1` | **2017-11-06**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["brkbususd"] = "brkbususd";
    /**
     * ### BOSTON SCIENTIFIC CORP
     * *BSX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["bsxususd"] = "bsxususd";
    /**
     * ### BT Group PLC
     * *BT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["btgbgbx"] = "btgbgbx";
    /**
     * ### Bitcoin vs US Dollar
     * *BTC/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-07**
     * `m1` | **2017-05-07**
     * `m30` | **2017-05-07**
     * `h1` | **2017-05-07**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["btcusd"] = "btcusd";
    /**
     * ### Euro Bund
     * *BUND.TR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-05-02**
     * `m1` | **2016-05-02**
     * `m30` | **2016-05-02**
     * `h1` | **2016-05-02**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["bundtreur"] = "bundtreur";
    /**
     * ### CITIGROUP INC
     * *C.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cususd"] = "cususd";
    /**
     * ### Carrefour SA
     * *CA.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cafreur"] = "cafreur";
    /**
     * ### CaixaBank
     * *CABK.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cabkeseur"] = "cabkeseur";
    /**
     * ### Canadian Dollar vs Swiss Franc
     * *CAD/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2005-12-26**
     * `m1` | **2005-12-26**
     * `m30` | **2005-12-26**
     * `h1` | **2005-12-26**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["cadchf"] = "cadchf";
    /**
     * ### Canadian Dollar vs Hong Kong Dollar
     * *CAD/HKD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["cadhkd"] = "cadhkd";
    /**
     * ### Canadian Dollar vs Japanese Yen
     * *CAD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-10-20**
     * `m1` | **2004-10-20**
     * `m30` | **2004-10-20**
     * `h1` | **2004-10-20**
     * `d1` | **1993-01-01**
     * `mn1` | **1993-01-01**
     */
    Instrument["cadjpy"] = "cadjpy";
    /**
     * ### CONAGRA FOODS INC
     * *CAG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["cagususd"] = "cagususd";
    /**
     * ### CARDINAL HEALTH INC
     * *CAH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["cahususd"] = "cahususd";
    /**
     * ### Cap Gemini SA
     * *CAP.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["capfreur"] = "capfreur";
    /**
     * ### Carlsberg A/S
     * *CARLB.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["carlbdkdkk"] = "carlbdkdkk";
    /**
     * ### CATERPILLAR INC
     * *CAT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["catususd"] = "catususd";
    /**
     * ### Commerzbank AG
     * *CBK.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-26**
     * `m1` | **2015-03-26**
     * `m30` | **2015-03-26**
     * `h1` | **2015-03-26**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cbkdeeur"] = "cbkdeeur";
    /**
     * ### CBS CORP-CLASS B NON VOTING
     * *CBS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["cbsususd"] = "cbsususd";
    /**
     * ### Carnival PLC
     * *CCL.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cclgbgbx"] = "cclgbgbx";
    /**
     * ### CELGENE CORP
     * *CELG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["celgususd"] = "celgususd";
    /**
     * ### CF INDUSTRIES HOLDINGS INC
     * *CF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["cfususd"] = "cfususd";
    /**
     * ### Swiss Franc vs Japanese Yen
     * *CHF/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["chfjpy"] = "chfjpy";
    /**
     * ### Swiss Franc vs Singapore Dollar
     * *CHF/SGD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1998-01-01**
     * `mn1` | **1998-01-01**
     */
    Instrument["chfsgd"] = "chfsgd";
    /**
     * ### China A50 Index
     * *CHI.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-07-17**
     * `m1` | **2017-07-17**
     * `m30` | **2017-07-17**
     * `h1` | **2017-07-17**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["chiidxusd"] = "chiidxusd";
    /**
     * ### CIGNA CORP
     * *CI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ciususd"] = "ciususd";
    /**
     * ### COLGATE-PALMOLIVE CO
     * *CL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["clususd"] = "clususd";
    /**
     * ### COMCAST CORP-CLASS A
     * *CMCSA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cmcsaususd"] = "cmcsaususd";
    /**
     * ### CME GROUP INC
     * *CME.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cmeususd"] = "cmeususd";
    /**
     * ### CHIPOTLE MEXICAN GRILL INC
     * *CMG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cmgususd"] = "cmgususd";
    /**
     * ### CUMMINS INC
     * *CMI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["cmiususd"] = "cmiususd";
    /**
     * ### Centrica PLC
     * *CNA.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cnagbgbx"] = "cnagbgbx";
    /**
     * ### NY Cocoa
     * *COCOA.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-10-20**
     * `m1` | **2017-10-20**
     * `m30` | **2017-10-20**
     * `h1` | **2017-10-20**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cocoacmdusd"] = "cocoacmdusd";
    /**
     * ### Coffee Arabica
     * *COFFEE.CMD/USX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-04**
     * `m1` | **2017-12-04**
     * `m30` | **2017-12-04**
     * `h1` | **2017-12-04**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["coffeecmdusx"] = "coffeecmdusx";
    /**
     * ### ROCKWELL COLLINS INC
     * *COL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["colususd"] = "colususd";
    /**
     * ### Coloplast A/S
     * *COLOB.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["colobdkdkk"] = "colobdkdkk";
    /**
     * ### Continental AG
     * *CON.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-08**
     * `m1` | **2015-04-08**
     * `m30` | **2015-04-08**
     * `h1` | **2015-04-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["condeeur"] = "condeeur";
    /**
     * ### CONOCOPHILLIPS
     * *COP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["copususd"] = "copususd";
    /**
     * ### High Grade Copper
     * *COPPER.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2012-03-01**
     * `m1` | **2012-03-01**
     * `m30` | **2012-03-01**
     * `h1` | **2012-03-01**
     * `d1` | **2012-01-01**
     * `mn1` | **2012-01-01**
     */
    Instrument["coppercmdusd"] = "coppercmdusd";
    /**
     * ### COSTCO WHOLESALE CORP
     * *COST.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["costususd"] = "costususd";
    /**
     * ### Cotton
     * *COTTON.CMD/USX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-10-20**
     * `m1` | **2017-10-20**
     * `m30` | **2017-10-20**
     * `h1` | **2017-10-20**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cottoncmdusx"] = "cottoncmdusx";
    /**
     * ### Compass Group PLC
     * *CPG.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cpggbgbx"] = "cpggbgbx";
    /**
     * ### Capita PLC
     * *CPI.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["cpigbgbx"] = "cpigbgbx";
    /**
     * ### Croda International PLC
     * *CRDA.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-01**
     * `m1` | **2016-11-01**
     * `m30` | **2016-11-01**
     * `h1` | **2016-11-01**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["crdagbgbx"] = "crdagbgbx";
    /**
     * ### CRH PLC
     * *CRH.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["crhgbgbx"] = "crhgbgbx";
    /**
     * ### SALESFORCE.COM INC
     * *CRM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["crmususd"] = "crmususd";
    /**
     * ### AXA SA
     * *CS.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["csfreur"] = "csfreur";
    /**
     * ### Credit Suisse Group AG
     * *CS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["csususd"] = "csususd";
    /**
     * ### CISCO SYSTEMS INC
     * *CSCO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cscoususd"] = "cscoususd";
    /**
     * ### CSX CORP
     * *CSX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["csxususd"] = "csxususd";
    /**
     * ### CENTURYLINK INC
     * *CTL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ctlususd"] = "ctlususd";
    /**
     * ### COGNIZANT TECH SOLUTIONS-A
     * *CTSH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ctshususd"] = "ctshususd";
    /**
     * ### CVS HEALTH CORP
     * *CVS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cvsususd"] = "cvsususd";
    /**
     * ### CHEVRON CORP
     * *CVX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["cvxususd"] = "cvxususd";
    /**
     * ### DOMINION RESOURCES INC/VA
     * *D.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["dususd"] = "dususd";
    /**
     * ### Daimler AG
     * *DAI.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-27**
     * `m1` | **2015-03-27**
     * `m30` | **2015-03-27**
     * `h1` | **2015-03-27**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["daideeur"] = "daideeur";
    /**
     * ### DELTA AIR LINES INC
     * *DAL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dalususd"] = "dalususd";
    /**
     * ### Danske Bank A/S
     * *DANSKE.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["danskedkdkk"] = "danskedkdkk";
    /**
     * ### Deutsche Boerse AG
     * *DB1.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-14**
     * `m1` | **2015-04-14**
     * `m30` | **2015-04-14**
     * `h1` | **2015-04-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["db1deeur"] = "db1deeur";
    /**
     * ### Deutsche Bank AG
     * *DBK.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-25**
     * `m1` | **2015-03-25**
     * `m30` | **2015-03-25**
     * `h1` | **2015-03-25**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dbkdeeur"] = "dbkdeeur";
    /**
     * ### DEERE &amp; CO
     * *DE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["deususd"] = "deususd";
    /**
     * ### DISCOVER FINANCIAL SERVICES
     * *DFS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["dfsususd"] = "dfsususd";
    /**
     * ### Vinci SA
     * *DG.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dgfreur"] = "dgfreur";
    /**
     * ### DOLLAR GENERAL CORP
     * *DG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dgususd"] = "dgususd";
    /**
     * ### Diageo PLC
     * *DGE.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dgegbgbx"] = "dgegbgbx";
    /**
     * ### DR HORTON INC
     * *DHI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["dhiususd"] = "dhiususd";
    /**
     * ### DANAHER CORP
     * *DHR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dhrususd"] = "dhrususd";
    /**
     * ### Distribuidora Internacional de Alimentacion SA
     * *DIA.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["diaeseur"] = "diaeseur";
    /**
     * ### SPDR Dow Jones® Industrial Average ETF
     * *DIA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["diaususd"] = "diaususd";
    /**
     * ### Gas oil
     * *DIESEL.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-10-20**
     * `m1` | **2017-10-20**
     * `m30` | **2017-10-20**
     * `h1` | **2017-10-20**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dieselcmdusd"] = "dieselcmdusd";
    /**
     * ### WALT DISNEY CO/THE
     * *DIS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["disususd"] = "disususd";
    /**
     * ### DOLLAR TREE INC
     * *DLTR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dltrususd"] = "dltrususd";
    /**
     * ### DNB ASA
     * *DNB.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dnbnonok"] = "dnbnonok";
    /**
     * ### US Dollar Index
     * *DOLLAR.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-01**
     * `m1` | **2017-12-01**
     * `m30` | **2017-12-01**
     * `h1` | **2017-12-01**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dollaridxusd"] = "dollaridxusd";
    /**
     * ### Deutsche Post AG
     * *DPW.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-31**
     * `m1` | **2015-03-31**
     * `m30` | **2015-03-31**
     * `h1` | **2015-03-31**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dpwdeeur"] = "dpwdeeur";
    /**
     * ### Koninklijke DSM NV
     * *DSM.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dsmnleur"] = "dsmnleur";
    /**
     * ### Deutsche Telekom AG
     * *DTE.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-31**
     * `m1` | **2015-03-31**
     * `m30` | **2015-03-31**
     * `h1` | **2015-03-31**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["dtedeeur"] = "dtedeeur";
    /**
     * ### DUKE ENERGY CORP
     * *DUK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dukususd"] = "dukususd";
    /**
     * ### DAVITA HEALTHCARE PARTNERS I
     * *DVA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["dvaususd"] = "dvaususd";
    /**
     * ### DEVON ENERGY CORP
     * *DVN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["dvnususd"] = "dvnususd";
    /**
     * ### iShares Select Dividend ETF
     * *DVY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["dvyususd"] = "dvyususd";
    /**
     * ### ELECTRONIC ARTS INC
     * *EA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["eaususd"] = "eaususd";
    /**
     * ### EBAY INC
     * *EBAY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ebayususd"] = "ebayususd";
    /**
     * ### Erste Group Bank AG
     * *EBS.AT/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-04**
     * `m1` | **2016-11-04**
     * `m30` | **2016-11-04**
     * `h1` | **2016-11-04**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ebsateur"] = "ebsateur";
    /**
     * ### Electricite de France SA
     * *EDF.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["edffreur"] = "edffreur";
    /**
     * ### EDP - Energias de Portugal SA
     * *EDP.PT/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["edppteur"] = "edppteur";
    /**
     * ### iShares MSCI Emerging Markets ETF
     * *EEM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["eemususd"] = "eemususd";
    /**
     * ### iShares MSCI EAFE ETF
     * *EFA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["efaususd"] = "efaususd";
    /**
     * ### EQUIFAX INC
     * *EFX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["efxususd"] = "efxususd";
    /**
     * ### Essilor International SA
     * *EI.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["eifreur"] = "eifreur";
    /**
     * ### EDISON INTERNATIONAL
     * *EIX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["eixususd"] = "eixususd";
    /**
     * ### ESTEE LAUDER COMPANIES-CL A
     * *EL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["elususd"] = "elususd";
    /**
     * ### Endesa SA
     * *ELE.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["eleeseur"] = "eleeseur";
    /**
     * ### Elisa OYJ
     * *ELI1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["eli1vfieur"] = "eli1vfieur";
    /**
     * ### Electrolux AB
     * *ELUXB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["eluxbsesek"] = "eluxbsesek";
    /**
     * ### iShares J.P. Morgan USD Emerging Markets Bond ETF
     * *EMB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["embususd"] = "embususd";
    /**
     * ### EMERSON ELECTRIC CO
     * *EMR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["emrususd"] = "emrususd";
    /**
     * ### Bouygues SA
     * *EN.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["enfreur"] = "enfreur";
    /**
     * ### Enagas SA
     * *ENG.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["engeseur"] = "engeseur";
    /**
     * ### Engie
     * *ENGI.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2015-01-01**
     * `mn1` | **2015-01-01**
     */
    Instrument["engifreur"] = "engifreur";
    /**
     * ### E.ON SE
     * *EOAN.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-20**
     * `m1` | **2015-04-20**
     * `m30` | **2015-04-20**
     * `h1` | **2015-04-20**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["eoandeeur"] = "eoandeeur";
    /**
     * ### EOG RESOURCES INC
     * *EOG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["eogususd"] = "eogususd";
    /**
     * ### EQT CORP
     * *EQT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["eqtususd"] = "eqtususd";
    /**
     * ### Telefonaktiebolaget LM Ericsson
     * *ERICB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ericbsesek"] = "ericbsesek";
    /**
     * ### EXPRESS SCRIPTS HOLDING CO
     * *ESRX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["esrxususd"] = "esrxususd";
    /**
     * ### Ether vs US Dollar
     * *ETH/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-11**
     * `m1` | **2017-12-11**
     * `m30` | **2017-12-11**
     * `h1` | **2017-12-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ethusd"] = "ethusd";
    /**
     * ### Euro vs Australian Dollar
     * *EUR/AUD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2005-10-02**
     * `m1` | **2005-10-02**
     * `m30` | **2005-10-02**
     * `h1` | **2005-10-02**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["euraud"] = "euraud";
    /**
     * ### Euro vs Canadian Dollar
     * *EUR/CAD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-10-20**
     * `m1` | **2004-10-20**
     * `m30` | **2004-10-20**
     * `h1` | **2004-10-20**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["eurcad"] = "eurcad";
    /**
     * ### Euro vs Swiss Franc
     * *EUR/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["eurchf"] = "eurchf";
    /**
     * ### Euro vs Czech Koruna
     * *EUR/CZK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-01-03**
     * `m1` | **2016-01-03**
     * `m30` | **2016-01-03**
     * `h1` | **2016-01-03**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["eurczk"] = "eurczk";
    /**
     * ### Euro vs Danish Krone
     * *EUR/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-10-20**
     * `m1` | **2004-10-20**
     * `m30` | **2004-10-20**
     * `h1` | **2004-10-20**
     * `d1` | **1993-01-01**
     * `mn1` | **1993-01-01**
     */
    Instrument["eurdkk"] = "eurdkk";
    /**
     * ### Euro vs Pound Sterling
     * *EUR/GBP*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1995-01-01**
     * `mn1` | **1995-01-01**
     */
    Instrument["eurgbp"] = "eurgbp";
    /**
     * ### Euro vs Hong Kong Dollar
     * *EUR/HKD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["eurhkd"] = "eurhkd";
    /**
     * ### Euro vs Hungarian Forint
     * *EUR/HUF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["eurhuf"] = "eurhuf";
    /**
     * ### Euro vs Japanese Yen
     * *EUR/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1972-01-01**
     * `mn1` | **1972-01-01**
     */
    Instrument["eurjpy"] = "eurjpy";
    /**
     * ### Euro vs Norwegian Krone
     * *EUR/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-10-20**
     * `m1` | **2004-10-20**
     * `m30` | **2004-10-20**
     * `h1` | **2004-10-20**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["eurnok"] = "eurnok";
    /**
     * ### Euro vs New Zealand Dollar
     * *EUR/NZD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2005-12-26**
     * `m1` | **2005-12-26**
     * `m30` | **2005-12-26**
     * `h1` | **2005-12-26**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["eurnzd"] = "eurnzd";
    /**
     * ### Euro vs Polish Zloty
     * *EUR/PLN*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["eurpln"] = "eurpln";
    /**
     * ### Euro vs Russian Rouble
     * *EUR/RUB*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["eurrub"] = "eurrub";
    /**
     * ### Euro vs Swedish Krona
     * *EUR/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-10-27**
     * `m1` | **2004-10-27**
     * `m30` | **2004-10-27**
     * `h1` | **2004-10-27**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["eursek"] = "eursek";
    /**
     * ### Euro vs Singapore Dollar
     * *EUR/SGD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1998-01-01**
     * `mn1` | **1998-01-01**
     */
    Instrument["eursgd"] = "eursgd";
    /**
     * ### Euro vs Turkish Lira
     * *EUR/TRY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **2005-01-01**
     * `mn1` | **2005-01-01**
     */
    Instrument["eurtry"] = "eurtry";
    /**
     * ### Euro vs US Dollar
     * *EUR/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-05-04**
     * `m1` | **2003-05-04**
     * `m30` | **2003-05-04**
     * `h1` | **2003-05-04**
     * `d1` | **1972-01-01**
     * `mn1` | **1972-01-01**
     */
    Instrument["eurusd"] = "eurusd";
    /**
     * ### iShares MSCI Hong Kong ETF
     * *EWH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-06**
     * `m1` | **2017-11-06**
     * `m30` | **2017-11-06**
     * `h1` | **2017-11-06**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ewhususd"] = "ewhususd";
    /**
     * ### iShares MSCI Japan ETF
     * *EWJ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ewjususd"] = "ewjususd";
    /**
     * ### iShares MSCI Mexico Capped
     * *EWW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-03-13**
     * `m1` | **2017-03-13**
     * `m30` | **2017-03-13**
     * `h1` | **2017-03-13**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ewwususd"] = "ewwususd";
    /**
     * ### iShares MSCI Brazil Capped
     * *EWZ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ewzususd"] = "ewzususd";
    /**
     * ### EXELON CORP
     * *EXC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["excususd"] = "excususd";
    /**
     * ### EXPEDIA INC
     * *EXPE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["expeususd"] = "expeususd";
    /**
     * ### Experian PLC
     * *EXPN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["expngbgbx"] = "expngbgbx";
    /**
     * ### easyJet PLC
     * *EZJ.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ezjgbgbx"] = "ezjgbgbx";
    /**
     * ### iShares MSCI EMU ETF
     * *EZU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ezuususd"] = "ezuususd";
    /**
     * ### US Brent Crude Oil
     * *BRENT.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2010-12-02**
     * `m1` | **2010-12-02**
     * `m30` | **2010-12-02**
     * `h1` | **2010-12-02**
     * `d1` | **2006-01-01**
     * `mn1` | **2006-01-01**
     */
    Instrument["brentcmdusd"] = "brentcmdusd";
    /**
     * ### France 40 Index
     * *FRA.IDX/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1987-01-01**
     * `mn1` | **1987-01-01**
     */
    Instrument["fraidxeur"] = "fraidxeur";
    /**
     * ### USA 30 Index
     * *USA30.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2013-09-30**
     * `m1` | **2013-09-30**
     * `m30` | **2013-09-30**
     * `h1` | **2013-09-30**
     * `d1` | **2013-01-01**
     * `mn1` | **2013-01-01**
     */
    Instrument["usa30idxusd"] = "usa30idxusd";
    /**
     * ### Germany 30 Index
     * *DEU.IDX/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2013-09-30**
     * `m1` | **2013-09-30**
     * `m30` | **2013-09-30**
     * `h1` | **2013-09-30**
     * `d1` | **2013-01-01**
     * `mn1` | **2013-01-01**
     */
    Instrument["deuidxeur"] = "deuidxeur";
    /**
     * ### Europe 50 Index
     * *EUS.IDX/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1998-01-01**
     * `mn1` | **1998-01-01**
     */
    Instrument["eusidxeur"] = "eusidxeur";
    /**
     * ### UK 100 Index
     * *GBR.IDX/GBP*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1988-01-01**
     * `mn1` | **1988-01-01**
     */
    Instrument["gbridxgbp"] = "gbridxgbp";
    /**
     * ### Hong Kong 40 Index
     * *HKG.IDX/HKD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["hkgidxhkd"] = "hkgidxhkd";
    /**
     * ### Spain 35 Index
     * *ESP.IDX/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2012-01-02**
     * `m1` | **2012-01-02**
     * `m30` | **2012-01-02**
     * `h1` | **2012-01-02**
     * `d1` | **1992-01-01**
     * `mn1` | **1992-01-01**
     */
    Instrument["espidxeur"] = "espidxeur";
    /**
     * ### US Light Crude Oil
     * *LIGHT.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-23**
     * `m1` | **2011-09-23**
     * `m30` | **2011-09-23**
     * `h1` | **2011-09-23**
     * `d1` | **1983-01-01**
     * `mn1` | **1983-01-01**
     */
    Instrument["lightcmdusd"] = "lightcmdusd";
    /**
     * ### Japan 225
     * *JPN.IDX/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["jpnidxjpy"] = "jpnidxjpy";
    /**
     * ### USA 100 Technical Index
     * *USATECH.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["usatechidxusd"] = "usatechidxusd";
    /**
     * ### USA 500 Index
     * *USA500.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1980-01-01**
     * `mn1` | **1980-01-01**
     */
    Instrument["usa500idxusd"] = "usa500idxusd";
    /**
     * ### Switzerland 20 Index
     * *CHE.IDX/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2011-09-18**
     * `m1` | **2011-09-18**
     * `m30` | **2011-09-18**
     * `h1` | **2011-09-18**
     * `d1` | **1992-01-01**
     * `mn1` | **1992-01-01**
     */
    Instrument["cheidxchf"] = "cheidxchf";
    /**
     * ### Australia 200 Index
     * *AUS.IDX/AUD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2013-01-02**
     * `m1` | **2013-01-02**
     * `m30` | **2013-01-02**
     * `h1` | **2013-01-02**
     * `d1` | **1982-01-01**
     * `mn1` | **1982-01-01**
     */
    Instrument["ausidxaud"] = "ausidxaud";
    /**
     * ### FORD MOTOR CO
     * *F.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["fususd"] = "fususd";
    /**
     * ### FACEBOOK INC-A
     * *FB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["fbususd"] = "fbususd";
    /**
     * ### FREEPORT-MCMORAN INC
     * *FCX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["fcxususd"] = "fcxususd";
    /**
     * ### FEDEX CORP
     * *FDX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["fdxususd"] = "fdxususd";
    /**
     * ### FIRSTENERGY CORP
     * *FE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["feususd"] = "feususd";
    /**
     * ### Ferrovial SA
     * *FER.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["fereseur"] = "fereseur";
    /**
     * ### Fresenius Medical Care AG &amp; Co KGaA
     * *FME.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-01**
     * `m1` | **2015-04-01**
     * `m30` | **2015-04-01**
     * `h1` | **2015-04-01**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["fmedeeur"] = "fmedeeur";
    /**
     * ### TWENTY-FIRST CENTURY FOX-A
     * *FOXA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-31**
     * `m1` | **2018-01-31**
     * `m30` | **2018-01-31**
     * `h1` | **2018-01-31**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["foxaususd"] = "foxaususd";
    /**
     * ### Total SA
     * *FP.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["fpfreur"] = "fpfreur";
    /**
     * ### Valeo SA
     * *FR.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["frfreur"] = "frfreur";
    /**
     * ### Fresenius SE &amp; Co KGaA
     * *FRE.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-10**
     * `m1` | **2015-04-10**
     * `m30` | **2015-04-10**
     * `h1` | **2015-04-10**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["fredeeur"] = "fredeeur";
    /**
     * ### Fresnillo PLC
     * *FRES.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["fresgbgbx"] = "fresgbgbx";
    /**
     * ### iShares China Large-Cap ETF
     * *FXI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["fxiususd"] = "fxiususd";
    /**
     * ### Galp Energia SGPS SA
     * *GALP.PT/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["galppteur"] = "galppteur";
    /**
     * ### Gamesa Corporacion Tecnologica SA
     * *GAM.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["gameseur"] = "gameseur";
    /**
     * ### Natural Gas
     * *GAS.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2012-08-20**
     * `m1` | **2012-08-20**
     * `m30` | **2012-08-20**
     * `h1` | **2012-08-20**
     * `d1` | **2012-01-01**
     * `mn1` | **2012-01-01**
     */
    Instrument["gascmdusd"] = "gascmdusd";
    /**
     * ### Gas Natural SDG SA
     * *GAS.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["gaseseur"] = "gaseseur";
    /**
     * ### Pound Sterling vs Australian Dollar
     * *GBP/AUD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["gbpaud"] = "gbpaud";
    /**
     * ### Pound Sterling vs Canadian Dollar
     * *GBP/CAD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["gbpcad"] = "gbpcad";
    /**
     * ### Pound Sterling vs Swiss Franc
     * *GBP/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["gbpchf"] = "gbpchf";
    /**
     * ### Pound Sterling vs Japanese Yen
     * *GBP/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["gbpjpy"] = "gbpjpy";
    /**
     * ### Pound Sterling vs New Zealand Dollar
     * *GBP/NZD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **1994-01-01**
     * `mn1` | **1994-01-01**
     */
    Instrument["gbpnzd"] = "gbpnzd";
    /**
     * ### Pound Sterling vs US Dollar
     * *GBP/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-05-04**
     * `m1` | **2003-05-04**
     * `m30` | **2003-05-04**
     * `h1` | **2003-05-04**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["gbpusd"] = "gbpusd";
    /**
     * ### VanEck Vectors Gold Miners ETF
     * *GDX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gdxususd"] = "gdxususd";
    /**
     * ### VanEck Vectors Junior Gold Miners ETF
     * *GDXJ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gdxjususd"] = "gdxjususd";
    /**
     * ### GENERAL ELECTRIC CO
     * *GE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["geususd"] = "geususd";
    /**
     * ### Getinge AB
     * *GETIB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["getibsesek"] = "getibsesek";
    /**
     * ### G4S PLC
     * *GFS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["gfsgbgbx"] = "gfsgbgbx";
    /**
     * ### GILEAD SCIENCES INC
     * *GILD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gildususd"] = "gildususd";
    /**
     * ### GENERAL MILLS INC
     * *GIS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["gisususd"] = "gisususd";
    /**
     * ### SPDR Gold Shares ETF
     * *GLD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gldususd"] = "gldususd";
    /**
     * ### Societe Generale SA
     * *GLE.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["glefreur"] = "glefreur";
    /**
     * ### Glencore PLC
     * *GLEN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["glengbgbx"] = "glengbgbx";
    /**
     * ### CORNING INC
     * *GLW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["glwususd"] = "glwususd";
    /**
     * ### GENERAL MOTORS CO
     * *GM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gmususd"] = "gmususd";
    /**
     * ### ALPHABET INC-CL C
     * *GOOG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["googususd"] = "googususd";
    /**
     * ### ALPHABET INC-CL A
     * *GOOGL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["googlususd"] = "googlususd";
    /**
     * ### GAP INC/THE
     * *GPS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["gpsususd"] = "gpsususd";
    /**
     * ### GOLDMAN SACHS GROUP INC
     * *GS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["gsususd"] = "gsususd";
    /**
     * ### Gemalto NV
     * *GTO.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["gtonleur"] = "gtonleur";
    /**
     * ### WW GRAINGER INC
     * *GWW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["gwwususd"] = "gwwususd";
    /**
     * ### HALLIBURTON CO
     * *HAL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["halususd"] = "halususd";
    /**
     * ### WELLTOWER INC
     * *HCN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["hcnususd"] = "hcnususd";
    /**
     * ### HCP INC
     * *HCP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["hcpususd"] = "hcpususd";
    /**
     * ### HOME DEPOT INC
     * *HD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["hdususd"] = "hdususd";
    /**
     * ### HeidelbergCement AG
     * *HEI.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-02**
     * `m1` | **2015-04-02**
     * `m30` | **2015-04-02**
     * `h1` | **2015-04-02**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["heideeur"] = "heideeur";
    /**
     * ### Heineken NV
     * *HEIA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["heianleur"] = "heianleur";
    /**
     * ### Henkel AG &amp; Co KGaA
     * *HEN3.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["hen3deeur"] = "hen3deeur";
    /**
     * ### HESS CORP
     * *HES.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["hesususd"] = "hesususd";
    /**
     * ### Hong Kong Dollar vs Japanese Yen
     * *HKD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["hkdjpy"] = "hkdjpy";
    /**
     * ### Hennes &amp; Mauritz AB
     * *HMB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["hmbsesek"] = "hmbsesek";
    /**
     * ### Hammerson PLC
     * *HMSO.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["hmsogbgbx"] = "hmsogbgbx";
    /**
     * ### HONEYWELL INTERNATIONAL INC
     * *HON.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["honususd"] = "honususd";
    /**
     * ### HP INC
     * *HPQ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["hpqususd"] = "hpqususd";
    /**
     * ### HSBC Holdings PLC
     * *HSBA.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["hsbagbgbx"] = "hsbagbgbx";
    /**
     * ### HUMANA INC
     * *HUM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["humususd"] = "humususd";
    /**
     * ### International Consolidated Airlines Grou
     * *IAG.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["iaggbgbx"] = "iaggbgbx";
    /**
     * ### iShares Nasdaq Biotechnology ETF
     * *IBB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ibbususd"] = "ibbususd";
    /**
     * ### Iberdrola SA
     * *IBE.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ibeeseur"] = "ibeeseur";
    /**
     * ### INTL BUSINESS MACHINES CORP
     * *IBM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ibmususd"] = "ibmususd";
    /**
     * ### INTERCONTINENTAL EXCHANGE IN
     * *ICE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-06**
     * `m1` | **2017-11-06**
     * `m30` | **2017-11-06**
     * `h1` | **2017-11-06**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["iceususd"] = "iceususd";
    /**
     * ### iShares 7-10 Year Treasury Bond ETF
     * *IEF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["iefususd"] = "iefususd";
    /**
     * ### Infineon Technologies AG
     * *IFX.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-13**
     * `m1` | **2015-04-13**
     * `m30` | **2015-04-13**
     * `h1` | **2015-04-13**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ifxdeeur"] = "ifxdeeur";
    /**
     * ### InterContinental Hotels Group PLC
     * *IHG.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-01**
     * `m1` | **2016-11-01**
     * `m30` | **2016-11-01**
     * `h1` | **2016-11-01**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ihggbgbx"] = "ihggbgbx";
    /**
     * ### iShares Core S&amp;P Mid-Cap ETF
     * *IJH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ijhususd"] = "ijhususd";
    /**
     * ### iShares Core S&amp;P Small-Cap ETF
     * *IJR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ijrususd"] = "ijrususd";
    /**
     * ### ILLUMINA INC
     * *ILMN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ilmnususd"] = "ilmnususd";
    /**
     * ### Imperial Brands Plc
     * *IMT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["imtgbgbx"] = "imtgbgbx";
    /**
     * ### India 50 Index
     * *IND.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-01**
     * `m1` | **2017-12-01**
     * `m30` | **2017-12-01**
     * `h1` | **2017-12-01**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["indidxusd"] = "indidxusd";
    /**
     * ### ING Groep NV
     * *INGA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["inganleur"] = "inganleur";
    /**
     * ### INTEL CORP
     * *INTC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["intcususd"] = "intcususd";
    /**
     * ### INTUIT INC
     * *INTU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["intuususd"] = "intuususd";
    /**
     * ### Investor AB
     * *INVEB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["invebsesek"] = "invebsesek";
    /**
     * ### INTERPUBLIC GROUP OF COS INC
     * *IPG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ipgususd"] = "ipgususd";
    /**
     * ### Inmarsat PLC
     * *ISAT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["isatgbgbx"] = "isatgbgbx";
    /**
     * ### INTUITIVE SURGICAL INC
     * *ISRG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["isrgususd"] = "isrgususd";
    /**
     * ### Intertek Group PLC
     * *ITRK.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["itrkgbgbx"] = "itrkgbgbx";
    /**
     * ### Itau Unibanco Holding S.A.
     * *ITUB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["itubususd"] = "itubususd";
    /**
     * ### ITV PLC
     * *ITV.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["itvgbgbx"] = "itvgbgbx";
    /**
     * ### ILLINOIS TOOL WORKS
     * *ITW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["itwususd"] = "itwususd";
    /**
     * ### Inditex SA
     * *ITX.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["itxeseur"] = "itxeseur";
    /**
     * ### iShares S&amp;P 500 Value ETF
     * *IVE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["iveususd"] = "iveususd";
    /**
     * ### iShares S&amp;P 500 Growth ETF
     * *IVW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ivwususd"] = "ivwususd";
    /**
     * ### iShares Russell 1000 Value ETF
     * *IWD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["iwdususd"] = "iwdususd";
    /**
     * ### iShares Russell 1000 Growth ETF
     * *IWF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["iwfususd"] = "iwfususd";
    /**
     * ### iShares Russell 2000 ETF
     * *IWM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["iwmususd"] = "iwmususd";
    /**
     * ### iShares U.S. Real Estate ETF
     * *IYR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["iyrususd"] = "iyrususd";
    /**
     * ### JOHNSON CONTROLS INC
     * *JCI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["jciususd"] = "jciususd";
    /**
     * ### JOHNSON &amp; JOHNSON
     * *JNJ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["jnjususd"] = "jnjususd";
    /**
     * ### SPDR Barclays Capital High Yield Bond ETF
     * *JNK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["jnkususd"] = "jnkususd";
    /**
     * ### JPMORGAN CHASE &amp; CO
     * *JPM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["jpmususd"] = "jpmususd";
    /**
     * ### NORDSTROM INC
     * *JWN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["jwnususd"] = "jwnususd";
    /**
     * ### KELLOGG CO
     * *K.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["kususd"] = "kususd";
    /**
     * ### KBC Groep NV
     * *KBC.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["kbcbeeur"] = "kbcbeeur";
    /**
     * ### Kering
     * *KER.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-09-30**
     * `m1` | **2016-09-30**
     * `m30` | **2016-09-30**
     * `h1` | **2016-09-30**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["kerfreur"] = "kerfreur";
    /**
     * ### KEYCORP
     * *KEY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["keyususd"] = "keyususd";
    /**
     * ### Kingfisher PLC
     * *KGF.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["kgfgbgbx"] = "kgfgbgbx";
    /**
     * ### KRAFT HEINZ CO/THE
     * *KHC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["khcususd"] = "khcususd";
    /**
     * ### KIMBERLY-CLARK CORP
     * *KMB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["kmbususd"] = "kmbususd";
    /**
     * ### KINDER MORGAN INC
     * *KMI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["kmiususd"] = "kmiususd";
    /**
     * ### COCA-COLA CO/THE
     * *KO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["koususd"] = "koususd";
    /**
     * ### Koninklijke KPN NV
     * *KPN.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["kpnnleur"] = "kpnnleur";
    /**
     * ### KROGER CO
     * *KR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["krususd"] = "krususd";
    /**
     * ### KOHLS CORP
     * *KSS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["kssususd"] = "kssususd";
    /**
     * ### LOEWS CORP
     * *L.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lususd"] = "lususd";
    /**
     * ### Land Securities Group PLC
     * *LAND.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["landgbgbx"] = "landgbgbx";
    /**
     * ### LENNAR CORP-A
     * *LEN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lenususd"] = "lenususd";
    /**
     * ### Legal &amp; General Group PLC
     * *LGEN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lgengbgbx"] = "lgengbgbx";
    /**
     * ### Deutsche Lufthansa AG
     * *LHA.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lhadeeur"] = "lhadeeur";
    /**
     * ### Klepierre
     * *LI.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lifreur"] = "lifreur";
    /**
     * ### Linde AG
     * *LIN.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lindeeur"] = "lindeeur";
    /**
     * ### Lloyds Banking Group PLC
     * *LLOY.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lloygbgbx"] = "lloygbgbx";
    /**
     * ### ELI LILLY &amp; CO
     * *LLY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["llyususd"] = "llyususd";
    /**
     * ### LOCKHEED MARTIN CORP
     * *LMT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lmtususd"] = "lmtususd";
    /**
     * ### LOWE'S COS INC
     * *LOW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lowususd"] = "lowususd";
    /**
     * ### Legrand SA
     * *LR.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lrfreur"] = "lrfreur";
    /**
     * ### LAM RESEARCH CORP
     * *LRCX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lrcxususd"] = "lrcxususd";
    /**
     * ### London Stock Exchange Group PLC
     * *LSE.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lsegbgbx"] = "lsegbgbx";
    /**
     * ### SOUTHWEST AIRLINES CO
     * *LUV.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["luvususd"] = "luvususd";
    /**
     * ### Las Vegas Sands Corp.
     * *LVS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["lvsususd"] = "lvsususd";
    /**
     * ### Lanxess AG
     * *LXS.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lxsdeeur"] = "lxsdeeur";
    /**
     * ### MACY'S INC
     * *M.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mususd"] = "mususd";
    /**
     * ### MASTERCARD INC-CLASS A
     * *MA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["maususd"] = "maususd";
    /**
     * ### AP Moeller - Maersk A/S
     * *MAERSKB.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["maerskbdkdkk"] = "maerskbdkdkk";
    /**
     * ### MARRIOTT INTERNATIONAL -CL A
     * *MAR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["marususd"] = "marususd";
    /**
     * ### MATTEL INC
     * *MAT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["matususd"] = "matususd";
    /**
     * ### LVMH Moet Hennessy Louis Vuitton SA
     * *MC.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mcfreur"] = "mcfreur";
    /**
     * ### MCDONALD'S CORP
     * *MCD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mcdususd"] = "mcdususd";
    /**
     * ### MICROCHIP TECHNOLOGY INC
     * *MCHP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["mchpususd"] = "mchpususd";
    /**
     * ### MCKESSON CORP
     * *MCK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mckususd"] = "mckususd";
    /**
     * ### MONDELEZ INTERNATIONAL INC-A
     * *MDLZ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mdlzususd"] = "mdlzususd";
    /**
     * ### METLIFE INC
     * *MET.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["metususd"] = "metususd";
    /**
     * ### MGM RESORTS INTERNATIONAL
     * *MGM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mgmususd"] = "mgmususd";
    /**
     * ### Marine Harvest ASA
     * *MHG.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mhgnonok"] = "mhgnonok";
    /**
     * ### Marks &amp; Spencer Group PLC
     * *MKS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mksgbgbx"] = "mksgbgbx";
    /**
     * ### 3M CO
     * *MMM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mmmususd"] = "mmmususd";
    /**
     * ### Mondi PLC
     * *MNDI.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mndigbgbx"] = "mndigbgbx";
    /**
     * ### ALTRIA GROUP INC
     * *MO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["moususd"] = "moususd";
    /**
     * ### MARATHON PETROLEUM CORP
     * *MPC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["mpcususd"] = "mpcususd";
    /**
     * ### Merck KGaA
     * *MRK.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-03-24**
     * `m1` | **2015-03-24**
     * `m30` | **2015-03-24**
     * `h1` | **2015-03-24**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mrkdeeur"] = "mrkdeeur";
    /**
     * ### MERCK &amp; CO. INC.
     * *MRK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["mrkususd"] = "mrkususd";
    /**
     * ### MARATHON OIL CORP
     * *MRO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["mroususd"] = "mroususd";
    /**
     * ### WM Morrison Supermarkets PLC
     * *MRW.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mrwgbgbx"] = "mrwgbgbx";
    /**
     * ### MORGAN STANLEY
     * *MS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["msususd"] = "msususd";
    /**
     * ### MICROSOFT CORP
     * *MSFT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["msftususd"] = "msftususd";
    /**
     * ### ArcelorMittal
     * *MT.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["mtnleur"] = "mtnleur";
    /**
     * ### MICRON TECHNOLOGY INC
     * *MU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["muususd"] = "muususd";
    /**
     * ### Muenchener Rueckversicherungs AG
     * *MUV2.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["muv2deeur"] = "muv2deeur";
    /**
     * ### NOBLE ENERGY INC
     * *NBL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["nblususd"] = "nblususd";
    /**
     * ### Nordea Bank AB
     * *NDA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ndasesek"] = "ndasesek";
    /**
     * ### NEXTERA ENERGY INC
     * *NEE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["neeususd"] = "neeususd";
    /**
     * ### NEWMONT MINING CORP
     * *NEM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nemususd"] = "nemususd";
    /**
     * ### Neste OYJ
     * *NES1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nes1vfieur"] = "nes1vfieur";
    /**
     * ### NETFLIX INC
     * *NFLX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nflxususd"] = "nflxususd";
    /**
     * ### National Grid PLC
     * *NG.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nggbgbx"] = "nggbgbx";
    /**
     * ### Norsk Hydro ASA
     * *NHY.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nhynonok"] = "nhynonok";
    /**
     * ### NIKE INC
     * *NKE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nkeususd"] = "nkeususd";
    /**
     * ### Netherlands 25 Index
     * *NLD.IDX/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2013-02-27**
     * `m1` | **2013-02-27**
     * `m30` | **2013-02-27**
     * `h1` | **2013-02-27**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["nldidxeur"] = "nldidxeur";
    /**
     * ### NORTHROP GRUMMAN CORP
     * *NOC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nocususd"] = "nocususd";
    /**
     * ### Novo Nordisk A/S
     * *NOVOB.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["novobdkdkk"] = "novobdkdkk";
    /**
     * ### Nokian Renkaat OYJ
     * *NRE1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nre1vfieur"] = "nre1vfieur";
    /**
     * ### NRG ENERGY INC
     * *NRG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["nrgususd"] = "nrgususd";
    /**
     * ### NORFOLK SOUTHERN CORP
     * *NSC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["nscususd"] = "nscususd";
    /**
     * ### NVIDIA CORP
     * *NVDA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nvdaususd"] = "nvdaususd";
    /**
     * ### NEWELL BRANDS INC
     * *NWL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["nwlususd"] = "nwlususd";
    /**
     * ### Next PLC
     * *NXT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nxtgbgbx"] = "nxtgbgbx";
    /**
     * ### New Zealand Dollar vs Canadian Dollar
     * *NZD/CAD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **2002-01-01**
     * `mn1` | **2002-01-01**
     */
    Instrument["nzdcad"] = "nzdcad";
    /**
     * ### New Zealand Dollar vs Swiss Franc
     * *NZD/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["nzdchf"] = "nzdchf";
    /**
     * ### New Zealand Dollar vs Japanese Yen
     * *NZD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2006-01-01**
     * `m1` | **2006-01-01**
     * `m30` | **2006-01-01**
     * `h1` | **2006-01-01**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["nzdjpy"] = "nzdjpy";
    /**
     * ### New Zealand Dollar vs US Dollar
     * *NZD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["nzdusd"] = "nzdusd";
    /**
     * ### Novozymes A/S
     * *NZYMB.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nzymbdkdkk"] = "nzymbdkdkk";
    /**
     * ### Orange Juice
     * *OJUICE.CMD/USX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-10-20**
     * `m1` | **2017-10-20**
     * `m30` | **2017-10-20**
     * `h1` | **2017-10-20**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ojuicecmdusx"] = "ojuicecmdusx";
    /**
     * ### ONEOK INC
     * *OKE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["okeususd"] = "okeususd";
    /**
     * ### OMNICOM GROUP
     * *OMC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["omcususd"] = "omcususd";
    /**
     * ### L'Oreal SA
     * *OR.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["orfreur"] = "orfreur";
    /**
     * ### Orange SA
     * *ORA.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2013-01-01**
     * `mn1` | **2013-01-01**
     */
    Instrument["orafreur"] = "orafreur";
    /**
     * ### ORACLE CORP
     * *ORCL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["orclususd"] = "orclususd";
    /**
     * ### Orkla ASA
     * *ORK.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["orknonok"] = "orknonok";
    /**
     * ### O'REILLY AUTOMOTIVE INC
     * *ORLY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["orlyususd"] = "orlyususd";
    /**
     * ### Outotec OYJ
     * *OTE1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ote1vfieur"] = "ote1vfieur";
    /**
     * ### Outokumpu OYJ
     * *OUT1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["out1vfieur"] = "out1vfieur";
    /**
     * ### OCCIDENTAL PETROLEUM CORP
     * *OXY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-05-11**
     * `m1` | **2017-05-11**
     * `m30` | **2017-05-11**
     * `h1` | **2017-05-11**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["oxyususd"] = "oxyususd";
    /**
     * ### Porsche Automobil Holding SE
     * *PAH3.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-21**
     * `m1` | **2015-04-21**
     * `m30` | **2015-04-21**
     * `h1` | **2015-04-21**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["pah3deeur"] = "pah3deeur";
    /**
     * ### PAYCHEX INC
     * *PAYX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["payxususd"] = "payxususd";
    /**
     * ### Petroleo Brasileiro S.A.
     * *PBR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pbrususd"] = "pbrususd";
    /**
     * ### PACCAR INC
     * *PCAR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["pcarususd"] = "pcarususd";
    /**
     * ### P G &amp; E CORP
     * *PCG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pcgususd"] = "pcgususd";
    /**
     * ### PRICELINE GROUP INC/THE
     * *PCLN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pclnususd"] = "pclnususd";
    /**
     * ### PEPSICO INC
     * *PEP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pepususd"] = "pepususd";
    /**
     * ### Petrofac Ltd
     * *PFC.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["pfcgbgbx"] = "pfcgbgbx";
    /**
     * ### PFIZER INC
     * *PFE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pfeususd"] = "pfeususd";
    /**
     * ### PROCTER &amp; GAMBLE CO/THE
     * *PG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pgususd"] = "pgususd";
    /**
     * ### PROGRESSIVE CORP
     * *PGR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["pgrususd"] = "pgrususd";
    /**
     * ### PARKER HANNIFIN CORP
     * *PH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["phususd"] = "phususd";
    /**
     * ### Koninklijke Philips NV
     * *PHIA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["phianleur"] = "phianleur";
    /**
     * ### Poland 20 Index
     * *PLN.IDX/PLN*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-01**
     * `m1` | **2017-12-01**
     * `m30` | **2017-12-01**
     * `h1` | **2017-12-01**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["plnidxpln"] = "plnidxpln";
    /**
     * ### PHILIP MORRIS INTERNATIONAL
     * *PM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pmususd"] = "pmususd";
    /**
     * ### PNC FINANCIAL SERVICES GROUP
     * *PNC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pncususd"] = "pncususd";
    /**
     * ### Pandora A/S
     * *PNDORA.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["pndoradkdkk"] = "pndoradkdkk";
    /**
     * ### PPG INDUSTRIES INC
     * *PPG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-02**
     * `m1` | **2018-02-02**
     * `m30` | **2018-02-02**
     * `h1` | **2018-02-02**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ppgususd"] = "ppgususd";
    /**
     * ### Prudential PLC
     * *PRU.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["prugbgbx"] = "prugbgbx";
    /**
     * ### PRUDENTIAL FINANCIAL INC
     * *PRU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["pruususd"] = "pruususd";
    /**
     * ### PUBLIC STORAGE
     * *PSA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["psaususd"] = "psaususd";
    /**
     * ### ProSiebenSat.1 Media AG
     * *PSM.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-20**
     * `m1` | **2015-04-20**
     * `m30` | **2015-04-20**
     * `h1` | **2015-04-20**
     * `d1` | **2013-01-01**
     * `mn1` | **2013-01-01**
     */
    Instrument["psmdeeur"] = "psmdeeur";
    /**
     * ### Persimmon PLC
     * *PSN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["psngbgbx"] = "psngbgbx";
    /**
     * ### Pearson PLC
     * *PSON.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["psongbgbx"] = "psongbgbx";
    /**
     * ### PHILLIPS 66
     * *PSX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["psxususd"] = "psxususd";
    /**
     * ### Publicis Groupe SA
     * *PUB.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["pubfreur"] = "pubfreur";
    /**
     * ### PIONEER NATURAL RESOURCES CO
     * *PXD.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pxdususd"] = "pxdususd";
    /**
     * ### PAYPAL HOLDINGS INC
     * *PYPL.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["pyplususd"] = "pyplususd";
    /**
     * ### QUALCOMM INC
     * *QCOM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["qcomususd"] = "qcomususd";
    /**
     * ### PowerShares QQQ ETF
     * *QQQ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["qqqususd"] = "qqqususd";
    /**
     * ### Randstad Holding NV
     * *RAND.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["randnleur"] = "randnleur";
    /**
     * ### Reckitt Benckiser Group PLC
     * *RB.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rbgbgbx"] = "rbgbgbx";
    /**
     * ### Raiffeisen Bank International AG
     * *RBI.AT/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-02**
     * `m1` | **2016-11-02**
     * `m30` | **2016-11-02**
     * `h1` | **2016-11-02**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rbiateur"] = "rbiateur";
    /**
     * ### Royal Bank of Scotland Group PLC
     * *RBS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rbsgbgbx"] = "rbsgbgbx";
    /**
     * ### Royal Dutch Shell PLC
     * *RDSA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rdsanleur"] = "rdsanleur";
    /**
     * ### Royal Dutch Shell PLC
     * *RDSB.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-01**
     * `m1` | **2016-11-01**
     * `m30` | **2016-11-01**
     * `h1` | **2016-11-01**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rdsbgbgbx"] = "rdsbgbgbx";
    /**
     * ### Red Electrica Corp SA
     * *REE.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["reeeseur"] = "reeeseur";
    /**
     * ### REGENERON PHARMACEUTICALS
     * *REGN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["regnususd"] = "regnususd";
    /**
     * ### Reed Elsevier PLC
     * *REL.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["relgbgbx"] = "relgbgbx";
    /**
     * ### RELX NV
     * *REN.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2015-01-01**
     * `mn1` | **2015-01-01**
     */
    Instrument["rennleur"] = "rennleur";
    /**
     * ### Repsol SA
     * *REP.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["repeseur"] = "repeseur";
    /**
     * ### REGIONS FINANCIAL CORP
     * *RF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["rfususd"] = "rfususd";
    /**
     * ### RED HAT INC
     * *RHT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["rhtususd"] = "rhtususd";
    /**
     * ### Pernod-Ricard SA
     * *RI.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rifreur"] = "rifreur";
    /**
     * ### Rio Tinto PLC
     * *RIO.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["riogbgbx"] = "riogbgbx";
    /**
     * ### Royal Mail PLC
     * *RMG.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2013-01-01**
     * `mn1` | **2013-01-01**
     */
    Instrument["rmggbgbx"] = "rmggbgbx";
    /**
     * ### Renault SA
     * *RNO.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rnofreur"] = "rnofreur";
    /**
     * ### ROSS STORES INC
     * *ROST.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["rostususd"] = "rostususd";
    /**
     * ### Rolls-Royce Holdings PLC
     * *RR.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rrgbgbx"] = "rrgbgbx";
    /**
     * ### RANGE RESOURCES CORP
     * *RRC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["rrcususd"] = "rrcususd";
    /**
     * ### Randgold Resources Ltd
     * *RRS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rrsgbgbx"] = "rrsgbgbx";
    /**
     * ### RSA Insurance Group PLC
     * *RSA.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rsagbgbx"] = "rsagbgbx";
    /**
     * ### RAYTHEON COMPANY
     * *RTN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["rtnususd"] = "rtnususd";
    /**
     * ### RWE AG
     * *RWE.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-16**
     * `m1` | **2015-04-16**
     * `m30` | **2015-04-16**
     * `h1` | **2015-04-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rwedeeur"] = "rwedeeur";
    /**
     * ### Safran SA
     * *SAF.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["saffreur"] = "saffreur";
    /**
     * ### Banco Santander SA
     * *SAN.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["saneseur"] = "saneseur";
    /**
     * ### Sanofi
     * *SAN.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sanfreur"] = "sanfreur";
    /**
     * ### Sandvik AB
     * *SAND.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sandsesek"] = "sandsesek";
    /**
     * ### SAP AG
     * *SAP.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-16**
     * `m1` | **2015-04-16**
     * `m30` | **2015-04-16**
     * `h1` | **2015-04-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sapdeeur"] = "sapdeeur";
    /**
     * ### J Sainsbury PLC
     * *SBRY.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sbrygbgbx"] = "sbrygbgbx";
    /**
     * ### STARBUCKS CORP
     * *SBUX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["sbuxususd"] = "sbuxususd";
    /**
     * ### Svenska Cellulosa AB
     * *SCAB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["scabsesek"] = "scabsesek";
    /**
     * ### SCHWAB (CHARLES) CORP
     * *SCHW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["schwususd"] = "schwususd";
    /**
     * ### K+S AG
     * *SDF.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-15**
     * `m1` | **2015-04-15**
     * `m30` | **2015-04-15**
     * `h1` | **2015-04-15**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sdfdeeur"] = "sdfdeeur";
    /**
     * ### Skandinaviska Enskilda Banken AB
     * *SEBA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sebasesek"] = "sebasesek";
    /**
     * ### Securitas AB
     * *SECUB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["secubsesek"] = "secubsesek";
    /**
     * ### Singapore Blue Chip Cash Index
     * *SGD.IDX/SGD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-01**
     * `m1` | **2017-12-01**
     * `m30` | **2017-12-01**
     * `h1` | **2017-12-01**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["sgdidxsgd"] = "sgdidxsgd";
    /**
     * ### Singapore Dollar vs Japanese Yen
     * *SGD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["sgdjpy"] = "sgdjpy";
    /**
     * ### Sage Group PLC/The
     * *SGE.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sgegbgbx"] = "sgegbgbx";
    /**
     * ### Cie de St-Gobain
     * *SGO.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-10-31**
     * `m1` | **2016-10-31**
     * `m30` | **2016-10-31**
     * `h1` | **2016-10-31**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sgofreur"] = "sgofreur";
    /**
     * ### Shire PLC
     * *SHP.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["shpgbgbx"] = "shpgbgbx";
    /**
     * ### SHERWIN-WILLIAMS COMPANY
     * *SHW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["shwususd"] = "shwususd";
    /**
     * ### Siemens AG
     * *SIE.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-20**
     * `m1` | **2015-04-20**
     * `m30` | **2015-04-20**
     * `h1` | **2015-04-20**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["siedeeur"] = "siedeeur";
    /**
     * ### JM SMUCKER COMPANY
     * *SJM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["sjmususd"] = "sjmususd";
    /**
     * ### Skanska AB
     * *SKAB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["skabsesek"] = "skabsesek";
    /**
     * ### SKF AB
     * *SKFB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["skfbsesek"] = "skfbsesek";
    /**
     * ### Sky Plc
     * *SKY.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2014-01-01**
     * `mn1` | **2014-01-01**
     */
    Instrument["skygbgbx"] = "skygbgbx";
    /**
     * ### iShares Silver Trust ETF
     * *SLV.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["slvususd"] = "slvususd";
    /**
     * ### Smiths Group PLC
     * *SMIN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["smingbgbx"] = "smingbgbx";
    /**
     * ### Smith &amp; Nephew PLC
     * *SN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sngbgbx"] = "sngbgbx";
    /**
     * ### SNAP Inc
     * *SNAP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["snapususd"] = "snapususd";
    /**
     * ### SOUTHERN CO/THE
     * *SO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["soususd"] = "soususd";
    /**
     * ### Solvay SA
     * *SOLB.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["solbbeeur"] = "solbbeeur";
    /**
     * ### SIMON PROPERTY GROUP INC
     * *SPG.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["spgususd"] = "spgususd";
    /**
     * ### SPDR S&amp;P 500 ETF
     * *SPY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-02-16**
     * `m1` | **2017-02-16**
     * `m30` | **2017-02-16**
     * `h1` | **2017-02-16**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["spyususd"] = "spyususd";
    /**
     * ### SSE PLC
     * *SSE.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ssegbgbx"] = "ssegbgbx";
    /**
     * ### Standard Chartered PLC
     * *STAN.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["stangbgbx"] = "stangbgbx";
    /**
     * ### Stora Enso OYJ
     * *STERV.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-03**
     * `m1` | **2016-11-03**
     * `m30` | **2016-11-03**
     * `h1` | **2016-11-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["stervfieur"] = "stervfieur";
    /**
     * ### SUNTRUST BANKS INC
     * *STI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["stiususd"] = "stiususd";
    /**
     * ### Statoil ASA
     * *STL.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["stlnonok"] = "stlnonok";
    /**
     * ### STATE STREET CORP
     * *STT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["sttususd"] = "sttususd";
    /**
     * ### CONSTELLATION BRANDS INC-A
     * *STZ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["stzususd"] = "stzususd";
    /**
     * ### Schneider Electric SA
     * *SU.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sufreur"] = "sufreur";
    /**
     * ### London Sugar No.5
     * *SUGAR.CMD/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-10-02**
     * `m1` | **2017-10-02**
     * `m30` | **2017-10-02**
     * `h1` | **2017-10-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["sugarcmdusd"] = "sugarcmdusd";
    /**
     * ### Severn Trent PLC
     * *SVT.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["svtgbgbx"] = "svtgbgbx";
    /**
     * ### Swedbank AB
     * *SWEDA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["swedasesek"] = "swedasesek";
    /**
     * ### STANLEY BLACK &amp; DECKER INC
     * *SWK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["swkususd"] = "swkususd";
    /**
     * ### Swedish Match AB
     * *SWMA.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["swmasesek"] = "swmasesek";
    /**
     * ### STRYKER CORP
     * *SYK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["sykususd"] = "sykususd";
    /**
     * ### SYMANTEC CORP
     * *SYMC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["symcususd"] = "symcususd";
    /**
     * ### SYSCO CORP
     * *SYY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["syyususd"] = "syyususd";
    /**
     * ### AT&amp;T INC
     * *T.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tususd"] = "tususd";
    /**
     * ### MOLSON COORS BREWING CO -B
     * *TAP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["tapususd"] = "tapususd";
    /**
     * ### Tate &amp; Lyle PLC
     * *TATE.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tategbgbx"] = "tategbgbx";
    /**
     * ### Telefonica SA
     * *TEF.ES/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tefeseur"] = "tefeseur";
    /**
     * ### Telenor ASA
     * *TEL.NO/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["telnonok"] = "telnonok";
    /**
     * ### Tele2 AB
     * *TEL2B.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-08**
     * `m1` | **2016-11-08**
     * `m30` | **2016-11-08**
     * `h1` | **2016-11-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tel2bsesek"] = "tel2bsesek";
    /**
     * ### TEVA PHARMACEUTICAL-SP ADR
     * *TEVA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tevaususd"] = "tevaususd";
    /**
     * ### TARGET CORP
     * *TGT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tgtususd"] = "tgtususd";
    /**
     * ### TIFFANY &amp; CO
     * *TIF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["tifususd"] = "tifususd";
    /**
     * ### TJX COMPANIES INC
     * *TJX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tjxususd"] = "tjxususd";
    /**
     * ### ThyssenKrupp AG
     * *TKA.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-14**
     * `m1` | **2015-04-14**
     * `m30` | **2015-04-14**
     * `h1` | **2015-04-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tkadeeur"] = "tkadeeur";
    /**
     * ### Telia Company AB
     * *TLS1V.FI/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-09**
     * `m1` | **2016-11-09**
     * `m30` | **2016-11-09**
     * `h1` | **2016-11-09**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["tls1vfieur"] = "tls1vfieur";
    /**
     * ### Telia Company AB
     * *TLSN.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["tlsnsesek"] = "tlsnsesek";
    /**
     * ### iShares 20+ Year Treasury Bond ETF
     * *TLT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tltususd"] = "tltususd";
    /**
     * ### Tullow Oil PLC
     * *TLW.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tlwgbgbx"] = "tlwgbgbx";
    /**
     * ### THERMO FISHER SCIENTIFIC INC
     * *TMO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tmoususd"] = "tmoususd";
    /**
     * ### Travis Perkins PLC
     * *TPK.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tpkgbgbx"] = "tpkgbgbx";
    /**
     * ### T ROWE PRICE GROUP INC
     * *TROW.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["trowususd"] = "trowususd";
    /**
     * ### TRAVELERS COS INC/THE
     * *TRV.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["trvususd"] = "trvususd";
    /**
     * ### Turkish Lira vs Japanese Yen
     * *TRY/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2010-05-09**
     * `m1` | **2010-05-09**
     * `m30` | **2010-05-09**
     * `h1` | **2010-05-09**
     * `d1` | **2010-01-01**
     * `mn1` | **2010-01-01**
     */
    Instrument["tryjpy"] = "tryjpy";
    /**
     * ### Tesco PLC
     * *TSCO.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tscogbgbx"] = "tscogbgbx";
    /**
     * ### TESLA MOTORS INC
     * *TSLA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["tslaususd"] = "tslaususd";
    /**
     * ### Taiwan Semiconductor Manufacturing Company Limited
     * *TSM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["tsmususd"] = "tsmususd";
    /**
     * ### TYSON FOODS INC-CL A
     * *TSN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["tsnususd"] = "tsnususd";
    /**
     * ### TUI AG
     * *TUI1.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-15**
     * `m1` | **2015-04-15**
     * `m30` | **2015-04-15**
     * `h1` | **2015-04-15**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["tui1deeur"] = "tui1deeur";
    /**
     * ### TWITTER INC
     * *TWTR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["twtrususd"] = "twtrususd";
    /**
     * ### TEXAS INSTRUMENTS INC
     * *TXN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["txnususd"] = "txnususd";
    /**
     * ### UCB SA
     * *UCB.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ucbbeeur"] = "ucbbeeur";
    /**
     * ### Peugeot SA
     * *UG.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ugfreur"] = "ugfreur";
    /**
     * ### UK Long Gilt
     * *UKGILT.TR/GBP*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-26**
     * `m1` | **2017-12-26**
     * `m30` | **2017-12-26**
     * `h1` | **2017-12-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ukgilttrgbp"] = "ukgilttrgbp";
    /**
     * ### ULTA SALON COSMETICS &amp; FRAGR
     * *ULTA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ultaususd"] = "ultaususd";
    /**
     * ### Unilever PLC
     * *ULVR.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["ulvrgbgbx"] = "ulvrgbgbx";
    /**
     * ### Umicore SA
     * *UMI.BE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["umibeeur"] = "umibeeur";
    /**
     * ### Unilever NV
     * *UNA.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["unanleur"] = "unanleur";
    /**
     * ### UNITEDHEALTH GROUP INC
     * *UNH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-02**
     * `m1` | **2017-11-02**
     * `m30` | **2017-11-02**
     * `h1` | **2017-11-02**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["unhususd"] = "unhususd";
    /**
     * ### UNION PACIFIC CORP
     * *UNP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["unpususd"] = "unpususd";
    /**
     * ### UNITED PARCEL SERVICE-CL B
     * *UPS.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["upsususd"] = "upsususd";
    /**
     * ### US BANCORP
     * *USB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["usbususd"] = "usbususd";
    /**
     * ### US Dollar vs Canadian Dollar
     * *USD/CAD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-03**
     * `m1` | **2003-08-03**
     * `m30` | **2003-08-03**
     * `h1` | **2003-08-03**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["usdcad"] = "usdcad";
    /**
     * ### US Dollar vs Swiss Franc
     * *USD/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-05-04**
     * `m1` | **2003-05-04**
     * `m30` | **2003-05-04**
     * `h1` | **2003-05-04**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["usdchf"] = "usdchf";
    /**
     * ### US Dollar vs Offshore Chinese Renminbi
     * *USD/CNH*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2012-06-27**
     * `m1` | **2012-06-27**
     * `m30` | **2012-06-27**
     * `h1` | **2012-06-27**
     * `d1` | **2012-01-01**
     * `mn1` | **2012-01-01**
     */
    Instrument["usdcnh"] = "usdcnh";
    /**
     * ### US Dollar vs Czech Koruna
     * *USD/CZK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-01-03**
     * `m1` | **2016-01-03**
     * `m30` | **2016-01-03**
     * `h1` | **2016-01-03**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["usdczk"] = "usdczk";
    /**
     * ### US Dollar vs Danish Krone
     * *USD/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-04**
     * `m1` | **2003-08-04**
     * `m30` | **2003-08-04**
     * `h1` | **2003-08-04**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["usddkk"] = "usddkk";
    /**
     * ### US Dollar vs Hong Kong Dollar
     * *USD/HKD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["usdhkd"] = "usdhkd";
    /**
     * ### US Dollar vs Hungarian Forint
     * *USD/HUF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1998-01-01**
     * `mn1` | **1998-01-01**
     */
    Instrument["usdhuf"] = "usdhuf";
    /**
     * ### US Dollar vs Israeli Shekel
     * *USD/ILS*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-12-15**
     * `m1` | **2016-12-15**
     * `m30` | **2016-12-15**
     * `h1` | **2016-12-15**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["usdils"] = "usdils";
    /**
     * ### US Dollar vs Japanese Yen
     * *USD/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-05-04**
     * `m1` | **2003-05-04**
     * `m30` | **2003-05-04**
     * `h1` | **2003-05-04**
     * `d1` | **1986-01-01**
     * `mn1` | **1986-01-01**
     */
    Instrument["usdjpy"] = "usdjpy";
    /**
     * ### US Dollar vs Mexican Peso
     * *USD/MXN*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1995-01-01**
     * `mn1` | **1995-01-01**
     */
    Instrument["usdmxn"] = "usdmxn";
    /**
     * ### US Dollar vs Norwegian Krone
     * *USD/NOK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-04**
     * `m1` | **2003-08-04**
     * `m30` | **2003-08-04**
     * `h1` | **2003-08-04**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["usdnok"] = "usdnok";
    /**
     * ### US Dollar vs Polish Zloty
     * *USD/PLN*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["usdpln"] = "usdpln";
    /**
     * ### US Dollar vs Romanian Leu
     * *USD/RON*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-12-18**
     * `m1` | **2016-12-18**
     * `m30` | **2016-12-18**
     * `h1` | **2016-12-18**
     * `d1` | **2016-01-01**
     * `mn1` | **2016-01-01**
     */
    Instrument["usdron"] = "usdron";
    /**
     * ### US Dollar vs Russian Ruble
     * *USD/RUB*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1999-01-01**
     * `mn1` | **1999-01-01**
     */
    Instrument["usdrub"] = "usdrub";
    /**
     * ### US Dollar vs Swedish Krona
     * *USD/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2003-08-04**
     * `m1` | **2003-08-04**
     * `m30` | **2003-08-04**
     * `h1` | **2003-08-04**
     * `d1` | **1991-01-01**
     * `mn1` | **1991-01-01**
     */
    Instrument["usdsek"] = "usdsek";
    /**
     * ### US Dollar vs Singapore Dollar
     * *USD/SGD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2004-11-16**
     * `m1` | **2004-11-16**
     * `m30` | **2004-11-16**
     * `h1` | **2004-11-16**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["usdsgd"] = "usdsgd";
    /**
     * ### US Dollar vs Thai Baht
     * *USD/THB*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-02-13**
     * `m1` | **2017-02-13**
     * `m30` | **2017-02-13**
     * `h1` | **2017-02-13**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["usdthb"] = "usdthb";
    /**
     * ### US Dollar vs Turkish Lira
     * *USD/TRY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2007-03-13**
     * `m1` | **2007-03-13**
     * `m30` | **2007-03-13**
     * `h1` | **2007-03-13**
     * `d1` | **1998-01-01**
     * `mn1` | **1998-01-01**
     */
    Instrument["usdtry"] = "usdtry";
    /**
     * ### US Dollar vs South African Rand
     * *USD/ZAR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **1997-10-13**
     * `m1` | **1997-10-13**
     * `m30` | **1997-10-13**
     * `h1` | **1997-10-13**
     * `d1` | **1990-01-01**
     * `mn1` | **1990-01-01**
     */
    Instrument["usdzar"] = "usdzar";
    /**
     * ### United States Oil
     * *USO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["usoususd"] = "usoususd";
    /**
     * ### UNITED TECHNOLOGIES CORP
     * *UTX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["utxususd"] = "utxususd";
    /**
     * ### United Utilities Group PLC
     * *UU.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["uugbgbx"] = "uugbgbx";
    /**
     * ### VISA INC-CLASS A SHARES
     * *V.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vususd"] = "vususd";
    /**
     * ### Vale S.A.
     * *VALE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["valeususd"] = "valeususd";
    /**
     * ### Vanguard FTSE Developed Markets ETF
     * *VEA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["veaususd"] = "veaususd";
    /**
     * ### VF CORP
     * *VFC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["vfcususd"] = "vfcususd";
    /**
     * ### Vanguard FTSE Europe ETF
     * *VGK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["vgkususd"] = "vgkususd";
    /**
     * ### VIACOM INC-CLASS B
     * *VIAB.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["viabususd"] = "viabususd";
    /**
     * ### Veolia Environnement SA
     * *VIE.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["viefreur"] = "viefreur";
    /**
     * ### Vivendi SA
     * *VIV.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vivfreur"] = "vivfreur";
    /**
     * ### Vallourec SA
     * *VK.FR/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-08-05**
     * `m1` | **2016-08-05**
     * `m30` | **2016-08-05**
     * `h1` | **2016-08-05**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vkfreur"] = "vkfreur";
    /**
     * ### VALERO ENERGY CORP
     * *VLO.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vloususd"] = "vloususd";
    /**
     * ### VULCAN MATERIALS CO
     * *VMC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["vmcususd"] = "vmcususd";
    /**
     * ### Vonovia SE
     * *VNA.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-14**
     * `m1` | **2015-04-14**
     * `m30` | **2015-04-14**
     * `h1` | **2015-04-14**
     * `d1` | **2015-01-01**
     * `mn1` | **2015-01-01**
     */
    Instrument["vnadeeur"] = "vnadeeur";
    /**
     * ### Vanguard REIT ETF
     * *VNQ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vnqususd"] = "vnqususd";
    /**
     * ### Vodafone Group PLC
     * *VOD.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-07**
     * `m1` | **2016-07-07**
     * `m30` | **2016-07-07**
     * `h1` | **2016-07-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vodgbgbx"] = "vodgbgbx";
    /**
     * ### Voestalpine AG
     * *VOE.AT/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-04**
     * `m1` | **2016-11-04**
     * `m30` | **2016-11-04**
     * `h1` | **2016-11-04**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["voeateur"] = "voeateur";
    /**
     * ### Volvo AB
     * *VOLVB.SE/SEK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["volvbsesek"] = "volvbsesek";
    /**
     * ### Volkswagen AG
     * *VOW3.DE/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-04-14**
     * `m1` | **2015-04-14**
     * `m30` | **2015-04-14**
     * `h1` | **2015-04-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vow3deeur"] = "vow3deeur";
    /**
     * ### Koninklijke Vopak NV
     * *VPK.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vpknleur"] = "vpknleur";
    /**
     * ### VERTEX PHARMACEUTICALS INC
     * *VRTX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vrtxususd"] = "vrtxususd";
    /**
     * ### Vestas Wind Systems A/S
     * *VWS.DK/DKK*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-07**
     * `m1` | **2016-11-07**
     * `m30` | **2016-11-07**
     * `h1` | **2016-11-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["vwsdkdkk"] = "vwsdkdkk";
    /**
     * ### iPath S&amp;P 500 VIX ST Futures ETN
     * *VXX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vxxususd"] = "vxxususd";
    /**
     * ### VERIZON COMMUNICATIONS INC
     * *VZ.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["vzususd"] = "vzususd";
    /**
     * ### WALGREENS BOOTS ALLIANCE INC
     * *WBA.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["wbaususd"] = "wbaususd";
    /**
     * ### WESTERN DIGITAL CORP
     * *WDC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["wdcususd"] = "wdcususd";
    /**
     * ### Weir Group PLC/The
     * *WEIR.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["weirgbgbx"] = "weirgbgbx";
    /**
     * ### WELLS FARGO &amp; CO
     * *WFC.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["wfcususd"] = "wfcususd";
    /**
     * ### WHIRLPOOL CORP
     * *WHR.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["whrususd"] = "whrususd";
    /**
     * ### Wolters Kluwer NV
     * *WKL.NL/EUR*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-11-14**
     * `m1` | **2016-11-14**
     * `m30` | **2016-11-14**
     * `h1` | **2016-11-14**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["wklnleur"] = "wklnleur";
    /**
     * ### WAL-MART STORES INC
     * *WMT.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["wmtususd"] = "wmtususd";
    /**
     * ### Wolseley PLC
     * *WOS.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["wosgbgbx"] = "wosgbgbx";
    /**
     * ### WPP PLC
     * *WPP.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-08**
     * `m1` | **2016-07-08**
     * `m30` | **2016-07-08**
     * `h1` | **2016-07-08**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["wppgbgbx"] = "wppgbgbx";
    /**
     * ### Whitbread PLC
     * *WTB.GB/GBX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2016-07-06**
     * `m1` | **2016-07-06**
     * `m30` | **2016-07-06**
     * `h1` | **2016-07-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["wtbgbgbx"] = "wtbgbgbx";
    /**
     * ### WYNN RESORTS LTD
     * *WYNN.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["wynnususd"] = "wynnususd";
    /**
     * ### UNITED STATES STEEL CORP
     * *X.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xususd"] = "xususd";
    /**
     * ### Spot silver
     * *XAG/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **1997-08-13**
     * `m1` | **1997-08-13**
     * `m30` | **1997-08-13**
     * `h1` | **1997-08-13**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["xagusd"] = "xagusd";
    /**
     * ### Spot gold
     * *XAU/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **1999-09-01**
     * `m1` | **1999-09-01**
     * `m30` | **1999-09-01**
     * `h1` | **1999-09-01**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["xauusd"] = "xauusd";
    /**
     * ### Energy Select Sector SPDR Fund
     * *XLE.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xleususd"] = "xleususd";
    /**
     * ### Financial Select Sector SPDR Fund
     * *XLF.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xlfususd"] = "xlfususd";
    /**
     * ### Industrial Select Sector SPDR Fund
     * *XLI.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xliususd"] = "xliususd";
    /**
     * ### Technology Select Sector SPDR Fund
     * *XLK.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xlkususd"] = "xlkususd";
    /**
     * ### XILINX INC
     * *XLNX.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["xlnxususd"] = "xlnxususd";
    /**
     * ### Consumer Staples Select Sector SPDR Fund
     * *XLP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-23**
     * `m1` | **2017-01-23**
     * `m30` | **2017-01-23**
     * `h1` | **2017-01-23**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xlpususd"] = "xlpususd";
    /**
     * ### Utilities Select Sector SPDR Fund
     * *XLU.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xluususd"] = "xluususd";
    /**
     * ### Health Care Select Sector SPDR Fund
     * *XLV.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xlvususd"] = "xlvususd";
    /**
     * ### Consumer Discretionary Select Sector SPDR Fund
     * *XLY.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-11-15**
     * `m1` | **2017-11-15**
     * `m30` | **2017-11-15**
     * `h1` | **2017-11-15**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xlyususd"] = "xlyususd";
    /**
     * ### EXXON MOBIL CORP
     * *XOM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-19**
     * `m1` | **2017-01-19**
     * `m30` | **2017-01-19**
     * `h1` | **2017-01-19**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xomususd"] = "xomususd";
    /**
     * ### SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF
     * *XOP.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-01-26**
     * `m1` | **2017-01-26**
     * `m30` | **2017-01-26**
     * `h1` | **2017-01-26**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["xopususd"] = "xopususd";
    /**
     * ### YUM! BRANDS INC
     * *YUM.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["yumususd"] = "yumususd";
    /**
     * ### South African Rand vs Japanese Yen
     * *ZAR/JPY*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **1999-03-03**
     * `m1` | **1999-03-03**
     * `m30` | **1999-03-03**
     * `h1` | **1999-03-03**
     * `d1` | **1997-01-01**
     * `mn1` | **1997-01-01**
     */
    Instrument["zarjpy"] = "zarjpy";
    /**
     * ### ZIMMER BIOMET HOLDINGS INC
     * *ZBH.US/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-02-01**
     * `m1` | **2018-02-01**
     * `m30` | **2018-02-01**
     * `h1` | **2018-02-01**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["zbhususd"] = "zbhususd";
    /**
     * ### ABB Ltd
     * *ABBN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["abbnchchf"] = "abbnchchf";
    /**
     * ### Adecco SA
     * *ADEN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["adenchchf"] = "adenchchf";
    /**
     * ### Julius Baer Group Ltd
     * *BAER.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["baerchchf"] = "baerchchf";
    /**
     * ### Clariant AG
     * *CLN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["clnchchf"] = "clnchchf";
    /**
     * ### Credit Suisse Group AG
     * *CSGN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["csgnchchf"] = "csgnchchf";
    /**
     * ### Givaudan SA
     * *GIVN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["givnchchf"] = "givnchchf";
    /**
     * ### Kuehne + Nagel International AG
     * *KNIN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-17**
     * `m1` | **2015-06-17**
     * `m30` | **2015-06-17**
     * `h1` | **2015-06-17**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["kninchchf"] = "kninchchf";
    /**
     * ### Lafarge Holcim Ltd
     * *LHN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-17**
     * `m1` | **2015-06-17**
     * `m30` | **2015-06-17**
     * `h1` | **2015-06-17**
     * `d1` | **2015-01-01**
     * `mn1` | **2015-01-01**
     */
    Instrument["lhnchchf"] = "lhnchchf";
    /**
     * ### Lonza Group AG
     * *LONN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["lonnchchf"] = "lonnchchf";
    /**
     * ### Nestle SA
     * *NESN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["nesnchchf"] = "nesnchchf";
    /**
     * ### Novartis AG
     * *NOVN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-16**
     * `m1` | **2015-06-16**
     * `m30` | **2015-06-16**
     * `h1` | **2015-06-16**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["novnchchf"] = "novnchchf";
    /**
     * ### Roche Holding AG
     * *ROG.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-07-03**
     * `m1` | **2015-07-03**
     * `m30` | **2015-07-03**
     * `h1` | **2015-07-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["rogchchf"] = "rogchchf";
    /**
     * ### Swisscom AG
     * *SCMN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-07-03**
     * `m1` | **2015-07-03**
     * `m30` | **2015-07-03**
     * `h1` | **2015-07-03**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["scmnchchf"] = "scmnchchf";
    /**
     * ### SGS SA
     * *SGSN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-06**
     * `m1` | **2015-08-06**
     * `m30` | **2015-08-06**
     * `h1` | **2015-08-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["sgsnchchf"] = "sgsnchchf";
    /**
     * ### Swiss Life Holding AG
     * *SLHN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-06**
     * `m1` | **2015-08-06**
     * `m30` | **2015-08-06**
     * `h1` | **2015-08-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["slhnchchf"] = "slhnchchf";
    /**
     * ### Sonova Holding AG
     * *SOON.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-07**
     * `m1` | **2015-08-07**
     * `m30` | **2015-08-07**
     * `h1` | **2015-08-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["soonchchf"] = "soonchchf";
    /**
     * ### Soybean
     * *SOYBEAN.CMD/USX*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2017-12-01**
     * `m1` | **2017-12-01**
     * `m30` | **2017-12-01**
     * `h1` | **2017-12-01**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["soybeancmdusx"] = "soybeancmdusx";
    /**
     * ### Swiss Re AG
     * *SREN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-06**
     * `m1` | **2015-08-06**
     * `m30` | **2015-08-06**
     * `h1` | **2015-08-06**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["srenchchf"] = "srenchchf";
    /**
     * ### UBS Group AG
     * *UBSG.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-06-15**
     * `m1` | **2015-06-15**
     * `m30` | **2015-06-15**
     * `h1` | **2015-06-15**
     * `d1` | **2014-01-01**
     * `mn1` | **2014-01-01**
     */
    Instrument["ubsgchchf"] = "ubsgchchf";
    /**
     * ### Swatch Group AG/The
     * *UHR.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-07**
     * `m1` | **2015-08-07**
     * `m30` | **2015-08-07**
     * `h1` | **2015-08-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["uhrchchf"] = "uhrchchf";
    /**
     * ### US Small Cap 2000
     * *USSC2000.IDX/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-08-08**
     * `m1` | **2018-08-08**
     * `m30` | **2018-08-08**
     * `h1` | **2018-08-08**
     * `d1` | **2018-01-01**
     * `mn1` | **2018-01-01**
     */
    Instrument["ussc2000idxusd"] = "ussc2000idxusd";
    /**
     * ### US T-Bond
     * *USTBOND.TR/USD*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2018-01-04**
     * `m1` | **2018-01-04**
     * `m30` | **2018-01-04**
     * `h1` | **2018-01-04**
     * `d1` | **2017-01-01**
     * `mn1` | **2017-01-01**
     */
    Instrument["ustbondtrusd"] = "ustbondtrusd";
    /**
     * ### Zurich Insurance Group AG
     * *ZURN.CH/CHF*
     *
     * Timeframe | Start date
     * --- | ---
     * `tick` | **2015-08-07**
     * `m1` | **2015-08-07**
     * `m30` | **2015-08-07**
     * `h1` | **2015-08-07**
     * `d1` | **2011-01-01**
     * `mn1` | **2011-01-01**
     */
    Instrument["zurnchchf"] = "zurnchchf";
})(exports.Instrument || (exports.Instrument = {}));

(function (Timeframe) {
    /**
     * Every single price change. No aggregation of OHLC price data
     */
    Timeframe["tick"] = "tick";
    /**
     *  minutely `(1 minute)` aggregation of OHLC price data
     */
    Timeframe["m1"] = "m1";
    /**
     *  15-minute `(15 minutes)` aggregation of OHLC price data
     */
    Timeframe["m15"] = "m15";
    /**
     *  half-hour `(30 minutes)` aggregation of OHLC price data
     */
    Timeframe["m30"] = "m30";
    /**
     *  hourly `(1 hour)` aggregation of OHLC price data
     */
    Timeframe["h1"] = "h1";
    /**
     *  daily `(1 day)` aggregation of OHLC price data
     */
    Timeframe["d1"] = "d1";
    /**
     *  monthly `(1 month)` aggregation of OHLC price data
     */
    Timeframe["mn1"] = "mn1";
})(exports.Timeframe || (exports.Timeframe = {}));

(function (Price) {
    /**
     * A `bid` is an offer made by an investor, trader, or dealer in an effort to buy a security, commodity, or currency.
     */
    Price["bid"] = "bid";
    /**
     * The `ask` is the price a seller is willing to accept for a security, commodity, or currency, which is often referred to as the offer price
     */
    Price["ask"] = "ask";
})(exports.Price || (exports.Price = {}));

(function (Format) {
    /**
     * Data will be returned in a shape of array of arrays of numbers
     * ***
     * `m1`, `m30`, `h1`, `d1`, `mn1`:
     * ```
     * // t-stamp open  high  low   close volume
     * [[1000000, 1.01, 1.02, 1.03, 1.04, 1111],
     * [20000000, 2.01, 2.02, 2.03, 2.04, 2222],
     * [30000000, 3.01, 3.02, 3.03, 3.04, 3333]]
     * ```
     * ***
     * `tick`:
     * ```
     * // t-stamp ask   bid   askV. bidV.
     * [[1000000, 1.01, 1.02, 1111, 9999],
     * [20000000, 2.01, 2.02, 2222, 8888],
     * [30000000, 3.01, 3.02, 3333, 7777]]
     * ```
     */
    Format["array"] = "array";
    /**
     * Data will be returned as **JSON**
     * ***
     * `m1`, `m30`, `h1`, `d1`, `mn1`:
     * ```
     * {
     *   timestamp: 1000000000000,
     *   open: 1.00001,
     *   high: 1.00002,
     *   low: 1.00003,
     *   close: 1.00004,
     *   volume: 1111
     * }
     * ```
     *  ***
     * `tick`:
     * ```
     * {
     *  timestamp: 1000000000000,
     *  askPrice: 1.00001,
     *  bidPrice: 1.00002,
     *  askVolume: 1111,
     *  bidVolume: 9999
     * }
     * ```
     */
    Format["json"] = "json";
    /**
     * Data will be returned as a **CSV** string
     * ***
     * `m1`, `m30`, `h1`, `d1`, `mn1`:
     * ```
     * `
     * timestamp,open,high,low,close,volume
     * 10000000,1.01,1.02,1.03,1.04,1111,
     * 20000000,2.01,2.02,2.03,2.04,2222,
     * 30000000,3.01,3.02,3.03,3.04,3333
     * `
     * ```
     * ***
     * `tick`:
     * ```
     * `
     * timestamp,askPrice,bidPrice,askVolume,bidVolume
     * 10000000,1.01,1.02,1111,9999
     * 20000000,2.01,2.02,2222,8888
     * 30000000,3.01,3.02,3333,7777
     * `
     * ```
     */
    Format["csv"] = "csv";
})(exports.Format || (exports.Format = {}));

function getUTCDateFromString(date) {
    const match = date.match(/^(\d{4})(?:-|\.)(\d{2})(?:-|\.)(\d{2})(?:T| )?(\d{2})?:?(\d{2})?:?(?:\d{2})?:?(?:.\d{3}Z)?$/);
    if (!match) {
        return false;
    }
    const [_, year, month, day, hour, minute] = match;
    const utcIsoString = `${year}-${month}-${day}T${hour || '00'}:${minute || '00'}:00.000Z`;
    const parsedDate = new Date(utcIsoString);
    const isValid = !isNaN(+parsedDate) && parsedDate.toISOString() === utcIsoString;
    return isValid ? parsedDate : false;
}
function getYMDH(date) {
    const [year, month, day, hours] = [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours()
    ];
    return [year, month, day, hours];
}
function getStartOfUtc(date, period, offset = 0) {
    const [year, month, day, hours] = getYMDH(date);
    let startOfUtc = new Date();
    if (period === 'hour') {
        startOfUtc = new Date(Date.UTC(year, month, day, hours + offset));
    }
    else if (period === 'day') {
        startOfUtc = new Date(Date.UTC(year, month, day + offset));
    }
    else if (period === 'month') {
        startOfUtc = new Date(Date.UTC(year, month + offset));
    }
    else if (period === 'year') {
        startOfUtc = new Date(Date.UTC(year + offset, 0));
    }
    return startOfUtc;
}
function getIsCurrentObj(date) {
    const [year, month, day, hours] = getYMDH(date);
    const [currentYear, currentMonth, currentDay, currentHours] = getYMDH(new Date());
    const isCurrentYear = year === currentYear;
    const isCurrentMonth = isCurrentYear && month === currentMonth;
    const isCurrentDay = isCurrentMonth && day === currentDay;
    const isCurrentHour = isCurrentDay && hours === currentHours;
    const obj = {
        year: isCurrentYear,
        month: isCurrentMonth,
        day: isCurrentDay,
        hour: isCurrentHour
    };
    return obj;
}
function getDateFromUrl(url) {
    const [, year, month, day, hour] = (url.match(/(\d{4})\/(\d{2})?\/?(\d{2})?\/?(\d{2})?/) || []).map(n => Number(n) || 0);
    const utcDate = new Date(Date.UTC(year, month, day || 1, hour));
    return utcDate;
}

const schema = {
    instrument: { type: 'string', enum: Object.keys(exports.Instrument), required: true },
    dates: {
        type: 'object',
        required: true,
        props: {
            from: [{ type: 'dateString', required: true }],
            to: [{ type: 'dateString', required: true }]
        }
    },
    timeframe: {
        type: 'string',
        enum: Object.keys(exports.Timeframe),
        optional: true,
        default: exports.Timeframe.d1
    },
    priceType: {
        type: 'string',
        enum: Object.keys(exports.Price),
        optional: true,
        default: exports.Price.bid
    },
    utcOffset: { type: 'number', integer: true, optional: true, default: 0 },
    volumes: { type: 'boolean', optional: true, default: true },
    ignoreFlats: { type: 'boolean', optional: true, default: true },
    format: {
        type: 'string',
        enum: Object.keys(exports.Format),
        optional: true,
        default: exports.Format.array
    }
};
const INVALID_DATE_KEY = 'invalidDateString';
const validator = new Validator({
    messages: {
        [INVALID_DATE_KEY]: "The '{field}' field must be a valid date string! Actual: {actual}"
    }
});
validator.add('dateString', (value) => {
    if (!getUTCDateFromString(value)) {
        return validator.makeError(INVALID_DATE_KEY, null, value);
    }
    return true;
});
const defaultSchemaValidationFn = validator.compile(schema);

function validateConfig(config, validationFn = defaultSchemaValidationFn) {
    const validationResult = validationFn(config);
    const isValid = validationResult === true;
    return {
        isValid,
        validationErrors: !isValid && Array.isArray(validationResult) ? validationResult.map(item => item.message) : []
    };
}

const instrumentMetaData = {
    aususd: {
        name: 'A.US/USD',
        description: 'AGILENT TECHNOLOGIES INC',
        minStartDate: '2017-05-25',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    aaususd: {
        name: 'AA.US/USD',
        description: 'ALCOA INC',
        minStartDate: '2018-01-30',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    aabaususd: {
        name: 'AABA.US/USD',
        description: 'ALTABA INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    aalgbgbx: {
        name: 'AAL.GB/GBX',
        description: 'Anglo American PLC',
        minStartDate: '2016-08-01',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    aalususd: {
        name: 'AAL.US/USD',
        description: 'AMERICAN AIRLINES GROUP INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    aaplususd: {
        name: 'AAPL.US/USD',
        description: 'APPLE INC',
        minStartDate: '2017-01-17',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    abbsesek: {
        name: 'ABB.SE/SEK',
        description: 'ABB Ltd',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    abcususd: {
        name: 'ABC.US/USD',
        description: 'AMERISOURCEBERGEN CORP',
        minStartDate: '2018-01-30',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    abevususd: {
        name: 'ABEV.US/USD',
        description: 'Ambev S.A.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    abfgbgbx: {
        name: 'ABF.GB/GBX',
        description: 'Associated British Foods PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    abibeeur: {
        name: 'ABI.BE/EUR',
        description: 'Anheuser-Busch InBev NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    abtususd: {
        name: 'ABT.US/USD',
        description: 'ABBOTT LABORATORIES',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    acfreur: {
        name: 'AC.FR/EUR',
        description: 'Accor SA',
        minStartDate: '2016-08-11',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    acafreur: {
        name: 'ACA.FR/EUR',
        description: 'Credit Agricole SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    acseseur: {
        name: 'ACS.ES/EUR',
        description: 'ACS Actividades de Construccion y Servicios SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    acxeseur: {
        name: 'ACX.ES/EUR',
        description: 'Acerinox SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    adbeususd: {
        name: 'ADBE.US/USD',
        description: 'ADOBE SYSTEMS INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    adiususd: {
        name: 'ADI.US/USD',
        description: 'ANALOG DEVICES INC',
        minStartDate: '2018-01-30',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    admgbgbx: {
        name: 'ADM.GB/GBX',
        description: 'Admiral Group PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    adpususd: {
        name: 'ADP.US/USD',
        description: 'AUTOMATIC DATA PROCESSING',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    adsdeeur: {
        name: 'ADS.DE/EUR',
        description: 'Adidas AG',
        minStartDate: '2015-03-13',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    adskususd: {
        name: 'ADSK.US/USD',
        description: 'AUTODESK INC',
        minStartDate: '2018-01-30',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    aenaeseur: {
        name: 'AENA.ES/EUR',
        description: 'Aena SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2015-01-01',
        group: 'Spain'
    },
    aetususd: {
        name: 'AET.US/USD',
        description: 'AETNA INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    affreur: {
        name: 'AF.FR/EUR',
        description: 'Air France-KLM',
        minStartDate: '2016-09-27',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    agkgbgbx: {
        name: 'AGK.GB/GBX',
        description: 'Aggreko PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    agnnleur: {
        name: 'AGN.NL/EUR',
        description: 'Aegon NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    agsbeeur: {
        name: 'AGS.BE/EUR',
        description: 'Ageas',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    ahnleur: {
        name: 'AH.NL/EUR',
        description: 'Koninklijke Ahold Delhaize NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    ahtgbgbx: {
        name: 'AHT.GB/GBX',
        description: 'Ashtead Group PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    aifreur: {
        name: 'AI.FR/EUR',
        description: 'Air Liquide SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    aigususd: {
        name: 'AIG.US/USD',
        description: 'AMERICAN INTERNATIONAL GROUP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    airfreur: {
        name: 'AIR.FR/EUR',
        description: 'Airbus Group SE',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2014-01-01',
        group: 'France'
    },
    akzanleur: {
        name: 'AKZA.NL/EUR',
        description: 'Akzo Nobel NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    alfasesek: {
        name: 'ALFA.SE/SEK',
        description: 'Alfa Laval AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    allususd: {
        name: 'ALL.US/USD',
        description: 'ALLSTATE CORP',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    alofreur: {
        name: 'ALO.FR/EUR',
        description: 'Alstom SA',
        minStartDate: '2016-09-27',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    alvdeeur: {
        name: 'ALV.DE/EUR',
        description: 'Allianz SE',
        minStartDate: '2015-04-09',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    alxnususd: {
        name: 'ALXN.US/USD',
        description: 'ALEXION PHARMACEUTICALS INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    amatususd: {
        name: 'AMAT.US/USD',
        description: 'APPLIED MATERIALS INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    amdususd: {
        name: 'AMD.US/USD',
        description: 'ADVANCED MICRO DEVICES',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    amgnususd: {
        name: 'AMGN.US/USD',
        description: 'AMGEN INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    amseseur: {
        name: 'AMS.ES/EUR',
        description: 'Amadeus IT Holding SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    amtususd: {
        name: 'AMT.US/USD',
        description: 'AMERICAN TOWER CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    amznususd: {
        name: 'AMZN.US/USD',
        description: 'AMAZON.COM INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    antmususd: {
        name: 'ANTM.US/USD',
        description: 'ANTHEM INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    antogbgbx: {
        name: 'ANTO.GB/GBX',
        description: 'Antofagasta PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    apaususd: {
        name: 'APA.US/USD',
        description: 'APACHE CORP',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    apcususd: {
        name: 'APC.US/USD',
        description: 'ANADARKO PETROLEUM CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    apdususd: {
        name: 'APD.US/USD',
        description: 'AIR PRODUCTS &amp; CHEMICALS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    asmlnleur: {
        name: 'ASML.NL/EUR',
        description: 'ASML Holding NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    atcoasesek: {
        name: 'ATCOA.SE/SEK',
        description: 'Atlas Copco AB',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    atviususd: {
        name: 'ATVI.US/USD',
        description: 'ACTIVISION BLIZZARD INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    audcad: {
        name: 'AUD/CAD',
        description: 'Australian Dollar vs Canadian Dollar',
        minStartDate: '2005-12-26',
        decimalFactor: 100000,
        minStartDateDaily: '1992-01-01',
        group: 'FX_CROSSES'
    },
    audchf: {
        name: 'AUD/CHF',
        description: 'Australian Dollar vs Swiss Franc',
        minStartDate: '2005-12-26',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    audjpy: {
        name: 'AUD/JPY',
        description: 'Australian Dollar vs Japanese Yen',
        minStartDate: '2003-11-29',
        decimalFactor: 1000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    audnzd: {
        name: 'AUD/NZD',
        description: 'Australian Dollar vs New Zealand Dollar',
        minStartDate: '2006-12-08',
        decimalFactor: 100000,
        minStartDateDaily: '1993-01-01',
        group: 'FX_CROSSES'
    },
    audsgd: {
        name: 'AUD/SGD',
        description: 'Australian Dollar vs Singapore Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    audusd: {
        name: 'AUD/USD',
        description: 'Australian Dollar vs US Dollar',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_MAJORS'
    },
    avgbgbx: {
        name: 'AV.GB/GBX',
        description: 'Aviva PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    avbususd: {
        name: 'AVB.US/USD',
        description: 'AVALONBAY COMMUNITIES INC',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    avgoususd: {
        name: 'AVGO.US/USD',
        description: 'Broadcom Limited',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    axpususd: {
        name: 'AXP.US/USD',
        description: 'AMERICAN EXPRESS CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    azngbgbx: {
        name: 'AZN.GB/GBX',
        description: 'AstraZeneca PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    aznususd: {
        name: 'AZN.US/USD',
        description: 'AstraZeneca PLC',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    azoususd: {
        name: 'AZO.US/USD',
        description: 'AUTOZONE INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bagbgbx: {
        name: 'BA.GB/GBX',
        description: 'BAE Systems PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    baususd: {
        name: 'BA.US/USD',
        description: 'Boeing Co',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    babgbgbx: {
        name: 'BAB.GB/GBX',
        description: 'Babcock International Group PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    babaususd: {
        name: 'BABA.US/USD',
        description: 'ALIBABA GROUP HOLDING-SP ADR',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bacususd: {
        name: 'BAC.US/USD',
        description: 'BANK OF AMERICA CORP',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    barcgbgbx: {
        name: 'BARC.GB/GBX',
        description: 'Barclays PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    basdeeur: {
        name: 'BAS.DE/EUR',
        description: 'BASF SE',
        minStartDate: '2015-04-22',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    batsgbgbx: {
        name: 'BATS.GB/GBX',
        description: 'British American Tobacco PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    bayndeeur: {
        name: 'BAYN.DE/EUR',
        description: 'Bayer AG',
        minStartDate: '2015-03-20',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    bbdususd: {
        name: 'BBD.US/USD',
        description: 'Banco Bradesco S.A.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bbtususd: {
        name: 'BBT.US/USD',
        description: 'BB&amp;T CORP',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    bbvaeseur: {
        name: 'BBVA.ES/EUR',
        description: 'Banco Bilbao Vizcaya Argentaria SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    bbyususd: {
        name: 'BBY.US/USD',
        description: 'BEST BUY CO INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bdxususd: {
        name: 'BDX.US/USD',
        description: 'BECTON DICKINSON AND CO',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    beideeur: {
        name: 'BEI.DE/EUR',
        description: 'Beiersdorf AG',
        minStartDate: '2015-04-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    belgbeeur: {
        name: 'BELG.BE/EUR',
        description: 'Proximus',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    biduususd: {
        name: 'BIDU.US/USD',
        description: 'BAIDU INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    biibususd: {
        name: 'BIIB.US/USD',
        description: 'BIOGEN INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bkususd: {
        name: 'BK.US/USD',
        description: 'BANK OF NEW YORK MELLON CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    blndgbgbx: {
        name: 'BLND.GB/GBX',
        description: 'British Land Co PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    bltgbgbx: {
        name: 'BLT.GB/GBX',
        description: 'BHP Billiton PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    bmwdeeur: {
        name: 'BMW.DE/EUR',
        description: 'Bayerische Motoren Werke AG',
        minStartDate: '2015-03-24',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    bmyususd: {
        name: 'BMY.US/USD',
        description: 'BRISTOL-MYERS SQUIBB CO',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bnfreur: {
        name: 'BN.FR/EUR',
        description: 'Danone SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    bnpfreur: {
        name: 'BNP.FR/EUR',
        description: 'BNP Paribas SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    bnzlgbgbx: {
        name: 'BNZL.GB/GBX',
        description: 'Bunzl PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    bossdeeur: {
        name: 'BOSS.DE/EUR',
        description: 'HUGO BOSS AG',
        minStartDate: '2015-04-09',
        decimalFactor: 1000,
        minStartDateDaily: '2012-01-01',
        group: 'Germany'
    },
    bpgbgbx: {
        name: 'BP.GB/GBX',
        description: 'BP PLC',
        minStartDate: '2016-09-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    bpususd: {
        name: 'BP.US/USD',
        description: 'BP p.l.c.',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    brbygbgbx: {
        name: 'BRBY.GB/GBX',
        description: 'Burberry Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    brkbususd: {
        name: 'BRKB.US/USD',
        description: 'BERKSHIRE HATHAWAY INC-CL B',
        minStartDate: '2017-11-06',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    bsxususd: {
        name: 'BSX.US/USD',
        description: 'BOSTON SCIENTIFIC CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    btgbgbx: {
        name: 'BT.GB/GBX',
        description: 'BT Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    btcusd: {
        name: 'BTC/USD',
        description: 'Bitcoin vs US Dollar',
        minStartDate: '2017-05-07',
        decimalFactor: 10,
        minStartDateDaily: '2017-01-01',
        group: 'VCCY'
    },
    bundtreur: {
        name: 'BUND.TR/EUR',
        description: 'Euro Bund',
        minStartDate: '2016-05-02',
        decimalFactor: 1000,
        minStartDateDaily: '2016-01-01',
        group: 'BND_CFD'
    },
    cususd: {
        name: 'C.US/USD',
        description: 'CITIGROUP INC',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cafreur: {
        name: 'CA.FR/EUR',
        description: 'Carrefour SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    cabkeseur: {
        name: 'CABK.ES/EUR',
        description: 'CaixaBank',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    cadchf: {
        name: 'CAD/CHF',
        description: 'Canadian Dollar vs Swiss Franc',
        minStartDate: '2005-12-26',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    cadhkd: {
        name: 'CAD/HKD',
        description: 'Canadian Dollar vs Hong Kong Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    cadjpy: {
        name: 'CAD/JPY',
        description: 'Canadian Dollar vs Japanese Yen',
        minStartDate: '2004-10-20',
        decimalFactor: 1000,
        minStartDateDaily: '1993-01-01',
        group: 'FX_CROSSES'
    },
    cagususd: {
        name: 'CAG.US/USD',
        description: 'CONAGRA FOODS INC',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    cahususd: {
        name: 'CAH.US/USD',
        description: 'CARDINAL HEALTH INC',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    capfreur: {
        name: 'CAP.FR/EUR',
        description: 'Cap Gemini SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    carlbdkdkk: {
        name: 'CARLB.DK/DKK',
        description: 'Carlsberg A/S',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    catususd: {
        name: 'CAT.US/USD',
        description: 'CATERPILLAR INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cbkdeeur: {
        name: 'CBK.DE/EUR',
        description: 'Commerzbank AG',
        minStartDate: '2015-03-26',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    cbsususd: {
        name: 'CBS.US/USD',
        description: 'CBS CORP-CLASS B NON VOTING',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    cclgbgbx: {
        name: 'CCL.GB/GBX',
        description: 'Carnival PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    celgususd: {
        name: 'CELG.US/USD',
        description: 'CELGENE CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cfususd: {
        name: 'CF.US/USD',
        description: 'CF INDUSTRIES HOLDINGS INC',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    chfjpy: {
        name: 'CHF/JPY',
        description: 'Swiss Franc vs Japanese Yen',
        minStartDate: '2003-08-03',
        decimalFactor: 1000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    chfsgd: {
        name: 'CHF/SGD',
        description: 'Swiss Franc vs Singapore Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1998-01-01',
        group: 'FX_CROSSES'
    },
    chiidxusd: {
        name: 'CHI.IDX/USD',
        description: 'China A50 Index',
        minStartDate: '2017-07-17',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'IDX_ASIA'
    },
    ciususd: {
        name: 'CI.US/USD',
        description: 'CIGNA CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    clususd: {
        name: 'CL.US/USD',
        description: 'COLGATE-PALMOLIVE CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cmcsaususd: {
        name: 'CMCSA.US/USD',
        description: 'COMCAST CORP-CLASS A',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cmeususd: {
        name: 'CME.US/USD',
        description: 'CME GROUP INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cmgususd: {
        name: 'CMG.US/USD',
        description: 'CHIPOTLE MEXICAN GRILL INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cmiususd: {
        name: 'CMI.US/USD',
        description: 'CUMMINS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    cnagbgbx: {
        name: 'CNA.GB/GBX',
        description: 'Centrica PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    cocoacmdusd: {
        name: 'COCOA.CMD/USD',
        description: 'NY Cocoa',
        minStartDate: '2017-10-20',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_AGRICULTURAL'
    },
    coffeecmdusx: {
        name: 'COFFEE.CMD/USX',
        description: 'Coffee Arabica',
        minStartDate: '2017-12-04',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_AGRICULTURAL'
    },
    colususd: {
        name: 'COL.US/USD',
        description: 'ROCKWELL COLLINS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    colobdkdkk: {
        name: 'COLOB.DK/DKK',
        description: 'Coloplast A/S',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    condeeur: {
        name: 'CON.DE/EUR',
        description: 'Continental AG',
        minStartDate: '2015-04-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    copususd: {
        name: 'COP.US/USD',
        description: 'CONOCOPHILLIPS',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    coppercmdusd: {
        name: 'COPPER.CMD/USD',
        description: 'High Grade Copper',
        minStartDate: '2012-03-01',
        decimalFactor: 10000,
        minStartDateDaily: '2012-01-01',
        group: 'CMD_METALS'
    },
    costususd: {
        name: 'COST.US/USD',
        description: 'COSTCO WHOLESALE CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cottoncmdusx: {
        name: 'COTTON.CMD/USX',
        description: 'Cotton',
        minStartDate: '2017-10-20',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_AGRICULTURAL'
    },
    cpggbgbx: {
        name: 'CPG.GB/GBX',
        description: 'Compass Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    cpigbgbx: {
        name: 'CPI.GB/GBX',
        description: 'Capita PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    crdagbgbx: {
        name: 'CRDA.GB/GBX',
        description: 'Croda International PLC',
        minStartDate: '2016-11-01',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    crhgbgbx: {
        name: 'CRH.GB/GBX',
        description: 'CRH PLC',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    crmususd: {
        name: 'CRM.US/USD',
        description: 'SALESFORCE.COM INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    csfreur: {
        name: 'CS.FR/EUR',
        description: 'AXA SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    csususd: {
        name: 'CS.US/USD',
        description: 'Credit Suisse Group AG',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cscoususd: {
        name: 'CSCO.US/USD',
        description: 'CISCO SYSTEMS INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    csxususd: {
        name: 'CSX.US/USD',
        description: 'CSX CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ctlususd: {
        name: 'CTL.US/USD',
        description: 'CENTURYLINK INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ctshususd: {
        name: 'CTSH.US/USD',
        description: 'COGNIZANT TECH SOLUTIONS-A',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cvsususd: {
        name: 'CVS.US/USD',
        description: 'CVS HEALTH CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    cvxususd: {
        name: 'CVX.US/USD',
        description: 'CHEVRON CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dususd: {
        name: 'D.US/USD',
        description: 'DOMINION RESOURCES INC/VA',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    daideeur: {
        name: 'DAI.DE/EUR',
        description: 'Daimler AG',
        minStartDate: '2015-03-27',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    dalususd: {
        name: 'DAL.US/USD',
        description: 'DELTA AIR LINES INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    danskedkdkk: {
        name: 'DANSKE.DK/DKK',
        description: 'Danske Bank A/S',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    db1deeur: {
        name: 'DB1.DE/EUR',
        description: 'Deutsche Boerse AG',
        minStartDate: '2015-04-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    dbkdeeur: {
        name: 'DBK.DE/EUR',
        description: 'Deutsche Bank AG',
        minStartDate: '2015-03-25',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    deususd: {
        name: 'DE.US/USD',
        description: 'DEERE &amp; CO',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dfsususd: {
        name: 'DFS.US/USD',
        description: 'DISCOVER FINANCIAL SERVICES',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    dgfreur: {
        name: 'DG.FR/EUR',
        description: 'Vinci SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    dgususd: {
        name: 'DG.US/USD',
        description: 'DOLLAR GENERAL CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dgegbgbx: {
        name: 'DGE.GB/GBX',
        description: 'Diageo PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    dhiususd: {
        name: 'DHI.US/USD',
        description: 'DR HORTON INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    dhrususd: {
        name: 'DHR.US/USD',
        description: 'DANAHER CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    diaeseur: {
        name: 'DIA.ES/EUR',
        description: 'Distribuidora Internacional de Alimentacion SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    diaususd: {
        name: 'DIA.US/USD',
        description: 'SPDR Dow Jones® Industrial Average ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    dieselcmdusd: {
        name: 'DIESEL.CMD/USD',
        description: 'Gas oil',
        minStartDate: '2017-10-20',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_ENERGY'
    },
    disususd: {
        name: 'DIS.US/USD',
        description: 'WALT DISNEY CO/THE',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dltrususd: {
        name: 'DLTR.US/USD',
        description: 'DOLLAR TREE INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dnbnonok: {
        name: 'DNB.NO/NOK',
        description: 'DNB ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    dollaridxusd: {
        name: 'DOLLAR.IDX/USD',
        description: 'US Dollar Index',
        minStartDate: '2017-12-01',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'IDX_AMERICA'
    },
    dpwdeeur: {
        name: 'DPW.DE/EUR',
        description: 'Deutsche Post AG',
        minStartDate: '2015-03-31',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    dsmnleur: {
        name: 'DSM.NL/EUR',
        description: 'Koninklijke DSM NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    dtedeeur: {
        name: 'DTE.DE/EUR',
        description: 'Deutsche Telekom AG',
        minStartDate: '2015-03-31',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    dukususd: {
        name: 'DUK.US/USD',
        description: 'DUKE ENERGY CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    dvaususd: {
        name: 'DVA.US/USD',
        description: 'DAVITA HEALTHCARE PARTNERS I',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    dvnususd: {
        name: 'DVN.US/USD',
        description: 'DEVON ENERGY CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    dvyususd: {
        name: 'DVY.US/USD',
        description: 'iShares Select Dividend ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    eaususd: {
        name: 'EA.US/USD',
        description: 'ELECTRONIC ARTS INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ebayususd: {
        name: 'EBAY.US/USD',
        description: 'EBAY INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ebsateur: {
        name: 'EBS.AT/EUR',
        description: 'Erste Group Bank AG',
        minStartDate: '2016-11-04',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Austria'
    },
    edffreur: {
        name: 'EDF.FR/EUR',
        description: 'Electricite de France SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    edppteur: {
        name: 'EDP.PT/EUR',
        description: 'EDP - Energias de Portugal SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Portugal'
    },
    eemususd: {
        name: 'EEM.US/USD',
        description: 'iShares MSCI Emerging Markets ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    efaususd: {
        name: 'EFA.US/USD',
        description: 'iShares MSCI EAFE ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    efxususd: {
        name: 'EFX.US/USD',
        description: 'EQUIFAX INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    eifreur: {
        name: 'EI.FR/EUR',
        description: 'Essilor International SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    eixususd: {
        name: 'EIX.US/USD',
        description: 'EDISON INTERNATIONAL',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    elususd: {
        name: 'EL.US/USD',
        description: 'ESTEE LAUDER COMPANIES-CL A',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    eleeseur: {
        name: 'ELE.ES/EUR',
        description: 'Endesa SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    eli1vfieur: {
        name: 'ELI1V.FI/EUR',
        description: 'Elisa OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    eluxbsesek: {
        name: 'ELUXB.SE/SEK',
        description: 'Electrolux AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    embususd: {
        name: 'EMB.US/USD',
        description: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    emrususd: {
        name: 'EMR.US/USD',
        description: 'EMERSON ELECTRIC CO',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    enfreur: {
        name: 'EN.FR/EUR',
        description: 'Bouygues SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    engeseur: {
        name: 'ENG.ES/EUR',
        description: 'Enagas SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    engifreur: {
        name: 'ENGI.FR/EUR',
        description: 'Engie',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2015-01-01',
        group: 'France'
    },
    eoandeeur: {
        name: 'EOAN.DE/EUR',
        description: 'E.ON SE',
        minStartDate: '2015-04-20',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    eogususd: {
        name: 'EOG.US/USD',
        description: 'EOG RESOURCES INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    eqtususd: {
        name: 'EQT.US/USD',
        description: 'EQT CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ericbsesek: {
        name: 'ERICB.SE/SEK',
        description: 'Telefonaktiebolaget LM Ericsson',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    esrxususd: {
        name: 'ESRX.US/USD',
        description: 'EXPRESS SCRIPTS HOLDING CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ethusd: {
        name: 'ETH/USD',
        description: 'Ether vs US Dollar',
        minStartDate: '2017-12-11',
        decimalFactor: 10,
        minStartDateDaily: '2017-01-01',
        group: 'VCCY'
    },
    euraud: {
        name: 'EUR/AUD',
        description: 'Euro vs Australian Dollar',
        minStartDate: '2005-10-02',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    eurcad: {
        name: 'EUR/CAD',
        description: 'Euro vs Canadian Dollar',
        minStartDate: '2004-10-20',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    eurchf: {
        name: 'EUR/CHF',
        description: 'Euro vs Swiss Franc',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    eurczk: {
        name: 'EUR/CZK',
        description: 'Euro vs Czech Koruna',
        minStartDate: '2016-01-03',
        decimalFactor: 10000,
        minStartDateDaily: '2016-01-01',
        group: 'FX_CROSSES'
    },
    eurdkk: {
        name: 'EUR/DKK',
        description: 'Euro vs Danish Krone',
        minStartDate: '2004-10-20',
        decimalFactor: 100000,
        minStartDateDaily: '1993-01-01',
        group: 'FX_CROSSES'
    },
    eurgbp: {
        name: 'EUR/GBP',
        description: 'Euro vs Pound Sterling',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1995-01-01',
        group: 'FX_CROSSES'
    },
    eurhkd: {
        name: 'EUR/HKD',
        description: 'Euro vs Hong Kong Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    eurhuf: {
        name: 'EUR/HUF',
        description: 'Euro vs Hungarian Forint',
        minStartDate: '2007-03-13',
        decimalFactor: 1000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    eurjpy: {
        name: 'EUR/JPY',
        description: 'Euro vs Japanese Yen',
        minStartDate: '2003-08-03',
        decimalFactor: 1000,
        minStartDateDaily: '1972-01-01',
        group: 'FX_CROSSES'
    },
    eurnok: {
        name: 'EUR/NOK',
        description: 'Euro vs Norwegian Krone',
        minStartDate: '2004-10-20',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    eurnzd: {
        name: 'EUR/NZD',
        description: 'Euro vs New Zealand Dollar',
        minStartDate: '2005-12-26',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    eurpln: {
        name: 'EUR/PLN',
        description: 'Euro vs Polish Zloty',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    eurrub: {
        name: 'EUR/RUB',
        description: 'Euro vs Russian Rouble',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    eursek: {
        name: 'EUR/SEK',
        description: 'Euro vs Swedish Krona',
        minStartDate: '2004-10-27',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    eursgd: {
        name: 'EUR/SGD',
        description: 'Euro vs Singapore Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1998-01-01',
        group: 'FX_CROSSES'
    },
    eurtry: {
        name: 'EUR/TRY',
        description: 'Euro vs Turkish Lira',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '2005-01-01',
        group: 'FX_CROSSES'
    },
    eurusd: {
        name: 'EUR/USD',
        description: 'Euro vs US Dollar',
        minStartDate: '2003-05-04',
        decimalFactor: 100000,
        minStartDateDaily: '1972-01-01',
        group: 'FX_MAJORS'
    },
    ewhususd: {
        name: 'EWH.US/USD',
        description: 'iShares MSCI Hong Kong ETF',
        minStartDate: '2017-11-06',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ewjususd: {
        name: 'EWJ.US/USD',
        description: 'iShares MSCI Japan ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ewwususd: {
        name: 'EWW.US/USD',
        description: 'iShares MSCI Mexico Capped',
        minStartDate: '2017-03-13',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ewzususd: {
        name: 'EWZ.US/USD',
        description: 'iShares MSCI Brazil Capped',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    excususd: {
        name: 'EXC.US/USD',
        description: 'EXELON CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    expeususd: {
        name: 'EXPE.US/USD',
        description: 'EXPEDIA INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    expngbgbx: {
        name: 'EXPN.GB/GBX',
        description: 'Experian PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    ezjgbgbx: {
        name: 'EZJ.GB/GBX',
        description: 'easyJet PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    ezuususd: {
        name: 'EZU.US/USD',
        description: 'iShares MSCI EMU ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    brentcmdusd: {
        name: 'BRENT.CMD/USD',
        description: 'US Brent Crude Oil',
        minStartDate: '2010-12-02',
        decimalFactor: 1000,
        minStartDateDaily: '2006-01-01',
        group: 'CMD_ENERGY'
    },
    fraidxeur: {
        name: 'FRA.IDX/EUR',
        description: 'France 40 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1987-01-01',
        group: 'IDX_EUROPE'
    },
    usa30idxusd: {
        name: 'USA30.IDX/USD',
        description: 'USA 30 Index',
        minStartDate: '2013-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2013-01-01',
        group: 'IDX_AMERICA'
    },
    deuidxeur: {
        name: 'DEU.IDX/EUR',
        description: 'Germany 30 Index',
        minStartDate: '2013-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2013-01-01',
        group: 'IDX_EUROPE'
    },
    eusidxeur: {
        name: 'EUS.IDX/EUR',
        description: 'Europe 50 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1998-01-01',
        group: 'IDX_EUROPE'
    },
    gbridxgbp: {
        name: 'GBR.IDX/GBP',
        description: 'UK 100 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1988-01-01',
        group: 'IDX_EUROPE'
    },
    hkgidxhkd: {
        name: 'HKG.IDX/HKD',
        description: 'Hong Kong 40 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1990-01-01',
        group: 'IDX_ASIA'
    },
    espidxeur: {
        name: 'ESP.IDX/EUR',
        description: 'Spain 35 Index',
        minStartDate: '2012-01-02',
        decimalFactor: 1000,
        minStartDateDaily: '1992-01-01',
        group: 'IDX_EUROPE'
    },
    lightcmdusd: {
        name: 'LIGHT.CMD/USD',
        description: 'US Light Crude Oil',
        minStartDate: '2011-09-23',
        decimalFactor: 1000,
        minStartDateDaily: '1983-01-01',
        group: 'CMD_ENERGY'
    },
    jpnidxjpy: {
        name: 'JPN.IDX/JPY',
        description: 'Japan 225',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1986-01-01',
        group: 'IDX_ASIA'
    },
    usatechidxusd: {
        name: 'USATECH.IDX/USD',
        description: 'USA 100 Technical Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1990-01-01',
        group: 'IDX_AMERICA'
    },
    usa500idxusd: {
        name: 'USA500.IDX/USD',
        description: 'USA 500 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1980-01-01',
        group: 'IDX_AMERICA'
    },
    cheidxchf: {
        name: 'CHE.IDX/CHF',
        description: 'Switzerland 20 Index',
        minStartDate: '2011-09-18',
        decimalFactor: 1000,
        minStartDateDaily: '1992-01-01',
        group: 'IDX_EUROPE'
    },
    ausidxaud: {
        name: 'AUS.IDX/AUD',
        description: 'Australia 200 Index',
        minStartDate: '2013-01-02',
        decimalFactor: 1000,
        minStartDateDaily: '1982-01-01',
        group: 'IDX_ASIA'
    },
    fususd: {
        name: 'F.US/USD',
        description: 'FORD MOTOR CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    fbususd: {
        name: 'FB.US/USD',
        description: 'FACEBOOK INC-A',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    fcxususd: {
        name: 'FCX.US/USD',
        description: 'FREEPORT-MCMORAN INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    fdxususd: {
        name: 'FDX.US/USD',
        description: 'FEDEX CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    feususd: {
        name: 'FE.US/USD',
        description: 'FIRSTENERGY CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    fereseur: {
        name: 'FER.ES/EUR',
        description: 'Ferrovial SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    fmedeeur: {
        name: 'FME.DE/EUR',
        description: 'Fresenius Medical Care AG &amp; Co KGaA',
        minStartDate: '2015-04-01',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    foxaususd: {
        name: 'FOXA.US/USD',
        description: 'TWENTY-FIRST CENTURY FOX-A',
        minStartDate: '2018-01-31',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    fpfreur: {
        name: 'FP.FR/EUR',
        description: 'Total SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    frfreur: {
        name: 'FR.FR/EUR',
        description: 'Valeo SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    fredeeur: {
        name: 'FRE.DE/EUR',
        description: 'Fresenius SE &amp; Co KGaA',
        minStartDate: '2015-04-10',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    fresgbgbx: {
        name: 'FRES.GB/GBX',
        description: 'Fresnillo PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    fxiususd: {
        name: 'FXI.US/USD',
        description: 'iShares China Large-Cap ETF',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    galppteur: {
        name: 'GALP.PT/EUR',
        description: 'Galp Energia SGPS SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Portugal'
    },
    gameseur: {
        name: 'GAM.ES/EUR',
        description: 'Gamesa Corporacion Tecnologica SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    gascmdusd: {
        name: 'GAS.CMD/USD',
        description: 'Natural Gas',
        minStartDate: '2012-08-20',
        decimalFactor: 10000,
        minStartDateDaily: '2012-01-01',
        group: 'CMD_ENERGY'
    },
    gaseseur: {
        name: 'GAS.ES/EUR',
        description: 'Gas Natural SDG SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    gbpaud: {
        name: 'GBP/AUD',
        description: 'Pound Sterling vs Australian Dollar',
        minStartDate: '2006-01-01',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    gbpcad: {
        name: 'GBP/CAD',
        description: 'Pound Sterling vs Canadian Dollar',
        minStartDate: '2006-01-01',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    gbpchf: {
        name: 'GBP/CHF',
        description: 'Pound Sterling vs Swiss Franc',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    gbpjpy: {
        name: 'GBP/JPY',
        description: 'Pound Sterling vs Japanese Yen',
        minStartDate: '2003-08-03',
        decimalFactor: 1000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    gbpnzd: {
        name: 'GBP/NZD',
        description: 'Pound Sterling vs New Zealand Dollar',
        minStartDate: '2006-01-01',
        decimalFactor: 100000,
        minStartDateDaily: '1994-01-01',
        group: 'FX_CROSSES'
    },
    gbpusd: {
        name: 'GBP/USD',
        description: 'Pound Sterling vs US Dollar',
        minStartDate: '2003-05-04',
        decimalFactor: 100000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_MAJORS'
    },
    gdxususd: {
        name: 'GDX.US/USD',
        description: 'VanEck Vectors Gold Miners ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    gdxjususd: {
        name: 'GDXJ.US/USD',
        description: 'VanEck Vectors Junior Gold Miners ETF',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    geususd: {
        name: 'GE.US/USD',
        description: 'GENERAL ELECTRIC CO',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    getibsesek: {
        name: 'GETIB.SE/SEK',
        description: 'Getinge AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    gfsgbgbx: {
        name: 'GFS.GB/GBX',
        description: 'G4S PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    gildususd: {
        name: 'GILD.US/USD',
        description: 'GILEAD SCIENCES INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    gisususd: {
        name: 'GIS.US/USD',
        description: 'GENERAL MILLS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    gldususd: {
        name: 'GLD.US/USD',
        description: 'SPDR Gold Shares ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    glefreur: {
        name: 'GLE.FR/EUR',
        description: 'Societe Generale SA',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    glengbgbx: {
        name: 'GLEN.GB/GBX',
        description: 'Glencore PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    glwususd: {
        name: 'GLW.US/USD',
        description: 'CORNING INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    gmususd: {
        name: 'GM.US/USD',
        description: 'GENERAL MOTORS CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    googususd: {
        name: 'GOOG.US/USD',
        description: 'ALPHABET INC-CL C',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    googlususd: {
        name: 'GOOGL.US/USD',
        description: 'ALPHABET INC-CL A',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    gpsususd: {
        name: 'GPS.US/USD',
        description: 'GAP INC/THE',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    gsususd: {
        name: 'GS.US/USD',
        description: 'GOLDMAN SACHS GROUP INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    gtonleur: {
        name: 'GTO.NL/EUR',
        description: 'Gemalto NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    gwwususd: {
        name: 'GWW.US/USD',
        description: 'WW GRAINGER INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    halususd: {
        name: 'HAL.US/USD',
        description: 'HALLIBURTON CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    hcnususd: {
        name: 'HCN.US/USD',
        description: 'WELLTOWER INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    hcpususd: {
        name: 'HCP.US/USD',
        description: 'HCP INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    hdususd: {
        name: 'HD.US/USD',
        description: 'HOME DEPOT INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    heideeur: {
        name: 'HEI.DE/EUR',
        description: 'HeidelbergCement AG',
        minStartDate: '2015-04-02',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    heianleur: {
        name: 'HEIA.NL/EUR',
        description: 'Heineken NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    hen3deeur: {
        name: 'HEN3.DE/EUR',
        description: 'Henkel AG &amp; Co KGaA',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    hesususd: {
        name: 'HES.US/USD',
        description: 'HESS CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    hkdjpy: {
        name: 'HKD/JPY',
        description: 'Hong Kong Dollar vs Japanese Yen',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    hmbsesek: {
        name: 'HMB.SE/SEK',
        description: 'Hennes &amp; Mauritz AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    hmsogbgbx: {
        name: 'HMSO.GB/GBX',
        description: 'Hammerson PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    honususd: {
        name: 'HON.US/USD',
        description: 'HONEYWELL INTERNATIONAL INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    hpqususd: {
        name: 'HPQ.US/USD',
        description: 'HP INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    hsbagbgbx: {
        name: 'HSBA.GB/GBX',
        description: 'HSBC Holdings PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    humususd: {
        name: 'HUM.US/USD',
        description: 'HUMANA INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    iaggbgbx: {
        name: 'IAG.GB/GBX',
        description: 'International Consolidated Airlines Grou',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    ibbususd: {
        name: 'IBB.US/USD',
        description: 'iShares Nasdaq Biotechnology ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ibeeseur: {
        name: 'IBE.ES/EUR',
        description: 'Iberdrola SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    ibmususd: {
        name: 'IBM.US/USD',
        description: 'INTL BUSINESS MACHINES CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    iceususd: {
        name: 'ICE.US/USD',
        description: 'INTERCONTINENTAL EXCHANGE IN',
        minStartDate: '2017-11-06',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    iefususd: {
        name: 'IEF.US/USD',
        description: 'iShares 7-10 Year Treasury Bond ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    ifxdeeur: {
        name: 'IFX.DE/EUR',
        description: 'Infineon Technologies AG',
        minStartDate: '2015-04-13',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    ihggbgbx: {
        name: 'IHG.GB/GBX',
        description: 'InterContinental Hotels Group PLC',
        minStartDate: '2016-11-01',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    ijhususd: {
        name: 'IJH.US/USD',
        description: 'iShares Core S&amp;P Mid-Cap ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    ijrususd: {
        name: 'IJR.US/USD',
        description: 'iShares Core S&amp;P Small-Cap ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ilmnususd: {
        name: 'ILMN.US/USD',
        description: 'ILLUMINA INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    imtgbgbx: {
        name: 'IMT.GB/GBX',
        description: 'Imperial Brands Plc',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2016-01-01',
        group: 'UK'
    },
    indidxusd: {
        name: 'IND.IDX/USD',
        description: 'India 50 Index',
        minStartDate: '2017-12-01',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'IDX_ASIA'
    },
    inganleur: {
        name: 'INGA.NL/EUR',
        description: 'ING Groep NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2016-01-01',
        group: 'Netherlands'
    },
    intcususd: {
        name: 'INTC.US/USD',
        description: 'INTEL CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    intuususd: {
        name: 'INTU.US/USD',
        description: 'INTUIT INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    invebsesek: {
        name: 'INVEB.SE/SEK',
        description: 'Investor AB',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    ipgususd: {
        name: 'IPG.US/USD',
        description: 'INTERPUBLIC GROUP OF COS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    isatgbgbx: {
        name: 'ISAT.GB/GBX',
        description: 'Inmarsat PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    isrgususd: {
        name: 'ISRG.US/USD',
        description: 'INTUITIVE SURGICAL INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    itrkgbgbx: {
        name: 'ITRK.GB/GBX',
        description: 'Intertek Group PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    itubususd: {
        name: 'ITUB.US/USD',
        description: 'Itau Unibanco Holding S.A.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    itvgbgbx: {
        name: 'ITV.GB/GBX',
        description: 'ITV PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    itwususd: {
        name: 'ITW.US/USD',
        description: 'ILLINOIS TOOL WORKS',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    itxeseur: {
        name: 'ITX.ES/EUR',
        description: 'Inditex SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    iveususd: {
        name: 'IVE.US/USD',
        description: 'iShares S&amp;P 500 Value ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ivwususd: {
        name: 'IVW.US/USD',
        description: 'iShares S&amp;P 500 Growth ETF',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    iwdususd: {
        name: 'IWD.US/USD',
        description: 'iShares Russell 1000 Value ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    iwfususd: {
        name: 'IWF.US/USD',
        description: 'iShares Russell 1000 Growth ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    iwmususd: {
        name: 'IWM.US/USD',
        description: 'iShares Russell 2000 ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    iyrususd: {
        name: 'IYR.US/USD',
        description: 'iShares U.S. Real Estate ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    jciususd: {
        name: 'JCI.US/USD',
        description: 'JOHNSON CONTROLS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    jnjususd: {
        name: 'JNJ.US/USD',
        description: 'JOHNSON &amp; JOHNSON',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    jnkususd: {
        name: 'JNK.US/USD',
        description: 'SPDR Barclays Capital High Yield Bond ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    jpmususd: {
        name: 'JPM.US/USD',
        description: 'JPMORGAN CHASE &amp; CO',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    jwnususd: {
        name: 'JWN.US/USD',
        description: 'NORDSTROM INC',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kususd: {
        name: 'K.US/USD',
        description: 'KELLOGG CO',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kbcbeeur: {
        name: 'KBC.BE/EUR',
        description: 'KBC Groep NV',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    kerfreur: {
        name: 'KER.FR/EUR',
        description: 'Kering',
        minStartDate: '2016-09-30',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    keyususd: {
        name: 'KEY.US/USD',
        description: 'KEYCORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kgfgbgbx: {
        name: 'KGF.GB/GBX',
        description: 'Kingfisher PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    khcususd: {
        name: 'KHC.US/USD',
        description: 'KRAFT HEINZ CO/THE',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kmbususd: {
        name: 'KMB.US/USD',
        description: 'KIMBERLY-CLARK CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kmiususd: {
        name: 'KMI.US/USD',
        description: 'KINDER MORGAN INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    koususd: {
        name: 'KO.US/USD',
        description: 'COCA-COLA CO/THE',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kpnnleur: {
        name: 'KPN.NL/EUR',
        description: 'Koninklijke KPN NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    krususd: {
        name: 'KR.US/USD',
        description: 'KROGER CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    kssususd: {
        name: 'KSS.US/USD',
        description: 'KOHLS CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    lususd: {
        name: 'L.US/USD',
        description: 'LOEWS CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    landgbgbx: {
        name: 'LAND.GB/GBX',
        description: 'Land Securities Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    lenususd: {
        name: 'LEN.US/USD',
        description: 'LENNAR CORP-A',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lgengbgbx: {
        name: 'LGEN.GB/GBX',
        description: 'Legal &amp; General Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    lhadeeur: {
        name: 'LHA.DE/EUR',
        description: 'Deutsche Lufthansa AG',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    lifreur: {
        name: 'LI.FR/EUR',
        description: 'Klepierre',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    lindeeur: {
        name: 'LIN.DE/EUR',
        description: 'Linde AG',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    lloygbgbx: {
        name: 'LLOY.GB/GBX',
        description: 'Lloyds Banking Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    llyususd: {
        name: 'LLY.US/USD',
        description: 'ELI LILLY &amp; CO',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lmtususd: {
        name: 'LMT.US/USD',
        description: 'LOCKHEED MARTIN CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lowususd: {
        name: 'LOW.US/USD',
        description: "LOWE'S COS INC",
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lrfreur: {
        name: 'LR.FR/EUR',
        description: 'Legrand SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    lrcxususd: {
        name: 'LRCX.US/USD',
        description: 'LAM RESEARCH CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lsegbgbx: {
        name: 'LSE.GB/GBX',
        description: 'London Stock Exchange Group PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    luvususd: {
        name: 'LUV.US/USD',
        description: 'SOUTHWEST AIRLINES CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lvsususd: {
        name: 'LVS.US/USD',
        description: 'Las Vegas Sands Corp.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    lxsdeeur: {
        name: 'LXS.DE/EUR',
        description: 'Lanxess AG',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    mususd: {
        name: 'M.US/USD',
        description: "MACY'S INC",
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    maususd: {
        name: 'MA.US/USD',
        description: 'MASTERCARD INC-CLASS A',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    maerskbdkdkk: {
        name: 'MAERSKB.DK/DKK',
        description: 'AP Moeller - Maersk A/S',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    marususd: {
        name: 'MAR.US/USD',
        description: 'MARRIOTT INTERNATIONAL -CL A',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    matususd: {
        name: 'MAT.US/USD',
        description: 'MATTEL INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    mcfreur: {
        name: 'MC.FR/EUR',
        description: 'LVMH Moet Hennessy Louis Vuitton SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    mcdususd: {
        name: 'MCD.US/USD',
        description: "MCDONALD'S CORP",
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mchpususd: {
        name: 'MCHP.US/USD',
        description: 'MICROCHIP TECHNOLOGY INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    mckususd: {
        name: 'MCK.US/USD',
        description: 'MCKESSON CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mdlzususd: {
        name: 'MDLZ.US/USD',
        description: 'MONDELEZ INTERNATIONAL INC-A',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    metususd: {
        name: 'MET.US/USD',
        description: 'METLIFE INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mgmususd: {
        name: 'MGM.US/USD',
        description: 'MGM RESORTS INTERNATIONAL',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mhgnonok: {
        name: 'MHG.NO/NOK',
        description: 'Marine Harvest ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    mksgbgbx: {
        name: 'MKS.GB/GBX',
        description: 'Marks &amp; Spencer Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    mmmususd: {
        name: 'MMM.US/USD',
        description: '3M CO',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mndigbgbx: {
        name: 'MNDI.GB/GBX',
        description: 'Mondi PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    moususd: {
        name: 'MO.US/USD',
        description: 'ALTRIA GROUP INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mpcususd: {
        name: 'MPC.US/USD',
        description: 'MARATHON PETROLEUM CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    mrkdeeur: {
        name: 'MRK.DE/EUR',
        description: 'Merck KGaA',
        minStartDate: '2015-03-24',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    mrkususd: {
        name: 'MRK.US/USD',
        description: 'MERCK &amp; CO. INC.',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mroususd: {
        name: 'MRO.US/USD',
        description: 'MARATHON OIL CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    mrwgbgbx: {
        name: 'MRW.GB/GBX',
        description: 'WM Morrison Supermarkets PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    msususd: {
        name: 'MS.US/USD',
        description: 'MORGAN STANLEY',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    msftususd: {
        name: 'MSFT.US/USD',
        description: 'MICROSOFT CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    mtnleur: {
        name: 'MT.NL/EUR',
        description: 'ArcelorMittal',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    muususd: {
        name: 'MU.US/USD',
        description: 'MICRON TECHNOLOGY INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    muv2deeur: {
        name: 'MUV2.DE/EUR',
        description: 'Muenchener Rueckversicherungs AG',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    nblususd: {
        name: 'NBL.US/USD',
        description: 'NOBLE ENERGY INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    ndasesek: {
        name: 'NDA.SE/SEK',
        description: 'Nordea Bank AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    neeususd: {
        name: 'NEE.US/USD',
        description: 'NEXTERA ENERGY INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    nemususd: {
        name: 'NEM.US/USD',
        description: 'NEWMONT MINING CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    nes1vfieur: {
        name: 'NES1V.FI/EUR',
        description: 'Neste OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    nflxususd: {
        name: 'NFLX.US/USD',
        description: 'NETFLIX INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    nggbgbx: {
        name: 'NG.GB/GBX',
        description: 'National Grid PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    nhynonok: {
        name: 'NHY.NO/NOK',
        description: 'Norsk Hydro ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    nkeususd: {
        name: 'NKE.US/USD',
        description: 'NIKE INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    nldidxeur: {
        name: 'NLD.IDX/EUR',
        description: 'Netherlands 25 Index',
        minStartDate: '2013-02-27',
        decimalFactor: 1000,
        minStartDateDaily: '1999-01-01',
        group: 'IDX_EUROPE'
    },
    nocususd: {
        name: 'NOC.US/USD',
        description: 'NORTHROP GRUMMAN CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    novobdkdkk: {
        name: 'NOVOB.DK/DKK',
        description: 'Novo Nordisk A/S',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    nre1vfieur: {
        name: 'NRE1V.FI/EUR',
        description: 'Nokian Renkaat OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    nrgususd: {
        name: 'NRG.US/USD',
        description: 'NRG ENERGY INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    nscususd: {
        name: 'NSC.US/USD',
        description: 'NORFOLK SOUTHERN CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    nvdaususd: {
        name: 'NVDA.US/USD',
        description: 'NVIDIA CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    nwlususd: {
        name: 'NWL.US/USD',
        description: 'NEWELL BRANDS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    nxtgbgbx: {
        name: 'NXT.GB/GBX',
        description: 'Next PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    nzdcad: {
        name: 'NZD/CAD',
        description: 'New Zealand Dollar vs Canadian Dollar',
        minStartDate: '2006-01-01',
        decimalFactor: 100000,
        minStartDateDaily: '2002-01-01',
        group: 'FX_CROSSES'
    },
    nzdchf: {
        name: 'NZD/CHF',
        description: 'New Zealand Dollar vs Swiss Franc',
        minStartDate: '2006-01-01',
        decimalFactor: 100000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    nzdjpy: {
        name: 'NZD/JPY',
        description: 'New Zealand Dollar vs Japanese Yen',
        minStartDate: '2006-01-01',
        decimalFactor: 1000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    nzdusd: {
        name: 'NZD/USD',
        description: 'New Zealand Dollar vs US Dollar',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_MAJORS'
    },
    nzymbdkdkk: {
        name: 'NZYMB.DK/DKK',
        description: 'Novozymes A/S',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    ojuicecmdusx: {
        name: 'OJUICE.CMD/USX',
        description: 'Orange Juice',
        minStartDate: '2017-10-20',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_AGRICULTURAL'
    },
    okeususd: {
        name: 'OKE.US/USD',
        description: 'ONEOK INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    omcususd: {
        name: 'OMC.US/USD',
        description: 'OMNICOM GROUP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    orfreur: {
        name: 'OR.FR/EUR',
        description: "L'Oreal SA",
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    orafreur: {
        name: 'ORA.FR/EUR',
        description: 'Orange SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2013-01-01',
        group: 'France'
    },
    orclususd: {
        name: 'ORCL.US/USD',
        description: 'ORACLE CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    orknonok: {
        name: 'ORK.NO/NOK',
        description: 'Orkla ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    orlyususd: {
        name: 'ORLY.US/USD',
        description: "O'REILLY AUTOMOTIVE INC",
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ote1vfieur: {
        name: 'OTE1V.FI/EUR',
        description: 'Outotec OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    out1vfieur: {
        name: 'OUT1V.FI/EUR',
        description: 'Outokumpu OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    oxyususd: {
        name: 'OXY.US/USD',
        description: 'OCCIDENTAL PETROLEUM CORP',
        minStartDate: '2017-05-11',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pah3deeur: {
        name: 'PAH3.DE/EUR',
        description: 'Porsche Automobil Holding SE',
        minStartDate: '2015-04-21',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    payxususd: {
        name: 'PAYX.US/USD',
        description: 'PAYCHEX INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    pbrususd: {
        name: 'PBR.US/USD',
        description: 'Petroleo Brasileiro S.A.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pcarususd: {
        name: 'PCAR.US/USD',
        description: 'PACCAR INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    pcgususd: {
        name: 'PCG.US/USD',
        description: 'P G &amp; E CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pclnususd: {
        name: 'PCLN.US/USD',
        description: 'PRICELINE GROUP INC/THE',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pepususd: {
        name: 'PEP.US/USD',
        description: 'PEPSICO INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pfcgbgbx: {
        name: 'PFC.GB/GBX',
        description: 'Petrofac Ltd',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    pfeususd: {
        name: 'PFE.US/USD',
        description: 'PFIZER INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pgususd: {
        name: 'PG.US/USD',
        description: 'PROCTER &amp; GAMBLE CO/THE',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pgrususd: {
        name: 'PGR.US/USD',
        description: 'PROGRESSIVE CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    phususd: {
        name: 'PH.US/USD',
        description: 'PARKER HANNIFIN CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    phianleur: {
        name: 'PHIA.NL/EUR',
        description: 'Koninklijke Philips NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    plnidxpln: {
        name: 'PLN.IDX/PLN',
        description: 'Poland 20 Index',
        minStartDate: '2017-12-01',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'IDX_EUROPE'
    },
    pmususd: {
        name: 'PM.US/USD',
        description: 'PHILIP MORRIS INTERNATIONAL',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pncususd: {
        name: 'PNC.US/USD',
        description: 'PNC FINANCIAL SERVICES GROUP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pndoradkdkk: {
        name: 'PNDORA.DK/DKK',
        description: 'Pandora A/S',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    ppgususd: {
        name: 'PPG.US/USD',
        description: 'PPG INDUSTRIES INC',
        minStartDate: '2018-02-02',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    prugbgbx: {
        name: 'PRU.GB/GBX',
        description: 'Prudential PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    pruususd: {
        name: 'PRU.US/USD',
        description: 'PRUDENTIAL FINANCIAL INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    psaususd: {
        name: 'PSA.US/USD',
        description: 'PUBLIC STORAGE',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    psmdeeur: {
        name: 'PSM.DE/EUR',
        description: 'ProSiebenSat.1 Media AG',
        minStartDate: '2015-04-20',
        decimalFactor: 1000,
        minStartDateDaily: '2013-01-01',
        group: 'Germany'
    },
    psngbgbx: {
        name: 'PSN.GB/GBX',
        description: 'Persimmon PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    psongbgbx: {
        name: 'PSON.GB/GBX',
        description: 'Pearson PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    psxususd: {
        name: 'PSX.US/USD',
        description: 'PHILLIPS 66',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    pubfreur: {
        name: 'PUB.FR/EUR',
        description: 'Publicis Groupe SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    pxdususd: {
        name: 'PXD.US/USD',
        description: 'PIONEER NATURAL RESOURCES CO',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    pyplususd: {
        name: 'PYPL.US/USD',
        description: 'PAYPAL HOLDINGS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    qcomususd: {
        name: 'QCOM.US/USD',
        description: 'QUALCOMM INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    qqqususd: {
        name: 'QQQ.US/USD',
        description: 'PowerShares QQQ ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    randnleur: {
        name: 'RAND.NL/EUR',
        description: 'Randstad Holding NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    rbgbgbx: {
        name: 'RB.GB/GBX',
        description: 'Reckitt Benckiser Group PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rbiateur: {
        name: 'RBI.AT/EUR',
        description: 'Raiffeisen Bank International AG',
        minStartDate: '2016-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Austria'
    },
    rbsgbgbx: {
        name: 'RBS.GB/GBX',
        description: 'Royal Bank of Scotland Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rdsanleur: {
        name: 'RDSA.NL/EUR',
        description: 'Royal Dutch Shell PLC',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    rdsbgbgbx: {
        name: 'RDSB.GB/GBX',
        description: 'Royal Dutch Shell PLC',
        minStartDate: '2016-11-01',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    reeeseur: {
        name: 'REE.ES/EUR',
        description: 'Red Electrica Corp SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    regnususd: {
        name: 'REGN.US/USD',
        description: 'REGENERON PHARMACEUTICALS',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    relgbgbx: {
        name: 'REL.GB/GBX',
        description: 'Reed Elsevier PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rennleur: {
        name: 'REN.NL/EUR',
        description: 'RELX NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2015-01-01',
        group: 'Netherlands'
    },
    repeseur: {
        name: 'REP.ES/EUR',
        description: 'Repsol SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    rfususd: {
        name: 'RF.US/USD',
        description: 'REGIONS FINANCIAL CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    rhtususd: {
        name: 'RHT.US/USD',
        description: 'RED HAT INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    rifreur: {
        name: 'RI.FR/EUR',
        description: 'Pernod-Ricard SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    riogbgbx: {
        name: 'RIO.GB/GBX',
        description: 'Rio Tinto PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rmggbgbx: {
        name: 'RMG.GB/GBX',
        description: 'Royal Mail PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2013-01-01',
        group: 'UK'
    },
    rnofreur: {
        name: 'RNO.FR/EUR',
        description: 'Renault SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    rostususd: {
        name: 'ROST.US/USD',
        description: 'ROSS STORES INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    rrgbgbx: {
        name: 'RR.GB/GBX',
        description: 'Rolls-Royce Holdings PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rrcususd: {
        name: 'RRC.US/USD',
        description: 'RANGE RESOURCES CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    rrsgbgbx: {
        name: 'RRS.GB/GBX',
        description: 'Randgold Resources Ltd',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rsagbgbx: {
        name: 'RSA.GB/GBX',
        description: 'RSA Insurance Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    rtnususd: {
        name: 'RTN.US/USD',
        description: 'RAYTHEON COMPANY',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    rwedeeur: {
        name: 'RWE.DE/EUR',
        description: 'RWE AG',
        minStartDate: '2015-04-16',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    saffreur: {
        name: 'SAF.FR/EUR',
        description: 'Safran SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    saneseur: {
        name: 'SAN.ES/EUR',
        description: 'Banco Santander SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    sanfreur: {
        name: 'SAN.FR/EUR',
        description: 'Sanofi',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    sandsesek: {
        name: 'SAND.SE/SEK',
        description: 'Sandvik AB',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    sapdeeur: {
        name: 'SAP.DE/EUR',
        description: 'SAP AG',
        minStartDate: '2015-04-16',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    sbrygbgbx: {
        name: 'SBRY.GB/GBX',
        description: 'J Sainsbury PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    sbuxususd: {
        name: 'SBUX.US/USD',
        description: 'STARBUCKS CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    scabsesek: {
        name: 'SCAB.SE/SEK',
        description: 'Svenska Cellulosa AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    schwususd: {
        name: 'SCHW.US/USD',
        description: 'SCHWAB (CHARLES) CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    sdfdeeur: {
        name: 'SDF.DE/EUR',
        description: 'K+S AG',
        minStartDate: '2015-04-15',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    sebasesek: {
        name: 'SEBA.SE/SEK',
        description: 'Skandinaviska Enskilda Banken AB',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    secubsesek: {
        name: 'SECUB.SE/SEK',
        description: 'Securitas AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    sgdidxsgd: {
        name: 'SGD.IDX/SGD',
        description: 'Singapore Blue Chip Cash Index',
        minStartDate: '2017-12-01',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'IDX_ASIA'
    },
    sgdjpy: {
        name: 'SGD/JPY',
        description: 'Singapore Dollar vs Japanese Yen',
        minStartDate: '2007-03-13',
        decimalFactor: 1000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    sgegbgbx: {
        name: 'SGE.GB/GBX',
        description: 'Sage Group PLC/The',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    sgofreur: {
        name: 'SGO.FR/EUR',
        description: 'Cie de St-Gobain',
        minStartDate: '2016-10-31',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    shpgbgbx: {
        name: 'SHP.GB/GBX',
        description: 'Shire PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    shwususd: {
        name: 'SHW.US/USD',
        description: 'SHERWIN-WILLIAMS COMPANY',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    siedeeur: {
        name: 'SIE.DE/EUR',
        description: 'Siemens AG',
        minStartDate: '2015-04-20',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    sjmususd: {
        name: 'SJM.US/USD',
        description: 'JM SMUCKER COMPANY',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    skabsesek: {
        name: 'SKAB.SE/SEK',
        description: 'Skanska AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    skfbsesek: {
        name: 'SKFB.SE/SEK',
        description: 'SKF AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    skygbgbx: {
        name: 'SKY.GB/GBX',
        description: 'Sky Plc',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2014-01-01',
        group: 'UK'
    },
    slvususd: {
        name: 'SLV.US/USD',
        description: 'iShares Silver Trust ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    smingbgbx: {
        name: 'SMIN.GB/GBX',
        description: 'Smiths Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    sngbgbx: {
        name: 'SN.GB/GBX',
        description: 'Smith &amp; Nephew PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    snapususd: {
        name: 'SNAP.US/USD',
        description: 'SNAP Inc',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    soususd: {
        name: 'SO.US/USD',
        description: 'SOUTHERN CO/THE',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    solbbeeur: {
        name: 'SOLB.BE/EUR',
        description: 'Solvay SA',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    spgususd: {
        name: 'SPG.US/USD',
        description: 'SIMON PROPERTY GROUP INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    spyususd: {
        name: 'SPY.US/USD',
        description: 'SPDR S&amp;P 500 ETF',
        minStartDate: '2017-02-16',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    ssegbgbx: {
        name: 'SSE.GB/GBX',
        description: 'SSE PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    stangbgbx: {
        name: 'STAN.GB/GBX',
        description: 'Standard Chartered PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    stervfieur: {
        name: 'STERV.FI/EUR',
        description: 'Stora Enso OYJ',
        minStartDate: '2016-11-03',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Finland'
    },
    stiususd: {
        name: 'STI.US/USD',
        description: 'SUNTRUST BANKS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    stlnonok: {
        name: 'STL.NO/NOK',
        description: 'Statoil ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    sttususd: {
        name: 'STT.US/USD',
        description: 'STATE STREET CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    stzususd: {
        name: 'STZ.US/USD',
        description: 'CONSTELLATION BRANDS INC-A',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    sufreur: {
        name: 'SU.FR/EUR',
        description: 'Schneider Electric SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    sugarcmdusd: {
        name: 'SUGAR.CMD/USD',
        description: 'London Sugar No.5',
        minStartDate: '2017-10-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'CMD_AGRICULTURAL'
    },
    svtgbgbx: {
        name: 'SVT.GB/GBX',
        description: 'Severn Trent PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    swedasesek: {
        name: 'SWEDA.SE/SEK',
        description: 'Swedbank AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    swkususd: {
        name: 'SWK.US/USD',
        description: 'STANLEY BLACK &amp; DECKER INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    swmasesek: {
        name: 'SWMA.SE/SEK',
        description: 'Swedish Match AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    sykususd: {
        name: 'SYK.US/USD',
        description: 'STRYKER CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    symcususd: {
        name: 'SYMC.US/USD',
        description: 'SYMANTEC CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    syyususd: {
        name: 'SYY.US/USD',
        description: 'SYSCO CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    tususd: {
        name: 'T.US/USD',
        description: 'AT&amp;T INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tapususd: {
        name: 'TAP.US/USD',
        description: 'MOLSON COORS BREWING CO -B',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    tategbgbx: {
        name: 'TATE.GB/GBX',
        description: 'Tate &amp; Lyle PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    tefeseur: {
        name: 'TEF.ES/EUR',
        description: 'Telefonica SA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Spain'
    },
    telnonok: {
        name: 'TEL.NO/NOK',
        description: 'Telenor ASA',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Norway'
    },
    tel2bsesek: {
        name: 'TEL2B.SE/SEK',
        description: 'Tele2 AB',
        minStartDate: '2016-11-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    tevaususd: {
        name: 'TEVA.US/USD',
        description: 'TEVA PHARMACEUTICAL-SP ADR',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tgtususd: {
        name: 'TGT.US/USD',
        description: 'TARGET CORP',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tifususd: {
        name: 'TIF.US/USD',
        description: 'TIFFANY &amp; CO',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    tjxususd: {
        name: 'TJX.US/USD',
        description: 'TJX COMPANIES INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tkadeeur: {
        name: 'TKA.DE/EUR',
        description: 'ThyssenKrupp AG',
        minStartDate: '2015-04-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    tls1vfieur: {
        name: 'TLS1V.FI/EUR',
        description: 'Telia Company AB',
        minStartDate: '2016-11-09',
        decimalFactor: 1000,
        minStartDateDaily: '2016-01-01',
        group: 'Finland'
    },
    tlsnsesek: {
        name: 'TLSN.SE/SEK',
        description: 'Telia Company AB',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2016-01-01',
        group: 'Sweden'
    },
    tltususd: {
        name: 'TLT.US/USD',
        description: 'iShares 20+ Year Treasury Bond ETF',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    tlwgbgbx: {
        name: 'TLW.GB/GBX',
        description: 'Tullow Oil PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    tmoususd: {
        name: 'TMO.US/USD',
        description: 'THERMO FISHER SCIENTIFIC INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tpkgbgbx: {
        name: 'TPK.GB/GBX',
        description: 'Travis Perkins PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    trowususd: {
        name: 'TROW.US/USD',
        description: 'T ROWE PRICE GROUP INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    trvususd: {
        name: 'TRV.US/USD',
        description: 'TRAVELERS COS INC/THE',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tryjpy: {
        name: 'TRY/JPY',
        description: 'Turkish Lira vs Japanese Yen',
        minStartDate: '2010-05-09',
        decimalFactor: 1000,
        minStartDateDaily: '2010-01-01',
        group: 'FX_CROSSES'
    },
    tscogbgbx: {
        name: 'TSCO.GB/GBX',
        description: 'Tesco PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    tslaususd: {
        name: 'TSLA.US/USD',
        description: 'TESLA MOTORS INC',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    tsmususd: {
        name: 'TSM.US/USD',
        description: 'Taiwan Semiconductor Manufacturing Company Limited',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    tsnususd: {
        name: 'TSN.US/USD',
        description: 'TYSON FOODS INC-CL A',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    tui1deeur: {
        name: 'TUI1.DE/EUR',
        description: 'TUI AG',
        minStartDate: '2015-04-15',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    twtrususd: {
        name: 'TWTR.US/USD',
        description: 'TWITTER INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    txnususd: {
        name: 'TXN.US/USD',
        description: 'TEXAS INSTRUMENTS INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ucbbeeur: {
        name: 'UCB.BE/EUR',
        description: 'UCB SA',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    ugfreur: {
        name: 'UG.FR/EUR',
        description: 'Peugeot SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    ukgilttrgbp: {
        name: 'UKGILT.TR/GBP',
        description: 'UK Long Gilt',
        minStartDate: '2017-12-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'BND_CFD'
    },
    ultaususd: {
        name: 'ULTA.US/USD',
        description: 'ULTA SALON COSMETICS &amp; FRAGR',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    ulvrgbgbx: {
        name: 'ULVR.GB/GBX',
        description: 'Unilever PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    umibeeur: {
        name: 'UMI.BE/EUR',
        description: 'Umicore SA',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Belgium'
    },
    unanleur: {
        name: 'UNA.NL/EUR',
        description: 'Unilever NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    unhususd: {
        name: 'UNH.US/USD',
        description: 'UNITEDHEALTH GROUP INC',
        minStartDate: '2017-11-02',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    unpususd: {
        name: 'UNP.US/USD',
        description: 'UNION PACIFIC CORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    upsususd: {
        name: 'UPS.US/USD',
        description: 'UNITED PARCEL SERVICE-CL B',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    usbususd: {
        name: 'USB.US/USD',
        description: 'US BANCORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    usdcad: {
        name: 'USD/CAD',
        description: 'US Dollar vs Canadian Dollar',
        minStartDate: '2003-08-03',
        decimalFactor: 100000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_MAJORS'
    },
    usdchf: {
        name: 'USD/CHF',
        description: 'US Dollar vs Swiss Franc',
        minStartDate: '2003-05-04',
        decimalFactor: 100000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_MAJORS'
    },
    usdcnh: {
        name: 'USD/CNH',
        description: 'US Dollar vs Offshore Chinese Renminbi',
        minStartDate: '2012-06-27',
        decimalFactor: 100000,
        minStartDateDaily: '2012-01-01',
        group: 'FX_CROSSES'
    },
    usdczk: {
        name: 'USD/CZK',
        description: 'US Dollar vs Czech Koruna',
        minStartDate: '2016-01-03',
        decimalFactor: 10000,
        minStartDateDaily: '2016-01-01',
        group: 'FX_CROSSES'
    },
    usddkk: {
        name: 'USD/DKK',
        description: 'US Dollar vs Danish Krone',
        minStartDate: '2003-08-04',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    usdhkd: {
        name: 'USD/HKD',
        description: 'US Dollar vs Hong Kong Dollar',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_CROSSES'
    },
    usdhuf: {
        name: 'USD/HUF',
        description: 'US Dollar vs Hungarian Forint',
        minStartDate: '2007-03-13',
        decimalFactor: 1000,
        minStartDateDaily: '1998-01-01',
        group: 'FX_CROSSES'
    },
    usdils: {
        name: 'USD/ILS',
        description: 'US Dollar vs Israeli Shekel',
        minStartDate: '2016-12-15',
        decimalFactor: 100000,
        minStartDateDaily: '2016-01-01',
        group: 'FX_CROSSES'
    },
    usdjpy: {
        name: 'USD/JPY',
        description: 'US Dollar vs Japanese Yen',
        minStartDate: '2003-05-04',
        decimalFactor: 1000,
        minStartDateDaily: '1986-01-01',
        group: 'FX_MAJORS'
    },
    usdmxn: {
        name: 'USD/MXN',
        description: 'US Dollar vs Mexican Peso',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1995-01-01',
        group: 'FX_CROSSES'
    },
    usdnok: {
        name: 'USD/NOK',
        description: 'US Dollar vs Norwegian Krone',
        minStartDate: '2003-08-04',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    usdpln: {
        name: 'USD/PLN',
        description: 'US Dollar vs Polish Zloty',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    usdron: {
        name: 'USD/RON',
        description: 'US Dollar vs Romanian Leu',
        minStartDate: '2016-12-18',
        decimalFactor: 10000,
        minStartDateDaily: '2016-01-01',
        group: 'FX_CROSSES'
    },
    usdrub: {
        name: 'USD/RUB',
        description: 'US Dollar vs Russian Ruble',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1999-01-01',
        group: 'FX_CROSSES'
    },
    usdsek: {
        name: 'USD/SEK',
        description: 'US Dollar vs Swedish Krona',
        minStartDate: '2003-08-04',
        decimalFactor: 100000,
        minStartDateDaily: '1991-01-01',
        group: 'FX_CROSSES'
    },
    usdsgd: {
        name: 'USD/SGD',
        description: 'US Dollar vs Singapore Dollar',
        minStartDate: '2004-11-16',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    usdthb: {
        name: 'USD/THB',
        description: 'US Dollar vs Thai Baht',
        minStartDate: '2017-02-13',
        decimalFactor: 10000,
        minStartDateDaily: '2017-01-01',
        group: 'FX_CROSSES'
    },
    usdtry: {
        name: 'USD/TRY',
        description: 'US Dollar vs Turkish Lira',
        minStartDate: '2007-03-13',
        decimalFactor: 100000,
        minStartDateDaily: '1998-01-01',
        group: 'FX_CROSSES'
    },
    usdzar: {
        name: 'USD/ZAR',
        description: 'US Dollar vs South African Rand',
        minStartDate: '1997-10-13',
        decimalFactor: 100000,
        minStartDateDaily: '1990-01-01',
        group: 'FX_CROSSES'
    },
    usoususd: {
        name: 'USO.US/USD',
        description: 'United States Oil',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    utxususd: {
        name: 'UTX.US/USD',
        description: 'UNITED TECHNOLOGIES CORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    uugbgbx: {
        name: 'UU.GB/GBX',
        description: 'United Utilities Group PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    vususd: {
        name: 'V.US/USD',
        description: 'VISA INC-CLASS A SHARES',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    valeususd: {
        name: 'VALE.US/USD',
        description: 'Vale S.A.',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    veaususd: {
        name: 'VEA.US/USD',
        description: 'Vanguard FTSE Developed Markets ETF',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    vfcususd: {
        name: 'VFC.US/USD',
        description: 'VF CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    vgkususd: {
        name: 'VGK.US/USD',
        description: 'Vanguard FTSE Europe ETF',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'ETF_CFD_US'
    },
    viabususd: {
        name: 'VIAB.US/USD',
        description: 'VIACOM INC-CLASS B',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    viefreur: {
        name: 'VIE.FR/EUR',
        description: 'Veolia Environnement SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    vivfreur: {
        name: 'VIV.FR/EUR',
        description: 'Vivendi SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    vkfreur: {
        name: 'VK.FR/EUR',
        description: 'Vallourec SA',
        minStartDate: '2016-08-05',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'France'
    },
    vloususd: {
        name: 'VLO.US/USD',
        description: 'VALERO ENERGY CORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    vmcususd: {
        name: 'VMC.US/USD',
        description: 'VULCAN MATERIALS CO',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    vnadeeur: {
        name: 'VNA.DE/EUR',
        description: 'Vonovia SE',
        minStartDate: '2015-04-14',
        decimalFactor: 1000,
        minStartDateDaily: '2015-01-01',
        group: 'Germany'
    },
    vnqususd: {
        name: 'VNQ.US/USD',
        description: 'Vanguard REIT ETF',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    vodgbgbx: {
        name: 'VOD.GB/GBX',
        description: 'Vodafone Group PLC',
        minStartDate: '2016-07-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    voeateur: {
        name: 'VOE.AT/EUR',
        description: 'Voestalpine AG',
        minStartDate: '2016-11-04',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Austria'
    },
    volvbsesek: {
        name: 'VOLVB.SE/SEK',
        description: 'Volvo AB',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Sweden'
    },
    vow3deeur: {
        name: 'VOW3.DE/EUR',
        description: 'Volkswagen AG',
        minStartDate: '2015-04-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Germany'
    },
    vpknleur: {
        name: 'VPK.NL/EUR',
        description: 'Koninklijke Vopak NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    vrtxususd: {
        name: 'VRTX.US/USD',
        description: 'VERTEX PHARMACEUTICALS INC',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    vwsdkdkk: {
        name: 'VWS.DK/DKK',
        description: 'Vestas Wind Systems A/S',
        minStartDate: '2016-11-07',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Denmark'
    },
    vxxususd: {
        name: 'VXX.US/USD',
        description: 'iPath S&amp;P 500 VIX ST Futures ETN',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    vzususd: {
        name: 'VZ.US/USD',
        description: 'VERIZON COMMUNICATIONS INC',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    wbaususd: {
        name: 'WBA.US/USD',
        description: 'WALGREENS BOOTS ALLIANCE INC',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    wdcususd: {
        name: 'WDC.US/USD',
        description: 'WESTERN DIGITAL CORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    weirgbgbx: {
        name: 'WEIR.GB/GBX',
        description: 'Weir Group PLC/The',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    wfcususd: {
        name: 'WFC.US/USD',
        description: 'WELLS FARGO &amp; CO',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    whrususd: {
        name: 'WHR.US/USD',
        description: 'WHIRLPOOL CORP',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    wklnleur: {
        name: 'WKL.NL/EUR',
        description: 'Wolters Kluwer NV',
        minStartDate: '2016-11-14',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'Netherlands'
    },
    wmtususd: {
        name: 'WMT.US/USD',
        description: 'WAL-MART STORES INC',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    wosgbgbx: {
        name: 'WOS.GB/GBX',
        description: 'Wolseley PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    wppgbgbx: {
        name: 'WPP.GB/GBX',
        description: 'WPP PLC',
        minStartDate: '2016-07-08',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    wtbgbgbx: {
        name: 'WTB.GB/GBX',
        description: 'Whitbread PLC',
        minStartDate: '2016-07-06',
        decimalFactor: 1000,
        minStartDateDaily: '2011-01-01',
        group: 'UK'
    },
    wynnususd: {
        name: 'WYNN.US/USD',
        description: 'WYNN RESORTS LTD',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    xususd: {
        name: 'X.US/USD',
        description: 'UNITED STATES STEEL CORP',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    xagusd: {
        name: 'XAG/USD',
        description: 'Spot silver',
        minStartDate: '1997-08-13',
        decimalFactor: 1000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_METALS'
    },
    xauusd: {
        name: 'XAU/USD',
        description: 'Spot gold',
        minStartDate: '1999-09-01',
        decimalFactor: 1000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_METALS'
    },
    xleususd: {
        name: 'XLE.US/USD',
        description: 'Energy Select Sector SPDR Fund',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xlfususd: {
        name: 'XLF.US/USD',
        description: 'Financial Select Sector SPDR Fund',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xliususd: {
        name: 'XLI.US/USD',
        description: 'Industrial Select Sector SPDR Fund',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xlkususd: {
        name: 'XLK.US/USD',
        description: 'Technology Select Sector SPDR Fund',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xlnxususd: {
        name: 'XLNX.US/USD',
        description: 'XILINX INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    xlpususd: {
        name: 'XLP.US/USD',
        description: 'Consumer Staples Select Sector SPDR Fund',
        minStartDate: '2017-01-23',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xluususd: {
        name: 'XLU.US/USD',
        description: 'Utilities Select Sector SPDR Fund',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xlvususd: {
        name: 'XLV.US/USD',
        description: 'Health Care Select Sector SPDR Fund',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xlyususd: {
        name: 'XLY.US/USD',
        description: 'Consumer Discretionary Select Sector SPDR Fund',
        minStartDate: '2017-11-15',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    xomususd: {
        name: 'XOM.US/USD',
        description: 'EXXON MOBIL CORP',
        minStartDate: '2017-01-19',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'US'
    },
    xopususd: {
        name: 'XOP.US/USD',
        description: 'SPDR S&amp;P Oil &amp; Gas Explor &amp; Prodtn ETF',
        minStartDate: '2017-01-26',
        decimalFactor: 1000,
        minStartDateDaily: '2017-01-01',
        group: 'ETF_CFD_US'
    },
    yumususd: {
        name: 'YUM.US/USD',
        description: 'YUM! BRANDS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    zarjpy: {
        name: 'ZAR/JPY',
        description: 'South African Rand vs Japanese Yen',
        minStartDate: '1999-03-03',
        decimalFactor: 1000,
        minStartDateDaily: '1997-01-01',
        group: 'FX_CROSSES'
    },
    zbhususd: {
        name: 'ZBH.US/USD',
        description: 'ZIMMER BIOMET HOLDINGS INC',
        minStartDate: '2018-02-01',
        decimalFactor: 1000,
        minStartDateDaily: '2018-01-01',
        group: 'US'
    },
    abbnchchf: {
        name: 'ABBN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'ABB Ltd',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    adenchchf: {
        name: 'ADEN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Adecco SA',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    baerchchf: {
        name: 'BAER.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Julius Baer Group Ltd',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    clnchchf: {
        name: 'CLN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Clariant AG',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    csgnchchf: {
        name: 'CSGN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Credit Suisse Group AG',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    givnchchf: {
        name: 'GIVN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Givaudan SA',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    kninchchf: {
        name: 'KNIN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Kuehne + Nagel International AG',
        minStartDate: '2015-06-17',
        minStartDateDaily: '2011-01-01'
    },
    lhnchchf: {
        name: 'LHN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Lafarge Holcim Ltd',
        minStartDate: '2015-06-17',
        minStartDateDaily: '2015-01-01'
    },
    lonnchchf: {
        name: 'LONN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Lonza Group AG',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    nesnchchf: {
        name: 'NESN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Nestle SA',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    novnchchf: {
        name: 'NOVN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Novartis AG',
        minStartDate: '2015-06-16',
        minStartDateDaily: '2011-01-01'
    },
    rogchchf: {
        name: 'ROG.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Roche Holding AG',
        minStartDate: '2015-07-03',
        minStartDateDaily: '2011-01-01'
    },
    scmnchchf: {
        name: 'SCMN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Swisscom AG',
        minStartDate: '2015-07-03',
        minStartDateDaily: '2011-01-01'
    },
    sgsnchchf: {
        name: 'SGSN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'SGS SA',
        minStartDate: '2015-08-06',
        minStartDateDaily: '2011-01-01'
    },
    slhnchchf: {
        name: 'SLHN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Swiss Life Holding AG',
        minStartDate: '2015-08-06',
        minStartDateDaily: '2011-01-01'
    },
    soonchchf: {
        name: 'SOON.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Sonova Holding AG',
        minStartDate: '2015-08-07',
        minStartDateDaily: '2011-01-01'
    },
    soybeancmdusx: {
        name: 'SOYBEAN.CMD/USX',
        group: 'CMD_AGRICULTURAL',
        decimalFactor: 1000,
        description: 'Soybean',
        minStartDate: '2017-12-01',
        minStartDateDaily: '2017-01-01'
    },
    srenchchf: {
        name: 'SREN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Swiss Re AG',
        minStartDate: '2015-08-06',
        minStartDateDaily: '2011-01-01'
    },
    ubsgchchf: {
        name: 'UBSG.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'UBS Group AG',
        minStartDate: '2015-06-15',
        minStartDateDaily: '2014-01-01'
    },
    uhrchchf: {
        name: 'UHR.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Swatch Group AG/The',
        minStartDate: '2015-08-07',
        minStartDateDaily: '2011-01-01'
    },
    ussc2000idxusd: {
        name: 'USSC2000.IDX/USD',
        group: 'IDX_AMERICA',
        decimalFactor: 1000,
        description: 'US Small Cap 2000',
        minStartDate: '2018-08-08',
        minStartDateDaily: '2018-01-01'
    },
    ustbondtrusd: {
        name: 'USTBOND.TR/USD',
        group: 'BND_CFD',
        decimalFactor: 1000,
        description: 'US T-Bond',
        minStartDate: '2018-01-04',
        minStartDateDaily: '2017-01-01'
    },
    zurnchchf: {
        name: 'ZURN.CH/CHF',
        group: 'Switzerland',
        decimalFactor: 1000,
        description: 'Zurich Insurance Group AG',
        minStartDate: '2015-08-07',
        minStartDateDaily: '2011-01-01'
    }
};

function applyDateLimits(date, min, max) {
    let adjustedDate;
    if (date < max) {
        adjustedDate = date < min ? min : date;
    }
    else {
        adjustedDate = max;
    }
    return adjustedDate;
}
function normaliseDates({ instrument, startDate, endDate, timeframe, utcOffset }) {
    const [parsedFromDate, parsedToDate] = [startDate, endDate]
        .map(d => getUTCDateFromString(d) || new Date())
        .sort((a, b) => +a - +b);
    const { minStartDate, minStartDateDaily } = instrumentMetaData[instrument];
    const minIsoDate = timeframe === exports.Timeframe.d1 || timeframe === exports.Timeframe.mn1 ? minStartDateDaily : minStartDate;
    const minFromIsoDate = `${minIsoDate}:00:00:00.000Z`;
    let minFromDate = new Date(minFromIsoDate);
    let maxToDate = new Date();
    if (utcOffset) {
        parsedFromDate.setUTCMinutes(parsedFromDate.getUTCMinutes() + utcOffset);
        parsedToDate.setUTCMinutes(parsedToDate.getUTCMinutes() + utcOffset);
    }
    let adjustedFromDate = applyDateLimits(parsedFromDate, minFromDate, maxToDate);
    let adjustedToDate = applyDateLimits(parsedToDate, minFromDate, maxToDate);
    return [adjustedFromDate, adjustedToDate];
}

const ranges = ['year', 'month', 'day', 'hour'];
const rangeInferMap = {
    mn1: ['year', 'month', 'day'],
    d1: ['year', 'month', 'day'],
    h1: ['month', 'day', 'hour'],
    m30: ['day', 'hour'],
    m15: ['day', 'hour'],
    m1: ['day', 'hour'],
    tick: ['hour']
};
function getLowerRange(range) {
    const lookupIndex = ranges.indexOf(range);
    return ranges[lookupIndex + 1];
}
function getClosestAvailableRange(timeframe, date) {
    const isCurrent = getIsCurrentObj(date);
    return rangeInferMap[timeframe].find(range => !isCurrent[range]);
}
function isCurrentRange(rangeType, date) {
    const { year, month, day } = getIsCurrentObj(date);
    return ((rangeType === 'year' && year) ||
        (rangeType === 'month' && month) ||
        (rangeType === 'day' && day));
}
const timeFromUrl = {
    day_1: exports.Timeframe.d1,
    hour_1: exports.Timeframe.h1,
    min_1: exports.Timeframe.m1,
    ticks: exports.Timeframe.tick
};
function getTimeframeFromUrl(url) {
    const [, match] = url.match(/_(day_1|hour_1|min_1|ticks).bi5$/) || [];
    return timeFromUrl[match];
}

function pad(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
function roundNum(value, decimal = 4) {
    return Number(value.toFixed(decimal));
}
function splitArrayInChunks(array, chunkSize) {
    if (chunkSize >= array.length) {
        return [array];
    }
    let result = [];
    for (let i = 0, n = array.length; i < n; i++) {
        const chunkIndex = Math.floor(i / chunkSize);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(array[i]);
    }
    return result;
}
function wait(ms) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, ms);
    });
}

// .../2019/BID_candles_day_1.bi5:          daily data per year
const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';
function getUrl(instrument, date, range, priceType) {
    const [yearPad, monthPad, dayPad, hourPad] = getYMDH(date).map(pad);
    let url = `${URL_ROOT}/${instrument.toUpperCase()}/${yearPad}/`;
    if (range === 'year') {
        url += `${priceType.toUpperCase()}_candles_day_1.bi5`;
    }
    else if (range === 'month') {
        url += `${monthPad}/${priceType.toUpperCase()}_candles_hour_1.bi5`;
    }
    else if (range === 'day') {
        url += `${monthPad}/${dayPad}/${priceType.toUpperCase()}_candles_min_1.bi5`;
    }
    else if (range === 'hour') {
        url += `${monthPad}/${dayPad}/${hourPad}h_ticks.bi5`;
    }
    return url;
}
function getConstructor(instrument, priceType, endDate) {
    return function construct(rangetype, startDate) {
        let dates = [];
        let tempStartDate = getStartOfUtc(startDate, rangetype);
        while (tempStartDate < endDate) {
            dates.push(tempStartDate);
            tempStartDate = getStartOfUtc(tempStartDate, rangetype, 1);
        }
        const result = dates.reduce((all, date, i, arr) => {
            const isLastItem = i === arr.length - 1;
            if (isLastItem && isCurrentRange(rangetype, date)) {
                const lowerRangeData = construct(getLowerRange(rangetype), date);
                all.push(...lowerRangeData);
            }
            else {
                const url = getUrl(instrument, date, rangetype, priceType);
                all.push(url);
            }
            return all;
        }, []);
        return result;
    };
}
function getDateLimit(startDate, endDate, timeframe) {
    const nowDate = new Date();
    const adjustedEndDate = endDate < nowDate ? endDate : nowDate;
    let dateLimit = adjustedEndDate;
    if (timeframe === exports.Timeframe.tick ||
        timeframe === exports.Timeframe.m1 ||
        timeframe === exports.Timeframe.m15 ||
        timeframe === exports.Timeframe.m30) {
        if (+endDate - +startDate <= 3600000) {
            dateLimit = getStartOfUtc(dateLimit, 'hour', 1);
        }
        else {
            dateLimit = getStartOfUtc(dateLimit, 'hour');
        }
    }
    else if (timeframe === exports.Timeframe.h1) {
        dateLimit = getStartOfUtc(dateLimit, 'hour');
    }
    else if (timeframe === exports.Timeframe.d1) {
        dateLimit = getStartOfUtc(dateLimit, 'day');
    }
    else if (timeframe === exports.Timeframe.mn1) {
        dateLimit = getStartOfUtc(dateLimit, 'month');
    }
    return dateLimit;
}
function generateUrls({ instrument, timeframe, priceType, startDate, endDate }) {
    const rangeType = getClosestAvailableRange(timeframe, startDate);
    const dateLimit = getDateLimit(startDate, endDate, timeframe);
    const constructUrls = getConstructor(instrument, priceType, dateLimit);
    const urls = constructUrls(rangeType, startDate);
    return urls;
}

class BufferFetcher {
    constructor({ batchSize = 10, pauseBetweenBatchesMs = 1000, useCache = false, notifyOnItemFetchFn } = {}) {
        this.batchSize = batchSize;
        this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
        this.useCache = useCache;
        this.notifyOnItemFetchFn = notifyOnItemFetchFn;
    }
    async fetchBufferedData(urls) {
        return await Promise.all(urls.map(async (url) => {
            const data = await fetch(url);
            const buffer = await data.buffer();
            this.notifyOnItemFetchFn && this.notifyOnItemFetchFn(url);
            return { url, buffer };
        }));
    }
    async fetch(urls) {
        const fetchedObjects = [];
        const batches = splitArrayInChunks(urls, this.batchSize);
        for (let i = 0, n = batches.length; i < n; i++) {
            const data = await this.fetchBufferedData(batches[i]);
            fetchedObjects.push(data);
            if (n > 1) {
                await wait(this.pauseBetweenBatchesMs);
            }
        }
        const bufferObjects = []
            .concat(...fetchedObjects)
            .filter(({ buffer }) => buffer.length > 0);
        return bufferObjects;
    }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lzmajs = require('lzma-purejs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const struct = require('python-struct');
function getStructFormat(timeframe) {
    return timeframe === exports.Timeframe.tick ? '>3i2f' : '>5i1f';
}
function decompress(input) {
    const { buffer, timeframe } = input;
    if (buffer.length === 0) {
        return [];
    }
    const result = [];
    const format = getStructFormat(timeframe);
    const decompressedBuffer = lzmajs.decompressFile(buffer);
    const step = struct.sizeOf(format);
    for (let i = 0, n = decompressedBuffer.length; i < n; i += step) {
        const chunk = decompressedBuffer.slice(i, i + step);
        const unpacked = struct.unpack(format, chunk);
        result.push(unpacked);
    }
    return result;
}

function getNormaliser(timeframe, startMs, decimalFactor, volumes) {
    if (timeframe === exports.Timeframe.tick) {
        return function (values) {
            const [ms, ask, bid, askVolume, bidVolume] = values;
            return [
                ms + startMs,
                ask / decimalFactor,
                bid / decimalFactor,
                ...(volumes ? [askVolume, bidVolume].map(a => roundNum(a)) : [])
            ];
        };
    }
    else {
        return function (values) {
            const [sec, open, close, low, high, volume] = values;
            return [
                sec * 1000 + startMs,
                open / decimalFactor,
                high / decimalFactor,
                low / decimalFactor,
                close / decimalFactor,
                ...(volumes ? [roundNum(volume)] : [])
            ];
        };
    }
}
function normalise(input) {
    const { data, timeframe, startTs, instrument, volumes } = input;
    const { decimalFactor } = instrumentMetaData[instrument];
    const normaliserFn = getNormaliser(timeframe, startTs, decimalFactor, volumes);
    const normalizedData = data.map(normaliserFn);
    return normalizedData;
}

function getOHLC(input, filterFlats = true) {
    const startMs = input[0][0];
    if (filterFlats) {
        // ignoring flat-volumed (0 volume) entries
        input = input.filter(data => data[5] !== 0);
    }
    if (input.length === 0) {
        return [];
    }
    let open = input[0][1];
    let high = input[0][2];
    let low = input[0][3];
    let close = input[input.length - 1][4];
    let volume = input[0][5];
    for (let i = 1, n = input.length; i < n; i++) {
        const [, , h, l, , v] = input[i];
        if (h > high) {
            high = h;
        }
        if (l < low) {
            low = l;
        }
        if (v !== undefined) {
            volume += v;
        }
    }
    const ohlc = [startMs, open, high, low, close];
    if (volume !== undefined) {
        ohlc.push(roundNum(volume));
    }
    return ohlc;
}
function breakdownByInterval(input, interval) {
    const dataByInterval = [];
    for (let i = 0, n = input.length; i < n; i++) {
        const data = input[i];
        const date = new Date(data[0]);
        const intervalValue = interval === 'minute' ? date.getUTCMinutes() : date.getUTCMonth();
        if (!dataByInterval[intervalValue]) {
            dataByInterval[intervalValue] = [];
        }
        dataByInterval[intervalValue].push(data);
    }
    return dataByInterval;
}
function tickOHLC(input, priceType) {
    // timestamp, askPrice, bidPrice, askVolume, bidVolume
    const date = new Date(input[0][0]);
    const minuteValue = date.getUTCMinutes();
    const openPrice = priceType === 'ask' ? input[0][1] : input[0][2];
    const closePrice = priceType === 'ask' ? input[input.length - 1][1] : input[input.length - 1][2];
    const initialVolume = priceType === 'ask' ? input[0][3] : input[0][4];
    const startTs = date.setUTCMinutes(minuteValue, 0, 0);
    const open = openPrice;
    let high = openPrice;
    let low = openPrice;
    const close = closePrice;
    let volume = initialVolume;
    for (let i = 1, n = input.length; i < n; i++) {
        const [, askPrice, bidPrice, askVolume, bidVolume] = input[i];
        const targetPrice = priceType === 'ask' ? askPrice : bidPrice;
        const targetVolume = priceType === 'ask' ? askVolume : bidVolume;
        if (targetPrice > high) {
            high = targetPrice;
        }
        if (targetPrice < low) {
            low = targetPrice;
        }
        if (targetVolume !== undefined) {
            volume += targetVolume;
        }
    }
    const ohlc = [startTs, open, high, low, close];
    if (volume !== undefined) {
        ohlc.push(roundNum(volume));
    }
    return ohlc;
}
function getMinuteOHLCfromTicks(input, priceType) {
    const breakdown = breakdownByInterval(input, 'minute');
    const ohlc = breakdown.map(data => tickOHLC(data, priceType));
    return ohlc;
}
function getMonthlyOHLCfromDays(input) {
    const breakdown = breakdownByInterval(input, 'month');
    const ohlc = breakdown.map(data => getOHLC(data));
    return ohlc;
}

function aggregate({ data, fromTimeframe, toTimeframe, priceType, ignoreFlats }) {
    if (fromTimeframe === exports.Timeframe.tick && toTimeframe === exports.Timeframe.tick) {
        return data;
    }
    if (fromTimeframe === exports.Timeframe.m1 && toTimeframe === exports.Timeframe.m1) {
        if (ignoreFlats) {
            return data.filter(item => item[5] !== 0);
        }
        return data;
    }
    if (fromTimeframe === toTimeframe) {
        return splitArrayInChunks(data, 1).map(d => getOHLC(d, ignoreFlats));
    }
    else {
        if (fromTimeframe === exports.Timeframe.tick) {
            const minuteOHLC = getMinuteOHLCfromTicks(data, priceType);
            if (toTimeframe === exports.Timeframe.m1) {
                return minuteOHLC;
            }
            if (toTimeframe === exports.Timeframe.m15) {
                return splitArrayInChunks(minuteOHLC, 15).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.m30) {
                return splitArrayInChunks(minuteOHLC, 30).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.h1) {
                return [minuteOHLC].map(d => getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === exports.Timeframe.m1) {
            if (toTimeframe === exports.Timeframe.m15) {
                return splitArrayInChunks(data, 15).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.m30) {
                return splitArrayInChunks(data, 30).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.h1) {
                return splitArrayInChunks(data, 60).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.d1) {
                return [data].map(d => getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === exports.Timeframe.h1) {
            if (toTimeframe === exports.Timeframe.d1) {
                return splitArrayInChunks(data, 24).map(d => getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === exports.Timeframe.mn1) {
                return [data].map(d => getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === exports.Timeframe.d1) {
            if (toTimeframe === exports.Timeframe.mn1) {
                const monthlyOHLC = getMonthlyOHLCfromDays(data);
                return monthlyOHLC;
            }
        }
    }
    return [];
}

function processData({ instrument, requestedTimeframe, bufferObjects, priceType, volumes, ignoreFlats }) {
    const result = bufferObjects.map(({ url, buffer }) => {
        const startDate = getDateFromUrl(url);
        const urlTimeframe = getTimeframeFromUrl(url);
        const decompressedData = decompress({ buffer, timeframe: urlTimeframe });
        const normalisedData = normalise({
            data: decompressedData,
            timeframe: urlTimeframe,
            startTs: +startDate,
            instrument,
            volumes
        });
        const aggregatedData = aggregate({
            data: normalisedData,
            fromTimeframe: urlTimeframe,
            toTimeframe: requestedTimeframe,
            priceType,
            ignoreFlats
        });
        return aggregatedData;
    });
    return [].concat(...result);
}

const headers = ['timestamp', 'open', 'high', 'low', 'close', 'volume'];
const tickHeaders = ['timestamp', 'askPrice', 'bidPrice', 'askVolume', 'bidVolume'];
function formatOutput({ processedData, format, timeframe }) {
    const bodyHeaders = timeframe === exports.Timeframe.tick ? tickHeaders : headers;
    if (format === exports.Format.json) {
        const data = processedData.map(arr => {
            return arr.reduce((all, item, i) => {
                const name = bodyHeaders[i];
                all[name] = item;
                return all;
            }, {});
        });
        return data;
    }
    if (format === exports.Format.csv) {
        const csvHeaders = bodyHeaders.filter((_, i) => processedData[0][i] !== undefined);
        const csv = [csvHeaders, ...processedData].map(arr => arr.join(',')).join('\n');
        return csv;
    }
    return processedData;
}

exports.BufferFetcher = BufferFetcher;
exports.URL_ROOT = URL_ROOT;
exports.formatOutput = formatOutput;
exports.generateUrls = generateUrls;
exports.normaliseDates = normaliseDates;
exports.processData = processData;
exports.schema = schema;
exports.validateConfig = validateConfig;
exports.validator = validator;
