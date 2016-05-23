'use strict';

angular.module('myApp.product', [])

    .directive('product', function () {
        return {
            restrict: "E",
            scope: {
                id: "@",
                name: "@",
                price: "@",
                image: "@"
            },
            link: function ($scope) {
                $scope.selectProduct = function () {
                    var price = formatPriceAsFloat($scope.price);
                    $scope.$parent.addProductToBasket($scope.id, $scope.name, price);
                };

                function formatPriceAsFloat (priceString) {
                    return parseFloat(priceString.replace('£',''));
                }
            },
            templateUrl: "product/product.html"
        }
    });