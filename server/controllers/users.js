// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');




// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
		  	add: function(req, res) {
		  		var d = new Date();
				current_date = d.getTime();
			  	var user = User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, created_at: d, date_string: current_date})
			  	console.log(user);
				  user.save(function(err, results) {
					  if(err) {
						  console.log(err);
					  } else {
						  res.json(results);
					  }
				  	})
		  	}
  		}
})();
