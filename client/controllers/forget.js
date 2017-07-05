var myApp= angular.module('myApp');
myApp.controller('ForgetController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('ForgetController');

	$scope.back = function(){
        $location.path('/auth');
    }
	
}]);