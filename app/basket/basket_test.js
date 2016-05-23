'use strict';

describe('myApp.basket module', function () {

    var productCostMock = 0.0;

    describe('basket factory', function () {

        it('Basket to be defined', inject(function (Basket) {
            expect(Basket).toBeDefined();
        }));

        it('should setup the order object with default params', inject(function (Basket) {
            var result = Basket.getOrderDetailsDetails();
            expect(result).toEqual({
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
            })
        }));

        it('should add project to basket', inject(function (Basket) {
            var result;

            Basket.addProductToBasket(53, "Product One", 10.00);
            result = Basket.getOrderDetailsDetails();
            expect(result.id).toEqual(53);
        }));

        it('should add delivery date to basket', inject(function (Basket) {
            var result,
                mockDate = Date.now();

            Basket.addDeliveryDateToBasket(mockDate);
            result = Basket.getOrderDetailsDetails();
            expect(result.deliveryDate).toEqual(mockDate);
        }));

        it('should add delivery type to basket and calculate correct delivery cost when type equals Next', inject(function (Basket) {
            var result,
                type = 'Next',
                deliveryCost = 10.00;

            Basket.addDeliveryType(type);
            result = Basket.getOrderDetailsDetails();
            expect(result.deliveryType).toEqual(type);
            expect(result.deliveryCost).toEqual(deliveryCost);
        }));

        it('should add delivery type to basket and calculate correct delivery cost when type equals Next', inject(function (Basket) {
            var result,
                type = 'First',
                deliveryCost = 5.00;

            Basket.addDeliveryType(type);
            result = Basket.getOrderDetailsDetails();
            expect(result.deliveryType).toEqual(type);
            expect(result.deliveryCost).toEqual(deliveryCost);
        }));

        it('should add delivery type to basket and calculate correct delivery cost when type equals Next', inject(function (Basket) {
            var result,
                type = 'Second',
                deliveryCost = 2.50;

            Basket.addDeliveryType(type);
            result = Basket.getOrderDetailsDetails();
            expect(result.deliveryType).toEqual(type);
            expect(result.deliveryCost).toEqual(deliveryCost);
        }));

        it('should add first name to basket', inject(function (Basket) {
            var result;

            Basket.addFirstName('Sam');
            result = Basket.getOrderDetailsDetails();
            expect(result.firstName).toEqual('Sam');
        }));

        it('should add last name to basket', inject(function (Basket) {
            var result;

            Basket.addLastName('Test');
            result = Basket.getOrderDetailsDetails();
            expect(result.lastName).toEqual('Test');
        }));

        it('should calculate cost correctly', inject(function (Basket) {
            var result;

            productCostMock = 20.00;

            Basket.addProductToBasket(42, "Product Ten", productCostMock);
            Basket.addDeliveryType('First');
            result = Basket.getOrderDetailsDetails();
            expect(result.totalCost).toEqual(25.00);
        }));


    });

    beforeEach(module('myApp.basket'));

});