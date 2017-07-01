var myApp = angular.module('myApp');
myApp.controller('DashController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$timeout', function ($scope, $http, $location, $routeParams, $rootScope, $timeout, ChartJsProvider) {

	var labelDatas = [];
	var dataDatas = [];
	

	$scope.labels = labelDatas;
	$scope.data = dataDatas;

	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};

	$scope.redirectAddNewUser = function () {
		$location.path('/newuser')
	}

	$scope.redirectPharmacy = function () {
		$location.path('/prescriptions')
	}

	$scope.redirectInventory = function () {
		$location.path('/drugs')
	}


	$rootScope.loadData = function () {
		$rootScope.uname = localStorage.getItem("username");
		console.log($scope.uname);
	}

	$scope.getDrugs = function () {
		$http.get('/api/drugs').then(successCallback, errorCallback);
		function successCallback(response) {
			$scope.drugs = response.data;

			for (var i = 0; i < response.data.length; i++) {
				labelDatas[i] = response.data[i].drugname;
				dataDatas[i] = response.data[i].quentity;
			}
			console.log($scope.drugs);

			$scope.drugsOutofStockDrugs = [];
			debugger;
			for (var index = 0; index < $scope.drugs.length; index++) {
				if ($scope.drugs[index].minorder>=$scope.drugs[index].quentity) {
					$scope.drugsOutofStockDrugs.push($scope.drugs[index]);
				}		
				
			}	
		}
		function errorCallback(error) {
			console.log("Error in Load Drugs");

		}
	}

	$scope.getPrescriptions = function () {
		$http.get('/api/prescriptions').then(successCallback, errorCallback);
		function successCallback(response) {
			$scope.prescriptions = response.data;
			console.log($scope.prescriptions)
		}
		function errorCallback(error) {
			console.log("Error in prescription controller");
		}
	}


}]);