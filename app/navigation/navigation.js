'use strict';

angular.module('myApp.navigation', [])

    .directive('navigation', function() {
        return {
            templateUrl: 'navigation/navigation.html'
        };
    });