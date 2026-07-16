// Lesson 8 - Objects

// Another type of value in JS

// function is another type of value

// groups of multipl values toghther

// const product = {
//   name: "R", 
//   price:1090
// };

// property value pair seperate them with comma
// product.name = dot notation
// product[name] = bracket notation
// product.notEist - undefined

// bracket notation - use properties that don't work with dot notation, we can also use vaiable 

// we can new property like product.newProperty = value

// delete product.newProperty; // delett the property in the object

// why we use object - make our code more organized, insted of creating multiple value just bunch of value toghther 

// more details about the object 

const product = {
  name: "RY"
};

console.log(product);
product.name; //'RY'
product['name']; //'RY'

console.log(product.ship-time); //Uncaught ReferenceError: time is not defined
console.log(product['ship-time']); //undefined

const product2 = {
  name: "RY",
  ['ship-time']: '2 day'
};

const product3 = {
  name: "RY",
  'ship-time': '2 day'
};

//inside the object we can save any type of value(data)

const product4 = {
  name: "RY",
  'ship-time': '2 day',
  rating: {
    1: '5 star',
    2: '4 star'
  },
  fun1: function fucntion1() {
    console.log("fun1 inside object");
  },
  fun() {
    console.log("fun inside object");
  }
};

JSON.stringify(product4); //'{"name":"RY","ship-time":"2 day","rating":{"1":"5 star","2":"4 star"}}'

console.log(product4); //{name: 'RY', ship-time: '2 day', rating: {…}}

console.log(product4.rating.1); //Error because 1, 2 treated as string which we unable to access it
console.log(product4.rating[1]);

console.log(product4.fun1());
console.log(product4.fun());

// build in objects

// window, document, Math and console is build in objects (they are provide by the language)

// JSON and localStorage is also a build an object

// JSON - Javascript object notation, similar to js objects but has less features, it support the double quotes but single quote is also work

object 

  // {
  //   name: 'RY',
  //   age: 15
  // }

// JSON - it almost support all the programming language, used to send the data between 2 computers

// {"name":"RY","age":15}

const product5 = {
  name: "RY",
  'ship-time': '2 day',
  rating: {
    1: '5 star',
    2: '4 star'
  },
  a: [1, 2],
  fun1: function fucntion1() {
    console.log("fun1 inside object");
  },
  fun() { // it is shorthand fucntion in object
    console.log("fun inside object");
  }
};

JSON.stringify(product5);

'{"name":"RY","ship-time":"2 day","rating":{"1":"5 star","2":"4 star"},"a":[1,2]}'

// JSON.stringify() - It used to create json from js object
// JSON.parse() - It convert js object from json

// local storage - it is used to store value more permanent, it only support string
// variable - are temporary - if we refresh or clos the page all the variables are deleted

localStorage.setItem('msg', 'Test local storage')
localStorage.getItem('msg');

// diffrence null and undefined

// null - intentionally want something to be empty let a;

// most of scenario it work same 

// JS have extra features called Auto-Boxing for eample 

  // string also have proprty

  console.log("string".length); // 6
  console.log("string".toUpperCase()); // STRING

  // string has the property and fucntion

  // JS automatically wrap the sting and make it object with property and method

  // Auto-Boxing also work with number and boolean but not with null and undefined

  3.0.toString() //'3'
  true.toString() //'true'

// Object are References

const a = {
  age: 13
};

// a will be stored in memory with some reference which has the value location age:13 // it hold the reference which point to the object

const b = a // it will not create a copy of the object only copying a reference 

// 

const c = {
  age: 13
};

console.log(a === b); // true, it is storing the same reference
console.log(a === c); //false, it is because it storing the reference of the object not the value
console.log(a.age === c.age); //true

//shorcuts for the object 

const d = {
  age: 13
};

// const age = d.age;
const {age} = d; //destructuring, if the variable name and object key is same
console.log(age) //13

const e = {
  age: 13,
  p: 12
};

const {p} = e;
console.log(p) //12

// if we have same propery and same value we can use a single 

const f = {
  p: p //p value is object of e
}
const g = {
  p //it will same like f object, it is called as shorthand property
}

// short hand method 

const product25 = {
  fun1: function fucntion1() {
    console.log("fun1 inside object");
  },
  fun() { // it is shorthand method
    console.log("fun inside object");
  }
};

// Lesson 8 Exercises - Objects
// 8a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.

// const basketball = {
//   name: 'basketball',
//   price: 2095
// };
// console.log(basketball); //{name: 'basketball', price: 2095}

// 8b. Continuing from 8a, let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.

// const basketball = {
//   name: 'basketball',
//   price: 2095
// };
// console.log(basketball.price += 500); //2595


// 8c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console. 

const basketball = {
  name: 'basketball',
  price: 2095,
  ['delivery-time']: '3 days'
};
console.log(basketball); //{name: 'basketball', price: 2095, delivery-time: '3 days'} 

// 8d. Create a function 'compare Price (product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.

// const product125 = {
//   name: 'product1',
//   price: 12
// };

// const product225 = {
//   name: 'product2',
//   price: 13
// };

// function compareProducts (product125, product225) {
//   if (product125.price < product225.price) {
//     return product125;
//   }
//   return product225;
// }
// console.log(compareProducts(product125, product225)); //{name: 'product1', price: 12}


// 8e. Create a function 'isSameProduct(product1, product2)', which returns true if 2 products have the same values inside ('name' and 'price'). If not, return false. Create 2 products and try out the function. (Hint: objects are references so you can't compare them directly).

const product125 = {
  name: 'product1',
  price: 12
};

const product225 = {
  name: 'product1',
  price: 12
};

function isSameProduct(product125, product225) {
  // if (product125.name === product225.name && product125.price === product225.price) {
  //   return true;
  // }
  // return false;

  return (product125.name === product225.name && product125.price === product225.price);
}

console.log(isSameProduct(product125, product225)); // true

// 8f. Using Google or an A.I. tool, search how to convert a string to all lowercase with JavaScript ('Good Morning' => 'good morning')

console.log('Good Morning'.toLowerCase()); //good morning

// 8g. Search how to repeat a string many times ('test' 2 times => 'testtest')

console.log('test'.repeat(2)); //testtest

// 8h. We'll add localStorage to the calculator project. First, make a copy of the project from exercise 7g (see the solution for 7g if needed). Whenever we update the calculation, save it using .setItem() When the page is loaded, get the calculation using .getItem() Use a default value of " if a calculation doesn't exist in local storage


// updated in calculator html file

// Challenge Exercises

// 8i. We'll improve the coin flip game from exercise 6j to be like the rock paper scissors game.

// • Copy the code from exercise 6j (see the solution for 6j if needed).
// • Create 2 buttons to play the game heads tails
// • When clicking 'heads' play the game with guess = 'heads'.
// • When clicking 'tails' play the game with guess = 'tails'.
// • Create a function 'playGame(guess)' to reuse the code.

// updated in coin-flip html file


// 8j. Create a score object { wins: 0, losses: 0 }, update the score each time after playing, and display the score in the console.

  // const score = {
  //   wins: 0, 
  //   losses:  0
  // };

  // function playing() {
  //   score.wins += 1;
  //   score.losses += 1;
  // }
  // playing();

  // updated in coin-flip html file as well

// 8k. Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string).

// updated on coin-flip html file