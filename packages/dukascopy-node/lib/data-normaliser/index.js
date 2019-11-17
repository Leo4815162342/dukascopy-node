"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instruments_1 = require("../config/instruments");
const general_1 = require("./../utils/general");
function normalise(input) {
    const { data, timeframe, startTs, instrument, volumes } = input;
    const { decimalFactor } = instruments_1.instruments[instrument];
    const normaliserFn = getNormaliser(timeframe, startTs, decimalFactor, volumes);
    const normalizedData = data.map(normaliserFn);
    return normalizedData;
}
exports.normalise = normalise;
function getNormaliser(timeframe, startMs, decimalFactor, volumes) {
    if (timeframe === 'tick') {
        return function (values) {
            const [ms, ask, bid, askVolume, bidVolume] = values;
            return [
                ms + startMs,
                ask / decimalFactor,
                bid / decimalFactor,
                ...(volumes ? [askVolume, bidVolume].map(a => general_1.roundNum(a)) : [])
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
                ...(volumes ? [general_1.roundNum(volume)] : [])
            ];
        };
    }
}
