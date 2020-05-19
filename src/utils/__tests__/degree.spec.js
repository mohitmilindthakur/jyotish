const {getValidatedDegree, getValidatedDMS, getBoundDegree} = require('./../degree');



describe('DEGREE UTILS', () => {

    describe('getValidatedDegree', () => {

        it('throws error if input is not of type Number or String', () => {
            expect(getValidatedDegree.bind({}, {})).toThrow('Degree should be either of the type Number or String. Given Object');
        });

        it('throws error if the Number String is NaN', () => {
            expect(getValidatedDegree.bind({}, 'abcde')).toThrow('Degree should a valid Number in either Number data type or Number String. Given degree is Not A Number After Converting To Number Data Type. Entered abcde');
        });

        it('always returns a number from the function if correct input is given', () => {
            expect(getValidatedDegree(5)).toBe(5);
            expect(getValidatedDegree('5')).toBe(5);
        });

    });

    describe('getValidatedDMS', () => {

        it('throws error if the input is not of size between 1 and 3', () => {
            expect(getValidatedDMS.bind({}, [1,2,3,4,5])).toThrow('Array should be of length in between 1 and 3. Entered the Array of the size 5');
            expect(getValidatedDMS.bind({}, [])).toThrow('Array should be of length in between 1 and 3. Entered the Array of the size 0');
        });

        it('always returns an array of 3 length', () => {
            expect(getValidatedDMS([5]).length).toBe(3);
            expect(getValidatedDMS([5,1]).length).toBe(3);
            expect(getValidatedDMS([5,1,1]).length).toBe(3);
        });

        it('has every element in the array of number type', () => {
            getValidatedDMS(['5']).forEach(element => expect(typeof element).toBe('number'));
            getValidatedDMS([5, '1', '1']).forEach(element => expect(typeof element).toBe('number'));
        });

        it('returns the correct elements in the array', () => {
            expect(getValidatedDMS([5,1,1])).toEqual([5,1,1]);
            expect(getValidatedDMS(['5',1,1])).toEqual([5,1,1]);
            expect(getValidatedDMS([5])).toEqual([5,0,0]);
            expect(getValidatedDMS([5,1])).toEqual([5,1,0]);
            expect(getValidatedDMS(['5', 55005, '55555'])).toEqual([5,55005,55555]);
        });
    });

    describe('getBoundDegree', () => {

        it('throws error if the input is not a number is the input', () => {
            expect(getBoundDegree.bind({}, 'abcde')).toThrow('Degree should a valid Number in either Number data type or Number String. Given degree is Not A Number After Converting To Number Data Type. Entered abcde');
        });

        it('throws error if the input is not the correct data type', () => {
            expect(getBoundDegree.bind({}, [5])).toThrow('Degree should be either of the type Number or String. Given Array');
        });

        it('returns the same degree as input if between 0 and 360', () => {
            expect(getBoundDegree(50)).toBe(50);
            expect(getBoundDegree('50')).toBe(50);
        });

        it('returns the correct degree if degree is more than 360', () => {
            expect(getBoundDegree(500)).toBe(140);
        });

        it('return the correct degree if the degree is less than 0', () => {
            expect(getBoundDegree(-5)).toBe(355);
        })
    })
})