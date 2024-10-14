const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    phone:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    token:{
        type:String,
        default:null
    }
    
})

const User = mongoose.model("user",Userschema);
module.exports = User;