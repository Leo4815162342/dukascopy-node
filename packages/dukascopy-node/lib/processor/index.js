"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("../utils/date");
const range_1 = require("../utils/range");
const decompressor_1 = require("../decompressor");
const data_normaliser_1 = require("../data-normaliser");
const aggregator_1 = require("../aggregator");
function processData({ instrument, requestedTimeframe, bufferObjects, priceType, volumes, ignoreFlats }) {
    const result = bufferObjects.map(({ url, buffer }) => {
        const startDate = date_1.getDateFromUrl(url);
        const urlTimeframe = range_1.getTimeframeFromUrl(url);
        const decompressedData = decompressor_1.decompress({ buffer, timeframe: urlTimeframe });
        const normalisedData = data_normaliser_1.normalise({
            data: decompressedData,
            timeframe: urlTimeframe,
            startTs: +startDate,
            instrument,
            volumes
        });
        const aggregatedData = aggregator_1.aggregate({
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
exports.processData = processData;
