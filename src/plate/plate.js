'use strict';

const { DefaultPattern, MotorcylePattern, TukTukPattern, ArmedForcesPattern, TrailerPattern, DiplomaticPattern, TankTruckPattern } = require('../masks/plate.masks.js');
const validator = require('../validators/validators');
const maskFactory = require('../helpers/mask-factory');

const diplomaticRegex = /^[A-Z]{2}\d{1,4}$/;
const oldMotorcycleRegex = /^[A-Z]{3}\d{2}$/;
const motorcycleRegex = /^[A-Z]{3}\d{2}[A-Z]{1}$/;
const armedForcesRegex = /^\d{4,6}$/;
const tuktukRegex = /^\d{1,3}[A-Z]{0,3}$/;
const trailerRegex = /^(R|S)\d{1,5}$/;
const tankRegex = /^T{1}\d{1,}/;

module.exports = maskFactory({
    clearValue: rawValue => {
        const cleanValue = rawValue.replace(/[^A-Za-z0-9]/g, '').toUpperCase()
        const size = tankRegex.test(cleanValue) || oldMotorcycleRegex.test(cleanValue) ? 5 : 6;
        return cleanValue.slice(0, size);
    },
    format: cleanValue => {
        let pattern = choosePattern(cleanValue);

        return (pattern.apply(cleanValue) || '').trim().replace(/[^A-Z0-9]$/, '');
    },
    validations: {
        plate: value => validator.Plate.validate(value)
    }
});

function choosePattern(cleanValue) {
    if (armedForcesRegex.test(cleanValue))
        return ArmedForcesPattern;

    if (tuktukRegex.test(cleanValue))
        return TukTukPattern;

    if (diplomaticRegex.test(cleanValue))
        return DiplomaticPattern;

    if (motorcycleRegex.test(cleanValue))
        return MotorcylePattern;

    if (tankRegex.test(cleanValue))
        return TankTruckPattern;

    if (trailerRegex.test(cleanValue))
        return TrailerPattern;

    return DefaultPattern;
}
