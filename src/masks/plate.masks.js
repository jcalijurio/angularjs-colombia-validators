const StringMask = require('string-mask');

const DefaultPattern = new StringMask('UUU-000');
const MotorcylePattern = new StringMask('UUU-00U');
const TukTukPattern = new StringMask('000-UUU');
const ArmedForcesPattern = new StringMask('00-0000');
const TrailerPattern = new StringMask('U-00000');
const TankTruckPattern = new StringMask('U-0000');
const DiplomaticPattern = new StringMask('UU-0000');

module.exports = {
    DefaultPattern,
    MotorcylePattern,
    TukTukPattern,
    ArmedForcesPattern,
    TrailerPattern,
    DiplomaticPattern,
    TankTruckPattern
};