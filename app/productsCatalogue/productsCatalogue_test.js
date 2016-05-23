'use strict';

describe('myApp.productsCatalogue module', function () {

    var fixture;

    describe('products catalogue factory', function () {

        it('Products Catalogue to be defined', inject(function (ProductsCatalogue) {
            expect(ProductsCatalogue).toBeDefined();
        }));

        it('should get product catalogue', inject(function (ProductsCatalogue) {
            var result = ProductsCatalogue.getProductCatalogue();
            expect(result).toEqual(fixture.products)
        }));

        it('should get product id', inject(function (ProductsCatalogue) {
            ProductsCatalogue.getProductCatalogue();
            var result = ProductsCatalogue.getProductId(0);

            expect(result).toEqual(1);
        }));

        it('should get product name', inject(function (ProductsCatalogue) {
            ProductsCatalogue.getProductCatalogue();
            var result = ProductsCatalogue.getProductName(3);

            expect(result).toEqual("Product Four");
        }));

        it('should get product price', inject(function (ProductsCatalogue) {
            ProductsCatalogue.getProductCatalogue();
            var result = ProductsCatalogue.getProductPrice(2);

            expect(result).toEqual(30);
        }));

        it('should get product image from index', inject(function (ProductsCatalogue) {
            ProductsCatalogue.getProductCatalogue();
            var result = ProductsCatalogue.getProductImage(2);

            expect(result).toEqual("testimage.jpg");
        }));


        beforeEach(module('myApp.productsCatalogue'));

        beforeEach(module(function ($provide) {
            $provide.value('ProductsCatalogueEndpoint', fixture);
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
});