const express = require('express');
const User = require('../database/model/user');
const {jwtTokenAuth} = require('../helpers/jwttokenauth');

const profileRoute = express.Router();

console.log("HIii");

// get the profile access with cookie (reading cookie)
profileRoute.post('/', jwtTokenAuth, async (req, res) => {
    try{
        const userData = await User.findById(req.user._id);
        if (userData) {
            res.send(`Hi ${userData} !!`);
        } else {
            throw new Error("Unable to find user please login again!");
        }
    } catch(e) {
        res.status(403).send(`Some erro on authorization + ${e.message}`);
    }
});

// profileRoute.patch('/profile/:userId', async (req, res) => {
//     try{
//         const userId = req?.params?.userId;
//         // check for what user can update
//         // age, about, password, gender, profilePhoto, skills
//         const ALLOWED_FIELDS_UPDATE = ['age', 'about', 'password', 'gender', 'profilePhoto', 'skills'];
//         const isAllowed = Object.keys(req.body).every((k) => {
//             return ALLOWED_FIELDS_UPDATE.includes(k)
//         });
//         if (isAllowed) {
//             const userData = await User.findOneAndUpdate({_id: userId}, req.body, { returnDocument: 'after' });
//             res.send("user data update successfully" + userData);
//         } else {
//             res.send("please share appropriate data");
//         }
//     } catch(e) {
//         res.status(401).send("Please try again!!" + e.message);
//         console.log('Something went wrong, Please try again!', e.message);
//     }
// });

module.exports = profileRoute;