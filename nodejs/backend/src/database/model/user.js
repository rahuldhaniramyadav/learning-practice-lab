const mongoose = require('mongoose');
const validator = require('validator');

// creating a common propery validator variable
const standardString = {
  type: String,
  required: true,
  trim: true,
  maxLength: 60,
};

const USER_STATUS = {
    PENDING_VERIFICATION: 0,
    ACTIVE: 1,
    SUSPENDED: 2,
    DEACTIVATED: 3
}

const userSchema = new mongoose.Schema({
    firstName: {type: String, maxLength: 60, trim: true},
    lastName: {...standardString},
    email: {unique: true, ...standardString, lowercase: true, 
        validate: (v) => {
            if (!validator.isEmail(v)){
                throw new Error("Email id is not valid");
            }
        } 
    },
    password: {...standardString}, // we can add regex for the password (atleast 1 number, 1 special character)
    age: { type: Number, min: [18, "You must be 18 years old"], max: [60, 'It is time to relax']},
    status: { type: Number, enum: Object.values(USER_STATUS), default: USER_STATUS.PENDING_VERIFICATION },
    gender: {type: String, validate: {
        validator: (value) => {
            return ['male', 'female', 'other'].includes(value);
        },
        message: props => `${props.value} is not valid gender`
    }},
    about: {type: String, maxLength: 300},
    profilePhoto: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'},
    skills: {type: [{type: String, trim: true}], validate:{ 
            validator: (array) => {
                return array.length <= 20
            },
        message: 'only 20 skills are allowed'
        }
    }
}, {
    timestamps: true,},
    {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;