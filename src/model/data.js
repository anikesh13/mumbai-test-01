const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('UserData', userSchema);
