"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("../utils/date");
const ranges = ['year', 'month', 'day', 'hour'];
const rangeInferMap = {
    mn1: ['year', 'month', 'day'],
    d1: ['year', 'month', 'day'],
    h1: ['month', 'day', 'hour'],
    m30: ['day', 'hour'],
    m1: ['day', 'hour'],
    tick: ['hour']
};
function getLowerRange(range) {
    const lookupIndex = ranges.indexOf(range);
    return ranges[lookupIndex + 1];
}
exports.getLowerRange = getLowerRange;
function getClosestAvailableRange(timeframe, date) {
    const isCurrent = date_1.getIsCurrentObj(date);
    return rangeInferMap[timeframe].find(range => !isCurrent[range]);
}
exports.getClosestAvailableRange = getClosestAvailableRange;
function isCurrentRange(rangeType, date) {
    const { year, month, day } = date_1.getIsCurrentObj(date);
    return ((rangeType === 'year' && year) ||
        (rangeType === 'month' && month) ||
        (rangeType === 'day' && day));
}
exports.isCurrentRange = isCurrentRange;
const timeFromUrl = {
    day_1: 'd1',
    hour_1: 'h1',
    min_1: 'm1',
    ticks: 'tick'
};
function getTimeframeFromUrl(url) {
    const [, match] = url.match(/_(day_1|hour_1|min_1|ticks).bi5$/);
    return timeFromUrl[match];
}
exports.getTimeframeFromUrl = getTimeframeFromUrl;
