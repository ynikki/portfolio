angular.module('myApp')
  .controller('mainController', [
    '$scope',
    '$route',
    '$routeParams',
    '$location',
    '$anchorScroll',
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
  ]).controller('headerCtrl', [
      '$anchorScroll',
      '$location',
      '$scope',
      function ($anchorScroll, $location, $scope) {
        $scope.gotoAnchor = function (x) {
          var newHash = 'anchor' + x;
          if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
          } else {
            $anchorScroll();
          }
        }
      }
  ]);