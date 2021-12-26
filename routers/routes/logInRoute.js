const express = require("express");
const loginRoute = express.Router();
//
const { login } = require("../controllers/logIn");
//
loginRoute.post("/login", login);
//
module.exports = loginRoute;
