const express = require("express");
const { Addproduct, Showaccessories, Showbathitem, Showelectronics, Showgrocery, Showcosmetics } = require("../Controller/Newproduct");
const { Signup, Login } = require("../Controller/Logincontroller");
const { Order, Cartsave, Viewcartdata } = require("../Controller/Viewproduct");
const { Updatepassword } = require("../Controller/Updatepasscontroller");
const { checkondata } = require("../Controller/Checkcontroller");

const router = express.Router();

router.post("/signup", Signup)
router.post("/login", Login)
router.post("/addproduct", Addproduct)
router.post("/updatepassword", Updatepassword)


router.get("/showaccessories", Showaccessories)
router.get("/showbathitem", Showbathitem)
router.get("/showelectronics", Showelectronics)
router.get("/showgrocery", Showgrocery)
router.get("/showcosmetics", Showcosmetics)
router.get("/showcosmetics", Showcosmetics)


router.post("/cartsave", Cartsave)
router.post("/viewcartdata",Viewcartdata )


router.get("/order:id", Order)
router.post("/checkondata",checkondata)






module.exports = router;