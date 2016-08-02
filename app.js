var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');

app.use('/', routes);



swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);
});

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

app.listen(3000, function() {
	console.log("server listening");
});

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