const StringMask = require('string-mask');

const ShortPattern = new StringMask('(0)000-0000');
const CompletePattern = new StringMask('+00 0 000-0000');

module.exports = {
    ShortPattern,
    CompletePattern
};