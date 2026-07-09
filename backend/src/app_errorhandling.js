const express = require('express');

const appCreate = express();

appCreate.listen(5450, () => {
    console.log("server is running");
});

// Not a best way as / will bypass
// appCreate.use("/", (err, req, res, next) => { // order of the parameter matters
//     if (err) {
//         res.status(504).send("Internal server error")
//     }
// });

// appCreate.use("/user/login", (req, res) => {
//     throw new Error("Something when wrong"); // it will throw and error with file location and all 
// });

appCreate.use("/user/login", (req, res) => {
    try {
        // do some calculation
        throw new Error("Something when wrong");
    } catch (err) {
        res.status(504).send("Internal server error !!!");
    }
});


// always the final error handling at the end
appCreate.use("/", (err, req, res, next) => { // order of the parameter matters
    if (err) {
        res.status(504).send("Internal server error")
    }
});
