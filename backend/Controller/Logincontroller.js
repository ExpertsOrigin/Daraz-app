const User = require("../Model/Usermodel")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const Signup = async (req, res) => {
    const { name, email, address, birthday, password, gender, phone, role } = req.body.data;
    const data = User({
        name: name,
        email: email,
        birthday: birthday,
        password: password,
        gender: gender,
        phone: phone,
        role: role,
        address: address,
        date: new Date().toDateString()
    })

    try {
        const result = await User.findOne({ email: email })
        if (result) {
            res.json("user already exist");
        } else {
            await data.save();
            res.json("User signed up successfully")
        }

        // res.json("data added successfully")
    } catch (error) {
        console.log(error)
    }
}




const Login = async (req, res) => {
    const { email, password } = req.body.data;
    try {
      
        const user = await User.findOne({ email:email,password:password })
        if (user && bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { id: user._id },
                'shhh',
                { expiresIn: "2h" }
            );
            user.token = token
            user.password = undefined

            // send token in user cookie

            // cookie section
            const options = {
                expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            res.status(200).cookie("token", token, options).json({msg:"logged in ",d:user})


        }


    }
    catch (error) {
        console.log(error)
    }
}


module.exports = { Signup, Login }