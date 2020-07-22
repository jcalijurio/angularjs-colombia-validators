'use strict';

require('../directives');

describe('plate', () => {

    beforeEach(angular.mock.module('colombia.validators'));

    it('must be valid when the value is valid', () => {
        // Arrange
        const input = TestUtil.compile('<input type="text" ng-model="model" co-car-plate >');
        const tests = [
            { value: 'AAA123', viewValue: 'AAA-123' },
            { value: '123AAA', viewValue: '123-AAA' },
            { value: 'AA1234', viewValue: 'AA-1234' },
            { value: 'AAA12D', viewValue: 'AAA-12D' },
            { value: 'AAA12', viewValue: 'AAA-12' },
            { value: 'R12345', viewValue: 'R-12345' },
            { value: '123456', viewValue: '12-3456' },
            { value: 'T1234', viewValue: 'T-1234' },
            { value: 'S12345', viewValue: 'S-12345' },
            { value: 'SZS885', viewValue: 'SZS-885' },
            { value: 'TMW772', viewValue: 'TMW-772' },
            { value: 'RMW772', viewValue: 'RMW-772' }
        ];

        // Act / Assert
        const model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test.value).triggerHandler('input');
            expect(model.$valid).toBe(true);
            expect(model.$viewValue).toBe(test.viewValue);
        });
    });

    it('must ignore validity when the value size is less than 5 or 6', () => {
        // Arrange
        const input = TestUtil.compile('<input type="text" ng-model="model" co-car-plate >');
        const tests = [
            { value: 'AAA12', viewValue: 'AAA-12' },
            { value: 'AA123', viewValue: 'AA-123' },
            { value: '123AA', viewValue: '123-AA' },
            { value: 'T123', viewValue: 'T-123' },
            { value: 'R1234', viewValue: 'R-1234' },
            { value: '1234', viewValue: '12-34' },
            { value: '123', viewValue: '123' },
            { value: 'S1234', viewValue: 'S-1234' },
            { value: 'TMW77', viewValue: 'TMW-77' },
            { value: 'SZS88', viewValue: 'SZS-88' }
        ];

        // Act / Assert
        const model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test.value).triggerHandler('input');
            //expect(model.$valid).toBe(true);
            expect(model.$viewValue).toBe(test.viewValue);
        });
    });

    it('must register a $parser and a $formatter', () => {
        // Arrange
        const plainInput = TestUtil.compile('<input ng-model="model1">');

        const maskedInput = TestUtil.compile('<input type="text" ng-model="model" co-car-plate >');

        // Act
        const plainModel = plainInput.controller('ngModel');
        const maskedModel = maskedInput.controller('ngModel');

        // Assert
        expect(maskedModel.$parsers.length).toBe(plainModel.$parsers.length + 1);
        expect(maskedModel.$formatters.length).toBe(plainModel.$formatters.length + 1);
    });

    it('must accept formatted initial model values', function () {
        const oldPlate = TestUtil.compile('<input type="text" ng-model="modelOld" co-car-plate >', {
            modelOld: 'AAA-123'
        });
        const newCarPlate = TestUtil.compile('<input type="text" ng-model="modelNewCar" co-car-plate >', {
            modelNewCar: 'AA-1234'
        });
        const newMotorcyclePlate = TestUtil.compile('<input type="text" ng-model="newMoto" co-car-plate >', {
            newMoto: '123-AAA'
        });

        // Act
        const modelOld = oldPlate.controller('ngModel');
        const modelNewCar = newCarPlate.controller('ngModel');
        const newMoto = newMotorcyclePlate.controller('ngModel');

        // Assert
        expect(modelOld.$viewValue).toBe('AAA-123');
        expect(modelNewCar.$viewValue).toBe('AA-1234');
        expect(newMoto.$viewValue).toBe('123-AAA');
    });
});