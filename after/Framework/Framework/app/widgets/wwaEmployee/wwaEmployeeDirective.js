"use strict";

angular.module('app').directive('wwaEmployee',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/wwaEmployee/wwaEmployeeTemplate.html',
            link: function (scope, el, attrs) {
                scope.selectedEmployee = null;
                dataService.getEmployee(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedEmployee = data;
                    });
            }
        };
    }]);