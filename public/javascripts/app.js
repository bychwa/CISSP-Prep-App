var app = angular.module('cissp', ['ngRoute', 'controllers','CustomProviders','mgo-angular-wizard']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/dashboard.html',
        controller: 'MainController'
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'MainController'
      }).
      when('/practice_qns', {
        templateUrl: 'partials/practice.html',
        controller: 'PracticeController'
      }).
      when('/practice_qns/:id', {
        templateUrl: 'partials/start_practice.html',
        controller: 'StartPracticeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);