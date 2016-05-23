'use strict';

angular.module("myApp.imgFallback", [])

    .directive('imgFallback', function () {
        return {
            link: function (scope, element, attrs) {

                element.bind('error', function () {
                    if (attrs.src != attrs.imgFallback) {
                        attrs.$set('src', attrs.imgFallback);
                    }

                });
            }
        }
    });