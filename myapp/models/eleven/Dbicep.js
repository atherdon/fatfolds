var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BicepSchema = new Schema({
	userId : Number,
	date : Date,
	bicep : Number,

	
	
});

//create method for display date + neck + 'in' string

// Create the 'Bicep' model out of the 'BicepSchema'
mongoose.model('Bicep', BicepSchema);