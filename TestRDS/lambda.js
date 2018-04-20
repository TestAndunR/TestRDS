let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {
	console.log(event);
	let email = event.email;
	console.log(email);

	let inserts = [event.email];

	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end/destroy the DB connection after it's used
	rds.query({
		instanceIdentifier: 'TestRDS',
		query: 'CREATE TABLE users(Email varchar(255) NOT NULL UNIQUE);',
		inserts: []
	}, function (error, results, connection) {
		if (error) {
			response = error;
			console.log("Error occurred");
			throw error;
		} else {
			response = "Successfully added a new entry";
			console.log(results);
		}
		connection.end();
		callback(null, response);

	});
}