const express = require('express');
const databaseConn = require('./config/database');
const User = require('./database/model/user');
require('dotenv').config();

const appServer = express();

appServer.use('/', (req, res) => {
    res.send("END!!");
});
appServer.post('/signup', (req, res) => {
    const userDocument = {
        firstName: "Rahul",
        lastName: "Yadav",
        email: "a@a.com",
        age: 30,
        gender: "male"
    };
    try{
        User.save(userDocument);
        res.send("user data send successfully");
    } catch(e) {
        console.log('Something went wrong, Please try again!');
    }
});

databaseConn().then(() => {
    appServer.listen(process.env.PORT, () => {
        console.log("server started on port 5450")
    })
}).catch((err) => {
    console.log("there is some connection issue", err);
})
