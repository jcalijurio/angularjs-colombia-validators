'use strict';

require('../directives');

describe('co-zipcode', () => {

    beforeEach(angular.mock.module('colombia.validators'));

    it('must be valid when the value is valid', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-zipcode >');
        var tests = [
            '318012',
            '700012',
            '906021',
            '599012'
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test).triggerHandler('input');
            expect(model.$valid).toBe(true);
        });
    });

    it('must be invalid when the value is invalid', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-zipcode >');
        var tests = [
            '12345'
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test).triggerHandler('input');
            expect(model.$valid).toBe(false);
        });
    });

    it('must register a $parser and a $formatter', () => {
        // Arrange
        const plainInput = TestUtil.compile('<input ng-model="model1">');

        const maskedInput = TestUtil.compile('<input type="tel" ng-model="model" co-zipcode>');

        // Act
        const plainModel = plainInput.controller('ngModel');
        const maskedModel = maskedInput.controller('ngModel');

        // Assert
        expect(maskedModel.$parsers.length).toBe(plainModel.$parsers.length + 1);
        expect(maskedModel.$formatters.length).toBe(plainModel.$formatters.length + 1);
    });

    it('must ignore non digits', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-zipcode >');
        var tests = [
            { value: '@', viewValue: '', modelValue: '' },
            { value: '2-', viewValue: '2', modelValue: undefined },
            { value: '22a', viewValue: '22', modelValue: undefined },
            { value: '22_33', viewValue: '223-3', modelValue: undefined },
            { value: '22_33/4', viewValue: '223-34', modelValue: undefined },
            { value: '22_33/45', viewValue: '223-345', modelValue: '223345' },
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test.value).triggerHandler('input');
            expect(model.$viewValue).toBe(test.viewValue);
            expect(model.$modelValue).toBe(test.modelValue);
        });
    });
});