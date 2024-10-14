const mongoose = require("mongoose")

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://muhammadnoman1999:123BMm.9@darazapp.0yvgt.mongodb.net/")
        console.log("Connected to database Successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connection;