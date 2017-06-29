var myApp= angular.module('myApp');
myApp.controller('BooksController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('BooksController');

	$scope.getBooks = function(){
		$http.get('/api/books').then(successCallback, errorCallback);
	function successCallback(response){
   		$scope.books=response.data;
   		console.log($scope.books)
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr1");
	}
	}

	$scope.getBook = function(){
		var id=$routeParams.id;

		$http.get('/api/books/'+id).then(successCallback, errorCallback);
	function successCallback(response){
   		$scope.book=response.data;
   		console.log($scope.book)
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

	$scope.addBook = function(){

		$http.post('/api/books', $scope.book).then(successCallback, errorCallback);
	function successCallback(response){
   		window.location.href="#/books";
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

	$scope.updateBook = function(){
		var id=$routeParams.id;
		$http.put('/api/books/'+id, $scope.book).then(successCallback, errorCallback);
	function successCallback(response){
   		window.location.href="#/books";
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

	$scope.removeBook = function(id){

		$http.delete('/api/books/'+id).then(successCallback, errorCallback);
	
	function successCallback(response){
   		window.location.href="#/books";
	}
	function errorCallback(error){
    	console.log("errrrrrrrrrrrrrrrrrrrrrr");
	}
	}

}]);