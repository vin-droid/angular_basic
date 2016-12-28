
angular.module('myapp')

.directive('helloWord',function(){
	return{
		// template: '<span>{{item.name}}</span> - <em>{{item.age}}</em>',
		templateUrl: '/views/user.html'
		// template: 'hey!'
	}
})

;



