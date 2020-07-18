'use strict';

const { NineDigitsPattern, TenDigitsPattern } = require('../masks/nit.masks');
const validator = require('../validators/validators');
const maskFactory = require('../helpers/mask-factory');

module.exports = maskFactory({
    clearValue: rawValue => rawValue.replace(/\D/g, ''),
    format: cleanValue => {
        let formattedValue;

        if (cleanValue.length > 9)
            formattedValue = TenDigitsPattern.apply(cleanValue);
        else
            formattedValue = NineDigitsPattern.apply(cleanValue);

        return (formattedValue || '').trim().replace(/\D$/, '');
    },
    validations: {
        nit: value => value.length < 9 || validator.NIT.validate(value)
    }
});