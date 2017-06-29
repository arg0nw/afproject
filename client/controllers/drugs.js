/**
 * Created by Blindsight3D on 6/27/2017.
 */

//Testing
var myApp= angular.module('myApp');
myApp.controller('DrugsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('DrugsController');

	$scope.getDrugs = function(){
		$http.get('/api/drugs').then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.drugs=response.data;
   			console.log($scope.drugs);
   		
		}
		function errorCallback(error){
   		
   		
		}
	}
}]);