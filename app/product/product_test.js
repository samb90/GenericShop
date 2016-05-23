'use strict';

describe('myApp.product module', function () {

    describe('product directive', function () {

        var elm,
            scope;

        it("should render the product directive as passed in by $scope", inject(function () {
            expect(scope.id).toEqual("15");
            expect(scope.name).toEqual("Test Name");
            expect(scope.price).toEqual("35.99");
            expect(scope.image).toEqual("testImage.jpg");
        }));

        beforeEach(module('myApp.product'));

        beforeEach(module('templates'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {

            elm = angular.element("<test defined='defined'></test>");

            scope = _$rootScope_.$new();

            scope.id = "15";
            scope.name = "Test Name";
            scope.price = "35.99";
            scope.image = "testImage.jpg";

            _$compile_(elm)(scope);
            scope.$digest();

        }));
    });
});