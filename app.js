var express = require('express');
var app = express();

app.listen(3000, function() {
	console.log("server listening");
});

app.get('/', function(req, res) {
	res.send("hello! this is the callback");
});