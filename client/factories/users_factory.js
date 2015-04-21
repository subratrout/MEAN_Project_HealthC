forum_app.factory('UsersFactory', function($http){
	var factory = {};
	var users = [];

	factory.addUser = function(info, callback){

		$http.post('/add_user', info).success(function(){

		});
	};

	return factory;
})