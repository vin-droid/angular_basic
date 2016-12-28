angular.module('myapp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        	url: '/home',
        	templateUrl: 'views/home.html',
        	controller: 'personController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit  
            url: '/about',
            templateUrl: 'views/about-me.html'     
        });
    })
.controller('personController', function ($scope,'helloWord') {
	$scope.list = [{name:'vineet1',age:123},{name:'vineet2',age:125},{name:'vineet3',age:127},{name:'vineet4',age:122},{name:'vineet5',age:123}]
	$scope.addPerson = function () {
		$scope.list.push({name: $scope.name ,age: $scope.age})

	}
})
.directive('helloWord',function(){
	return{
		// template: '<span>{{item.name}}</span> - <em>{{item.age}}</em>',
		templateUrl: '/views/user.html'
		// template: 'hey!'
	}
})
;
