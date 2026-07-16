// Lesson 6 - Boolean and If statment

// scope help us to avoid naming conflicts

// Boolean value represent true or false

// == convert both value in same type

// order of operation

// (...), * /, + -, Comparison operation(>, <, >=, <=, ==, !=, ===, !==) and logical operator (&&, ||, !)

console.log(true && true); //true
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false

// falsy values - false, 0, '', NaN, undefined, null
console.log(!0); // true
console.log('te' / 5) //Nan

let a;
console.log(a) //undefined

// shorcuts for if-statment

// Ternary Operator ?:  //true ? 'truthy' : 'false'; // we can save he value of the operation
// Guard Operator && //- short circuit evalution if the first stament is false it wont check second one
// Default Operator || // one side is true it will also stop early

true ? 'truthy' : 'false';

false && console.log("A") //false
true && console.log("A") // A

undefined || console.log("RY"); //RY


// Lesson 6 Exercises - Booleans and If-Statements

// Note: to do these exercises, create an HTML file (like 6a.html, 6b.html, ...)
// 6a. Create a variable called 'hour' and save the current hour of the day
  // (use 24-hour format and save it as a number between 0 and 23).
  // • If hour is between 6 and 12, display ‘Good morning!' in the console
  // • If hour is between 13 and 17, display 'Good afternoon!' in the console Otherwise, display 'Good night!' in the console
  // • Otherwise, display 'Good night!' in the console

    // let hour = 8;
    // if (hour >=6 && hour <= 12) {
    //   console.log("‘Good morning!");
    // } else if (hour >=13 && hour <= 17) {
    //   console.log("Good afternoon!");
    // } else {
    //   console.log("Good night!");
    // }

    //‘Good morning!

// 6b. Continuing from 6a, try changing the value in the 'hour' variable to make it display different messages.[]

  // let hour = 23;
  // if (hour >=6 && hour <= 12) {
  //   console.log("‘Good morning!");
  // } else if (hour >=13 && hour <= 17) {
  //   console.log("Good afternoon!");
  // } else {
  //   console.log("Good night!");
  // }

  //Good night!

// 6c. Continuing from 6a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning ${name}!'

    let hour = 23, name='RY';
    if (hour >=6 && hour <= 12) {
      console.log(`Good morning ${name}!`);
    } else if (hour >=13 && hour <= 17) {
      console.log(`Good afternoon ${name}!`);
    } else {
      console.log(`Good night ${name}!`);
    }

    //Good night RY!

// 6d. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
  // •  Create a variable ‘age' and save a person's age inside.
  // Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
  // Note: try to use the || operator in your solution.
  // Try changing the ‘age' variable to display different messages.

  // let age = 45; // , 6, 64
  // if (age <= 6 || age >= 65) {
  //   console.log('Discount');
  // } else {
  //   console.log('No Discount');
  // }

  // No Discount, Discount, No Discount

// 6e. Continuing from exercise 6d, let's say the discount is only available 
  //  if it is not a holiday. Create a variable: const isHoliday = true; 
  //  Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
  // Note: && has a higher priority than || so you may need to use brackets () to control which code gets done first.
  //  Try changing the value of isHoliday to display different messages.

  // let age = 4; 
  // isHoliday = true;
  // if ((age <= 6 || age >= 65) && !isHoliday) {
  //   console.log('Discount');
  // } else {
  //   console.log('No Discount');
  // }

  // No Discount

// We'll create a coin-flip game (create 1 HTML file for exercises 6f - 6j):
// 6f. Generate a random number with Math.random(). Save it in a variable. 6g. Create an if-statement and check:
  // • If the number is less than 0.5, then display 'heads' in the console.
  // • Else display 'tails' in the console.

  // const randomNumber = Math.random();
  // if (randomNumber < 0.5) {
  //   console.log('heads');
  // } else {
  //   console.log('tails');
  // }

// 6h. Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.

  // const randomNumber = Math.random();
  // let result;
  // if (randomNumber < 0.5) {
  //   console.log('heads');
  //   result = 'heads';
  // } else {
  //   console.log('tails');
  //   result = 'tails';
  // }

// 6i. Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess ('heads' or 'tails').
// • If your guess matches the result, display 'You win!' in the console
// • If your guess does not match the result, display 'You lose!'

  // const randomNumber = Math.random();
  // const guess = 'heads';
  // let result;
  // if (randomNumber < 0.5 ) {
  //   result = 'heads';
  // } else {
  //   result = 'tails';
  // }

  // if (guess === result) {
  //   console.log('You win!');
  // } else {
  //   console.log('You lose!');
  // }

// 6j. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition ? A : B).

  const randomNumber = Math.random();
  const guess = 'heads';
  let result;
  if (randomNumber < 0.5 ) {
    result = 'heads';
  } else {
    result = 'tails';
  }

  const status = result === guess ? 'You win!' : 'You lose!';

// Challenge Exercises
// Setup: we'll improve the Cart Quantity project. First, make a copy of the project from exercise 5k (if you didn't do 5k, check the solutions).

// 6k. Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10:
  // • If it will, display a popup saying 'The cart is full' and don't update the quantity.
  // • Otherwise, update the quantity and console.log() it as usual.

    //updated on cartty html file

// 61. In exercises 5i - 5k, we created the 'Remove from cart', '-2', and '-3' buttons. Before updating the quantity, check if it will go below 0:
// • If it will, create a popup saying 'Not enough items in the cart' and don't update the quantity.
// Otherwise, update the quantity and console.log() it as usual.

  //updated on cartty html file