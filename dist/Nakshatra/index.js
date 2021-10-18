"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nakshatra = void 0;
var nakshatras_1 = __importDefault(require("./nakshatras"));
var degree_1 = require("../utils/degree");
var Nakshatra = /** @class */ (function () {
    function Nakshatra(input) {
        this.input = input;
        if (typeof input === 'number') {
            this.nakshatra = this.getNakshatraFromDegree(input);
        }
        else if (Array.isArray(input)) {
            this.nakshatra = this.getNakshatraFromDMS(input);
        }
    }
    Nakshatra.getNames = function () {
        return nakshatras_1.default;
    };
    Nakshatra.prototype.getNakshatra = function () {
        return this.nakshatra;
    };
    Nakshatra.prototype.getNakshatraFromDMS = function (DMS) {
        DMS[0] = degree_1.UtilsDegree.getBoundDegree(DMS[0]);
        var seconds = degree_1.UtilsDegree.convertDMSToSec(DMS);
        var absolutePada = seconds / 12000;
        var nakshatra = nakshatras_1.default[Math.floor(absolutePada / 4)];
        var pada = Math.floor(absolutePada % 4) + 1;
        return { name: nakshatra, pada: pada };
    };
    Nakshatra.prototype.getNakshatraFromDegree = function (degree) {
        var DMS = degree_1.UtilsDegree.convertDegreeToDMS(degree);
        return this.getNakshatraFromDMS(DMS);
    };
    return Nakshatra;
}());
exports.Nakshatra = Nakshatra;
