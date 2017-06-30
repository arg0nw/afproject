var myApp= angular.module('myApp');
myApp.controller('DashController',['$scope', '$http', '$location', '$routeParams','$rootScope',function($scope, $http, $location, $routeParams, $rootScope) {
	$scope.redirectAddNewUser = function(){
		$location.path('/newuser')
	}

	$scope.redirectPharmacy = function(){
		$location.path('/prescriptions')
	}

	$scope.redirectInventory = function(){
		$location.path('/newuser')
	}

	
	$rootScope.loadData = function(){
		$rootScope.uname=localStorage.getItem("username");
		console.log($scope.uname);
	}

}]);