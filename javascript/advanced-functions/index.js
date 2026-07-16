// Lesson 12 - Advanced fucntions

// function are also values - we can save a fucntion inside a variable

// anything we can do valu we also do with function

// annonymous function - the fucntion without the name

// short hand of function
// advantage

// const function1 = function greet() {
const function1 = function() { // annonymous function, as the greet is not need we can run the fucntion function1()
  console.log("Welcome");
}

console.log(function1);
console.log(typeof function1);
function1();

///

// hoisting will work for the normal fuction but not for the annonymuous fucntion 
greet(); // work
function greet() { console.log("A");}

greet1(); // error
const greet1 = function { console.log("A");}  // fucntion are value like other variable we can save it on any value

// we can save a value in object 

const object1 = {
  num: 2,
  fun: function greet() {  // it is method which we can access it
    console.log("Welcome");
  }
  // fun: function() { // it is annonymuous fucntion
  //   console.log("Welcome");
  // }
}

object1.fun();


function display(par) {
  console.log(par)
}
display(1); // here we are passing the argument in the fucntion 

// As function is also a value so we can pass the fucntion as well 

function run(para) {
  para();
}
run(function(){console.log("Hello")}); //passing an function into another function, the fucntion is passing in is called callback function

///

setTimeout(function(){ //it is build in fucntion, it 2 paramere one is fucntion and when to run
  console.log("A");
}, 2000);

// Asynchronous code - computer won't wait for line to finihs the code before going to new line

console.log("run"); // it run first after 3 second setTimeout will run that means it is asychronous code

// Synchronous code - it will wait for the setTimeout to run first than it will go to the new line for eceution

// JS is sychronous tyoe of code but for the some fucntion it work as asynchronous - advantage - it don't wait for 3 seconds but it run something different

// if we set timer in phone we are not gonna wait for the timer to complete

// same as setTimeout fucntion 

setInterval(function() {  //it is also asynchronous
  console.log("B");
}, 3000) //it will keep running the function after every 3 seconds

//another way to loop through an array with forEach, it is preferred way to loop through an array, it is easir to read and we can pass the inde

// [
//   'A',
//   'B',
//   'C'
// ].forEach(function(value, ind) {
//   console.log(value);
//   console.log(ind);
// })

// it is not support the continue we can achieve using return;


// [
//   'A',
//   'B',
//   'C'
// ].forEach(function(value, ind) {
//   if (value === 1) {
//     return; // it work as contnue
//   }
//   console.log(value);
//   console.log(ind);
// })

// break is not easy way to do if want to use break so we can go to the for loop

//Arrow fucntion - shorter way to write function, almost work as same way as regular function

// const arrowFun = () => {
//   console.log('Hello');
// }
// arrowFun(); //Hello


// const regularFun = function() {
//   console.log('Hello');
// }

// difference between both the function

// arrow function have few shortcut but regular function don't have
// const oneParam = (param) => {
//   console.log(param+1);
// }
// oneParam(2); //3 

// if the arrow function has only one paramete so we can remove it 
// const oneLine = (param) => { return 2+ 3;} //
const oneLine = () => 2 + 3; //it is shorter way to use it 
// //oneLine(2); //3 

// how we can use forEach in arrow function

// [
//   'A',
//   'B',
//   'C'
// ].forEach((value, ind) => {
//   if (value === 1) {
//     return; // it work as contnue
//   }
//   console.log(value);
//   console.log(ind);
// })

//passing a function into another function => use arrow function


// we can use arrow fucntion inside object

// const objN = {
//   // method: () => {

//   // }
//   // method() {
    
//   // }
//   method() {
    
//   }
// }

//addEventListener() // it run some code when we interact with the element, it take 2 parameter first is event and second is fucntion which we want to trigger

{/* <button onclick="" class="class-click">Click</button>
const buttonEle =  document.querySelector(".class-click");
buttonEle.addEventListener("click", function() { }) //with normal fucntion 
buttonEle.addEventListener("click", () => { }) */} // with arrow function

// the above addEventListener will do the same thing like onclick but it has some advantages 
  // we can multiple eventListener like 

  // buttonEle.addEventListener("click", () => { console.log("1"); }) */}
  // buttonEle.addEventListener("click", () => { console.log("1"); }) */}

  // We can remove the listner, removeEventListener() it also has 2 parameter  one is event and the function which we want to remove

  // const eventLiFun = () => { console.log("1"); }
  // buttonEle.removeEventListener("click", eventLiFun);

  // it gives more controller now only second listner will work, like we can add multiple event and remove

  // == we can implement in the rock paper scissors 

  // const playGame = () => { console.log("Tets");}
  // const bunEle = document.querySelector(".rock-button").addEventListener("click", playGame()) // here playGame will run directly and show the output instaed of using directy we need to create a new fucntion and pass it like below

  // const bunEle = document.querySelector(".rock-button").addEventListener("click", () => {
  //   playGame();
  // })

  // we can capture the key 

  // document.body.addEventListener('keydown', (event) => {
  //   if (event.key === 'r'){
  //     alert("HHHHH");
  //   }
  // })

  // add the event listner to all the buttons
  const allButton = document.querySelectorAll('button');
  allButton.forEach((value, index) => {
    value.addEventListener("click", () => {
      console.log("AA");
    })
  })

