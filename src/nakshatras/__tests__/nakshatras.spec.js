const NAKSHATRAS = require('./../nakshatras');



describe('NAKSHTRAS', () => {

    it('NAKSHATRAS is a array of length of 27', () => {
        expect(NAKSHATRAS).toHaveLength(27);
    });
});