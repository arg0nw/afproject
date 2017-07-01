var myApp = angular.module('myApp');
myApp.controller('AuthController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	console.log('AuthController');

		$scope.signin=function(){
		if (( $scope.username == "admin") && ($scope.password == "admin")) {
			$location.path('/dash');
		}
		else if (( $scope.username == "doc") && ($scope.password == "doc")) {
			$location.path('/prescriptions');
		}
		else if (( $scope.username == "pham") && ($scope.password == "pham")) {
			$location.path('/notIssuedPrescriptions');

		}
		else {
			window.alert("Error in login!");
		}
		}

}]);