// Now we learn the map and filter method with array 

// filter() - filter will create an new array, filter element based on a condition, it wiil return element that satisfy the condition
// only the passed element are include, returned array may be smaller than the original, depending on the condition.
// we have array number we want to remove the all negative number from an array [1, -3, 8] => [1, 8]

const a = [1, -3, 8].filter((val, inde) => {
  return true;
});

console.log([1, -3, 8].filter((val, inde) => {
  return true;
})); // (3) [1, -3, 8]

console.log([1, -3, 8].filter((val, inde) => {
  return false;
})); //[]

//check the value is true 

console.log([1, -3, 8].filter((val) => { val>0 })); //[]
console.log([1, -3, 8].filter(val => val === 8 ));
console.log([1, -3, 8].filter((val) => { return val > 0 })); //(2) [1, 8]

const words = ["spray", "elite", "exuberant", "destruction", "present"];
console.log(words.filter((word) => word.length > 6)); //(3) ['exuberant', 'destruction', 'present']

// .map() - it create copy of original array into new array, transform an element into an array
// it return the transformed array of element
// every element is changed (mapped), the size of array is always the same

console.log([1, -3, 8].map((val, inde) => {
  return val * 2;
})); // (3) [2, -6, 16]

console.log([1, -3, 8].map((val) => val * 2)); // (3) [2, -6, 16] //it make our code to very compact and clean


const numbers = [1, 2, 3, 4, 5];
// Double the numbers and then filter out the ones greater than 6
const result = numbers
  .map(num => num * 2)   // [2, 4, 6, 8, 10]
  .filter(num => num > 6); // [8, 10]

console.log(result);

// closure -  if a fucntion has access to a value, it will always have access to that value, value gets packaged toghther (enclosed) with the function

{/* <button>Button 1</button>
<button>Button 2</button> */}
    
// const allBtn = document.querySelectorAll('button');
// allBtn.forEach((val, ind) => {
//   val.addEventListener("click", () => {
//     console.log(ind); // here ind is enclosed with event listner so it will be act as closure
//   })
// });

// Lesson 12 Exercises - Advanced Functions

// 12a. Create a variable called ‘add' and save a function inside. This function will console.log(2 + 3); Run the function twice.

// const add = function addNum() {
//   console.log(2 + 3);
// }
// add(); //5
// add(); //5

// 12b. Continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.
// • runTwice(function() { console.log('12b'); }); => console.log('12b') twice runTwice(add); => console.log(5) twice

// const add = function addNum() {
//   console.log(2 + 3);
// }
// let count = 0;
// function runTwice(addVa) {
//     addVa();
//     addVa();
// }
// runTwice(add);
// runTwice(function() { console.log('12b'); });


// 12c. Create the button below. When clicking the button, after 1 second, the text inside the button changes to 'Finished!'. (Hint: use setTimeout() and the DOM)

{/* <button>Button</button>
setTimeout(() => {
  document.querySelector('button').innerHTML = 'Finished!';
  console.log('Finished!');
}, 1000) */}

// 12d. Continuing from exercise 12c, modify the button so that when we click it, the text immediately changes to 'Loading...', and then after 1 second, it changes to 'Finished!'.
// Finished!

{/* <button onclick="updateButton();">Button</button>
function updateButton() {
  document.querySelector('button').innerHTML = 'Loading...';
  setTimeout(() => {
    document.querySelector('button').innerHTML = 'Finished!';
    console.log('Finished!');
  }, 1000)
} */}

// 12e. Create the 'Add to cart' button below. When clicking this button, display the message 'Added' below the button. Then, after 2 seconds, remove the message. // Add to cart

{/* <button onclick="addedToCart();">Add to Cart</button>
<p class="display-msg"></p>
function addedToCart() {
  const pElement = document.querySelector(".display-msg");
  pElement.innerHTML = 'Added';
  setTimeout(() => {
    pElement.innerHTML = '';
  }, 2000 )
} */}

// Challenge Exercises

// 12f. Continuing from 12e, if we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon).
// Modify the code so when we click the button, it "refreshes❞ the 2 second wait time (waits for 2 seconds again and removes message). Hint: you can cancel the previous setTimeout using clearTimeout()
// Add to cart
// Incorrect X
// Add to cart
// Added
// Correct

