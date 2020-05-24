const getGrahasPosition = require('./../grahasPosition');
const sampleData = require('./../../utils/sampleData');


let {birthDetails} = sampleData;

describe('grahaPositions', () => {

    // ERROR HANDLING DONE BY THE BIRTHDATA UTILS

    it('gets the grahas position correctly when input is given', () => {
        expect(getGrahasPosition(birthDetails)).toEqual(sampleData.grahasPosition);
    });
})