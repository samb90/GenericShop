'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.imgFallback',
  'myApp.basket',
  'myApp.product',
  'myApp.home',
  'myApp.endpoints',
  'myApp.navigation',
  'myApp.productsCatalogue'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/checkout'});
}]);
