

// const cars = [
// 	{ make: 'Toyota', yrsOld: 5, mileage: 92399 },
// 	{ make: 'Ford', yrsOld: 12, mileage: 255005 },
// 	{ make: 'Ferrari', yrsOld: 9, mileage: 12966 },
// 	{ make: 'Subaru', yrsOld: 9, mileage: 111266 },
// 	{ make: 'Toyota', yrsOld: 2, mileage: 41888 },
// 	{ make: 'Tesla', yrsOld: 3, mileage: 57720 }
//   ];


// const wellDriverCars = cars.filter (car => car.mileage > 20000)

// wellDriverCars.forEach(car => console.log(car));


// Using a data-centric approach minimizes code and increases flexibility
const lightSequence = [
	{color: 'red', time: 3000},
	{color: 'yellow', time: 2000},
	{color: 'green', time: 1000}
];

// Cache the divs for the lights
const lightEls = document.querySelectorAll('main > div');

// Variable to track the current light
let curLightIdx = 0;  // Start with red object

function renderLight(cb) {
	// Turn all lights off
	lightEls.forEach(el => el.style.backgroundColor = 'black');
	//match the color of element with the item in the array (by index)
	lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
	// Invoke the callback when this light's time has expired
	setTimeout(cb, lightSequence[curLightIdx].time);
}

function renderNextLight() {
	renderLight(renderNextLight);
	// Increment and reset to zero when 3 is reached
	curLightIdx = ++curLightIdx % 3;
}
  
// Make it start!
renderNextLight();