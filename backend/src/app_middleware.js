const express = require('express');

const appCreate = express();

appCreate.listen(5450, () => {
    console.log("server is running");
});

// create a middleware for all the admin route
// Step 1 - same code on each route
// appCreate.use('/admin/getCustomer', (req, res, next) => {
//     // need to check the authentication
//     let isAdmin = true;
//     if (!isAdmin) {
//         res.status(401).send("Please authorized first");
//     }
//     next();
// }, (req, res) => {
//     // calculate the user data
//     res.send("Send the user data");
// });
// appCreate.use('/admin/getProducts', (req, res, next) => {
//     // need to check the authentication
//     let isAdmin = false;
//     if (!isAdmin) {
//         res.status(401).send("Please authorized first");
//         console.log("Failed");
//     }
//     console.log("success");
//     next();
// }, (req, res) => {
//     // calculate the user data
//     res.send("Send the product data");
// });

// Step 2 // same code on top of route
// appCreate.use('/admin', (req, res, next) => {
//     let isAdmin = false;
//     if (!isAdmin) {
//         res.status(401).send("Please authorized first11");
//     }
//     next();
// });
// appCreate.use('/admin/getProducts', (req, res, next) => {
//     res.send("Send the product data");
// });


// Step 3: create middleware and import here

const { adminAuth } = require('./middleware/auth');

appCreate.use('/admin', adminAuth, (req, res) => {
    res.send("Send the product data");
});