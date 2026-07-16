// index

// Lesson - JavaScript Concepts to Know Before Learning React

// Callback Functions in JavaScript - a fucntion which can be passes as argument and completed its eceution aftet parent ecutoion

// const callbackButton  = document.querySelector('.callback-button');

// callbackButton.addEventListener('click', () => {
//   console.log("A"); // this is callback fucntion
// });

// const callbackTimeout = setTimeout(() => {
//   alert('i\'m call back fucntion')
// })
// clearTimeout(callbackTimeout);

// const callbackInterval = setInterval(() => {
//   alert('i\'m call back fucntion')
// }, 1);
// clearTimeout(callbackInterval);

// Promises in JavaScript - It is used to make asychronous call in JS

// you do not want a specific function to run until the parent function has finished running or a specific time has passed.

// setTimeout(() => {
//   console.log("A")
//   setTimeout(() => {
//     console.log("B")
//     setTimeout(() => {
//       console.log("C")
//     }, 5000)
//   }, 5000)
// }, 5000)


// the above scenario is referred as Callback Hell

// Callback hell is a big issue caused by coding with complex nested callbacks

// primary reason for using promises is to prevent callback

// const promiseObj = new Promise((resolve, reject) => {
//   const rah = 'rahul1';
//   if (rah === 'rahul') {
//     resolve('Hey RY');
//   } else {
//     reject('Bye RY');
//   }
// });
// promiseObj.then((msg) => {
//   console.log(msg);
// });

// promiseObj.catch((msg) => {
//   console.log(msg);
// })

// const promiseObj = new Promise((resolve, reject) => {
//   const rah = 'rahul1';
//   if (rah === 'rahul') {
//     resolve('Hey RY');
//   } else {
//     reject('Bye RY');
//   }
// });
// promiseObj.then((msg) => {
//   console.log(msg);
// }).catch((msg) => {
//   console.log(msg);
// }).finally((msg) => {
//   console.log(msg);
// })

// Map() - it interat all data of array and return and new array, modify its elements using a callback function

// const nums = [2,4,6];
// const result  = nums.map((val) => val*2)

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const result = matrix.map((num) => num.map((newnum) => newnum * 2;))

// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
//   { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
//   { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
// ];

// const result = users.map((user) => {
//     let name = user.firstName + ' ' + user.lastName;
//         let age = user.age;

//     return [name, age];
// })

// console.log(result);

// object destructuring 

// const company = {
//   name: "TechCorp",
//   employees: [
//     { name: "Alice", role: "Developer" },
//     { name: "Bob", role: "Designer" }
//   ]
// };

// const {name, emp:[{empName1, role1}, {empName2, role2}]};

// Filter() and Find() in JavaScript

// Filter() it is used to fetch the truly element and retrun a new array

// const b = [2, 4, 5];
// const result = b.filter((a) => a>1);
// console.log(result);

// const b = [2, 4, 5];
// const result = b.findLastIndex((a) => a>2);
// console.log(result); //2

// const b = [2, 4, 5];
// const result = b.findLast((a) => a>2);
// console.log(result); //5

// const b = [2, 4, 5];
// const result = b.findIndex((a) => a>2);
// console.log(result); // 1

// const b = [2, 4, 5];
// const result = b.find((a) => a>2);
// console.log(result);// 4

// const b = [2, 4, 5];
// const result = b.indexOf(5);
// console.log(result);// 2

// ==

// const Susan = {
//   firstName: "Susan",
//   lastName: "Steward",
//   age: 14,
//   hobbies: {
//     hobby1: "singing",
//     hobby2: "dancing"
//   }
// };

// const {firstName, lastName, age, hobbies:{hobby1}} = Susan;
// console.log(firstName, lastName, age); // Susan Steward 14

// merging 2 arrays 

const a = [1,2];
const b = [3,4];

const c = [...a, ...b]; // c output will be //  [1, 2, 3, 4]

// merging 2 objects  

