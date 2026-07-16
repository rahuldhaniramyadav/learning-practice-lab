// Lesson 19 - Error handling

// whne we send http request acress the internet we get unepected erros
// like - internet connection , 404 etc 

// in the callback call we have to set another callback to hnadle the error  

like in xmlhttprequest

const url = new xmlhttprequest();
url.open('http..');
url.send();

url.addEventListner('load', () => {
  // action
})
// but for the error handlong we need to create anothe listner 
url.addEventListner('error', () => {
  // what we have to do in error
})

// == how we can handle the error in promises
new Promise(() => {

}).then(() => {

}).catch((error) => { // it is used to handle the error, here error is consit the informatin about the error

}) // it is used to handle the error  

// == how we can handle the error in aync/await 

// we can use try catch inside the fucntion like 

// async function a(params) {
//   try {
//     // await ...
//   } catch (error)  {

//   }
// }

// more details about try and catch

// we can use with any normal fucntin 

// try {
//   a();
// } catch {
//   console.log("aaa");
// }

//why we are using try/catch everywhere 

// it's mean to handle epected error  (code is correct, outside our control), we only uses unepevcted errors the erros which is outside our controle

// we can create manual error with throw 

// throw 'errpr'; // it will directly go to catch block and show error 

// throw doest not work in future 

// so we have another fucntion parameter in promise that is reject()


// new Promise((resolve, reject) => {
//   a(() => {
//     reject(); // it will thrown an error and go to the catch
//   })
// }).then(() => {

// }).catch((error) => { // it is used to handle the error, here error is consit the informatin about the error

// }) 

// types of request with fetch

// GET - get information from the backend 
// POST - create something 
// PUT - update something
// DELETE - delet something

// fetch('htt', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: {
      // JSON.stringify({
      //   cart: cart
      // })
//     cart: // pass the cart array after converting into json
//   }
// })

const a = async () => {
  const response = await fetch('htt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({[cart]: cart})
  })

  // const order = response.json() // this is also a promise so we need to use await heer 
  const order = await response.json()
  console.log(order);
}

