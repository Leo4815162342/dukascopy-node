"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pad(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
exports.pad = pad;
function roundNum(value, decimal = 4) {
    return Number(value.toFixed(decimal));
}
exports.roundNum = roundNum;
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
exports.splitArrayInChunks = splitArrayInChunks;
function wait(ms) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, ms);
    });
}
exports.wait = wait;
