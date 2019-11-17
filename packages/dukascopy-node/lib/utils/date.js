"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUTCDateFromString(date) {
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})(?:T| )?(\d{2})?:?(\d{2})?:?(?:\d{2})?:?(?:.\d{3}Z)?$/);
    if (!match) {
        return false;
    }
    const [_, year, month, day, hour, minute] = match;
    const utcIsoString = `${year}-${month}-${day}T${hour || '00'}:${minute || '00'}:00.000Z`;
    const parsedDate = new Date(utcIsoString);
    const isValid = !isNaN(+parsedDate) && parsedDate.toISOString() === utcIsoString;
    return isValid ? parsedDate : false;
}
exports.getUTCDateFromString = getUTCDateFromString;
function getYMDH(date) {
    const [year, month, day, hours] = [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours()
    ];
    return [year, month, day, hours];
}
exports.getYMDH = getYMDH;
function getStartOfUtc(date, period, offset = 0) {
    const [year, month, day, hours] = getYMDH(date);
    let startOfUtc;
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
exports.getStartOfUtc = getStartOfUtc;
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
exports.getIsCurrentObj = getIsCurrentObj;
function getDateFromUrl(url) {
    const [, year, month, day, hour] = url
        .match(/(\d{4})\/(\d{2})?\/?(\d{2})?\/?(\d{2})?/)
        .map(n => Number(n) || 0);
    const utcDate = new Date(Date.UTC(year, month, day || 1, hour));
    return utcDate;
}
exports.getDateFromUrl = getDateFromUrl;
