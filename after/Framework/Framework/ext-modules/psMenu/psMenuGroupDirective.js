"use strict";

angular.module('psMenu').directive('psMenuGroup', function () {
    return {
        require: '^psMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuGroupTemplate.html',
        link: function (scope, el, attrs, ctrl) {
            scope.isOpen = false;
            scope.closeMenu = function () {
                scope.isOpen = false;
            };
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;

                if (el.parents('.ps-subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };
            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
            };

            scope.setSubmenuPosition = function () {
                var pos = el.offset();
                $('.ps-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            };
        }
    };
});