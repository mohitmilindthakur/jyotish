const NAKSHATRAS = require('./nakshatras');
const {getValidatedDegree, getValidatedDMS, getBoundDegree, convertDegreeToDMS, convertDMSToSec} = require('./../utils/degree');


function getNakshatraFromDMS(DMS){
    DMS = getValidatedDMS(DMS);
    DMS[0] = getBoundDegree(DMS[0]);
    let seconds = convertDMSToSec(DMS);
    let absolutePada = seconds / 12000;
    let nakshatra = NAKSHATRAS[parseInt(absolutePada / 4)];
    let pada = parseInt(absolutePada % 4) + 1;

    return {name: nakshatra, pada};
}

function getNakshatraFromDegree(degree){
    degree = getValidatedDegree(degree);
    let DMS = convertDegreeToDMS(degree);
    return getNakshatraFromDMS(DMS);
}

module.exports = function(degree){
    if (degree === undefined) throw new TypeError('Degree should be a valid Array or Number. Entered "undefined"');

    return (degree instanceof Array ? getNakshatraFromDMS(degree) : getNakshatraFromDegree(degree));
};