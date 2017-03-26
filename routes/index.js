var express = require('express');
var router = express.Router();

// var Workouts= require('../models/workouts');

/* GET home page. */
router.get('/', function(req, res, next) {


	// 1. get workouts by userId --> workouts
	// 2. get exercises by userId --> exercises
	console.log('homies');
    console.log(util.inspect( req.query, false, null ));

    //get user id
	var userId = req.user._id;
	// console.log( userId );

	//find all workouts for current user using user id from current login
	Workouts.find({ userId: userId }, function(err, workouts){

		console.log(workouts);
		if (err){
			console.log(err);
			res.end(err);
		}

		else {

			var object = {
				user: userData,
				workouts: workouts,
				exercises: exercises
			}

			// get exercises

			// res.render('workouts/workouts', {
			// 	title: 'Workouts',
			// 	workout: workouts
			// });
			res.render('index', { title: 'Express' });

		}
	});

	


  // 
});


// get exercises :https://github.com/mndewitt/fitness/blob/master/app/controllers/analytics.server.controller.js
// think about setup an MVC structure like at: https://github.com/mndewitt/fitness/blob/master/app/routes/exercises.server.routes.js

// Models folder#5
router.get('/location', function(req, res, next){

	//get all locations from database
	console.log('location');
    console.log(util.inspect( req.query, false, null ));

	re.render('', {});

});

router.get('/sessions/:session_id/add_set', function(req, res, next){

	// add set for created session
	console.log('sessions/:session_id/add_set');
    console.log(util.inspect( req.query, false, null ));

    dateformat(history[i].Date, 'm/d/yy')

    var sessionId = req.params.session_id;

    //change to sessions, but same logic
    Exercise.find({ _id: sessionId }, function(err, exercises) {
		res.json(exercises); //sends back the selected exercise
	});

	//then create a new set, with current sessionId

	// re.render('', {});

});

// Let's assume that this is workouts
// workuts
// workouted
// wurkout
// wirkout
// workoutafter

router.get('/sessions/:session_id', function(req, res, next){

	//view session data
	console.log('/sessions/:session_id');
    console.log(util.inspect( req.query, false, null ));

	var sessionId = req.params.session_id;

    //change to sessions, but same logic
    Exercise.find({ _id: sessionId }, function(err, exercises) {
		res.json(exercises); //sends back the selected exercise
	});


	// re.render('', {});


});
router.get('/exercises/exercise_id', function(req, res, next){

	// view data about exercise
	console.log('exercises/exercise_id');
    console.log(util.inspect( req.query, false, null ));
	re.render('', {});


});
router.post('/exercises/add', function(req, res, next){

	//add exercise using form and save to database
	console.log('exercises/add:');
    
    console.log(util.inspect( req.body, false, null ));

    req.body.name
    req.body.type

    var object = {

    }

	re.render('', {});

});
router.get('/exercises', function(req, res, next){

	// get list of all saved exercises
	// mayber we need to show it by workoutId or by date range. 
	// Not sure right now

	console.log('exercises');
    console.log(util.inspect( req.query, false, null ));
	res.render('', {});

});
router.get('/weight', function(req, res, next){

	// get list of all weights
	console.log('weight');
    console.log(util.inspect( req.query, false, null ));

    //But add later find by userId
    //Change to Weight

    Exercise.find(function(err, exercises) {
		//returns all exercises
		res.json(exercises);
	});


	re.render('', {});

});
router.post('/weight/add', function(req, res, next){

	// add new weight from form to database
	console.log('weight/add:');
    
    console.log(util.inspect( req.body, false, null ));

    dateformat(history[i].Date, 'm/d/yy')

    //change to Weight

    Exercise.create({

		name    : req.body.name,
		weight  : req.body.weight,
		sets    : req.body.sets,
		reps    : req.body.reps,
		weekday : req.body.weekday

	}, function(err, exercises) {

		Exercise.find({ weekday: req.body.weekday }, function(err,exercises) {
			res.json(exercises); //finds all exercises after create and returns them
		});

	});



	re.render('', {});

});
router.post('/weight/add_target', function(req, res, next){

	// add weight target from form to database
	console.log('weight/add target:');

    console.log(util.inspect( req.body, false, null ));
    dateformat(history[i].Date, 'm/d/yy')
	re.render('', {});

});

router.get('/sessions', function(req, res, next){

	//get list of all saved sessions
	console.log('sessions');
    console.log(util.inspect( req.query, false, null ));

	//get user id
	var userId = req.user._id;


	res.render('', {
		title:'Add workout'
	});

	// re.render('', {});

});
router.post('/sessions/add', function(req, res, next){

	// add new session from form to database
	console.log('sessions/add:');

    console.log(util.inspect( req.body, false, null ));

    // dateformat(history[i].Date, 'm/d/yy')

	//get user id
	var userId = req.user._id;

	Workouts.create({
		title: req.body.title,
		hours: req.body.hours,
		date: req.body.date,
		user: userId,
	});

	res.redirect('/workouts/');



});

// for any cases - django controllers https://github.com/kickdrumventures/fitness/blob/master/fitness/workouts/views.py


