'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

/**
 * Regions Schema
 */

// #{name}

// #{created_at}
// #{updated_at}

var Regions = mongoose.Schema({

    name : String,

	   
    created_at: Date,
    updated_at: Date,


});


RegionsSchema.methods.settify = function( data ){

	

	this.name     = data.name;	
	
		


	console.log( this );

	return this;
};

RegionsSchema.methods.print = function( data ){
	console.log( data );
};

RegionsSchema.methods.printz = function( data ){
	// var genre = new Genre();
	// genre
};



var Regions = mongoose.model('Regions', RegionsSchema);

module.exports = Regions;