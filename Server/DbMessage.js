import mongoose from 'mongoose'

//data structure
const dataSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messageContent', dataSchema);