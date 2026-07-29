const express = require('express');
const {validateSignup} = require('../helpers/signupvalidation');
const { passworBcryptdHash } = require('../helpers/passwordhash');
const { sanitizeData } = require('../helpers/signupdatasanitizatation');
const User = require('../database/model/user');

const noAuth = express.Router();

noAuth.post('/signup', async (req, res) => {
    try{
        await validateSignup(req.body);
        const {password} = req.body;
        req.body.password = await passworBcryptdHash(password);
        const finalSanitizeData = sanitizeData(req.body);
        const userDocument = new User(finalSanitizeData); 
        await userDocument.save();
        res.send("user data send successfully");
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
        console.log('Something went wrong, Please try again!', e.message);
    }
});

noAuth.get('/', async (req, res) => {
    const indexes = await User.collection.indexes();
    console.log(indexes);
    res.send("HIII");
});

module.exports = noAuth;