var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

//Note a lot of inportant(maybe) methods for users located at: /four/users1.js

var WeightSchema = new Schema({
	
	weight : Number,
	created_at: Date,
	
});
//create method for display date + weight + 'lbs' string

var NeckSchema = new Schema({

	neck : Number,
	created_at: Date,
	
});
//create method for display date + neck + 'in' string

var ChestSchema = new Schema({
	
	chest : Number,
	created_at: Date,

	
	
});
//create method for display date + neck + 'in' string


var BicepSchema = new Schema({
	
	bicep : Number,
	created_at: Date,

	
	
});
//create method for display date + neck + 'in' string


var WaistSchema = new Schema({
	
	waist : Number,
	created_at: Date,

	
	
});
//create method for display date + waist` + 'in' string


var HipsSchema = new Schema({
	
	hips : Number,
	created_at: Date,

	
	
});
//create method for display date + hips + 'in' string


var ThighSchema = new Schema({
	
	thigh : Number,
	created_at: Date,

	
	
});
//create method for display date + thigh + 'in' string

var UserSchema = new Schema({


	weigth: [WeightSchema],
	neck  : [NeckSchema],
	chest : [ChestSchema],
	bicep : [BicepSchema],
	waist : [WaistSchema],
	hips  : [HipsSchema],
	thigh : [ThighSchema],

	goals: {

		weigth: WeightSchema,
		neck  : NeckSchema,
		chest : ChestSchema,
		bicep : BicepSchema,
		waist : WaistSchema,
		hips  : HipsSchema,
		thigh : ThighSchema,
	},

	baseline: {

		weigth: WeightSchema,
		neck  : NeckSchema,
		chest : ChestSchema,
		bicep : BicepSchema,
		waist : WaistSchema,
		hips  : HipsSchema,
		thigh : ThighSchema,
	},

    meta: {
	    // votes: Number,
	    favs:  Number
	}



});


// Create the 'Weight' model out of the 'WeightSchema'
mongoose.model('Weight', WeightSchema);

// Create the 'Neck' model out of the 'NeckSchema'
mongoose.model('Neck', NeckSchema);

// Create the 'Chest' model out of the 'ChestSchema'
mongoose.model('Chest', ChestSchema);

// Create the 'Bicep' model out of the 'BicepSchema'
mongoose.model('Bicep', BicepSchema);

// Create the 'Waist' model out of the 'WaistSchema'
mongoose.model('Waist', WaistSchema);

// Create the 'Hips' model out of the 'HipsSchema'
mongoose.model('Hips', HipsSchema);

// Create the 'Thigh' model out of the 'ThighSchema'
mongoose.model('Thigh', ThighSchema);

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);


// @todo maybe don't enable small models or enable, not sure
// @todo maybe this is not the better database structure, but who care? this will make things easy