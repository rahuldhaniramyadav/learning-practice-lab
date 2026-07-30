const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    fromuserid: {
        type: mongoose.Schema.Types.ObjectId,
        reuired: true
    },
    touserid: {
        type: mongoose.Schema.Types.ObjectId,
        reuired: true
    },
    status: {
        type: String,
        enum: {
            values: ['interseted', 'ignored', 'received', 'accepted', 'rejected'],
            message: '{VALUE} is not supported in status.'
        }
    }
}, {timestamps: true});

const ConnectionRequestModel = mongoose.model('connectionrequest', connectionRequestSchema);

module.exports =  ConnectionRequestModel;
