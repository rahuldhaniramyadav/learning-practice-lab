const express = require('express');
const databaseConn = require('./config/database');
const User = require('./database/model/user');
require('dotenv').config();
const validator = require('validator');
const {validateSignup} = require('./helpers/signupvalidation');
const { sanitizeData } = require('./helpers/signupdatasanitizatation');
const { passworBcryptdHash, passworBcryptdCompare } = require('./helpers/passwordhash');

const appServer = express();

appServer.use(express.json()); // parse/add the json data to JS object

// creating an user with validation
appServer.post('/signup', async (req, res) => {
    try{
        // validation check for mandotary fields
        validateSignup(req.body);
        // creating a passord
        const {password} = req.body;
        // setting the pasword in request
        req.body.password = await passworBcryptdHash(password);
        // data sanitization
        const finalSanitizeData = sanitizeData(req.body);
        // saving finalSanitizeData into document
        const userDocument = new User(finalSanitizeData); 
        await userDocument.save();
        res.send("user data send successfully");
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
        console.log('Something went wrong, Please try again!', e.message);
    }
});


// login api 
appServer.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        // validate email 
        // if(!validateEmail(email)) {
            const userData = await User.findOne({email: email});
            if (userData) {
                // check passowrd
                console.log("sss", password, userData.password);
                const isMatched = await passworBcryptdCompare(password, userData.password);
                console.log("aa", isMatched);
                if (isMatched) {
                    res.send("User login succesfully");
                } else {
                    res.status(403).send("Please provide correct details !!");
                }
            } else {
                res.status(403).send("Please provide correct details !!");
            }
        // }
    } catch(e) {
        res.status(401).send("Please provide correct login details");
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

appServer.patch('/profile/:userId', async (req, res) => {
    try{
        const userId = req?.params?.userId;
        // check for what user can update
        // age, about, password, gender, profilePhoto, skills
        const ALLOWED_FIELDS_UPDATE = ['age', 'about', 'password', 'gender', 'profilePhoto', 'skills'];
        const isAllowed = Object.keys(req.body).every((k) => {
            return ALLOWED_FIELDS_UPDATE.includes(k)
        });
        if (isAllowed) {
            const userData = await User.findOneAndUpdate({_id: userId}, req.body, { returnDocument: 'after' });
            res.send("user data update successfully" + userData);
        } else {
            res.send("please share appropriate data");
        }
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
        console.log('Something went wrong, Please try again!', e.message);
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