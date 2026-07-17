const validator = require('validator');

const validateEmail = (email) => {
    if (!email) {
        return "Email is required";
    }
    if (!validator.isEmail(email)){
        return "Email id is not valid !!";
    }
    return null
}

module.exports = {validateEmail}