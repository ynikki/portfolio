angular.module('myApp')
  .controller('mainController', [
    '$scope',
    '$route',
    '$routeParams',
    '$location',
    '$rootScope',
    '$anchorScroll',
    'ngSanitize',
    function ($scope, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
  }]).controller('siteController', [
      '$scope',
      '$location',
      '$anchorScroll',
      function($scope, $location, $anchorScroll, ngSanitize) {
        $scope.scrollTo = function(id) {
          $location.hash(id);
          $anchorScroll();
        }
      }
  ]).controller('haccController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
        $scope.params = $routeParams;
      }
  ]).controller('finalController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
         $scope.params = $routeParams;
      }
  ]).controller('nkoController', [
      '$scope',
      '$routeParams',
      function ($scope, $routeParams) {
        $scope.params = $routeParams;
      }
  ]).run(function($rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSucess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    })
  }) 