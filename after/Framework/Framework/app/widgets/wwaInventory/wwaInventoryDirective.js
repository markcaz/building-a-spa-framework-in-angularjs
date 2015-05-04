"use strict";

angular.module('app').directive('wwaInventory',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/wwaInventory/wwaInventoryTemplate.html',
            link: function (scope, el, attrs) {
                scope.selectedLocation = null;
                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedLocation = data;
                    });
            }
        };
    }]);