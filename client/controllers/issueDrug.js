/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('IssueDrugController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('IssueDrugController');


    $scope.drugDetails=null;
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


    $scope.getPrescriptionDetails1 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            $scope.drug1 = response.data.drug1;

            $scope.showDrug1 = $scope.drug1;

            var name = $scope.drug1;


                $http.get('/api/drugQty/'+name).then(successCallback, errorCallback);
                function successCallback(response){
                    $scope.drugDetails=response.data;
                    console.log($scope.drugDetails)
                    $scope.drug1Qty = $scope.drugDetails[0].quentity;
                    console.log( $scope.drugDetails[0].quentity);

                    $("#drug1").attr({
                        "max" : $scope.drug1Qty,
                        "min" : 0
                    });


                }
                function errorCallback(error){
                    console.log("Error");
                }
        }
        function errorCallback(error){
            console.log("Error");
        }



    }



    $scope.getPrescriptionDetails2 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            $scope.drug2 = response.data.drug2;

            $scope.showDrug2 = $scope.drug2;

            var name = $scope.drug2;


            $http.get('/api/drugQty/'+name).then(successCallback, errorCallback);
            function successCallback(response){
                $scope.drugDetails=response.data;
                console.log($scope.drugDetails)
                $scope.drug2Qty = $scope.drugDetails[0].quentity;
                console.log( $scope.drugDetails[0].quentity);

                $("#drug2").attr({
                    "max" : $scope.drug2Qty,
                    "min" : 0
                });


            }
            function errorCallback(error){
                console.log("Error");
            }
        }
        function errorCallback(error){
            console.log("Error");
        }



    }

    $scope.getPrescriptionDetails3 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            $scope.drug3 = response.data.drug3;

            $scope.showDrug3 = $scope.drug3;

            var name = $scope.drug3;


            $http.get('/api/drugQty/'+name).then(successCallback, errorCallback);
            function successCallback(response){
                $scope.drugDetails=response.data;
                console.log($scope.drugDetails)
                $scope.drug3Qty = $scope.drugDetails[0].quentity;
                console.log( $scope.drugDetails[0].quentity);

                $("#drug3").attr({
                    "max" : $scope.drug3Qty,
                    "min" : 0
                });


            }
            function errorCallback(error){
                console.log("Error");
            }
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionDetails5 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug5 = response.data.drug5;

            $scope.showDrug5 = drug5;

            console.log(drug5);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionDetails6 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug6 = response.data.drug6;

            $scope.showDrug6 = drug6;

            console.log(drug6);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }


    $scope.getPrescriptionDetails7 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug7 = response.data.drug7;

            $scope.showDrug7= drug7;

            console.log(drug7);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionDetails8 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug8 = response.data.drug8;

            $scope.showDrug8 = drug8;

            console.log(drug8);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionDetails9 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug9 = response.data.drug9;

            $scope.showDrug9 = drug9;

            console.log(drug9);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }








    $scope.getPrescriptionDetails10 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            var drug10 = response.data.drug10;

            $scope.showDrug10 = drug10;

            console.log(drug10);

        }
        function errorCallback(error){
            console.log("Error");
        }
    }


}]);