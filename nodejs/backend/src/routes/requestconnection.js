const express = require('express');
const requestConnectionRouter = express.Router();
const {jwtTokenAuth} = require('../helpers/jwttokenauth');
const {ConnectionRequestModel} = require('../database/model/connectionrequest');
const {ConnectionRequestModel} = require('../database/model/connectionrequest');

requestConnectionRouter.post('/', jwtTokenAuth, async (req, res) => {
    const connectionRequestData = await ConnectionRequestModel.find();
    console.log(connectionRequestData);
    res.send("This is requestConnectionRouter");
});

requestConnectionRouter.post('/received:requestId', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

requestConnectionRouter.post('/ignored:userId', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

requestConnectionRouter.post('/send:userId', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

requestConnectionRouter.post('/accepted:requestId', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

requestConnectionRouter.post('/rejected:requestId', jwtTokenAuth, async (req, res) => {
    // res.send("You are authorize user " + userData.firstName);
    res.send("You are authorize user ");
});

module.exports = requestConnectionRouter;