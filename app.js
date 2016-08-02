var express = require('express');
var app = express();

app.listen(3000, function() {
	console.log("server listening");
});

app.use('/', function(req, res, next) {
	//need to get verb & url
	console.log(req.method, req.url, res.statusCode);
	next();
})

app.all('/news', function(req, res, next) {
	console.log("you've reached the news area");
	next();
})

app.get('/', function(req, res) {
	res.send("hello! this is the callback");
});

app.get('/news', function(req, res) {
	res.send("no news is good news!");
});