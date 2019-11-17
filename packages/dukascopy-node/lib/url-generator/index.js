"use strict";
// .../2019/BID_candles_day_1.bi5:          daily data per year
// .../2019/01/BID_candles_hour_1.bi5:      hourly data per month
// .../2019/01/01/BID_candles_min_1.bi5:    minute data per day
// .../2019/01/01/01h_ticks_1.bi5:  tick data per hour
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("../utils/range");
const date_1 = require("../utils/date");
const general_1 = require("../utils/general");
const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';
exports.URL_ROOT = URL_ROOT;
function getUrl(instrument, date, range, priceType) {
    const [yearPad, monthPad, dayPad, hourPad] = date_1.getYMDH(date).map(general_1.pad);
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
        let tempStartDate = date_1.getStartOfUtc(startDate, rangetype);
        while (tempStartDate < endDate) {
            dates.push(tempStartDate);
            tempStartDate = date_1.getStartOfUtc(tempStartDate, rangetype, 1);
        }
        const result = dates.reduce((all, date, i, arr) => {
            const isLastItem = i === arr.length - 1;
            if (isLastItem && range_1.isCurrentRange(rangetype, date)) {
                const lowerRangeData = construct(range_1.getLowerRange(rangetype), date);
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
    if (timeframe === 'tick' || timeframe === 'm1' || timeframe === 'm30') {
        if (+endDate - +startDate <= 3600000) {
            dateLimit = date_1.getStartOfUtc(dateLimit, 'hour', 1);
        }
        else {
            dateLimit = date_1.getStartOfUtc(dateLimit, 'hour');
        }
    }
    else if (timeframe === 'h1') {
        dateLimit = date_1.getStartOfUtc(dateLimit, 'hour');
    }
    else if (timeframe === 'd1') {
        dateLimit = date_1.getStartOfUtc(dateLimit, 'day');
    }
    else if (timeframe === 'mn1') {
        dateLimit = date_1.getStartOfUtc(dateLimit, 'month');
    }
    return dateLimit;
}
function generateUrls({ instrument, timeframe, priceType, startDate, endDate }) {
    const rangeType = range_1.getClosestAvailableRange(timeframe, startDate);
    const dateLimit = getDateLimit(startDate, endDate, timeframe);
    const constructUrls = getConstructor(instrument, priceType, dateLimit);
    const urls = constructUrls(rangeType, startDate);
    return urls;
}
exports.generateUrls = generateUrls;
