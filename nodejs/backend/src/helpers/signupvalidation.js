const validator = require('validator');
const {validateEmail} = require('./validateEmail');
const checkEMail = require('./checkEmailExist');

const validateSignup = async (data) => {

    try {
        // we need check wheather the mandoty fields are send by sender
        const MANDATORY_FIELDS = ['firstName', 'lastName', 'email', 'password'];
        for (const field of MANDATORY_FIELDS) {
            if (!data[field]) {
                throw new Error("Please send all mandotory fields");
            }
        }

        const {firstName: FirstName, lastName, email, password, age, gender, profilePhoto, about, skills} = data;

        if (FirstName.length > 60) {
            throw new Error("FirstName should not be more than in 60 characters!!");
        }
        if (lastName.length > 60) {
            throw new Error("LastName should not be more than in 60 characters!!");
        }
        const emailError = validateEmail(email);
        if (emailError) {
            throw new Error(emailError);
        }
        // added check for email is already exist
        const isEmailExist = await checkEMail(email);
        if (isEmailExist) {
            throw new Error("email is already exists");
        }

        if (!validator.isStrongPassword(password)) {
            throw new Error("Please create a strong password !!");
        }
        if (profilePhoto && !validator.isURL(profilePhoto)){
            throw new Error("profilePhoto URL id is not valid !!");
        }
        if (age && (age < 18 || age > 60)){
            throw new Error("Age must be between 18 and 60 years!!");
        }
        const genders = ['male', 'female', 'others']
        if (gender && !genders.includes(gender)){
            throw new Error("Only Male, Female, or Other are allowed!!");
        }
        if (skills && skills.length > 20){
            throw new Error("You can select a maximum of 20 Skills !!");
        }
    } catch(e) {
        throw e;
    }
}

module.exports = {validateSignup};        