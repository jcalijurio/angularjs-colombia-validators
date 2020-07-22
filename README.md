# angularjs-colombia-validators
AngularJS directives for Colombia data validators
AngularJS Colombia Validators
==============
[![npm version](https://img.shields.io/npm/v/angularjs-colombia-validators.svg)](https://www.npmjs.com/package/angularjs-colombia-validators)
[![Build Status](https://travis-ci.org/jcalijurio/angularjs-colombia-validators.svg)](https://travis-ci.org/jcalijurio/angularjs-colombia-validators)

AngularJS Colombia Validators is a library that provides validators and masks for NIT/RUT numbers, Car Plates, Zip Codes and Phone Numbers / AngularJS Colombia Validators és una biblioteca que proporciona validaciones y máscaras para números RUT/NIT, Placas de vehículo, Código Postal y Teléfono.
This library is a port of [colombia-validators](https://www.npmjs.com/package/colombia-validators) package for AngularJS.

## Installation ##

### With npm

```bash
npm i angularjs-colombia-validators
```

Adding script reference

```html
<script src="node_modules/angularjs-colombia-validators/angularjs-colombia-validator.min.js">
```

The module code you need to import is 'colombia.validators'

```javascript
const app = angular.module('mymodule', ['colombia.validators']); // Import example.

app.controller('mycontroller', ['$scope', $scope => {
  // controller behavior here...
}]);
```

## Validations ##

### RUT/NIT ###

```html
<input type="tel" name="nit-name" ng-model="model" co-nit />
```

### PLATE ###

```html
<!-- for all valid formats -->
<input type="text" name="plate-name" ng-model="model" co-car-plate />
```

### PHONE NUMBER
```html
<input type="tel" name="phone-name" ng-model="model" co-phone />
```

### ZIP CODE
```html
<input type="tel" name="zipcode-name" ng-model="model" co-zipcode />
```