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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producer_1 = require("./producer");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/judge0/submit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, submissionId } = req.body;
    console.log("submit");
    try {
        yield (0, producer_1.addJobs)(token, submissionId);
        res.status(200).json({ message: "job added" });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(500);
        return;
    }
}));
app.listen(5000, () => {
    console.log("server running on 5000.");
});
