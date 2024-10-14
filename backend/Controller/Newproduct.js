const Accessories = require("../Model/Accessories");
const Cosmetics = require("../Model/Cosmetics");
const Electronics = require("../Model/Electronics");
const Grocery = require("../Model/Grocery");
const Bathitem = require("../Model/Bathitems")

const Addproduct = async (req, res) => {
    const { catagory, detail, price, blogimage } = req.body.data;
    // console.log(req.body.data);


    if (catagory == "electronics") {
        const data = Electronics({
            detail: detail,
            price: price,
            imageurl: blogimage,
            randomid:Math.random().toString(36).substring(2, 18),
            status: true,
            catagory: "electronics",
            temstatus: false,
            date: new Date().toDateString()
        })
        const result = await data.save();
        res.json({ msg: "data saved successfully", d: result })


    }
    else if (catagory == "cosmetics") {
        const data = Cosmetics({
            detail: detail,
            price: price,
            status: true,
            randomid:Math.random().toString(36).substring(2, 18),
            imageurl: blogimage,
            catagory: "cosmetics",
            temstatus: false,
            date: new Date().toDateString()
        })
        const result = await data.save();
        res.json({ msg: "data saved successfully", d: result })

    }
    else if (catagory == "grocery") {
        const data = Grocery({
            detail: detail,
            price: price,
            randomid:Math.random().toString(36).substring(2, 18),
            status: true,
            imageurl: blogimage,
            catagory: "grocery",
            temstatus: false,
            date: new Date().toDateString()
        })
        const result = await data.save();
        res.json({ msg: "data saved successfully", d: result })

    }


    else if (catagory == "accessories") {
        const data = Accessories({
            detail: detail,
            price: price,
            imageurl: blogimage,
            randomid:Math.random().toString(36).substring(2, 18),
            status: true,
            catagory: "accessories",
            temstatus: false,
            date: new Date().toDateString()
        })
        const result = await data.save();
        res.json({ msg: "data saved successfully", d: result })

    }
    else if (catagory == "bathitem") {
        const data = Bathitem({
            detail: detail,
            price: price,
            randomid:Math.random().toString(36).substring(2, 18),
            status: true,
            imageurl: blogimage,
            catagory: "bathitem",
            temstatus: false,
            date: new Date().toDateString()
        })
        const result = await data.save();
        res.json({ msg: "data saved successfully", d: result })

    }
}

const Showelectronics = async (req, res) => {
    try {
        const result = await Electronics.find({ status: true })
        res.json(result)

        // if(result){
        //     res.json(result)
        // }
        // else{
        //     res.json("")
        // }
    } catch (error) {
        console.log(error)
    }
}
const Showgrocery = async (req, res) => {
    try {
        const result = await Grocery.find({ status: true })
        res.json(result)

        // if(result){
        //     res.json(result)
        // }
        // else{
        //     res.json("")
        // }
    } catch (error) {
        console.log(error)
    }
}
const Showaccessories = async (req, res) => {
    try {
        const result = await Accessories.find({ status: true })
        res.json(result)

        // if(result){
        //     res.json(result)
        // }
        // else{
        //     res.json("")
        // }
    } catch (error) {
        console.log(error)
    }
}
const Showbathitem = async (req, res) => {
    try {
        const result = await Bathitem.find({ status: true })
        res.json(result)

        // if(result){
        //     res.json(result)
        // }
        // else{
        //     res.json("")
        // }
    } catch (error) {
        console.log(error)
    }
}

const Showcosmetics = async (req, res) => {
    try {
        const result = await Cosmetics.find({ status: true })
        res.json(result)

        // if(result){
        //     res.json(result)
        // }
        // else{
        //     res.json("")
        // }
    } catch (error) {
        console.log(error)
    }
}




module.exports = { Addproduct, Showelectronics, Showgrocery, Showaccessories, Showbathitem, Showcosmetics }