var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var socketio = require('socket.io');

var server = app.listen(3000);
var io = socketio.listen(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //this line can be here because it's part of the middleware chain

// parse application/json
app.use(bodyParser.json()); //this line can be here because it's part of the middleware chain

app.use('/', routes); //this line needs to come after bodyParser because routes needs the info that bodyParser will return

swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);
});

app.engine('html', swig.renderFile); //for html files, we use swig to render the file (with dynamic info)

app.set('view engine', 'html'); //lets the computer know that express app is serving html files

app.set('views', __dirname + '/views'); //sets views to be pointing to /views;  allows the computer to know that index = index.html

swig.setDefaults({ cache: false });

app.listen(3000, function() { //starts the server
	console.log("server listening");
});

/* Not necessary because index.js is dealing with routing

app.all('/', function(req, res, next) {
	//need to get verb & url
	console.log(req.method, req.url, res.statusCode);
	res.send("under construction");
	next();
})

app.get('/tweets', function(req, res) {
	//res.send("hello! this is the callback");
	// var people = [{name: 'Ingrid'}, {name: 'Sungwon'}, {name: 'Emily'}];
	// res.render( 'index', {title: 'Grace Hopper People', people: people} );


});

app.post('/tweets', function(req, res) {
	//res.send("no news is good news!");
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
*/