angular.module('myApp', ['ngRoute'])
  .config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider){
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .when('/hacc', {
          templateUrl: 'views/hacc.html',
          controller: 'haccController'
        })
        .when('/final', {
          templateUrl: 'views/final.html',
          controller: 'finalController'
        })
        .when('/nko', {
          templateUrl: 'views/nko.html',
          controller: 'nkoController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        });
    }
  ]);