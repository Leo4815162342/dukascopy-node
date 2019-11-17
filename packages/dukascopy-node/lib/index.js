"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_validator_1 = require("./config-validator");
const dates_normaliser_1 = require("./dates-normaliser");
const url_generator_1 = require("./url-generator");
const buffer_fetcher_1 = require("./buffer-fetcher");
const processor_1 = require("./processor");
const defaultConfig = {
    timeframe: 'd1',
    priceType: 'bid',
    utcOffset: 0,
    volumes: true,
    ignoreFlats: true
};
// TODO: rewrite as a class
// custom fetch method
// fetchoptions
// subscriptions?
// requestThrottling/debouncing
// exponential backoff
async function getHistoricRates(config) {
    const mergedConfig = Object.assign(Object.assign({}, defaultConfig), config);
    const { isValid, validationErrors } = config_validator_1.validateConfig(mergedConfig);
    if (!isValid) {
        throw { validationErrors };
    }
    const { instrument, dates: { from, to }, timeframe, priceType, volumes, utcOffset, ignoreFlats } = mergedConfig;
    const [startDate, endDate] = dates_normaliser_1.normaliseDates({
        instrument,
        startDate: from,
        endDate: to,
        timeframe,
        utcOffset
    });
    const urls = url_generator_1.generateUrls({ instrument, timeframe, priceType, startDate, endDate });
    const bufferFetcher = new buffer_fetcher_1.BuffetFetcher();
    const bufferredData = await bufferFetcher.fetch(urls);
    const processedData = processor_1.processData({
        instrument,
        requestedTimeframe: timeframe,
        bufferObjects: bufferredData,
        priceType,
        volumes,
        ignoreFlats
    });
    const [startDateMs, endDateMs] = [+startDate, +endDate];
    const filteredData = processedData.filter(([timestamp]) => timestamp && timestamp >= startDateMs && timestamp < endDateMs);
    return filteredData;
}
exports.getHistoricRates = getHistoricRates;
