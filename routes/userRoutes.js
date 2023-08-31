
const express = require("express");
const {home,registerUser, loginUser} = require ("../controllers/userController.js");

const userRouter = express.Router();

userRouter.get("/",home)
userRouter.post("/register",registerUser) // registering user
userRouter.post("/login",loginUser) // login user

module.exports = userRouter


