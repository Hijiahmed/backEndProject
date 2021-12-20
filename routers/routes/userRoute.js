const express = require("express");
const userRoute = express.Router();
//
const { userProfile,deleteUser,updateName,updateImg } = require("../controllers/user");
const { authentication } = require("../middlewares/authentication");
//
userRoute.get("/user",authentication, userProfile);
userRoute.delete("/user/:id",authentication, deleteUser);
userRoute.put("/userName",authentication, updateName);
userRoute.put("/userImg",authentication, updateImg);
//
module.exports = userRoute;
