/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssuedPrescriptionsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssuedPrescriptionsController');

    $scope.getIssuedPrescriptions = function(){
        $http.get('/api/issuedPrescriptions').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.issuedPrescriptions=response.data;
            console.log($scope.issuedPrescriptions)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getIssuedPrescriptionByID = function(){
        var id=$routeParams.id;

        $http.get('/api/issuedPrescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.issuedPrescription=response.data;
            console.log($scope.issuedPrescription)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.addIssuedPrescriptions = function(){

        $http.post('/api/issuedPrescriptions', $scope.issuedPrescription).then(successCallback, errorCallback);
        function successCallback(response){
            window.location.href="#/issuedPrescriptions";
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

}]);