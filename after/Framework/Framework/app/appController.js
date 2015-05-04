"use strict";

angular.module('app').controller('appController',
    ['$scope',
        function ($scope) {
            $scope.state = 'unauthorized';
            $scope.signIn = function () {
                $scope.state = 'authorized';
            };
        }
    ]);