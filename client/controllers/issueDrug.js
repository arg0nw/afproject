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

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug1Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug1").attr({
                        "max": $scope.drug1Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
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

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug2Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug2").attr({
                        "max": $scope.drug2Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
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

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug3Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug3").attr({
                        "max": $scope.drug3Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.getPrescriptionDetails4 = function(){
        var id=$routeParams.id;

        $http.get('/api/prescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.prescription=response.data;

            $scope.drug4 = response.data.drug4;

            $scope.showDrug4 = $scope.drug4;

            var name = $scope.drug4;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug4Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug4").attr({
                        "max": $scope.drug4Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
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

            $scope.drug5 = response.data.drug5;

            $scope.showDrug5 = $scope.drug5;

            var name = $scope.drug5;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug5Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug5").attr({
                        "max": $scope.drug5Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
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

            $scope.drug6 = response.data.drug6;

            $scope.showDrug6 = $scope.drug6;

            var name = $scope.drug6;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug6Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug6").attr({
                        "max": $scope.drug6Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
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

            $scope.drug7 = response.data.drug7;

            $scope.showDrug7 = $scope.drug7;

            var name = $scope.drug7;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug7Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug7").attr({
                        "max": $scope.drug7Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
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

            $scope.drug8 = response.data.drug8;

            $scope.showDrug8 = $scope.drug8;

            var name = $scope.drug8;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug8Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug8").attr({
                        "max": $scope.drug8Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
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

            $scope.drug9 = response.data.drug9;

            $scope.showDrug9 = $scope.drug9;

            var name = $scope.drug9;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug9Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug9").attr({
                        "max": $scope.drug9Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
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

            $scope.drug10 = response.data.drug10;

            $scope.showDrug10 = $scope.drug10;

            var name = $scope.drug10;

            if(name != null) {
                $http.get('/api/drugQty/' + name).then(successCallback, errorCallback);
                function successCallback(response) {
                    $scope.drugDetails = response.data;
                    console.log($scope.drugDetails)
                    $scope.drug10Qty = $scope.drugDetails[0].quentity;
                    console.log($scope.drugDetails[0].quentity);

                    $("#drug10").attr({
                        "max": $scope.drug10Qty,
                        "min": 0
                    });


                }

                function errorCallback(error) {
                    console.log("Error");
                }
            }
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

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

            var id = response.data._id;

            window.location.href="#!/successDrugIssue/"+id;
        }
        function errorCallback(error){
            console.log(error);
        }
    }

    $scope.getSuccessPrescriptionByID = function(){

        var id=$routeParams.id;

        $http.get('/api/successPrescriptions/'+id).then(successCallback, errorCallback);
        function successCallback(response){
            $scope.successPrescription=response.data;
            console.log($scope.successPrescription)
        }
        function errorCallback(error){
            console.log("errrrrrrrrrrrrrrrrrrrrrr");
        }
    }


}]);