var myApp = angular.module('myApp', ['ngRoute','chart.js']);
myApp.config(function ($routeProvider) {
	//debugger;

		$routeProvider.when('/dash', {
			controller: 'DashController',
			templateUrl: 'views/dash.html'
		})
		.when('/books', {
			controller: 'BooksController',
			templateUrl: 'views/books.html'
		})
		.when('/auth', {
			controller: 'AuthController',
			templateUrl: 'views/auth.html'
		})
		.when('/dash', {
			controller: 'DashController',
			templateUrl: 'views/dash.html'
		})
		.when('/newuser', {
			controller: 'NewUController',
			templateUrl: 'views/new_user.html'
		})
		.when('/books/details/:id', {
			controller: 'BooksController',
			templateUrl: 'views/books_details.html'
		})
		.when('/books/add', {
			controller: 'BooksController',
			templateUrl: 'views/add_book.html'
		})
		.when('/books/edit/:id', {
			controller: 'BooksController',
			templateUrl: 'views/edit_book.html'
		})
		.when('/drugs', {
			controller: 'DrugsController',
			templateUrl: 'views/drugs_home.html'
		})

		.when('/prescriptions', {
			controller: 'PrescriptionsController',
			templateUrl: 'views/viewprescription.html'
		})
        .when('/prescriptions/details/:id', {
            controller: 'PrescriptionsController',
            templateUrl: 'views/prescription_details.html'
        })
		.when('/forget', {
			controller: 'ForgetController',
			templateUrl: 'views/forget.html'
		})

		.otherwise({
			redirectTo: '/dash'
		})

		.when('/prescriptions/add', {
			controller: 'PrescriptionsController',
			templateUrl: 'views/addprescription.html'
		})

		.when('/drugs/mail/:id', {
			controller: 'DrugsController',
			templateUrl: 'views/drugs_email.html'
		})
		.when('/mail', {
			controller: 'EmailsController',
			templateUrl: 'views/emails.html'
		})
		.when('/issueDrugs', {
			controller: 'IssueDrugController',
			templateUrl: 'views/issueDrugs.html'
		})

        .when('/notIssuedPrescriptions', {
            controller: 'notIssuedPrescriptionsController',
            templateUrl: 'views/viewNotIssuedPrescriptions.html'
        })
        .when('/drugs/add/', {
			controller: 'DrugsController',
			templateUrl: 'views/drugs_add.html'
		})
		.when('/drugs/add/batch', {
			controller: 'DrugsController',
			templateUrl: 'views/drugs_addNewBatch.html'
		})

		.otherwise({
			redirectTo: '/'
		})


})