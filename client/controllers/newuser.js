var myApp= angular.module('myApp');
myApp.controller('NewUController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('NewUController');
	$scope.redirect = function(){
		$location.path('/dash')
	}


	$scope.getUsers = function(){
		$http.get('/api/users').then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.users=response.data;
   			console.log($scope.users);
		}
		function errorCallback(error){
   		
   		
		}
	}

	$scope.updateUser = function(user){
		var edituser= user;
		$scope.username = edituser.username;
		$scope.password = edituser.password;
		$scope.userType = edituser.usertype;
	}

	$scope.addUser = function(){
	$http.post('/api/users', $scope.user).then(successCallback, errorCallback);
	function successCallback(response){
   		console.log("added record");
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}
}]);