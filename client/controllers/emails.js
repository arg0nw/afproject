var myApp= angular.module('myApp');
myApp.controller('EmailsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('EmailsController');

	$scope.getMails = function(){
		$http.get('/api/mail').then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.mails=response.data;
   			console.log($scope.mails);
   		
		}
		function errorCallback(error){
   		
   		
		}
	}
	$scope.showData = function(id)
	{
		$http.get('/api/mail/'+id).then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.m=response.data;
   			console.log($scope.m);
   		
		}
		function errorCallback(error){
   		
   		
		}

	}
	
}]);