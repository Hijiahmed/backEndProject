const express = require("express");
const signUpRoute = express.Router();

const { signUp } = require("../controllers/signUp");

signUpRoute.post("/signUp", signUp);

module.exports = signUpRoute;
