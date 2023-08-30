

require('dotenv').config()
const express = require("express");
const cors = require("cors");
const {userRoute} = require("./routes/userRoutes.js");
const {connect} = require('mongoose');

const app = express();


// middleware to work with json data

app.use(cors());
app.use(express.json())
app.use("/",userRoute)

app.listen(process.env.PORT || 3000,async() => {
    await connectToDataBase()
    console.log("server running on port :",process.env.PORT);
})

