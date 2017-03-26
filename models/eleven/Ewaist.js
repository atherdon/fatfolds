var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WaistSchema = new Schema({
	userId : Number,
	date : Date,
	weight : Number,

	
	
});

//create method for display date + waist` + 'in' string

// Create the 'Waist' model out of the 'WaistSchema'
mongoose.model('Waist', WaistSchema);