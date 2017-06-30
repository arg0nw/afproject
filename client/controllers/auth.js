var myApp= angular.module('myApp');
myApp.controller('AuthController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('AuthController');

	$scope.signin = function(){
		var username=$scope.username;
		var password = $scope.password;

		if(username == "admin" && password == "admin"){
			localStorage.setItem("username", username);
			$location.path('/dash');
		}
		else
		window.alert("Error in login");
	}

	$scope.redirect = function(){
		$location.path('/forget');
	}
	
}]);