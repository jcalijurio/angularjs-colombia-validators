'use strict';

require('../directives');

describe('co-nit', () => {

    beforeEach(angular.mock.module('colombia.validators'));

    it('Must be valid when the value is valid', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            '412615332',
            '8300801501'
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
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            '222222222',
            '1234567890',
            '1111111111',
            '2233445501'
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test).triggerHandler('input');
            expect(model.$valid).toBe(false);
        });
    });

    it('must ignore validity when the value size is less than 9', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123456',
            '1234567',
            '12345678'
        ];

        // Act / Assert
        var model = input.controller('ngModel');
        tests.forEach(test => {
            input.val(test).triggerHandler('input');
            expect(model.$valid).toBe(true);
        });
    });

    it('must register a $parser and a $formatter', () => {
        // Arrange
        const plainInput = TestUtil.compile('<input ng-model="model1">');

        const maskedInput = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');

        // Act
        const plainModel = plainInput.controller('ngModel');
        const maskedModel = maskedInput.controller('ngModel');

        // Assert
        expect(maskedModel.$parsers.length).toBe(plainModel.$parsers.length + 1);
        expect(maskedModel.$formatters.length).toBe(plainModel.$formatters.length + 1);
    });

    it('must format model values', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            { value: '412615332', viewValue: '41.261.533-2' },
            { value: '8300801501', viewValue: '830.080.150-1' }
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
        const nineInput = TestUtil.compile('<input type="tel" ng-model="model1" co-nit >', {
            model1: '412615332'
        });
        const tenInput = TestUtil.compile('<input type="tel" ng-model="model2" co-nit >', {
            model2: '8300801501'
        });

        // Act
        const individualModel = nineInput.controller('ngModel');
        const companyModel = tenInput.controller('ngModel');

        // Assert
        expect(individualModel.$viewValue).toBe('41.261.533-2');
        expect(companyModel.$viewValue).toBe('830.080.150-1');
    });

    it('must accept formatted initial model values', function () {
        // Arrange
        const individualInput = TestUtil.compile('<input type="tel" ng-model="model1" co-nit >', {
            model1: '41.261.533-2'
        });
        const companyInput = TestUtil.compile('<input type="tel" ng-model="model2" co-nit >', {
            model2: '830.080.150-1'
        });

        // Act
        const individualModel = individualInput.controller('ngModel');
        const companyModel = companyInput.controller('ngModel');

        // Assert
        expect(individualModel.$viewValue).toBe('41.261.533-2');
        expect(companyModel.$viewValue).toBe('830.080.150-1');
    });

    it('must format partial values', () => {
        // Arrange
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            { value: '', viewValue: '', modelValue: '' },
            { value: '4', viewValue: '4', modelValue: '4' },
            { value: '41', viewValue: '41', modelValue: '41' },
            { value: '412', viewValue: '41.2', modelValue: '412' },
            { value: '4126', viewValue: '41.26', modelValue: '4126' },
            { value: '41261', viewValue: '41.261', modelValue: '41261' },
            { value: '412615', viewValue: '41.261.5', modelValue: '412615' },
            { value: '4126153', viewValue: '41.261.53', modelValue: '4126153' },
            { value: '41261533', viewValue: '41.261.533', modelValue: '41261533' },
            { value: '412615332', viewValue: '41.261.533-2', modelValue: '412615332' }
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
        var input = TestUtil.compile('<input type="tel" ng-model="model" co-nit >');
        var tests = [
            { value: '@', viewValue: '', modelValue: '' },
            { value: '2-', viewValue: '2', modelValue: '2' },
            { value: '22a', viewValue: '22', modelValue: '22' },
            { value: '22_33', viewValue: '22.33', modelValue: '2233' },
            { value: '22334!', viewValue: '22.334', modelValue: '22334' },
            { value: '22@3-34!%4', viewValue: '22.334.4', modelValue: '223344' },
            { value: '41@26A1z5!33-2', viewValue: '41.261.533-2', modelValue: '412615332' },
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