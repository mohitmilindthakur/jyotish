const {RASHIS} = require('./rashis');
const {getValidatedDegree, getValidatedDMS, getBoundDegree} = require('./../utils/degree');


function getRashiFromDMS(DMS) {
    DMS = getValidatedDMS(DMS);
    let degree = getValidatedDegree(DMS[0]);
    let rashiIndex = parseInt(getBoundDegree(degree) / 30);
    return RASHIS[rashiIndex];
};

function getRashiFromDegree(degree) {
    degree = getValidatedDegree(degree);
    let rashiIndex = parseInt(getBoundDegree(degree) / 30);
    return RASHIS[rashiIndex];
};

function getRashi(degree) {
    if (degree === undefined) throw new TypeError('Degree should be a valid Array or Number. Entered "undefined"');

    return (degree instanceof Array ? getRashiFromDMS(degree) : getRashiFromDegree(degree));
};

module.exports = getRashi;