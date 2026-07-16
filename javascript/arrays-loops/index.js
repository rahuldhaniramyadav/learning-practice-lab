// Lesson 11 - Arrays and loops

// another type of value which represengt other values 

// Syntax rule of error 

// [ list of values with comma seperated ], it has index

// array is object type but it is special type of object

// to check the array => Array.isArray

// array have properties and methods
//mostly used length is property

// push will add the value in end the array

// splice(from inde, how many) - remove a value from an array and how many value

// const numArrO = [10, 'B', false, {name: 'A', age: 12}, [1, 2,3]]; //
// numArrO.splice(2, 2); // it will remove false and {name: 'A', age: 12}, return [false, {name: 'A', age: 12}] // now array will be [10, 'B', [1,2,3]]
// numArrO.splice(0, 1); // it will remove 10 from an array and return value as [10] //// now array will be ['B', [1,2,3]]

// Loops // itis used to run the code over an over

// non-standard loop we use while loop - for emple we want to get a number based on random number

// let ranNumber = 0;
// while (ranNumber < 0.5) {
//   ranNumber = Math.random();
// }
// console.log(ranNumber)

// for loop is shorter and more organized as of while loop

// looping through an array - use any array to fetch the each inde and we can do something with an array

// Accumator pattern - loop through an array and update the result

// array of number and we want to calculat the sum 

// Main idea of JS 

  // Save the data
  // Genrate the HTML
  // Make it interactive


// Lesson 11 Exercises - Arrays and Loops

// 11a. Create an array of numbers: const nums = [10, 20, 30]; Modify the last value in this array and change it to 99.

// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums); //(3) [10, 20, 99]

// 11b. Create a function getLastValue(array) that takes an array and returns the last value in the array. Hint: array indexes start at O so the last index is the number of values in the array minus 1
// (lastIndex = array.length - 1).
// • getLastValue([1, 20, 22, 24, 5]) => 5
// • getLastValue(['hi', 'hello', 'good']) => 'good'

// function getLastValue(array) {
//   let lastInde  = array.length - 1
//   return array[lastInde];
// }

// getLastValue([1, 20, 22, 24, 5]);
// getLastValue(['hi', 'hello', 'good']);


// 11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).
// • arraySwap([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 1]
// • arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi']

// function arraySwap(array) {
//   let firstElement = array[0];
//   array[0] = array[array.length - 1];
//   array[array.length - 1] = firstElement;
//   console.log(array);
// }
// arraySwap([1, 20, 22, 24, 5]);
// arraySwap(['hi', 'hello', 'good']);


// 11d. Create a for loop that counts up from 0 to 10, but counts up by 2 (0, 2, 4, ..., 8, 10).

// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for (let i=0; i<nums.length ;i+=2) {
//   if (nums[i] % 2 === 0) {
//     result = result + nums[i];
//   }
// }
// console.log(result);
// for (let i=0; i<nums.length ;i++) {
//   if (nums[i] % 2 === 0) {
//     result = result + nums[i];
//   }
// }
// console.log(result);

// 11e. Create a for loop that counts down from 5 to 0.

// let result=0;
// for (let i=5; i>0 ;i--) {
//   result = result + i;
// }
// console.log(result);


// 11f. Do exercises 11d and 11e, but using while loops.

// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = i = 0;
// while (i < nums.length) {
//   result = result + nums[i];
//   i+=2
// }
// console.log(result);

// let result = 0;
// let i = 5;
// while (i > 0) {
//   result = result + i;
//   i--
// }
// console.log(result);

// 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
// • [1, 2, 3] => [2, 3, 4]

// const num = [1, 2, 3];
// const doubNum = [];
// for (let i = 0; i < num.length; i++) {
//   doubNum.push(num[i] * 2);
// }
// console.log(doubNum); //(3) [2, 4, 6]

// 11h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
// • addOne([1, 2, 3]) => [2, 3, 4]
// • addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]

// let increasedByOne = [];
// function addOne(array) {
//   for (let i = 0; i < array.length; i++) {
//     increasedByOne.push(array[i] + 1);
//   }  
// }
// addOne([1, 2, 3])
// console.log(increasedByOne); //(3) [2, 3, 4]


// 11i. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by ‘num'.
// • addNum([1, 2, 3], 2) => [3, 4, 5]
// • addNum([1, 2, 3), 3) => [4, 5, 6]
// • addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]

