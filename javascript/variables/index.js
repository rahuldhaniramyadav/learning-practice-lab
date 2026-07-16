// Lesson 5 - Variables - a way to save values

// let - if we want to change the value 
// const - if dont want to change the value 
// var - if let and const not avialble

// varaible is container

// can't use special words - let let = 2;
// can't start with number
// can't use special chracter except $, _

// ; = end of instruction - similar to a. in english

// camelCase - cartQuantity => mostly used 
// PascalCase - CartQuantity
// kebab-case cart-quantity - it is not used only used in html and css
// snake_case cart_quantity - used in other language but not really used in JS


// Lesson 5 Exercises - Variables
// Note: to do these exercises, create an HTML file (like 5a.html, 5b.html, ...) 
// 
// 5a. Create a <script> element. Inside the <script>, create a variable called 'name', and save your name in this variable (as a string).
      
    //let name = 'RY';

// 5b. Continuing from 5a, display the message 'My name is: ${name}' in the console (insert the 'name' variable created in 5a into this message). 

    let name = 'RY';
    // 5.b display the message 'My name is: ${name}'
    console.log(`My name is: ${name}`);

// 5c. At a restaurant, you order 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.

    // let cost = 5 * 1 + 3 * 2 + 9;

// 5d. Continuing from 5c, display 'Cost of food: $${cost}' in the console. 

    // let cost = 5 * 1 + 3 * 2 + 9;
    // console.log(`Cost of food: $${cost}`);

// 
// 5e. Let's say the restaurant charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.

    // let cost = 5 * 1 + 3 * 2 + 9;
    // console.log(`Cost of food: $${cost}`);
    // let tax = cost * 0.1
    // let result = cost + tax (cost * 0.1)

// 5f. Continuing from 5e, display 'Tax (10%): $${tax}' in the console.

    // let cost = 5 * 1 + 3 * 2 + 9;
    // let tax = cost * 0.1
    // console.log(`Tax (10%): $${tax}`);

// 5g. Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $${totalCost}' in the console.

    let cost = 5 * 1 + 3 * 2 + 9;
    let tax = cost * 0.1;
    const totalCost = cost + tax;
    console.log(`Total cost: $${totalCost}`);

// 5h. In the Cart Quantity project, add 2 more buttons '+4' and '+5', which increase the quantity by 4 and 5 when you click them. Try using +=

// Updated in index html file

// 5i. In the Cart Quantity project, add a button 'Remove from cart', which decreases the cart quantity by 1.

// Updated in index html file

// 5j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.

// Updated in index html file

// 5k. Use the shortcuts -- and -= in 5i and 5j.

// Updated in index html file

// Challenge Exercises
// We'll build a calculator (don't worry, we'll do it step by step).
// 1. Go to 'supersimple.dev/projects/calculator' in your browser.
// 2. Open the Console and click the calculator buttons to see how it works. Setup: create a new file calculator.html for this project.
// 51. Add the HTML structure (<!DOCTYPE html>, <html>, <head>, <body>). Add a <title> with the text 'Calculator'
// 5m. Create these 5 buttons: 1 2 3 + =
// 5n. Create a <script>, create a variable called 'calculation', and save an empty string inside: let calculation "';
// (This variable will store the calculation like ‘1 + 2' or '11 + 2 + 2')

// Updated in calculator html file

// 50. When we click the '1' button: 
// • Add the string '1' to the calculation variable: calculation += '1'; 
// • Display the calculation in the console: console.log(calculation);


// 5p. Do the same for the '2', '3', and '+' buttons (add ' + ' instead of '+').
// 5q. When we click the '=' button, use the code: eval(calculation); (eval(...) converts the calculation string into actual math)
// ·
// Save the result back in 'calculation': calculation = eval(calculation); Display the result in the console: console.log(calculation);

// Updated in calculator html file

// 5r. Create the rest of the buttons in the calculator. To create multiple rows of buttons, put the buttons inside <p> elements like this:
// <p>
// <button>1</button>
// <button>2</button>
// </p>
// <p>
// <button>4</button>
// <button>5</button>

// Updated in calculator html file