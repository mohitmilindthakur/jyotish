"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grahas = void 0;
var Graha_1 = require("./Graha");
var SE_GRAHAS_1 = __importDefault(require("./SE_GRAHAS"));
var swisseph = __importStar(require("swisseph"));
var Nakshatra_1 = require("../Nakshatra");
var Rashi_1 = require("../Rashi");
var lodash_1 = __importDefault(require("lodash"));
var Grahas = /** @class */ (function () {
    function Grahas(bd, settings) {
        this.bd = bd;
        if (!settings) {
            settings = {
                zodiacType: 'S',
                ayanamsha: 1,
                houseType: 'E',
            };
        }
        var z = settings.zodiacType || 'S';
        var ay = settings.ayanamsha || 1;
        var h = settings.houseType || 'E';
        if (z === 'S') {
            swisseph.swe_set_sid_mode(ay, 0, 0);
        }
        this.LaDegree = 0;
        this.jd_et = 0;
        this.grahas = [];
        this.calculateJdEt();
        this.calculateLagna(bd.lat, bd.lng, h);
        this.calculateGrahaPositions();
    }
    // A METHOD TO CALCULATE JULIAN DAY IN ET
    Grahas.prototype.calculateJdEt = function () {
        // GET UTC FROM LOCAL TIME
        var utc = swisseph.swe_utc_time_zone(this.bd.year, this.bd.month, this.bd.date, this.bd.hour, this.bd.min, this.bd.sec, this.bd.timezone);
        // GET JULIAN DAY FROM UTC
        var julian = swisseph.swe_utc_to_jd(utc.year, utc.month, utc.day, utc.hour, utc.minute, utc.second, swisseph.SE_GREG_CAL);
        if ('julianDayUT' in julian) {
            this.jd_et = (julian && julian.julianDayUT) || 0;
        }
    };
    Grahas.prototype.calculateLagna = function (lat, lng, lagna_type) {
        var Houses = swisseph.swe_houses_ex(this.jd_et, swisseph.SEFLG_SIDEREAL, lat, lng, lagna_type);
        if ('ascendant' in Houses) {
            this.LaDegree = Houses.ascendant;
        }
        // return [La, Houses.house];
    };
    Grahas.prototype.getBoundDegree = function (degree) {
        if (degree >= 0 && degree < 360)
            return degree;
        if (degree >= 360)
            return this.getBoundDegree(degree - 360);
        if (degree < 0)
            return this.getBoundDegree(degree + 360);
        return 0;
    };
    Grahas.prototype.getBhavaOfGraha = function (degree) {
        var relativeDegree = this.getBoundDegree(degree - this.LaDegree);
        return Math.floor(relativeDegree / 30) + 1;
    };
    // A METHOD TO CALUCLATE GRAHA POSITIONS
    Grahas.prototype.calculateGrahaPositions = function () {
        var _this = this;
        var flag = swisseph.SEFLG_SPEED;
        flag += swisseph.SEFLG_SIDEREAL;
        Object.keys(SE_GRAHAS_1.default).forEach(function (graha) {
            var g = swisseph.swe_calc_ut(_this.jd_et, SE_GRAHAS_1.default[graha], flag);
            if ('longitude' in g) {
                var bhava = _this.getBhavaOfGraha(g.longitude);
                var nakshatra = new Nakshatra_1.Nakshatra(g.longitude).getNakshatra();
                var rashi = new Rashi_1.Rashi(g.longitude).getRashi();
                var isRetrograde = g.longitudeSpeed < 0 ? true : false;
                var grahaObj = new Graha_1.Graha(g.latitude, g.longitude, bhava, nakshatra, rashi, isRetrograde, graha, SE_GRAHAS_1.default[graha]);
                _this.grahas.push(grahaObj);
            }
        });
    };
    Grahas.prototype.getAllGrahaPositions = function () {
        var grahasObj = {};
        this.grahas.forEach(function (g) {
            grahasObj[g.graha] = g;
        });
        return grahasObj;
    };
    Grahas.prototype.getBhavas = function () {
        var bhavas = [];
        var grahasByBhava = lodash_1.default.groupBy(this.grahas, 'bhava');
        for (var i = 1; i <= 12; i++) {
            if (grahasByBhava.hasOwnProperty(String(i))) {
                bhavas.push(grahasByBhava[String(i)]);
            }
            else {
                bhavas.push([]);
            }
        }
        return bhavas;
    };
    return Grahas;
}());
exports.Grahas = Grahas;
