var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var HipsSchema = new Schema({
	userId : Number,
	date : Date,
	hips : Number,

	
	
});

//create method for display date + hips + 'in' string

// Create the 'Hips' model out of the 'HipsSchema'
mongoose.model('Hips', HipsSchema);