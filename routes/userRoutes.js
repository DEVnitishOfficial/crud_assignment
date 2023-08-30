
const express = require("express");
const {registerUser, loginUser} = require ("../controllers/userController.js");

const userRoute = express.Router();

userRoute.post("/register",registerUser) // registering user
userRoute.post("login",loginUser) // login user

module.exports = {userRoute}


