//============================================================================================
// FOOD MODEL
//============================================================================================

// Load mongoose middleware
var mongoose = require('mongoose');

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