'use strict';

angular.module('myApp.basket', [])

    .factory('Basket', function () {

        var orderDetails = {
            "id": 0,
            "name": "",
            "unitCost": 0.0,
            "quantity": 1,
            "deliveryDate": "",
            "deliveryType": "",
            "deliveryCost": 0.0,
            "firstName": "",
            "lastName": "",
            "totalCost": 0.0
        };

        function addProductToBasket(productId, productName, productPrice) {
            orderDetails.id = parseInt(productId);
            orderDetails.name = productName;
            orderDetails.unitCost = parseFloat(productPrice);
            calculateCost();
        }

        function addDeliveryDateToBasket(date) {
            orderDetails.deliveryDate = date;
        }

        function addDeliveryType(deliveryType) {
            var DELIVERY_TYPES = {
                    'Next': 10.00,
                    'First': 5.00,
                    'Second': 2.50
                },
                deliveryCost = 0.0;

            switch (deliveryType) {
                case "Next":
                    deliveryCost = DELIVERY_TYPES.Next;
                    break;
                case "First":
                    deliveryCost = DELIVERY_TYPES.First;
                    break;
                case "Second":
                    deliveryCost = DELIVERY_TYPES.Second;
                    break;
                case "default":
                    break;
            }

            orderDetails.deliveryType = deliveryType;
            orderDetails.deliveryCost = deliveryCost;

            calculateCost();
        }

        function addFirstName(firstName) {
            orderDetails.firstName = firstName;
        }

        function addLastName(lastName) {
            orderDetails.lastName = lastName;
        }
        
        function getOrderDetailsDetails () {
            return orderDetails;
        }

        function calculateCost() {
            var costOfProduct = parseFloat(orderDetails.unitCost) * parseInt(orderDetails.quantity),
                costOfDelivery = parseFloat(orderDetails.deliveryCost),
                subTotal = costOfProduct + costOfDelivery;

            orderDetails.totalCost = subTotal;
        }

        return {
            addProductToBasket: addProductToBasket,
            addDeliveryDateToBasket: addDeliveryDateToBasket,
            addDeliveryType: addDeliveryType,
            addFirstName: addFirstName,
            addLastName: addLastName,
            getOrderDetailsDetails: getOrderDetailsDetails
        }

    });