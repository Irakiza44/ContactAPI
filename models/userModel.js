const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "please add a user name"],
    },
    email: {
        type: String,
        required: [true, "please add user email"],
        unique: [true, "Eamil address already taken"],
    },
    password: {
        type: String,
        required: [true, "please add user password"],
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);