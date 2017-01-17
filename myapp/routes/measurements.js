var express = require('express');
var router  = express.Router();

//models
// var Steps    = require('../models/three/steps');
// var Weight = require('../models/eleven/Aweight');
var Users  = require('../models/eleven/user');



// this router related to measurements part.
// models used from folder "eleven"

/* GET measurements listing. */
router.get('/', function(req, res, next) {


	var B = new Users();

	B.getLastValue('jaja');

	var new_weight = new Weight({ weight:70 });

	B.weight.push( new_weight );
	

  // res.send('respond with a resource');
	res.render('index', {
		title   : 'Express',
		// message : message,
		// goal    : goal,
		// number  : number,
		// data: {
		// 	steps  : steps,
		// 	target : target,
		// 	average  : average,
		// } 
	});

});


router.get('measurements/all', function(req, res, next){

	res.send('respond with a resource');
});



router.get('savea', function(req, res, next){

	var firstRow  = new Steps({
	     steps : 8000,

	});

	firstRow.save(function(err){
		if (err) throw err;

  		console.log('Steps created!');
	});

	Steps.find(function(err, steps) {
	  if (err) {
	  	throw err;
	  	console.log('parasha!');
	  }

	  // object of all the videos
	  console.log( steps );
	});

	// res.send('respond with a resource');
});

router.get('saveb', function(req, res, next){


	var firstRow  = new Calories({
	     steps : 8000,

	});

	firstRow.save(function(err){
		if (err) throw err;

  		console.log('Steps created!');
	});

	Calories.find(function(err, calories) {
	  if (err) {
	  	throw err;
	  	console.log('parasha!');
	  }

	  // object of all the videos
	  console.log( calories );
	});


});


router.get('insertS',function(req, res, next){

	// console.log(util.inspect( req.body, false, null ));	

	var steps   = req.body.steps;
	
	

});


router.get('/timer', function(req, res, next) {

	res.render('timer', {
		title   : 'Express',
		// message : message,
		// goal    : goal,
		// number  : number,
		// data: {
		// 	steps  : steps,
		// 	target : target,
		// 	average  : average,
		// } 
	});

});

router.get('/add/:type', function(req, res, next){

	$type = false;

	if(  $type == '' ){

		res.render('timer', {
			title   : 'Express',

		});

	}

	if(  $type == '' ){

		res.render('timer', {
			title   : 'Express',

		});

	}

	if(  $type == '' ){

		res.render('timer', {
			title   : 'Express',

		});

	}

	if(  $type == '' ){

		res.render('timer', {
			title   : 'Express',

		});

	}



});



module.exports = router;
