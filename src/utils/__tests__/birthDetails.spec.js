const {getValidatedBirthDetails} = require('./../birthDetails');
const sampleBirthDetails = require('./../sampleData').birthDetails;
const correctBirthDetailsExpanded = require('./../sampleData').birthDetailsExpanded;


describe('BIRTH DETAILS UTILITY FUNCTIONS TESTING', () => {

    it('throws error if there is no birthDetails as input to the function', () => {
        expect(getValidatedBirthDetails.bind({})).toThrow('Please enter birthDetails as the first argument. Entered undefined');
    });

    it('throws error if the given birthDetails is not of type object', () => {
        expect(getValidatedBirthDetails.bind({}, 5)).toThrow('Data type of the birthDetails has to be object. Entered Number');

        expect(getValidatedBirthDetails.bind({}, [5])).toThrow('Data type of the birthDetails has to be object. Entered Array');
    });

    it('throws error if any of the field is missing in the birthDetails', () => {
        let birthDetails = {...sampleBirthDetails};
        delete birthDetails.lng;
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please give valid birthDetails fields. Missing lng in the given birthDetails');

        birthDetails = {...sampleBirthDetails};
        delete birthDetails.dateString;
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please give valid birthDetails fields. Missing dateString in the given birthDetails');
    });

    it('throws error if the birthDetails is not in the format of dd-mm-yyyy', () => {
        let birthDetails = {...sampleBirthDetails, dateString: 'abcde'};
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please enter valid dateString. Expected: dd-mm-yyyy. Given abcde');
    });

    it('throws error if the birthDetails has a non valid either date or month or year', () => {
        let birthDetails = {...sampleBirthDetails, dateString: "f-5-5"};
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please enter valid dateString. date, month, year should be valid numbers. Converting to Number has resulted into error');
    });

    it('throws error if the birthDetails does not have a valid timeString format', () => {
        let birthDetails = {...sampleBirthDetails, timeString: '05:5'};
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please enter timeString in a valid format. Required format HH:MM:SS');
    });

    it('throws error if the timeString does not have number Data Type in all its values', () => {
        let birthDetails = {...sampleBirthDetails, timeString: 'f:f:f'};
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('Please enter valid timeString. hour, minutes, seconds should be valid numbers. Converting to Number has resulted into error');
    });

    it('throws error if the lat, lng, timezone are not of the data type of number in them', () => {
        let birthDetails = {...sampleBirthDetails, lat: 'f'};
        expect(getValidatedBirthDetails.bind({}, birthDetails)).toThrow('lat should be a valid Number. Given is not a valid number')
    });

    it('returns the correct birthDetails when all the fields are correct', () => {
        expect(getValidatedBirthDetails(sampleBirthDetails)).toEqual(correctBirthDetailsExpanded);
    })

});