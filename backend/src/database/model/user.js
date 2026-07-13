const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: { type: Number, min: 18, max: 50 },
    gender: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("users", userSchema);

module.exports = User;