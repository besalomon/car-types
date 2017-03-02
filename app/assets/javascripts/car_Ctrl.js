(function() {
  "use strict";

  angular.module("app").controller("carsCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/cars.json").then(function(response) {
        $scope.cars = response.data;
      });
    }    

    $scope.addCar = function(name, model, manufacturer, speed) {
      var car = {
        name: name,
        model: model,
        manufacturer: manufacturer,
        speed: speed
      };
      $http.post("/api/v1/cars.json", car).then(function(response) {
        $scope.car.push(response.data);
      });
    }

    $scope.deleteCar = function(index) {
      var i = ($scope.cars[index]).id;
      $http.delete("/api/v1/cars/" + i + ".json").then(function(response){
        $scope.cars.splice(response.data);
      });
    }

    window.$scope = $scope;

  });
})();