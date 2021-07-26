

 class Vehicle {
	constructor(vin, make, model) {
	  this.vin = vin;
	  this.make = make;
	  this.model = model;
	  this.running = false; //default to false
	  // return is not needed 
	  // because the new object is returned by default
	}
	start() {
		this.running = true;
		// console.log('running...')
	}
	stop() {
		this.running = false;
		// console.log('stopped...')
	}

	toString() {
		return 'Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
	};

	static about() {
		alert("I'm the Vehicle class!");
	};
}
  
let plane = new Vehicle('X123Y', 'Boeing', "777" );

plane.start();

// plane.stop();


console.log(plane)

// Creating class the old way, with constructor funtion
// function Vehicle(vin, make, model) {
// 	this.vin = vin;
// 	this.make = make;
// 	this.model = model;
// 	this.running = false; //default to false
// }

// Vehicle.prototype.start = function() {
// 	this.running = true;
// 	console.log('running...')
// }

// Vehicle.prototype.stop = function() {
// 	this.running = true;
// 	console.log('stopped...')
// }

// let plane = new Vehicle('X123Y', 'Boeing', "777", );
// plane.start();
// plane.stop();

class Plane extends Vehicle {
	constructor(vin, make, model, airline) {
	  super(vin, make, model);
	  this.airline = airline;
	}
	engageAutoPilot() {
	  console.log('Look Mom, no hands!');
	}
}


let plane2 = new Plane ('X123Y', 'Boeing', "666", "Air Canada" );

plane2.engageAutoPilot();
console.log(plane2)


class Automobile extends Vehicle {
	constructor(vin, make, model, numDoors) {
		super(vin, make, model);
		this.numDoors = numDoors;
	}
	honk() {
		console.log("honk, honk");
	}
}

let car = new Automobile ('XYZ', 'Dodge', 'Caravan', 5);
console.log(car.honk())


// in a card game a card object could be created based on a class. 
// class Cards {
// 	constructor (rank, value, suit) {
// 		this.rank = rank;
// 		this.value = value;
// 		this.suit = suit;
// 	}
// }
