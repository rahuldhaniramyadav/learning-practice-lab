
const requestconnectionvalidation = (req, res) => {
    try {
        const allowedRequestConnection = ['fromuserid','touserid','status'];
        const checkRequestKey = Object.keys(req).every(k => {
            allowedRequestConnection.includes(k);
        });
        if (!checkRequestKey) {
            throw new error("Please send all mandotory fields");
        }
    } catch(e) {
        throw e;
    }
}

module.exports = {requestconnectionvalidation};