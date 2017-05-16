//child scope can access parent scope, but not other way around

app.controller('charCtrl', ['$scope', function($scope) {

	$scope.characters =[{
		id: 0,
		name: 'Link',
		

	}]


}]);