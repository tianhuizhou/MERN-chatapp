const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    username: String,
    password: String,
});

module.exports = mongoose.model('accounts', dataSchema);