{/* <button onclick="addedToCart();">Add to Cart</button>
<p class="display-msg"></p>
let twoSecondTimer;
function addedToCart() {
  clearTimeout(twoSecondTimer);
  const pElement = document.querySelector(".display-msg");
  pElement.innerHTML = 'Added';
  twoSecondTimer = setTimeout(() => {
    pElement.innerHTML = '';
  }, 2000 ); */}
}

// 12g. Imagine we're creating a messaging app. Use setInterval() and document.title to create the feature on the right (the title changes every 1 second).

// let i = 0;
// setInterval(function() {
//   document.title = `New Messages(${i++})`;
// }, 1000);

// 12h. Continuing from 12g, instead of displaying “(2) New messages" every time, save the number of messages in a variable: let messages = 2;
// • Use the number in the variable to determine what title to display. Create 2 buttons 'Add' / 'Remove' that increase / decrease the 'messages' variable by 1.

// tested in inde html file

// 12i. Continuing from 12h:
// Don't let 'messages' go below 0.
// If messages === 0 stop changing the title and display 'App' as the title.
// When messages > O start changing the title again.

// tested in inde html file

// Lesson 12 Exercises - Advanced Functions

// 12j. Create an arrow function called 'multiply' that takes 2 numbers, multiplies them together, and returns the result.
// multiply(2, 3) => 6 multiply(7, 10) => 70

// const multiply = (num1, num2) =>  {
//   return num1 * num2;
// }
// multiply(2, 3);

// 12k. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise).

// const multiply = (num1, num2) =>  num1 * num2;
// multiply(2, 3);


// 121. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using .forEach() instead of a loop. countPositive([1, -3, 5]) => 2
// countPositive([-2, 3, -5, 7, 10]) => 3

// function countPositive(nums) {
//   let count=0;
//   const result = nums.forEach((val) => {
//     if (val > 0) {
//       count++;
//     };
//   });
//   return count;
// }
// countPositive([-2, 3, -5, 7, 10])

// 12m. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'. Create this function using .map() instead of a loop.
// addNum([1, 2, 3], 2) => [3, 4, 5]
// addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
// Bonus: try to use the one-line shortcut in your solution.

// function addNum(array, num) {
//   const newArr = array.map((val) => {
//     return val + num;
//   })
//   console.log(newArr);
// }
// addNum([1, 2, 3], 2) //(3) [2, 4, 6]

// 12n. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using .filter() instead of a loop.
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']


// function removeEgg(foods) {
//   return foods.filter((val) => val !== 'egg');
// }

// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])

// 120. Update exercise 12n to only remove the first 2 eggs from the array. Again, use .filter() instead of a loop.
// • removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

// function removeEgg(foods) {
//   let count = 0;
//   return foods.filter((val) => {
//     if (count < 2 && val === 'egg') {
//       count++;
//       return;
//     }
//     return val;
//   });
// }

// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])

// 12p. Go back to the earlier exercises in lesson 12 (12c - 12i) and switch the code to use arrow functions. (When passing a function into another function, use arrow functions. Otherwise, you can use either syntax.) 

//  already used arrow fucntion
// 
// 12q. Go back to the earlier exercises in lesson 12 (12c - 12i) and instead of using onclick="...", switch the code to use .addEventListener('click', ...) Challenge Exercises

<button class="btn-addtocart">Add to Cart</button>
<p class="display-msg"></p>
document.querySelector(".btn-addtocart").addEventListener("click", () => {
  const pElement = document.querySelector(".display-msg");
  pElement.innerHTML = 'Added';
  setTimeout(() => {
    pElement.innerHTML = '';
  }, 2000 )
})


// The following exercises will build on the Rock Paper Scissors game. 12r. Make a copy of the Rock Paper Scissors game into the files 12r.html, 12r.css, and 
// 
// 12r.js.Update the <link> and <script> elements to load 12r.css and 12r.js. Also, make a copy of the images and make sure they load properly. 12s. Update the 'Auto Play' button to use .addEventListener('click', ...) instead of onclick="..."


// 12t. Update the 'Auto Play' button so that when the game is auto playing, the text in the button is 'Stop Playing'. Otherwise, the text in the button is 'Auto Play'.

// 12u. Update the code so pressing ‘a' on keyboard will auto play the game. 
// 
// 12v. Update the 'Reset Score' button to use .addEventListener('click', ...) 
// 
// 12w. Update the code so pressing 'Backspace' will reset the score. 
// 
// 12x. When clicking 'Reset Score' or pressing ‘Backspace', instead of resetting the score immediately, display a confirmation message below the button:
// ·
// Are you sure you want to reset the score? Yes
// No
// Clicking 'Yes' will reset the score, and hide the message.
// Clicking 'No' will not reset the score, and hide the message.