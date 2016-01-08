var app = angular.module('CustomProviders', []);

app.factory('CustomProvider', function($http, $q){
      
      var service = {};

      service.get_exams = function(url){
          var deferred = $q.defer();
          var Url =url;
          $http({
                method: 'GET',
                url: Url
            }).success(function(data){
              deferred.resolve(data);
            }).error(function(){
              deferred.reject('Internal error!, try again!')
            })
          return deferred.promise;
      }

      service.get_exam = function(url){
          var deferred = $q.defer();
          var Url =url;
          $http({
                method: 'GET',
                url: Url
          }).success(function(data){
              deferred.resolve(data);
          }).error(function(){
              deferred.reject('Internal error!, try again!')
          })
          return deferred.promise;
      }
      return service;
});
