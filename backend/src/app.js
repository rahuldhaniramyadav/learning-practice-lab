const express = require('express'); // it will return a createApplication function from node_modules\express\lib\express.js

const createApp = express();

// console.log(createApp);
createApp.use("/rahul",(req, res) => {
    res.send("Hello from server");
    console.log("Hey hii");
});

createApp.use("/boss",(req, res) => { // it is route with req & res, if anythig is matched it will execute
    res.send("Hello from BOSS server");
    console.log("Hey hii");
});

createApp.use("/",(req, res) => {
    res.send("This is default route!!");
    console.log("Hey hii 11");
});

createApp.listen(5450, () =>  {
    console.log("Server is running");
});