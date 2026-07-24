// i think - this is can come to noauth router

const express = require('express');
const User = require('../database/model/user');
const jwt = require('jsonwebtoken');
const { passworBcryptdCompare } = require('../helpers/passwordhash');

const auth = express.Router();

// login api 
auth.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const userData = await User.findOne({email: email});
        if (userData) {
            // check passowrd
            const isMatched = await passworBcryptdCompare(password, userData.password);
            if (isMatched) {
                const jwtToken = await jwt.sign({_id: userData._id }, process.env.JWT_PRIVATE_KEY, {expiresIn:"1h"}); // creating a jwt
                // const jwtToken = await User.jwtSign(); // creating a jwt with help of db methods but not worked need to check
                // cookie with options
                res.cookie('jwttoken', jwtToken, {
                    httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 24 * 60 * 60 * 1000
                });
                res.send("User login succesfully");
            } else {
                res.status(403).send("Please provide correct details !!");
            }
        } else {
            res.status(403).send("Please provide correct details !!");
        }
    } catch(e) {
        res.status(401).send("Please provide correct login details" + e.message);
    }
});

module.exports = auth; 