/**
 * Created by Blindsight3D on 6/29/2017.
 */
var myApp= angular.module('myApp');
myApp.controller('notIssuedPrescriptionsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
    console.log('notIssuedPrescriptionsController');



        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchFish   = '';     // set the default search/filter term

        // create the list of sushi rolls
        $scope.sushi = [
            { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
            { name: 'Philly', fish: 'Tuna', tastiness: 4 },
            { name: 'Tiger', fish: 'Eel', tastiness: 7 },
            { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
        ];


    $scope.getNotIssuedPrescriptions = function(){
        $http.get('/api/notIssuedPrescriptions').then(successCallback, errorCallback);
        function successCallback(response){
            $scope.issuedPrescriptions=response.data;
            console.log($scope.issuedPrescriptions)
        }
        function errorCallback(error){
            console.log("Error");
        }
    }

    $scope.sendPrescriptionDetails = function(prescriptionID){
        $http.post('/api/prescriptions/'+prescriptionID, $scope.book).then(successCallback, errorCallback);
        function successCallback(response){
            window.location.href="#/issueDrugs";
        }
        function errorCallback(error){
            console.log("errrrrrrrrrrrrrrrrrrrrrr");
        }
    }
}]);