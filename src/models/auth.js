const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const AuthModel = mongoose.model('user', authSchema);

module.exports = AuthModel;