"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instruments_1 = require("../config/instruments");
const date_1 = require("../utils/date");
function normaliseDates({ instrument, startDate, endDate, timeframe, utcOffset }) {
    const [parsedFromDate, parsedToDate] = [startDate, endDate]
        .map(d => date_1.getUTCDateFromString(d) || new Date())
        .sort((a, b) => +a - +b);
    const { minStartDate, minStartDateDaily } = instruments_1.instruments[instrument];
    const minIsoDate = timeframe === 'd1' || timeframe === 'mn1' ? minStartDateDaily : minStartDate;
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
exports.normaliseDates = normaliseDates;
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
