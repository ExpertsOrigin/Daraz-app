const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    detail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    // image: {
    //     type: [String],
    //     required: true
    // },
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
    }
})

const Product = new mongoose.model("product", ProductSchema);
module.exports = Product;