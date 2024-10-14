const mongoose = require("mongoose")

const BathitemSchema = new mongoose.Schema({
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
    status: {
        type: Boolean,
        required: true
    },
    catagory:{
        type:String,
        required:true
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

const Bathitems = new mongoose.model("bathitems", BathitemSchema);
module.exports = Bathitems;