const Cartproduct = require("../Model/Cartproduct")




const checkondata = async (req, res) => {
    const { name , checked } = req.body.checkdata;
    console.log(name);
    console.log(checked);

    try {

        let result = await Cartproduct.findOne({ randomid: name , status:checked});
        // console.log(result)
        if (result) {
            // console.log(result);
            res.json({ msg: "data fetched", d: [result] });
        }else{
            // return res.json({msg:"data is not get"})
            // console.log("data is not getted")
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = {checkondata}