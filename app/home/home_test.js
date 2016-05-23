'use strict';

describe('myApp.home module', function () {

    var scope,
        fixture,
        basketMock,
        productsCatalogueMock;

    describe('checkout controller', function () {

        it('should get products from product catalogue feed', function () {
            expect(scope.products).toEqual(fixture);
        });

        it('should get product id', function () {
            expect(scope.getId(0)).toEqual(15);
        });

        it('should get product name', function () {
            expect(scope.getName(0)).toEqual("Test Name");
        });

        it('should get product price', function () {
            expect(scope.getPrice(0)).toEqual(15.99);
        });

        it('should get product image', function () {
            expect(scope.getImage(0)).toEqual("testimage.jpg");
        });

        it('should add product to basket', function () {
            scope.addProductToBasket(0, "Product One", 10.00);
            expect(basketMock.addProductToBasket).toHaveBeenCalled();
        });

        it('should add delivery date to basket', function () {
            scope.addDeliveryDateToBasket();
            expect(basketMock.addDeliveryDateToBasket).toHaveBeenCalled();
        });

        it('should add first name to basket', function () {
            scope.addFirstName();
            expect(basketMock.addFirstName).toHaveBeenCalled();
        });

        it('should add last name to basket', function () {
            scope.addLastName();
            expect(basketMock.addLastName).toHaveBeenCalled();
        });

        it('should add delivery type to basket', function () {
            scope.selectDeliveryType();
            expect(basketMock.addDeliveryType).toHaveBeenCalled();
        });
        
    });

    beforeEach(module('myApp.home'));

    beforeEach(module(function ($provide) {

        basketMock = {
            addProductToBasket: function () {},
            addDeliveryDateToBasket: function () {},
            addFirstName: function () {},
            addLastName: function () {},
            addDeliveryType: function () {},
            getOrderDetailsDetails: function () {

            }
        };

        productsCatalogueMock = {
            getProductCatalogue: function () {
                return fixture;
            },
            getProductId: function (index) {
                return 15;
            },
            getProductName: function (index) {
                return "Test Name";
            },
            getProductPrice: function (index) {
                return 15.99;
            },
            getProductImage: function (index) {
                return "testimage.jpg";
            },
            getProductNameFromId: function (id) {
                return "Test Name";
            },
            getProductPriceFromId: function (id) {
                return 19.99;
            }
        };

        $provide.value('ProductsCatalogue', productsCatalogueMock);
        $provide.value('Basket', basketMock);

        spyOn(basketMock, 'addProductToBasket');
        spyOn(basketMock, 'addDeliveryDateToBasket');
        spyOn(basketMock, 'addFirstName');
        spyOn(basketMock, 'addLastName');
        spyOn(basketMock, 'addDeliveryType');
    }));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        scope = _$rootScope_.$new();

        _$controller_('Home', {
            '$scope': scope
        });

    }));

    fixture = {
        "products": [
            {
                "id": 1,
                "name": "Product One",
                "description": "Product One Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 10.00
            },
            {
                "id": 2,
                "name": "Product Two",
                "description": "Product Two Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 20.00
            },
            {
                "id": 3,
                "name": "Product Three",
                "description": "Product Three Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 30.00
            },
            {
                "id": 4,
                "name": "Product Four",
                "description": "Product Four Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 40.00
            }
            ,{
                "id": 5,
                "name": "Product Five",
                "description": "Product Five Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 50.00
            }
            ,{
                "id": 6,
                "name": "Product Six",
                "description": "Product Six Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 60.00
            }
            ,{
                "id": 7,
                "name": "Product Seven",
                "description": "Product Seven Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 70.00
            }
            ,{
                "id": 8,
                "name": "Product Eight",
                "description": "Product Eight Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 80.00
            }
            ,{
                "id": 9,
                "name": "Product Nine",
                "description": "Product Nine Description",
                "images": {
                    "hero": "testimage.jpg"
                },
                "tags": [],
                "in_stock": true,
                "price": 90.00
            }
        ]
    }
});