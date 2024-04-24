const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://deepharsh859:voZxec-5jahzy-vucjyh@cluster0.ktr3si2.mongodb.net/mini")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
    
});

const User = mongoose.model('User', userSchema);

module.exports = {
	User
};