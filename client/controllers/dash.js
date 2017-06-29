var myApp= angular.module('myApp');
myApp.controller('DashController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('DashController');

	$scope.signIn = function(){
		$http.get('/api/dash').then(successCallback, errorCallback);
	function successCallback(response){
   		$scope.user=response.data;
   		console.log($scope.user)
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr1");
	}
	}

	$scope.register = function(){

		$http.post('/api/dash', $scope.book).then(successCallback, errorCallback);
	function successCallback(response){
   		window.location.href="#/users";
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

}]);