var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  console.log("the body's name is " + req.body.name);
  res.redirect('/');
});

module.exports = router;

router.use(express.static('public'));

// say that a client GET requests the path /users/nimit
router.get( '/users/:name', function (req, res) {
  var tweets = tweetBank.find(function(item) {
  	return item.name === req.params.name;
  });
  console.log("this is the tweets array" + tweets);
  //console.log(' {tweets: tweets} is ' + Object.keys({ tweets: tweets });
	res.render( 'index', { tweets: tweets, showForm: true, user: req.params.name } );
	

  //console.log(req.params.name, tweets);

   // --> 'nimit'
});

// router.get('/stylesheets/style.css', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));



	//why doesn't this work?
	//res.sendFile(__dirname + '../public/stylesheets/style.css');
// })



