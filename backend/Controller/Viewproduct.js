const Accessories = require("../Model/Accessories");
const Cosmetics = require("../Model/Cosmetics");
const Electronics = require("../Model/Electronics");
const Grocery = require("../Model/Grocery");
const Bathitem = require("../Model/Productmodel")
const cartproduct = require("../Model/Cartproduct");


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const Getbathitem = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Bathitem.find({ randomid: id })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
const Getcosmetics = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Cosmetics.find({ randomid: id })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
const Getelectronics = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Electronics.find({ randomid: id })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
const Getgrocery = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Grocery.find({ randomid: id })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
const Getaccessories = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Accessories.find({ randomid: id })
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}


const Order = async (req, res) => {
    const { id } = req.params;

    try {

        let result = await Grocery.findOne({ randomid: id });
        if (result) {
            return res.json({ msg: "electronics data fetched", d: [result] });
        }

        result = await Electronics.findOne({ randomid: id });
        if (result) {
            return res.json({ msg: "electronics data fetched", d: [result] });

        }

        result = await Cosmetics.findOne({ randomid: id });
        if (result) {
            return res.json({ msg: "electronics data fetched", d: [result] });

        }

        result = await Accessories.findOne({ randomid: id });
        if (result) {
            return res.json({ msg: "electronics data fetched", d: [result] });

        }

        result = await Bathitem.findOne({ randomid: id });
        if (result) {
            return res.json({ msg: "electronics data fetched", d: [result] });

        }

        return res.json({ msg: "data not found in any collection" });

    } catch (error) {
        console.log(error);
    }
}





const Cartsave = async (req, res) => {
    const {id} = req.body;
  const {email} = req.body;

    try {

        let result = await Grocery.findOne({ randomid: id });

        if (!result) {
            result = await Electronics.findOne({ randomid: id });
        }
        if (!result) {
            result = await Cosmetics.findOne({ randomid: id });
        }

        if (!result) {
            result = await Accessories.findOne({ randomid: id });
        }

        if (!result) {
            result = await Bathitem.findOne({ randomid: id });
        }

        if (result) {
            const data = cartproduct({
                detail: result.detail,
                price: result.price,
                randomid:result.randomid,
                image: result.imageurl,
                status:result.status,
                email:email
            })
            const resulting = await data.save();
            return res.json({msg:"resulting", d:resulting})
        }

        return res.json("data not found in any collection");
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}







// const Cart = async (req, res) => {
//     const { id } = req.params;

//     try {

//         let result = await Grocery.findOne({ detail: id });
//         if (result) {
//             // console.log("Grocery data found");
//             return res.json(result);
//         }

//         result = await Electronics.findOne({ detail: id });
//         if (result) {
//             // console.log("Electronics data found");
//             return res.json(result);
//         }

//         result = await Cosmetics.findOne({ detail: id });
//         if (result) {
//             // console.log("Cosmetics data found");
//             return res.json(result);
//         }

//         result = await Accessories.findOne({ detail: id });
//         if (result) {
//             // console.log("Accessories data found");
//             return res.json(result);
//         }

//         result = await Bathitem.findOne({ detail: id });
//         if (result) {
//             // console.log("Bathitem data found");
//             return res.json(result);
//         }

//         // console.log("Data not found in any collection");
//         return res.json("data not found in any collection");
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// const showall = async (req, res) => {
//     const { detail } = req.body;

//     try {
//         console.log(`Searching for detail: ${detail}`);

//         let result = await Grocery.findOne({ detail: detail });
//         if (result) {
//             console.log("Grocery data found");
//             return res.json("grocery data fetched");
//         }

//         result = await Electronics.findOne({ detail: detail });
//         if (result) {
//             console.log("Electronics data found");
//             return res.json("electronics data fetched");
//         }

//         result = await Cosmetics.findOne({ detail: detail });
//         if (result) {
//             console.log("Cosmetics data found");
//             return res.json("cosmetics data fetched");
//         }

//         result = await Accessories.findOne({ detail: detail });
//         if (result) {
//             console.log("Accessories data found");
//             return res.json("accessories data fetched");
//         }

//         result = await Bathitem.findOne({ detail: detail });
//         if (result) {
//             console.log("Bathitem data found");
//             return res.json("bathitem data fetched");
//         }

//         console.log("Data not found in any collection");
//         return res.json("data not found in any collection");
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// }



const Viewcartdata = async (req, res) => {
    const {email} = req.body;
    try {
        const result = await cartproduct.find({email:email})
        res.json({ msg: "Cart Data", d: result })
    } catch (error) {

    }
}




module.exports = {
    
    Getaccessories,
    Getbathitem,
    Getcosmetics,
    Getgrocery,
    Getelectronics,
    Order,
    Cartsave, Viewcartdata
}

