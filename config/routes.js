var users = require('./../server/controllers/users.js');

module.exports = function(app){

	

	app.get('/users', function(req, res){
		users.show(req,res);

	});

	app.post('/add_user', function(req, res){
		
		users.add(req,res);
	});

	app.post('/remove_user', function(req, res){
		
		users.remove(req,res);
	});

}