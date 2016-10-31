angular.module('myApp',['ngBind'])
  .directive("navScroll",
    function ($window) {
      return function (scope, element, attr) {
        angular.element($window).bind("scroll", function () {
          if (!scope.scrollPosition) {
            scope.scrollPosition = 0;
          } if (this.pageYOffset > scope.scrollPosition) {
            scope.boolChangeClass = true;
          } else {
            scope.boolChangeClass = false;
          }
          scope.scrollPosition = this.pageYOffset;
          scope.$apply();
        })
      }
    }
  )