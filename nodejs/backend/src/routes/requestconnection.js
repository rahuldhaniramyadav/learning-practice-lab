const express = require('express');
const requestConnectionRouter = express.Router();
const {jwtTokenAuth} = require('../helpers/jwttokenauth');

requestConnectionRouter.post('/', jwtTokenAuth, async (req, res) => {
    res.send("This is requestConnectionRouter");
});

requestConnectionRouter.post('/received', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

requestConnectionRouter.post('/ignored', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

module.exports = requestConnectionRouter;