var myApp = angular.module('myApp');
myApp.controller('AuthController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	console.log('AuthController');

	debugger;
	var uname='';
	var pwd ='';

	uname = $scope.username;
	pwd = $scope.password;

<<<<<<< HEAD
	/*$scope.signin = function () {
		// if (username == "admin" && password == "admin") {
			localStorage.setItem("username", username);
=======
	$scope.signin = function () {
		if (( $scope.username == "admin") && ($scope.password == "admin")) {
>>>>>>> 72ed68949f58b4424d9af7542144db3e8e16c862
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
*/

$scope.signin =function(usr,pwd){
            console.log(usr+'/'+pwd);
            if(usr=='admin' && pwd=='admin')
            {
                window.location.href='#!/dash';
            }
            else
            {
                window.location.href='#!/auth';
            }
        }
}]);