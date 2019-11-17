"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instruments_1 = require("../config/instruments");
const timeframes_1 = require("../config/timeframes");
const price_types_1 = require("../config/price-types");
const schema = {
    instrument: { type: 'string', enum: Object.keys(instruments_1.instruments), required: true },
    dates: {
        type: 'object',
        required: true,
        props: {
            from: [{ type: 'dateString', required: true }],
            to: [{ type: 'dateString', required: true }]
        }
    },
    timeframe: { type: 'string', enum: Object.keys(timeframes_1.timeframes), required: true },
    priceType: { type: 'string', enum: Object.keys(price_types_1.priceTypes), required: true },
    utcOffset: { type: 'number', integer: true, required: true },
    volumes: { type: 'boolean', required: true },
    ignoreFlats: { type: 'boolean', required: true }
};
exports.schema = schema;
