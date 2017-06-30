/**
 * Created by Blindsight3D on 6/28/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('UsersController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('UsersController');

   /* $scope.getUsers = function(){
        $http.get('/api/users').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.users=response.data;
            console.log($scope.users)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getUser = function(){
        var id=$routeParams.id;

        $http.get('/api/users/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.user=response.data;
            console.log($scope.user)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }*/

    

}]);    