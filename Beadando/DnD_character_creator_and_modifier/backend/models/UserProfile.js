const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    profilePicture : {type: Image}
});

module.exports = mongoose.exports('UserProfile', userProfileSchema);