const a = {a:1,b:2};
const b = {c:3,d:4};

const c = {...a, ...b}; //{a: 1, b: 2, c: 3, d: 4}


const a = {a:1,b:2};
const b = {b:3,d:4};
c = {...a, ...b}; //{a: 1, b: 3, d: 4}

const a = {a:1,b:2};
const b = {b:3,d:4};
const c = Object.assign({}, b, a) //{b: 2, d: 4, a: 1}

const c = Object.assign({}, a, b)  //{a: 1, b: 3, d: 4}

Unique Value - Set() in JavaScript - 

let animals = [
  {
    name:'Lion',
    category: 'carnivore'
  },
  {
    name:'dog',
    category:'pet'
  },
  {
    name:'cat',
    category:'pet'
  },
  {
    name:'wolf',
    category:'carnivore'
  }
];

let category = animals.map((animal)=>animal.category);
console.log(category); //["carnivore" , "pet" , "pet" , "carnivore"]

//wrap your iteration in the set method like this
let category = [...new Set(animals.map((animal)=>animal.category))];
console.log(category); ////["carnivore" , "pet"]

const a = new Set([1, 2, 3, 4, 3, 2]);
Set(4) {1, 2, 3, 4}


// Dynamic Object keys in JavaScript

let lion = {
  category: "carnivore"
};
lion.rahul = 'HHH';
console.log(lion); //{category: 'carnivore', rahul: 'HHH'}

delete lion.rahul;

// let category = 'carnivore';
// let lion = {
//   'lion-baby' : "cub",
//   [category] : true,
// };

// console.log(lion); 


// reduce() in JavaScript -  It can replace the filter() and find() methods and is also quite handy when doing map() and filter() methods on large amounts of data.




// how we can update 2 object with same key and show the first objecr key data 


// Optional chaining in JavaScript (?.) - Explicit Check

  // Optional chaining is a safe way to access nested object properties

  let users = [
    {
        name: "Sam",
        age: 64,
        hobby: "cooking"
        },
      { name: "Bruno", age: 56 }
    ];

    users.forEach((user) => {
      console.log(user.hobby);
    });


    const rahul = {
      name: 'Rahul',
      nam: () =>  {
        console.log("A");
      },
      nam2: function(){
        console.log("B");
      },
      d() {
        console.log("C");
      }
    }

    // rahul.nam?.();

    // Fetch API & Errors in JavaScript

    fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((data) => console.log(data)).catch(() => console.log("Error"));

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {console.log(response);response.json()}).then((data) => console.log(data)).catch(() => console.log("Error"));

// for of and for in 

for in is used to iterate the value in object 

let person = {
  firstName: "R",
  lastName: {
    a: {
      b: 2
    }
  },
  rank: 43
};
let userId = ind = "";
let i;
for (i in person) {
  userId += person[i];
  console.log(userId);
  ind += i
  console.log(ind);
} 



  
// How JavaScript Handles Asynchronous Code - event loop to handle asynchronous code

// Call Stack: Synchronous code is executed directly in the call stack.
// Event Queue: Asynchronous operations (like setTimeout, fetch(), etc.) are placed in the event queue after they complete their operation.
// Event Loop: The event loop continuously checks if the call stack is empty. Once the call stack is clear, it moves the next function from the event queue(callback queue , task queue) to the call stack for execution. 

ONLY IF THE CALL STACK IS EMPTY ??

callback queue (task queue) => queue of tasks that are waiting to be executed
Web APIs => handle asynchronous operations outside the call stack (setTimeout(), setInterval(), DOM events (click, keypress, etc.)), don't block the call stack and once it is done it move to callback queue

fetch())
Microtask Queue (also called the "Job Queue") - special queue for tasks that need to be executed before the next event loop iteration => Promise.then() or Promise.catch() handlers, MutationObserver callbacks

Task Queue - standard asynchronous tasks like setTimeout() and setInterval().
Microtask Queue - Promise handlers and MutationObserver

