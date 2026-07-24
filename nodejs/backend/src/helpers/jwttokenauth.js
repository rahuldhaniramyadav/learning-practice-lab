const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../database/model/user');

const jwtTokenAuth = async (req, res, next) => {
    try {
        const jwtTokenData = await jwt.verify(req.cookies?.jwttoken, process.env.JWT_PRIVATE_KEY);
        if(jwtTokenData?._id) {
            const userData = await User.findById(jwtTokenData?._id)
            if (userData) {
                req.user = userData; // adding user data in req
                next();
            } else {
                throw new Error("Unable to fine user");
            }
        } else {
            throw new Error("Something went wrong");
        }
    } catch(e) {
        res.status(401).send("Please login again !" + e.message);
    }
}

module.exports = {
    jwtTokenAuth
}