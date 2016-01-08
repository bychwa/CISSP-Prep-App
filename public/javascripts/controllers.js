var app = angular.module('controllers',['CustomProviders']);

app.controller('DashboardCtrl', ['$scope', function($scope) {
    
    $scope.init=function(){
        $scope.section_instructions="Click here to select Exam Mode:";
        $scope.main_body="hidden";
    }
    $scope.init();

}]);

app.controller('PracticeController', ['$scope', function($scope) {
  
  	$scope.init=function(){
    		
        $scope.section_instructions="Click here to select Exam Mode:";
    		$scope.main_body="hidden";

  	}
  	$scope.init();

}]);

app.controller('StartPracticeController', ['$scope','$http','$routeParams','$q','CustomProvider', function($scope,$http,$routeParams,$q,CustomProvider) {
    
    $scope.params=$routeParams;

    $scope.get_exam=function(){
        CustomProvider.get_exam('http://localhost:3000/exams/downloads/sample.json').then(function(data){
            $scope.exam_data=data;
            console.log(data);
        });

        // $http.get("../../questions.json").success(function(data) {
        //     console.log($data);
        // });
    }

    $scope.finishedWizard=function(){

    }
    $scope.enterValidation = function(){
        return true;
    };

    $scope.exitValidation = function(){
        return true;
    };
    //example using context object
    $scope.exitValidation = function(context){
        return context.firstName === "Jacob";
    }
    //example using promises
    $scope.exitValidation = function(){
        var d = $q.defer()
        $timeout(function(){
            return d.resolve(true);
        }, 2000);
        return d.promise;
    }

    $scope.get_exam();


}]);
