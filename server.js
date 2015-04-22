// call the express
var express = require('express');

// instantiate the app
var app = express();

//require path
var path = require('path');

// set up a static file server that points to "client" directory
app.use(express.static(path.join(__dirname, './client')));

// get body-parser
var bodyParser = require('body-parser');

// Use this to see request
var morgan = require('morgan');

//Set the port for the app

var port = process.env.PORT || 8000;



// APP CONFIGURATION

// use body parser to grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// log all requests to console
app.use(morgan('dev'))
// This goes in our server.js file so that we actually use the mongoose config file!
// Load mongoose before route loading
require('./config/mongoose.js');

require('./config/app.js');

// require routes file
require('./config/routes.js')(app);

app.listen(8000, function(){
	console.log('Server listening to port 8000');
})