const getRashi = require('./../getRashi');



describe('Get Rashi', () => {

    it('throws error if no input is given', () => {
        expect(getRashi.bind({})).toThrow('Degree should be a valid Array or Number. Entered "undefined"');
    });

    it('calculates rashi in the reverse direction if negative degree is provided', () => {
        expect(getRashi(-5)).toBe('Pi');
        expect(getRashi([-5,0,0])).toBe('Pi');

        expect(getRashi(-350)).toBe('Ar');
        expect(getRashi([-350,0,0])).toBe('Ar');

        expect(getRashi(-370)).toBe('Pi');
        expect(getRashi(-500)).toBe('Sc');
    });

    it('calculates the exact proper rashi if degree more than 360', () => {
        expect(getRashi(360)).toBe('Ar');
        expect(getRashi([360,0,0])).toBe('Ar');

        expect(getRashi(500)).toBe('Le');
        expect(getRashi([500,0,0])).toBe('Le');
    });

    it('calculates the rashi when graha degree is given', () => {
        expect(getRashi(5)).toBe('Ar');
        expect(getRashi([5,0,0])).toBe('Ar');

        expect(getRashi(50)).toBe('Ta');
        expect(getRashi([50,0,0])).toBe('Ta');

        expect(getRashi(70)).toBe('Ge');
        expect(getRashi([70,0,0])).toBe('Ge');

        expect(getRashi(100)).toBe('Cn');
        expect(getRashi([100,0,0])).toBe('Cn');

        expect(getRashi(125)).toBe('Le');
        expect(getRashi([125,0,0])).toBe('Le');

        expect(getRashi(170)).toBe('Vi');
        expect(getRashi([170,0,0])).toBe('Vi');

        expect(getRashi(190)).toBe('Li');
        expect(getRashi([190,0,0])).toBe('Li');

        expect(getRashi(217)).toBe('Sc');
        expect(getRashi([217,0,0])).toBe('Sc');

        expect(getRashi(250)).toBe('Sg');
        expect(getRashi([250,0,0])).toBe('Sg');

        expect(getRashi(290)).toBe('Cp');
        expect(getRashi([290,0,0])).toBe('Cp');

        expect(getRashi(310)).toBe('Aq');
        expect(getRashi([310,0,0])).toBe('Aq');

        expect(getRashi(350)).toBe('Pi');
        expect(getRashi([350,0,0])).toBe('Pi');
    });

});