// Lesson 7 - Functions - best practice us camelCase

// fucntion is used to reuse the code 

// rules for the fucntion name same as variable name

// can't use the special charcter
// can't start with number
// can't use special character only $ and _ is allowed

// return statment - let us get a value out of a function

// return; - it will return undefined

// return 5; //get a value out of a function
// parameter - puts a value into a funnction

// parameter has same rule - use camelCase, it is fucntion like variable, it eist inside the fucntion scope

  // can't use the special charcter
  // can't start with number
  // can't use special character only $ and _ is allowed

// function test (param1) {
//   console.log(param1 * 0.1); //100
// }
// test(1000);


// Lesson 7 Exercises - Functions
// 7a. Create a function called 'greet' that displays the message 'Hello!' in the console. Call / run this function a few times using: greet();

function greet() {
  console.log('Hello!'); //Hello!
}
greet();

// 7b. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!'
// Call the function a few times with different names: greet('Simon');

function greet(name) {
  console.log(`Hello ${name}!`); //Hello Simon!
}
greet('Simon');

// 7c. Try calling greet() without a name (it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
// (Hint: use an if-statement. Since undefined is a falsy value, you can use: if (!name) { ... } to check if ‘name' is undefined).

function greet(name) {
  console.log(`Hello ${name}!`); //Hello undefined!
}
greet();

function greet(name) {
  if (!name) {
    console.log(`Hi there`); 
  } else {
    console.log(`Hello ${name}!`);
  }
}
greet(); //Hi there
greet('RY'); //Hello RY!


// 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
// • Formula: Fahrenheit = (Celsius * 9 / 5) + 32, convertToFahrenheit(25) => 77

function convertToFahrenheit(degreeCelsius) {
  return degreeFahrenheit = (degreeCelsius * 9 / 5) + 32
}
console.log(convertToFahrenheit(40)); //104

// 7e. Create a function 'convertToCelsius(fahrenheit)' that takes a number
// in degrees Fahrenheit and returns a number in degrees Celsius.
// • Formula: Celsius = (Fahrenheit - 32) * 5 / 9
// • convertToCelsius(86) => 30

function convertToCelsius(fahrenheit) {
  return degreeCelsius = (fahrenheit - 32) * 5 / 9
}
convertToCelsius(86);

// 7f. Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit. convertTemperature (25, 'C') => '77F' convertTemperature (86, 'F') => '30C'
// ·Note: return a string, and try to reuse the functions from 7d and 7e.


function convertTemperature(degrees, unit) {
  if (unit ==='C') {
    return degreeFahrenheit = (degrees * 9 / 5) + 32 + 'F';
  } else if (unit ==='F') {
    return degreeCelsius = (degrees - 32) * 5 / 9 + 'C';
  }
}

convertTemperature (25, 'C'); //'77F'
convertTemperature (86, 'F'); //30C'


// 7g. Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). Note: 1 mile = 1.6 km (approximately).
// • convertLength(50, 'miles', 'km') => '80 km' convertLength(32, 'km', 'miles') => '20 miles' convertLength(50, 'km', 'km') => '50 km'
// •

function convertLength(length, from, to) {
  if (from === 'miles' && to === 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}
convertLength(50, 'miles', 'km'); //'80 km'
convertLength(32, 'km', 'miles'); //'20 miles'
convertLength(50, 'km', 'km'); //'50 km'

// 7h. Update convertLength to support converting between km, miles, and also feet. Note: 1 mile = 5280 ft, 1 km = 3281 ft (approximately).
// • convertLength(5, 'miles', 'km') => '8 km'
// • convertLength(5, 'miles', 'ft') => '26400 ft'
// convertLength(5, 'km', 'ft') => '16405 ft'

function convertLength(length, from, to) {
  if (from === 'miles' && to === 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === 'km' && to === 'feet') {
    return `${length * 3281} ${to}`;
  } else if (from === 'feet' && to === 'km') {
    return `${length / 3281} ${to}`;
  } else if (from === 'miles' && to === 'feet') {
    return `${length * 5280} ${to}`;
  } else if (from === 'feet' && to === 'miles') {
    return `${length / 5280} ${to}`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}
convertLength(5, 'miles', 'feet'); //'26400 feet'
convertLength(5, 'km', 'feet'); //'16405 feet'


// 7i. Update convertLength so that if you give it an invalid unit, it will
// return `Invalid unit: ${unit}`.
// convertLength(5, 'Ibs', 'Ibs') => 'Invalid unit: Ibs'

function convertLength(length, from, to) {
  if (from !== 'km' && from !== 'miles' && from !== 'feet') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'km' && to !== 'miles' && to !== 'feet') {
    return `Invalid unit: ${to}`;
  }
  if (from === 'miles' && to === 'km') {
    return `${length * 1.6} km`;
  } else if (from === 'km' && to === 'miles') {
    return `${length / 1.6} miles`;
  } else if (from === 'km' && to === 'feet') {
    return `${length * 3281} ${to}`;
  } else if (from === 'feet' && to === 'km') {
    return `${length / 3281} ${to}`;
  } else if (from === 'miles' && to === 'feet') {
    return `${length * 5280} ${to}`;
  } else if (from === 'feet' && to === 'miles') {
    return `${length / 5280} ${to}`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}
convertLength(5, 'Ibs', 'Ibs'); //'Invalid unit: Ibs'

// Challenge Exercises
// 7j. Create a copy of the Calculator project from exercise 5r (if you didn't do 5r, copy the code for 5r from the solutions).
// •  Notice there's a lot of duplicated code in the buttons.
// • Create a function 'updateCalculation' and reuse the code.

// updated in calculator file

// 7k. Create a copy of the Cart Quantity project from exercise 61.
// Create a function 'updateCartQuantity' and reuse the code.
// 71. Modify ‘updateCartQuantity' from 7h so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner because we can remove the 'else-if' / 'else'.
// if (condition) {
// alert('The cart is full');
// } else {
// }
// if (condition) {
// }
// alert('The cart is full'); return;

// updated in cartqty html file