/**
 * file created to complete assignment5 in Node.js
 *
 * Created by Allen Liu
 */

//get the mongoose dependencies
var mongoose = require('mongoose');
var async = require('async');

//establish the database connection
mongoose.connect('mongodb://localhost:27017/user_info');
var db = mongoose.connection;
//make the new Schema
var schema = mongoose.Schema({
		name: 'string',
		email: 'string'
});

//create a User model with the database
var User = mongoose.model("User", schema);
//if there is a connection error
db.on('error', console.error.bind(console, 'connection error:'));

//then create 10000 records into our database
async.times(10000, function(n, callback){
	//create a new record each time
	var each_user = new User({name: "Allen" + n, email: "allen" + n + "@email.com"});
	//save the document into the database
	each_user.save(function(err){
		if(err)
		{
			console.log("Error!");
		}
	});
}, function(err, users){
	if(err)
	{
		console.log("There is an error while inserting into the database");
	}
	console.log(users.length());
	//close the database when finished
	db.close();
});
