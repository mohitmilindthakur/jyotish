"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kundali = void 0;
var Grahas_1 = require("../Grahas");
var Kundali = /** @class */ (function () {
    function Kundali(bd) {
        this._grahas = new Grahas_1.Grahas(bd);
    }
    Object.defineProperty(Kundali.prototype, "grahas", {
        get: function () {
            return this._grahas;
        },
        enumerable: false,
        configurable: true
    });
    return Kundali;
}());
exports.Kundali = Kundali;
