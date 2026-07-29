const express = require('express');
const databaseConn = require('./config/database');
const User = require('./database/model/user');
const { passworBcryptdHash, passworBcryptdCompare } = require('./helpers/passwordhash');
const cookieParser = require('cookie-parser'); // reading cookie
const jwt = require("jsonwebtoken"); //creating and reading jwt

const {jwtTokenAuth} = require('./helpers/jwttokenauth');

// router
const noAuth = require('./routes/noauth');
const auth = require('./routes/auth');
const profileRouteData = require('./routes/profile');
const requestConnection = require('./routes/requestconnection');

const appServer = express();

appServer.use(express.json()); // parse/add the json data to JS object
appServer.use(cookieParser()); // reading each and every cookie from req

appServer.use('/', noAuth);
appServer.use('/', auth);
appServer.use('/profile/', profileRouteData);
appServer.use('/connectionrequest/', requestConnection);

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