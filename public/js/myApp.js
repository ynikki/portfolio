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
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'aboutController'
        })
        .when('/work', {
          templateUrl: 'views/work.html',
          controller: 'workController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        });
    }
  ]);