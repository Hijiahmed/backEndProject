const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModels");

const signUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newSignUp = new userModel({ name, email, password });
    const response = await newSignUp.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  signUp,
};
