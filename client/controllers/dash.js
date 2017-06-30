var myApp= angular.module('myApp');
myApp.controller('DashController',['$scope', '$http', '$location', '$routeParams','$rootScope',function($scope, $http, $location, $routeParams, $rootScope) {
	
	$scope.searchString='20';

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

	$scope.getDrugs = function(){
		$http.get('/api/drugs').then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.drugs=response.data;
   			console.log($scope.drugs);
   		
		}
		function errorCallback(error){
   		
   		
		}
	}

	$scope.getPrescriptions = function () {
        $http.get('/api/prescriptions').then(successCallback,errorCallback);
        function successCallback(response){
            $scope.prescriptions=response.data;
            console.log($scope.prescriptions)
        }
        function errorCallback(error) {
            console.log("Error in prescription controller");
        }
    }
}]);