const getNakshatra = require('./../getNakshatra');



describe('getNakshatra', () => {

    it('returns a object with name and pada as keys when given degree', () => {
        expect(getNakshatra(55)).toEqual({name: 'Mrigashira', pada: 1});
    });
});