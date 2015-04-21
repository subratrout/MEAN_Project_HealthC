// Users Controller
forum_app.controller('UsersController', function($scope, UsersFactory, localStorageService)
{

	$scope.addUser = function(){
		localStorageService.set('user', $scope.new_user);

		UsersFactory.addUser($scope.new_user, function(data){
			
		})
			$scope.new_user = {};
	}

})