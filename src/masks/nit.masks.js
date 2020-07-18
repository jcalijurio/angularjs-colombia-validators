const StringMask = require('string-mask');

const TenDigitsPattern = new StringMask('000.000.000-0');
const NineDigitsPattern = new StringMask('00.000.000-0');

module.exports = {
    NineDigitsPattern,
    TenDigitsPattern
};