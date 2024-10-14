const mongoose = require("mongoose")

    const Cartproduct = new mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        randomid:{
            type:String,
            required:true
        },
        detail:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        status:{
        type:Boolean,
        required:true
        },
        image:{
            type:String,
            required:true
        }
    })

    const Cartsave = new mongoose.model("cartproduct",Cartproduct)

    module.exports = Cartsave;