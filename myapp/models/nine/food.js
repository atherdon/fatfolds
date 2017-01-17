//============================================================================================
// FOOD MODEL
//============================================================================================

// Load mongoose middleware
var mongoose = require('mongoose');

FoodSchema.methods.display = function (types){

	// this.find({},)
	// find all records and calculate

		
 tr: th Calories
        tr: th Fat
        tr: th Cholesterol
        tr: th Sodium
        tr: th Carbs
        tr: th Protein
        tr: th Sugar
        tr: th Fiber
	return {
		[ label:'Calories', type: types, today: result.today, all: result.all ],
		[ label:'Fat',      type: types, today: result.today, all: result.all ],
	};

	return {

		[ 'Calories', 'Fat', 'Cholesterol', 'Sodium', 'Carbs', 'Protein', 'Sugar', 'Fiber' ],
		[ result[types].today, result[types].today, result[types].today, result[types].today, result[types].today, result[types].today, result[types].today, result[types].today ]
        [ result[types].all, result[types].all, result[types].all, result[types].all, result[types].all, result[types].all, result[types].all, result[types].all ]

	};

};

FoodSchema.methods.displayLastMonth = function (){};
FoodSchema.methods.getAllCalories   = function (){};
FoodSchema.methods.getTodayCalories = function (){};
FoodSchema.methods.getAllFat        = function (){};
FoodSchema.methods.getTodayFat      = function (){};

FoodSchema.methods.all = function (types){

	// this.find({},)
	// find all records and calculate
	// here we'll call different methods depends on types


	return {

	};

};

FoodSchema.methods.today = function (types){

	// here we'll call different methods depends on types

	return {

	};

};

FoodSchema.methods.total = function (types){

	// here we'll call different methods depends on types

	return {

	};

};

// Define food schema
module.exports = mongoose.model('Food', {
	meal    : String,
	food    : String,
	calories: Number,
	fat     : Number,
	cholesterol: Number,
	sodium  : Number,
	carbs   : Number,
	protein : Number,
	sugar   : Number,
	fiber   : Number,
	
	



});