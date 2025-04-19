"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJobs = void 0;
const queue_1 = require("./queue");
function addJobs(token, submissionId) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = { token, submissionId };
        yield queue_1.myQueue.add("judge", payload);
        console.log("job added");
    });
}
exports.addJobs = addJobs;
