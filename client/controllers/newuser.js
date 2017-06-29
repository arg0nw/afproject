var myApp= angular.module('myApp');
myApp.controller('NewUController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('NewUController');

	$scope.signIn = function(){
		$http.get('/api/newuser').then(successCallback, errorCallback);
	function successCallback(response){
   		$scope.user=response.data;
   		console.log($scope.user)
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr1");
	}
	}

	$scope.register = function(){

		$http.post('/api/newuser', $scope.book).then(successCallback, errorCallback);
	function successCallback(response){
   		window.location.href="#/users";
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

}]);