const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModels");

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const cheeck = await bcrypt.compare(password, user.password);
      if (cheeck === true) {
        const payload = { userId: user._id, userName: user.name };
        const token = jwt.sign(payload, "hiji");
        res.status(200).json({ token });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };
