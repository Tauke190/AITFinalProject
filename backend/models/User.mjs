import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    passWord : String,
    email: String,
    age: Number,
    gender: String,
    location: String,
    interests: [String],
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;


  