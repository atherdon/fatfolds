
ActivitySchema.methods.getTypes = function (){

	return {

	};

};

ActivitySchema.methods.total = function (types){

	return {

	};

};


// using this method for building table at views
ActivitySchema.methods.display = function (){


	date     :
	type     :
	time     :
	duration :
	distance :
	calories :
	note     :

	var typesArray = this.getTypes();

	for (var i = typesArray.length - 1; i >= 0; i--) {
		typesArray[i] = '';
	}



	return {
		[ date: '', type: false, start: false, duration: false, distance: false, calories: false, note: false ],
		[ date: '', type: false, start: false, duration: false, distance: false, calories: false, note: false ],
		[ date: '', type: false, start: false, duration: false, distance: false, calories: false, note: false ],
		[ date: '', type: false, start: false, duration: false, distance: false, calories: false, note: false ],
		[ date: '', type: false, start: false, duration: false, distance: false, calories: false, note: false ],
	}



	return {
		[ type: '', total: this.gender, unit: false ],
		[ type: '', total: this.age,    unit: false ],
		[ type: '', total: this.height, unit: false ],
		[ type: '', total: this.unit,   unit: false ],
		[ type: '', total: this.bmi,    unit: false ],
	}

};