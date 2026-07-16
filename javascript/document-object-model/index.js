// Lesson 8 - Document object model

// We learned about object and build in objects - group multiple values toghther

// document object represent the model of the webpage

// Syntax rule of DOM

// it is in-build object which is linked to webpage
// it has property and methods of dom

// document.title = "DOM";

// we can have HTML elements inside JS 
// DOM combine JS and HTML toghther and give JS to control web page

console.log(document.body);

console.log(typeof document.body); //object
console.log(typeof document.body.innerHTML); //string

// when html inside the JS it is converted into JS object

// document.querySelector - lets us get any element from the page and put it inside the JS

// innerText - it will get the string of the tag without any space
// innerHTML - it will get the value of tag with space // sometime it create issue

// click and keydown are the events 
// onclick and onkeydown is the event listner

// always do maths with numbers 
console.log('25' - 5); //20
console.log('25' + 5); //255

// other window in build object - it represent the browser // whatever inside the browser it can be accessible via window

// we dont require to add window for all the fucntions, JS will automatically add it

// window.document
// window.alert
// window.console

// Lesson 9 Exercises - Document Object Model (DOM)
// 9a. Create a <button>9a</button>. Use document.querySelector('button') to get the button from the page, and then display it in the console.



// 9b. Continuing from 9a, create another button <button>9b</button> below. Using JavaScript, change the text in the second button to '9b done!' (hint: add a class and use .querySelector).



// 9c. Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>) underneath. When clicking the 'heads' button, display 'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.
// heads tails
// You chose: tails


// 9d. Create a text box (<input>) and a submit button. When clicking
// 'Submit', display 'Your name is: ${text}' on the page (${text} = the text inside the text box) (hint: use .value to get the text inside an <input>).
// Simon
// Your name is: Simon
// Submit



// 9e. Modify exercise 9d so that when you press 'Enter' in the <input>, it will also display the same message on the page (hint: use onkeydown and the event object).

// 9f. Continuing from 9e, create a function to reuse the code (if you already did this, skip this exercise).


// Challenge Exercises

// 9g. Create a file 9g.html and copy the code from 09-dom-projects.html into this file. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue.

// 7.99
// $17.990000000000002
// Calculate


// 9h. Let's create the project on the right:
// •
// Whenever we type in the text box,
// update the text on the page. // To do this, we'll learn another
// event called <input onkeyup="...">.
// This runs code after we press a key and release it (key comes up).
// •


// 9i. We'll improve the Cart Quantity project.
// • Make a copy of exercise 7i (see the solution for 7i if needed). Create a paragraph (<p></p>) to display the quantity.
// • Whenever we update the quantity, display it on the page instead of in the console. Also, display the quantity when page first loads.
// •
// Add to Cart +2 +3 +4 +5
// Remove from cart -2 -3
// Cart quantity: 6


// 9j. We'll improve the calculator project.
// • Make a copy of exercise 8h.
// • Whenever we update the calculation, display
// • it on the page instead of in the console.
// it on the page instead of in the console.