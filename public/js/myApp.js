angular.module('myApp', ['ngRoute'])
  .config([
    '$routeProvider',
    '$locationProvider',
    function ($routerProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html'
      })
      .when('/work', {
        templateUrl: 'views/work.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
    }
  ])