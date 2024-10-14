const mongoose = require("mongoose")

const ElectronicSchema = new mongoose.Schema({
    detail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    catagory:{
        type:String,
        required:true
    },
    status: {
        type: Boolean,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    temstatus:{
        type:Boolean,
        required:true
    },
    randomid:{
        type:String,
        required:true
    }
})

const Electronics = new mongoose.model("electronics", ElectronicSchema);
module.exports = Electronics;