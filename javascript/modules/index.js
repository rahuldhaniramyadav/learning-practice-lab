// Lesson 14 - Modules

// IN last video we have added multiple js file for amazon products 
{/* <scrip src="inde.js"></scrip>
<scrip src="amazon/inde.js"></scrip>

here if we use same variable namy by mistakely it will make the conlcit in the code  */}

// there are lost of so it will be easy we accidentaly creat multipl variable so that is problem 

// how to solve the problem - we can use moudle which will no conlict the same varaible name with different files

// What to we do in module 

  // - Create a file 
  // - Don't load the file with <script>

  // any variable we create inside the file, will be contained inside the file 

// Get a variable out of the file 

  // Add type="module" attribute <scrip type="module" src="amazon/inde.js"></scrip>
  // Export // in the inde.js file - export const cart = [];
  // Import // in the amazon/inde.js file - import {cart} from 'inde.js';

// we need to pull all the import in top of the file

// Benefits of the module - better way to organize our code

// we can have naming conflict solution and we can pass variable to other file

// if we want to use same varaibel name after importing so we can use alice of the variable like 

// import {cart as myCart} from 'inde.js';
// const cart = [];

// while we loading via script we need to follow the order but in the module file we not require the order of the file importing 

// if we want to import more values from the file we have one more alternative like 

// in inde.js

  // export const cart = [];
  // export const a = () => {
  //   console.log("A");
  // }

// import * as cart from 'inde.js'; // now all import of the cart we can access via cart
// cart.cart and cart.a 

