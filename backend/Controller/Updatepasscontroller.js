const User = require("../Model/Usermodel")
const mongoose = require("mongoose")

const Updatepassword = async (req,res)=>{
const {email,password,newpassword} = req.body.data;
try {
    const filter = {email:email}
    const update = {password:newpassword}
    const result = await User.findOneAndUpdate(filter,update)
    if(result){
        res.json("password updated successfully")
    }else{
        res.json("password is not updated")
    }
} catch (error) {
    console.log(error)
}
}

module.exports = {Updatepassword}