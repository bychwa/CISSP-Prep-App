var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'CISSP' });
});
router.get('/home', function(req, res, next) {
  	res.render('index', { 
  		choices:['one','two']
  });
});

router.get('/exams/downloads', function(req, res, next) {
  	res.send(200);
});

router.get('/exams/downloads/:id', function(req, res, next) {
  	
  	var path = require('path');
  	fs = require('fs')
	  fs.readFile(path.resolve(__dirname, '../bin/exams/'+req.params.id), 'utf8', function (err,data) {
  		if (err) {
  		    return console.log(err);
  		  	res.send(500);
  		}

	  	res.send(data);
	});
  	
});

module.exports = router;
