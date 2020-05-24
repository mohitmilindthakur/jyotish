const checkFields = (birthDetails) => {
    ['dateString', 'timeString', 'lat', 'lng', 'timezone'].forEach(field => {
        if (!birthDetails.hasOwnProperty(field)) throw new Error(`Please give valid birthDetails fields. Missing ${field} in the given birthDetails`);
    })
}

const getValidatedDate = (dateString) => {

    // TODO
        // check if the date is correct logically, like if date is greater the number of days of a month or if month number is greater than 12

    let split = dateString.split('-');
    if (split.length !== 3) throw new Error(`Please enter valid dateString. Expected: dd-mm-yyyy. Given ${dateString}`);
    split = split.map(e => {
        if (isNaN(Number(e))) {
            throw new Error(`Please enter valid dateString. date, month, year should be valid numbers. Converting to Number has resulted into error`);
        }
        return Number(e);
    });
    return {
        year: split[0],
        month: split[1],
        date: split[2],
    };
};

getValidatedTime = (timeString) => {
    let split = timeString.split(':');
    if (split.length !== 3) throw new Error('Please enter timeString in a valid format. Required format HH:MM:SS');
    split = split.map(e => {
        if (isNaN(Number(e))) {
            throw new Error(`Please enter valid timeString. hour, minutes, seconds should be valid numbers. Converting to Number has resulted into error`);
        }
        return Number(e);
    });
    return {
        hour: split[0],
        min: split[1],
        sec: split[2]
    };
};

exports.getValidatedBirthDetails = (birthDetails) => {

    if (birthDetails === undefined) throw new Error('Please enter birthDetails as the first argument. Entered undefined');
    if (birthDetails.constructor.name !== 'Object') throw new Error(`Data type of the birthDetails has to be object. Entered ${birthDetails.constructor.name}`);
    checkFields(birthDetails);

    let {date, month, year} = getValidatedDate(birthDetails.dateString);
    let {hour, min, sec} = getValidatedTime(birthDetails.timeString);

    let [lat, lng, timezone] = ['lat', 'lng', 'timezone'].map(field => {
        if (isNaN(Number(birthDetails[field]))) throw new Error(`${field} should be a valid Number. Given is not a valid number`);
        return Number(birthDetails[field]);
    });

    return {year, month, date, hour, min, sec, lat, lng, timezone};
};