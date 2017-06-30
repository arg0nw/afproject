var myApp = angular.module('myApp');
myApp.controller('DashController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$timeout', function ($scope, $http, $location, $routeParams, $rootScope, $timeout, ChartJsProvider) {

	//*************************Drug stat */
	var labelDrugsDatas = [];
	var dataDrugsDatas = [];
	

	$scope.labelsDrugs = labelDrugsDatas;
	$scope.dataDrugs = dataDrugsDatas;

	//**************************Patient stat */
	var labelPatientDatas = [];
	var dataPatientDatas = [];
	

	$scope.labelsPatient = labelPatientDatas;
	$scope.dataPatient = dataPatientDatas;


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
				labelDrugsDatas[i] = response.data[i].drugname;
				dataDrugsDatas[i] = response.data[i].quentity;
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

			for (var i = 0; i < response.data.length; i++) {
				labelPatientDatas[i] = response.data[i].drugname;
				dataPatientDatas[i] = response.data[i].quentity;
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
			console.log("Error in prescription controller");
		}
	}


}]);