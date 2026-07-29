const express = require('express');
const User = require('../database/model/user');
const {jwtTokenAuth} = require('../helpers/jwttokenauth');
const { passworBcryptdCompare } = require('../helpers/passwordhash');

const profileRoute = express.Router();

// get the profile access with cookie (reading cookie)
profileRoute.get('/view', jwtTokenAuth, async (req, res) => {
    try{
        // const userData = await User.findById(req.user._id);
        const userData = await User.findOne({_id: req.user._id});
        if (userData) {
            res.send(`Hi ${userData.firstName} !!`);
        } else {
            throw new Error("Unable to find user please login again!");
        }
    } catch(e) {
        res.status(403).send(`Some error on authorization + ${e.message}`);
    }
});

profileRoute.patch('/edit/', jwtTokenAuth, async (req, res) => {
    try{
        // check for what user can update
        // age, about, password, gender, profilePhoto, skills
        const ALLOWED_FIELDS_UPDATE = ['age', 'about', 'firstName', 'lastName', 'gender', 'profilePhoto', 'skills'];
        const isAllowed = Object.keys(req.body).every((k) => {
            return ALLOWED_FIELDS_UPDATE.includes(k);
        });
        if (isAllowed) {
            const userData = await User.findOneAndUpdate({_id: req.user._id}, req.body, { returnDocument: 'after' });
            res.send("user data update successfully" + userData);
        } else {
            res.send("please share appropriate data");
        }
    } catch(e) {
        res.status(401).send("Please try again!!" + e.message);
        console.log('Something went wrong, Please try again!', e.message);
    }
});

// user forget their password
profileRoute.patch('changepassword', (req, res) => {
    // we need to verifycation with mobile OTP and allow for change password
});

// user reset the password
profileRoute.patch('/resetpassword/', jwtTokenAuth, async (req, res) => {
    // reset the password
    try {
        // first checking the fields allowed
        const ALLOWED_FIELDS = ['old_password', 'new_password'];
        const isfieldsAllowed = Object.keys(req.body).every((k) => {
            return ALLOWED_FIELDS.includes(k);
        })
        if (isfieldsAllowed) {
            const userData = await User.findOne({email: req.user.email});
            if (userData) {
                // check passowrd old password
                const isMatched = await passworBcryptdCompare(req.body.old_password, userData.password);
                console.log(req.body.old_password, userData.password, userData);
                if (isMatched) {
                    // update with new password
                    const updateUserPassword = await User.findOneAndUpdate({_id: req.user._id}, {password: req.body.new_password}, { returnDocument: 'after' });
                    if (updateUserPassword) {

                        const jwtToken = await jwt.sign({_id: updateUserPassword._id }, process.env.JWT_PRIVATE_KEY, {expiresIn:"1h"}); 
                        // cookie with options
                        res.cookie('jwttoken', jwtToken, {
                            httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 24 * 60 * 60 * 1000
                        });
                        res.send("password change succesfully");
                    }
                } else {
                    res.status(403).send("Your old password is wrong");            
                }
            } else {
                res.send("Unable to find user data, Please login and try");
            }
        } else {
            res.send("Please send appropriate data");
        }
    } catch(e) {
        res.status(403).send("Unable to change the password" + e.message);
    }
});

module.exports = profileRoute;