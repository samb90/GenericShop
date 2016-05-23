'use strict';

angular.module('myApp.home', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'Home'
        });
    }])

    .controller('Home', ['$scope', '$location', 'ProductsCatalogue', '$anchorScroll', 'Basket',
        function ($scope, $location, ProductsCatalogue, $anchorScroll, Basket) {

            $scope.products = ProductsCatalogue.getProductCatalogue();

            $scope.getId = function (index){
                return ProductsCatalogue.getProductId(index);
            };

            $scope.getName = function (index) {
                return ProductsCatalogue.getProductName(index);
            };

            $scope.getPrice = function (index) {
                return ProductsCatalogue.getProductPrice(index);
            };

            $scope.getImage = function (index) {
                return ProductsCatalogue.getProductImage(index);
            };



            $scope.addProductToBasket = function (id, name, price) {
                Basket.addProductToBasket(id, name, price);
                getOrderDetailsDetails();
                scrollTo('stepTwo');
            };

            $scope.addDeliveryDateToBasket = function (deliveryDate) {
                Basket.addDeliveryDateToBasket(deliveryDate);
                getOrderDetailsDetails();
                scrollTo('stepThree');
            };

            $scope.addFirstName = function (firstName) {
                Basket.addFirstName(firstName);
                getOrderDetailsDetails();
            };

            $scope.addLastName = function (lastName) {
                Basket.addLastName(lastName);
                getOrderDetailsDetails();
            };

            $scope.selectDeliveryType = function (deliveryType) {
                Basket.addDeliveryType(deliveryType);
                getOrderDetailsDetails();
                scrollTo('stepFour');
            };

            function getOrderDetailsDetails() {
                $scope.orderDetails = Basket.getOrderDetailsDetails();
            }

            function scrollTo(location) {
                $location.hash(location);
                $anchorScroll();
            }

            var dateToday = new moment();

            $scope.options = {
                minDate: dateToday,
                showWeeks: true
            };

            $scope.deliveryDate = dateToday;

            $scope.status = {
                isOpen: false
            };

        }]);
