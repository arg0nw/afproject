/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssueDrugController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssueDrugController');

    $scope.getPatientsByID = function(){
        //var id=$routeParams.id;
            var id = '5954fe15f36d28458af644a6' ;
        $http.get('/api/patients/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.patient=response.data;
            console.log($scope.patient)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionByID = function(){
        //var id=$routeParams.id;
        var id = '5954e8fef36d28458af63a6f' ;
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