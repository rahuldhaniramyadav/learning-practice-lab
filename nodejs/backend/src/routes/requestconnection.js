const express = require('express');
const requestConnectionRouter = express.Router();
const {jwtTokenAuth} = require('../helpers/jwttokenauth');
const {ConnectionRequestModel} = require('../database/model/connectionrequest');
const validateRequest = require('../helpers/requestconnectionvalidation');

requestConnectionRouter.post('/', jwtTokenAuth, async (req, res) => {
    const connectionRequestData = await ConnectionRequestModel.find();
    console.log(connectionRequestData);
    res.send("This is requestConnectionRouter");
});

// status can be ignored and send
requestConnectionRouter.post('/:status/:toUserId', jwtTokenAuth, async (req, res) => {
    try {
        // validate the request data
        await validateRequest(req);
        // get the sender id 
        const fromUserId = req.user._id;
        // from user id 
        const toUserId = req.params.toUserId;
        // check the request is existing
        const existingRequest = ConnectionRequestModel.find({
            fromuserid: fromUserId, touserid: toUserId
            // $or: [
            //     {fromuserid: fromUserId, touserid: toUserId}
            // // ]
        })
        if(existingRequest) {
            res.status(400).send("request is exist in system");
        }
        // check the status 
        const status = status;
        const allowedStatus = ['interseted', 'ignored', 'received', 'accepted', 'rejected'];
        const isAllowedStatus = allowedStatus.includes(status);
        if (!isAllowedStatus) {
            res.status(400).send("status is inapppriate");    
        }
        // save the reques in db
        // const requestData = new ConnectionRequestModel()
    } catch (e) {
        res.status(400).send("Unable to process your request");    
    }
});

requestConnectionRouter.post('/received:requestId', jwtTokenAuth, async (req, res) => {
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