"use strict";

angular.module('psDashboard').directive('psWidgetBody',
    ['$compile', '$modal',
    function ($compile, $modal) {
        return {
            templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
            link: function (scope, element, attrs) {
                var newElement = angular.element(scope.item.template);
                element.append(newElement);
                $compile(newElement)(scope);

                scope.close = function () {
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                };

                scope.settings = function () {
                    var options = {
                        templateUrl: scope.item.widgetSettings.templateUrl,
                        controller: scope.item.widgetSettings.controller,
                        scope: scope
                    };
                    $modal.open(options);
                };

                scope.iconClicked = function () {
                    // empty body.
                    // this function is used by ng-click in the template
                    // so that icon clicks aren't intercepted by widgets
                };
            }
        };
    }
]);