var myApp= angular.module('myApp');
myApp.controller('DrugsController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('DrugsController');
	$scope.errormsg="";
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
	$scope.addNewDrugs = function (name,drgCategory,unitPrice,tot,sname,semail,minQty) {
		console.log(name+'/'+drgCategory+'/'+unitPrice+'/'+tot);
		


		if(drgCategory ==null || drgCategory=="")
		{
			$scope.errormsg="Drug Category is required";
		}
		else if(name ==null || name=="" )
		{
			$scope.errormsg="Drug Name is required";
		}
		else if(unitPrice== null || unitPrice <=0)
		{
			$scope.errormsg="Enter valid unit price";
		}
		else if(sname == null || sname=="")
		{
			$scope.errormsg="Supplier name is required";
		}
		else if(semail == null || semail=="")
		{
			$scope.errormsg="Supplier email is required";
		}
		else
		{
		$http.get('/api/drug/'+name).then(successCallback, errorCallback);
		function successCallback(response){
			console.log(response.data);
   			if(response.data=='true')
   			{
   				$scope.errormsg="";
   				var drugObj = {
   					"drugname":name,
   					"drugcategory":drgCategory,
   					"quentity":tot,
   					"unitprice":unitPrice,
   					"supliername":sname,
   					"supplieremail":semail,
   					"status":"true",
   					"minorder":minQty
   				
   				};
   				console.log(response.data);

   				$http.post('/api/drugs', drugObj).then(successCallback, errorCallback);
				function successCallback(response){
   						window.location.href="#!/drugs";
				}
				function errorCallback(error){
    				console.log("errrrrrrrrrrrrrrrrrrrrrr");
				}
				
   			}
   			else
   			{
   				$scope.errormsg="Invalid Name";
   			}
		}
		function errorCallback(error){
   		
   		
		}
	}

	}


	$scope.updateDrug=function() {
		var id=$routeParams.id;

		$http.put('api/drugs/'+id,$scope.drug).then(successCallback,errorCallback);
		function successCallback(response)
		{
			window.location.href="#!/drugs";
		}
		function errorCallback(error)
		{
			console.log('err from getBooks')
		}
		
	}

	$scope.addNewBatch = function (id,qty,drgName,batchNo,total,expDate,manuDate) {
		console.log(id+'     ??      '+drgName+'/'+batchNo+'/'+total+'/'+expDate+'/'+manuDate+'//'+qty);

		var batchObj = {
			"batchName": batchNo,
    		"qty": total,
    		"drugname": drgName,
    		"expireDate": expDate,
       		"manufacDate": manuDate
    		
		};
		if(expDate.getTime() > manuDate.getTime())
		{	
		$http.post('/api/batch', batchObj).then(successCallback, errorCallback);
		function successCallback(response){

		$http.get('/api/drugQty/'+drgName).then(successCallback, errorCallback);
		function successCallback(response){
			$scope.selectedDrug=response.data;
			console.log($scope.selectedDrug);
			console.log($scope.selectedDrug[0]._id+'     ??      '+drgName+'/'+batchNo+'/'+total+'/'+expDate+'/'+manuDate+'//'+$scope.selectedDrug.qty);
		

			$scope.selectedDrug[0].quentity=$scope.selectedDrug[0].quentity+total;


			$http.put('api/drg/'+$scope.selectedDrug[0]._id , $scope.selectedDrug[0]).then(successCallback,errorCallback);
		function successCallback(response)
		{
			window.location.href="#!/drugs";
		}
		function errorCallback(error)
		{
			console.log('err from getBooks')
		}

		}
		function errorCallback(error){
   		
   		
		}

   					window.location.href="#!/drugs";
		}
		function errorCallback(error){
    				console.log("errrrrrrrrrrrrrrrrrrrrrr");
		}
		}
		else
		{
			console.log("date error");
		}

	}



}]);