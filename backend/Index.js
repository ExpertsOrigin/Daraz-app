const express = require("express")
const Cors = require("cors")
const Connection = require("./Connection/Connection")
const router = require("./Route/Index-router")
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.use(express.json());
Connection();
app.use(Cors());
app.use(router);


app.listen(5000, () => {
    console.log("server running on port 5000")
})