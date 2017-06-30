var myApp= angular.module('myApp');
myApp.controller('NewUController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('NewUController');
	$scope.redirect = function(){
		$location.path('/dash')
	}

}]);