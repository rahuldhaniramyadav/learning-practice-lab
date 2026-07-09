const express = require('express');

const appCreate = express();

appCreate.listen(5450, () => {
    console.log("server is running");
});

// appCreate.all('/', (req, res, next) =>  {
//     //http://localhost:5450/user - it won't work
//     res.send("first Route response");
// });

// appCreate.use('/', (req, res, next) =>  {
//     //http://localhost:5450/user - it work
//     res.send("first Route response");
// });


appCreate.get('/', (req, res, next) =>  {
    console.log("first Route");
    next();
    res.send("first Route response"); // it will throw a erro
}, (req, res, next) =>  {
    console.log("2nd Route");
    res.send("2nd Route response");  // it will 2nd Route response
});