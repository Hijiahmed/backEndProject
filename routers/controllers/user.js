const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModels");

const userProfile = async (req, res) => {
let {newName,newEmail}=req.body;
const user = req.token.userId

};
module.exports = {
    userProfile
};
