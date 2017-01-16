var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ThighSchema = new Schema({
	userId : Number,
	date : Date,
	thigh : Number,

	
	
});

//create method for display date + thigh + 'in' string

// Create the 'Thigh' model out of the 'ThighSchema'
mongoose.model('Thigh', ThighSchema);