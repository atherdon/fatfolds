'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Steps Schema
 */

// #{date}
// #{steps}

// #{created_at}
// #{updated_at}

var StepsSchema = mongoose.Schema({

	// date: Date,   
	steps: Number,

    created_at: Date,
    updated_at: Date,


});


StepsSchema.methods.settify = function( data ){

	

	// this.date     = data.date;	
	this.steps    = data.steps;	
	
		


	console.log( this );

	return this;
};

StepsSchema.methods.print = function( data ){
	console.log( data );
};

StepsSchema.methods.printz = function( data ){
	
};


// on every save, add the date
StepsSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


var Steps = mongoose.model('Steps', StepsSchema);

module.exports = Steps;