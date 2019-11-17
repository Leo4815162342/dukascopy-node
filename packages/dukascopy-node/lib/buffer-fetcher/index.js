"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const general_1 = require("../utils/general");
const node_fetch_1 = __importDefault(require("node-fetch"));
class BuffetFetcher {
    constructor({ batchSize = 10, batchPauseMs = 1000, notifyOnItemFetchFn } = {}) {
        this.batchSize = batchSize;
        this.batchPauseMs = batchPauseMs;
        this.notifyOnItemFetchFn = notifyOnItemFetchFn;
    }
    async fetchBufferedData(urls) {
        return await Promise.all(urls.map(async (url) => {
            const data = await node_fetch_1.default(url);
            const buffer = await data.buffer();
            this.notifyOnItemFetchFn && this.notifyOnItemFetchFn(url);
            return { url, buffer };
        }));
    }
    async fetch(urls) {
        const fetchedObjects = [];
        const batches = general_1.splitArrayInChunks(urls, this.batchSize);
        for (let i = 0, n = batches.length; i < n; i++) {
            const data = await this.fetchBufferedData(batches[i]);
            fetchedObjects.push(data);
            if (n > 1) {
                await general_1.wait(this.batchPauseMs);
            }
        }
        return [].concat(...fetchedObjects);
    }
}
exports.BuffetFetcher = BuffetFetcher;