router.post('workout/add', function(req, res, next){


	console.log('workout/add');
	console.log(util.inspect( req.body, false, null ));

	var object = {
		user: req.body.userId,

		exercises: exercises
	}


	res.render('', { title: 'Express' });

})



//// Folder nine
// Let's store this for API stuff




//============================================================================================
// MODEL
//============================================================================================

// // Load the exercise model
// var Exercise = require('./models/exercise');
// // Load the food model
// var Food = require('./models/food');


// module.exports = function(app) {

// //============================================================================================
// // ROUTES FOR EXERCISE
// //============================================================================================

// //*********************************************************
// // Get all exercises
// //*********************************************************
// app.get('/api/exercises', function(req,res) {
// 	Exercise.find(function(err,exercises) {
// 		//returns all exercises
// 		res.json(exercises);
// 	});
// });

// //*********************************************************
// // Get one exercise
// //*********************************************************
// app.get('/api/exercises/:exercise_id', function(req,res) {

// 	Exercise.find({ _id: req.params.exercise_id }, function(err, exercises) {
// 		res.json(exercises); //sends back the selected exercise
// 	});
// });

// //*********************************************************
// // Create exercise
// //*********************************************************
// app.post('/api/exercises', function(req,res) {
// 	Exercise.create({

// 		name: req.body.name,
// 		weight: req.body.weight,
// 		sets: req.body.sets,
// 		reps: req.body.reps,
// 		weekday: req.body.weekday

// 	}, function(err, exercises) {
// 		Exercise.find({ weekday: req.body.weekday }, function(err,exercises) {
// 			res.json(exercises); //finds all exercises after create and returns them
// 		});
// 	});
// });

// //*********************************************************
// // Get exercises from day
// //*********************************************************
// app.get('/api/exercises/day/:exercise_day', function(req,res) {

// 	Exercise.find({ weekday: req.params.exercise_day }, function(err, exercises) {
// 		res.json(exercises); //sends back the selected exercise
// 	});
// });

// //*********************************************************
// // Edit/update exercise
// //*********************************************************
// app.put('/api/exercises/:exercise_id', function(req,res) {
// 	Exercise.findById(req.params.exercise_id, function(err, exercises) {

// 		exercises.name = req.body.name;
// 		exercises.weight = req.body.weight;
// 		exercises.sets = req.body.sets;
// 		exercises.reps = req.body.reps;

// 		exercises.save(function(err, exercises) {
			
// 			Exercise.find({ weekday: req.body.weekday }, function(err,exercises) {
// 				//returns all exercises
// 				res.json(exercises);
// 			});
// 		});
// 	});
// });

// //*********************************************************
// // Delete exercise
// //*********************************************************
// app.delete('/api/exercises/:exercise_id/:viewAll', function(req,res) {
// 	Exercise.findById(req.params.exercise_id,function(err,exercises) {

// 		// Find exercises from that day so you can return those only			
// 		if(req.params.viewAll == 'false')
// 			var day = exercises.weekday;

// 		Exercise.remove( {
// 			_id : req.params.exercise_id
// 		}, function(err, exercises) {

// 			if(req.params.viewAll == 'true') {
// 				//get and return all the exercises
// 				Exercise.find(function(err,exercises) {

// 					res.json(exercises);
// 				});

// 			} else {
// 				//get and return all the exercises from that day after you deleted
// 				Exercise.find({ weekday: day },function(err,exercises) {

// 					res.json(exercises);
// 				});
// 			}
// 		});
// 	});
// });

// //*********************************************************
// // Delete all exercises
// //*********************************************************
// app.delete('/api/exercises/', function(req,res) {
// 	//removes all
// 	Exercise.remove({}, function(err, exercises) {

// 		//get and return all the exercises after you deleted
// 		Exercise.find(function(err,exercises) {

// 			res.json(exercises);
// 		});
// 	});
// });

// //============================================================================================
// // ROUTES FOR FOOD
// //============================================================================================

// //*********************************************************
// // Get all food
// //*********************************************************
// app.get('/api/food', function(req,res) {
// 	Food.find(function(err,food) {
// 		//returns all exercises
// 		res.json(food);
// 	});
// });

// //*********************************************************
// // Create food
// //*********************************************************
// app.post('/api/food', function(req,res) {
// 	Food.create({

// 		name: req.body.name,
// 		calories: req.body.calories,
// 		protein: req.body.protein,
// 		fat: req.body.fat,
// 		carbs: req.body.carbs

// 	}, function(err, exercises) {
// 		Food.find({},function(err,exercises) {
// 			res.json(exercises); //finds all exercises after create and returns them
// 		});
// 	});
// });

// //*********************************************************
// // Delete food
// //*********************************************************
// app.delete('/api/food/:food_id/', function(req,res) {
// 	Food.findById(req.params.food_id,function(err,exercises) {

// 		Food.remove( {
// 			_id : req.params.food_id
// 		}, function(err, food) {

// 				//get and return all the food
// 				Food.find(function(err,food) {

// 					res.json(food);
// 				});
// 		});
// 	});
// });

// };



module.exports = router;
