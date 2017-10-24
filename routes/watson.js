var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var submitted;

var tone_analyzer = new ToneAnalyzerV3({
  username: 'a32ea9d2-b998-443b-87b7-6aef61ba95d3',
  password: 'A2gBtjiGnf0A',
  version_date: '2017-09-21'
});


/* This is just a basic hookup to connect to the Watson API  */


router.get('/', function(req, res, next) {
	res.send('This is the watson page');
})

router.post('/', function(req, res, next) {
	console.log(req);
	
	tone_analyzer.tone({ text: req.body.entry },
	  function(err, tone) {
	    if (err)
	      console.log(err);
	    else
	      console.log(JSON.stringify(tone, null, 2));
	});
})

module.exports = router;
