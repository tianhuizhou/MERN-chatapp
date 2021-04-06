import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    username: String,
    password: String,
});

export default mongoose.model('accounts', dataSchema);