/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssuedPrescriptionsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssuedPrescriptionsController');

    // $scope.addIssuedPrescription = function(){
    //
    //     $http.post('/api/addIssuedPrescription', $scope.book).then(successCallback, errorCallback);
    //     function successCallback(response){
    //         //window.location.href="#/books";
    //     }
    //     function errorCallback(error){
    //         console.log("error");
    //     }
    // }

    $scope.addIssuedPrescription=function (doctorid,doctorname, hospitalid, detail, drug1, drug2, drug3, drug4, drug5, drug6, drug7, drug8, drug9, drug10,drugQty1, drugQty2, drugQty3, drugQty4, drugQty5, drugQty6, drugQty7, drugQty8, drugQty9, drugQty10, nic, pname, page) {
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
            "drug9":drug9,
            "drug10":drug10,
            "drugQty1":drugQty1,
            "drugQty2":drugQty2,
            "drugQty3":drugQty3,
            "drugQty4":drugQty4,
            "drugQty5":drugQty5,
            "drugQty6":drugQty6,
            "drugQty7":drugQty7,
            "drugQty8":drugQty8,
            "drugQty9":drugQty9,
            "drugQty10":drugQty10,
            "patientnic":nic,
            "name":pname,
            "age":page
        };
        $http.post('/api/addIssuedPrescription', pesobj).then(successCallback, errorCallback);
        function successCallback(response){
            window.location.href="#!/prescriptions";
        }
        function errorCallback(error){
            console.log(error);
        }
    }

}]);