"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rashi = void 0;
var rashis_1 = __importDefault(require("./rashis"));
var degree_1 = require("../utils/degree");
var Rashi = /** @class */ (function () {
    function Rashi(input) {
        if (typeof input === 'number') {
            this.rashi = this.getRashiFromDegree(input);
        }
        else if (Array.isArray(input)) {
            this.rashi = this.getRashiFromDMS(input);
        }
    }
    Rashi.getNames = function () {
        return rashis_1.default;
    };
    Rashi.prototype.getRashi = function () {
        return this.rashi;
    };
    Rashi.prototype.getRashiFromDMS = function (DMS) {
        var rashiIndex = Math.floor(degree_1.UtilsDegree.getBoundDegree(DMS[0]) / 30);
        return { name: rashis_1.default[rashiIndex] };
    };
    Rashi.prototype.getRashiFromDegree = function (degree) {
        var rashiIndex = Math.floor(degree_1.UtilsDegree.getBoundDegree(degree) / 30);
        return { name: rashis_1.default[rashiIndex] };
    };
    return Rashi;
}());
exports.Rashi = Rashi;
