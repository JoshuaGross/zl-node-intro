/**
 * file created to test the mongoose in Node.js
 *
 * Created by Allen Liu
 */

//get the mongoose dependencies
var mongoose = require('mongoose');
//establish the database connection
mongoose.connect('mongodb://localhost:27017/db_test');

//make the new Schema
var schema = mongoose.Schema({
		name: 'string'
});

//get the Model of the Schema we have just created
var Cat = mongoose.model('Cat', schema);

//create new document, but we haven't saved it yet!
var kitty = new Cat({name: "small cat"});
console.log(kitty.name);

//save the document into the database
kitty.save(function(err){
	if(err)
	{
		console.log("Error!");
	}
	console.log("Saved!");
});

//return  all kittends related to this Cat model
Cat.find(function(err, kittens){
	if(err)
	{
		console.log("Error!");
	}
	console.log(kittens);
});

