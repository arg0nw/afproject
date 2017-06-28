/**
 * Created by Blindsight3D on 6/28/2017.
 */
/**
 * Created by Blindsight3D on 6/28/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('DoctorController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('DoctorController');

    $scope.getDoctors = function(){
        $http.get('/api/doctors').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.doctors=response.data;
            console.log($scope.doctors)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getDoctor = function(){
        var id=$routeParams.id;

        $http.get('/api/doctors/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.doctor=response.data;
            console.log($scope.doctor)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

}]);