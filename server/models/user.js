// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// Create UserSchema

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: {type: String, required: true, index: {unique: true}},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true, select: false},
  created_at: Date,
  date_string: Number
});

// hash the password before user is saved

UserSchema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password'))
	{
		return next();
	}
	else
	{
		bcrypt.hash(user.password, null, null, function(err, hash){
			if(err){
				return next(err);
			}
			else{
				user.password = hash;
				next();
			}
		})
	}
})

//method to compare a given password with the database hash

UserSchema.methods.comparePassword = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password);
}

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)

var Mongoose = mongoose.model('User', UserSchema);