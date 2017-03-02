(function() {
  "use strict";

  angular.module("app").controller("carsCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/cars.json").then(function(response) {
        $scope.cars = response.data;
      });
    }    

    $scope.toggleBio = function(car) {
      car.bioVisible = !car.bioVisible;
    }

    $scope.addCar = function(name, bio, manufacturer, speed) {
      $http.post("/api/v1/cars.json"){

        ({name: name, manufacturer: manufacturer, speed:speed});
    }
  }

    $scope.deleteCar = function(index) {
      $scope.cars.splice(index, 1);
    }


    window.$scope = $scope;

  });
})();