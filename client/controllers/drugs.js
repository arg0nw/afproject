var myApp= angular.module('myApp');
myApp.controller('DrugsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('DrugsController');

	$scope.getDrugs = function(){
		$http.get('/api/drugs').then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.drugs=response.data;
   			console.log($scope.drugs);
   		
		}
		function errorCallback(error){
   		
   		
		}
	}
	$scope.total=0;
	$scope.openNav=function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	}

  	$scope.closeNav=function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	}

	$scope.getDrug = function(){
		console.log('drug');
		var id=$routeParams.id;
		$http.get('/api/drugs/'+id).then(successCallback, errorCallback);
		function successCallback(response){
   			$scope.drug=response.data;
   			$scope.subject="Drug Reorder Request For "+$scope.drug.drugname;
   			$scope.message="Dear Officer,\nThe Quantities of the below Drugs are Low.\nName     : "+$scope.drug.drugname+"\nCategory : "+$scope.drug.drugcategory+" \nPrice(Rs)    :"+$scope.drug.unitprice+"\nQuantity in Hand :"+$scope.drug.quentity+"\nPlease be kind enough to send us new stocks \n\nBest Regards, \nChief Pharmasist";
   			console.log($scope.subject);
		}
		function errorCallback(error){
   		
   		
		}
	}

	$scope.sendEmail=function(supplieremail,subject,message){
		let mailOptions = {
    	'from': '"Cheif Pharmacist" <chiefpharmacist01@gmail.com>', // sender address
    	'to':supplieremail , // list of receivers
    	'subject': subject, // Subject line
    	'text': message 
     	
		};
		$http.post('/api/mail',mailOptions).then(successCallback, errorCallback);
		function successCallback(response){
   			console.log('done');
   			window.location.href='#!/drugs';
		}
		function errorCallback(error){
   		
   		 
		}
		console.log(mailOptions);
	}

	$scope.cal1 = function(num1,num2) {
		$scope.total=num1*num2;
	}

	$scope.cal2 = function(num1,num2) {
		$scope.total=num1*num2;
	}
	$scope.cal3 = function(num1,num2,num3) {
		console.log(num1+''+num2+''+num3);
		$scope.total=num1*num2*num3;
	}
	$scope.cal4 = function(num1) {
		//console.log(num1+''+num2+''+num3);
		$scope.total=num1;
	}
	$scope.cal5 = function(num1,num2,num3) {
		//console.log(num1+''+num2+''+num3);
		$scope.total=num1*num2*num3;
	}

}]);