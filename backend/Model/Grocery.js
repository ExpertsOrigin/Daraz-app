const mongoose = require("mongoose")

const GrocerySchema = new mongoose.Schema({
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

const Grocery = new mongoose.model("grocery", GrocerySchema);
module.exports = Grocery;