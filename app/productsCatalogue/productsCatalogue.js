'use strict';

angular.module('myApp.productsCatalogue', [])

    .factory('ProductsCatalogue', ['ProductsCatalogueEndpoint', function (ProductsCatalogueEndpoint) {

        var productsCatalogue = [];

        function getProductCatalogue() {
            if (ProductsCatalogueEndpoint && ProductsCatalogueEndpoint.products) {
                setCachedProducts(ProductsCatalogueEndpoint.products);
                return productsCatalogue;
            }
        }

        function setCachedProducts(products) {
            productsCatalogue = products;
        }

        function getCachedProducts() {
            return productsCatalogue;
        }

        function getProductId (index) {
            var products = getCachedProducts();
            return products[index].id || null;
        }

        function getProductName (index) {
            var products = getCachedProducts();
            return products[index].name;
        }

        function getProductPrice (index) {
            var products = getCachedProducts();
            return products[index].price;
        }

        function getProductImage (index) {
            return productsCatalogue[index].images.hero;
        }

        return {
            getProductCatalogue: getProductCatalogue,
            getProductId: getProductId,
            getProductName: getProductName,
            getProductPrice: getProductPrice,
            getProductImage: getProductImage
        }

    }]);