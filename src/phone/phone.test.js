'use strict';

require('../directives');

describe('co-phone', () => {

    beforeEach(angular.mock.module('colombia.validators'));

    it('must be valid when the value is valid', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-phone >');
        var tests = [
            '5713266400',
            '13266400'
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
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-phone >');
        var tests = [
            '12345678901',
            '123456789'
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

        const maskedInput = TestUtil.compile('<input type="tel" ng-model="model" co-phone>');

        // Act
        const plainModel = plainInput.controller('ngModel');
        const maskedModel = maskedInput.controller('ngModel');

        // Assert
        expect(maskedModel.$parsers.length).toBe(plainModel.$parsers.length + 1);
        expect(maskedModel.$formatters.length).toBe(plainModel.$formatters.length + 1);
    });

    it('must format model values', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-phone >');
        var tests = [
            { value: '5713266400', viewValue: '+57 1 326-6400' },
            { value: '13266400', viewValue: '(1)326-6400' }
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test.value).triggerHandler('input');
            expect(model.$valid).toBe(true);
            expect(model.$viewValue).toBe(test.viewValue);
        });
    });

    it('must format initial model values', () => {
        // Arrange
        const shortInput = TestUtil.compile('<input type="tel" ng-model="model1" co-phone >', {
            model1: '13266400'
        });
        const longInput = TestUtil.compile('<input type="tel" ng-model="model2" co-phone >', {
            model2: '5713266400'
        });

        // Act
        const shortModel = shortInput.controller('ngModel');
        const longModel = longInput.controller('ngModel');

        // Assert
        expect(shortModel.$modelValue).toBe('13266400');
        expect(longModel.$modelValue).toBe('5713266400');
        expect(shortModel.$viewValue).toBe('(1)326-6400');
        expect(longModel.$viewValue).toBe('+57 1 326-6400');
    });

    it('must accept formatted initial model values', function () {
        // Arrange
        const shortInput = TestUtil.compile('<input type="tel" ng-model="model1" co-phone >', {
            model1: '(1)326-6400'
        });
        const longInput = TestUtil.compile('<input type="tel" ng-model="model2" co-phone >', {
            model2: '+57 1 326-6400'
        });

        // Act
        const shortModel = shortInput.controller('ngModel');
        const longModel = longInput.controller('ngModel');

        // Assert
        expect(shortModel.$viewValue).toBe('(1)326-6400');
        expect(longModel.$viewValue).toBe('+57 1 326-6400');
    });

    it('must format partial values', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-phone >');
        var tests = [
            { value: '', viewValue: '', modelValue: '' },
            { value: '5', viewValue: '(5', modelValue: undefined },
            { value: '57', viewValue: '(5)7', modelValue: undefined },
            { value: '571', viewValue: '(5)71', modelValue: undefined },
            { value: '5713', viewValue: '(5)713', modelValue: undefined },
            { value: '57132', viewValue: '(5)713-2', modelValue: undefined },
            { value: '571326', viewValue: '(5)713-26', modelValue: undefined },
            { value: '5713266', viewValue: '(5)713-266', modelValue: undefined },
            { value: '57132664', viewValue: '(5)713-2664', modelValue: '57132664' },
            { value: '571326640', viewValue: '+57 1 326-640', modelValue: undefined },
            { value: '5713266400', viewValue: '+57 1 326-6400', modelValue: '5713266400' }
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test.value).triggerHandler('input');
            expect(model.$viewValue).toBe(test.viewValue);
            expect(model.$modelValue).toBe(test.modelValue);
        });
    });

    it('must ignore non digits', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-phone >');
        var tests = [
            { value: '@', viewValue: '', modelValue: '' },
            { value: '2-', viewValue: '(2', modelValue: undefined },
            { value: '22a', viewValue: '(2)2', modelValue: undefined },
            { value: '22_33', viewValue: '(2)233', modelValue: undefined },
            { value: '22334!', viewValue: '(2)233-4', modelValue: undefined },
            { value: '22@3-34!%4', viewValue: '(2)233-44', modelValue: undefined },
            { value: '22@33A4z4!55-', viewValue: '(2)233-4455', modelValue: '22334455' },
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