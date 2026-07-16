// Lesson 15 - External libraries

// External -  the code is outside our project 

{/* <script src="https://unpkg.com/supersimpledev@1.0.1/hello.js"></script>
function hello() {
  console.log('hello');
}

after that we can run the hello() */}

// priority is we load external library first and than our custom code

// Why we need - we can use share code, save time and avoid duplicating work 

// DayJs library - which we used to get the date and every eternal libraries has the document how we can use the code
// if we find anything complicated try to search for the libraries, before writing the code itself;

// How we can integrate the libraries + JS modules 

{/* <script> - it directky load the script data and might conflict with same name */}

// ESM Version - EcmaScript Module -it work with JS module 

{/* <script src="https://unpkg.com/supersimpledev@1.0.1/hello.esm.js"></script>
export function hello() {
  console.log('hello');
}

with export it allowing us to follow thw js module  */}

// so now we can use 

// import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

// for the dayJS as well we have the ESM version 

// default export - another way of exporting, we can use it when we only want to export 1 thing 

// import rahul from './rahul';
// but we need to use it on same way for the export
// export default rahul;

// each file can have only one default but can have multiple export

// named export and default export

  // import rahul, {add, delete} from './rahul';

  // in rahul.js file 

  // export const add = () => {
  //   console.log("A");
  // }

  // export const delete = () => {
  //   console.log("B");
  // }

  // export default rahul = () => {
  //   console.log("C");
  // }

  // a fucntion is rerun is the code is called - recursion

  // ==



  function performOperation(N, operation) {
    for(let i = 0; i < operation.length; i++) {
        console.log(typeof operation[i]);
        let varI = operation[i].split(/\s+/);
        console.log(varI);
    }
}
performOperation(2, 'mergeArray [1,2][3,4]');
performOperation(2, 'mergeObject {a:1,b:1}{b:2,c:3}');