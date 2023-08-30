

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, 'userName is required'],
        trim : true,
        maxLength: [20, 'UserName can not be more then 20 character']  
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("user",userSchema);
module.exports = {userModel}