// let increased = [];
// function addNum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     increased.push(array[i] + num);
//   }
// addNum([-2, -1, 0, 99], 2);
// }
// console.log(increased);

// 11j Create a function addArrays(arrayl, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
// • addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]
// • addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]

// const result=[];
// function addArrays(arrayl, array2) {
//   for (let i = 0; i < arrayl.length; i++) {
//     result.push(arrayl[i] + array2[i]);
//   }
//   return result;
// }
// addArrays([1, 1, 2], [1, 1, 3]);

// 11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
// • countPositive([1, -3, 5]) => 2
// • countPositive([-2, 3, -5, 7, 10]) => 3

// let result = 0;
// function countPositive(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       // result.push(nums[i]);
//       result++;
//     }
//   }
//   return result
// }
// countPositive([-2, 3, -5, 7, 10])

// Challenge Exercises

// 111. 
// 
// Create a function min Max(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min). minMax([1, -3, 5]) => 
// { min: -3, max: 5 }
// • minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }

// let min = max = 0;
// const result = {
//   min: 
//   max
// };
// function minMax(nums) {
//   const result = {
//     min: nums[0],
//     max: nums[0]
//   };
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > result.max) {
//       result.max = nums[i];
//     }
//     if (nums[i] < result.min) {
//       result.min = nums[i];
//     }
//   }
//   return result;
// }
// minMax([-2, 3, -5, 7, 10])

// 11m. Update exercise 111 to also handle these cases:
// •
// minmax([]) => { min: null, max: null } minMax([3]) => { min: 3, max: 3 }

function minMax(nums) {
  const result = {
    min: nums[0] || null,
    max: nums[0] || null
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > result.max) {
      result.max = nums[i];
    }
    if (nums[i] < result.min) {
      result.min = nums[i];
    }
  }
  return result;
}
minMax([]) //{min: null, max: null}
minMax([3]) //{min: 3, max: 3}


// 11n. Create a function countWords (words) that takes an array of strings and returns an object with how many times each string appeared. countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape: 1 }
// • (Hint: you can access a property using a variable: object[variable]; This uses the value inside the variable as the property name).


// function countWords (words) {
//   const fruits = {};
//   for (let i = 1; i < words.length; i++) {
//     let word = words[i];
//     if (fruits.word === undefined) {
//       fruits.word = 1;
//     } else {
//       fruits.word += 1;
//     }
//   }
//   return fruits;
// }
// countWords(['apple', 'grape', 'apple', 'apple'])

// function countWords (words) {
//   const fruits = {};
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (!fruits[word]) {
//       fruits[word] = 1;
//     } else {
//       fruits[word] += 1;
//     }
//   }
//   return fruits;
// }
// countWords(['apple', 'grape', 'apple', 'apple'])

// Lesson 11 Exercises - Arrays and Loops

// 110. Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is, console.log() the index of 'search' in in the array. If not, console.log ‘-1'.
// • ['hello', 'world', 'search', 'good'] => console.log(2)
// ['not', 'found'] => console.log(-1)

// const arrStr = ['A', 'B', 'C', 'search'];
// let lastInde =  arrStr.length - 1;
// let found = 0;
// for (i = 0; i < arrStr.length; i++) {
//   if (arrStr[i] === 'search') {
//     console.log(i);
//     found = 1;
//   }
//   // if (i === lastInde) {
//   //   console.log(-1);
//   // }
// }
// if (found !== 1) {
//   console.log(-1);
// }

// 11p. Modify 110 so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break; ['hello', 'world', 'search', 'good', 'search'] => console.log(2)

// const inde = -1;
// const arrStr = ['A', 'B', 'C', 'search'];
// for (i = 0; i < arrStr.length; i++) {
//   if (arrStr[i] === 'search') {
//     inde = i;
//     break;
//   }
// }
// console.log(i);


// 11q. Create a function findIndex(array, word) that searches an array for a string (in the 'word' parameter) and returns the index of the first appearance of the string. If it doesn't exist in the array, return -1. findIndex(['green', 'red', 'blue', 'red'], 'red') => 1 findIndex(['green', 'red', 'blue', 'red'], 'yellow') => -1

// const inde = -1;
// const arrStr = ['A', 'B', 'C', 'search'];
// for (i = 0; i < arrStr.length; i++) {
//   if (arrStr[i] === 'search') {
//     inde = i;
//     break;
//   }
// }
// console.log(i);

// function findIndex(array, word) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }
//   return -1;
// }

// findIndex(['green', 'red', 'blue', 'red'], 'yellow')
// findIndex(['green', 'red', 'blue', 'red'], 'red')

// 11r. Create a function removeEgg (foods) that takes an array of strings and
// returns an array where the string 'egg' is removed. (Hint: loop through the array and check if each string is 'egg'. If it is 'egg', use ‘continue;' to skip it. If it's not 'egg', add it to the result).
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

// let result = [];
// function removeEgg (foods) {
//   for (i = 0; i < foods.length; i++) {
//     if (foods[i] === 'egg') {
//       continue;
//     } else {
//       result.push(foods[i])
//     }
//   }
//   return result;
// }
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])

