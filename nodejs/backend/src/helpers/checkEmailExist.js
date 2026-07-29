const User = require('../database/model/user');

const checkEMail = async (email) => {
    console.log(email);
    return await User.exists({email});
}

module.exports = checkEMail;