var express = require('express');
var router  = express.Router();

//models
var Steps    = require('../models/three/steps');
var Calories = require('../models/three/calories');



// this router related to calories and steps counter part.
// models used from folder "three"

/* GET users listing. */
router.get('/', function(req, res, next) {

	var message = 'Let\'s take a look at your steps';
	var goal    = 'Your Daily Step Goal:';
	var number  = 8000;

	var data  = require("../models/three/steps2.json");
	
	// var str = JSON.stringify(data, null, 2);
	// console.log( str );

 	//contains formatted json data
	var steps = [];
    //used for making the straight line at target steps
    var target = [];

    //populate target array so it draws a straight line at 8000
    for(var i = 0; i < 365; i++) {
      target.push(8000);
    }

	for(var i = 0; i < data.length; i++) {


        var stepsPerDay = [];
        stepsPerDay[0] = data[i].date.slice(0, data[i].date.indexOf('T'));
        stepsPerDay[1] = data[i].step;
        steps.push(stepsPerDay);


	}

	//for gauge chart
	var count = 0;
	for (var i = 0; i < data.length; i++) {
		count += data[i].step;
	}
	 var average = Math.floor(count/365);
	// console.log( steps );

  // res.send('respond with a resource');
	res.render('indexCalories', {
		title   : 'Express',
		message : message,
		goal    : goal,
		number  : number,
		data: {
			steps  : steps,
			target : target,
			average  : average,
		} 
	});

});


router.get('steps/all', function(req, res, next){

	res.send('respond with a resource');
});

router.get('steps/month', function(req, res, next){

	res.send('respond with a resource');
});

router.get('steps/week', function(req, res, next){

	res.send('respond with a resource');
});

router.get('steps/threemonth', function(req, res, next){

	res.send('respond with a resource');
});

router.get('steps/halfyear', function(req, res, next){

	res.send('respond with a resource');
});

router.get('steps/year', function(req, res, next){

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

router.get('insertC',function(req, res, next){

	// console.log(util.inspect( req.body, false, null ));	

	var calories = req.body.calories;
	
	

});

//----------------------
//get calories from json file

router.get('/cal', function(req, res, next) {

	var message = 'Now for your macronutrient goals';
	var goal    = 'Target calories per day:';
	var number  = 3100;

	var data     = require("../models/three/calories2.json");
	// var str = JSON.stringify(data, null, 2);

	//chart
	var target  = 3100;
    var fat     = target * 0.2;
    var carbs   = target * 0.5;
    var protein = target * 0.3;

	// console.log( obj );
	// console.log( str );

	//calories per day
	var calories = [];
    var target2  = [];

    //populate target array
    for(var i = 0; i < 365; i++) {
      target2.push(3100);
    }

    for(var i = 0; i < data.length; i++) {
        var caloriesPerDay = [];
        caloriesPerDay[0] = data[i].date.slice(0, data[i].date.indexOf('T'));
        caloriesPerDay[1] = data[i].calories;
        calories.push(caloriesPerDay);
	}


  // res.send('respond with a resource');
	res.render('indexCalories2', {
		title   : 'Express',
		message : message,
		goal    : goal,
		number  : number,
		data: {
			fat     : fat,
			carbs   : carbs,
			protein : protein,

			calories: calories,
			target2 : target2,
		} 
	});

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

module.exports = router;
