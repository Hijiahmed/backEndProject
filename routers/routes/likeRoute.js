const express = require("express");
const LikeRoute = express.Router();

const {postLike,deleteLike}=require("../controllers/like");
const { authentication } = require("../middlewares/authentication");

LikeRoute.post("/Like/:id",authentication,postLike)
LikeRoute.delete("/Like/:id",authentication,postLike)


module.exports = LikeRoute;