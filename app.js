var app = angular.module('pearApp',['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'main.html'
	})

	.otherwise({
		redirectTo: '/'
	})

});

app.controller('MainCtrl', function($scope, firebase){

});