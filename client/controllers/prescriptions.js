/**
 * Created by SamithaHeanthenna-PC on 6/29/2017.
 */

//controller used for prescription controlling
var myApp=angular.module('myApp');

myApp.controller('PrescriptionsController',['$scope', '$http','$location','$routeParams', function ($scope, $http,$loction,$routeParams) {
    console.log('PrescriptionsController loaded...');

    $scope.getPrescriptions = function () {
        $http.get('/api/prescriptions').then(successCallback,errorCallback);
        function successCallback(response){
            $scope.prescriptions=response.data;
            console.log($scope.prescriptions)
        }
        function errorCallback(error) {
            console.log("Error in prescription controller");
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