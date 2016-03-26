'use strict';

/**
 * Name : Server.js
 * Description : It is used to handle the node js server functionality and initialize the express application
 */

/* Load Application Settings */
var settings = require('./settings');

process.env.NODE_ENV = settings.environment;

var mongoose = require('mongoose'),
	// connectionString = 'mongodb://' + settings.db.hostname + '/' + settings.db.name;
	connectionString = 'mongodb://' + settings.db.username + ':' + settings.db.password + '@' + settings.db.hostname + '/' + settings.db.name;

// Bootstrap db connection
mongoose.connect(connectionString);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected');
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

/* Load Express Application */
var app = require('./config/express')();

//Start Node JS Application Server
app.listen(settings.port, function() {
    console.log('\x1b[32m', 'ICICI App Server started in ' + settings.environment + ' Environment @ Port : ' + settings.port);
});
