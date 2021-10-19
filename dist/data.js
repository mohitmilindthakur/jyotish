"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var bd = {
    year: 2020,
    month: 7,
    date: 25,
    hour: 5,
    min: 55,
    sec: 55,
    timezone: 5.5,
    lat: 50,
    lng: 50,
};
var kundali = new index_1.Kundali(bd);
// console.log(kundali.grahas.getAllGrahaPositions());
console.log(kundali.grahas.getBhavas());
