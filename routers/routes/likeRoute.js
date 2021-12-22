const express = require("express");
const LikeRoute = express.Router();

const {postLike,getLike,deleteLike}=require("../controllers/like");
const { authentication } = require("../middlewares/authentication");

LikeRoute.post("/Like/:id",authentication,postLike)
LikeRoute.get("/Like",authentication,getLike)
LikeRoute.delete("/Like/:id",authentication,deleteLike)


module.exports = LikeRoute;