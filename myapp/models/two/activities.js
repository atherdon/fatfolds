'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Activities Schema
 */

// #{activityname_id}
// #{date}
// #{user_id}


// #{created_at}
// #{updated_at}

var ActivitiesSchema = mongoose.Schema({

    activityname_id : Number,
    date  : Date, 
	   
    created_at: Date,
    updated_at: Date,


});


ActivitiesSchema.methods.settify = function( data ){

	

	this.activityname_id     = data.activityname_id;	
	this.date = data.date;
		


	console.log( this );

	return this;
};

ActivitiesSchema.methods.print = function( data ){
	console.log( data );
};

ActivitiesSchema.methods.printz = function( data ){
	// var genre = new Genre();
	// genre
};



var Activities = mongoose.model('Activities', ActivitiesSchema);

module.exports = Activities;