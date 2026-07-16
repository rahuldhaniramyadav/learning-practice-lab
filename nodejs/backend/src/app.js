const express = require('express');
const databaseConn = require('./config/database');
const User = require('./database/model/user');
require('dotenv').config();

const appServer = express();

appServer.use(express.json()); // parse/add the json data to JS object

// creating an user with validation
appServer.post('/signup', async (req, res) => {
    const userDocument = new User(req.body);
    try{
        await userDocument.save();
        res.send("user data send successfully");
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
        console.log('Something went wrong, Please try again!', e.message);
    }
});

// try to fetch the fullname
appServer.post('/user', async (req, res) => {
    try{
        // const userData = await User.find(req.body);
        const userData = await User.find();
        if (userData.length !== 0) {
            console.log(userData.constructor.name);
            // console.log(userData.schema.virtuals);
            console.log(userData.fullName);
            res.send(userData);
        } else {
            res.send("no user data found!");
        }
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
    }
});

databaseConn().then(() => {
    appServer.listen(process.env.PORT, () => {
        console.log("server started on port 5450")
    })
}).catch((err) => {
    console.log("there is some connection issue", err);
})

//