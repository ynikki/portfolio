angular.module('myApp', ['ngRoute'])
  .controller('myController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $locatoin;
    $scope.$routeParams = $routeParams;
  })