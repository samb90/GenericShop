angular.module('myApp.endpoints', [])

    .factory('ProductsCatalogueEndpoint', function () {
        return {
            "products": [
                {
                    "id": 1,
                    "name": "Product One",
                    "description": "Product One Description",
                    "images": {
                        "hero": "http://lorempixel.com/350/350/nature/1/"
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
                        "hero": "http://lorempixel.com/350/350/nature/2/"
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
                        "hero": "http://lorempixel.com/350/350/nature/3/"
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
                        "hero": "http://lorempixel.com/350/350/nature/4/"
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
                        "hero": "http://lorempixel.com/350/350/nature/5/"
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
                        "hero": "http://lorempixel.com/350/350/nature/6/"
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
                        "hero": "http://lorempixel.com/350/350/nature/7/"
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
                        "hero": "http://lorempixel.com/350/350/nature/8/"
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
                        "hero": "http://lorempixel.com/350/350/nature/9/"
                    },
                    "tags": [],
                    "in_stock": true,
                    "price": 90.00
                }
            ]
        }
    });
