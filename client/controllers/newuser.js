var myApp= angular.module('myApp');
myApp.controller('NewUController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('NewUController');
	$scope.redirect = function(){
		$location.path('/dash')
	}


	$scope.getUsers = function(){
		$http.get('/api/user').then(successCallback, errorCallback);
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
		if ($scope.user.username=='' || $scope.user.username==null) {
			$location.path('/')
		}
        $http.post('/api/user/', $scope.user).then(successCallback,errorCallback);
		function successCallback(response)
		{
			$scope.redirectNewUser();
		}
		function errorCallback(error)
		{
			console.log('err from getBooks')
		}
    }

	$scope.redirectNewUser = function(){
		$location.path="#!/newuser";
	}
}]);