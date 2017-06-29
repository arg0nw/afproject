/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssueDrugController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssueDrugController');

    $scope.getPatientsByID = function(){
        //var id=$routeParams.id;
            var id =
        $http.get('/api/patients/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.patients=response.data;
            console.log($scope.patients)
        }
        function errorCallback(error){
            console.log("Error");
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


}]);