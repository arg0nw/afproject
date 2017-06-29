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

	$scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	}

  	$scope.closeNav=function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	}

	$scope.getDrug = function(){
		console.log('drug');
		var id=$routeParams.id;
		$http.get('/api/drugs/'+id).then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.drug=response.data;
   			console.log($scope.drug.supplieremail);
		}
		function errorCallback(error){
   		
   		
		}
	}

}]);