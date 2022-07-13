const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    user_id: String,
    name: String,
    tickets_id: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;