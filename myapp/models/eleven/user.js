var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

//Note a lot of inportant(maybe) methods for users located at: /four/users1.js

var options = {
		timestamps: { 
			createdAt: 'created_at',
			updatedAt: 'updated_at' 
		}	
	};

var WeightSchema = new Schema({
	
	weight : Number,
	// created_at: { type: Date, default: Date.now },
	
	},
	options
);
//create method for display date + weight + 'lbs' string

var NeckSchema = new Schema({

	neck : Number,
	// created_at: { type: Date, default: Date.now },
	
	},
	options
);
//create method for display date + neck + 'in' string

var ChestSchema = new Schema({
	
	chest : Number,
	// created_at: { type: Date, default: Date.now },

	},
	options
);
//create method for display date + neck + 'in' string


var BicepSchema = new Schema({
	
	bicep : Number,
	// created_at: { type: Date, default: Date.now },
	
	},
	options
);
//create method for display date + neck + 'in' string


var WaistSchema = new Schema({
	
	waist : Number,
	// created_at: { type: Date, default: Date.now },

	},
	options
);
//create method for display date + waist` + 'in' string


var HipsSchema = new Schema({
	
	hips : Number,
	// created_at: { type: Date, default: Date.now },
	
	},
	options
);
//create method for display date + hips + 'in' string


var ThighSchema = new Schema({
	
	thigh : Number,
	// created_at: { type: Date, default: Date.now },
	
	},
	options
);
//create method for display date + thigh + 'in' string

var UserSchema = new Schema({

	gender : String, //@todo change to { 'male', 'female' } mixed type ;ater
	age    : Number,
	height : Number,
	unit   : String,
	bmi    : String, //@todo maybe number, but offer to calcualte it for simple version of workflow

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
	},

	// created_at: { type: Date, default: Date.now },


	},
	options
);

// using this method for building table at views
UserSchema.methods.aboutMe = function (){

	return {
		[ label: 'Gender:', value: this.gender ],
		[ label: 'Age:',    value: this.age ],
		[ label: 'Height:', value: this.height ],
		[ label: 'Unit:',   value: this.unit ],
		[ label: 'BMI:',    value: this.bmi ],
	}

};

UserSchema.methods.getLastValue = function ( type ){

	console.log(type);

	var last_element_index = this.type.length-1;

	console.log(this.type[last_element_index]);

	return this.type[last_element_index];

};

UserSchema.methods.startingStats = function (){

	// this.goals

	this.getLastValue('weight');
// neck  : NeckSchema,
// 		chest : ChestSchema,
// 		bicep : BicepSchema,
// 		waist : WaistSchema,
// 		hips  : HipsSchema,
// 		thigh : ThighSchema,
	// getLastValue('weight');
	// this.weight

	return {
		[ label: 'Weight',   current: this.getLastValue('weight') , goal: this.goals.weight ],
		[ label: 'Neck',     current: this.getLastValue('neck')   , goal: this.goals.neck ],
		[ label: 'Chest',    current: this.getLastValue('chest')  , goal: this.goals.chest ],
		[ label: 'Bicep(R)', current: this.getLastValue('bicep')  , goal: this.goals.bicep ],
		[ label: 'Waist',    current: this.getLastValue('waist')  , goal: this.goals.waist ],
		[ label: 'Hips',     current: this.getLastValue('hips')   , goal: this.goals.hips ],
		[ label: 'Thigh',    current: this.getLastValue('thigh')  , goal: this.goals.thigh ],
	}

};

// Create the 'Weight' model out of the 'WeightSchema'
var Weight = mongoose.model('Weight', WeightSchema);

// Create the 'Neck' model out of the 'NeckSchema'
var Neck   = mongoose.model('Neck', NeckSchema);

// Create the 'Chest' model out of the 'ChestSchema'
var Chest  = mongoose.model('Chest', ChestSchema);

// Create the 'Bicep' model out of the 'BicepSchema'
var Bicep  = mongoose.model('Bicep', BicepSchema);

// Create the 'Waist' model out of the 'WaistSchema'
var Waist  = mongoose.model('Waist', WaistSchema);

// Create the 'Hips' model out of the 'HipsSchema'
var Hips   = mongoose.model('Hips', HipsSchema);

// Create the 'Thigh' model out of the 'ThighSchema'
var Thigh  = mongoose.model('Thigh', ThighSchema);

// Create the 'User' model out of the 'UserSchema'
var User   = mongoose.model('User', UserSchema);



module.exports = Weight;
module.exports = Neck;
module.exports = Chest;
module.exports = Bicep;
module.exports = Waist;
module.exports = Hips;
module.exports = Thigh;
module.exports = User;

// @todo maybe don't enable small models or enable, not sure
// @todo maybe this is not the better database structure, but who care? this will make things easy