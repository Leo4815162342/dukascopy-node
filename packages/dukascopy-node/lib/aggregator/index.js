"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ohlc_1 = require("./ohlc");
const general_1 = require("../utils/general");
function aggregate({ data, fromTimeframe, toTimeframe, priceType, ignoreFlats }) {
    if ((fromTimeframe === 'tick' && toTimeframe === 'tick') ||
        (fromTimeframe === 'm1' && toTimeframe === 'm1')) {
        return data;
    }
    if (fromTimeframe === toTimeframe) {
        return general_1.splitArrayInChunks(data, 1).map(d => ohlc_1.getOHLC(d, ignoreFlats));
    }
    else {
        if (fromTimeframe === 'tick') {
            const minuteOHLC = ohlc_1.getMinuteOHLCfromTicks(data, priceType);
            if (toTimeframe === 'm1') {
                return minuteOHLC;
            }
            if (toTimeframe === 'm30') {
                return general_1.splitArrayInChunks(minuteOHLC, 30).map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === 'h1') {
                return [minuteOHLC].map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === 'm1') {
            if (toTimeframe === 'm30') {
                return general_1.splitArrayInChunks(data, 30).map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === 'h1') {
                return general_1.splitArrayInChunks(data, 60).map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === 'd1') {
                return [data].map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === 'h1') {
            if (toTimeframe === 'd1') {
                return general_1.splitArrayInChunks(data, 24).map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
            if (toTimeframe === 'mn1') {
                return [data].map(d => ohlc_1.getOHLC(d, ignoreFlats));
            }
        }
        if (fromTimeframe === 'd1') {
            if (toTimeframe === 'mn1') {
                const monthlyOHLC = ohlc_1.getMonthlyOHLCfromDays(data);
                return monthlyOHLC;
            }
        }
    }
}
exports.aggregate = aggregate;
