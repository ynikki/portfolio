angular.module('myApp')
  .controller('mainController', [
    '$scope',
    '$route',
    '$routeParams',
    '$location',
    function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }]).controller('booksController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
        $scope.params = $routeParams;
      }
  ]).controller('moviesController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
         $scope.params = $routeParams;
      }
  ]);