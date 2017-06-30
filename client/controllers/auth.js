var myApp = angular.module('myApp');
myApp.controller('AuthController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	console.log('AuthController');

	var username = $scope.uname;
	var password = $scope.pwd;

	$scope.users=[];

	$scope.login=function(){
		console.log("clicked")
		debugger;
			for (var index = 0; index < $scope.users.length; index++) {
				if ((username == $scope.users[index].username) && (password == $scope.users[index].password) && ($scope.users[index] == 'Admin')) {
					localStorage.setItem("Adminusername", username);
					localStorage.setItem("Adminusertype", $scope.users.usertype);
					$location.path('/dash');

				}
				else
					if ((username == $scope.users[index].username) && (password == $scope.users[index].password) && ($scope.users[index] == 'Doctor')) {
						localStorage.setItem("Docusername", username);
						localStorage.setItem("Docusertype", $scope.users.usertype);
						$location.path('/prescriptions');
					}
					else
						if ((username == $scope.users[index].username) && (password == $scope.users[index].password) && ($scope.users[index] == 'Pharmacist')) {
							localStorage.setItem("Pharmusername", username);
							localStorage.setItem("Pharmusertype", $scope.users.usertype);
							$location.path('/issueDrugs');
						}


			}
			}

	$scope.signin = function () {


		if (username == "admin" && password == "admin") {
			localStorage.setItem("username", username);
			$location.path('/dash');
		}
		else
			window.alert("Error in login");
	}

	$scope.redirect = function () {
		$location.path('/forget');
	}

	$scope.getUsers = function () {
		$http.get('/api/user').then(successCallback, errorCallback);
		function successCallback(response) {
			$scope.users = response.data;
			console.log($scope.users);
			
		}
		function errorCallback(error) {


		}
	}

}]);