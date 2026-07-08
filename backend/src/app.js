const express = require('express'); // it will return a createApplication function from node_modules\express\lib\express.js

const createApp = express();

// if i use below route every route of /rahul with all method will call this handler only
// createApp.use("/rahul",(req, res) => {
//     res.send("This http GET method");
// });

// handle the file path
// createApp.get("/rahul/*filepath",(req, res) => {
//     // requesr url: http://localhost:5450/rahul/new.txt
//     // response: new.txt
//     res.send(`File: ${req.params.filepath.join('/')}`);
// });

// fetching the query
createApp.get("/rahul/",(req, res) => {
    console.log(req.query);
    // requesr url: http://localhost:5450/rahul/?username=R&age=20
    // response: [Object: null prototype] { username: 'R', age: '20' }
});

// fetching the params
createApp.get("/rahul/:userId/:userName",(req, res) => {
    console.log(req.params);
    // requesr url: http://localhost:5450/rahul/101/Test
    // response: [Object: null prototype] { userId: '101', userName: 'Test' }
});

createApp.get("/rahul*ya",(req, res) => {
    console.log("We can add anything between rahul and ya");
    // requesr url: http://localhost:5450/rahul123456789ya
});

// createApp.get("/rahul",(req, res) => {
//     res.send("This http GET method");
// });

// createApp.post("/rahul",(req, res) => {
//     res.send("This http POST method");
// });

// createApp.put("/rahul",(req, res) => {
//     res.send("This http PUT method");
// });

// createApp.patch("/rahul",(req, res) => {
//     res.send("This http PATCH method");
// });

// createApp.delete("/rahul",(req, res) => {
//     res.send("This http DELETE method");
// });

createApp.listen(5450, () =>  {
    console.log("Server is running");
});