const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModels");
const likeModel = require("../../db/models/likeModels");
const signUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newSignUp = new userModel({ name, email, password });
    const response = await newSignUp.save();
    const newLike = new likeModel({user:response._id,like:[]});
    const result = await newLike.save();
    res.status(201).json({response,result});

  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  signUp,
};

