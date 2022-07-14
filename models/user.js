const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tickets_id: {
        type: String,
        required: true
    },
}, {
    versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;