// 11s. Update exercise 11r to only remove the first 2 eggs from the array. removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']
// •

// let result = []; let occurance = 0
// function removeEgg (foods) {
//   for (i = 0; i < foods.length; i++) {
//     if (foods[i] === 'egg' && occurance < 2) {
//       occurance += 1;
//       continue;
//     } else {
//       result.push(foods[i])
//     }
//   }
//   return result;
// }
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])


// 11t. Arrays have a method called .reverse(), which reverses the order of the values in the array. Using .reverse(), update exercise 11s to only remove the last 2 eggs from the array.
// • removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['egg', 'apple', 'ham']

// let result = []; let occurance = 0;
// function removeEgg (foods) {
//   const revArr = foods.reverse();
//   // console.log(revArr);
//   // for (i = revArr.length - 1; i >= 0; i--) {
//     for (i = 0; i < revArr.length; i++) {
//     if (revArr[i] === 'egg' && occurance < 2) {
//       occurance += 1;
//       continue;
//     } else {
//       result.push(revArr[i])
//     }
//   }
//   return result.reverse();
// }
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])


// 11u. In exercise 11t, one problem with .reverse() is that it doesn't create a copy of the array it is reversing. It modifies the original array. Update the code so the function does not modify the original array. (Hint: use the .slice() method to create a copy of an array's values). const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log(removeEgg (foods)) => ['egg', 'apple', 'ham']
// ⚫ console.log(foods) => ['egg', 'apple', 'egg', 'egg', 'ham']

// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// const revArr = foods.slice();

// let result = []; let occurance = 0;
// function removeEgg (foods) {
//   const revArr = foods.slice();
//   // console.log(revArr);
//   // for (i = revArr.length - 1; i >= 0; i--) {
//     for (i = 0; i < revArr.length; i++) {
//     if (revArr[i] === 'egg' && occurance < 2) {
//       occurance += 1;
//       continue;
//     } else {
//       result.push(revArr[i])
//     }
//   }
//   return result.reverse();
// }
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])

// •
// Challenge Exercises

// 11v. We'll do the famous FizzBuzz problem. Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it's divisible by 5, display 'Buzz' instead. If it's divisible by 3 and 5, display 'FizzBuzz' instead. (Reminder: divisible by 3 means num % 3 === 0).
// •
// · 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, ... 13, 14, FizzBuzz, 16, 17, ...

// const num = [1,2]
// function checkNumber () {
//   for(i = 0; i<20; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     }
//   }
// }


// 11w. Create a copy of exercise 11q, where we created findIndex(). Below it, create a function unique(array) that takes an array of strings and returns an array where each string only appears once (there are no duplicates). Try to use the findIndex() function in your solution. unique(['green', 'red', 'blue', 'red']) => ['green', 'red', 'blue'] unique(['red', 'green', 'green', 'red']) => ['red', 'green']

// const result = [];
// function unique(array) {
//   for (let i = 0; i < array.length; i++) {
//     const inde = findIndex(result, array[i]);
//     console.log(inde);
//     if (inde === -1) {
//       result.push(array[i]);
//     }
//   }
//   return result
// }

// // unique(['green', 'red', 'blue', 'red']) 
// unique(['red', 'green', 'green', 'red'])

// function findIndex(array, word) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }
//   return -1;
// }

// findIndex(['green', 'red', 'blue', 'red'], 'yellow')
// findIndex(['green', 'red', 'blue', 'red'], 'red')


// 11x. Create 3 files 11x.html, 11x.css, and 11x.js, and copy the code for the Todo List project into these files.
// • Update the <link> and <script> elements to load 11x.css and 11x.js
// • Update the todo list to use localStorage (if we modify the todo list
// • and refresh the page, the todo list should stay the same).
// Hint: remember that localStorage only supports strings. You can
// use JSON.stringify() to convert an array to a string.

// updated on todo.js