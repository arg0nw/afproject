/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssueDrugController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssueDrugController');



    $scope.getPatientsByNIC = function(){

        var nic=$routeParams.nic;

        $http.get('/api/pid/'+nic).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.patient=response.data;
            console.log($scope.patient)
        }
        function errorCallback(error){
            console.log(nic);
        }
    }

    $scope.getPrescriptionByID = function(){
        var id=$routeParams.id;
        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescriptions=response.data;
            console.log($scope.prescriptions)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescription = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;
            console.log($scope.prescription)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }



}]);