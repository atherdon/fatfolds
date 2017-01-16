var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var NeckSchema = new Schema({
	userId : Number,
	date : Date,
	neck : Number,

	
	
});

//create method for display date + neck + 'in' string

// Create the 'Neck' model out of the 'NeckSchema'
mongoose.model('Neck', NeckSchema);