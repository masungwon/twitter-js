var express = require('express');
var router = express.Router();
var path = require('path');

var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;

router.use(express.static('public'));

// router.get('/stylesheets/style.css', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));



	//why doesn't this work?
	//res.sendFile(__dirname + '../public/stylesheets/style.css');
// })



