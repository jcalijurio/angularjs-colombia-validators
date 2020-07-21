'use strict';

const { ShortPattern, CompletePattern } = require('../masks/phone.masks');
const maskFactory = require('../helpers/mask-factory');

module.exports = maskFactory({
    clearValue: rawValue => rawValue.replace(/\D/g, '').slice(0, 10),
    format: cleanValue => {
        const formattedValue = chooseFormat(cleanValue);

        return (formattedValue || '').trim().replace(/\D$/, '');
    },
    validations: {
        phone: value => value.length === 8 || value.length ===  10
    }
});

function chooseFormat(cleanValue) {
    if (cleanValue.length > 8)
        return CompletePattern.apply(cleanValue);

    return ShortPattern.apply(cleanValue);
}
