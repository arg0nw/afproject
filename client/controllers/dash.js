var myApp = angular.module('myApp', ['chart.js']);
// myApp.config(['ChartJsProvider'], function (ChartJsProvider) {
// 		ChartJsProvider.setOptions({
// 			chartColors: ['red', 'green', 'blue'],
// 			responsive: true
// 		});

// 		ChartJsProvider.setOptions('bar', {
// 			showLines: false
// 		})
// 	})
myApp.controller('DashController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$timeout', function ($scope, $http, $location, $routeParams, $rootScope, $timeout, ChartJsProvider) {

	// $scope.labels = ['drug1', 'drug2', 'drug3'];
	// 	$scope.data = [
	// 		131,
	// 		423,
	// 		254
	// 	];

	// 	$scope.onClick = function(point, evt){
	// 		console.log(point, evt);
	// 	}

	// 	$timeout(function(){
	// 		$scope.data = [
	// 		131,
	// 		423,
	// 		254
	// 	];
	// 	}, 3000);

	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.options = {
		scales: {
			yAxes: [
				{
					id: 'y-axis-1',
					type: 'linear',
					display: true,
					position: 'left'
				},
				{
					id: 'y-axis-2',
					type: 'linear',
					display: true,
					position: 'right'
				}
			]
		}
	};

	$scope.searchString = '';

	$scope.redirectAddNewUser = function () {
		$location.path('/newuser')
	}

	$scope.redirectPharmacy = function () {
		$location.path('/prescriptions')
	}

	$scope.redirectInventory = function () {
		$location.path('/newuser')
	}


	$rootScope.loadData = function () {
		$rootScope.uname = localStorage.getItem("username");
		console.log($scope.uname);


	}

	$scope.getDrugs = function () {
		$http.get('/api/drugs').then(successCallback, errorCallback);
		function successCallback(response) {
			$scope.drugs = response.data;
			console.log($scope.drugs);

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