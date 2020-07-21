angular.module('colombia.validators', [])
    .directive('coNit', [require('./nit/nit')])
    .directive('coCarPlate', [require('./plate/plate')])
    .directive('coPhone', [require('./phone/phone')]);