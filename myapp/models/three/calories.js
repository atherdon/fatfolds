// https://github.com/m-rstewart/Fitness/blob/master/app.spec.js

'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Calories Schema
 */

// #{date}
// #{calories}

// #{created_at}
// #{updated_at}

var CaloriesSchema = mongoose.Schema({

    // date : String,
    calories: Number,
	   
    created_at: Date,
    updated_at: Date,


});


CaloriesSchema.methods.settify = function( data ){

	

	this.name     = data.name;	
	
		


	console.log( this );

	return this;
};

CaloriesSchema.methods.print = function( data ){
	console.log( data );
};

CaloriesSchema.methods.printz = function( data ){
	// var genre = new Genre();
	// genre
};


// on every save, add the date
CaloriesSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


var Calories = mongoose.model('Calories', CaloriesSchema);

module.exports = Calories;