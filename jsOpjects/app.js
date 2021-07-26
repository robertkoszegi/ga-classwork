
 const game = {
	title: 'Guess the Number!',
	biggestNum: 100,
	smallestNum: 1
  };


// const catalog = {
// 	sku123: 12.50,
// 	sku456: 24.00,
// 	sku789: 17.20,
// 	sku111: 20.45
//   }
  
//   let sku = '';
//   while (sku !== 'quit') {
// 	sku = prompt('Enter SKU or "quit" to exit: ');
// 	let price = catalog[sku];
// 	if (sku !== 'quit') alert(`The price of ${sku} is ${price}`);
//   }
  
//-- Checking if property exists
// let sku = '';
// while (sku !== 'quit') {
//   sku = prompt('Enter SKU or "quit" to exit: ');
//   if (sku in catalog) { // <-- 'in' operator
// 	let price = catalog[sku];
// 	alert(`The price of ${sku} is ${price}`);
//   } else if (sku !== 'quit') {
// 	alert('Invalid SKU - try again');
//   }
// }
//   console.log(catalog);
  
//-- Deleting property
// const geniuses = {
// 	Einstein: true,
// 	Newton: true,
// 	Snooki: false
//   };

//   console.log(geniuses['Snooki'])
  
//   // see ya!
//   delete geniuses.Snooki;
  
//   console.log(geniuses['Snooki'])


//-- Iterating over obect properties
// for (let key in game) {
// 	console.log(`The value of the ${key} property is ${game[key]}`);
//   }
// backtick ` allow creating string with variables inserted with {}


// Object.values(game).forEach(function(val) {
// 	console.log(val);
//   });


//-- Property shorthand syntax
//standart:
// const latitude = getLat('Disneyland');
// const longitude = getLng('Disneyland');

// const location = {
//   name: 'Disneyland',
//   latitude: latitude,
//   longitude: longitude
// };

// //shorthand:
// const latitude = getLat('Disneyland');
// const longitude = getLng('Disneyland');

// const location = {
//   name: 'Disneyland',
//   latitude,
//   longitude
// };