const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: True 

    },
    email:{
        type:String,
        required: True 

    },
    password:{
        type:String,
        required: True 

    },
    data:{
        type:Data,
        default: Data.now 

    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
