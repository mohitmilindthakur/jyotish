const getValidatedDegree = (degree) => {
    if (!(typeof degree === 'number' || typeof degree === 'string')) throw new TypeError(`Degree should be either of the type Number or String. Given ${degree.constructor.name}`);
        
    if(isNaN(Number(degree))) throw new TypeError(`Degree should a valid Number in either Number data type or Number String. Given degree is Not A Number After Converting To Number Data Type. Entered ${degree}`);

    return Number(degree);
};

const getValidatedDMS = (DMS) => {
    if (!(DMS.length >= 1 && DMS.length <= 3)) throw new Error(`Array should be of length in between 1 and 3. Entered the Array of the size ${DMS.length}`);
    DMS = DMS.map(unit => getValidatedDegree(unit));
    for (let i = DMS.length; i < 3; i++) {DMS.push(0)};
    return DMS;
};

const getBoundDegree = (degree) => {
    degree = getValidatedDegree(degree);
    if (degree >= 0 && degree < 360) return degree;
    if (degree >= 360) return getBoundDegree(degree -360);
    if (degree < 0) return getBoundDegree(degree + 360);
};

const convertDMSToSec = (DMS) => {
    DMS = getValidatedDMS(DMS);

    return (DMS[0] * 3600 + DMS[1] * 60 + DMS[2]);
};

const convertDegreeToDMS = (degree) => {
    degree = getValidatedDegree(degree);

    let D = parseInt(degree);
    let M = ((degree - D) * 60).toFixed(5);
    let S = parseInt((M - parseInt(M)) * 60);

    return [D, parseInt(M), S];
};

module.exports = {
    getValidatedDegree,
    getValidatedDMS,
    getBoundDegree,
    convertDMSToSec,
    convertDegreeToDMS
}