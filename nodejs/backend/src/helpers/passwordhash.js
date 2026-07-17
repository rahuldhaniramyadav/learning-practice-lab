// check and create password hash here

const bcrypt = require('bcrypt');
const saltRounds = 10;
// saltRound - default => 10, we can consider it as layers of layer deep for encryption or round it take create a password hash, the more saltRound the more hard to crack for anauthorize users

//creating a hash of password
const passworBcryptdHash = (pass) => {
    return bcrypt.hash(pass, saltRounds);
}
// const passworBcryptdHash = password => bcrypt.hash(password, saltRounds);

//converting hash to plain and comparing
const passworBcryptdCompare = (pass, hash) => {
    console.log("sss", pass, hash);
    return bcrypt.compare(pass, hash);
}

// console.log(passworBcryptdHash);
module.exports = {
    passworBcryptdHash,
    passworBcryptdCompare
}


