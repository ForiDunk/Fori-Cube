const myApp = angular.module('myApp', [
  'ngRoute',
  'MyControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/cube.html',
      controller: 'RotateCon'
    });
}]);

