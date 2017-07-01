var myApp = angular.module('myApp');
myApp.controller('DashController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$timeout', function ($scope, $http, $location, $routeParams, $rootScope, $timeout, ChartJsProvider) {

	//*************************Drug stat */
	var labelDrugsDatas = [];
	var dataDrugsDatas = [];	


	$scope.labelsDrugs = labelDrugsDatas;
	$scope.dataDrugs = dataDrugsDatas;
	//********************************** */

	var i ;
	var ii ;
	var iii;
	
	$scope.logout = function(){
		$location.path('/auth');
	}

	$scope.PreLabel = ['Not Isseued Prescriptions', 'Isseued Prescriptions'];
	

	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};

	$scope.redirectAddNewUser = function () {
		$location.path('/newuser')
	}

	$scope.redirectDoctor = function () {
		$location.path('/prescriptions')
	}

	$scope.redirectPharmacy = function () {
		$location.path('/notIssuedPrescriptions')
	}

	$scope.redirectInventory = function () {
		$location.path('/drugs')
	}


	// $rootScope.loadData = function () {
	// 	$rootScope.uname = localStorage.getItem("username");
	// 	console.log($scope.uname);
	// }

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
			//debugger;
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
	
	$scope.getNotIssuedPrescriptions = function(){
        $http.get('/api/notIssuedPrescriptions').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.issuedPrescriptions=response.data;	
			ii=0;
            ii =$scope.issuedPrescriptions.length;  
        }
        function errorCallback(error){
            console.log("Error");
        }
    }
	
	$scope.getPrescriptions = function () {
		$http.get('/api/prescriptions').then(successCallback, errorCallback);
		function successCallback(response) {
			$scope.prescriptions = response.data;
			i=0;
			i=$scope.prescriptions.length-ii;
			$scope.dataPre = [ii, i];
		}
		function errorCallback(error) {
			console.log("Error in prescription controller");
		}
	}

	


}]);