// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

// Create UserSchema

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  created_at: Date,
  date_string: Number
});

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)

var Mongoose = mongoose.model('User', UserSchema);