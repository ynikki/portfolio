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
  }]).controller('aboutController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
        $scope.params = $routeParams;
      }
  ]).controller('workController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
         $scope.params = $routeParams;
      }
  ]);