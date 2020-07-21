angular.module('home', ['colombia.validators'])
    .controller('ctrl-home', ['$scope', function ($scope) {
        $scope.docs = {};
        $scope.plates = {};
        $scope.phones = {};
    }]);