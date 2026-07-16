// Lesson 17 - Object oriented programming

// another style of programming - another way to write the code 

// organizing code into object 

// in JS we use procekdure programming - step-step by instruction

// function inside a object is called method 

// OOPs tries to represent the real world, anything you can see is object we have properties, method of anything

// easy to create multiple objects

// how we can create muliple fucntion 

// in oops programming thing is use pascal case - start every word with capital

// function Cart() {
//   const a = {
//     name: 'A',
//     age: 30
//   }
//   return a;
// }

// const objName1 = Cart();
// objName1 //{name: 'A', age: 30}
// const objName2 = Cart();
// objName2 //{name: 'A', age: 30}

// create a function that generate a function 

// OOPs has special feature called class 

// class specific design to generate a object

// class Cart { // we use PascalCase thing which used to create object, it is object genrator
//   a = 0
//   b = undefined

//   d() {
//     console.log("A");
//   }
// }

// const objName1 = new Cart();  // it is instance of class
// const objName2 = new Cart();  // it is instance of class

// A class is object generator 

// Benefits of classes 

// A class is look like an object that it generates, it is cleaner than using a function;
// it has features of oops, constructor (lets us run setup code after creating an object)

// name must be constructor and should not return anything

// class is better way to create a object and organize code 

// private property and methods, usning # we can make property private inside the class method are private which is not cnahinble outside the class

// if in class we define  #a = 0
// objName1.#a = 12// it is an issue as property are the private score which is only accesible inside the class

// class Product {
//   name;
//   price;
//   image;
// }
// const obj1 = new Product();
// obj1; //Product {name: undefined, price: undefined, image: undefined} // create object from class now we can update the value

//converting an object into a class

// class Product {
//   name;
//   price;
//   image;
//   constructor(productDetails) { // here we are converting object into class
//     this.name = productDetails.name;
//     this.price = productDetails.price;
//     this.image = productDetails.image;
//   }
// }
// const obj1 = new Product({  
//   name: 'A',
//   price: 12,
//   image: 'img.png'
// });
// obj1; //Product {name: 'A', price: 12, image: 'img.png'}

// == Inheritance - reuse code between classes 

// class Product {
//   name;
//   price;
//   image;
//   constructor(productDetails) { // here we are converting object into class
//     this.name = productDetails.name;
//     this.price = productDetails.price;
//     this.image = productDetails.image;
//   }
// }
// class Clothing extends Product {
//   size;
//   constructor(productDetails) {
//     super(productDetails);
//     this.size = productDetails.size;
//   }
// }
// const obj1 = new Clothing({  
//   name: 'A',
//   price: 12,
//   image: 'img.png'
// });
// obj1; //Clothing {name: 'A', price: 12, image: 'img.png', size: undefined}

// if dont create a constructore in child class than by default the parent constructor is worked 

// discriminator propert - which tell which class should we use, any etra property which is only applicable for the specific class

// override or replace the parent method in child class it call - method overriding, if we need access of paremt than we need use the super.methodName()

// polymorphism - use a method without knowing the class 

// build-in classes = classes that are provided by the language 

// new Date() - generate the object that represent the current date

//   const date = new Date();
//   date; // Wed Mar 26 2025 22:26:41 GMT+0530 (India Standard Time)
//   console.log(date.toLocaleDateString()); //26/03/2025
//   console.log(date.toLocaleTimeString()); //22:26:41

// ==

// this 

// this represenrt the object access its own property, this can be used anywhere in our code

// originally in JS - this = window 
// when they released JS modules, inside a module, this = undefined

const b = {
  a: 1,
  b: this.a // object b is not created yet so theis will be undefined
}

function a() {
  console.log(this);
}
a();
a.call() // it will trigger a funcation 

// arraw function do not change the value of this 


const objec4 = {
  method: () => {
      console.log(this); // it will same as outside the value
  }
}
objec4.method();

const object5 = {
  method() {
    console.log(this); // it will point the object5 only

    [1,2,3].forEach(() => {
      console.log(this); // it also point the object5 only, arrow fucntion is deigned this way but in the normal fucntion we have issue because this access the current parent
    })
  }
}

// / it has same value as outside the arrow function

// we can use procedure programming language but we must know the OOPs programming language 
// if we are working with team we should focus on OOPs programming language 

