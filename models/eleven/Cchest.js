var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ChestSchema = new Schema({
	userId : Number,
	date : Date,
	chest : Number,

	
	
});

//create method for display date + neck + 'in' string

// Create the 'Chest' model out of the 'ChestSchema'
mongoose.model('Chest', ChestSchema);