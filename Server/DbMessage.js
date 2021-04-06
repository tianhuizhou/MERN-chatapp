const mongoose = require('mongoose');

//data structure
const dataSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

module.exports = mongoose.model('messageContent', dataSchema);