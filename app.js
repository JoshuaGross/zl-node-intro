/**
 * File created by Allen Liu for the Node assignment
 */

//load the library first
var express = require('express');
var app = express();

//defining good routes
app.get('/hello', function(req, res){
	var body = "world";
	//wait for 1 second
	setTimeout(function(){res.end(body);}, 1000);
});
app.get('/world', function(req, res){
	var body = "hello";
	//wait for 1 second
	setTimeout(function(){res.end(body);}, 1000);
});

//all other route return 404 error
app.get("*", function(req, res){
	//wait for 1 second
	setTimeout(function(){res.send(404, "404 File not found");}, 1000);
});

//register the app at localhost:3000
app.listen(3000, '127.0.0.1');