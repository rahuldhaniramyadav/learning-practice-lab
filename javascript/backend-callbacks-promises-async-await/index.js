// Lesson 18 - backend-callbacks-promises-async-await

// backend - it is another computer that manages the data of a website

// XMLHttpRequest - this is build in class provided by JS


const req = new XMLHttpRequest();
// GET - get some information from the server 
// URL - Uniform Resouce Locator 
req.open('GET', 'https://supersimple.dev');
req.send();


// JSON.parse() - to convert json to object 

// other type of data can backedn is response with HTML - 

// contentType: text/html 

// other type of data which backend can send is image 

// browser use for GET request 

function a() {
  console.log("A");
}

function b() {
  console.log("B");
}

function c(fun) {
  console.log("C");
  fun();
};

c(() => {
  a();
  b();
});
//
C
A 
B

// promises 

// better way to handle the asynchronous code, similar to done() function of jasmine 
// let us wait for some code to finish before going to next step
// it is also in build class 

// create promise, below is default synta

// new Promise(() => {

// });

// new Promise(() => {
//   console.log("A");
// });
//A // it run inner function immeditely
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

// we need pass the fucntion which is trigger immediately

// the inner fucntion has 2 parameter one is resolve (when to go on net step) 

// new Promise((resolve) => {
//   a(() => {
//     resolve();
//   })
// });

// it design a such way that allow js to do multiple things at the same type 

function a (fun) {
  console.log("A");
}
new Promise((resolve) => {
  console.log("START");
  a(() => {
    console.log("END");
    resolve(); // it help to say when to go net step
  });
}).then(() => {
  console.log("What now");
});
console.log("Whithout promise");
//START
//A
// pending - i thing it is need some thing to run  but promise status showing as pending

// WHY we use 

// call back has big problem multiple callback make a nesting 

// callback hell 

// function b(fun) {
//   console.log("B");
//   fun();
// }
// function c(fun) {
//   console.log("C");
//   fun();
// }
// function d(fun) {
//   console.log("D");
//   fun();
// }
// function e() {
//   console.log("E");
// }
// function a(fun) {
//   console.log("A");
//   fun();
// }
// a(() => {
//   b(() => {
//     c(() => {
//       d(() => {
//         e();
//       });
//     });
//   });
// });

// now we can do with promise 

// function b(fun) {
//   console.log("B");
//   fun();
// }
// function c(fun) {
//   console.log("C");
//   fun();
// }
// function d(fun) {
//   console.log("D");
//   fun();
// }
// function e() {
//   console.log("E");
// }
// function a(fun) {
//   console.log("A");
//   fun();
// }

// new Promise((resolve) => {
//   a(() => {
//     resolve();
//   })
// }).then(() => {
//   return new Promise((resolve) => {
//     b(() => {
//       resolve();
//     })
//   })
// }).then(() => {
//   return new Promise((resolve) => {
//     c(() => {
//       resolve();
//     })
//   })
// }).then(() => {
//   return new Promise((resolve) => {
//     d(() => {
//       resolve();
//     })
//   })
// }).then(() => {
//   e();
// });
// it is prfing all the console log in new line and after that it showing Promise as object with fulfiled - undefined

// it make the code little bit flat and it is readable 
//  we can give a result a value like 

// new Promise((resolve) => {
//   a(() => {
//     resolve(val1, val2);
//   })
// }).then((val1, val2) => {
//   return new Promise((resolve) => {
//     b(() => {
//       resolve();
//     })
//   })
// });
// ...

// we can run multiple promised at same time, it is achievable with help of promise.all()

// Promise.all() // it run multiple promissed at same time and wait for teh finish

// function a(fun) {
//   console.log("A");
//   fun();
// }
// function b(fun) {
//   console.log("B");
//   fun();
// }

// Promise.all([
//   new Promise((resolve) => {
//     a(() => {
//       resolve();
//     })
//   }), 
//   new Promise((resolve) => {
//     b(() => {
//       resolve();
//     })
//   })
// ]).then(() => {
//   console.log("BBB")
// });

// // we can pass the value also 

// function a(fun) {
//   console.log("A");
//   fun();
// }
// function b(fun) {
//   console.log("B");
//   fun();
// }

// Promise.all([
//   new Promise((resolve) => {
//     a(() => {
//       resolve('Rahul');
//     })
//   }), 
//   new Promise((resolve) => {
//     b(() => {
//       resolve();
//     })
//   })
// ]).then((val) => { 
//   console.log(val); //['Rahul', undefined]
//   console.log("BBB")
// });

// it help us to write code relatively flat, and avoid the nesting

// fetch - better way to make http request 
// fetch() uses a promise 

// fetch('https://www.google.co.in/') //- by default it make get request, it very simple in compare to the MLHTTPRequest

// fetch('https://www.google.co.in/').then((res) => {
//   console.log(res);
//   res.json(); // it will give the data and it is aychronous it retuen a promise.
//   return res.json(); //- return is say to wait for this and after that go to net step
// })

// fetch('https://www.google.co.in/').then((res) => {
//   return res.json(); //- return is say to wait for this and after that go to net step
// }).then((data) => {
//   console.log(data); // it will trigger when res.json() will return something, also it automatically parse the data in json array which reduce the etra line to convert
// })

// async Await - it is even better way to handle the asynchornous code 

// promise also create a lots of etra code. async await is hortcut of the promise

// async function a() { //async makes a fucntion return a promise 
//   console.log("A");
// }

// in promise we write this 

// function a() {
//   return new Promise((resolve) => {
//     console.log("A");
//     resolve()
//   })
// }

// below code is return a promise so we can add then 

// async function a() { //async makes a fucntion return a promise 
//   console.log("A");
// }
// a().then(() => {
//   console.log("A");
// })

// async function a() { //async makes a fucntion return a promise 
//   return 'val'; // it is treat as resolve('val') - which help to pass data to new promise
// }

// why we use the async => it use await (wait for a promise to finish before going to net line)

// await make that code to finish first 

// {
//   await a(); //
//   console.log("A");
// }

// console will call once a fucntion finish its eceution insted of using then we can use await , it makea code more clear 

// we can only use await when we are inside the async function

// async and await is only be used with promises

// we can write aynchorous code like normal code 

// while using the await the closest fucntion has to be async chekc below 

// async function a() {
//   function b (
//     await c(); // it will thrown an error 
// }
// }

// async function a() {
//   async function b (
//     await c(); // now it will ru as closest fucntion has async
//   }
// }

// how we can handle the value in await 

// we can use a variable and it will store the data whatever await will return

// use async await over promise and callbacks, because they are much cleaner 

// == how we can multiple async

async function b() {
  console.log("B");
  // Simulating async operation (like a timeout or other async task)
  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
}

async function c() {
  console.log("C");
  // Simulating async operation
  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
}

async function d() {
  console.log("D");
  // Simulating async operation
  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
}

async function e() {
  console.log("E");
}

async function a() {
  console.log("A");
  // No need to pass callback, just await the functions sequentially
  await b();
  await c();
  await d();
  await e();
}

// Execute the function a()
a();

// How do we make the POST and othe type of call in fetch

const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

const data = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

const response =  fetch(url, {
  method: 'POST', // Specify the method as POST
  headers: {
    'Content-Type': 'application/json', // Specify that we're sending JSON data
  },
  body: JSON.stringify(data), // Convert the JavaScript object to JSON
});

if (!response.ok) {
  throw new Error('Network response was not ok');
}
const result = await response.json();