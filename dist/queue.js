"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myQueue = void 0;
const bullmq_1 = require("bullmq");
exports.myQueue = new bullmq_1.Queue("judge0", {
    connection: {
        host: "localhost",
        port: 6379
    }
});
