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

    $scope.addPrescription = function(){

        $http.post('/api/prescriptions/add', $scope.prescription).then(successCallback, errorCallback);
        function successCallback(response){
            window.location.href="#!/prescriptions";
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getDrugs = function(){
        $http.get('/api/drugs').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.drugs=response.data;
            console.log($scope.drugs);

        }
        function errorCallback(error){


        }
    }



    $scope.getDetails = function(nic){

        $scope.hospitalid="HEMAS";
        $http.get('/api/pid/'+nic).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;
            console.log($scope.prescription)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.addprescriptions=function (doctorid,doctorname, hospitalid, detail, drug1, drug2, drug3, drug4, drug5, drug6, drug7, drug8, drug9, drug10, nic, pname, page) {
        var pesobj = {
            "doctorid":doctorid,
            "doctorname":doctorname,
            "hospitalid":hospitalid,
            "detail":detail,
            "drug1":drug1,
            "drug2":drug2,
            "drug3":drug3,
            "drug4":drug4,
            "drug5":drug5,
            "drug6":drug6,
            "drug7":drug7,
            "drug8":drug8,
            "drug9":drug9,"patientnic":nic,"name":pname,"age":page
        };
        $http.post('/api/prescriptions/add', pesobj).then(successCallback, errorCallback);
        function successCallback(response){
            window.location.href="#!/prescriptions";
        }
        function errorCallback(error){
            console.log(error);
        }
    }
}]);