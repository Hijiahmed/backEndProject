const express = require("express");
const userRoute = express.Router();

const { userProfile } = require("../controllers/user");

userRoute.get("/signUp", userProfile);

module.exports = userRoute;
